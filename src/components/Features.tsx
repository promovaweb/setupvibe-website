"use client";

import { motion } from "framer-motion";
import {
  Terminal,
  Settings,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: Terminal,
    title: "Passo 1: Copie o Comando",
    description:
      "Visite nossa página de instalação e copie o script de curl que bate com o seu sistema (MacOS, Linux - Debian/Ubuntu ou Windows WSL2). O código é enxuto, open-source e não esconde segredos.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Settings,
    title: "Passo 2: Rode e Relaxe",
    description:
      "Cole no seu terminal clássico e dê o Enter. O script faz o lifting pesado, resolve permissões, e monta toda a arquitetura base de DevOps e linguagens sem intervenção manual e sem quebrar seu sistema.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Rocket,
    title: "Passo 3: Vibe Coding On",
    description:
      "Em média de 20 minutos, a sua máquina se transformará na verdadeira arma de produtividade. Abra o Cursor, invoque a IA localmente, confie nos binários velozes e produza código na velocidade do pensamento.",
    gradient: "from-green-500 to-emerald-500",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold"
          >
            O seu ambiente perfeito em{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              3 passos simples
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Esqueça os tutoriais confusos de 40 páginas. Nós simplificamos tudo.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative max-w-6xl mx-auto"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                className="group relative p-8 rounded-2xl border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
              >
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${step.gradient} mb-6 shadow-lg self-start`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">{step.description}</p>
                {/* Visual Connectors */}
                {index < steps.length - 1 && (
                  <>
                    <div className="hidden lg:block absolute top-[4.5rem] -right-4 w-8 border-t-2 border-dashed border-muted-foreground/30 z-10" />
                    <div className="lg:hidden absolute -bottom-8 left-16 h-8 border-l-2 border-dashed border-muted-foreground/30 z-10" />
                  </>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
