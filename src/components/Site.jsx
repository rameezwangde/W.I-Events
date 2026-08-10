import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowUpRight, Menu, X, Phone, MessageCircle, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { contact, seo, services } from '../data/siteData'

gsap.registerPlugin(ScrollTrigger)
const nav = [['Home','/'],['About','/about'],['Services','/services'],['Topics','/topics'],['Our Work','/our-work'],['Contact','/contact']]

export const WhatsAppIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)
export function SEO({ title, description, schema, path }) {
  const location = useLocation(); const key = path || location.pathname
  const fallback = seo[key] || ['W.I. Events & Promotions | Nukkad Natak Delhi','Street theatre, CSR outreach, roadshows and awareness campaigns across Delhi NCR and India.']
  const canonical = `https://www.nukkadnatak.in${key === '/' ? '' : key}`
  return <Helmet>
    <title>{title || fallback[0]}</title><meta name="description" content={description || fallback[1]} />
    <link rel="canonical" href={canonical}/><meta property="og:type" content="website"/><meta property="og:title" content={title || fallback[0]}/>
    <meta property="og:description" content={description || fallback[1]}/><meta property="og:url" content={canonical}/>
    <meta property="og:image" content="https://www.nukkadnatak.in/images/nukkad-natak-delhi-performance.webp"/><meta name="twitter:card" content="summary_large_image"/>
    {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
  </Helmet>
}

export function ButtonLink({to='/contact', children, light=false, className=''}) { return <Link className={`button ${light?'button--light':''} ${className}`} to={to}>{children}<ArrowUpRight size={17}/></Link> }

export function Header(){
  const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false); const location=useLocation()
  useEffect(()=>{setOpen(false)},[location]); useEffect(()=>{const fn=()=>setScrolled(scrollY>40); addEventListener('scroll',fn,{passive:true}); fn(); return()=>removeEventListener('scroll',fn)},[])
  useEffect(()=>{document.body.style.overflow=open?'hidden':''; return()=>document.body.style.overflow=''},[open])
  return <header className={`header ${scrolled?'is-scrolled':''}`}>
    <Link to="/" className="brand" aria-label="W.I. Events home"><strong>W.I.</strong><span>Events & Promotions<small>Nukkad Natak Â· Theatre Â· Outreach</small></span></Link>
    <nav className="desktop-nav" aria-label="Main navigation">{nav.map(([n,p])=><NavLink key={p} to={p}>{n}</NavLink>)}<ButtonLink>Get a Quote</ButtonLink></nav>
    <button className="menu-toggle" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Open menu">{open?<X/>:<Menu/>}</button>
    <div className={`mobile-menu ${open?'is-open':''}`} aria-hidden={!open}><div className="mobile-menu__inner">{nav.map(([n,p],i)=><NavLink key={p} to={p}><span>0{i+1}</span>{n}</NavLink>)}<a href={contact.phoneHref}>{contact.phone}</a></div></div>
  </header>
}

export function Footer(){return <footer className="footer">
  <div className="footer__lead"><p>THE STREET BECOMES THE STAGE</p><h2>Messages made<br/>human.</h2><ButtonLink light>Get a Quote</ButtonLink></div>
  <div className="footer__grid"><div><h3>W.I. Events & Promotions</h3><p>Street theatre, CSR outreach and live campaigns shaped in Delhi and delivered across India.</p></div><div><h3>Navigate</h3>{nav.slice(1).map(([n,p])=><Link key={p} to={p}>{n}</Link>)}</div><div><h3>Services</h3>{services.slice(0,5).map(s=><Link key={s.slug} to={`/services/${s.slug}`}>{s.title}</Link>)}</div><address><h3>Delhi studio</h3><p>{contact.address}</p><a href={contact.phoneHref}>{contact.phone}</a><a href={`mailto:${contact.email}`}>{contact.email}</a></address></div>
  <div className="footer__bottom"><span>Â© {new Date().getFullYear()} W.I. Events & Promotions</span><span><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link><a href="/sitemap.xml">Sitemap</a></span></div>
  </footer>}

export function Layout({children}){
  const loc=useLocation(); const progress=useRef();
  useEffect(()=>{window.scrollTo(0,0)},[loc.pathname])
  useEffect(()=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return; const lenis=new Lenis({duration:1.05,smoothWheel:true}); let raf; const loop=t=>{lenis.raf(t);raf=requestAnimationFrame(loop)}; raf=requestAnimationFrame(loop); lenis.on('scroll',ScrollTrigger.update); return()=>{cancelAnimationFrame(raf);lenis.destroy()}},[])
  useEffect(()=>{const on=()=>{const max=document.documentElement.scrollHeight-innerHeight; if(progress.current) progress.current.style.transform=`scaleX(${max?scrollY/max:0})`}; addEventListener('scroll',on,{passive:true}); return()=>removeEventListener('scroll',on)},[])
  return <><div className="scroll-progress" ref={progress}/><Header/><main id="main-content">{children}</main><Footer/><a href={contact.whatsapp} target="_blank" rel="noreferrer" className="whatsapp" aria-label="Enquire on WhatsApp"><WhatsAppIcon/></a><div className="mobile-actions"><a href={contact.phoneHref}><Phone/>Call Now</a><Link to="/contact">Get a Quote</Link></div></>
}

