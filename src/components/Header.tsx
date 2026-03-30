"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X, Github, Linkedin, MessageCircle, MessageSquare, Globe } from "lucide-react";
import { withBase } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Como Funciona", href: withBase("/how-it-works") },
    { label: "Baterias Inclusas", href: withBase("/batteries-included") },
    { label: "Changelog", href: withBase("/changelog") },
    { label: "Instalar", href: withBase("/setup") },
  ];

  const socialLinks = [
    { icon: Globe, href: "https://promovaweb.com", label: "Promovaweb", color: "text-blue-500 hover:text-blue-600" },
    { icon: MessageSquare, href: "https://promovaweb.com/whatsapp", label: "WhatsApp", color: "text-[#25D366] hover:text-[#128C7E]" },
    { icon: MessageCircle, href: "https://promovaweb.com/discord", label: "Discord", color: "text-[#5865F2] hover:text-[#4752C4]" },
    { icon: Github, href: "https://github.com/promovaweb/setupvibe", label: "GitHub", color: "text-foreground hover:opacity-80" },
    { icon: Linkedin, href: "https://linkedin.com/in/luizeof", label: "LinkedIn", color: "text-[#0077B5] hover:text-[#005E82]" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <a href={withBase("/")} className="flex items-center space-x-2">
          <img src={withBase("/logo.png")} alt="SetupVibe Logo" className="w-8 h-8 rounded-lg object-contain" />
          <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            SetupVibe
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          
          <div className="h-4 w-[1px] bg-border mx-2" />
          
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-muted-foreground transition-colors ${social.color}`}
                title={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <a href={withBase("/setup")}>
            <Button className="hidden md:inline-flex">
              Instalar
            </Button>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-6 space-y-6">
            <div className="space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
            
            <div className="pt-4 border-t space-y-4">
              <div className="flex items-center space-x-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-muted-foreground transition-colors ${social.color}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
              <a href={withBase("/setup")} onClick={() => setIsMenuOpen(false)} className="block pt-2">
                <Button className="w-full h-12 text-base font-bold">Instalar Agora</Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
