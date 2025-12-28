'use client';

interface WebScraperSectionProps {
    isMobile?: boolean;
}

export default function WebScraperSection({ isMobile = false }: WebScraperSectionProps) {
    return (
        <main className="editor">
            <header className="editor-header">
                <div className="breadcrumbs">
                    <span className="breadcrumb-item">Projects</span>
                    <span className="breadcrumb-separator">/</span>
                    <span className="breadcrumb-item current">Web Scraper</span>
                </div>
            </header>

            <div className="editor-content-wrapper" style={{ maxWidth: '900px' }}>
                {/* Project Title */}
                <input
                    type="text"
                    className="page-title-input"
                    value="Web Scraper"
                    readOnly
                    style={{ cursor: 'default' }}
                />
                <p style={{ color: 'var(--spotify-primary)', marginBottom: '16px', fontWeight: 600, fontSize: '16px' }}>
                    Intelligent Web Scraping with AI-Powered Data Extraction
                </p>

                {/* Status Banners - Valorant Patch Notes Style */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    marginBottom: '32px',
                    padding: '20px',
                    background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.1) 0%, rgba(255, 87, 34, 0.08) 100%)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 152, 0, 0.3)',
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px 16px',
                        background: 'rgba(255, 152, 0, 0.15)',
                        borderRadius: '8px',
                        borderLeft: '4px solid #ff9800',
                    }}>
                        <span style={{ fontSize: '20px' }}>⚠️</span>
                        <div>
                            <div style={{ fontWeight: 700, color: '#ffb74d', fontSize: '14px', marginBottom: '2px' }}>
                                LIVE VERSION CURRENTLY UNAVAILABLE
                            </div>
                            <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)' }}>
                                The Streamlit app is temporarily offline
                            </div>
                        </div>
                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px 16px',
                        background: 'rgba(33, 150, 243, 0.15)',
                        borderRadius: '8px',
                        borderLeft: '4px solid #2196f3',
                    }}>
                        <span style={{ fontSize: '20px' }}>🔧</span>
                        <div>
                            <div style={{ fontWeight: 700, color: '#64b5f6', fontSize: '14px', marginBottom: '2px' }}>
                                UPDATES IN PROGRESS
                            </div>
                            <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)' }}>
                                Enhancing performance and adding new features
                            </div>
                        </div>
                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px 16px',
                        background: 'rgba(29, 185, 84, 0.15)',
                        borderRadius: '8px',
                        borderLeft: '4px solid #1db954',
                    }}>
                        <span style={{ fontSize: '20px' }}>🚀</span>
                        <div>
                            <div style={{ fontWeight: 700, color: '#1db954', fontSize: '14px', marginBottom: '2px' }}>
                                ONLINE DEPLOYMENT COMING SOON
                            </div>
                            <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)' }}>
                                Watch the demo video below to see the project in action
                            </div>
                        </div>
                    </div>
                </div>

                {/* Demo Video Section */}
                <div className="section-title">Demo Video</div>
                <div style={{
                    background: 'var(--spotify-surface)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    marginBottom: '32px',
                }}>
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                        <iframe
                            src="https://www.youtube.com/embed/4EioV0RhUSA"
                            title="Web Scraper Demo"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                border: 'none',
                            }}
                        />
                    </div>
                </div>

                {/* Project Description */}
                <div className="section-title">About This Project</div>
                <div style={{
                    background: 'var(--spotify-surface)',
                    borderRadius: '12px',
                    padding: '20px',
                    marginBottom: '32px',
                }}>
                    <p style={{
                        color: 'rgba(255,255,255,0.8)',
                        lineHeight: 1.8,
                        fontSize: '15px',
                        marginBottom: '16px',
                    }}>
                        A powerful web scraping application built with Python and Streamlit that leverages
                        AI-powered data extraction to intelligently parse and collect data from websites.
                        The scraper features parallel processing for high-speed data collection, clean data
                        output with proper formatting, and export capabilities to CSV and Excel formats.
                    </p>
                    <ul style={{
                        listStyle: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                    }}>
                        <li style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', display: 'flex', gap: '8px' }}>
                            <span style={{ color: 'var(--spotify-primary)' }}>•</span>
                            Intelligent data extraction with automatic field detection
                        </li>
                        <li style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', display: 'flex', gap: '8px' }}>
                            <span style={{ color: 'var(--spotify-primary)' }}>•</span>
                            Parallel processing for scraping multiple URLs simultaneously
                        </li>
                        <li style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', display: 'flex', gap: '8px' }}>
                            <span style={{ color: 'var(--spotify-primary)' }}>•</span>
                            Clean, formatted output with separate product names and descriptions
                        </li>
                        <li style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', display: 'flex', gap: '8px' }}>
                            <span style={{ color: 'var(--spotify-primary)' }}>•</span>
                            Export to CSV and Excel formats
                        </li>
                        <li style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', display: 'flex', gap: '8px' }}>
                            <span style={{ color: 'var(--spotify-primary)' }}>•</span>
                            Modern, responsive Streamlit UI with dark mode support
                        </li>
                    </ul>
                </div>

                {/* Tech Stack */}
                <div className="section-title">Tech Stack</div>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px',
                    marginBottom: '32px',
                }}>
                    {['Python', 'Streamlit', 'BeautifulSoup', 'Playwright', 'Pandas', 'Concurrent Futures'].map((tech) => (
                        <span
                            key={tech}
                            style={{
                                background: 'var(--spotify-surface)',
                                padding: '8px 16px',
                                borderRadius: '20px',
                                fontSize: '13px',
                                color: 'var(--spotify-primary)',
                                fontWeight: 500,
                            }}
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="section-title">Links</div>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <a
                        href="https://youtu.be/4EioV0RhUSA"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            background: 'var(--spotify-primary)',
                            color: '#000',
                            padding: '10px 20px',
                            borderRadius: '20px',
                            fontSize: '13px',
                            fontWeight: 600,
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                        }}
                    >
                        ▶️ Watch on YouTube
                    </a>
                    <span
                        style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            color: 'rgba(255, 255, 255, 0.4)',
                            padding: '10px 20px',
                            borderRadius: '20px',
                            fontSize: '13px',
                            cursor: 'not-allowed',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                        }}
                        title="Currently unavailable"
                    >
                        🌐 Live Demo (Offline)
                    </span>
                </div>
            </div>
        </main>
    );
}
