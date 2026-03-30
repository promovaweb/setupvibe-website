import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';

const changelogEntries = await getCollection('changelog');

const pagesData: Record<string, { title: string; description: string }> = {
  'index': { title: 'setupvibe --init', description: 'O Seu Ambiente Vibe Coding em 1 Clique. Ambiente dev completo, rápido e sem complicações.' },
  'about': { title: 'setupvibe --about', description: 'Simplificando o desenvolvimento para a era das IAs.' },
  'how-it-works': { title: 'setupvibe --how-it-works', description: 'Os bastidores do seu novo terminal e ecossistema dev.' },
  'batteries-included': { title: 'setupvibe --tools', description: 'Conheça todas as ferramentas que instalamos pra você automaticamente.' },
  'setup': { title: 'setupvibe --install', description: 'Sua máquina pronta para Vibe Coding em apenas um comando.' },
  'faq': { title: 'setupvibe --faq', description: 'Tire suas dúvidas sobre segurança, ferramentas e instalação.' },
  'changelog': { title: 'setupvibe --changelog', description: 'Acompanhe a evolução do seu ambiente de desenvolvimento.' },
  'blog': { title: 'setupvibe --blog', description: 'Dicas de Vibe Coding, IA e produtividade no terminal.' },
  'blog/getting-started-with-ai': { title: "setupvibe --blog-post", description: "Getting Started with AI: A Beginner's Guide to Vibe Coding." },
  'componentes': { title: 'setupvibe --ui', description: 'Nossa biblioteca de componentes modernos para interfaces de IA.' },
  'advanced-components': { title: 'setupvibe --advanced', description: 'Componentes complexos e otimizados para produção.' },
  'privacy': { title: 'setupvibe --privacy', description: 'Transparência e segurança dos seus dados.' },
  'terms': { title: 'setupvibe --terms', description: 'Diretrizes de uso e licenciamento da ferramenta.' },
};

changelogEntries.forEach((entry) => {
  pagesData[`changelog/${entry.id}`] = {
    title: `setupvibe --release v${entry.data.version}`,
    description: entry.data.title,
  };
});

const pages = Object.fromEntries(
  Object.entries(pagesData).map(([key, value]) => [`${key}.png`, value])
);

export const { getStaticPaths, GET } = await OGImageRoute({
  param: 'route',
  pages: pages,
  getImageOptions: (_path, page: any) => ({
    title: page.title,
    description: page.description,
    logo: {
      path: './public/logo.png',
      size: [80, 80],
    },
  }),
});
