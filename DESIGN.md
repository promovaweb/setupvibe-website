# Design System & Documentation - SetupVibe

Este documento detalha o sistema de design, componentes, padrões e decisões arquiteturais visuais do projeto SetupVibe. O projeto utiliza **Astro**, **React**, **Tailwind CSS** e segue a filosofia do **shadcn/ui**.

## 1. Design Tokens

### 1.1 Cores (Paleta Base)
O sistema utiliza variáveis CSS para suportar temas claro e escuro (Dark Mode).

| Variável | Descrição | Light Value (HSL) | Dark Value (HSL) |
| :--- | :--- | :--- | :--- |
| `--background` | Cor de fundo principal | `0 0% 100%` | `222.2 84% 4.9%` |
| `--foreground` | Cor do texto principal | `222.2 84% 4.9%` | `210 40% 98%` |
| `--primary` | Cor de destaque/ação | `222.2 47.4% 11.2%` | `210 40% 98%` |
| `--secondary` | Cor secundária | `210 40% 96.1%` | `217.2 32.6% 17.5%` |
| `--accent` | Cor de ênfase | `210 40% 96.1%` | `217.2 32.6% 17.5%` |
| `--muted` | Texto/elementos discretos | `210 40% 96.1%` | `217.2 32.6% 17.5%` |
| `--destructive` | Cores de erro/perigo | `0 84.2% 60.2%` | `0 62.8% 30.6%` |
| `--border` | Cor de bordas | `214.3 31.8% 91.4%` | `217.2 32.6% 17.5%` |

### 1.2 Tipografia
- **Fonte Principal:** `Inter var` (Sans-serif)
- **Escalabilidade:** Utiliza as utilidades padrão do Tailwind (`text-sm`, `text-base`, `text-lg`, `text-xl`, etc.) com pesos que variam de `font-normal` a `font-bold`.

### 1.3 Bordas e Raios (Border Radius)
- **Base:** `--radius: 0.625rem` (utilizado via `rounded-lg`)
- **Medium:** `calc(var(--radius) - 2px)` (`rounded-md`)
- **Small:** `calc(var(--radius) - 4px)` (`rounded-sm`)

### 1.4 Layout & Container
- **Max Width:** `1400px` (2xl screen)
- **Padding:** `2rem` de padding lateral padrão no container centralizado.

---

## 2. Animações e Efeitos Visuais

O projeto inclui várias animações customizadas definidas no `tailwind.config.mjs` e `global.css`:

- **Marquee:** Efeito de scroll infinito horizontal (usado em logotipos).
- **Shimmer:** Efeito de carregamento/brilho metálico (usado em botões premium).
- **Blob:** Elementos orgânicos flutuantes que mudam de forma e posição.
- **Gradient:** Gradientes animados que mudam de posição suavemente.
- **Accordion Down/Up:** Transições suaves para expansão de conteúdo.
- **Marker Underline:** Sublinhado animado que preenche o fundo ao passar o mouse.

---

## 3. Biblioteca de Componentes

### 3.1 Componentes de UI (Atômicos/Moleculares)
Localizados em `src/components/ui/`. Seguem o padrão de acessibilidade e estilização do shadcn/ui.

- **Accordion:** Painéis colapsáveis.
- **Alert:** Notificações de status importantes.
- **Avatar:** Representação visual de usuário.
- **Badge:** Pequenas etiquetas de status ou categoria.
- **Button:** Botões versáteis com variantes (primary, outline, ghost, link).
- **Card:** Container básico para agrupamento de conteúdo.
- **Input:** Campos de entrada de texto estilizados.
- **Progress:** Barras de progresso lineares.
- **Skeleton:** Placeholders de carregamento.
- **Spinner:** Indicador de atividade.
- **Switch:** Controle binário (Toggle).
- **Tabs:** Navegação entre conteúdos relacionados.
- **Tooltip:** Informações extras ao passar o mouse.

### 3.2 Componentes de Domínio (Seções e Features)
Localizados em `src/components/`.

- **Hero:** Seção de destaque inicial com título impactante e CTA.
- **Header & Footer:** Navegação e rodapé consistentes.
- **BentoGrid:** Layout moderno em grade assimétrica para features.
- **Features / AdvancedShowcase:** Exibição detalhada de funcionalidades.
- **Pricing:** Tabelas de preços com switch anual/mensal e calculadora.
- **Testimonials:** Prova social com cards animados.
- **MarqueeLogos:** Carrossel infinito de logotipos de parceiros.
- **FAQ:** Seção de perguntas frequentes com Accordion.
- **CommandPalette:** Barra de busca/comando estilo Spotlight (CMD+K).
- **ChatInterface:** Mock de interface de chat com IA.
- **MetricsDashboard:** Visualização de dados e estatísticas.
- **Timeline:** Exibição cronológica de eventos ou roadmap.
- **CookieConsent:** Banner de LGPD/Privacidade.

---

## 4. Estrutura de Layout e Páginas

### 4.1 Layout Principal (`main.astro`)
Envolve todas as páginas e injeta:
- `Header` (Sticky)
- `Main Content` (Slot central)
- `Footer`
- `CommandPalette` (Global)
- `CookieConsent` (Global)

### 4.2 Páginas Principais
- **Home (`index.astro`):** Vitrine principal do produto.
- **Components (`componentes.astro` / `advanced-components.astro`):** Documentação e showcase dos componentes.
- **Blog:** Sistema de conteúdo estático para artigos.
- **Específicas:** FAQ, Sobre, Preços, Termos e Privacidade.

---

## 5. Implementação Técnica

- **Framework:** Astro 4.x (Islands Architecture).
- **Interatividade:** React 18+ para componentes dinâmicos (client-side).
- **Estilização:** Tailwind CSS com `tailwind-merge` e `clsx` (utilidade `cn`) para composição de classes.
- **Iconografia:** Lucide React (preferencial).
- **Acessibilidade:** Componentes baseados em Radix UI (via shadcn).
- **Dark Mode:** Implementado via classe `.dark` no `<html>`.

---

## 6. Convenções de Código Visual

1. **Classes Condicionais:** Use sempre a função `cn()` para concatenar classes do Tailwind.
2. **Variantes de Componentes:** Siga o padrão `cva` (class-variance-authority) quando aplicável.
3. **Imagens e Assets:** Localizados na pasta `public/` ou injetados via imports no Astro.
4. **Responsividade:** Mobile-first, utilizando os breakpoints padrão do Tailwind (`sm`, `md`, `lg`, `xl`, `2xl`).
