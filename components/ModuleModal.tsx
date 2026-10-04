'use client';
import { X, Clock, Star, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export default function ModuleModal({module,onClose,onStart,locked}:{module:any|null;onClose:()=>void;onStart:()=>void;locked:boolean}) {
 return <AnimatePresence>{module&&<motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-50 grid place-items-center bg-black/45 p-4" onClick={onClose}>
  <motion.div initial={{y:30,scale:.96}} animate={{y:0,scale:1}} onClick={e=>e.stopPropagation()} className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl">
   <div className="mb-5 flex items-start justify-between"><div><div className="mb-2 text-xs font-black uppercase text-[#58CC02]">{module.phase} · Module {module.id}</div><h2 className="text-2xl font-black">{module.title}</h2></div><button onClick={onClose} className="rounded-full p-2 hover:bg-[#F0F0F0]"><X/></button></div>
   <p className="mb-5 leading-7 text-[#666]">{module.description}</p><div className="mb-5 flex gap-3"><span className="rounded-xl bg-[#EAF8FF] px-3 py-2 text-sm font-black text-[#0783BA]"><Clock size={15} className="mr-1 inline"/>{module.duration}</span><span className="rounded-xl bg-[#FFF6D6] px-3 py-2 text-sm font-black text-[#A87800]"><Star size={15} className="mr-1 inline"/>{module.xpReward} XP</span></div>
   <div className="mb-6 space-y-2">{module.lessons.map((l:any,i:number)=><div key={l.title} className="rounded-xl bg-[#F7F7F7] p-3"><span className="mr-2 font-black text-[#58CC02]">{i+1}.</span><span className="font-bold">{l.title}</span></div>)}</div>
   <button disabled={locked} onClick={onStart} className="quest-btn quest-green w-full disabled:bg-[#BDBDBD] disabled:shadow-[0_5px_0_#999]">{locked?<><Lock size={17} className="mr-2 inline"/>Locked</>:'Start module'}</button>
  </motion.div></motion.div>}</AnimatePresence>;
}