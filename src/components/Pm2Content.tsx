"use client";

import { motion } from "framer-motion";
import { 
  Cpu, Zap, Activity, Shield, 
  Settings, Copy, Check, 
  RefreshCw, List, LineChart,
  HardDrive, BarChart3, Bell,
  ArrowUpCircle
} from "lucide-react";
import { useState } from "react";
import { cn, withBase } from "@/lib/utils";
import { GlassCard } from "./GlassCard";
import { BentoGrid, BentoCard } from "./BentoGrid";

const pm2Aliases = [
  { name: "p", command: "pm2", description: "Atalho universal para o PM2." },
  { name: "pl", command: "pm2 list", description: "Lista todos os processos ativos e seus status." },
  { name: "pmon", command: "pm2 monit", description: "Painel de monitoramento de CPU e Memória em tempo real." },
  { name: "plog", command: "pm2 logs", description: "Exibe logs de todos os processos em tempo real." },
  { name: "psave", command: "pm2 save", description: "Salva a lista atual para reiniciar automaticamente no boot." },
  { name: "pres", command: "pm2 resurrect", description: "Restaura processos salvos anteriormente." },
  { name: "pstop", command: "pm2 stop <id|name>", description: "Para um processo específico." },
  { name: "pdel", command: "pm2 delete <id|name>", description: "Remove um processo da lista do PM2." },
];

const pm2Features = [
  {
    name: "Daemonização Nativa",
    className: "md:col-span-2",
    Icon: Shield,
    description: "O PM2 mantém suas aplicações rodando 24/7 em background. O SetupVibe configura o startup nativo no Systemd (Linux) ou Launchd (macOS) para que tudo ligue automaticamente ao iniciar a máquina.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />,
    cta: "Ver documentação PM2",
    href: "https://pm2.keymetrics.io/docs/usage/quick-start/"
  },
  {
    name: "Auto-Restart",
    className: "md:col-span-1",
    Icon: RefreshCw,
    description: "Se sua aplicação crashar, o PM2 a reinicia instantaneamente. Monitoramento de memória (Max Memory Restart) garante que vazamentos não derrubem o servidor.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent" />,
  },
  {
    name: "Agentlytics Integrado",
    className: "md:col-span-1",
    Icon: Activity,
    description: "O SetupVibe inclui o Agentlytics por padrão no ecosystem.config.js, garantindo métricas avançadas de telemetria sem configuração manual.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent" />,
  },
  {
    name: "Gestão de Logs",
    className: "md:col-span-1",
    Icon: List,
    description: "Logs centralizados, rotacionados e fáceis de filtrar. Evite que arquivos de log gigantes ocupem todo o espaço em disco do seu servidor.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent" />,
  },
  {
    name: "Monitoramento em Tempo Real",
    className: "md:col-span-1",
    Icon: BarChart3,
    description: "Visualize consumo de CPU e RAM de cada processo individualmente através do comando `pmon`, com interface interativa no terminal.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />,
  },
  {
    name: "Ecosystem Config",
    className: "md:col-span-2",
    Icon: Settings,
    description: "Gerencie múltiplos apps em um único arquivo de configuração. Defina variáveis de ambiente, modo cluster e limites de recursos de forma declarativa e profissional.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent" />,
  },
];

