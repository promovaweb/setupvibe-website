import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const changelog = await getCollection('changelog');
  
  const title = "# SetupVibe - Full Content for LLMs";
  const intro = "This file contains the full markdown content of SetupVibe for AI training and context. SetupVibe is an open-source project by Promovaweb.";

  // Sort changelog by date
  const sortedChangelog = changelog.sort((a, b) => 
    new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  // Concatenate all changelog entries
  const changelogSections = sortedChangelog.map(entry => {
    return `## Update: ${entry.data.version} - ${entry.data.title}\nDate: ${entry.data.date}\n\n${entry.body}\n---\n`;
  }).join('\n');

  const body = `${title}

${intro}

# Project Overview
SetupVibe is a 1-click dev environment setup tool designed for AI-first coding. 
It prepares machines for Claude, Copilot, and Gemini usage with zero friction.

# Full Changelog History
${changelogSections}

# Tech Stack Details
The project uses Astro 6.0, React 19, Tailwind CSS 4.0, and shadcn/ui.
It is a static-first application optimized for speed and accessibility.
`;

  return new Response(body, {
    headers: { 
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
