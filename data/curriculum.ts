export type QuizQuestion = { question:string; options:string[]; correctIndex:number; explanation:string };
export type Lesson = { title: string; content: string; questions:QuizQuestion[] };
export type CurriculumModule = { id:number; title:string; phase:string; description:string; duration:string; xpReward:number; lessons:Lesson[]; project?:boolean; projectDescription?:string };

const topics = [
["HTML/CSS Crash Course for AI","Phase 1","Learn the page structure, semantic HTML, CSS selectors, layout, and the mental model needed to build AI product interfaces."],
["JavaScript Logic & Functions","Phase 1","Learn variables, arrays, objects, conditions, loops, functions, and the logic behind interactive web apps."],
["Intro to React & Components","Phase 1","Understand components, JSX, props, rendering, and how React turns UI ideas into reusable building blocks."],
["Tailwind CSS: Styling at Speed","Phase 1","Use utility classes, responsive breakpoints, spacing, typography, and states to style interfaces quickly."],
["State Management Basics (useState)","Phase 1","Learn local state, event handlers, controlled inputs, and how UI changes when data changes."],
["Project: Build a Static Personal Bio","Phase 1","Combine HTML, React, and Tailwind to ship a polished beginner portfolio page."],
["Prompt Engineering for Developers","Phase 2","Write precise coding prompts with context, constraints, examples, acceptance criteria, and iteration loops."],
["Using Cursor & GitHub Copilot","Phase 2","Use AI coding assistants safely: generate, explain, refactor, and review code without losing control."],
["Debugging with AI","Phase 2","Turn errors into useful prompts, isolate root causes, verify fixes, and avoid blindly accepting generated changes."],
["API Basics (Fetch/Axios)","Phase 2","Understand HTTP, JSON, requests, responses, async JavaScript, and the fetch workflow."],
["Connecting to OpenAI API","Phase 2","Understand model requests, server-side secrets, structured prompts, responses, and safe API architecture."],
["Project: Build an AI Chatbot Interface","Phase 2","Build a chat UI with messages, input state, loading feedback, and a clean AI-product interaction model."],
["AI-Driven UI Design (v0.dev)","Phase 3","Turn product requirements into interface concepts with AI-assisted UI generation and iterative refinement."],
["UX Principles for AI Apps","Phase 3","Design clear AI interactions using hierarchy, feedback, affordances, trust, and progressive disclosure."],
["Handling Loading States & Errors","Phase 3","Make AI interfaces resilient with loading, empty, success, retry, timeout, and error states."],
["Framer Motion Basics","Phase 3","Add purposeful motion using transitions, entrance animations, feedback, and interaction states."],
["Responsive Design","Phase 3","Build mobile-first layouts that adapt cleanly across phones, tablets, and desktop screens."],
["Project: Build a “Magic” AI Image Generator UI","Phase 3","Combine responsive UI, loading states, motion, and AI-product patterns into a polished image-generation experience."],
["Git & GitHub for Beginners","Phase 4","Learn repositories, commits, branches, pull requests, and the basic collaboration workflow."],
["Deploying on Vercel","Phase 4","Move a Next.js project from GitHub to a live production URL and understand deployment basics."],
["Domain Names & DNS","Phase 4","Understand domains, DNS records, nameservers, propagation, and how a domain points to an app."],
["Environment Variables","Phase 4","Keep API keys and configuration out of source code and understand public versus server-only variables."],
["SEO & Metadata","Phase 4","Add titles, descriptions, social metadata, semantic structure, and basic discoverability improvements."],
["Capstone: Launch Your SaaS","Phase 4","Plan, build, test, deploy, and present a small AI SaaS using the complete front-end engineering workflow."]
] as const;

const lessonTemplates = [
["Core idea","Start with the mental model. Learn what the technology does and when you would use it."],
["Build it","Follow a small implementation pattern and identify the important pieces of the code."],
["Use AI well","Ask an AI coding assistant for help with clear context, constraints, and expected output."],
["Checkpoint","Explain the concept in your own words and identify what you would verify before shipping."]
];

const quizBank:QuizQuestion[][] = [
 [
  {question:"What should you learn first before styling a web page?",options:["HTML structure","A database","DNS records","An API key"],correctIndex:0,explanation:"HTML gives the page its structure; CSS then controls presentation."},
  {question:"Which CSS concept controls space inside an element?",options:["Margin","Padding","Route","Fetch"],correctIndex:1,explanation:"Padding is the space between an element's content and its border."},
  {question:"What is a good AI-assisted coding habit?",options:["Copy without reading","Ask for context-aware explanations","Skip testing","Ignore errors"],correctIndex:1,explanation:"Use AI to accelerate learning, but understand and verify its output."}
 ],
 [
  {question:"What does a JavaScript function let you do?",options:["Group reusable logic","Create a DNS record","Style a button only","Store an API key publicly"],correctIndex:0,explanation:"Functions package reusable behaviour into a callable block."},
  {question:"Which is best for a value that may change?",options:["A variable","A comment","A CSS class","A URL"],correctIndex:0,explanation:"Variables hold values that your program can read and update."},
  {question:"What should you do when AI generates JavaScript?",options:["Run it blindly","Read, test and modify it","Never execute it","Delete it"],correctIndex:1,explanation:"Testing and understanding generated code keeps you in control."}
 ]
];
const genericQuiz=(title:string,description:string):QuizQuestion[]=>[
 {question:`Which statement best describes “${title}”?`,options:[description,"It is only for memorising syntax","It should never be tested","It replaces engineering judgement"],correctIndex:0,explanation:"The goal is to understand the concept well enough to apply and verify it."},
 {question:"What is the best workflow when learning with an AI coding assistant?",options:["Copy everything","Explain the goal, inspect the output, test it, then iterate","Never ask questions","Ignore errors"],correctIndex:1,explanation:"Good AI-assisted engineering is an iterative loop: context, output, verification, refinement."},
 {question:"You get an unexpected result. What should you do first?",options:["Give up","Delete the project","Inspect the error and reproduce the problem","Assume the AI is correct"],correctIndex:2,explanation:"Reproducing and understanding the failure gives you a reliable path to the fix."}
];

export const curriculum: CurriculumModule[] = topics.map(([title,phase,description], index) => ({
 id:index+1, title, phase, description, duration:"2 hours", xpReward:50,
 project:[6,12,18,24].includes(index+1),
 projectDescription:[6,12,18,24].includes(index+1) ? description : undefined,
 lessons:lessonTemplates.map(([kind,base], lessonIndex) => ({
   title: kind === "Core idea" ? `${title}: Core idea` : kind === "Build it" ? `${title}: Build it` : kind === "Use AI well" ? `${title}: Use AI well` : `${title}: Checkpoint`,
   content: `${base} ${description}`,
   questions: quizBank[index] ?? genericQuiz(title,description)
 }))
}));
