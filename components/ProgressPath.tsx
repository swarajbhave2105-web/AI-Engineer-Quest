'use client';
import { motion } from 'framer-motion';
import { curriculum } from '@/data/curriculum';
import LessonNode from './LessonNode';
export default function ProgressPath({completed,onSelect}:{completed:number[];onSelect:(m:any)=>void}) {
 return <div className="relative mx-auto max-w-[600px] px-4 pb-32 pt-8">{curriculum.map((m,i)=>{const locked=i>0&&!completed.includes(curriculum[i-1].id);return <motion.div key={m.id} initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:i*.025}} className="relative min-h-[132px]">{i<curriculum.length-1&&<div className="path-line"/>}<LessonNode module={m} locked={locked} completed={completed.includes(m.id)} onClick={()=>onSelect(m)}/></motion.div>})}</div>;
}