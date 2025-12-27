'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Page, Song } from '@/types';
import Sidebar from '@/components/Sidebar';
import Editor from '@/components/Editor';
import MusicPanel from '@/components/MusicPanel';
import LofiPanel from '@/components/LofiPanel';
import PortfolioSection from '@/components/PortfolioSection';

export default function Home() {
  // --- Notion State ---
  const [pages, setPages] = useState<Page[]>([]);
  const [currentPageId, setCurrentPageId] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showMusic, setShowMusic] = useState(false);
  const [showLofi, setShowLofi] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);

  // --- Spotify State ---
  const [songs, setSongs] = useState<Song[]>([]);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // --- Resize State ---
  const [panelWidth, setPanelWidth] = useState(400);
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // --- Mobile State ---
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobilePanelOpen, setIsMobilePanelOpen] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMobileMenuOpen(false);
        setIsMobilePanelOpen(false);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // --- Resize Handlers ---
  const startResizing = useCallback(() => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback((e: MouseEvent) => {
    if (!isResizing || !containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const newWidth = containerRect.right - e.clientX;
    // Clamp between 300 and 600
    setPanelWidth(Math.max(300, Math.min(600, newWidth)));
  }, [isResizing]);

  useEffect(() => {
    if (isResizing) {
      window.addEventListener('mousemove', resize);
      window.addEventListener('mouseup', stopResizing);
    }
    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [isResizing, resize, stopResizing]);

  // --- Theme Toggle ---
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // --- Music Toggle ---
  const toggleMusic = () => {
    setShowMusic(!showMusic);
    setShowLofi(false);
  };

  // --- Lofi Toggle ---
  const toggleLofi = () => {
    setShowLofi(!showLofi);
    if (!showLofi) setShowMusic(true);
  };

  // --- Portfolio Toggle ---
  const showPortfolioView = () => {
    setShowPortfolio(true);
  };

  // --- Select Page (Notion) ---
  const selectPage = (id: string) => {
    setCurrentPageId(id);
    setShowPortfolio(false);
  };

  // --- Load Pages & Songs ---
  useEffect(() => {
    const savedPages = localStorage.getItem('mix2-pages');
    if (savedPages) {
      const parsed = JSON.parse(savedPages);
      setPages(parsed);
      if (parsed.length > 0) setCurrentPageId(parsed[0].id);
    } else {
      const initialPage: Page = {
        id: '1',
        title: 'Welcome to Hello World',
        content: 'This is the ultimate blend of Notes + Music. Take notes and listen to music seamlessly.',
        emoji: '🚀',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      setPages([initialPage]);
      setCurrentPageId('1');
    }

    searchSongs('pop');
  }, []);

  // --- Save Pages ---
  useEffect(() => {
    if (pages.length > 0) {
      localStorage.setItem('mix2-pages', JSON.stringify(pages));
    }
  }, [pages]);

  // --- Page Actions ---
  const addPage = () => {
    const newPage: Page = {
      id: Date.now().toString(),
      title: '',
      content: '',
      emoji: '📄',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setPages([...pages, newPage]);
    setCurrentPageId(newPage.id);
  };

  const updatePage = (id: string, updates: Partial<Page>) => {
    setPages(pages.map((p) => (p.id === id ? { ...p, ...updates, updatedAt: new Date().toISOString() } : p)));
  };

  const deletePage = (id: string) => {
    const updated = pages.filter((p) => p.id !== id);
    setPages(updated);
    if (currentPageId === id) {
      setCurrentPageId(updated.length > 0 ? updated[0].id : null);
    }
  };

  // --- Song Actions ---
  // Reliable high-quality fallback songs using SoundHelix (proven to work with direct linking)
  const fallbackSongs: Song[] = [
    { id: 'f1', title: 'Electronic Dreams', artist: 'SoundHelix 1', coverUrl: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?w=300&h=300&fit=crop', previewUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
    { id: 'f2', title: 'Ocean Waves', artist: 'SoundHelix 2', coverUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop', previewUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
    { id: 'f3', title: 'Mountain Air', artist: 'SoundHelix 3', coverUrl: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=300&h=300&fit=crop', previewUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
    { id: 'f4', title: 'City Lights', artist: 'SoundHelix 4', coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop', previewUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' },
    { id: 'f5', title: 'Sunset Chill', artist: 'SoundHelix 8', coverUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=300&h=300&fit=crop', previewUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3' },
    { id: 'f6', title: 'Morning Dew', artist: 'SoundHelix 10', coverUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&h=300&fit=crop', previewUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3' },
    { id: 'f7', title: 'Midnight City', artist: 'SoundHelix 16', coverUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&h=300&fit=crop', previewUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3' },
    { id: 'f8', title: 'Acoustic Guitar', artist: 'SoundHelix 12', coverUrl: 'https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?w=300&h=300&fit=crop', previewUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3' },
  ];

  const searchSongs = async (query: string) => {
    const itunesUrl = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=music&limit=16`;
    const jamendoUrl = `https://api.jamendo.com/v3.0/tracks/?client_id=56d3047d&format=json&limit=16&search=${encodeURIComponent(query)}&include=musicinfo&audioformat=mp32`;

    const fetchWithTimeout = async (url: string, timeout = 5000) => {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), timeout);
      try {
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(id);
        return response;
      } catch (e) {
        clearTimeout(id);
        throw e;
      }
    };

    // Attempt 1: iTunes Direct
    try {
      const response = await fetchWithTimeout(itunesUrl, 3000);
      if (response.ok) {
        const data = await response.json();
        const results = data.results?.filter((item: any) => item.previewUrl).map((item: any) => ({
          id: item.trackId?.toString() || Math.random().toString(),
          title: item.trackName,
          artist: item.artistName,
          coverUrl: item.artworkUrl100?.replace('100x100', '300x300'),
          previewUrl: item.previewUrl,
        }));
        if (results && results.length > 0) {
          setSongs(results);
          return;
        }
      }
    } catch (e) {
      console.warn('iTunes direct failed, trying proxy...');
    }

    // Attempt 2: iTunes Proxy (AllOrigins)
    try {
      const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(itunesUrl)}`;
      const response = await fetchWithTimeout(proxyUrl, 6000);
      if (response && response.ok) {
        const text = await response.text();
        if (text && text.trim().startsWith('{')) {
          const data = JSON.parse(text);
          const results = data.results?.filter((item: any) => item.previewUrl).map((item: any) => ({
            id: item.trackId?.toString() || Math.random().toString(),
            title: item.trackName,
            artist: item.artistName,
            coverUrl: item.artworkUrl100?.replace('100x100', '300x300'),
            previewUrl: item.previewUrl,
          }));
          if (results && results.length > 0) {
            setSongs(results);
            return;
          }
        }
      }
    } catch (e) {
      console.warn('AllOrigins failed, trying CodeTabs...');
    }

    // Attempt 3: iTunes Proxy (CodeTabs)
    try {
      const proxyUrl = `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(itunesUrl)}`;
      const response = await fetchWithTimeout(proxyUrl, 6000);
      if (response && response.ok) {
        const data = await response.json();
        const results = data.results?.filter((item: any) => item.previewUrl).map((item: any) => ({
          id: item.trackId?.toString() || Math.random().toString(),
          title: item.trackName,
          artist: item.artistName,
          coverUrl: item.artworkUrl100?.replace('100x100', '300x300'),
          previewUrl: item.previewUrl,
        }));
        if (results && results.length > 0) {
          setSongs(results);
          return;
        }
      }
    } catch (e) {
      console.warn('CodeTabs failed, trying Jamendo...');
    }

    // Attempt 4: Jamendo
    try {
      const response = await fetchWithTimeout(jamendoUrl, 5000);
      if (response && response.ok) {
        const data = await response.json();
        const results = data.results?.filter((item: any) => item.audio).map((item: any) => ({
          id: item.id?.toString() || Math.random().toString(),
          title: item.name,
          artist: item.artist_name,
          coverUrl: item.image || item.album_image,
          previewUrl: item.audio,
        }));
        if (results && results.length > 0) {
          setSongs(results);
          return;
        }
      }
    } catch (e) {
      console.warn('Jamendo failed, using hardcoded fallback.');
    }

    // Final Fallback
    setSongs(fallbackSongs);
  };

  const playSong = (song: Song) => {
    if (currentSong?.id === song.id) {
      togglePlay();
      return;
    }

    // Stop current audio before playing new one
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
      audioRef.current = null;
    }

    // Update current song (show in player bar even without playable audio)
    setCurrentSong(song);
    setProgress(0);

    // Check if song has a valid preview URL
    if (!song.previewUrl || song.previewUrl.trim() === '') {
      // No preview available - just show in player bar without playback
      setIsPlaying(false);
      audioRef.current = null;
      return;
    }

    // Create new audio element
    const audio = new Audio();
    audioRef.current = audio;

    // Set up event handlers before loading
    audio.ontimeupdate = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    audio.onended = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    audio.onerror = () => {
      // Silently handle audio load errors
      setIsPlaying(false);
      setProgress(0);
    };

    audio.oncanplaythrough = () => {
      // Audio is ready to play
      audio.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    };

    setIsPlaying(false); // Will be set to true when playback starts

    // Set source and load
    audio.src = song.previewUrl;
    audio.load();
  };

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error('Play failed:', error);
          setIsPlaying(false);
        });
    }
  };

  const currentPage = pages.find((p) => p.id === currentPageId) || null;

  return (
    <>
      {/* Mobile Header */}
      {isMobile && (
        <header className="mobile-header">
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
          <div className="mobile-header-title">
            <span>🎵</span>
            <span>Mix2</span>
          </div>
          <div className="mobile-header-actions">
            <button
              className={`mobile-music-btn ${showMusic ? 'active' : ''}`}
              onClick={() => {
                if (showMusic) {
                  setIsMobilePanelOpen(!isMobilePanelOpen);
                } else {
                  setShowMusic(true);
                  setIsMobilePanelOpen(true);
                }
              }}
              aria-label="Toggle music panel"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
            </button>
          </div>
        </header>
      )}

      {/* Sidebar Overlay */}
      {isMobile && (
        <div
          className={`sidebar-overlay ${isMobileMenuOpen ? 'visible' : ''}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Panel Overlay */}
      {isMobile && showMusic && (
        <div
          className={`panel-overlay ${isMobilePanelOpen ? 'visible' : ''}`}
          onClick={() => setIsMobilePanelOpen(false)}
        />
      )}

      <div
        ref={containerRef}
        className={`fusion-layout ${showMusic && !isMobile ? '' : 'no-music'}`}
        style={showMusic && !isMobile ? { gridTemplateColumns: `240px 1fr ${panelWidth}px` } : undefined}
      >
        <Sidebar
          pages={pages}
          currentPageId={currentPageId}
          onSelectPage={(id) => {
            selectPage(id);
            if (isMobile) setIsMobileMenuOpen(false);
          }}
          onAddPage={() => {
            addPage();
            if (isMobile) setIsMobileMenuOpen(false);
          }}
          isDarkMode={isDarkMode}
          onToggleTheme={toggleTheme}
          showMusic={showMusic}
          onToggleMusic={() => {
            toggleMusic();
            if (isMobile && !showMusic) setIsMobilePanelOpen(true);
          }}
          showLofi={showLofi}
          onToggleLofi={() => {
            toggleLofi();
            if (isMobile) setIsMobilePanelOpen(true);
          }}
          showPortfolio={showPortfolio}
          onShowPortfolio={() => {
            showPortfolioView();
            if (isMobile) setIsMobileMenuOpen(false);
          }}
          isMobile={isMobile}
          isMobileMenuOpen={isMobileMenuOpen}
        />

        <div className="notion-section">
          {showPortfolio ? (
            <PortfolioSection isMobile={isMobile} />
          ) : (
            <Editor page={currentPage} onUpdatePage={updatePage} onDeletePage={deletePage} />
          )}
        </div>

        {showMusic && (
          <>
            {/* Resize Handle - Desktop only */}
            {!isMobile && (
              <div
                className="resize-handle"
                onMouseDown={startResizing}
                style={{
                  position: 'absolute',
                  right: panelWidth - 4,
                  top: 0,
                  bottom: 0,
                  width: '8px',
                  cursor: 'col-resize',
                  zIndex: 100,
                  background: isResizing ? 'rgba(29, 185, 84, 0.5)' : 'transparent',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: '3px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '2px',
                    height: '40px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '1px',
                  }}
                />
              </div>
            )}

            {showLofi ? (
              <LofiPanel
                isVisible={showLofi}
                isMobile={isMobile}
                isMobilePanelOpen={isMobilePanelOpen}
                onClose={() => setIsMobilePanelOpen(false)}
              />
            ) : (
              <MusicPanel
                songs={songs}
                currentSong={currentSong}
                isPlaying={isPlaying}
                progress={progress}
                onPlaySong={playSong}
                onTogglePlay={togglePlay}
                isMobile={isMobile}
                isMobilePanelOpen={isMobilePanelOpen}
                onClose={() => setIsMobilePanelOpen(false)}
              />
            )}
          </>
        )}
      </div>
    </>
  );
}
