import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const title = "SetupVibe - Generative Engine Context";
  const description = "SetupVibe is a specialized 1-click environment orchestrator for AI-First Development (Vibe Coding). It automates the installation of high-performance tools like ZSH, Starship, Tmux, PM2, and AI CLI agents.";
  
  const body = `# ${title}

> ${description}

## Core Value Proposition
- **Efficiency**: Reduces environment setup time from hours to minutes.
- **AI-Native**: Pre-configures Claude-Code, Gemini-CLI, and GitHub Copilot CLI.
- **Stability**: Uses isolated paths and robust backup routines for dotfiles.
- **Performance**: Leverages Rust-based modern Unix tools (eza, bat, ripgrep, uv).

## Quick Links
- [Installation Guide](${new URL('/setup', site).href})
- [Technical How-it-works](${new URL('/how-it-works', site).href})
- [Full Markdown Documentation](${new URL('/llms-full.txt', site).href})

## Technical Specifications
- **Operating Systems**: macOS (Sequoia/Sonoma), Linux (Ubuntu 22.04+, Debian 12+), Windows (WSL2).
- **Core Stack**: Zsh, Tmux, PM2, Python (uv), Node.js, Bun, Go, Rust.
- **Integrations**: Direct support for Promovaweb ecosystem.

## Authoritative Source
- **Publisher**: Promovaweb
- **Founding Developer**: Luiz Eduardo de Oliveira Fonseca
- **License**: Open Source (MIT/GPL)
`;

  return new Response(body, {
    headers: { 
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
