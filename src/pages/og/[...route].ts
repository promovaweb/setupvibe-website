import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';

const changelogEntries = await getCollection('changelog');

const pagesData: Record<string, { title: string; description: string }> = {
  'index': { title: 'setupvibe --init', description: 'Automatize o setup do seu terminal para IA com o SetupVibe. ZSH, Starship e IA em segundos.' },
  'sobre': { title: 'setupvibe --sobre', description: 'Conheça nossa missão de transformar o desenvolvimento com a revolução do Vibe Coding e IA.' },
  'como-funciona': { title: 'setupvibe --como-funciona', description: 'Descubra a tecnologia por trás do SetupVibe e como otimizamos seu terminal nativamente.' },
  'ferramentas': { title: 'setupvibe --ferramentas', description: 'Veja a stack completa de linguagens, utilitários e ferramentas de IA que instalamos para você.' },
  'instalar': { title: 'setupvibe --instalar', description: 'Sua máquina pronta para Vibe Coding em apenas um comando. Suporte para Mac, Linux e WSL2.' },
  'atalhos': { title: 'setupvibe --atalhos', description: 'Domine seu shell com centenas de aliases e atalhos inteligentes pré-configurados para você.' },
  'perguntas-frequentes': { title: 'setupvibe --faq', description: 'Tire suas dúvidas sobre segurança, compatibilidade e ferramentas do nosso script open-source.' },
  'changelog': { title: 'setupvibe --changelog', description: 'Acompanhe a evolução diária do seu ambiente de desenvolvimento com nossas atualizações.' },
  'blog': { title: 'setupvibe --blog', description: 'Dicas avançadas de Vibe Coding, IA e produtividade no terminal para desenvolvedores.' },
  'blog/getting-started-with-ai': { title: "setupvibe --blog-post", description: "Getting Started with AI: A Beginner's Guide to Vibe Coding." },
  'componentes': { title: 'setupvibe --ui', description: 'Biblioteca de componentes UI modernos e acessíveis para suas interfaces de IA e dashboards.' },
  'componentes-avancados': { title: 'setupvibe --advanced', description: 'Componentes complexos e prontos para produção: chats de IA, dashboards e muito mais.' },
  'privacidade': { title: 'setupvibe --privacidade', description: 'Transparência e segurança dos seus dados com o compromisso open-source do SetupVibe.' },
  'termos': { title: 'setupvibe --termos', description: 'Diretrizes de uso, licenciamento e responsabilidades do usuário da ferramenta SetupVibe.' },
  'ai-clis': { title: 'setupvibe --ai', description: 'O futuro do terminal com IA: Claude Code, Gemini CLI e mais integrados ao seu SetupVibe.' },
  'ecossistema-dev': { title: 'setupvibe --ecosystem', description: 'Go, Rust, Python e Node.js configurados sem conflitos. Seu ambiente dev pronto para criar.' },
  'fontes': { title: 'setupvibe --fontes', description: 'Guia completo para configurar Nerd Fonts e habilitar ícones e ligaduras no seu terminal.' },
  'modern-unix': { title: 'setupvibe --modern-unix', description: 'Utilitários Rust ultra rápidos (eza, bat, fd) que substituem comandos clássicos no SetupVibe.' },
  'pm2': { title: 'setupvibe --pm2', description: 'Gestão profissional de processos e bots de IA com monitoramento nativo 24/7 no SetupVibe.' },
  'portainer': { title: 'setupvibe --docker', description: 'Gerencie seus containers Docker com uma interface visual intuitiva integrada ao seu setup.' },
  'cronboard': { title: 'setupvibe --cron', description: 'Agendamento visual de tarefas e automações recorrentes no Linux com Cronboard.' },
  'tmux': { title: 'setupvibe --tmux', description: 'Multiplexação de terminal e produtividade avançada com configurações otimizadas pelo SetupVibe.' },
  'zsh-starship': { title: 'setupvibe --shell', description: 'O terminal ZSH mais rápido e bonito com prompt Starship e preset Gruvbox Rainbow.' },
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
