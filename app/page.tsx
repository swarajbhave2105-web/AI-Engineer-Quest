'use client';
import {useState} from 'react';
import {Home as HomeIcon,RotateCcw,Trophy,BookOpen,Target} from 'lucide-react';
import Header from '@/components/Header';
import ProgressPath from '@/components/ProgressPath';
import ModuleModal from '@/components/ModuleModal';
import LessonView from '@/components/LessonView';
import {useStore} from '@/store/useStore';
export default function Home(){
 const [selected,setSelected]=useState<any|null>(null),[active,setActive]=useState<any|null>(null);
 const {completedModules,reset,xp,streak}=useStore(); const completed=completedModules.length,progress=Math.round(completed/24*100);
 if(active)return <LessonView module={active} onDone={()=>{useStore.getState().completeModule(active.id,active.xpReward);setActive(null);setSelected(null)}}/>;
 return <div className="app-shell"><Header/><main className="app-container">
  <section className="px-4 pb-1 pt-5"><div className="rounded-[28px] bg-gradient-to-br from-[#58CC02] to-[#46A302] p-5 text-white shadow-[0_5px_0_#358500]">
   <div className="flex items-start justify-between gap-3"><div><div className="mb-1 text-xs font-black uppercase tracking-wider text-white/80">Your learning path</div><h1 className="text-2xl font-black leading-tight">Become a Front-End AI Engineer</h1><p className="mt-2 text-sm font-bold leading-5 text-white/90">48 hours · 24 modules · from zero to shipped</p></div><div className="rounded-2xl bg-white/15 px-3 py-2 text-center"><div className="text-lg font-black">{progress}%</div><div className="text-[10px] font-black uppercase">done</div></div></div>
   <div className="mt-4 h-3 overflow-hidden rounded-full bg-black/15"><div className="h-full rounded-full bg-white transition-all" style={{width:progress+'%'}}/></div><div className="mt-2 flex justify-between text-xs font-black"><span>{completed}/24 modules</span><span>{xp} XP earned</span></div>
  </div></section>
  <section className="px-4 pt-5"><div className="mb-1 flex items-center justify-between"><div className="flex items-center gap-2"><Target size={19} className="text-[#58CC02]"/><h2 className="text-lg font-black">Continue learning</h2></div><span className="text-xs font-black uppercase text-[#999]">{streak} day streak</span></div><p className="text-sm font-bold text-[#777]">Follow the path and complete each module to unlock the next.</p></section>
  <ProgressPath completed={completedModules} onSelect={setSelected}/>
 </main>
 <nav className="fixed bottom-0 left-0 right-0 z-40 border-t-2 border-[#e5e5e5] bg-white/95 px-2 py-2 backdrop-blur"><div className="mx-auto flex max-w-[600px] items-center justify-around">
  <button className="flex min-w-[68px] flex-col items-center gap-0.5 rounded-xl px-2 py-1.5 text-[#58CC02]"><HomeIcon size={21} fill="currentColor"/><span className="text-[10px] font-black uppercase">Learn</span></button>
  <button onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} className="flex min-w-[68px] flex-col items-center gap-0.5 rounded-xl px-2 py-1.5 text-[#777]"><BookOpen size={21}/><span className="text-[10px] font-black uppercase">Path</span></button>
  <button onClick={()=>alert('Progress: '+completed+'/24 modules · '+xp+' XP')} className="flex min-w-[68px] flex-col items-center gap-0.5 rounded-xl px-2 py-1.5 text-[#777]"><Trophy size={21}/><span className="text-[10px] font-black uppercase">Progress</span></button>
  <button onClick={()=>{if(confirm('Reset all quest progress?'))reset()}} className="flex min-w-[68px] flex-col items-center gap-0.5 rounded-xl px-2 py-1.5 text-[#777]"><RotateCcw size={20}/><span className="text-[10px] font-black uppercase">Reset</span></button>
 </div></nav>
 <ModuleModal module={selected} locked={!!selected&&selected.id>1&&!completedModules.includes(selected.id-1)} onClose={()=>setSelected(null)} onStart={()=>{setActive(selected);setSelected(null)}}/>
 </div>
}