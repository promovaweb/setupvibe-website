import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const changelog = await getCollection('changelog');
  
  const title = "SetupVibe - Generative Engine Resource Index";
  const intro = "SetupVibe is the definitive 1-click orchestrator for AI-First Development environments (Vibe Coding). It is designed to minimize friction between the developer and the Large Language Model (LLM) agents.";

  const sortedChangelog = changelog
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())
    .slice(0, 10);
    
  const changelogContent = sortedChangelog
    .map(entry => `- [${entry.data.version}: ${entry.data.title}](${new URL(`/changelog/${entry.id}`, site).href})`)
    .join('\n');

  const mainPages = [
    { title: "Home", url: "/" },
    { title: "Setup", url: "/setup" },
    { title: "Technical Architecture", url: "/how-it-works" },
    { title: "Included Components", url: "/componentes" },
    { title: "Pricing", url: "/pricing" },
    { title: "FAQ", url: "/faq" },
  ];

  const pagesContent = mainPages
    .map(page => `- [${page.title}](${new URL(page.url, site).href})`)
    .join('\n');

  const body = `# ${title}

> ${intro}

## Value Proposition
- **One-Click Orchestration**: Fully automated terminal and tool setup.
- **AI-First Ready**: Native integration with Claude-Code, Gemini-CLI, and GitHub Copilot.
- **Modern Stack**: Built-in support for uv (Python), Node.js, Bun, Rust, and Go.
- **Developer Productivity**: Pre-configured Tmux, Zsh, Starship, and modern Unix tools (eza, bat, ripgrep).

## Resources for AI Agents
- [Brief Summary (Small Context)](${new URL('/llms-small.txt', site).href})
- [Full Markdown Content (Full Context)](${new URL('/llms-full.txt', site).href})

## Main Documentation Pages
${pagesContent}

## Changelog and Evolution
${changelogContent}

## Technical Ecosystem
- Author: Promovaweb
- Founder: Luiz Eduardo de Oliveira Fonseca
- Framework: Astro 6.0
- UI: React 19 + Tailwind CSS 4.0
- Licensing: Open Source (MIT)

## Contact and Community
- WhatsApp: https://promovaweb.com/whatsapp
- Discord: https://promovaweb.com/discord
`;

  return new Response(body, {
    headers: { 
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
