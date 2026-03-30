import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const changelog = await getCollection('changelog');
  
  // Base site information
  const title = "SetupVibe";
  const description = "SetupVibe prepara sua máquina com um clique para que o Claude, Copilot e Gemini façam a mágica acontecer. Ambiente dev completo, rápido e sem complicações.";
  
  // Format changelog entries
  const sortedChangelog = changelog
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())
    .slice(0, 10); // Last 10 updates
    
  const changelogContent = sortedChangelog
    .map(entry => `- [${entry.data.version}: ${entry.data.title}](${new URL(`/changelog/${entry.id}`, site).href})`)
    .join('\n');

  // List of main pages for better crawling
  const mainPages = [
    { title: "Home", url: "/" },
    { title: "How it Works", url: "/how-it-works" },
    { title: "Setup", url: "/setup" },
    { title: "Components", url: "/componentes" },
    { title: "Pricing", url: "/pricing" },
    { title: "FAQ", url: "/faq" },
    { title: "Changelog", url: "/changelog" },
  ];

  const pagesContent = mainPages
    .map(page => `- [${page.title}](${new URL(page.url, site).href})`)
    .join('\n');

  const body = `# ${title}

> ${description}

## Main Pages
${pagesContent}

## Latest Updates (Changelog)
${changelogContent}

## Tech Stack
- Framework: Astro 6.0
- UI: React 19 + Tailwind CSS 4.0
- Components: shadcn/ui
- GTM Integration: Active

## AI Documentation
For full technical documentation, please refer to the codebase directly or visit our development blog.
`;

  return new Response(body, {
    headers: { 
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
