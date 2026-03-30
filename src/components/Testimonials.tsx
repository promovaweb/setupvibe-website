"use client";

import { motion } from "framer-motion";
import { Code2, TerminalSquare, Sparkles, Layers } from "lucide-react";

const integrations = [
  {
    name: "Cursor IDE",
    icon: Code2,
    description: "Permissões locais ajustadas para edição autônoma de múltiplos arquivos.",
  },
  {
    name: "GitHub Copilot",
    icon: TerminalSquare,
    description: "Ambiente de terminal validado para execução de comandos sem atrito.",
  },
  {
    name: "Claude / Gemini",
    icon: Sparkles,
    description: "Configuração de pastas e caminhos (paths) para testes locais imediatos.",
  },
  {
    name: "Node.js, Python & React",
    icon: Layers,
    description: "As versões mais estáveis já preparadas para o seu projeto rodar de primeira.",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto"
          >
            Compatível com os melhores{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              agentes e frameworks
            </span>{" "}
            do mercado
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {integrations.map((integration, index) => {
            const Icon = integration.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl border bg-card hover:border-purple-500/50 transition-colors"
              >
                <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{integration.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {integration.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
