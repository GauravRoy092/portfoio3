import { RESUME_DRIVE_ID, REMOTE_RESUME_CONFIG_URL } from './resumeConfig';

export interface ResumeConfig {
    driveFileId: string;
}

// Priority: Env Var > Dedicated Config
const DEFAULT_DRIVE_ID = process.env.NEXT_PUBLIC_RESUME_DRIVE_ID || RESUME_DRIVE_ID;

/**
 * Generates Google Drive URLs for a given file ID.
 */
export const getResumeUrls = (driveFileId: string) => {
    return {
        view: `https://drive.google.com/file/d/${driveFileId}/view`,
        download: `https://drive.google.com/uc?export=download&id=${driveFileId}`,
        embed: `https://drive.google.com/file/d/${driveFileId}/preview`,
    };
};

/**
 * Fetches the latest resume configuration from a remote source.
 * In a real-world scenario, you could host a simple JSON file on GitHub Gist
 * or a similar service to update the resume link without redeploying.
 */
export const fetchLatestResumeConfig = async (): Promise<ResumeConfig> => {
    // Use the remote config URL from the central config file
    const REMOTE_CONFIG_URL = REMOTE_RESUME_CONFIG_URL;

    if (!REMOTE_CONFIG_URL) {
        return { driveFileId: DEFAULT_DRIVE_ID };
    }

    try {
        const response = await fetch(REMOTE_CONFIG_URL, {
            cache: 'no-store', // Always get the latest data
        });
        if (!response.ok) throw new Error('Remote fetch failed');
        const data = await response.json();
        return { driveFileId: data.driveFileId || DEFAULT_DRIVE_ID };
    } catch (error) {
        console.warn('Failed to fetch remote resume config, using local fallback:', error);
        return { driveFileId: DEFAULT_DRIVE_ID };
    }
};
