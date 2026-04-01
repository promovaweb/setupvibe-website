"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  Terminal, Bot, Zap, FolderTree, Layout, 
  GitBranch, Github, Key, Box, Package, 
  Code2, Cpu, Globe, Search, Command,
  ArrowUpCircle, Hash, Info, Lightbulb,
  Activity, ChevronRight, Monitor, Server,
  Infinity
} from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import { cn } from "@/lib/utils";

const categoriesData = [
  {
    "title": "SetupVibe",
    "id": "setupvibe",
    "icon": Terminal,
    "aliases": [
      {
        "name": "setupvibe",
        "availability": "🖥️ Desktop",
        "command": "curl -sSL desktop.setupvibe.dev | bash",
        "description": "Reinstala ou atualiza o SetupVibe Desktop.",
        "example": "setupvibe"
      }
    ]
  },
  {
    "title": "AI CLIs",
    "id": "ai-clis",
    "icon": Bot,
    "aliases": [
      {
        "name": "ge",
        "availability": "🌐 Ambos",
        "command": "gemini --approval-mode=yolo",
        "description": "Gemini CLI sem confirmações.",
        "example": "ge"
      },
      {
        "name": "cc",
        "availability": "🌐 Ambos",
        "command": "claude --permission-mode=auto --dangerously-skip-permissions",
        "description": "Claude CLI sem confirmações.",
        "example": "cc"
      }
    ]
  },
  {
    "title": "Skills CLI",
    "id": "skills-cli",
    "icon": Zap,
    "aliases": [
      {
        "name": "skl",
        "availability": "🌐 Ambos",
        "command": "npx skills list",
        "description": "Lista todas as skills instaladas.",
        "example": "skl"
      },
      {
        "name": "skf",
        "availability": "🌐 Ambos",
        "command": "npx skills find",
        "description": "Busca skills no registro.",
        "example": "skf react"
      },
      {
        "name": "ska",
        "availability": "🌐 Ambos",
        "command": "npx skills add",
        "description": "Instala uma nova skill.",
        "example": "ska owner/repo"
      },
      {
        "name": "sku",
        "availability": "🌐 Ambos",
        "command": "npx skills update",
        "description": "Atualiza todas as skills instaladas.",
        "example": "sku"
      },
      {
        "name": "skun",
        "availability": "🌐 Ambos",
        "command": "npx skills remove",
        "description": "Remove uma skill instalada.",
        "example": "skun nome"
      },
      {
        "name": "skc",
        "availability": "🌐 Ambos",
        "command": "npx skills check",
        "description": "Verifica atualizações disponíveis.",
        "example": "skc"
      }
    ]
  },
  {
    "title": "Shell & Utilitários",
    "id": "shell-utilitarios",
    "icon": Terminal,
    "aliases": [
      {
        "name": "zconfig",
        "availability": "🌐 Ambos",
        "command": "nano ~/.zshrc",
        "description": "Edita o arquivo de configuração do ZSH.",
        "example": "zconfig"
      },
      {
        "name": "reload",
        "availability": "🌐 Ambos",
        "command": "source ~/.zshrc",
        "description": "Recarrega as configurações do ZSH sem reiniciar o terminal.",
        "example": "reload"
      },
      {
        "name": "path",
        "availability": "🌐 Ambos",
        "command": "echo -e ${PATH//:/\\n}",
        "description": "Exibe cada entrada do PATH em uma linha separada.",
        "example": "path"
      },
      {
        "name": "h",
        "availability": "🌐 Ambos",
        "command": "history | grep",
        "description": "Busca no histórico de comandos.",
        "example": "h docker"
      },
      {
        "name": "cls",
        "availability": "🌐 Ambos",
        "command": "clear",
        "description": "Limpa o terminal.",
        "example": "cls"
      },
      {
        "name": "please",
        "availability": "🌐 Ambos",
        "command": "sudo",
        "description": "Atalho amigável para sudo.",
        "example": "please apt update"
      },
      {
        "name": "week",
        "availability": "🌐 Ambos",
        "command": "date +%V",
        "description": "Exibe o número da semana atual.",
        "example": "week"
      }
    ]
  },
  {
    "title": "Navegação & Filesystem",
    "id": "navegacao-filesystem",
    "icon": FolderTree,
    "aliases": [
      {
        "name": "..",
        "availability": "🌐 Ambos",
        "command": "cd ..",
        "description": "Sobe um nível de diretório.",
        "example": ".."
      },
      {
        "name": "...",
        "availability": "🌐 Ambos",
        "command": "cd ../..",
        "description": "Sobe dois níveis de diretório.",
        "example": "..."
      },
      {
        "name": "....",
        "availability": "🌐 Ambos",
        "command": "cd ../../..",
        "description": "Sobe três níveis de diretório.",
        "example": "...."
      },
      {
        "name": "ll",
        "availability": "🌐 Ambos",
        "command": "ls -lhA (macOS) / ls -lhA --color=auto (Linux)",
        "description": "Lista arquivos com detalhes e tamanho legível.",
        "example": "ll"
      },
      {
        "name": "la",
        "availability": "🌐 Ambos",
        "command": "ls -A (macOS) / ls -A --color=auto (Linux)",
        "description": "Lista todos os arquivos incluindo ocultos.",
        "example": "la"
      },
      {
        "name": "lsd",
        "availability": "🌐 Ambos",
        "command": "ls -d */ 2>/dev/null",
        "description": "Lista apenas diretórios.",
        "example": "lsd"
      },
      {
        "name": "md",
        "availability": "🌐 Ambos",
        "command": "mkdir -p",
        "description": "Cria diretório e subdiretórios automaticamente.",
        "example": "md projeto/src/css"
      },
      {
        "name": "rmf",
        "availability": "🌐 Ambos",
        "command": "rm -rf",
        "description": "Remove arquivos e diretórios recursivamente sem confirmação.",
        "example": "rmf pasta_velha"
      },
      {
        "name": "du1",
        "availability": "🌐 Ambos",
        "command": "du -h -d 1 (macOS) / du -h --max-depth=1 (Linux)",
        "description": "Uso de disco do diretório atual, um nível de profundidade.",
        "example": "du1"
      }
    ]
  },
  {
    "title": "Tmux",
    "id": "tmux",
    "icon": Layout,
    "aliases": [
      {
        "name": "t",
        "availability": "🌐 Ambos",
        "command": "tmux",
        "description": "Atalho para o tmux.",
        "example": "t"
      },
      {
        "name": "tn",
        "availability": "🌐 Ambos",
        "command": "tmux new -s",
        "description": "Cria nova sessão tmux.",
        "example": "tn meu-projeto"
      },
      {
        "name": "ta",
        "availability": "🌐 Ambos",
        "command": "tmux attach -t",
        "description": "Reconecta a uma sessão existente.",
        "example": "ta meu-projeto"
      },
      {
        "name": "tl",
        "availability": "🌐 Ambos",
        "command": "tmux ls",
        "description": "Lista todas as sessões tmux ativas.",
        "example": "tl"
      },
      {
        "name": "tk",
        "availability": "🌐 Ambos",
        "command": "tmux kill-session -t",
        "description": "Encerra uma sessão tmux.",
        "example": "tk meu-projeto"
      },
      {
        "name": "tka",
        "availability": "🌐 Ambos",
        "command": "tmux kill-server",
        "description": "Encerra todas as sessões tmux.",
        "example": "tka"
      },
      {
        "name": "td",
        "availability": "🌐 Ambos",
        "command": "tmux detach",
        "description": "Desconecta da sessão sem encerrá-la.",
        "example": "td"
      },
      {
        "name": "tw",
        "availability": "🌐 Ambos",
        "command": "tmux new-window",
        "description": "Cria nova janela na sessão atual.",
        "example": "tw"
      },
      {
        "name": "ts",
        "availability": "🌐 Ambos",
        "command": "tmux split-window -v",
        "description": "Divide painel horizontalmente (novo painel abaixo).",
        "example": "ts"
      },
      {
        "name": "tsh",
        "availability": "🌐 Ambos",
        "command": "tmux split-window -h",
        "description": "Divide painel verticalmente (novo painel à direita).",
        "example": "tsh"
      },
      {
        "name": "trename",
        "availability": "🌐 Ambos",
        "command": "tmux rename-session",
        "description": "Renomeia a sessão atual.",
        "example": "trename novo-nome"
      },
      {
        "name": "twrename",
        "availability": "🌐 Ambos",
        "command": "tmux rename-window",
        "description": "Renomeia a janela atual.",
        "example": "twrename editor"
      },
      {
        "name": "treload",
        "availability": "🌐 Ambos",
        "command": "tmux source ~/.tmux.conf",
        "description": "Recarrega as configurações do tmux.",
        "example": "treload"
      },
      {
        "name": "tconfig",
        "availability": "🌐 Ambos",
        "command": "nano ~/.tmux.conf",
        "description": "Edita o arquivo de configuração do tmux.",
        "example": "tconfig"
      }
    ]
  },
  {
    "title": "Git",
    "id": "git",
    "icon": GitBranch,
    "aliases": [
      {
        "name": "gs",
        "availability": "🌐 Ambos",
        "command": "git status",
        "description": "Exibe o estado atual do repositório.",
        "example": "gs"
      },
      {
        "name": "ga",
        "availability": "🌐 Ambos",
        "command": "git add",
        "description": "Adiciona arquivos ao stage.",
        "example": "ga arquivo.txt"
      },
      {
        "name": "gaa",
        "availability": "🌐 Ambos",
        "command": "git add .",
        "description": "Adiciona todos os arquivos modificados ao stage.",
        "example": "gaa"
      },
      {
        "name": "gc",
        "availability": "🌐 Ambos",
        "command": "git commit",
        "description": "Abre o editor para escrever a mensagem do commit.",
        "example": "gc"
      },
      {
        "name": "gcm",
        "availability": "🌐 Ambos",
        "command": "git commit -m",
        "description": "Commit com mensagem inline.",
        "example": "gcm 'fix: typo'"
      },
      {
        "name": "gco",
        "availability": "🌐 Ambos",
        "command": "git checkout",
        "description": "Troca de branch ou restaura arquivos.",
        "example": "gco main"
      },
      {
        "name": "gcb",
        "availability": "🌐 Ambos",
        "command": "git checkout -b",
        "description": "Cria e troca para uma nova branch.",
        "example": "gcb feature/nova-funcao"
      },
      {
        "name": "gp",
        "availability": "🌐 Ambos",
        "command": "git push",
        "description": "Envia commits para o repositório remoto.",
        "example": "gp"
      },
      {
        "name": "gpl",
        "availability": "🌐 Ambos",
        "command": "git pull",
        "description": "Baixa e integra mudanças do repositório remoto.",
        "example": "gpl"
      },
      {
        "name": "gf",
        "availability": "🌐 Ambos",
        "command": "git fetch",
        "description": "Busca atualizações do remoto sem aplicar.",
        "example": "gf"
      },
      {
        "name": "gfa",
        "availability": "🌐 Ambos",
        "command": "git fetch --all --prune",
        "description": "Busca de todos os remotos e remove branches deletadas.",
        "example": "gfa"
      },
      {
        "name": "gm",
        "availability": "🌐 Ambos",
        "command": "git merge",
        "description": "Faz merge de uma branch.",
        "example": "gm feature/x"
      },
      {
        "name": "grb",
        "availability": "🌐 Ambos",
        "command": "git rebase",
        "description": "Reaplica commits sobre outra base.",
        "example": "grb main"
      },
      {
        "name": "gcp",
        "availability": "🌐 Ambos",
        "command": "git cherry-pick",
        "description": "Aplica commit específico na branch atual.",
        "example": "gcp abc123"
      },
      {
        "name": "gl",
        "availability": "🌐 Ambos",
        "command": "git log --oneline --graph --decorate",
        "description": "Log compacto com grafo de branches.",
        "example": "gl"
      },
      {
        "name": "glamelog",
        "availability": "🌐 Ambos",
        "command": "git log --pretty=format:\"%h %ad %s\" --date=short",
        "description": "Log compacto com datas.",
        "example": "glamelog"
      },
      {
        "name": "gd",
        "availability": "🌐 Ambos",
        "command": "git diff",
        "description": "Exibe diferenças não staged.",
        "example": "gd"
      },
      {
        "name": "gds",
        "availability": "🌐 Ambos",
        "command": "git diff --staged",
        "description": "Exibe diferenças já em stage.",
        "example": "gds"
      },
      {
        "name": "gb",
        "availability": "🌐 Ambos",
        "command": "git branch",
        "description": "Lista branches locais.",
        "example": "gb"
      },
      {
        "name": "gba",
        "availability": "🌐 Ambos",
        "command": "git branch -a",
        "description": "Lista todas as branches incluindo remotas.",
        "example": "gba"
      },
      {
        "name": "gbd",
        "availability": "🌐 Ambos",
        "command": "git branch -d",
        "description": "Remove uma branch local.",
        "example": "gbd feature/x"
      },
      {
        "name": "gtag",
        "availability": "🌐 Ambos",
        "command": "git tag",
        "description": "Cria ou lista tags.",
        "example": "gtag v1.0.0"
      },
      {
        "name": "gclone",
        "availability": "🌐 Ambos",
        "command": "git clone",
        "description": "Clona um repositório.",
        "example": "gclone https://github.com/user/repo.git"
      },
      {
        "name": "gst",
        "availability": "🌐 Ambos",
        "command": "git stash",
        "description": "Salva mudanças temporariamente no stash.",
        "example": "gst"
      },
      {
        "name": "gstp",
        "availability": "🌐 Ambos",
        "command": "git stash pop",
        "description": "Restaura as últimas mudanças do stash.",
        "example": "gstp"
      },
      {
        "name": "grh",
        "availability": "🌐 Ambos",
        "command": "git reset HEAD~1",
        "description": "Desfaz o último commit mantendo as alterações.",
        "example": "grh"
      },
      {
        "name": "gundo",
        "availability": "🌐 Ambos",
        "command": "git restore .",
        "description": "Descarta todas as alterações não staged.",
        "example": "gundo"
      },
      {
        "name": "gwip",
        "availability": "🌐 Ambos",
        "command": "git add -A && git commit -m \"WIP\"",
        "description": "Salva trabalho em progresso rapidamente.",
        "example": "gwip"
      }
    ]
  },
  {
    "title": "GitHub CLI",
    "id": "github-cli",
    "icon": Github,
    "aliases": [
      {
        "name": "ghpr",
        "availability": "🌐 Ambos",
        "command": "gh pr create",
        "description": "Abre wizard para criar um Pull Request.",
        "example": "ghpr"
      },
      {
        "name": "ghprl",
        "availability": "🌐 Ambos",
        "command": "gh pr list",
        "description": "Lista Pull Requests abertos.",
        "example": "ghprl"
      },
      {
        "name": "ghprv",
        "availability": "🌐 Ambos",
        "command": "gh pr view",
        "description": "Exibe detalhes do PR atual.",
        "example": "ghprv"
      },
      {
        "name": "ghprc",
        "availability": "🌐 Ambos",
        "command": "gh pr checkout",
        "description": "Faz checkout de um PR por número.",
        "example": "ghprc 42"
      },
      {
        "name": "ghprs",
        "availability": "🌐 Ambos",
        "command": "gh pr status",
        "description": "Status dos PRs relacionados ao branch atual.",
        "example": "ghprs"
      },
      {
        "name": "ghrl",
        "availability": "🌐 Ambos",
        "command": "gh repo list",
        "description": "Lista repositórios do usuário autenticado.",
        "example": "ghrl"
      },
      {
        "name": "ghrc",
        "availability": "🌐 Ambos",
        "command": "gh repo clone",
        "description": "Clona um repositório.",
        "example": "ghrc owner/repo"
      },
      {
        "name": "ghiss",
        "availability": "🌐 Ambos",
        "command": "gh issue list",
        "description": "Lista issues abertas do repositório.",
        "example": "ghiss"
      },
      {
        "name": "ghissn",
        "availability": "🌐 Ambos",
        "command": "gh issue create",
        "description": "Abre wizard para criar uma nova issue.",
        "example": "ghissn"
      },
      {
        "name": "ghrun",
        "availability": "🌐 Ambos",
        "command": "gh run list",
        "description": "Lista execuções de CI/CD do GitHub Actions.",
        "example": "ghrun"
      },
      {
        "name": "ghrunw",
        "availability": "🌐 Ambos",
        "command": "gh run watch",
        "description": "Acompanha a execução do workflow em tempo real.",
        "example": "ghrunw"
      },
      {
        "name": "ghwf",
        "availability": "🌐 Ambos",
        "command": "gh workflow list",
        "description": "Lista workflows do GitHub Actions.",
        "example": "ghwf"
      },
      {
        "name": "ghwfr",
        "availability": "🌐 Ambos",
        "command": "gh workflow run",
        "description": "Dispara um workflow manualmente.",
        "example": "ghwfr deploy.yml"
      },
      {
        "name": "ghrel",
        "availability": "🌐 Ambos",
        "command": "gh release list",
        "description": "Lista releases do repositório.",
        "example": "ghrel"
      },
      {
        "name": "ghrelc",
        "availability": "🌐 Ambos",
        "command": "gh release create",
        "description": "Cria uma nova release.",
        "example": "ghrelc v1.0.0"
      },
      {
        "name": "ghgist",
        "availability": "🖥️ Desktop",
        "command": "gh gist create",
        "description": "Cria um Gist a partir de arquivo.",
        "example": "ghgist file.sh"
      },
      {
        "name": "ghssh",
        "availability": "🖥️ Desktop",
        "command": "gh ssh-key list",
        "description": "Lista chaves SSH cadastradas na conta GitHub.",
        "example": "ghssh"
      }
    ]
  },
  {
    "title": "SSH",
    "id": "ssh",
    "icon": Key,
    "aliases": [
      {
        "name": "ssha",
        "availability": "🌐 Ambos",
        "command": "ssh-add",
        "description": "Adiciona chave SSH ao agente.",
        "example": "ssha ~/.ssh/id_ed25519"
      },
      {
        "name": "sshal",
        "availability": "🌐 Ambos",
        "command": "ssh-add -l",
        "description": "Lista chaves carregadas no agente SSH.",
        "example": "sshal"
      },
      {
        "name": "sshkeys",
        "availability": "🌐 Ambos",
        "command": "ls -la ~/.ssh/",
        "description": "Lista todos os arquivos de chaves SSH.",
        "example": "sshkeys"
      },
      {
        "name": "sshconfig",
        "availability": "🌐 Ambos",
        "command": "nano ~/.ssh/config",
        "description": "Edita o arquivo de configuração do SSH.",
        "example": "sshconfig"
      },
      {
        "name": "keygen",
        "availability": "🌐 Ambos",
        "command": "ssh-keygen -t ed25519 -C",
        "description": "Gera nova chave SSH Ed25519.",
        "example": "keygen 'email@x.com'"
      }
    ]
  },
  {
    "title": "Docker",
    "id": "docker",
    "icon": Box,
    "aliases": [
      {
        "name": "d",
        "availability": "🌐 Ambos",
        "command": "docker",
        "description": "Atalho para o comando docker.",
        "example": "d ps"
      },
      {
        "name": "dc",
        "availability": "🌐 Ambos",
        "command": "docker compose",
        "description": "Atalho para o docker compose.",
        "example": "dc up -d"
      },
      {
        "name": "dps",
        "availability": "🌐 Ambos",
        "command": "docker ps",
        "description": "Lista containers em execução.",
        "example": "dps"
      },
      {
        "name": "dpsa",
        "availability": "🌐 Ambos",
        "command": "docker ps -a",
        "description": "Lista todos os containers incluindo parados.",
        "example": "dpsa"
      },
      {
        "name": "dimg",
        "availability": "🌐 Ambos",
        "command": "docker images",
        "description": "Lista imagens Docker disponíveis localmente.",
        "example": "dimg"
      },
      {
        "name": "dlog",
        "availability": "🌐 Ambos",
        "command": "docker logs -f",
        "description": "Segue os logs de um container.",
        "example": "dlog meu-container"
      },
      {
        "name": "dex",
        "availability": "🌐 Ambos",
        "command": "docker exec -it",
        "description": "Executa comando interativo em container.",
        "example": "dex app bash"
      },
      {
        "name": "dstart",
        "availability": "🌐 Ambos",
        "command": "docker start",
        "description": "Inicia um container parado.",
        "example": "dstart meu-container"
      },
      {
        "name": "dstop",
        "availability": "🌐 Ambos",
        "command": "docker stop",
        "description": "Para um container em execução.",
        "example": "dstop meu-container"
      },
      {
        "name": "drm",
        "availability": "🌐 Ambos",
        "command": "docker rm",
        "description": "Remove um container.",
        "example": "drm meu-container"
      },
      {
        "name": "drmi",
        "availability": "🌐 Ambos",
        "command": "docker rmi",
        "description": "Remove uma imagem.",
        "example": "drmi minha-imagem"
      },
      {
        "name": "dpull",
        "availability": "🌐 Ambos",
        "command": "docker pull",
        "description": "Baixa imagem do registry.",
        "example": "dpull nginx:alpine"
      },
      {
        "name": "dbuild",
        "availability": "🌐 Ambos",
        "command": "docker build -t",
        "description": "Constrói imagem com tag.",
        "example": "dbuild app:latest ."
      },
      {
        "name": "dstats",
        "availability": "🌐 Ambos",
        "command": "docker stats",
        "description": "Monitora CPU/memória dos containers em tempo real.",
        "example": "dstats"
      },
      {
        "name": "dins",
        "availability": "🌐 Ambos",
        "command": "docker inspect",
        "description": "Inspeciona detalhes de container ou imagem.",
        "example": "dins app"
      },
      {
        "name": "dip",
        "availability": "🌐 Ambos",
        "command": "docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}'",
        "description": "IP do container.",
        "example": "dip app"
      },
      {
        "name": "dnet",
        "availability": "🌐 Ambos",
        "command": "docker network ls",
        "description": "Lista redes Docker disponíveis.",
        "example": "dnet"
      },
      {
        "name": "dvol",
        "availability": "🌐 Ambos",
        "command": "docker volume ls",
        "description": "Lista volumes Docker criados.",
        "example": "dvol"
      },
      {
        "name": "dprune",
        "availability": "🌐 Ambos",
        "command": "docker system prune -af --volumes",
        "description": "Remove todos os recursos Docker não utilizados.",
        "example": "dprune"
      },
      {
        "name": "dcup",
        "availability": "🌐 Ambos",
        "command": "docker compose up -d",
        "description": "Sobe os serviços em background.",
        "example": "dcup"
      },
      {
        "name": "dcdown",
        "availability": "🌐 Ambos",
        "command": "docker compose down",
        "description": "Para e remove os containers do compose.",
        "example": "dcdown"
      },
      {
        "name": "dcstop",
        "availability": "🌐 Ambos",
        "command": "docker compose stop",
        "description": "Para os serviços sem remover containers.",
        "example": "dcstop"
      },
      {
        "name": "dcrestart",
        "availability": "🌐 Ambos",
        "command": "docker compose restart",
        "description": "Reinicia todos os serviços do compose.",
        "example": "dcrestart"
      },
      {
        "name": "dcps",
        "availability": "🌐 Ambos",
        "command": "docker compose ps",
        "description": "Lista os serviços do compose e seus estados.",
        "example": "dcps"
      },
      {
        "name": "dclog",
        "availability": "🌐 Ambos",
        "command": "docker compose logs -f",
        "description": "Segue os logs de todos os serviços do compose.",
        "example": "dclog"
      },
      {
        "name": "dclogs",
        "availability": "🌐 Ambos",
        "command": "docker compose logs --tail=100",
        "description": "Exibe as últimas 100 linhas dos logs do compose.",
        "example": "dclogs"
      },
      {
        "name": "dcbuild",
        "availability": "🌐 Ambos",
        "command": "docker compose build --no-cache",
        "description": "Reconstrói as imagens sem cache.",
        "example": "dcbuild"
      },
      {
        "name": "dcpull",
        "availability": "🌐 Ambos",
        "command": "docker compose pull",
        "description": "Atualiza imagens dos serviços do compose.",
        "example": "dcpull"
      },
      {
        "name": "dcexec",
        "availability": "🌐 Ambos",
        "command": "docker compose exec",
        "description": "Executa comando em serviço.",
        "example": "dcexec app bash"
      }
    ]
  },
  {
    "title": "Portainer",
    "id": "portainer",
    "icon": Layout,
    "aliases": [
      {
        "name": "portainer-restart",
        "availability": "🖥️ Desktop",
        "command": "docker compose -f ~/.setupvibe/portainer-compose.yml restart",
        "description": "Reinicia o painel do Portainer.",
        "example": "portainer-restart"
      },
      {
        "name": "portainer-update",
        "availability": "🖥️ Desktop",
        "command": "docker compose -f ~/.setupvibe/portainer-compose.yml pull && docker compose -f ~/.setupvibe/portainer-compose.yml up -d",
        "description": "Atualiza e reinicia o Portainer.",
        "example": "portainer-update"
      },
      {
        "name": "portainer-start",
        "availability": "🖥️ Desktop",
        "command": "docker compose -f ~/.setupvibe/portainer-compose.yml up -d",
        "description": "Inicia o Portainer em background.",
        "example": "portainer-start"
      },
      {
        "name": "portainer-stop",
        "availability": "🖥️ Desktop",
        "command": "docker compose -f ~/.setupvibe/portainer-compose.yml stop",
        "description": "Para o painel do Portainer.",
        "example": "portainer-stop"
      }
    ]
  },
  {
    "title": "Gerenciadores de Pacotes",
    "id": "gerenciadores-de-pacotes",
    "icon": Package,
    "aliases": [
      {
        "name": "update",
        "availability": "🌐 Ambos",
        "command": "brew update && brew upgrade (macOS) / sudo apt update... (Linux)",
        "description": "Atualiza o sistema e gerenciadores de pacotes.",
        "example": "update"
      },
      {
        "name": "apti",
        "availability": "☁️ Servidor / 🖥️ Desktop Linux",
        "command": "sudo apt install",
        "description": "Instala um pacote via APT.",
        "example": "apti htop"
      },
      {
        "name": "aptr",
        "availability": "☁️ Servidor / 🖥️ Desktop Linux",
        "command": "sudo apt remove",
        "description": "Remove um pacote via APT.",
        "example": "aptr htop"
      },
      {
        "name": "apts",
        "availability": "☁️ Servidor / 🖥️ Desktop Linux",
        "command": "apt search",
        "description": "Busca pacotes nos repositórios APT.",
        "example": "apts nginx"
      },
      {
        "name": "aptshow",
        "availability": "☁️ Servidor / 🖥️ Desktop Linux",
        "command": "apt show",
        "description": "Exibe detalhes de um pacote APT.",
        "example": "aptshow git"
      },
      {
        "name": "aptls",
        "availability": "☁️ Servidor / 🖥️ Desktop Linux",
        "command": "dpkg -l | grep",
        "description": "Filtra pacotes instalados.",
        "example": "aptls nginx"
      },
      {
        "name": "brewup",
        "availability": "🖥️ Desktop / ☁️ Servidor se instalado",
        "command": "brew update && brew upgrade && brew cleanup",
        "description": "Atualiza Homebrew e remove versões antigas.",
        "example": "brewup"
      },
      {
        "name": "brewls",
        "availability": "🖥️ Desktop / ☁️ Servidor se instalado",
        "command": "brew list",
        "description": "Lista todos os pacotes instalados via Homebrew.",
        "example": "brewls"
      },
      {
        "name": "brewinfo",
        "availability": "🖥️ Desktop / ☁️ Servidor se instalado",
        "command": "brew info",
        "description": "Exibe informações sobre um pacote.",
        "example": "brewinfo git"
      },
      {
        "name": "brewsearch",
        "availability": "🖥️ Desktop / ☁️ Servidor se instalado",
        "command": "brew search",
        "description": "Busca pacotes no Homebrew.",
        "example": "brewsearch ripgrep"
      }
    ]
  },
  {
    "title": "Linguagens & Frameworks",
    "id": "linguagens-frameworks",
    "icon": Code2,
    "aliases": [
      {
        "name": "art",
        "availability": "🖥️ Desktop",
        "command": "php artisan",
        "description": "Atalho para o PHP Artisan.",
        "example": "art list"
      },
      {
        "name": "artm",
        "availability": "🖥️ Desktop",
        "command": "php artisan migrate",
        "description": "Executa as migrations pendentes.",
        "example": "artm"
      },
      {
        "name": "artmf",
        "availability": "🖥️ Desktop",
        "command": "php artisan migrate:fresh",
        "description": "Recria todas as tabelas do zero.",
        "example": "artmf"
      },
      {
        "name": "artmfs",
        "availability": "🖥️ Desktop",
        "command": "php artisan migrate:fresh --seed",
        "description": "Recria as tabelas e popula com seeders.",
        "example": "artmfs"
      },
      {
        "name": "arts",
        "availability": "🖥️ Desktop",
        "command": "php artisan serve",
        "description": "Inicia o servidor de desenvolvimento do Laravel.",
        "example": "arts"
      },
      {
        "name": "artq",
        "availability": "🖥️ Desktop",
        "command": "php artisan queue:work",
        "description": "Inicia o worker de filas.",
        "example": "artq"
      },
      {
        "name": "artc",
        "availability": "🖥️ Desktop",
        "command": "php artisan cache:clear && php artisan config:clear && php artisan route:clear && php artisan view:clear",
        "description": "Limpa todos os caches do Laravel.",
        "example": "artc"
      },
      {
        "name": "artt",
        "availability": "🖥️ Desktop",
        "command": "php artisan test",
        "description": "Executa a suíte de testes do Laravel.",
        "example": "artt"
      },
      {
        "name": "artmake",
        "availability": "🖥️ Desktop",
        "command": "php artisan make",
        "description": "Atalho para geração de código.",
        "example": "artmake:controller UserController"
      },
      {
        "name": "artr",
        "availability": "🖥️ Desktop",
        "command": "php artisan route:list",
        "description": "Lista todas as rotas da aplicação.",
        "example": "artr"
      },
      {
        "name": "arttink",
        "availability": "🖥️ Desktop",
        "command": "php artisan tinker",
        "description": "Abre o REPL interativo do Laravel.",
        "example": "arttink"
      },
      {
        "name": "artkey",
        "availability": "🖥️ Desktop",
        "command": "php artisan key:generate",
        "description": "Gera uma nova chave de aplicação.",
        "example": "artkey"
      },
      {
        "name": "artopt",
        "availability": "🖥️ Desktop",
        "command": "php artisan optimize:clear",
        "description": "Limpa todos os caches e otimizações.",
        "example": "artopt"
      },
      {
        "name": "artschedule",
        "availability": "🖥️ Desktop",
        "command": "php artisan schedule:work",
        "description": "Inicia o worker de tarefas agendadas.",
        "example": "artschedule"
      },
      {
        "name": "artdb",
        "availability": "🖥️ Desktop",
        "command": "php artisan db",
        "description": "Abre conexão interativa com o banco de dados.",
        "example": "artdb"
      },
      {
        "name": "artmodel",
        "availability": "🖥️ Desktop",
        "command": "php artisan make:model",
        "description": "Cria um Model.",
        "example": "artmodel Post -m"
      },
      {
        "name": "artjob",
        "availability": "🖥️ Desktop",
        "command": "php artisan make:job",
        "description": "Cria um Job para filas.",
        "example": "artjob ProcessPayment"
      },
      {
        "name": "artevent",
        "availability": "🖥️ Desktop",
        "command": "php artisan event:list",
        "description": "Lista todos os eventos e listeners registrados.",
        "example": "artevent"
      },
      {
        "name": "ci",
        "availability": "🖥️ Desktop",
        "command": "composer install",
        "description": "Instala dependências do composer.json.",
        "example": "ci"
      },
      {
        "name": "cu",
        "availability": "🖥️ Desktop",
        "command": "composer update",
        "description": "Atualiza dependências para versões permitidas.",
        "example": "cu"
      },
      {
        "name": "creq",
        "availability": "🖥️ Desktop",
        "command": "composer require",
        "description": "Adiciona um pacote.",
        "example": "creq vendor/pacote"
      },
      {
        "name": "creqd",
        "availability": "🖥️ Desktop",
        "command": "composer require --dev",
        "description": "Adiciona pacote como dev-dependency.",
        "example": "creqd phpunit/phpunit"
      },
      {
        "name": "cdump",
        "availability": "🖥️ Desktop",
        "command": "composer dump-autoload",
        "description": "Regenera o autoload do Composer.",
        "example": "cdump"
      },
      {
        "name": "crun",
        "availability": "🖥️ Desktop",
        "command": "composer run",
        "description": "Executa um script do composer.json.",
        "example": "crun dev"
      },
      {
        "name": "ni",
        "availability": "🌐 Ambos",
        "command": "npm install",
        "description": "Instala todas as dependências do package.json.",
        "example": "ni"
      },
      {
        "name": "nid",
        "availability": "🌐 Ambos",
        "command": "npm install --save-dev",
        "description": "Instala pacote como dependência de desenvolvimento.",
        "example": "nid typescript"
      },
      {
        "name": "nr",
        "availability": "🌐 Ambos",
        "command": "npm run",
        "description": "Executa script do package.json.",
        "example": "nr build"
      },
      {
        "name": "nrd",
        "availability": "🌐 Ambos",
        "command": "npm run dev",
        "description": "Inicia o servidor de desenvolvimento.",
        "example": "nrd"
      },
      {
        "name": "nrb",
        "availability": "🌐 Ambos",
        "command": "npm run build",
        "description": "Executa o build de produção.",
        "example": "nrb"
      },
      {
        "name": "nrt",
        "availability": "🌐 Ambos",
        "command": "npm run test",
        "description": "Executa os testes.",
        "example": "nrt"
      },
      {
        "name": "nx",
        "availability": "🌐 Ambos",
        "command": "npx",
        "description": "Executa pacote Node sem instalar globalmente.",
        "example": "nx create-react-app my-app"
      },
      {
        "name": "bi",
        "availability": "🌐 Ambos",
        "command": "bun install",
        "description": "Instala dependências com Bun.",
        "example": "bi"
      },
      {
        "name": "br",
        "availability": "🌐 Ambos",
        "command": "bun run",
        "description": "Executa script com Bun.",
        "example": "br dev"
      },
      {
        "name": "brd",
        "availability": "🌐 Ambos",
        "command": "bun run dev",
        "description": "Inicia o dev server com Bun.",
        "example": "brd"
      },
      {
        "name": "brb",
        "availability": "🌐 Ambos",
        "command": "bun run build",
        "description": "Build de produção com Bun.",
        "example": "brb"
      },
      {
        "name": "bx",
        "availability": "🌐 Ambos",
        "command": "bunx",
        "description": "Executa pacote sem instalar, via Bun.",
        "example": "bx cowsay hello"
      },
      {
        "name": "pn",
        "availability": "🖥️ Desktop",
        "command": "pnpm",
        "description": "Atalho para o pnpm.",
        "example": "pn add axios"
      },
      {
        "name": "pni",
        "availability": "🖥️ Desktop",
        "command": "pnpm install",
        "description": "Instala dependências com pnpm.",
        "example": "pni"
      },
      {
        "name": "pnr",
        "availability": "🖥️ Desktop",
        "command": "pnpm run",
        "description": "Executa script do package.json via pnpm.",
        "example": "pnr build"
      },
      {
        "name": "pnd",
        "availability": "🖥️ Desktop",
        "command": "pnpm run dev",
        "description": "Inicia o dev server with pnpm.",
        "example": "pnd"
      },
      {
        "name": "pnb",
        "availability": "🖥️ Desktop",
        "command": "pnpm run build",
        "description": "Build de produção with pnpm.",
        "example": "pnb"
      },
      {
        "name": "pnt",
        "availability": "🖥️ Desktop",
        "command": "pnpm run test",
        "description": "Executa os testes with pnpm.",
        "example": "pnt"
      },
      {
        "name": "pnx",
        "availability": "🖥️ Desktop",
        "command": "pnpm dlx",
        "description": "Executa pacote sem instalar via pnpm.",
        "example": "pnx create-next-app"
      },
      {
        "name": "pnadd",
        "availability": "🖥️ Desktop",
        "command": "pnpm add",
        "description": "Adiciona dependência with pnpm.",
        "example": "pnadd axios"
      },
      {
        "name": "pnaddd",
        "availability": "🖥️ Desktop",
        "command": "pnpm add -D",
        "description": "Adiciona dev-dependency with pnpm.",
        "example": "pnaddd vitest"
      },
      {
        "name": "py",
        "availability": "🖥️ Desktop",
        "command": "python3",
        "description": "Atalho para Python 3.",
        "example": "py main.py"
      },
      {
        "name": "pyv",
        "availability": "🖥️ Desktop",
        "command": "python3 --version",
        "description": "Exibe a versão ativa do Python.",
        "example": "pyv"
      },
      {
        "name": "uvi",
        "availability": "🖥️ Desktop",
        "command": "uv pip install",
        "description": "Instala pacote Python with uv.",
        "example": "uvi requests"
      },
      {
        "name": "uvs",
        "availability": "🖥️ Desktop",
        "command": "uv run",
        "description": "Executa script with uv.",
        "example": "uvs main.py"
      },
      {
        "name": "venv",
        "availability": "🖥️ Desktop",
        "command": "python3 -m venv .venv && source .venv/bin/activate",
        "description": "Cria e ativa virtualenv local.",
        "example": "venv"
      },
      {
        "name": "activate",
        "availability": "🖥️ Desktop",
        "command": "source .venv/bin/activate",
        "description": "Ativa o virtualenv local do diretório.",
        "example": "activate"
      },
      {
        "name": "rbv",
        "availability": "🖥️ Desktop",
        "command": "rbenv versions",
        "description": "Lista versões do Ruby instaladas via rbenv.",
        "example": "rbv"
      },
      {
        "name": "rblocal",
        "availability": "🖥️ Desktop",
        "command": "rbenv local",
        "description": "Define versão do Ruby para o diretório atual.",
        "example": "rblocal 3.2.0"
      },
      {
        "name": "rbglobal",
        "availability": "🖥️ Desktop",
        "command": "rbenv global",
        "description": "Define a versão global do Ruby.",
        "example": "rbglobal 3.2.0"
      },
      {
        "name": "be",
        "availability": "🖥️ Desktop",
        "command": "bundle exec",
        "description": "Executa comando no contexto do Bundler.",
        "example": "be rails s"
      },
      {
        "name": "binstall",
        "availability": "🖥️ Desktop",
        "command": "bundle install",
        "description": "Instala gems do Gemfile.",
        "example": "binstall"
      },
      {
        "name": "bupdate",
        "availability": "🖥️ Desktop",
        "command": "bundle update",
        "description": "Atualiza gems do Gemfile.",
        "example": "bupdate"
      },
      {
        "name": "cb",
        "availability": "🖥️ Desktop",
        "command": "cargo build",
        "description": "Compila o projeto Rust em modo debug.",
        "example": "cb"
      },
      {
        "name": "cbr",
        "availability": "🖥️ Desktop",
        "command": "cargo build --release",
        "description": "Compila em modo release otimizado.",
        "example": "cbr"
      },
      {
        "name": "crun2",
        "availability": "🖥️ Desktop",
        "command": "cargo run",
        "description": "Compila e executa o projeto Rust.",
        "example": "crun2"
      },
      {
        "name": "ct",
        "availability": "🖥️ Desktop",
        "command": "cargo test",
        "description": "Executa os testes do projeto.",
        "example": "ct"
      },
      {
        "name": "ccheck",
        "availability": "🖥️ Desktop",
        "command": "cargo check",
        "description": "Verifica erros sem gerar o binário.",
        "example": "ccheck"
      },
      {
        "name": "clippy",
        "availability": "🖥️ Desktop",
        "command": "cargo clippy",
        "description": "Executa o linter do Rust.",
        "example": "clippy"
      },
      {
        "name": "cfmt",
        "availability": "🖥️ Desktop",
        "command": "cargo fmt",
        "description": "Formata o código com rustfmt.",
        "example": "cfmt"
      },
      {
        "name": "cadd",
        "availability": "🖥️ Desktop",
        "command": "cargo add",
        "description": "Adiciona dependência ao projeto Rust.",
        "example": "cadd serde"
      },
      {
        "name": "crem",
        "availability": "🖥️ Desktop",
        "command": "cargo remove",
        "description": "Remove dependência do projeto Rust.",
        "example": "crem serde"
      },
      {
        "name": "cupdate",
        "availability": "🖥️ Desktop",
        "command": "cargo update",
        "description": "Atualiza todas as dependências do Cargo.lock.",
        "example": "cupdate"
      },
      {
        "name": "cdoc",
        "availability": "🖥️ Desktop",
        "command": "cargo doc --open",
        "description": "Gera e abre a documentação do projeto no browser.",
        "example": "cdoc"
      },
      {
        "name": "gobuild",
        "availability": "🖥️ Desktop",
        "command": "go build ./...",
        "description": "Compila todos os pacotes do projeto Go.",
        "example": "gobuild"
      },
      {
        "name": "gorun",
        "availability": "🖥️ Desktop",
        "command": "go run .",
        "description": "Executa o pacote principal.",
        "example": "gorun"
      },
      {
        "name": "gotest",
        "availability": "🖥️ Desktop",
        "command": "go test ./...",
        "description": "Executa todos os testes do projeto.",
        "example": "gotest"
      },
      {
        "name": "gomod",
        "availability": "🖥️ Desktop",
        "command": "go mod tidy",
        "description": "Remove dependências não utilizadas do go.mod.",
        "example": "gomod"
      },
      {
        "name": "govet",
        "availability": "🖥️ Desktop",
        "command": "go vet ./...",
        "description": "Verifica problemas comuns no código Go.",
        "example": "govet"
      },
      {
        "name": "gofmt",
        "availability": "🖥️ Desktop",
        "command": "gofmt -w .",
        "description": "Formata todos os arquivos Go do diretório.",
        "example": "gofmt"
      },
      {
        "name": "goget",
        "availability": "🖥️ Desktop",
        "command": "go get",
        "description": "Adiciona dependência ao projeto Go.",
        "example": "goget github.com/gin-gonic/gin"
      },
      {
        "name": "goclean",
        "availability": "🖥️ Desktop",
        "command": "go clean -cache",
        "description": "Remove o cache de build do Go.",
        "example": "goclean"
      },
      {
        "name": "gocover",
        "availability": "🖥️ Desktop",
        "command": "go test ./... -coverprofile=coverage.out && go tool cover -html=coverage.out",
        "description": "Cobertura HTML.",
        "example": "gocover"
      },
      {
        "name": "gowork",
        "availability": "🖥️ Desktop",
        "command": "go work",
        "description": "Gerencia workspaces Go.",
        "example": "gowork use ./pkg"
      }
    ]
  },
  {
    "title": "DevOps & Sistema",
    "id": "devops-sistema",
    "icon": Cpu,
    "aliases": [
      {
        "name": "anp",
        "availability": "🌐 Ambos",
        "command": "ansible-playbook",
        "description": "Executa um playbook.",
        "example": "anp site.yml -i hosts"
      },
      {
        "name": "ani",
        "availability": "🌐 Ambos",
        "command": "ansible-inventory --list",
        "description": "Exibe o inventário em formato JSON.",
        "example": "ani"
      },
      {
        "name": "anping",
        "availability": "🌐 Ambos",
        "command": "ansible all -m ping",
        "description": "Testa conectividade com todos os hosts.",
        "example": "anping"
      },
      {
        "name": "anv",
        "availability": "🌐 Ambos",
        "command": "ansible-vault",
        "description": "Gerencia arquivos criptografados com Vault.",
        "example": "anv edit secrets.yml"
      },
      {
        "name": "anve",
        "availability": "🌐 Ambos",
        "command": "ansible-vault encrypt",
        "description": "Criptografa um arquivo com Vault.",
        "example": "anve secrets.yml"
      },
      {
        "name": "anvd",
        "availability": "🌐 Ambos",
        "command": "ansible-vault decrypt",
        "description": "Descriptografa um arquivo com Vault.",
        "example": "anvd secrets.yml"
      },
      {
        "name": "anvr",
        "availability": "🌐 Ambos",
        "command": "ansible-vault rekey",
        "description": "Recriptografa com nova senha.",
        "example": "anvr secrets.yml"
      },
      {
        "name": "ancheck",
        "availability": "🌐 Ambos",
        "command": "ansible-playbook --check",
        "description": "Simula execução do playbook sem aplicar mudanças.",
        "example": "ancheck site.yml"
      },
      {
        "name": "andiff",
        "availability": "🌐 Ambos",
        "command": "ansible-playbook --check --diff",
        "description": "Simula e exibe diff das mudanças que seriam aplicadas.",
        "example": "andiff site.yml"
      },
      {
        "name": "anfacts",
        "availability": "🌐 Ambos",
        "command": "ansible all -m setup",
        "description": "Coleta facts de todos os hosts do inventário.",
        "example": "anfacts"
      },
      {
        "name": "topc",
        "availability": "🌐 Ambos",
        "command": "top -o cpu (macOS) / top -bn1 | head -20 (Linux)",
        "description": "Monitora processos ordenados por uso de CPU.",
        "example": "topc"
      },
      {
        "name": "topm",
        "availability": "🖥️ Desktop macOS",
        "command": "top -o mem",
        "description": "Monitora processos ordenados por uso de memória.",
        "example": "topm"
      },
      {
        "name": "psg",
        "availability": "🌐 Ambos",
        "command": "ps aux | grep",
        "description": "Busca processos por nome.",
        "example": "psg nginx"
      },
      {
        "name": "df",
        "availability": "🌐 Ambos",
        "command": "df -h",
        "description": "Uso de disco com tamanhos legíveis.",
        "example": "df"
      },
      {
        "name": "meminfo",
        "availability": "☁️ Servidor / 🖥️ Desktop Linux",
        "command": "free -h",
        "description": "Exibe uso de memória RAM e swap.",
        "example": "meminfo"
      },
      {
        "name": "diskinfo",
        "availability": "☁️ Servidor / 🖥️ Desktop Linux",
        "command": "df -h",
        "description": "Exibe uso de disco de todas as partições.",
        "example": "diskinfo"
      },
      {
        "name": "cpuinfo",
        "availability": "☁️ Servidor / 🖥️ Desktop Linux",
        "command": "lscpu",
        "description": "Exibe informações detalhadas sobre a CPU.",
        "example": "cpuinfo"
      },
      {
        "name": "sysinfo",
        "availability": "☁️ Servidor / 🖥️ Desktop Linux",
        "command": "hostnamectl",
        "description": "Exibe informações do sistema operacional e hostname.",
        "example": "sysinfo"
      },
      {
        "name": "sstatus",
        "availability": "☁️ Servidor / 🖥️ Desktop Linux",
        "command": "sudo systemctl status",
        "description": "Exibe o status de um serviço.",
        "example": "sstatus nginx"
      },
      {
        "name": "sstart",
        "availability": "☁️ Servidor / 🖥️ Desktop Linux",
        "command": "sudo systemctl start",
        "description": "Inicia um serviço.",
        "example": "sstart nginx"
      },
      {
        "name": "sstop",
        "availability": "☁️ Servidor / 🖥️ Desktop Linux",
        "command": "sudo systemctl stop",
        "description": "Para um serviço.",
        "example": "sstop nginx"
      },
      {
        "name": "srestart",
        "availability": "☁️ Servidor / 🖥️ Desktop Linux",
        "command": "sudo systemctl restart",
        "description": "Reinicia um serviço.",
        "example": "srestart nginx"
      },
      {
        "name": "senable",
        "availability": "☁️ Servidor / 🖥️ Desktop Linux",
        "command": "sudo systemctl enable",
        "description": "Habilita um serviço para iniciar no boot.",
        "example": "senable nginx"
      },
      {
        "name": "sdisable",
        "availability": "☁️ Servidor / 🖥️ Desktop Linux",
        "command": "sudo systemctl disable",
        "description": "Desabilita um serviço no boot.",
        "example": "sdisable nginx"
      },
      {
        "name": "slogs",
        "availability": "☁️ Servidor / 🖥️ Desktop Linux",
        "command": "sudo journalctl -u",
        "description": "Exibe logs de um serviço específico.",
        "example": "slogs nginx"
      },
      {
        "name": "syslog",
        "availability": "☁️ Servidor / 🖥️ Desktop Linux",
        "command": "sudo journalctl -f",
        "description": "Segue o log do sistema em tempo real.",
        "example": "syslog"
      }
    ]
  },
  {
    "title": "Rede & Web",
    "id": "rede-web",
    "icon": Globe,
    "aliases": [
      {
        "name": "myip",
        "availability": "🌐 Ambos",
        "command": "curl -s ifconfig.me",
        "description": "Exibe o IP público da máquina.",
        "example": "myip"
      },
      {
        "name": "localip",
        "availability": "🌐 Ambos",
        "command": "ipconfig getifaddr en0 (macOS) / hostname -I... (Linux)",
        "description": "Exibe o IP local principal da máquina.",
        "example": "localip"
      },
      {
        "name": "ports",
        "availability": "🌐 Ambos",
        "command": "lsof -iTCP -sTCP:LISTEN -n -P (macOS) / ss -tulnp (Linux)",
        "description": "Lista todas as portas em escuta.",
        "example": "ports"
      },
      {
        "name": "wholistening",
        "availability": "☁️ Servidor / 🖥️ Desktop Linux",
        "command": "ss -tulnp",
        "description": "Alias alternativo para listar portas em escuta.",
        "example": "wholistening"
      },
      {
        "name": "flush",
        "availability": "🌐 Ambos",
        "command": "dscacheutil... (macOS) / sudo systemd-resolve... (Linux)",
        "description": "Limpa o cache de DNS.",
        "example": "flush"
      },
      {
        "name": "get",
        "availability": "🌐 Ambos",
        "command": "curl -s",
        "description": "GET request simples.",
        "example": "get https://api.github.com"
      },
      {
        "name": "post",
        "availability": "🌐 Ambos",
        "command": "curl -s -X POST -H 'Content-Type: application/json'",
        "description": "POST JSON simples.",
        "example": "post url -d '{\"key\":\"val\"}'"
      },
      {
        "name": "headers",
        "availability": "🌐 Ambos",
        "command": "curl -sI",
        "description": "Exibe apenas os headers HTTP da resposta.",
        "example": "headers google.com"
      },
      {
        "name": "httpcode",
        "availability": "🌐 Ambos",
        "command": "curl -o /dev/null -s -w '%{http_code}\\n'",
        "description": "Exibe somente o código HTTP da resposta.",
        "example": "httpcode google.com"
      },
      {
        "name": "timing",
        "availability": "🌐 Ambos",
        "command": "curl -o /dev/null -s -w 'dns:%{time_namelookup}s...'",
        "description": "Latência detalhada.",
        "example": "timing google.com"
      },
      {
        "name": "jpp",
        "availability": "🌐 Ambos",
        "command": "python3 -m json.tool",
        "description": "Formata e valida JSON.",
        "example": "cat data.json | jpp"
      },
      {
        "name": "jsonf",
        "availability": "🌐 Ambos",
        "command": "jq .",
        "description": "Formata JSON com cores via jq.",
        "example": "cat data.json | jsonf"
      },
      {
        "name": "certinfo",
        "availability": "🌐 Ambos",
        "command": "openssl x509 -text -noout -in",
        "description": "Exibe detalhes de um certificado .pem.",
        "example": "certinfo cert.pem"
      },
      {
        "name": "certexpiry",
        "availability": "🌐 Ambos",
        "command": "openssl x509 -enddate -noout -in",
        "description": "Exibe a data de expiração de um certificado.",
        "example": "certexpiry cert.pem"
      },
      {
        "name": "sslcheck",
        "availability": "🌐 Ambos",
        "command": "openssl s_client -connect",
        "description": "Inspeciona TLS de um host.",
        "example": "sslcheck google.com:443"
      },
      {
        "name": "genpass",
        "availability": "🌐 Ambos",
        "command": "openssl rand -base64 32",
        "description": "Gera uma senha aleatória segura de 32 bytes.",
        "example": "genpass"
      },
      {
        "name": "envls",
        "availability": "🌐 Ambos",
        "command": "env | sort",
        "description": "Lista todas as variáveis de ambiente ordenadas.",
        "example": "envls"
      },
      {
        "name": "envg",
        "availability": "🌐 Ambos",
        "command": "env | grep",
        "description": "Filtra variáveis de ambiente.",
        "example": "envg PATH"
      },
      {
        "name": "dotenv",
        "availability": "🌐 Ambos",
        "command": "export $(cat .env | grep -v '^#' | xargs)",
        "description": "Carrega variáveis do arquivo .env atual.",
        "example": "dotenv"
      }
    ]
  }
];

