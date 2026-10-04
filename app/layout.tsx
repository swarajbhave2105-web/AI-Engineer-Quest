import type {Metadata,Viewport} from 'next';
import './globals.css';
export const metadata:Metadata={title:'AI Engineer Quest',description:'Learn front-end AI engineering through a 24-module gamified quest.',applicationName:'AI Engineer Quest',appleWebApp:{capable:true,title:'AI Engineer Quest',statusBarStyle:'default'}};
export const viewport:Viewport={width:'device-width',initialScale:1,viewportFit:'cover',themeColor:'#58CC02'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}