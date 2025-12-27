'use client';

import { Page } from '@/types';
import { Plus, ChevronRight, FileText, Moon, Sun, Music, Radio, User, Linkedin, Github } from 'lucide-react';

interface SidebarProps {
    pages: Page[];
    currentPageId: string | null;
    onSelectPage: (id: string) => void;
    onAddPage: () => void;
    isDarkMode: boolean;
    onToggleTheme: () => void;
    showMusic: boolean;
    onToggleMusic: () => void;
    showLofi: boolean;
    onToggleLofi: () => void;
    showPortfolio: boolean;
    onShowPortfolio: () => void;
}

export default function Sidebar({
    pages,
    currentPageId,
    onSelectPage,
    onAddPage,
    isDarkMode,
    onToggleTheme,
    showMusic,
    onToggleMusic,
    showLofi,
    onToggleLofi,
    showPortfolio,
    onShowPortfolio,
}: SidebarProps) {

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <div className="user-profile">
                    <span className="user-avatar">G</span>
                    <span className="user-name">Gaurav's Mix</span>
                    <button
                        onClick={onToggleTheme}
                        style={{
                            marginLeft: 'auto',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '4px',
                            borderRadius: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            color: 'inherit',
                        }}
                    >
                        {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
                    </button>
                </div>
            </div>

            <div className="sidebar-section">
                <div
                    className={`sidebar-item ${showPortfolio ? 'active' : ''}`}
                    onClick={onShowPortfolio}
                    style={{ background: showPortfolio ? 'rgba(29, 185, 84, 0.15)' : undefined }}
                >
                    <User size={16} />
                    <span>Portfolio</span>
                    {showPortfolio && <span style={{ marginLeft: 'auto', fontSize: '10px', color: '#1db954' }}>●</span>}
                </div>
                <a
                    href="https://www.linkedin.com/in/gaurav-royy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sidebar-item"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                    <Linkedin size={16} />
                    <span>LinkedIn</span>
                    <span style={{ marginLeft: 'auto', fontSize: '10px', color: 'var(--spotify-muted)' }}>↗</span>
                </a>
                <a
                    href="https://github.com/GauravRoy092"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sidebar-item"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                    <Github size={16} />
                    <span>GitHub</span>
                    <span style={{ marginLeft: 'auto', fontSize: '10px', color: 'var(--spotify-muted)' }}>↗</span>
                </a>
                <a
                    href="https://foodpos-gr.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sidebar-item"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                    <span style={{ fontSize: '16px' }}>🍽️</span>
                    <span>FoodPOS</span>
                    <span style={{ marginLeft: 'auto', fontSize: '10px', color: 'var(--spotify-muted)' }}>↗</span>
                </a>
                <div
                    className={`sidebar-item ${showMusic && !showLofi ? 'music-active' : ''}`}
                    onClick={onToggleMusic}
                >
                    <Music size={16} />
                    <span>Music</span>
                    {showMusic && !showLofi && <span style={{ marginLeft: 'auto', fontSize: '10px' }}>●</span>}
                </div>
                <div
                    className={`sidebar-item ${showLofi ? 'lofi-active' : ''}`}
                    onClick={onToggleLofi}
                >
                    <Radio size={16} />
                    <span>Lofi Radio</span>
                    {showLofi && <span style={{ marginLeft: 'auto', fontSize: '10px', color: '#1db954' }}>♪</span>}
                </div>
            </div>

            <div className="sidebar-section">
                <div className="sidebar-section-title">
                    <span>PRIVATE NOTES</span>
                    <button className="add-page-btn" onClick={onAddPage}>
                        <Plus size={14} />
                    </button>
                </div>

                <div className="pages-list">
                    {pages.map((page) => (
                        <div
                            key={page.id}
                            className={`sidebar-item ${currentPageId === page.id ? 'active' : ''}`}
                            onClick={() => onSelectPage(page.id)}
                        >
                            <ChevronRight size={14} className="chevron" />
                            <span className="page-emoji">{page.emoji || '📄'}</span>
                            <span className="page-title">{page.title || 'Untitled'}</span>
                        </div>
                    ))}
                    {pages.length === 0 && (
                        <div className="empty-state" onClick={onAddPage}>
                            No pages yet. Click to add one.
                        </div>
                    )}
                </div>
            </div>

            <div className="sidebar-footer">
                <div className="sidebar-item">
                    <FileText size={16} />
                    <span>Templates</span>
                </div>
            </div>
        </aside>
    );
}
