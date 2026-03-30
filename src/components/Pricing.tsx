"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

export function Pricing() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden relative border bg-card">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-background to-blue-500/10" />

          <div className="relative p-8 md:p-12 lg:p-16 flex flex-col items-center text-center space-y-8">
            <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
              <BookOpen className="h-8 w-8 text-white" />
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold max-w-2xl"
            >
              A ferramenta é apenas o primeiro passo. O próximo nível é{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                dominar a técnica.
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6 text-lg text-muted-foreground max-w-2xl"
            >
              <p>
                Ter o ambiente configurado é como ter uma cozinha profissional. Agora, você precisa aprender as receitas.</p>
              <p>O SetupVibe remove a barreira técnica para que você possa focar no que realmente importa: <strong className="text-foreground">aprender a extrair o máximo das IAs de codificação.</strong>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-4"
            >
              <Button size="lg" className="group text-lg px-8 h-14 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Quero a ferramenta e os conteúdos VIPs
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
