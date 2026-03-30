"use client";

import { motion } from "framer-motion";
import { 
  Terminal, Server, Monitor, CheckCircle, 
  Cpu, Zap, ShieldCheck, Box, 
  HelpCircle,
  ArrowRight, Download, Copy,
  Bot, Code2, Layers
} from "lucide-react";
import { CodeBlock } from "@/components/CodeBlock";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { withBase } from "@/lib/utils";

export function SetupContent() {
  const tools = [
    { icon: Terminal, name: "Zsh + Starship", desc: "Terminal ultra-rápido e informativo" },
    { icon: Bot, name: "Claude-Code / Gemini CLI", desc: "IA nativa no seu terminal" },
    { icon: Box, name: "Docker + Portainer", desc: "Gerenciamento de containers" },
    { icon: Layers, name: "TMUX Master", desc: "Múltiplas sessões em uma tela" },
    { icon: Code2, name: "Python (uv) + Node.js", desc: "Ambientes isolados e velozes" },
    { icon: Zap, name: "Modern Unix Tools", desc: "eza, bat, ripgrep, zoxide" },
  ];

  const faqs = [
    {
      q: "O script é seguro? Posso ver o que ele faz?",
      a: "Sim! O script é 100% Open Source. Você pode inspecionar o código fonte de cada comando acessando as URLs diretamente no seu navegador. Ele não pede sua senha de root a menos que seja estritamente necessário para instalar pacotes via gerenciador oficial."
    },
    {
      q: "Funciona no Windows?",
      a: "Para Windows, recomendamos o uso via WSL2 (Ubuntu 22.04+). O script de 'Desktop' funcionará perfeitamente dentro do seu ambiente Linux no Windows."
    },
    {
      q: "E se eu já tiver algumas coisas instaladas?",
      a: "O script é inteligente. Ele verifica se ferramentas como Homebrew ou Node.js já existem e apenas atualiza ou pula para o próximo passo, evitando conflitos."
    },
    {
      q: "Quanto tempo demora?",
      a: "Em uma conexão de 100MB, leva cerca de 15 a 20 minutos. A maior parte do tempo é baixando os binários e compilando o tema do Starship."
    }
  ];

  return (
    <div className="w-full bg-background min-h-screen pt-12">
      {/* Main Setup Tabs */}
      <div className="container mx-auto px-4 pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <Tabs defaultValue="desktop" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-2 p-1 h-12">
                <TabsTrigger value="desktop" className="flex items-center gap-2 text-base">
                  <Monitor className="w-4 h-4" />
                  Desktop
                </TabsTrigger>
                <TabsTrigger value="server" className="flex items-center gap-2 text-base">
                  <Server className="w-4 h-4" />
                  Servidor
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="desktop" className="space-y-8 mt-0 focus-visible:outline-none">
              <div className="bg-card border rounded-3xl p-6 md:p-10 shadow-xl shadow-purple-500/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                  <Monitor className="w-64 h-64 rotate-12" />
                </div>
                
                <div className="relative space-y-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <h2 className="text-2xl md:text-3xl font-bold">Mac & Linux (WSL)</h2>
                      <p className="text-muted-foreground">Otimizado para produtividade local e interface gráfica.</p>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Recomendado
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary font-bold text-sm">1</div>
                      <p className="text-sm font-medium">Abra seu Terminal</p>
                      <p className="text-xs text-muted-foreground">Pode ser o nativo, iTerm2 ou Warp.</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary font-bold text-sm">2</div>
                      <p className="text-sm font-medium">Cole o Comando</p>
                      <p className="text-xs text-muted-foreground">Copie o comando cirúrgico abaixo.</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary font-bold text-sm">3</div>
                      <p className="text-sm font-medium">Vibe Coding On</p>
                      <p className="text-xs text-muted-foreground">Relaxe enquanto o script faz a mágica.</p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-semibold text-muted-foreground">COMANDO DE INSTALAÇÃO</label>
                      <span className="text-[10px] text-yellow-600 font-mono bg-yellow-100 dark:bg-yellow-900/30 px-2 py-0.5 rounded">Requer Sudo</span>
                    </div>
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                      <div className="relative">
                        <CodeBlock code="curl -sL desktop.setupvibe.dev | bash" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 rounded-2xl p-4 border border-dashed">
                    <p className="text-xs text-muted-foreground text-center italic">
                      "Atenção: A primeira vez que o Homebrew baixar pacotes, o processo pode parecer que travou em [Downloading]. É normal, apenas deixe a mágica acontecer!"
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="server" className="space-y-8 mt-0 focus-visible:outline-none">
              <div className="bg-card border rounded-3xl p-6 md:p-10 shadow-xl shadow-blue-500/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                  <Server className="w-64 h-64 -rotate-12" />
                </div>
                
                <div className="relative space-y-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <h2 className="text-2xl md:text-3xl font-bold">Linux Server (Headless)</h2>
                      <p className="text-muted-foreground">Para VPS, AWS, e servidores sem interface gráfica.</p>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-xs font-bold uppercase tracking-wider">
                      <Cpu className="w-3.5 h-3.5" />
                      Lightweight
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-blue-500 font-bold text-sm">1</div>
                      <p className="text-sm font-medium">Conecte via SSH</p>
                      <p className="text-xs text-muted-foreground">Acesse sua VPS remota.</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-blue-500 font-bold text-sm">2</div>
                      <p className="text-sm font-medium">Verifique o Root</p>
                      <p className="text-xs text-muted-foreground">Certifique-se que tem permissões sudo.</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-blue-500 font-bold text-sm">3</div>
                      <p className="text-sm font-medium">Execute</p>
                      <p className="text-xs text-muted-foreground">Comando otimizado sem UI tools.</p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-semibold text-muted-foreground">COMANDO PARA SERVIDOR</label>
                      <span className="text-[10px] text-blue-600 font-mono bg-blue-100 dark:bg-blue-900/30 px-2 py-0.5 rounded">Ubuntu/Debian</span>
                    </div>
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                      <div className="relative">
                        <CodeBlock code="curl -sL server.setupvibe.dev | bash" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>

      {/* What's in the box Section */}
      <section className="bg-muted/30 py-24 border-y">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O que vem na caixa?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Não instalamos lixo. Apenas as ferramentas que os melhores desenvolvedores do mundo usam para trabalhar com IA.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {tools.map((tool, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-background border rounded-2xl p-6 hover:shadow-md transition-shadow group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <tool.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{tool.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{tool.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button variant="outline" size="lg" className="rounded-full gap-2" asChild>
              <a href={withBase("/ferramentas")}>
                Ver detalhes da Stack
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4 opacity-50" />
            <h2 className="text-3xl font-bold mb-4">Dúvidas Frequentes</h2>
            <p className="text-muted-foreground">Tudo o que você precisa saber antes de rodar o comando.</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b">
                <AccordionTrigger className="text-left text-lg py-6 hover:no-underline hover:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ainda tem alguma dúvida?</h3>
            <p className="text-purple-100 mb-8 max-w-md mx-auto">
              Nossa comunidade no Discord está pronta para ajudar você com qualquer problema na instalação.
            </p>
            <Button size="lg" variant="secondary" className="rounded-full bg-white text-purple-600 hover:bg-white/90" asChild>
              <a href="https://promovaweb.com/discord" target="_blank" rel="noopener noreferrer">
                Entrar no Discord
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
