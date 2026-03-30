import React from 'react';
import { Sparkles, Zap, Target, ArrowRight, PlayCircle, Users, Layout as LayoutIcon, Cpu } from "lucide-react";

export function PromovawebCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950">
      {/* Dynamic Background Gradients (Brand Colors) */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '3s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="relative group max-w-6xl mx-auto">
          
          {/* Main Container with Promovaweb Dark Aesthetics */}
          <div className="relative overflow-hidden rounded-[3rem] bg-slate-900/60 backdrop-blur-2xl border border-slate-800 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] p-8 md:p-16 lg:p-20">
            
            {/* Ambient Light Effects */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Side: Copy & Action */}
              <div className="lg:col-span-7 space-y-10">
                <div className="flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest">
                    <Users className="h-4 w-4" />
                    <span>Comunidade</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-black uppercase tracking-widest">
                    <Sparkles className="h-4 w-4" />
                    <span>IA Makers</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-5xl md:text-7xl font-black text-white leading-[1] tracking-tighter">
                    O Próximo Passo do <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                      Seu Setup.
                    </span>
                  </h2>
                  <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-2xl">
                    Entre para a elite da <strong className="text-white">Automação e Vibe Coding</strong>. 
                    Escalabilidade, Inteligência Artificial e Negócios em um só lugar.
                  </p>
                </div>
                
                {/* Feature Grid with Status-like Colors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { icon: PlayCircle, text: "Lives diárias às 10h", sub: "Mentoria ao vivo", color: "text-blue-400", bg: "bg-blue-500/5" },
                    { icon: Sparkles, text: "IA Makers", sub: "Formação em IA", color: "text-purple-400", bg: "bg-purple-500/5" },
                    { icon: Zap, text: "Instalador Exclusivo", sub: "Deploy em 1 clique", color: "text-amber-400", bg: "bg-amber-500/5" },
                    { icon: Users, text: "Networking", sub: "+2k Empreendedores", color: "text-emerald-400", bg: "bg-emerald-500/5" }
                  ].map((item, idx) => (
                    <div key={idx} className={`flex items-start gap-4 p-4 rounded-2xl ${item.bg} border border-white/5 transition-all hover:border-white/10 group/item`}>
                      <div className={`p-2 rounded-xl bg-slate-900 shadow-inner ${item.color}`}>
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-lg">{item.text}</div>
                        <div className="text-sm text-slate-500 font-medium">{item.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-6 flex flex-col sm:flex-row gap-6 items-center">
                  <a 
                    href="https://promovaweb.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group/btn relative w-full sm:w-auto inline-flex items-center justify-center gap-4 h-16 px-12 rounded-2xl bg-blue-600 text-white font-black text-xl overflow-hidden transition-all hover:bg-blue-500 hover:scale-[1.03] active:scale-95 shadow-[0_0_40px_rgba(37,99,235,0.4)]"
                  >
                    <span className="relative z-10">QUERO ME INSCREVER AGORA</span>
                    <ArrowRight className="relative z-10 h-6 w-6 group-hover/btn:translate-x-2 transition-transform" />
                  </a>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-3">
                      {[1,2,3].map(i => (
                        <img key={i} src={`https://i.pravatar.cc/100?u=pw${i}`} className="w-12 h-12 rounded-full border-4 border-slate-900 shadow-2xl" alt="Membro" />
                      ))}
                    </div>
                    <div className="text-left">
                      <div className="text-white font-black text-lg leading-none">2.412</div>
                      <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">Alunos Ativos</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Visual Identity */}
              <div className="lg:col-span-5 relative flex justify-center items-center">
                <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
                  {/* Geometric Tech Decor */}
                  <div className="absolute inset-0 border-[1px] border-slate-800 rounded-[4rem] rotate-6 group-hover:rotate-12 transition-transform duration-700"></div>
                  <div className="absolute inset-0 border-[1px] border-slate-800 rounded-[4rem] -rotate-3 group-hover:-rotate-6 transition-transform duration-700"></div>
                  
                  {/* Glowing Core */}
                  <div className="absolute w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]"></div>
                  
                  <div className="relative z-10 p-12 bg-slate-900 border border-slate-800 rounded-[3.5rem] shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                    <img 
                      src="https://cache.promovaweb.com/logo.png" 
                      alt="Promovaweb" 
                      className="w-full h-auto max-w-[200px] drop-shadow-[0_0_40px_rgba(37,99,235,0.3)]" 
                    />
                  </div>
                  
                  {/* Floating Status Badges */}
                  <div className="absolute top-0 right-0 p-4 bg-slate-950/90 border border-emerald-500/20 rounded-2xl shadow-2xl animate-bounce flex items-center gap-2" style={{ animationDuration: '4s' }}>
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-xs font-black text-emerald-500 tracking-tighter uppercase">Comunidade Ativa</span>
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 p-5 bg-slate-950/90 border border-blue-500/20 rounded-3xl shadow-2xl animate-pulse flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/10">
                      <Cpu className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-white leading-none">CPU POWER</div>
                      <div className="text-[10px] font-bold text-blue-400">OPTIMIZED FOR IA</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
          {/* Neon Border Glow */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-blue-600/30 rounded-[3.1rem] blur-sm opacity-50 group-hover:opacity-100 transition duration-500"></div>
        </div>
      </div>
    </section>
  );
}
