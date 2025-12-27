'use client';

import { Song } from '@/types';
import { Play, Pause } from 'lucide-react';

interface MusicPanelProps {
    songs: Song[];
    currentSong: Song | null;
    isPlaying: boolean;
    progress: number;
    onPlaySong: (song: Song) => void;
    onTogglePlay: () => void;
}

export default function MusicPanel({
    songs,
    currentSong,
    isPlaying,
    progress,
    onPlaySong,
    onTogglePlay,
}: MusicPanelProps) {
    return (
        <div className="music-panel">
            {/* Header */}
            <div className="panel-header">
                <div className="panel-title">
                    <span>🎵</span>
                    <span>Music</span>
                </div>
                <div className="panel-subtitle">30-second iTunes previews</div>
            </div>

            {/* Content */}
            <div className="panel-content">
                {/* Quick Play Grid */}
                <div className="quick-play-grid">
                    {songs.slice(0, 6).map((song) => (
                        <div
                            key={song.id}
                            className={`quick-play-card ${currentSong?.id === song.id ? 'active' : ''}`}
                            onClick={() => onPlaySong(song)}
                        >
                            <img className="quick-play-cover" src={song.coverUrl} alt={song.title} />
                            <span className="quick-play-title">{song.title}</span>
                        </div>
                    ))}
                </div>

                {/* Song Grid */}
                <div className="section-title">Fresh Recommendations</div>
                <div className="song-grid">
                    {songs.slice(6).map((song) => (
                        <div
                            key={song.id}
                            className="song-card"
                            onClick={() => onPlaySong(song)}
                        >
                            <div className="song-cover-container">
                                <img className="song-cover" src={song.coverUrl} alt={song.title} />
                                <div className="song-play-overlay">
                                    <div className="song-play-btn">
                                        <Play size={18} fill="#000" color="#000" style={{ marginLeft: '2px' }} />
                                    </div>
                                </div>
                                {currentSong?.id === song.id && (
                                    <div className="song-playing-badge">▶ PLAYING</div>
                                )}
                            </div>
                            <div className="song-title">{song.title}</div>
                            <div className="song-artist">{song.artist}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Player Bar */}
            <div className="player-bar">
                {currentSong ? (
                    <div className="player-now-playing">
                        <img className="player-cover" src={currentSong.coverUrl} alt={currentSong.title} />
                        <div className="player-info">
                            <div className="player-title">{currentSong.title}</div>
                            <div className="player-artist">{currentSong.artist}</div>
                            <div className="player-progress">
                                <div className="player-progress-fill" style={{ width: `${progress}%` }} />
                            </div>
                        </div>
                        <div className="player-btn" onClick={onTogglePlay}>
                            {isPlaying ? (
                                <Pause size={18} color="#000" />
                            ) : (
                                <Play size={18} color="#000" style={{ marginLeft: '2px' }} />
                            )}
                        </div>
                    </div>
                ) : (
                    <div style={{ textAlign: 'center', color: '#a7a7a7', fontSize: '13px', padding: '12px' }}>
                        Select a song to play 30s preview
                    </div>
                )}
            </div>
        </div>
    );
}
