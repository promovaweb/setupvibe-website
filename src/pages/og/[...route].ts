import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';

const changelogEntries = await getCollection('changelog');

const pagesData: Record<string, { title: string; description: string }> = {
  'index': { title: 'setupvibe --init', description: 'O Seu Ambiente Vibe Coding em 1 Clique. Ambiente dev completo, rápido e sem complicações.' },
  'sobre': { title: 'setupvibe --sobre', description: 'Simplificando o desenvolvimento para a era das IAs.' },
  'como-funciona': { title: 'setupvibe --como-funciona', description: 'Os bastidores do seu novo terminal e ecossistema dev.' },
  'ferramentas': { title: 'setupvibe --ferramentas', description: 'Conheça todas as ferramentas que instalamos pra você automaticamente.' },
  'instalar': { title: 'setupvibe --instalar', description: 'Sua máquina pronta para Vibe Coding em apenas um comando.' },
  'atalhos': { title: 'setupvibe --atalhos', description: 'Domine o seu terminal com os melhores atalhos para Vibe Coding.' },
  'perguntas-frequentes': { title: 'setupvibe --faq', description: 'Tire suas dúvidas sobre segurança, ferramentas e instalação.' },
  'changelog': { title: 'setupvibe --changelog', description: 'Acompanhe a evolução do seu ambiente de desenvolvimento.' },
  'blog': { title: 'setupvibe --blog', description: 'Dicas de Vibe Coding, IA e produtividade no terminal.' },
  'blog/getting-started-with-ai': { title: "setupvibe --blog-post", description: "Getting Started with AI: A Beginner's Guide to Vibe Coding." },
  'componentes': { title: 'setupvibe --ui', description: 'Nossa biblioteca de componentes modernos para interfaces de IA.' },
  'componentes-avancados': { title: 'setupvibe --advanced', description: 'Componentes complexos e otimizados para produção.' },
  'privacidade': { title: 'setupvibe --privacidade', description: 'Transparência e segurança dos seus dados.' },
  'termos': { title: 'setupvibe --termos', description: 'Diretrizes de uso e licenciamento da ferramenta.' },
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
    backgroundColor: [13, 16, 23], // Deep slate/black style terminal
    logo: {
      path: 'public/logo.png',
      size: [80, 80],
    },
  }),
});
