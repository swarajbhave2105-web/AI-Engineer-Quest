'use client';
import { Lock, Check, Play, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
export default function LessonNode({module,locked,completed,onClick}:{module:any;locked:boolean;completed:boolean;onClick:()=>void}) {
 return <motion.button whileHover={{scale:1.05}} whileTap={{scale:.96}} onClick={onClick} disabled={locked} className="node-wrap relative z-10 mb-8 flex w-full items-center justify-center disabled:cursor-not-allowed">
  <div className={`grid h-[78px] w-[78px] place-items-center rounded-full border-[6px] border-white text-white shadow-lg ${locked?'bg-[#BDBDBD]':completed?'bg-[#58CC02] shadow-[0_7px_0_#46A302]':module.project?'bg-[#FFC800] shadow-[0_7px_0_#D6A900]':'bg-[#1CB0F6] shadow-[0_7px_0_#1496D1]'}`}>
   {locked?<Lock size={28}/>:completed?<Check size={34} strokeWidth={4}/>:module.project?<BookOpen size={29}/>:<Play size={28} fill="currentColor"/>}
  </div>
  <div className="absolute top-[86px] w-56 text-center"><div className="text-sm font-black">{module.id}. {module.title}</div><div className="text-xs font-bold text-[#888]">{module.duration} · +{module.xpReward} XP</div></div>
 </motion.button>;
}