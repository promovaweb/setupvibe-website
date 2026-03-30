"use client";

import { motion } from "framer-motion";
import { Monitor, Apple, Terminal, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { withBase } from "@/lib/utils";

export function CrossPlatformCTA() {
  const platforms = [
    {
      name: "Windows (WSL2)",
      icon: Monitor,
      description: "O poder do Linux dentro do Windows, totalmente configurado.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "MacOS",
      icon: Apple,
      description: "Otimizado para chips M1/M2/M3 e Intel, com Homebrew e Zsh.",
      color: "from-slate-400 to-slate-600",
    },
    {
      name: "Linux (Debian/Ubuntu)",
      icon: Terminal,
      description: "Performance nativa com as melhores ferramentas de dev.",
      color: "from-orange-500 to-red-600",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase"
            >
              <CheckCircle2 className="h-4 w-4" />
              <span>Multiplataforma Real</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black tracking-tight"
            >
              Seu ambiente pronto em{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-blue-600">
                qualquer SO.
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Não importa se você usa Mac, Linux ou Windows. O SetupVibe garante que o seu 
              ambiente de <span className="text-foreground font-bold italic">Vibe Coding</span> esteja impecável e pronto para agir.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {platforms.map((platform, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.2 }}
                className="relative group p-8 rounded-3xl border bg-card/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <platform.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{platform.name}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {platform.description}
                </p>
                
                {/* Decorative background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            <Button size="lg" className="h-16 px-12 text-xl font-bold rounded-2xl shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1" asChild>
              <a href={withBase("/instalar")}>
                Começar Configuração Agora
              </a>
            </Button>
            <div className="flex items-center gap-8 text-sm text-muted-foreground font-medium">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> Macos Sequoia+
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> Ubuntu 22.04+
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> WSL2 Windows 11
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
