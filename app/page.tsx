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
  const searchSongs = async (query: string) => {
    try {
      const response = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=music&limit=16`);
      const data = await response.json();
      const results: Song[] = data.results.map((item: any) => ({
        id: item.trackId?.toString() || Math.random().toString(),
        title: item.trackName,
        artist: item.artistName,
        coverUrl: item.artworkUrl100?.replace('100x100', '300x300'),
        previewUrl: item.previewUrl,
      }));
      setSongs(results);
    } catch (error) {
      console.error('Error fetching songs:', error);
    }
  };

  const playSong = (song: Song) => {
    if (currentSong?.id === song.id) {
      togglePlay();
      return;
    }

    if (audioRef.current) {
      audioRef.current.pause();
    }

    const audio = new Audio(song.previewUrl);
    audioRef.current = audio;
    setCurrentSong(song);
    setIsPlaying(true);
    setProgress(0);

    audio.play();

    audio.ontimeupdate = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    audio.onended = () => {
      setIsPlaying(false);
      setProgress(0);
    };
  };

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const currentPage = pages.find((p) => p.id === currentPageId) || null;

  return (
    <div
      ref={containerRef}
      className={`fusion-layout ${showMusic ? '' : 'no-music'}`}
      style={showMusic ? { gridTemplateColumns: `240px 1fr ${panelWidth}px` } : undefined}
    >
      <Sidebar
        pages={pages}
        currentPageId={currentPageId}
        onSelectPage={selectPage}
        onAddPage={addPage}
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
        showMusic={showMusic}
        onToggleMusic={toggleMusic}
        showLofi={showLofi}
        onToggleLofi={toggleLofi}
        showPortfolio={showPortfolio}
        onShowPortfolio={showPortfolioView}
      />

      <div className="notion-section">
        {showPortfolio ? (
          <PortfolioSection />
        ) : (
          <Editor page={currentPage} onUpdatePage={updatePage} onDeletePage={deletePage} />
        )}
      </div>

      {showMusic && (
        <>
          {/* Resize Handle */}
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

          {showLofi ? (
            <LofiPanel isVisible={showLofi} />
          ) : (
            <MusicPanel
              songs={songs}
              currentSong={currentSong}
              isPlaying={isPlaying}
              progress={progress}
              onPlaySong={playSong}
              onTogglePlay={togglePlay}
            />
          )}
        </>
      )}
    </div>
  );
}