export function Pm2Content() {
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
            <Cpu className="w-4 h-4" />
            Process Manager
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Gestão de Processos com <span className="text-primary">PM2</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            O PM2 é o gerenciador de processos padrão para aplicações Node.js e scripts de automação. Com ele, você garante que seus bots, APIs e ferramentas de IA continuem rodando silenciosamente em segundo plano, com auto-restart e monitoramento profissional.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            <div className="flex gap-3 p-4 rounded-xl border bg-muted/30">
              <div className="h-10 w-10 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20">
                <ArrowUpCircle className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Uptime 99.9%</h4>
                <p className="text-xs text-muted-foreground">Auto-restart em falhas e boot do sistema.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 rounded-xl border bg-muted/30">
              <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                <LineChart className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Telemetria</h4>
                <p className="text-xs text-muted-foreground">Monitoramento de recursos integrado.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-orange-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
          <GlassCard className="relative p-2 aspect-video flex flex-col overflow-hidden bg-black/80">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-white/5 bg-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="ml-4 text-[10px] text-muted-foreground font-mono">pm2 monit — status: online</div>
            </div>
            <div className="flex-1 p-4 font-mono text-sm space-y-4 overflow-hidden">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[10px] text-muted-foreground border-b border-white/5 pb-1 uppercase tracking-widest font-bold">
                  <span>App Name</span>
                  <span>id</span>
                  <span>status</span>
                  <span>cpu</span>
                  <span>mem</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1 border-b border-white/5">
                  <span className="text-green-400 font-bold">agentlytics</span>
                  <span className="text-white/40">0</span>
                  <span className="bg-green-500/20 text-green-500 px-1.5 py-0.5 rounded text-[10px] uppercase font-bold">online</span>
                  <span className="text-white/70">0.5%</span>
                  <span className="text-white/70">42.8mb</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1 border-b border-white/5 opacity-50">
                  <span className="text-blue-400 font-bold">claude-api</span>
                  <span className="text-white/40">1</span>
                  <span className="bg-white/10 text-white/50 px-1.5 py-0.5 rounded text-[10px] uppercase font-bold">stopped</span>
                  <span className="text-white/70">0%</span>
                  <span className="text-white/70">0mb</span>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 flex gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between text-[10px] uppercase font-bold text-white/40">
                      <span>Heap Usage</span>
                      <span className="text-white/70">21%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[21%]" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between text-[10px] uppercase font-bold text-white/40">
                      <span>Event Loop</span>
                      <span className="text-white/70">0.2ms</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-[5%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-1 bg-primary text-primary-foreground text-[10px] font-bold flex justify-between">
              <span>PM2 v5.4.3</span>
              <span>Uptime: 14d 03h 22m</span>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="h-12 w-12 rounded-2xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 mx-auto mb-4">
            <Zap className="w-6 h-6 text-orange-500" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Poder de Daemonização</h3>
          <p className="text-muted-foreground text-lg">
            O SetupVibe integra o PM2 como o cérebro que mantém seu ecossistema de bots e scripts vivos, com automação total de startup.
          </p>
        </div>

        <BentoGrid className="lg:auto-rows-[18rem]">
          {pm2Features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </section>

      {/* Aliases Section */}
      <section className="space-y-8">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold">Aliases Produtivos</h3>
          <p className="text-muted-foreground">
            Esqueça comandos longos. O SetupVibe mapeou o essencial do PM2 para atalhos de poucas letras.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pm2Aliases.map((alias) => (
            <motion.div
              key={alias.name}
              whileHover={{ y: -4 }}
              className="group p-5 rounded-2xl border bg-muted/30 hover:bg-muted/50 transition-all cursor-pointer relative"
              onClick={() => copyToClipboard(alias.command, alias.name)}
            >
              <div className="justify-between items-start mb-3 flex">
                <span className="text-xl font-bold font-mono text-primary">{alias.name}</span>
                {copied === alias.name ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </div>
              <p className="text-xs font-mono text-muted-foreground mb-2 break-all">{alias.command}</p>
              <p className="text-sm leading-snug">{alias.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-muted/30 rounded-3xl p-8 md:p-12 border border-border/50">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="h-10 w-10 rounded-lg bg-green-500/10 flex items-center justify-center border border-green-500/20">
              <Activity className="w-5 h-5 text-green-500" />
            </div>
            <h4 className="text-xl font-bold">Zero Downtime</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Utilize o modo cluster para fazer deploys sem derrubar sua aplicação por um único segundo. O PM2 gerencia o reload dos workers de forma sequencial.
            </p>
          </div>
          <div className="space-y-4">
            <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
              <HardDrive className="w-5 h-5 text-blue-500" />
            </div>
            <h4 className="text-xl font-bold">Persistência de Boot</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              O SetupVibe já configura o hook de inicialização do sistema. Se o servidor for reiniciado, o PM2 ressuscita todos os seus apps instantaneamente.
            </p>
          </div>
          <div className="space-y-4">
            <div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
              <Bell className="w-5 h-5 text-purple-500" />
            </div>
            <h4 className="text-xl font-bold">Saúde da Máquina</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Com o Agentlytics integrado ao PM2, você recebe notificações e alertas se o consumo de recursos sair do controle ou se apps entrarem em loop.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
