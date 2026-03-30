"use client";

import { Sparkles, Github, Instagram, Linkedin, MessageCircle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { withBase } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={withBase("/logo.png")} alt="SetupVibe Logo" className="w-8 h-8 rounded-lg object-contain" />
              <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                SetupVibe
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Simplificando o desenvolvimento para a era das Inteligências Artificiais.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/promovaweb/setupvibe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/luizeof"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/luizeof"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Produto</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={withBase("/#features")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Funcionalidades
                </a>
              </li>
              <li>
                <a
                  href={withBase("/componentes")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Componentes
                </a>
              </li>
              <li>
                <a
                  href={withBase("/advanced-components")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Avançado
                </a>
              </li>
              <li>
                <a
                  href={withBase("/how-it-works")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Como Funciona
                </a>
              </li>
              <li>
                <a
                  href={withBase("/faq")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={withBase("/about")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href={withBase("/changelog")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Changelog
                </a>
              </li>
              <li>
                <a
                  href={withBase("/setup")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Guia de Instalação
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold mb-4 underline decoration-primary/30 underline-offset-4">Comunidade</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://promovaweb.com/whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-green-500/5 hover:bg-green-500/10 border border-green-500/10 hover:border-green-500/20 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-green-500/10 text-green-500 group-hover:scale-110 transition-transform">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">WhatsApp</div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Grupos Exclusivos</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://promovaweb.com/discord"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-indigo-500/5 hover:bg-indigo-500/10 border border-indigo-500/10 hover:border-indigo-500/20 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500 group-hover:scale-110 transition-transform">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Discord</div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Fórum & Suporte</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} SetupVibe. Alguns direitos reservados.
          </p>
          <div className="flex gap-6">
            <a
              href={withBase("/privacy")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Política de Privacidade
            </a>
            <a
              href={withBase("/terms")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Termos de Uso
            </a>
            <a
              href={withBase("/privacy#cookies")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Política de Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
