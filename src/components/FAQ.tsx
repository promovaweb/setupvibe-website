"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O SetupVibe é seguro para minha máquina?",
    answer:
      "Sim. O SetupVibe é 100% open-source. Ele utiliza caminhos limpos preferencialmente em local/binaries e foca em não poluir seu sistema root, pedindo permissões apenas guiadas pelos processos normais de package managers nativos do seu S.O.",
  },
  {
    question: "Funciona no Windows?",
    answer:
      "Sim, através do WSL 2. Basta iniciar o seu Ubuntu pelo Subsistema Linux do Windows nativo Microsoft e rodar o nosso comando lá dentro para torná-lo uma base potente para codar usando VSCode Windows com extensões Remote localizadas nele.",
  },
  {
    question: "O script sobrescreve minha infra ou arquivos pessoais?",
    answer:
      "Toda a rotina do SetupVibe que manipula configurações centrais como `.zshrc` e `.tmux.conf` criará cópias locais de Backup dos antigos em tempo real antes de sobrepor a customização para que você possa reverter manualmente a qualquer momento.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Dúvidas{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Frequentes
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Tudo o que você precisa saber sobre o SetupVibe
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
