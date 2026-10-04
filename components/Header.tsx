'use client';
import { Flame, Heart, Star, Code2 } from 'lucide-react';
import { useStore } from '@/store/useStore';
export default function Header() {
  const { xp, hearts, streak } = useStore();
  return <header className="sticky top-0 z-40 border-b-2 border-[#E5E5E5] bg-white/95 backdrop-blur"><div className="mx-auto flex max-w-[600px] items-center justify-between px-4 py-3">
    <div className="flex items-center gap-2"><div className="grid h-10 w-10 place-items-center rounded-xl bg-[#58CC02] text-white shadow-[0_4px_0_#46A302]"><Code2 size={22}/></div><div><div className="font-black leading-none">AI-Engineer</div><div className="text-xs font-black uppercase text-[#58CC02]">Quest</div></div></div>
    <div className="flex gap-2 text-sm font-black">
      <span className="flex items-center gap-1 rounded-xl bg-[#FFF4CC] px-2.5 py-2 text-[#A87800]"><Star size={16} fill="currentColor"/>{xp}</span>
      <span className="flex items-center gap-1 rounded-xl bg-[#FFE8E8] px-2.5 py-2 text-[#D92D2D]"><Heart size={16} fill="currentColor"/>{hearts}</span>
      <span className="flex items-center gap-1 rounded-xl bg-[#E5F7FF] px-2.5 py-2 text-[#0783BA]"><Flame size={16} fill="currentColor"/>{streak}</span>
    </div>
  </div></header>;
}