'use client';
import { useState } from 'react';
import { CheckCircle2, ChevronRight, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
export default function LessonView({module,onDone}:{module:any;onDone:()=>void}) {
 const [index,setIndex]=useState(0); const [revealed,setRevealed]=useState(false); const lesson=module.lessons[index]; const last=index===module.lessons.length-1;
 return <motion.div initial={{x:30,opacity:0}} animate={{x:0,opacity:1}} className="min-h-screen bg-[#F7F7F7]"><div className="mx-auto max-w-4xl px-4 py-5">
  <div className="mb-5 flex items-center justify-between"><div><div className="text-xs font-black uppercase text-[#58CC02]">{module.phase} · {module.id}/24</div><h1 className="text-2xl font-black">{module.title}</h1></div><div className="rounded-xl bg-white px-3 py-2 text-sm font-black shadow-sm">{index+1}/{module.lessons.length}</div></div>
  <div className="mb-5 h-3 overflow-hidden rounded-full bg-[#E5E5E5]"><motion.div animate={{width:`${((index+1)/module.lessons.length)*100}%`}} className="h-full rounded-full bg-[#58CC02]"/></div>
  <div className="grid gap-4 md:grid-cols-2"><section className="rounded-3xl bg-white p-6 shadow-sm"><div className="mb-3 flex items-center gap-2 text-[#58CC02]"><Code2 size={20}/><span className="font-black uppercase">Lesson</span></div><h2 className="mb-4 text-xl font-black">{lesson.title}</h2><p className="leading-8 text-[#555]">{lesson.content}</p></section>
   <section className="rounded-3xl bg-[#202124] p-5 text-white shadow-lg"><div className="mb-4 flex items-center gap-2 text-[#9AEF68]"><Code2 size={18}/><span className="font-black">TRY IT</span></div><div className="rounded-2xl bg-[#2B2D31] p-4 font-mono text-sm leading-7 text-[#D7FBC7]">{`// Your engineering checkpoint\nconst goal = ${JSON.stringify(lesson.title)};\n\nfunction explain() {\n  return 'Understand the concept, then build it.';\n}`}</div>
   <button onClick={()=>setRevealed(true)} className="quest-btn quest-blue mt-4 w-full">{revealed?'Concept unlocked':'Reveal the key idea'}</button>{revealed&&<div className="mt-3 rounded-xl bg-white/10 p-3 text-sm leading-6">The fastest path is to understand the idea first, then use AI to accelerate implementation—not to replace your understanding.</div>}</section>
  </div>
  <div className="mt-5 flex justify-end">{last?<button onClick={onDone} className="quest-btn quest-green w-full md:w-auto"><CheckCircle2 className="mr-2 inline"/>Complete module · +{module.xpReward} XP</button>:<button onClick={()=>{setIndex(i=>i+1);setRevealed(false)}} className="quest-btn quest-blue w-full md:w-auto">Next lesson <ChevronRight className="ml-1 inline"/></button>}</div>
 </div></motion.div>;
}