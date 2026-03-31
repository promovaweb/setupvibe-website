import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Get the base path from Astro config (e.g., '/astro-genai-startup-theme' or '/')
const BASE_PATH = import.meta.env.BASE_URL || '/';

/**
 * Prepends the base path to a URL for proper routing in GitHub Pages
 * @param path - The path to prepend the base to (e.g., '/components')
 * @returns The full path with base (e.g., '/astro-genai-startup-theme/components')
 */
export function withBase(path: string): string {
  // Handle hash-only links (e.g., '#features')
  if (path.startsWith('#')) {
    return path;
  }

  // Handle absolute URLs (external links)
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  // Remove trailing slash from base and leading slash from path, then combine
  const base = BASE_PATH.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  return `${base}${cleanPath}`;
}

/**
 * Sorts changelog entries by date (descending) and then by version (descending)
 * @param entries - The changelog entries from getCollection('changelog')
 * @returns Sorted array of entries
 */
export function sortChangelog(entries: any[]) {
  return [...entries].sort((a, b) => {
    const dateDiff = new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
    if (dateDiff !== 0) return dateDiff;
    
    // If dates are equal, sort by version (highest first)
    return b.data.version.localeCompare(a.data.version, undefined, { numeric: true, sensitivity: 'base' });
  });
}
