"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Plus, Wrench, Bug, Zap, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const allChangelogData = [
  {
    version: "v0.37.0",
    date: "27 de Março, 2026",
    isLatest: true,
    title: "AI Aliases & Documentation",
    changes: [
      { type: "added", title: "Novas Funcionalidades", items: ["Novos aliases `gemini` e `claude` em todas as configurações zsh", "Documentação atualizada com os novos comandos de IA"] },
      { type: "improved", title: "Revisão Tmux", items: ["Configurações de Tmux totalmente revisadas", "Remoção do legado `tmux.conf` em favor de versões desktop/server"] }
    ]
  },
  {
    version: "v0.36.0",
    date: "25 de Março, 2026",
    title: "Docker Swarm & Zoxide",
    changes: [
      { type: "added", title: "Novas Funcionalidades", items: ["Opção de setup Docker Swarm Manager no `desktop.sh`", "Instalação do `zoxide` no `server.sh` para navegação inteligente"] },
      { type: "fixed", title: "Ajustes", items: ["E-mail de contato corrigido para `contato@promovaweb.com` em todos os arquivos"] }
    ]
  },
  {
    version: "v0.35.0",
    date: "25 de Março, 2026",
    title: "Specialized Tmux & Multi-lang Docs",
    changes: [
      { type: "added", title: "Configurações", items: ["Arquivos de configuração tmux dedicados para desktop e server", "Tmux desktop com 20+ plugins e persistência de sessão"] },
      { type: "improved", title: "Documentação", items: ["Guia do Tmux traduzido para Português", "Documentação do Server Edition em Inglês e Português", "Tabelas markdown padronizadas"] }
    ]
  },
  {
    version: "v0.34.0",
    date: "21 de Março, 2026",
    title: "n8n & Linux Enhancements",
    changes: [
      { type: "added", title: "Ferramentas", items: ["Instalação do n8n incluída no passo de AI CLI do `desktop.sh`", "Adicionado arquivo de configuração `ecosystem.config.js` para PM2"] },
      { type: "improved", title: "Suporte de Sistema", items: ["Detecção aprimorada para Ubuntu 24.04, Debian 12, Zorin OS 18", "Gerenciamento de chaves APT simplificado"] }
    ]
  },
  {
    version: "v0.33.0",
    date: "18 de Março, 2026",
    title: "Hardening & GPG",
    changes: [
      { type: "fixed", title: "Segurança", items: ["Processo de instalação do Homebrew fortalecido com melhor gestão de permissões", "Melhoria no manuseio de chaves GPG em múltiplos ambientes"] }
    ]
  },
  {
    version: "v0.32.1",
    date: "18 de Março, 2026",
    title: "Ajustes de Ambiente",
    changes: [
      { type: "fixed", title: "Scripts", items: ["Exportação de variáveis de ambiente corrigida nos scripts de setup", "Garantia de execução das ferramentas base antes das dependências"] }
    ]
  },
  {
    version: "v0.32.0",
    date: "18 de Março, 2026",
    title: "Guia PM2 & Tmux Bindings",
    changes: [
      { type: "added", title: "Documentação", items: ["Guia completo de PM2 (comandos, config, logs)", "Configuração de PM2 com suporte a arquivos ecosystem"] },
      { type: "improved", title: "Usabilidade", items: ["Atalhos de teclado do Tmux revisados para evitar conflitos"] }
    ]
  },
  {
    version: "v0.31.0",
    date: "18 de Março, 2026",
    title: "TPM & AI CLI Tools",
    changes: [
      { type: "added", title: "Plugins & IA", items: ["Instalação do Tmux Plugin Manager (TPM)", "Adicionado plugin `jaclu/tmux-menus`", "Passo de instalação de AI CLI Tools (Claude, Gemini, etc)"] },
      { type: "fixed", title: "macOS", items: ["Bloqueio de execução como root no macOS com instruções claras", "Melhoria na detecção de GPG e keyrings APT"] }
    ]
  },
  {
    version: "v0.30.0",
    date: "18 de Março, 2026",
    title: "Refatoração Server",
    changes: [
      { type: "improved", title: "Server Script", items: ["Passos de setup do servidor atualizados para incluir Tmux como passo dedicado", "Renomeação e reorganização das seções de execução"] }
    ]
  },
  {
    version: "v0.1.0",
    date: "22 de Fevereiro, 2026",
    title: "Lançamento Inicial",
    changes: [
      { type: "added", title: "Primeira Versão", items: ["Scripts iniciais para macOS e Linux Desktop/Server", "Suporte para arquiteturas x86_64 e arm64", "Instalação de Docker e Docker Compose", "Groundwork para i18n"] }
    ]
  }
];

export function ChangelogList() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(allChangelogData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = allChangelogData.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-12">
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-12"
          >
            {currentItems.map((version) => (
              <div key={version.version} className="relative md:pl-12">
                <div className={`absolute left-0 w-8 h-8 rounded-full border-4 border-background hidden md:flex items-center justify-center ${version.isLatest ? 'bg-primary' : 'bg-muted border-border'}`}>
                  {version.isLatest ? (
                    <Sparkles className="h-4 w-4 text-primary-foreground" />
                  ) : (
                    <Zap className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>

                <div className="border rounded-lg p-6 bg-card hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 text-sm font-semibold rounded-full ${version.isLatest ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                      {version.version}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {version.date}
                    </span>
                    {version.isLatest && (
                      <span className="ml-auto px-2.5 py-0.5 text-xs font-medium rounded-full bg-green-500/10 text-green-600 dark:text-green-400">
                        Latest
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold mb-4">{version.title}</h3>

                  <div className="space-y-6">
                    {version.changes.map((change, idx) => (
                      <div key={idx}>
                        <div className={`flex items-center gap-2 text-sm font-semibold mb-2 ${
                          change.type === 'added' ? 'text-green-600 dark:text-green-400' : 
                          change.type === 'fixed' ? 'text-red-600 dark:text-red-400' : 
                          'text-blue-600 dark:text-blue-400'
                        }`}>
                          {change.type === 'added' ? <Plus className="h-4 w-4" /> : 
                           change.type === 'fixed' ? <Bug className="h-4 w-4" /> : 
                           <Wrench className="h-4 w-4" />}
                          {change.title}
                        </div>
                        <ul className="space-y-2 text-sm text-muted-foreground ml-6">
                          {change.items.map((item, iIdx) => (
                            <li key={iIdx} className="list-disc">{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex flex-col items-center gap-4 pt-8">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  className="w-9"
                  onClick={() => goToPage(page)}
                >
                  {page}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Mostrando {startIndex + 1}-{Math.min(startIndex + itemsPerPage, allChangelogData.length)} de {allChangelogData.length} versões
          </p>
        </div>
      )}
    </div>
  );
}
