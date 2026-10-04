'use client';
import { useState } from 'react';
import { RotateCcw, Trophy, Clock } from 'lucide-react';
import Header from '@/components/Header';
import ProgressPath from '@/components/ProgressPath';
import ModuleModal from '@/components/ModuleModal';
import LessonView from '@/components/LessonView';
import { useStore } from '@/store/useStore';

export default function Home() {
  const [selected, setSelected] = useState<any | null>(null);
  const [active, setActive] = useState<any | null>(null);
  const { completedModules, reset } = useStore();
  const completed = completedModules.length;
  const progress = Math.round((completed / 24) * 100);
  if (active) return <LessonView module={active} onDone={() => {
    useStore.getState().completeModule(active.id, active.xpReward);
    setActive(null); setSelected(null);
  }} />;
  return <>
    <Header />
    <main>
      <section className="mx-auto max-w-[600px] px-4 pb-2 pt-7 text-center">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#E9F9DF] px-4 py-2 text-sm font-black text-[#46A302]">
          <Trophy size={16} /> 48-HOUR FRONT-END AI ENGINEER QUEST
        </div>
        <h1 className="text-3xl font-black tracking-tight md:text-4xl">Build. Learn. Ship. <span className="text-[#58CC02]">Repeat.</span></h1>
        <p className="mx-auto mt-3 max-w-md leading-6 text-[#777]">24 modules. 48 hours. Start from zero and work your way toward launching your own AI-powered product.</p>
        <div className="mt-5 rounded-2xl border-2 border-[#E5E5E5] bg-white p-4 text-left shadow-sm">
          <div className="mb-2 flex justify-between text-sm font-black"><span>Your quest</span><span>{completed}/24 modules</span></div>
          <div className="h-3 overflow-hidden rounded-full bg-[#E5E5E5]"><div className="h-full rounded-full bg-[#58CC02] transition-all" style={{width:`${progress}%`}} /></div>
        </div>
      </section>
      <ProgressPath completed={completedModules} onSelect={setSelected} />
    </main>
    <footer className="fixed bottom-3 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-2xl border-2 border-[#E5E5E5] bg-white px-3 py-2 shadow-xl">
      <span className="hidden text-xs font-bold text-[#777] sm:inline"><Clock size={14} className="mr-1 inline" /> Your progress is saved automatically</span>
      <button onClick={() => { if (confirm('Reset all quest progress?')) reset(); }} className="rounded-xl p-2 text-[#777] hover:bg-[#F0F0F0]" title="Reset progress"><RotateCcw size={17} /><span className="sr-only">Reset progress</span></button>
      <button onClick={() => window.scrollTo({top:0,behavior:'smooth'})} className="rounded-xl px-3 py-2 text-xs font-black uppercase text-[#58CC02]">Top</button>
    </footer>
    <ModuleModal module={selected} locked={!!selected && selected.id > 1 && !completedModules.includes(selected.id - 1)}
      onClose={() => setSelected(null)} onStart={() => { setActive(selected); setSelected(null); }} />
  </>;
}