type Platform = "all" | "desktop" | "server";

export function AliasesContent() {
  const [activeId, setActiveId] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [platform, setPlatform] = useState<Platform>("all");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -70% 0%" }
    );

    categoriesData.forEach((cat) => {
      const element = document.getElementById(cat.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const filteredData = useMemo(() => {
    return categoriesData.map(category => ({
      ...category,
      aliases: category.aliases.filter(alias => {
        const matchesSearch = alias.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            alias.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            alias.command.toLowerCase().includes(searchQuery.toLowerCase());
        
        const matchesPlatform = platform === "all" || 
                               (platform === "desktop" && (alias.availability.includes("Desktop") || alias.availability.includes("Ambos"))) ||
                               (platform === "server" && (alias.availability.includes("Servidor") || alias.availability.includes("Ambos")));
        
        return matchesSearch && matchesPlatform;
      })
    })).filter(category => category.aliases.length > 0);
  }, [searchQuery, platform]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-background">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-4 py-12 relative">
        
        {/* Controls */}
        <div className="sticky top-20 z-40 bg-background/80 backdrop-blur-xl border border-border/50 rounded-3xl p-4 mb-12 flex flex-col md:flex-row gap-4 shadow-xl shadow-black/5">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Buscar por alias, comando ou descrição..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-muted/50 border-none rounded-2xl pl-12 pr-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
          
          <div className="flex bg-muted/50 p-1 rounded-2xl gap-1">
            {(["all", "desktop", "server"] as Platform[]).map((p) => (
              <button
                key={p}
                onClick={() => setPlatform(p)}
                className={cn(
                  "px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2",
                  platform === p 
                    ? "bg-background text-primary shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {p === "all" && <Infinity className="w-3.5 h-3.5" />}
                {p === "desktop" && <Monitor className="w-3.5 h-3.5" />}
                {p === "server" && <Server className="w-3.5 h-3.5" />}
                {p === "all" ? "Todos" : p === "desktop" ? "Desktop" : "Servidor"}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 relative">
          
          {/* Sidebar Navigation */}
          <aside className="lg:w-80 flex-shrink-0 hidden lg:block">
            <div className="sticky top-44 space-y-2 max-h-[calc(100vh-12rem)] overflow-y-auto pr-6 scrollbar-hide py-2">
              <div className="px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 mb-4 border-b border-primary/5 pb-4">
                Categorias
              </div>
              {filteredData.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollTo(cat.id)}
                  className={cn(
                    "group flex items-center w-full text-left px-4 py-3 text-sm transition-all duration-300 rounded-xl",
                    activeId === cat.id 
                      ? "bg-primary/5 text-primary font-bold shadow-sm ring-1 ring-primary/20" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  <cat.icon className={cn(
                    "mr-3 w-4 h-4 transition-all duration-300",
                    activeId === cat.id ? "text-primary scale-110" : "opacity-30"
                  )} />
                  <span className="truncate group-hover:translate-x-1 transition-transform duration-300">
                    {cat.title}
                  </span>
                  <span className="ml-auto text-[10px] font-mono opacity-30">{cat.aliases.length}</span>
                </button>
              ))}
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-4xl space-y-32">
            {filteredData.length === 0 ? (
              <div className="text-center py-20 space-y-4">
                <Search className="w-12 h-12 text-muted-foreground/20 mx-auto" />
                <h3 className="text-xl font-bold">Nenhum alias encontrado</h3>
                <p className="text-muted-foreground">Tente buscar por termos diferentes ou mude o filtro de plataforma.</p>
                <button 
                  onClick={() => { setSearchQuery(""); setPlatform("all"); }}
                  className="text-primary font-bold text-sm underline underline-offset-4"
                >
                  Limpar filtros
                </button>
              </div>
            ) : (
              filteredData.map((category, index) => (
                <motion.section 
                  key={category.id} 
                  id={category.id} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="scroll-mt-48 group"
                >
                  <div className="flex items-center gap-4 mb-10">
                    <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                      <category.icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black tracking-tight uppercase">
                      {category.title}
                    </h2>
                    <div className="h-px flex-1 bg-border/40 ml-4" />
                  </div>

                  <div className="grid gap-6">
                    {category.aliases.map((alias, idx) => (
                      <motion.div 
                        key={`${category.id}-${alias.name}`}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="bg-card border border-border/60 rounded-3xl p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group/item"
                      >
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                          <div className="space-y-4 flex-1">
                            <div className="flex items-center gap-3">
                              <span className="text-xl font-mono font-black text-primary bg-primary/5 px-3 py-1 rounded-xl">
                                {alias.name}
                              </span>
                              <div className="flex gap-2">
                                {alias.availability.includes("Ambos") ? (
                                  <span className="flex items-center gap-1 text-[9px] font-black uppercase tracking-tighter bg-muted px-2 py-0.5 rounded-full text-muted-foreground">
                                    <Infinity className="w-2.5 h-2.5" /> Ambos
                                  </span>
                                ) : alias.availability.includes("Desktop") ? (
                                  <span className="flex items-center gap-1 text-[9px] font-black uppercase tracking-tighter bg-blue-500/10 px-2 py-0.5 rounded-full text-blue-500">
                                    <Monitor className="w-2.5 h-2.5" /> Desktop
                                  </span>
                                ) : (
                                  <span className="flex items-center gap-1 text-[9px] font-black uppercase tracking-tighter bg-orange-500/10 px-2 py-0.5 rounded-full text-orange-500">
                                    <Server className="w-2.5 h-2.5" /> Servidor
                                  </span>
                                )}
                              </div>
                            </div>
                            
                            <p className="text-muted-foreground font-medium leading-relaxed">
                              {alias.description}
                            </p>

                            <div className="space-y-3">
                              <div className="space-y-1">
                                <span className="text-[10px] font-black text-muted-foreground/50 uppercase tracking-widest">Comando executado</span>
                                <div className="bg-muted/30 rounded-xl p-3 font-mono text-sm text-foreground/80 border border-border/30 overflow-x-auto">
                                  {alias.command}
                                </div>
                              </div>
                              <div className="space-y-1">
                                <span className="text-[10px] font-black text-muted-foreground/50 uppercase tracking-widest">Exemplo de uso</span>
                                <div className="bg-primary/5 rounded-xl p-3 font-mono text-sm text-primary border border-primary/10">
                                  $ {alias.example}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              ))
            )}

            {/* Final CTA */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mt-32 bg-foreground text-background dark:bg-card dark:text-foreground border border-border rounded-[3rem] p-12 text-center relative overflow-hidden group shadow-2xl"
            >
              <div className="relative z-10 space-y-6">
                <h3 className="text-3xl font-black tracking-tighter max-w-xl mx-auto leading-tight">
                  Aumente sua produtividade com centenas de atalhos.
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  O SetupVibe pré-configura esses e muitos outros aliases para que seu terminal trabalhe para você.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="/instalar" className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-10 rounded-full bg-primary text-primary-foreground font-black hover:scale-105 transition-all shadow-xl shadow-primary/30">
                    Instalar SetupVibe
                  </a>
                  <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-flex items-center gap-2 text-sm font-bold opacity-50 hover:opacity-100 transition-opacity">
                    <ArrowUpCircle className="w-5 h-5" />
                    Voltar ao topo
                  </button>
                </div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}
