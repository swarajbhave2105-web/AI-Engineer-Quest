'use client';
import {useState} from 'react';
import {CheckCircle2,ChevronRight,ChevronLeft,Code2,Heart,Star} from 'lucide-react';
import {motion} from 'framer-motion';
import {useStore} from '@/store/useStore';
export default function LessonView({module,onDone}:{module:any;onDone:()=>void}){
 const [index,setIndex]=useState(0);const [revealed,setRevealed]=useState(false);const lesson=module.lessons[index];const last=index===module.lessons.length-1;const {hearts,xp}=useStore();
 return <motion.div initial={{opacity:0}} animate={{opacity:1}} className="min-h-screen bg-[#F7F7F7] pb-8">
  <header className="sticky top-0 z-40 border-b-2 border-[#e5e5e5] bg-white/95 backdrop-blur"><div className="mx-auto flex max-w-[760px] items-center gap-3 px-4 py-3"><button onClick={onDone} className="rounded-xl p-2 text-[#777] hover:bg-[#f0f0f0]" aria-label="Exit lesson"><ChevronLeft/></button><div className="min-w-0 flex-1"><div className="text-[10px] font-black uppercase tracking-wider text-[#58CC02]">{module.phase} · Module {module.id}</div><div className="truncate text-sm font-black">{module.title}</div></div><span className="flex items-center gap-1 rounded-xl bg-[#FFF4CC] px-2.5 py-1.5 text-xs font-black text-[#A87800]"><Star size={14} fill="currentColor"/>{xp}</span><span className="flex items-center gap-1 rounded-xl bg-[#FFE8E8] px-2.5 py-1.5 text-xs font-black text-[#D92D2D]"><Heart size={14} fill="currentColor"/>{hearts}</span></div><div className="mx-auto h-2 max-w-[760px] overflow-hidden bg-[#E5E5E5]"><motion.div animate={{width:`${((index+1)/module.lessons.length)*100}%`}} className="h-full bg-[#58CC02]"/></div></header>
  <main className="mx-auto max-w-[760px] px-4 py-5"><div className="mb-5 rounded-3xl bg-white p-5 shadow-sm"><div className="mb-2 text-xs font-black uppercase text-[#58CC02]">Lesson {index+1} of {module.lessons.length}</div><h1 className="text-2xl font-black leading-tight">{lesson.title}</h1><p className="mt-3 leading-7 text-[#555]">{lesson.content}</p></div>
   <section className="rounded-3xl bg-[#202124] p-5 text-white shadow-lg"><div className="mb-3 flex items-center gap-2 text-[#9AEF68]"><Code2 size={18}/><span className="font-black">BUILD CHECKPOINT</span></div><div className="rounded-2xl bg-[#2B2D31] p-4 font-mono text-sm leading-7 text-[#D7FBC7]">{`// Engineering checkpoint
const goal = ${JSON.stringify(lesson.title)};

function explain() {
  return 'Understand the concept, then build it.';
}`}</div><button onClick={()=>setRevealed(true)} className="quest-btn quest-blue mt-4 w-full">{revealed?'Concept unlocked':'Reveal the key idea'}</button>{revealed&&<div className="mt-3 rounded-xl bg-white/10 p-3 text-sm leading-6">Understand the concept first, then use AI to accelerate implementation—not replace your understanding.</div>}</section>
   <div className="mt-5 flex gap-3"><button disabled={index===0} onClick={()=>{setIndex(i=>i-1);setRevealed(false)}} className="quest-btn w-1/3 bg-white text-[#777] shadow-[0_5px_0_#c9c9c9] disabled:opacity-40"><ChevronLeft className="mr-1 inline"/>Back</button>{last?<button onClick={onDone} className="quest-btn quest-green flex-1"><CheckCircle2 className="mr-2 inline"/>Complete · +{module.xpReward} XP</button>:<button onClick={()=>{setIndex(i=>i+1);setRevealed(false)}} className="quest-btn quest-blue flex-1">Next lesson <ChevronRight className="ml-1 inline"/></button>}</div>
  </main></motion.div>
}