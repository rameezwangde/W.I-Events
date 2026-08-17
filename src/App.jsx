import { Suspense, lazy, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Layout } from './components/Site'
import Experience from './components/Experience'
import { Privacy, Terms, NotFound } from './pages/Static'
const Home=lazy(()=>import('./pages/Home'));const About=lazy(()=>import('./pages/About'));const Services=lazy(()=>import('./pages/Services'));const Detail=lazy(()=>import('./pages/ServiceDetail'));const Topics=lazy(()=>import('./pages/Topics'));const Contact=lazy(()=>import('./pages/Contact'))
function ScrollToTop() { const { pathname } = useLocation(); useEffect(() => { window.scrollTo(0, 0); }, [pathname]); return null; }
export default function App(){return <><Experience/><Layout><ScrollToTop/><Suspense fallback={<div className="route-loader">W.I.</div>}><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/services" element={<Services/>}/><Route path="/services/:slug" element={<Detail/>}/><Route path="/topics" element={<Topics/>}/><Route path="/contact" element={<Contact/>}/><Route path="/privacy" element={<Privacy/>}/><Route path="/terms" element={<Terms/>}/><Route path="*" element={<NotFound/>}/></Routes></Suspense></Layout></> }


