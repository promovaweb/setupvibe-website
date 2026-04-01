"use client";

import { motion } from "framer-motion";
import { 
  Terminal, Box, Layout, Shield, 
  Copy, Check, Activity, Container,
  Globe, BarChart3, Lock, Eye
} from "lucide-react";
import { useState } from "react";
import { cn, withBase } from "@/lib/utils";
import { GlassCard } from "./GlassCard";
import { BentoGrid, BentoCard } from "./BentoGrid";

const portainerAliases = [
  { name: "portainer-start", command: "docker compose -f ~/.setupvibe/portainer-compose.yml up -d", description: "Inicia o painel do Portainer em background." },
  { name: "portainer-stop", command: "docker compose -f ~/.setupvibe/portainer-compose.yml stop", description: "Para a execução do Portainer." },
  { name: "portainer-restart", command: "docker compose -f ~/.setupvibe/portainer-compose.yml restart", description: "Reinicia o container do Portainer." },
  { name: "portainer-update", command: "docker compose -f ~/.setupvibe/portainer-compose.yml pull && ...", description: "Atualiza a imagem e reinicia o serviço." },
];

const portainerFeatures = [
  {
    name: "Gestão Visual de Docker",
    className: "md:col-span-2",
    Icon: Layout,
    description: "Esqueça comandos complexos de terminal para gerenciar containers. O Portainer oferece uma interface web intuitiva para visualizar, iniciar, parar e remover containers, imagens, volumes e redes com apenas um clique.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />,
    cta: "Documentação Oficial",
    href: "https://docs.portainer.io/"
  },
  {
    name: "Monitoramento de Logs",
    className: "md:col-span-1",
    Icon: Eye,
    description: "Acesse logs de containers em tempo real sem precisar do `docker logs -f`. Interface limpa com busca e auto-scroll para debug rápido.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent" />,
  },
  {
    name: "Console Interativo",
    className: "md:col-span-1",
    Icon: Terminal,
    description: "Entre dentro de qualquer container diretamente pelo navegador. Execute comandos bash/sh sem precisar de SSH ou permissões extras no terminal local.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent" />,
  },
  {
    name: "Stacks (Docker Compose)",
    className: "md:col-span-1",
    Icon: Box,
    description: "Gerencie múltiplos serviços como uma única entidade (Stacks). O Portainer facilita o deploy e a edição de arquivos YAML diretamente na interface.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent" />,
  },
  {
    name: "Segurança & Acesso",
    className: "md:col-span-1",
    Icon: Lock,
    description: "Configuração segura out-of-the-box no SetupVibe. Acesso via portas 9000/9443 com isolamento de privilégios e persistência de dados em volume dedicado.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />,
  },
  {
    name: "Dashboard de Recursos",
    className: "md:col-span-2",
    Icon: BarChart3,
    description: "Visão geral do consumo de CPU, Memória e Disco de todo o seu ecossistema Docker. Identifique containers 'famintos' por recursos antes que eles afetem a performance do seu sistema.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent" />,
  },
];

