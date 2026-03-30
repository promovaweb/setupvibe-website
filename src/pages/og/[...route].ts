import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';

const changelogEntries = await getCollection('changelog');

const pagesData: Record<string, { title: string; description: string }> = {
  'index': { title: 'SetupVibe - O Seu Ambiente Vibe Coding em 1 Clique', description: 'Ambiente dev completo, rápido e sem complicações.' },
  'about': { title: 'Sobre o SetupVibe', description: 'Simplificando o desenvolvimento para a era das IAs.' },
  'how-it-works': { title: 'Como o SetupVibe Funciona', description: 'Os bastidores do seu novo terminal.' },
  'batteries-included': { title: 'Baterias Inclusas', description: 'Tudo o que instalamos pra você.' },
  'setup': { title: 'Instalar SetupVibe', description: 'Sua máquina pronta em minutos.' },
  'faq': { title: 'Perguntas Frequentes', description: 'Tire suas dúvidas sobre o SetupVibe.' },
  'changelog': { title: 'Changelog', description: 'Novidades e atualizações do SetupVibe.' },
  'blog': { title: 'Blog SetupVibe', description: 'Dicas de Vibe Coding e IA.' },
  'blog/getting-started-with-ai': { title: "Getting Started with AI: A Beginner's Guide", description: 'Learn the fundamentals of artificial intelligence and how to start building AI-powered applications today.' },
  'componentes': { title: 'Componentes', description: 'Nossa biblioteca de UI.' },
  'advanced-components': { title: 'Advanced Components', description: 'Componentes prontos para produção.' },
  'privacy': { title: 'Privacidade', description: 'Nossa política de privacidade.' },
  'terms': { title: 'Termos de Uso', description: 'Nossos termos de serviço.' },
};

changelogEntries.forEach((entry) => {
  pagesData[`changelog/${entry.id}`] = {
    title: `Changelog v${entry.data.version}`,
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
  }),
});
