"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ShieldCheck, Star, Zap, Bot, Terminal, Globe } from "lucide-react";
import { withBase } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border bg-background/60 backdrop-blur-sm px-4 py-1.5 text-sm">
              <span className="flex h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-muted-foreground font-medium uppercase tracking-wider text-xs">A Revolução do Terminal para IA</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-7xl leading-tight"
          >
            Seu{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent animate-gradient">
              Ambiente para Vibe Coding
            </span>{" "}
            configurado em 5 minutos
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed"
          >
            O SetupVibe elimina a barreira técnica entre sua ideia e o código. Entregamos um <span className="text-foreground font-semibold">terminal de elite</span>, pronto para IA, para que você alcance o <span className="text-foreground font-semibold">estado de flow</span> instantâneo sem perder horas com configurações complexas.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group text-lg px-8 h-14 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border-0" asChild>
                <a href={withBase("/instalar")}>
                  Instalar Agora
                  <Download className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 h-14" asChild>
                <a href="#modulos">Ver Módulos</a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Suporte nativo para <span className="font-semibold text-foreground">MacOS</span>, <span className="font-semibold text-foreground">Linux (Ubuntu/Debian)</span> e <span className="font-semibold text-foreground">WSL2</span>.
            </p>
          </motion.div>

          {/* Benefits Grid - New Section to explain "Para que serve" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-6xl pt-8"
          >
            {[
              { icon: Terminal, title: "Zsh & Starship", desc: "Terminal moderno e produtivo" },
              { icon: Bot, title: "IA Integrada", desc: "Claude, Gemini e Copilot prontos" },
              { icon: Zap, title: "Modern Unix", desc: "Substitutos Rust ultra velozes" },
              { icon: ShieldCheck, title: "One-Click Setup", desc: "Sem erros, sem complicação" },
            ].map((benefit, i) => (
              <div key={i} className="flex flex-col items-center space-y-2 p-4 rounded-2xl bg-background/40 border border-border/50 backdrop-blur-sm">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-sm md:text-base">{benefit.title}</h3>
                <p className="text-xs text-muted-foreground text-center hidden md:block">{benefit.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* Stats / Social Proof Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 w-full max-w-6xl"
          >
            <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border/50">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-[10px] text-white font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-xs font-medium">Usado por +1000 devs</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-2 p-4 rounded-xl bg-muted/50 border border-border/50">
              <Zap className="h-5 w-5 text-yellow-500" />
              <span className="text-sm font-semibold">Setup em menos de 5min</span>
            </div>

            <div className="flex items-center justify-center gap-2 p-4 rounded-xl bg-muted/50 border border-border/50">
              <ShieldCheck className="h-5 w-5 text-green-500" />
              <span className="text-sm font-semibold">100% Open Source & Seguro</span>
            </div>
          </motion.div>

          {/* Terminal Image Offset */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative mt-20 w-full max-w-6xl mx-auto -mb-48 md:-mb-64"
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              
              <div 
                className="relative rounded-2xl border bg-background/50 backdrop-blur-sm overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.01]"
                style={{ transform: 'perspective(1000px) rotateX(2deg)' }}
              >
                <div className="flex items-center justify-between px-4 py-2 bg-muted/80 border-b">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">setupvibe --interactive</div>
                  <div className="w-12" />
                </div>
                <img 
                  src={withBase("/images/terminal.png")} 
                  alt="Terminal SetupVibe Showcase" 
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Gradient overlay for blending */}
              <div className="absolute -bottom-10 left-0 w-full h-32 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