export function PortainerContent() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-24">
      {/* Introduction Section */}
      <section className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
            <Container className="w-4 h-4" />
            Portainer CE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Gestão Visual com <span className="text-primary">Portainer</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            O Portainer é a interface definitiva para quem quer dominar o Docker sem ficar refém do terminal. Ele transforma a complexidade de containers, imagens e redes em um dashboard visual poderoso, intuitivo e extremamente rápido.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            <div className="flex gap-3 p-4 rounded-xl border bg-muted/30">
              <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                <Globe className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Interface Web</h4>
                <p className="text-xs text-muted-foreground">Acesse via http://localhost:9000</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 rounded-xl border bg-muted/30">
              <div className="h-10 w-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/20">
                <Activity className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Status Real</h4>
                <p className="text-xs text-muted-foreground">Monitoramento visual de containers.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
          <GlassCard className="relative p-2 aspect-video flex flex-col overflow-hidden bg-black/80">
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/5">
              <div className="flex items-center gap-2">
                <img src="https://www.portainer.io/hubfs/Portainer%20Logo%202022/Portainer%20Logo%202022%20-%20White.svg" alt="Portainer" className="h-4" />
                <span className="text-[10px] text-white/40 font-mono">| Local Environment</span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-[8px] text-green-500 uppercase font-bold">Connected</span>
              </div>
            </div>
            <div className="flex-1 p-4 flex gap-4 overflow-hidden">
              {/* Sidebar Mockup */}
              <div className="w-20 border-r border-white/5 space-y-2 hidden md:block">
                {[1,2,3,4,5].map(i => <div key={i} className="h-2 w-full bg-white/5 rounded" />)}
              </div>
              {/* Main Content Mockup */}
              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-3 gap-2">
                  <div className="border border-white/10 rounded p-2 flex flex-col gap-1">
                    <span className="text-[8px] text-white/40 uppercase">Containers</span>
                    <span className="text-xl font-bold">12</span>
                  </div>
                  <div className="border border-white/10 rounded p-2 flex flex-col gap-1">
                    <span className="text-[8px] text-white/40 uppercase">Images</span>
                    <span className="text-xl font-bold">24</span>
                  </div>
                  <div className="border border-white/10 rounded p-2 flex flex-col gap-1">
                    <span className="text-[8px] text-white/40 uppercase">Volumes</span>
                    <span className="text-xl font-bold">8</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-8 w-full border border-white/5 bg-white/5 rounded flex items-center px-3 justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-[10px] font-mono">setupvibe-api</span>
                    </div>
                    <span className="text-[8px] text-white/40">90.2 MB</span>
                  </div>
                  <div className="h-8 w-full border border-white/5 bg-white/5 rounded flex items-center px-3 justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-[10px] font-mono">redis-cache</span>
                    </div>
                    <span className="text-[8px] text-white/40">12.5 MB</span>
                  </div>
                  <div className="h-8 w-full border border-white/5 bg-white/5 rounded flex items-center px-3 justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-500" />
                      <span className="text-[10px] font-mono">postgres-db</span>
                    </div>
                    <span className="text-[8px] text-white/40">240.1 MB</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-1 bg-[#00b3e3] text-white text-[10px] font-bold flex justify-between">
              <span>Portainer Community Edition</span>
              <span>v2.19.4</span>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="h-12 w-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 mx-auto mb-4">
            <Box className="w-6 h-6 text-blue-500" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Docker sem dor de cabeça</h3>
          <p className="text-muted-foreground text-lg">
            O SetupVibe instala o Portainer como a ferramenta central para você orquestrar seus containers com facilidade.
          </p>
        </div>

        <BentoGrid className="lg:auto-rows-[18rem]">
          {portainerFeatures.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </section>

      {/* Aliases Section */}
      <section className="space-y-8">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold">Aliases de Controle</h3>
          <p className="text-muted-foreground">
            Mesmo sendo visual, você pode controlar o ciclo de vida do Portainer via terminal com comandos simples.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {portainerAliases.map((alias) => (
            <motion.div
              key={alias.name}
              whileHover={{ y: -4 }}
              className="group p-5 rounded-2xl border bg-muted/30 hover:bg-muted/50 transition-all cursor-pointer relative"
              onClick={() => copyToClipboard(alias.command, alias.name)}
            >
              <div className="justify-between items-start mb-3 flex">
                <span className="text-sm font-bold font-mono text-primary leading-tight break-all">{alias.name}</span>
                {copied === alias.name ? (
                  <Check className="w-4 h-4 text-green-500 shrink-0" />
                ) : (
                  <Copy className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                )}
              </div>
              <p className="text-xs font-mono text-muted-foreground mb-2 break-all opacity-50">{alias.command.substring(0, 30)}...</p>
              <p className="text-sm leading-snug">{alias.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Connection Info */}
      <section className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10 text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold">Como Acessar?</h3>
          <p className="text-muted-foreground leading-relaxed">
            Após a instalação do SetupVibe Desktop, o Portainer estará rodando automaticamente. Você pode acessá-lo pelo seu navegador favorito através dos endereços:
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <code className="px-4 py-2 rounded-lg bg-black/50 text-primary border border-primary/20 font-mono text-sm">
              http://localhost:9000
            </code>
          </div>
          <p className="text-xs text-muted-foreground pt-4">
            * No primeiro acesso, você precisará definir a senha do usuário <strong className="text-foreground">admin</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}
