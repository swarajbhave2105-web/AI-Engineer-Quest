'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
type Store={xp:number;hearts:number;streak:number;completedModules:number[];completeModule:(id:number,xp:number)=>void;spendHeart:()=>void;reset:()=>void};
export const useStore=create<Store>()(persist(set=>({xp:0,hearts:5,streak:1,completedModules:[],completeModule:(id,xp)=>set(s=>s.completedModules.includes(id)?s:{xp:s.xp+xp,completedModules:[...s.completedModules,id],hearts:Math.min(5,s.hearts+1)}),spendHeart:()=>set(s=>({hearts:Math.max(0,s.hearts-1)})),restoreHearts:()=>set({hearts:5}),reset:()=>set({xp:0,hearts:5,streak:1,completedModules:[]})}),{name:'ai-engineer-quest-progress'}));