export function PageHero({eyebrow='W.I. Events & Promotions',title,copy,image=true}){return <section className={`page-hero ${image?'page-hero--image':''}`}><div className="noise"/><div className="page-hero__content"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1>{copy&&<p>{copy}</p>}</div></section>}

export function SectionTitle({eyebrow,title,copy,dark=false}){const ref=useRef(); useEffect(()=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return; const ctx=gsap.context(()=>gsap.from(ref.current.children,{y:36,opacity:0,stagger:.1,duration:.7,ease:'power3.out',scrollTrigger:{trigger:ref.current,start:'top 82%'}}),ref);return()=>ctx.revert()},[]); return <div ref={ref} className={`section-title ${dark?'section-title--dark':''}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy&&<p>{copy}</p>}</div>}

export function Breadcrumbs({items}){return <nav className="breadcrumbs" aria-label="Breadcrumb"><Link to="/">Home</Link>{items.map((x,i)=><span key={x.path||x.name}>/ {x.path?<Link to={x.path}>{x.name}</Link>:x.name}</span>)}</nav>}

export function Accordion({items}){const [open,setOpen]=useState(0); return <div className="accordion">{items.map(([q,a],i)=><div className={`accordion__item ${open===i?'is-open':''}`} key={q}><button onClick={()=>setOpen(open===i?-1:i)} aria-expanded={open===i}><span>{String(i+1).padStart(2,'0')}</span>{q}<ChevronDown/></button><div className="accordion__answer"><p>{a}</p></div></div>)}</div>}

export function ContactCTA(){return <section className="contact-cta"><div><span className="eyebrow">YOUR MESSAGE. OUR STAGE.</span><h2>Have a Message People Need to Hear?</h2><p>Letâ€™s turn it into a performance that informs, engages and stays with the audience.</p><div className="button-row"><ButtonLink light>Get a Quote</ButtonLink><a className="text-link" href={contact.phoneHref}>Call {contact.phone}<ArrowUpRight/></a></div></div></section>}

export function Gallery({full=false}){const cats=['All','CSR Activities','Roadshows','Social Awareness','Rural Marketing','Theatre']; const [cat,setCat]=useState('All'); const [light,setLight]=useState(null); const items=Array.from({length:full?10:6},(_,i)=>({cat:cats[(i%5)+1],img:i%3===1?'/images/street-theatre-rehearsal-delhi.webp':'/images/nukkad-natak-delhi-performance.webp',cap:['Live street theatre performance','Rehearsal and ensemble preparation','Audience-focused public outreach'][i%3]})); const shown=cat==='All'?items:items.filter(x=>x.cat===cat)
  useEffect(()=>{const key=e=>{if(light===null)return;if(e.key==='Escape')setLight(null);if(e.key==='ArrowRight')setLight((light+1)%shown.length);if(e.key==='ArrowLeft')setLight((light-1+shown.length)%shown.length)};addEventListener('keydown',key);return()=>removeEventListener('keydown',key)},[light,shown.length])
  return <><div className="filters" role="group" aria-label="Filter campaign archive">{cats.map(c=><button className={c===cat?'active':''} onClick={()=>{setCat(c);setLight(null)}} key={c}>{c}</button>)}</div><div className="gallery">{shown.map((x,i)=><button className={`gallery__item gallery__item--${i%4}`} key={`${x.cat}-${i}`} onClick={()=>setLight(i)}><img loading="lazy" width="1600" height="1000" src={x.img} alt={`${x.cap} in Delhi, India`}/><span>{x.cat}<strong>{x.cap}</strong></span></button>)}</div>{light!==null&&<div className="lightbox" role="dialog" aria-modal="true" aria-label="Campaign image viewer"><button className="lightbox__close" onClick={()=>setLight(null)} aria-label="Close"><X/></button><button onClick={()=>setLight((light-1+shown.length)%shown.length)} aria-label="Previous"><ChevronLeft/></button><figure><img src={shown[light].img} alt={shown[light].cap}/><figcaption>{shown[light].cap} Â· {shown[light].cat}</figcaption></figure><button onClick={()=>setLight((light+1)%shown.length)} aria-label="Next"><ChevronRight/></button></div>}</>}

