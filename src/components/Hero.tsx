"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ShieldCheck, Users, Star } from "lucide-react";
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
              <span className="text-xl">🚀</span>
              <span className="text-muted-foreground font-medium">Setup Automático para Vibe Coding</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl leading-tight"
          >
            O terminal não precisa ser o seu{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent animate-gradient">
              pior pesadelo
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            O SetupVibe prepara sua máquina com um clique para que o Claude, Copilot e Gemini façam a mágica acontecer.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center gap-4"
          >
            <Button size="lg" className="group text-lg px-8 h-14" asChild>
              <a href={withBase("/setup")}>
                Instalar Agora
                <Download className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground italic">
              100% gratuito. Instalação segura para Windows, Mac e Linux.
            </p>
          </motion.div>

          {/* Stats / Social Proof Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12"
          >
            <div className="flex flex-col items-center p-4 rounded-xl bg-background/50 border backdrop-blur-sm">
              <div className="flex items-center gap-2 text-lg font-semibold mb-2">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <span>Avaliação 5 Estrelas</span>
              </div>
              <p className="text-sm text-center text-muted-foreground">
                "A salvação para quem quer focar só no Cursor."
              </p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl bg-background/50 border backdrop-blur-sm">
              <div className="flex items-center gap-2 text-lg font-semibold mb-2">
                <ShieldCheck className="h-5 w-5 text-green-500" />
                <span>100% Confiável</span>
              </div>
              <p className="text-sm text-center text-muted-foreground">
                Download Seguro e Verificado.
              </p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl bg-background/50 border backdrop-blur-sm">
              <div className="flex items-center gap-2 text-lg font-semibold mb-2">
                <Users className="h-5 w-5 text-blue-500" />
                <span>Comunidade Ativa</span>
              </div>
              <p className="text-sm text-center text-muted-foreground">
                Junte-se à Comunidade Vibe Codders.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
