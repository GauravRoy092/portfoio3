'use client';

import { useState } from 'react';
import { LofiStream } from '@/types';
import { X } from 'lucide-react';

interface LofiPanelProps {
    isVisible: boolean;
    isMobile?: boolean;
    isMobilePanelOpen?: boolean;
    onClose?: () => void;
}

const lofiStreams: LofiStream[] = [
    { name: 'lofi hip hop', emoji: '🎵', gradient: 'linear-gradient(135deg, #1a1a2e, #16213e)', url: 'https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1' },
    { name: 'chill beats', emoji: '☁️', gradient: 'linear-gradient(135deg, #2d1b69, #11998e)', url: 'https://www.youtube.com/embed/lTRiuFIWV54?autoplay=1' },
    { name: 'study music', emoji: '📚', gradient: 'linear-gradient(135deg, #373b44, #4286f4)', url: 'https://www.youtube.com/embed/n61ULEU7CO0?autoplay=1' },
    { name: 'sleep sounds', emoji: '🌙', gradient: 'linear-gradient(135deg, #0f0c29, #302b63)', url: 'https://www.youtube.com/embed/1ZYbU82GVz4?autoplay=1' },
    { name: 'rain vibes', emoji: '🌧️', gradient: 'linear-gradient(135deg, #3a6186, #89253e)', url: 'https://www.youtube.com/embed/mPZkdNFkNps?autoplay=1' },
    { name: 'coffee shop', emoji: '☕', gradient: 'linear-gradient(135deg, #603813, #b29f94)', url: 'https://www.youtube.com/embed/gaGrHUekGrc?autoplay=1' },
];

export default function LofiPanel({ isVisible, isMobile = false, isMobilePanelOpen = false, onClose }: LofiPanelProps) {
    const [selected, setSelected] = useState(lofiStreams[0]);

    if (!isVisible) return null;

    return (
        <div className={`music-panel ${isMobile && isMobilePanelOpen ? 'mobile-visible' : ''}`}>
            {/* Header */}
            <div className="panel-header">
                <div>
                    <div className="panel-title">
                        <span>📻</span>
                        <span>Lofi Radio</span>
                    </div>
                    <div className="panel-subtitle" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ color: '#1db954', animation: 'pulse 2s infinite' }}>●</span>
                        24/7 Live Streams
                    </div>
                </div>
                {isMobile && onClose && (
                    <button className="panel-close-btn" onClick={onClose} aria-label="Close panel">
                        <X size={20} />
                    </button>
                )}
            </div>

            {/* Content */}
            <div className="panel-content">
                {/* Lofi Grid */}
                <div className="lofi-grid">
                    {lofiStreams.map((stream) => (
                        <div
                            key={stream.name}
                            className={`lofi-tile ${selected.name === stream.name ? 'active' : ''}`}
                            style={{ background: stream.gradient }}
                            onClick={() => setSelected(stream)}
                        >
                            <div className="lofi-emoji">{stream.emoji}</div>
                            <div className="lofi-name">{stream.name}</div>
                            {selected.name === stream.name && <div className="lofi-playing">▶ NOW PLAYING</div>}
                        </div>
                    ))}
                </div>

                {/* Now Playing */}
                <div className="lofi-now-playing">
                    <span>🎧</span>
                    <span style={{ color: '#a7a7a7', fontSize: '12px' }}>Now Playing:</span>
                    <span style={{ fontWeight: 700, textTransform: 'capitalize' }}>{selected.name}</span>
                </div>

                {/* YouTube Player */}
                <div className="lofi-player-container">
                    <iframe
                        key={selected.url}
                        src={selected.url}
                        title={selected.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ width: '100%', height: '100%', border: 'none', minHeight: '200px' }}
                    />
                </div>
            </div>
        </div>
    );
}
