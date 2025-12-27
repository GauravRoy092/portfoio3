'use client';

import { Page } from '@/types';
import { MoreHorizontal, Star } from 'lucide-react';

interface EditorProps {
    page: Page | null;
    onUpdatePage: (id: string, updates: Partial<Page>) => void;
    onDeletePage: (id: string) => void;
}

const emojis = ['📝', '🚀', '💡', '📚', '🎯', '✨', '🔥', '💻', '🎨', '📊', '⚡', '🌟'];

export default function Editor({ page, onUpdatePage, onDeletePage }: EditorProps) {
    if (!page) {
        return (
            <div className="editor-empty">
                <div className="editor-empty-content">
                    <h1>Select a page or create a new one</h1>
                    <p>Welcome to Mix. Choose a page from the sidebar to start writing.</p>
                </div>
            </div>
        );
    }

    return (
        <main className="editor">
            <header className="editor-header">
                <div className="breadcrumbs">
                    <span className="breadcrumb-item">Shared</span>
                    <span className="breadcrumb-separator">/</span>
                    <span className="breadcrumb-item current">{page.title || 'Untitled'}</span>
                </div>
                <div className="editor-actions">
                    <Star
                        size={18}
                        className={`editor-action-icon ${page.isFavorite ? 'favorite-active' : ''}`}
                        onClick={() => onUpdatePage(page.id, { isFavorite: !page.isFavorite })}
                        fill={page.isFavorite ? '#f0b429' : 'none'}
                    />
                    <MoreHorizontal
                        size={18}
                        className="editor-action-icon"
                        onClick={() => {
                            if (confirm('Are you sure you want to delete this page?')) {
                                onDeletePage(page.id);
                            }
                        }}
                    />
                </div>
            </header>

            <div className="editor-content-wrapper">
                <div
                    className="page-emoji-large"
                    onClick={() => {
                        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
                        onUpdatePage(page.id, { emoji: randomEmoji });
                    }}
                >
                    {page.emoji || '📄'}
                </div>

                <input
                    type="text"
                    className="page-title-input"
                    placeholder="Untitled"
                    value={page.title}
                    onChange={(e) => onUpdatePage(page.id, { title: e.target.value })}
                />

                <textarea
                    className="page-content-input"
                    placeholder="Type '/' for commands..."
                    value={page.content}
                    onChange={(e) => onUpdatePage(page.id, { content: e.target.value })}
                    onInput={(e) => {
                        const target = e.target as HTMLTextAreaElement;
                        target.style.height = 'auto';
                        target.style.height = target.scrollHeight + 'px';
                    }}
                />
            </div>
        </main>
    );
}
