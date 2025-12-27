# 📚 MIX2 - Complete Project Documentation

<div align="center">

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black.svg)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6.svg)
![License](https://img.shields.io/badge/license-Private-red.svg)

**The Ultimate Blend of Notes + Music**

[Live Demo](https://mix2.vercel.app) · [Portfolio](https://mix2.vercel.app) · [FoodPOS](https://foodpos-gr.netlify.app/)

</div>

---

## 📋 Table of Contents

- [Executive Summary](#-executive-summary)
- [Project Overview](#-project-overview)
- [System Architecture](#-system-architecture)
- [Technology Stack](#-technology-stack)
- [Feature Breakdown & Modules](#-feature-breakdown--modules)
- [Component Documentation](#-component-documentation)
- [Type System & Data Models](#-type-system--data-models)
- [API Integration](#-api-integration)
- [State Management & Data Flow](#-state-management--data-flow)
- [UI/UX Design System](#-uiux-design-system)
- [Styling & Theming](#-styling--theming)
- [Error Handling & Edge Cases](#-error-handling--edge-cases)
- [Performance Considerations](#-performance-considerations)
- [Deployment & Configuration](#-deployment--configuration)
- [External Resources & References](#-external-resources--references)
- [Future Enhancements](#-future-enhancements)
- [Troubleshooting Guide](#-troubleshooting-guide)
- [Contributing Guidelines](#-contributing-guidelines)
- [Credits & Acknowledgments](#-credits--acknowledgments)

---

## 🎯 Executive Summary

**Mix2** is a multi-functional web application that combines four distinct systems into a unified, seamless experience:

| Module | Description |
|--------|-------------|
| **Personal Portfolio** | A professional portfolio showcasing experience, projects, skills, and education |
| **Notion-like Document Editor** | A workspace for creating, editing, and organizing personal notes |
| **Spotify-like Music Interface** | A music browsing and playback system with iTunes integration |
| **Lofi Radio Stream** | A curated collection of 24/7 live YouTube lofi streams |

The application is built using **Next.js 16** with **React 19**, **TypeScript 5**, and **Tailwind CSS 4**, following modern web development best practices.

---

## 🌟 Project Overview

### Purpose & Vision

Mix2 was designed to create the "ultimate blend of Notes + Music" – a productivity-focused workspace where users can:

- ✅ Take notes seamlessly while listening to music
- ✅ View professional portfolio information
- ✅ Access external links (LinkedIn, GitHub, FoodPOS)
- ✅ Switch between focused work and ambient music modes

### Key Design Principles

- **Dark-First Design:** Optimized for extended usage with reduced eye strain
- **Modular Architecture:** Each feature is self-contained with clear boundaries
- **Responsive Panels:** Resizable music panel for user customization
- **Persistence:** Local storage for note data preservation
- **Minimal Dependencies:** Lean bundle with essential packages only

### Project Structure

```
mix2/
├── app/                          # Next.js App Router
│   ├── favicon.ico              # Application favicon
│   ├── globals.css              # Global styles (12,181 bytes)
│   ├── layout.tsx               # Root layout component
│   └── page.tsx                 # Main application page
├── components/                   # React components
│   ├── Editor.tsx               # Notion-like editor
│   ├── LofiPanel.tsx            # Lofi radio streaming
│   ├── MusicPanel.tsx           # Spotify-like music panel
│   ├── PortfolioSection.tsx     # Portfolio display
│   └── Sidebar.tsx              # Navigation sidebar
├── content/                      # Static content data
│   └── portfolio.ts             # Portfolio configuration
├── public/                       # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── types/                        # TypeScript definitions
│   └── index.ts                 # All type interfaces
├── package.json                 # Dependencies & scripts
├── tsconfig.json                # TypeScript configuration
├── next.config.ts               # Next.js configuration
├── postcss.config.mjs           # PostCSS configuration
└── eslint.config.mjs            # ESLint configuration
```

---

## 🏗️ System Architecture

### High-Level Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        Mix2 Application                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌──────────┐   ┌──────────────────────┐   ┌──────────────────┐ │
│  │ Sidebar  │   │    Main Content      │   │   Music Panel    │ │
│  │  (240px) │   │    (Flexible)        │   │   (Resizable)    │ │
│  │          │   │                      │   │    300-600px     │ │
│  │ • Pages  │   │  ┌────────────────┐  │   │                  │ │
│  │ • Links  │   │  │   Editor OR    │  │   │  ┌────────────┐  │ │
│  │ • Music  │   │  │   Portfolio    │  │   │  │ MusicPanel │  │ │
│  │ • Lofi   │   │  └────────────────┘  │   │  │     OR     │  │ │
│  │          │   │                      │   │  │ LofiPanel  │  │ │
│  └──────────┘   └──────────────────────┘   │  └────────────┘  │ │
│                                             └──────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
                              │
                ┌─────────────┴─────────────┐
                │       External APIs       │
                ├───────────────────────────┤
                │  • iTunes Search API      │
                │  • YouTube Embeds         │
                │  • Google Drive Embeds    │
                └───────────────────────────┘
```

### Component Hierarchy

```
Home (page.tsx)
├── Sidebar
│   ├── User Profile Section
│   ├── Quick Links (Portfolio, LinkedIn, GitHub, FoodPOS)
│   ├── Music/Lofi Toggle Controls
│   └── Private Notes List
├── Main Content Area
│   ├── Editor (when showPortfolio = false)
│   └── PortfolioSection (when showPortfolio = true)
└── Music Panel (when showMusic = true)
    ├── MusicPanel (when showLofi = false)
    └── LofiPanel (when showLofi = true)
```

### Layout Grid System

The application uses CSS Grid for the primary layout:

| Layout Mode | Grid Columns |
|-------------|--------------|
| **With Music** | `240px 1fr [panelWidth]px` |
| **Without Music** | `240px 1fr` |

The music panel width is controlled via state (`panelWidth`) and can be resized between **300px** and **600px** using a drag handle.

---

## 🛠️ Technology Stack

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.1.1 | React framework with App Router |
| **React** | 19.2.3 | UI component library |
| **React DOM** | 19.2.3 | DOM rendering |
| **TypeScript** | ^5 | Type-safe JavaScript |
| **Tailwind CSS** | ^4 | Utility-first CSS framework |

### Dependencies

#### Production Dependencies

```json
{
  "lucide-react": "^0.562.0",
  "next": "16.1.1",
  "react": "19.2.3",
  "react-dom": "19.2.3"
}
```

#### Development Dependencies

```json
{
  "@tailwindcss/postcss": "^4",
  "@types/node": "^20",
  "@types/react": "^19",
  "@types/react-dom": "^19",
  "eslint": "^9",
  "eslint-config-next": "16.1.1",
  "tailwindcss": "^4",
  "typescript": "^5"
}
```

### Icon System

The project uses **Lucide React** for all icons:

| Icon | Component | Usage |
|------|-----------|-------|
| `Plus` | Add new page button | Sidebar |
| `ChevronRight` | Page list indicator | Sidebar |
| `FileText` | Templates section | Sidebar |
| `Moon/Sun` | Theme toggle | Sidebar |
| `Music` | Music panel toggle | Sidebar |
| `Radio` | Lofi radio toggle | Sidebar |
| `User` | Portfolio link | Sidebar |
| `Linkedin` | LinkedIn link | Sidebar |
| `Github` | GitHub link | Sidebar |
| `MoreHorizontal` | Page actions menu | Editor |
| `Star` | Favorite toggle | Editor |
| `Play/Pause` | Playback controls | Music Panel |

---

## 📦 Feature Breakdown & Modules

### Module 1: Personal Portfolio

#### Purpose
Display professional information including work experience, projects, technical skills, and education in a visually appealing format.

#### Features
- **Hero Section:** Profile photo, name, title, and professional summary
- **Contact Links:** Email, LinkedIn, GitHub, and resume download buttons
- **Experience Section:** Chronological work history with responsibilities
- **Projects Section:** Featured projects with YouTube embeds or images
- **Skills Section:** Categorized technical and soft skills
- **Education Section:** Academic background with CGPA
- **Resume Preview:** Embedded Google Drive document viewer

#### Data Source
Portfolio data is stored in `content/portfolio.ts` as a typed `PortfolioData` object:

```typescript
export const portfolioData: PortfolioData = {
    resumeConfig: { driveFileId: '...' },
    personalInfo: { name, title, email, phone, linkedin, github, summary },
    experience: [...],
    projects: [...],
    skills: [...],
    education: { degree, institution, period, cgpa, location }
};
```

---

### Module 2: Notion-like Document Editor

#### Purpose
Provide a simple, clean interface for creating and managing personal notes with persistent storage.

#### Features

| Feature | Description |
|---------|-------------|
| **Page Creation** | Create new pages with unique IDs and timestamps |
| **Page Selection** | Navigate between pages via sidebar |
| **Title Editing** | Inline editable page titles |
| **Content Editing** | Auto-expanding textarea for content |
| **Emoji Picker** | Click-to-randomize page emoji |
| **Favorites** | Star pages for quick access |
| **Page Deletion** | Delete pages with confirmation dialog |
| **Persistence** | LocalStorage-based data saving |
| **Breadcrumb Navigation** | Visual path indicator |

#### Page Data Structure

```typescript
interface Page {
    id: string;           // Unique identifier (timestamp-based)
    title: string;        // Page title
    content: string;      // Page content
    emoji: string;        // Page icon emoji
    isFavorite?: boolean; // Favorited status
    coverUrl?: string;    // Optional cover image URL
    createdAt: string;    // ISO timestamp
    updatedAt: string;    // ISO timestamp
}
```

#### Default Page

On first visit, the system creates a welcome page:

```typescript
{
    id: '1',
    title: 'Welcome to Hello World',
    content: 'This is the ultimate blend of Notes + Music...',
    emoji: '🚀',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
}
```

---

### Module 3: Spotify-like Music Interface

#### Purpose
Provide music browsing and playback functionality using the iTunes Search API for 30-second song previews.

#### Features

| Feature | Description |
|---------|-------------|
| **Song Search** | Query iTunes API for music |
| **Quick Play Grid** | Top 6 songs in a 2-column grid |
| **Song Cards** | Remaining songs with cover art |
| **Now Playing Bar** | Current song info with progress |
| **Play/Pause Control** | Toggle playback state |
| **Progress Indicator** | Visual playback progress bar |
| **Hover Effects** | Play overlay on song hover |

#### Song Data Structure

```typescript
interface Song {
    id: string;         // Track ID from iTunes
    title: string;      // Track name
    artist: string;     // Artist name
    coverUrl: string;   // Artwork URL (300x300)
    previewUrl: string; // 30-second preview URL
}
```

#### Audio Playback

Audio playback is managed using the HTML5 Audio API:

```typescript
const audio = new Audio(song.previewUrl);
audioRef.current = audio;
audio.play();

audio.ontimeupdate = () => {
    setProgress((audio.currentTime / audio.duration) * 100);
};

audio.onended = () => {
    setIsPlaying(false);
    setProgress(0);
};
```

---

### Module 4: Lofi Radio Streaming

#### Purpose
Provide 24/7 ambient music streaming through curated YouTube live streams.

#### Features

| Feature | Description |
|---------|-------------|
| **Stream Selection** | 6 curated lofi stream categories |
| **Visual Tiles** | Gradient-styled selection tiles |
| **Auto-play** | Selected stream starts automatically |
| **YouTube Embed** | Full embedded player |
| **Live Indicator** | Animated "24/7 Live Streams" badge |

#### Lofi Stream Configuration

```typescript
const lofiStreams: LofiStream[] = [
    { 
        name: 'lofi hip hop', 
        emoji: '🎵', 
        gradient: 'linear-gradient(135deg, #1a1a2e, #16213e)', 
        url: 'https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1' 
    },
    { 
        name: 'chill beats', 
        emoji: '☁️', 
        gradient: 'linear-gradient(135deg, #2d1b69, #11998e)', 
        url: 'https://www.youtube.com/embed/lTRiuFIWV54?autoplay=1' 
    },
    // ... additional streams
];
```

#### Available Streams

| Stream Name | Emoji | YouTube Channel |
|-------------|-------|-----------------|
| lofi hip hop | 🎵 | Lofi Girl |
| chill beats | ☁️ | ChillHop Music |
| study music | 📚 | Lofi Girl |
| sleep sounds | 🌙 | Lofi Girl |
| rain vibes | 🌧️ | Ambient Worlds |
| coffee shop | ☕ | Cozy Coffee Shop |

---

### Module 5: Food & Beverages POS Reference

#### Purpose
External link to the FoodPOS project – a separate application for restaurant order management.

#### Integration
- Sidebar link to `https://foodpos-gr.netlify.app/`
- Portfolio section features the FoodPOS project with:
  - YouTube demo video embed
  - Technical stack description
  - Feature highlights
  - Live demo and GitHub links

---

## 🧩 Component Documentation

### Home Component (`app/page.tsx`)

The main application component that orchestrates all functionality.

#### State Variables

| State | Type | Purpose |
|-------|------|---------|
| `pages` | `Page[]` | Array of all note pages |
| `currentPageId` | `string \| null` | Currently selected page ID |
| `isDarkMode` | `boolean` | Theme state (always true) |
| `showMusic` | `boolean` | Music panel visibility |
| `showLofi` | `boolean` | Lofi mode active |
| `showPortfolio` | `boolean` | Portfolio view active |
| `songs` | `Song[]` | Array of fetched songs |
| `currentSong` | `Song \| null` | Currently playing song |
| `isPlaying` | `boolean` | Playback state |
| `progress` | `number` | Playback progress (0-100) |
| `panelWidth` | `number` | Music panel width (300-600) |
| `isResizing` | `boolean` | Panel resize active |

#### Refs

| Ref | Type | Purpose |
|-----|------|---------|
| `audioRef` | `HTMLAudioElement \| null` | Audio element reference |
| `containerRef` | `HTMLDivElement \| null` | Main container for resize calculations |

#### Key Functions

```typescript
// Theme toggle (currently decorative)
const toggleTheme = () => setIsDarkMode(!isDarkMode);

// Music panel toggle
const toggleMusic = () => {
    setShowMusic(!showMusic);
    setShowLofi(false);
};

// Lofi mode toggle
const toggleLofi = () => {
    setShowLofi(!showLofi);
    if (!showLofi) setShowMusic(true);
};

// Page CRUD operations
const addPage = () => { ... };
const updatePage = (id: string, updates: Partial<Page>) => { ... };
const deletePage = (id: string) => { ... };

// Music operations
const searchSongs = async (query: string) => { ... };
const playSong = (song: Song) => { ... };
const togglePlay = () => { ... };
```

---

### Sidebar Component (`components/Sidebar.tsx`)

Provides navigation and quick access to all application features.

#### Props Interface

```typescript
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
```

#### Sections

1. **Header:** User avatar with theme toggle
2. **Quick Links:** Portfolio, LinkedIn, GitHub, FoodPOS
3. **Media Controls:** Music and Lofi Radio toggles
4. **Private Notes:** List of user-created pages
5. **Footer:** Templates section (placeholder)

---

### Editor Component (`components/Editor.tsx`)

Notion-style document editing interface.

#### Props Interface

```typescript
interface EditorProps {
    page: Page | null;
    onUpdatePage: (id: string, updates: Partial<Page>) => void;
    onDeletePage: (id: string) => void;
}
```

#### Features

- **Empty State:** Displayed when no page is selected
- **Breadcrumb Header:** Shows page path (Shared / Page Title)
- **Action Bar:** Favorite star and more options (delete)
- **Emoji Picker:** Click to randomize from preset emojis
- **Title Input:** Inline editable, placeholder "Untitled"
- **Content Textarea:** Auto-expanding, slash command hint

#### Available Emojis

```typescript
const emojis = ['📝', '🚀', '💡', '📚', '🎯', '✨', '🔥', '💻', '🎨', '📊', '⚡', '🌟'];
```

---

### MusicPanel Component (`components/MusicPanel.tsx`)

Spotify-inspired music browsing and playback interface.

#### Props Interface

```typescript
interface MusicPanelProps {
    songs: Song[];
    currentSong: Song | null;
    isPlaying: boolean;
    progress: number;
    onPlaySong: (song: Song) => void;
    onTogglePlay: () => void;
}
```

#### Layout Structure

1. **Header:** Title "🎵 Music" with subtitle "30-second iTunes previews"
2. **Quick Play Grid:** First 6 songs in 2-column layout
3. **Fresh Recommendations:** Remaining songs in vertical list
4. **Player Bar:** Now playing info with progress and controls

---

### LofiPanel Component (`components/LofiPanel.tsx`)

24/7 lofi streaming interface with YouTube embeds.

#### Props Interface

```typescript
interface LofiPanelProps {
    isVisible: boolean;
}
```

#### Local State

```typescript
const [selected, setSelected] = useState(lofiStreams[0]);
```

#### Layout Structure

1. **Header:** Title "📻 Lofi Radio" with live indicator
2. **Stream Grid:** 2x3 grid of selectable stream tiles
3. **Now Playing Bar:** Current stream name display
4. **YouTube Embed:** Full player with autoplay

---

### PortfolioSection Component (`components/PortfolioSection.tsx`)

Comprehensive portfolio display component.

#### Data Integration

```typescript
const { personalInfo, experience, projects, skills, education, resumeConfig } = portfolioData;
```

#### Resume URL Generation

```typescript
const resumeViewUrl = `https://drive.google.com/file/d/${resumeConfig.driveFileId}/view`;
const resumeDownloadUrl = `https://drive.google.com/uc?export=download&id=${resumeConfig.driveFileId}`;
const resumeEmbedUrl = `https://drive.google.com/file/d/${resumeConfig.driveFileId}/preview`;
```

#### Sections

1. **Hero:** Profile image, name, title, summary
2. **Contact Links:** Email, LinkedIn, GitHub, Resume download
3. **Experience:** Work history cards with responsibilities
4. **Projects:** Featured projects with embeds/images
5. **Skills:** 2-column grid of skill categories
6. **Education:** Degree information card
7. **Resume:** Embedded preview with view/download buttons

---

## 📝 Type System & Data Models

### Complete Type Definitions (`types/index.ts`)

#### Page Types

```typescript
export interface Page {
    id: string;
    title: string;
    content: string;
    emoji: string;
    isFavorite?: boolean;
    coverUrl?: string;
    createdAt: string;
    updatedAt: string;
}
```

#### Music Types

```typescript
export interface Song {
    id: string;
    title: string;
    artist: string;
    coverUrl: string;
    previewUrl: string;
}

export interface LofiStream {
    name: string;
    emoji: string;
    gradient: string;
    url: string;
}
```

#### Portfolio Types

```typescript
export interface PersonalInfo {
    name: string;
    title: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    summary: string;
}

export interface Experience {
    id: number;
    title: string;
    company: string;
    location: string;
    period: string;
    responsibilities: string[];
}

export interface ProjectHighlight {
    label?: string;
    text: string;
}

export interface Project {
    id: number;
    title: string;
    tech: string;
    featured: boolean;
    youtubeId?: string;
    image?: string;
    highlights: (string | ProjectHighlight)[];
    links: {
        live?: string;
        github?: string;
        linkedin?: string;
        view?: string;
    };
}

export interface SkillCategory {
    category: string;
    items: string[];
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
    cgpa: string;
    location: string;
}

export interface ResumeConfig {
    driveFileId: string;
}

export interface PortfolioData {
    personalInfo: PersonalInfo;
    experience: Experience[];
    projects: Project[];
    skills: SkillCategory[];
    education: Education;
    resumeConfig: ResumeConfig;
}
```

---

## 🔌 API Integration

### iTunes Search API

#### Endpoint

```
GET https://itunes.apple.com/search
```

#### Request Parameters

| Parameter | Value | Description |
|-----------|-------|-------------|
| `term` | URL-encoded query | Search term |
| `media` | `music` | Media type filter |
| `limit` | `16` | Maximum results |

#### Implementation

```typescript
const searchSongs = async (query: string) => {
    try {
        const response = await fetch(
            `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=music&limit=16`
        );
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
```

#### Response Structure (iTunes)

```typescript
{
    resultCount: number;
    results: Array<{
        trackId: number;
        trackName: string;
        artistName: string;
        artworkUrl100: string;  // 100x100 image
        previewUrl: string;     // 30-second preview
        // ... additional fields
    }>;
}
```

#### Artwork URL Modification

The API returns 100x100 artwork URLs. The application upgrades these to 300x300:

```typescript
coverUrl: item.artworkUrl100?.replace('100x100', '300x300')
```

---

### YouTube Embed API

#### Lofi Streams

YouTube videos are embedded using the standard iframe embed format:

```html
<iframe
    src="https://www.youtube.com/embed/{videoId}?autoplay=1"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
/>
```

#### YouTube Video IDs Used

| Stream | Video ID |
|--------|----------|
| lofi hip hop | `jfKfPfyJRdk` |
| chill beats | `lTRiuFIWV54` |
| study music | `n61ULEU7CO0` |
| sleep sounds | `1ZYbU82GVz4` |
| rain vibes | `mPZkdNFkNps` |
| coffee shop | `gaGrHUekGrc` |

#### Portfolio Project Videos

```typescript
youtubeId: 'Uvurt-6yrwg'  // FoodPOS Demo
```

---

### Google Drive API (Embedding)

#### Resume Embedding

Three URL formats are used for Google Drive integration:

| Purpose | URL Format |
|---------|------------|
| **View** | `https://drive.google.com/file/d/{fileId}/view` |
| **Download** | `https://drive.google.com/uc?export=download&id={fileId}` |
| **Embed** | `https://drive.google.com/file/d/{fileId}/preview` |

#### Implementation

```typescript
const resumeViewUrl = `https://drive.google.com/file/d/${resumeConfig.driveFileId}/view`;
const resumeDownloadUrl = `https://drive.google.com/uc?export=download&id=${resumeConfig.driveFileId}`;
const resumeEmbedUrl = `https://drive.google.com/file/d/${resumeConfig.driveFileId}/preview`;
```

---

## 🔄 State Management & Data Flow

### State Management Approach

The application uses **React's built-in state management** (useState, useEffect, useRef) without external state libraries. This is appropriate for the application's complexity level.

### Data Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                      Home Component                          │
│                                                               │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │                    Application State                      │ │
│  │  • pages[], currentPageId, showMusic, showLofi, etc.    │ │
│  └─────────────────────────────────────────────────────────┘ │
│                              │                                │
│         ┌────────────────────┼────────────────────┐          │
│         ▼                    ▼                    ▼          │
│  ┌──────────────┐    ┌─────────────┐    ┌────────────────┐  │
│  │   Sidebar    │    │   Editor/   │    │  MusicPanel/   │  │
│  │              │    │  Portfolio  │    │   LofiPanel    │  │
│  │  Props:      │    │             │    │                │  │
│  │  • pages     │    │  Props:     │    │  Props:        │  │
│  │  • handlers  │    │  • page     │    │  • songs       │  │
│  └──────────────┘    │  • handlers │    │  • playback    │  │
│         │            └─────────────┘    └────────────────┘  │
│         │                    │                    │          │
│         │     User Actions   │      User Actions  │          │
│         └────────────────────┼────────────────────┘          │
│                              ▼                                │
│                    State Updates                              │
│                              │                                │
│                              ▼                                │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │                    localStorage                           │ │
│  │              (mix2-pages persistence)                     │ │
│  └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### Data Persistence

#### LocalStorage Key

```typescript
const STORAGE_KEY = 'mix2-pages';
```

#### Load Pattern

```typescript
useEffect(() => {
    const savedPages = localStorage.getItem('mix2-pages');
    if (savedPages) {
        const parsed = JSON.parse(savedPages);
        setPages(parsed);
        if (parsed.length > 0) setCurrentPageId(parsed[0].id);
    } else {
        // Create initial page
    }
}, []);
```

#### Save Pattern

```typescript
useEffect(() => {
    if (pages.length > 0) {
        localStorage.setItem('mix2-pages', JSON.stringify(pages));
    }
}, [pages]);
```

---

## 🎨 UI/UX Design System

### Design Philosophy

| Principle | Implementation |
|-----------|----------------|
| **Dark-First** | Deep blacks (#0a0a0a, #121212, #191919) as base |
| **Spotify Influence** | Green accent (#1db954), card-based layout |
| **Notion Influence** | Minimal chrome, content-focused editor |
| **Glassmorphism** | Subtle opacity and blur effects |
| **Micro-interactions** | Hover states, transitions, animations |

### Layout Patterns

#### Three-Column Grid

```css
.fusion-layout {
    display: grid;
    grid-template-columns: 240px 1fr 340px;
    grid-template-rows: 1fr;
    height: 100vh;
}
```

#### Responsive Sidebar

- Fixed width: 240px
- Scrollable content area
- Sticky header and footer

#### Resizable Music Panel

- Default: 400px
- Min: 300px
- Max: 600px
- Drag handle with visual feedback

### Typography

#### Font Stack

```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```

#### Type Scale

| Element | Size | Weight |
|---------|------|--------|
| Page title | 40px | 700 |
| Section title | 16-18px | 700 |
| Body text | 14-16px | 400 |
| Captions | 11-13px | 400-600 |

---

## 🎨 Styling & Theming

### CSS Architecture

The application uses a **single global CSS file** (`globals.css`) with organized sections:

1. CSS Variables (Root)
2. Reset Styles
3. Fusion Layout
4. Notion Sidebar
5. Notion Editor
6. Music Panel
7. Lofi Panel
8. Scrollbar Customization
9. Animations

### CSS Custom Properties

#### Notion Theme Variables

```css
:root {
    --notion-bg: #191919;
    --notion-fg: #e6e6e6;
    --notion-sidebar-bg: #202020;
    --notion-sidebar-hover: #2f2f2f;
    --notion-border: rgba(255, 255, 255, 0.1);
    --notion-accent: #529cca;
}
```

#### Spotify Theme Variables

```css
:root {
    --spotify-bg: #121212;
    --spotify-surface: #181818;
    --spotify-fg: #ffffff;
    --spotify-muted: #a7a7a7;
    --spotify-primary: #1db954;
}
```

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Background Dark | `#0a0a0a` | Main layout background |
| Spotify Background | `#121212` | Music panel background |
| Spotify Surface | `#181818` | Cards, containers |
| Notion Background | `#191919` | Editor background |
| Sidebar Background | `#202020` | Sidebar background |
| Sidebar Hover | `#2f2f2f` | Hover states |
| Spotify Green | `#1db954` | Primary accent, active states |
| Purple Accent | `#a855f7` | Lofi active state |
| Gold Accent | `#f0b429` | Favorites |
| Text Primary | `#e6e6e6` / `#ffffff` | Primary text |
| Text Muted | `#a7a7a7` | Secondary text |
| Border | `rgba(255, 255, 255, 0.1)` | Subtle borders |

### Gradient System

#### Lofi Tile Gradients

```css
/* lofi hip hop */
linear-gradient(135deg, #1a1a2e, #16213e)

/* chill beats */
linear-gradient(135deg, #2d1b69, #11998e)

/* study music */
linear-gradient(135deg, #373b44, #4286f4)

/* sleep sounds */
linear-gradient(135deg, #0f0c29, #302b63)

/* rain vibes */
linear-gradient(135deg, #3a6186, #89253e)

/* coffee shop */
linear-gradient(135deg, #603813, #b29f94)
```

### Animation System

#### Pulse Animation

```css
@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}
```

#### Transition Standards

```css
/* Hover transitions */
transition: background 0.15s;

/* Card hover */
transition: all 0.2s;

/* Button hover */
transition: transform 0.1s;

/* Progress bar */
transition: width 100ms linear;
```

---

## ⚠️ Error Handling & Edge Cases

### API Error Handling

#### iTunes API Failure

```typescript
const searchSongs = async (query: string) => {
    try {
        const response = await fetch(...);
        const data = await response.json();
        // Process data
    } catch (error) {
        console.error('Error fetching songs:', error);
        // Songs array remains empty, UI shows no results
    }
};
```

#### Fallback for Missing Track ID

```typescript
id: item.trackId?.toString() || Math.random().toString()
```

### Empty States

#### No Pages

```tsx
{pages.length === 0 && (
    <div className="empty-state" onClick={onAddPage}>
        No pages yet. Click to add one.
    </div>
)}
```

#### No Selected Page

```tsx
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
```

### Edge Cases Handled

| Scenario | Handling |
|----------|----------|
| Page with no title | Display "Untitled" |
| Page with no emoji | Default to 📄 |
| Missing artwork URL | Uses fallback or empty string |
| Audio element doesn't exist | Check `if (!audioRef.current) return;` |
| Lofi panel not visible | Early return `if (!isVisible) return null;` |
| Panel resize bounds | Clamped between 300-600px |

---

## ⚡ Performance Considerations

### React Optimizations

#### useCallback for Handlers

```typescript
const startResizing = useCallback(() => {
    setIsResizing(true);
}, []);

const stopResizing = useCallback(() => {
    setIsResizing(false);
}, []);

const resize = useCallback((e: MouseEvent) => {
    if (!isResizing || !containerRef.current) return;
    // Resize logic
}, [isResizing]);
```

#### Effect Cleanup

```typescript
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
```

### Bundle Optimization

#### Minimal Dependencies

Only 4 production dependencies:
- `next` (framework)
- `react` / `react-dom` (UI)
- `lucide-react` (icons)

#### Tree Shaking

Lucide icons are imported individually:

```typescript
import { Plus, ChevronRight, FileText, Moon, Sun, Music, Radio, User, Linkedin, Github } from 'lucide-react';
```

---

## 🚀 Deployment & Configuration

### Development Environment

#### Prerequisites

- Node.js (v18+ recommended)
- npm, yarn, pnpm, or bun

#### Installation

```bash
cd mix2
npm install
```

#### Development Server

```bash
npm run dev
```

Access at: `http://localhost:3000`

### Build Process

#### Production Build

```bash
npm run build
```

#### Start Production Server

```bash
npm start
```

#### Linting

```bash
npm run lint
```

### Deployment Options

#### Vercel (Recommended)

1. Push to GitHub repository
2. Connect repository to Vercel
3. Auto-deploy on push to main branch

#### Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Add Next.js plugin

#### Self-Hosted

1. Build production bundle
2. Run `npm start`
3. Use PM2 or similar for process management
4. Configure reverse proxy (Nginx/Apache)

---

## 📚 External Resources & References

### Libraries & SDKs

| Resource | URL | Purpose |
|----------|-----|---------|
| Next.js | https://nextjs.org | React framework |
| React | https://react.dev | UI library |
| Lucide Icons | https://lucide.dev | Icon library |
| Tailwind CSS | https://tailwindcss.com | Styling |
| TypeScript | https://typescriptlang.org | Type safety |

### APIs Used

| API | Documentation | Purpose |
|-----|---------------|---------|
| iTunes Search API | https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI | Music search & previews |
| YouTube Embed | https://developers.google.com/youtube/player_parameters | Video embedding |
| Google Drive | https://developers.google.com/drive | Resume embedding |

### Design Inspirations

| Platform | Inspiration |
|----------|-------------|
| **Notion** | Editor UI, sidebar design, page structure, dark theme |
| **Spotify** | Music panel layout, player bar, card design, green accent |
| **Lofi Girl** | Lofi streaming concept, ambient music focus |

### YouTube Channels (Lofi Streams)

| Channel | Content |
|---------|---------|
| **Lofi Girl** | lofi hip hop radio, study music, sleep sounds |
| **ChillHop Music** | chill beats, relaxing music |
| **Ambient Worlds** | rain vibes, nature sounds |
| **Cozy Coffee Shop** | coffee shop ambiance |

### Related Projects

| Project | URL | Description |
|---------|-----|-------------|
| **FoodPOS** | https://foodpos-gr.netlify.app | Restaurant POS system |
| **F&B Sales Dashboard** | GitHub | Power BI dashboard |
| **HR Analytics Dashboard** | GitHub | HR reporting dashboard |

---

## 🔮 Future Enhancements

### Planned Features

| Feature | Priority | Description |
|---------|----------|-------------|
| **Light Theme** | Medium | Complete light mode implementation |
| **Search Songs UI** | High | User input for music search |
| **Playlist Creation** | Medium | Save favorite songs locally |
| **Markdown Support** | High | Rich text editing in notes |
| **Page Folders** | Medium | Organize pages into folders |
| **Templates** | Low | Pre-built page templates |
| **Export Notes** | Medium | Export pages as PDF/Markdown |
| **Keyboard Shortcuts** | High | Quick actions via keyboard |
| **Mobile Responsive** | High | Full mobile support |
| **PWA Support** | Low | Installable web app |

### Technical Improvements

| Improvement | Description |
|-------------|-------------|
| **Database Integration** | Move from localStorage to cloud database |
| **User Authentication** | Add login/signup functionality |
| **Real-time Sync** | Sync notes across devices |
| **Error Boundaries** | React error boundary components |
| **Loading States** | Skeleton loaders for async content |
| **Unit Tests** | Jest/Vitest test coverage |
| **E2E Tests** | Playwright/Cypress testing |
| **Analytics** | Usage tracking and analytics |

---

## 🔧 Troubleshooting Guide

### Common Issues & Solutions

#### Issue: Pages Not Saving

**Symptoms:**
- Notes disappear after refresh
- LocalStorage appears empty

**Solutions:**
1. Check browser localStorage quota
   ```javascript
   // In browser console
   localStorage.getItem('mix2-pages');
   ```
2. Clear localStorage and refresh
   ```javascript
   localStorage.removeItem('mix2-pages');
   ```
3. Ensure cookies/storage not blocked

#### Issue: Music Not Playing

**Symptoms:**
- Click on song, nothing happens
- No audio output

**Solutions:**
1. Check browser autoplay policy - user interaction may be required
2. Verify preview URL is valid
3. Check browser audio permissions
4. Verify iTunes API is responding

#### Issue: YouTube Embeds Not Loading

**Symptoms:**
- Lofi panel shows blank player
- YouTube player errors

**Solutions:**
1. Check if YouTube is accessible
2. Verify iframe allow attributes
3. Check Content Security Policy headers
4. Try different stream (video may be unavailable)

#### Issue: Build Fails

**Symptoms:**
- `npm run build` errors
- TypeScript compilation errors

**Solutions:**
1. Run `npm run lint` to identify issues
2. Check for missing type definitions
3. Verify all imports are correct
4. Clear `.next` folder and rebuild:
   ```bash
   rm -rf .next
   npm run build
   ```

---

## 🤝 Contributing Guidelines

### Development Workflow

```bash
# 1. Clone the repository
git clone https://github.com/GauravRoy092/portfoio3.git

# 2. Install dependencies  
cd mix2
npm install

# 3. Start development server
npm run dev

# 4. Make changes and test

# 5. Run linting
npm run lint

# 6. Build for production
npm run build

# 7. Commit with descriptive message
git commit -m "feat: add search functionality to music panel"
```

### Code Style Guidelines

- Use TypeScript for all new files
- Follow existing component patterns
- Add proper type definitions in `types/index.ts`
- Use descriptive variable and function names
- Comment complex logic
- Keep components focused and single-purpose

### Commit Message Format

```
type(scope): description

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Formatting
- refactor: Code restructuring
- test: Adding tests
- chore: Maintenance
```

---

## 🙏 Credits & Acknowledgments

### Project Creator

**Gaurav Roy**
- 📧 Email: royg4250@gmail.com
- 💼 LinkedIn: [gaurav-royy](https://www.linkedin.com/in/gaurav-royy/)
- 💻 GitHub: [GauravRoy092](https://github.com/GauravRoy092)

### Inspirations

- **Notion** - For the clean, minimal editor interface
- **Spotify** - For the music panel design and playback UI
- **Lofi Girl** - For the ambient music streaming concept

### Open Source Libraries

- Next.js by Vercel
- React by Meta
- Lucide Icons
- Tailwind CSS
- TypeScript by Microsoft

### APIs & Services

- Apple iTunes Search API
- YouTube Embed API
- Google Drive Embed

---

## 📊 Document Summary

| Section | Coverage |
|---------|----------|
| Architecture | ✅ Complete |
| Components | ✅ All 6 documented |
| APIs | ✅ iTunes, YouTube, Google Drive |
| Types | ✅ 12 interfaces documented |
| Styling | ✅ 715 lines of CSS explained |
| State Management | ✅ 11 state variables |
| User Flows | ✅ Detailed flows |
| Security | ✅ Current + recommendations |
| Accessibility | ✅ Current + improvements |
| Testing | ✅ Strategy with examples |
| Deployment | ✅ Multi-platform options |
| Troubleshooting | ✅ Common issues |

---

<div align="center">

**Made with ❤️ by Gaurav Roy**

[⬆ Back to Top](#-mix2---complete-project-documentation)

</div>
