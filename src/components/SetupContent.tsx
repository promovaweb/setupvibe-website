"use client";

import { motion } from "framer-motion";
import { Terminal, Server, Monitor, CheckCircle, Copy } from "lucide-react";
import { CodeBlock } from "@/components/CodeBlock";

export function SetupContent() {
  const platforms = [
    {
      id: "desktop",
      title: "Mac & Linux (Desktop)",
      icon: Monitor,
      description: "Para uso diário no seu computador pessoal.",
      steps: [
        "Abra o seu terminal (Terminal.app no Mac ou seu terminal padrão no Linux).",
        "Cole o comando abaixo e pressione Enter.",
        "Aguarde o processo finalizar (pode levar de 15 a 45 minutos dependendo da sua internet e processador)."
      ],
      code: "curl -sL https://raw.githubusercontent.com/promovaweb/setupvibe/refs/heads/main/desktop.sh | bash"
    },
    {
      id: "windows",
      title: "Windows (WSL 2)",
      icon: Terminal,
      description: "Instalação nativa via Subsistema Linux para Windows.",
      steps: [
        "Abra o PowerShell como Administrador e instale o WSL rodando: `wsl --install`",
        "Reinicie o computador caso solicitado.",
        "Abra o aplicativo 'Ubuntu' recém-instalado (este será o seu novo terminal).",
        "Cole o comando abaixo dentro do Ubuntu e pressione Enter."
      ],
      code: "curl -sL https://raw.githubusercontent.com/promovaweb/setupvibe/refs/heads/main/desktop.sh | bash"
    },
    {
      id: "server",
      title: "Servidor (Somente Linux)",
      icon: Server,
      description: "Para VPS ou servidores (AWS, DigitalOcean, Hetzner, etc). Sem ferramentas com interface gráfica.",
      steps: [
        "Acesse o seu servidor remotamente via SSH.",
        "Certifique-se que você é um usuário sudo (ou root).",
        "Cole o comando abaixo e pressione Enter."
      ],
      code: "curl -sL https://raw.githubusercontent.com/promovaweb/setupvibe/refs/heads/main/server.sh | bash"
    }
  ];

  return (
    <div className="w-full">
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 border-b overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-muted/20" />
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 rounded-full border bg-background/80 backdrop-blur-sm px-4 py-1.5 text-sm mb-6 shadow-sm">
              <span className="text-xl">🚀</span>
              <span className="text-muted-foreground font-semibold">Tudo pronto em 1 comando</span>
            </div>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-4xl mx-auto">
            Instalar o SetupVibe
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Selecione a sua plataforma abaixo e copie o comando cirúrgico que transformará a sua máquina na melhor ferramenta de código possível.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:py-24 max-w-5xl space-y-24">
        {platforms.map((platform, index) => {
          const Icon = platform.icon;
          return (
            <motion.div 
              key={platform.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row gap-8">
                {/* Linha de cima / esquerda (Título) */}
                <div className="md:w-1/3">
                  <div className="inline-flex p-4 rounded-xl bg-primary/10 text-primary mb-6">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{platform.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {platform.description}
                  </p>
                </div>
                
                {/* Lado Direito (Passos e Código) */}
                <div className="md:w-2/3 space-y-8">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg border-b pb-2">Instruções</h3>
                    <ul className="space-y-4">
                      {platform.steps.map((step, sIdx) => (
                        <li key={sIdx} className="flex gap-3">
                          <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                          <span className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{__html: step.replace(/`([^`]+)`/g, '<code class="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-primary">$1</code>')}} />
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <h3 className="font-semibold text-lg mb-4">Comando de Instalação:</h3>
                    <div className="rounded-xl overflow-hidden [&>*]:m-0 border shadow-sm">
                      <CodeBlock code={platform.code} />
                    </div>
                    <p className="text-sm text-yellow-600 dark:text-yellow-500 mt-4 italic">
                      Atenção: A primeira vez que o Homebrew baixar pacotes, o processo pode parecer que travou em "[Downloading]". É normal, apenas deixe a mágica acontecer!
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
