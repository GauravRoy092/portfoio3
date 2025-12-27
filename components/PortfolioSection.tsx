import { portfolioData } from '@/content/portfolio';
import { useEffect, useState } from 'react';
import { fetchLatestResumeConfig, getResumeUrls } from '@/lib/resume';

interface PortfolioSectionProps {
    isMobile?: boolean;
}

export default function PortfolioSection({ isMobile = false }: PortfolioSectionProps) {
    const { personalInfo, experience, projects, skills, education, resumeConfig: initialConfig } = portfolioData;
    const [resumeUrls, setResumeUrls] = useState(getResumeUrls(initialConfig.driveFileId));

    useEffect(() => {
        const updateResume = async () => {
            const config = await fetchLatestResumeConfig();
            setResumeUrls(getResumeUrls(config.driveFileId));
        };
        updateResume();
    }, []);

    const { view: resumeViewUrl, download: resumeDownloadUrl, embed: resumeEmbedUrl } = resumeUrls;

    return (
        <main className="editor">
            <header className="editor-header">
                <div className="breadcrumbs">
                    <span className="breadcrumb-item">Portfolio</span>
                    <span className="breadcrumb-separator">/</span>
                    <span className="breadcrumb-item current">About Me</span>
                </div>
            </header>

            <div className="editor-content-wrapper" style={{ maxWidth: '900px' }}>
                {/* Hero Section */}
                <img
                    src="https://lh3.googleusercontent.com/d/1aJjEzYRpXExeoiIfDe4mQpPnxdeYQKSs=w200"
                    alt="Gaurav Roy"
                    style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        marginBottom: '20px',
                        border: '3px solid var(--spotify-primary)',
                        boxShadow: '0 4px 20px rgba(29, 185, 84, 0.3)'
                    }}
                />
                <input
                    type="text"
                    className="page-title-input"
                    value={personalInfo.name}
                    readOnly
                    style={{ cursor: 'default' }}
                />
                <p style={{ color: 'var(--spotify-primary)', marginBottom: '16px', fontWeight: 600, fontSize: '16px' }}>
                    {personalInfo.title}
                </p>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '24px', fontSize: '15px' }}>
                    {personalInfo.summary}
                </p>

                {/* Contact Links */}
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '48px' }}>
                    <a
                        href={`mailto:${personalInfo.email}`}
                        style={{ background: 'var(--spotify-surface)', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}
                    >
                        📧 Email
                    </a>
                    <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        style={{ background: 'var(--spotify-surface)', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}
                    >
                        💼 LinkedIn
                    </a>
                    <a
                        href={personalInfo.github}
                        target="_blank"
                        style={{ background: 'var(--spotify-surface)', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}
                    >
                        💻 GitHub
                    </a>
                    <a
                        href={resumeDownloadUrl}
                        download
                        style={{ background: 'var(--spotify-primary)', color: '#000', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}
                    >
                        📄 Download Resume
                    </a>
                </div>

                {/* Experience Section */}
                <div className="section-title">Professional Experience</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '48px' }}>
                    {experience.map((exp) => (
                        <div key={exp.id} style={{ background: 'var(--spotify-surface)', borderRadius: '12px', padding: '20px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                                <div>
                                    <h3 style={{ fontWeight: 700, marginBottom: '4px', fontSize: '16px' }}>{exp.title}</h3>
                                    <p style={{ color: 'var(--spotify-primary)', fontSize: '14px' }}>{exp.company}</p>
                                    <p style={{ color: 'var(--spotify-muted)', fontSize: '12px' }}>{exp.location}</p>
                                </div>
                                <span style={{ color: 'var(--spotify-muted)', fontSize: '12px', background: 'rgba(255,255,255,0.05)', padding: '4px 10px', borderRadius: '12px', whiteSpace: 'nowrap' }}>
                                    {exp.period}
                                </span>
                            </div>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                {exp.responsibilities.map((item, idx) => (
                                    <li key={idx} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', display: 'flex', gap: '8px' }}>
                                        <span style={{ color: 'var(--spotify-primary)' }}>•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Projects Section */}
                <div className="section-title">Featured Projects</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '48px' }}>
                    {projects.map((project) => (
                        <div key={project.id} style={{ background: 'var(--spotify-surface)', borderRadius: '12px', overflow: 'hidden' }}>
                            {project.featured && project.youtubeId && (
                                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                    <iframe
                                        src={`https://www.youtube.com/embed/${project.youtubeId}`}
                                        title={project.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                                    />
                                </div>
                            )}
                            {!project.featured && project.image && (
                                <img src={project.image} alt={project.title} style={{ width: '100%', height: 'auto' }} />
                            )}
                            <div style={{ padding: '20px' }}>
                                <h3 style={{ fontWeight: 700, marginBottom: '8px', fontSize: '16px' }}>{project.title}</h3>
                                <p style={{ color: 'var(--spotify-primary)', fontSize: '12px', marginBottom: '16px' }}>{project.tech}</p>
                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                                    {project.highlights.map((item, idx) => (
                                        <li key={idx} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>
                                            • {typeof item === 'string' ? item : `${item.label}: ${item.text}`}
                                        </li>
                                    ))}
                                </ul>
                                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                    {project.links.live && (
                                        <a href={project.links.live} target="_blank" style={{ color: 'var(--spotify-primary)', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>
                                            🌐 Live Demo
                                        </a>
                                    )}
                                    {project.links.github && (
                                        <a href={project.links.github} target="_blank" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', textDecoration: 'none' }}>
                                            💻 GitHub
                                        </a>
                                    )}
                                    {project.links.view && (
                                        <a href={project.links.view} target="_blank" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', textDecoration: 'none' }}>
                                            📊 View Dashboard
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Skills Section */}
                <div className="section-title">Technical Skills</div>
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '16px', marginBottom: '48px' }}>
                    {skills.map((skill, idx) => (
                        <div key={idx} style={{ background: 'var(--spotify-surface)', borderRadius: '12px', padding: '20px' }}>
                            <h4 style={{ fontWeight: 700, marginBottom: '12px', color: 'var(--spotify-primary)', fontSize: '14px' }}>{skill.category}</h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                {skill.items.map((item, i) => (
                                    <li key={i} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>• {item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Education Section */}
                <div className="section-title">Education</div>
                <div style={{ background: 'var(--spotify-surface)', borderRadius: '12px', padding: '20px', marginBottom: '48px' }}>
                    <h3 style={{ fontWeight: 700, marginBottom: '4px', fontSize: '16px' }}>{education.degree}</h3>
                    <p style={{ color: 'var(--spotify-primary)', fontSize: '14px', marginBottom: '8px' }}>{education.institution}</p>
                    <div style={{ display: 'flex', gap: '16px', color: 'var(--spotify-muted)', fontSize: '12px', flexWrap: 'wrap' }}>
                        <span>{education.period}</span>
                        <span>CGPA: {education.cgpa}</span>
                        <span>{education.location}</span>
                    </div>
                </div>

                {/* Resume Preview */}
                <div className="section-title">Resume</div>
                <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '24px' }}>
                    <iframe
                        src={resumeEmbedUrl}
                        title="Resume Preview"
                        width="100%"
                        height="500"
                        style={{ border: 'none' }}
                    />
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <a
                        href={resumeViewUrl}
                        target="_blank"
                        style={{ background: 'var(--spotify-surface)', padding: '10px 20px', borderRadius: '20px', fontSize: '13px', color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}
                    >
                        🔍 View Full Screen
                    </a>
                    <a
                        href={resumeDownloadUrl}
                        download
                        style={{ background: 'var(--spotify-primary)', color: '#000', padding: '10px 20px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}
                    >
                        📥 Download PDF
                    </a>
                </div>
            </div>
        </main>
    );
}
