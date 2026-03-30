# Design System & Documentation - SetupVibe

Este documento detalha o sistema de design, componentes, padrões e decisões arquiteturais visuais do projeto SetupVibe. O projeto utiliza **Astro 4.x**, **React 18**, **Tailwind CSS** e segue a filosofia do **shadcn/ui**.

---

## 1. Identidade Visual e Conceito

O SetupVibe é projetado para evocar a cultura **"Vibe Coding"**: um ambiente onde a tecnologia é invisível e a produtividade com IA é fluida. Visualmente, isso se traduz em:
- **Transparências e Vidros:** Uso extensivo de `backdrop-blur`.
- **Gradients de Neon:** Toques de Turquesa e Roxo sobre fundos escuros.
- **Organicidade:** Animações fluídas (Blobs) que quebram a rigidez do grid.

---

## 2. Design Tokens (Resumo)

### 2.1 Cores Principais
- **Primary (`--primary`):** `#04CEBB` (Turquesa) - Cor de ação principal.
- **Secondary (`--secondary`):** `#032F62` (Dark Slate) - Profundidade e contraste.
- **Background:** `Whitesmoke` (Light) / `Deep Slate` (Dark).

### 2.2 Tipografia
- **Inter var:** Versatilidade para interface técnica e leitura fluida.

---

## 3. Guia Detalhado de Componentes

Este guia serve como manual para desenvolvedores e designers que desejam manter a consistência do site.

### 3.1 Componentes de UI (Atômicos)

#### **Button (`src/components/ui/button.tsx`)**
- **Descrição:** O principal elemento de interação. Baseado no Radix UI.
- **Casos de Uso:**
  - `default`: Botão "Instalar Agora" (CTA Principal).
  - `outline`: "Ver no GitHub" ou ações secundárias.
  - `ghost`: Navegação no Header ou botões de fechar.
- **Dicas:** Use a variante `lg` para CTAs que precisam de atenção total. Combine com ícones da `lucide-react` sempre à direita para indicar progressão.
- **Sugestão:** Em páginas de vendas, use a classe `animate-shimmer` para dar um brilho metálico ao botão.

#### **GlassCard / MagicCard**
- **Descrição:** Containers com efeito de vidro e bordas que brilham ao passar o mouse.
- **Casos de Uso:** Exibição de módulos do instalador ou pequenos cards de depoimento.
- **Dicas:** Não abuse do `backdrop-blur` em muitos elementos simultâneos para não impactar a performance de scroll em dispositivos móveis.
- **Sugestão:** Use em grids de 3 ou 4 colunas no Desktop.

---

### 3.2 Componentes de Layout & Domínio

#### **Hero (`src/components/Hero.tsx`)**
- **Descrição:** A primeira impressão do site. Título gigante, blobs animados e imagem 3D.
- **Casos de Uso:** Landing page principal.
- **Dicas:** Mantenha o título curto. O gradiente animado (`animate-gradient`) deve ser usado apenas na palavra-chave (ex: "pior pesadelo").
- **Sugestão:** A imagem do terminal deve estar sempre em `.png` transparente para que o efeito de sombra e glow de fundo funcione corretamente.

#### **CrossPlatformCTA (`src/components/CrossPlatformCTA.tsx`)**
- **Descrição:** Bloco de confiança técnica que mostra compatibilidade MacOS, Linux e Windows.
- **Casos de Uso:** Posicionado logo após a explicação de como funciona (Features).
- **Dicas:** Use ícones claros. Cada card deve focar em um SO específico para facilitar o escaneamento visual do usuário.
- **Sugestão:** Se adicionar suporte a novas distros (ex: Arch), adicione um novo card aqui com o ícone correspondente.

#### **BentoGrid / ModulesGrid**
- **Descrição:** Layout assimétrico moderno inspirado no design da Apple.
- **Casos de Uso:** Mostrar as ferramentas que o SetupVibe instala (Zsh, Docker, LLMs).
- **Dicas:** Varie o tamanho dos cards (`col-span-1`, `col-span-2`) para criar interesse visual.
- **Sugestão:** Coloque os itens mais "impressionantes" nos cards maiores.

#### **Features (`src/components/Features.tsx`)**
- **Descrição:** O passo-a-passo da instalação (1, 2, 3).
- **Casos de Uso:** Seção explicativa de "Como Funciona".
- **Dicas:** As linhas pontilhadas (`border-dashed`) ajudam a guiar o olho do usuário entre os passos. No mobile, essas linhas devem ser verticais.
- **Sugestão:** Adicione um pequeno "Badge" de tempo estimado (ex: "2 min") em cada passo.

---

### 3.3 Componentes Interativos & IA

#### **CommandPalette (`src/components/CommandPalette.tsx`)**
- **Descrição:** Interface de busca estilo Spotlight (Atalho: `CMD+K`).
- **Casos de Uso:** Navegação rápida entre ferramentas e páginas.
- **Dicas:** É um componente global injetado no `Layout`. Não precisa ser chamado manualmente nas páginas.
- **Sugestão:** Adicione comandos de "Instalação Rápida" que copiam o código pro clipboard diretamente da busca.

#### **ChatInterface / CodeBlock**
- **Descrição:** Mockup de terminal e editor de código.
- **Casos de Uso:** Demonstrar o resultado final do setup.
- **Dicas:** Use cores de sintaxe que combinem com o tema do site (Turquesa/Roxo).
- **Sugestão:** Use a biblioteca `shiki` para syntax highlighting real se for exibir muitos exemplos de código.

---

## 4. Dicas Gerais de UX & Design

1. **A Regra do 1-Clique:** Tudo no site deve levar o usuário ao botão de instalação. Não crie fricção.
2. **Hierarquia de Cor:** Use o Turquesa (`--primary`) exclusivamente para o que for clicável ou extremamente importante.
3. **Escaneabilidade:** Desenvolvedores não leem, eles "escaneiam". Use ícones, badges e negritos generosamente.
4. **Dark Mode First:** Como o público-alvo são devs, o tema escuro deve ser o mais polido. Teste sempre o contraste das bordas e sombras no Dark Mode.

---

## 5. Convenções de Expansão

Ao criar um novo componente:
1. **Pasta:** Se for genérico, `ui/`. Se for específico da página, `components/`.
2. **Props:** Use TypeScript e estenda as props nativas do HTML quando possível.
3. **Motion:** Adicione `initial` e `whileInView` do Framer Motion para que a página pareça viva ao scrollar.
4. **Base URL:** Sempre use a função `withBase()` para caminhos de imagens e links, garantindo que o deploy em subdiretórios (GitHub Pages) funcione.
