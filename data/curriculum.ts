export type QuestionType = "mcq"|"code"|"debug"|"scenario";
export type QuizQuestion = { type:QuestionType; question:string; options:string[]; correctIndex:number; explanation:string; code?:string };
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
{type:"mcq",question:"What gives a web page its structure?",options:["HTML","CSS","DNS","JSON"],correctIndex:0,explanation:"HTML defines the structure and meaning of page content."},
{type:"code",question:"Which HTML element creates the main page heading?",options:["<h1>","<p>","<div>","<main>"],correctIndex:0,explanation:"h1 is the primary heading element."},
{type:"scenario",question:"A button looks wrong. What should you inspect first?",options:["Its HTML/CSS","Your DNS","Your API key","Git history"],correctIndex:0,explanation:"For a visual UI problem, inspect the element structure and its styles first."},
{type:"debug",question:"Which CSS change fixes this spacing issue?",options:["padding: 16px;","fetch('/api')","const x = 1","git push"],correctIndex:0,explanation:"Padding adds space inside an element."}
],
[
{type:"mcq",question:"What is a JavaScript function?",options:["Reusable logic","A CSS selector","A database","A domain"],correctIndex:0,explanation:"Functions group reusable behaviour."},
{type:"code",question:"What does this return?","code":"function add(a,b){ return a+b }\nadd(2,3)","options:["5","23","undefined","true"],correctIndex:0,explanation:"The function adds the two numbers, producing 5."},
{type:"scenario",question:"A value changes after a button click. What should you use?",options:["A variable/state value","DNS","HTML comments","A domain"],correctIndex:0,explanation:"Changing UI data needs a value your program can update."},
{type:"debug",question:"What is wrong with this condition?","code":"if (age = 18) { ... }","options:["It assigns instead of comparing","Nothing","It needs CSS","It needs fetch"],correctIndex:0,explanation:"Use === when you want to compare values."}
]
];
const genericQuiz=(title:string,description:string):QuizQuestion[]=>[
{type:"mcq",question:`Which statement best describes “${title}”?`,options:[description,"It is only for memorising syntax","It should never be tested","It replaces engineering judgement"],correctIndex:0,explanation:"Understanding the concept is the goal."},
{type:"scenario",question:"You are unsure how to implement this concept. What is the best next step?",options:["Ask AI with context and constraints, then verify","Copy random code","Skip testing","Ignore the requirement"],correctIndex:0,explanation:"Good AI-assisted engineering combines clear context with verification."},
{type:"code",question:"Which mindset is safest when reviewing generated code?",options:["Understand and test it","Trust it automatically","Never read it","Deploy immediately"],correctIndex:0,explanation:"Generated code must still be understood, reviewed and tested."},
{type:"debug",question:"Something fails unexpectedly. What should you do first?",options:["Reproduce and inspect the error","Delete everything","Change random lines","Assume the tool is wrong"],correctIndex:0,explanation:"Reproducing the issue makes debugging systematic."}
];export const curriculum: CurriculumModule[] = topics.map(([title,phase,description], index) => ({
 id:index+1, title, phase, description, duration:"2 hours", xpReward:50,
 project:[6,12,18,24].includes(index+1),
 projectDescription:[6,12,18,24].includes(index+1) ? description : undefined,
 lessons:lessonTemplates.map(([kind,base], lessonIndex) => ({
   title: kind === "Core idea" ? `${title}: Core idea` : kind === "Build it" ? `${title}: Build it` : kind === "Use AI well" ? `${title}: Use AI well` : `${title}: Checkpoint`,
   content: `${base} ${description}`,
   questions: quizBank[index] ?? genericQuiz(title,description)
 }))
}));
