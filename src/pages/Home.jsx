import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { SEO, ButtonLink, SectionTitle, Accordion, ContactCTA, Gallery } from '../components/Site'
import { services, process, topics, faqs, contact } from '../data/siteData'

export default function Home(){
  const hero=useRef(); const impact=useRef()
  useEffect(()=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return; const ctx=gsap.context(()=>{gsap.timeline().from('.hero__word',{y:'110%',stagger:.075,duration:.85,ease:'power4.out'}).from('.hero__intro > *',{y:24,opacity:0,stagger:.1,duration:.55},'-=.3');gsap.to('.hero__bg',{scale:1.08,duration:10,ease:'none'});gsap.from('.impact__second',{scale:.72,opacity:.2,scrollTrigger:{trigger:impact.current,start:'top 75%',end:'bottom 50%',scrub:1}})},hero);return()=>ctx.revert()},[])
  const schema=[{'@context':'https://schema.org','@type':'Organization',name:contact.name,url:'https://www.nukkadnatak.in',telephone:contact.phone,email:contact.email,address:{'@type':'PostalAddress',streetAddress:'First Floor, Aashirwad Complex, Pitampura',addressLocality:'New Delhi',postalCode:'110034',addressCountry:'IN'}},{'@context':'https://schema.org','@type':'FAQPage',mainEntity:faqs.map(([q,a])=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}}))}]
  return <><SEO schema={schema}/>
    <section className="hero" ref={hero}><img className="hero__bg" src="/images/new.png" width="1680" height="940" fetchPriority="high" alt="Nukkad Natak performers engaging a public audience in Delhi"/><div className="hero__shade"/><div className="hero__content"><span className="eyebrow">VOICE · STORY · CHANGE</span><h1 aria-label="nukkadnatak.in The Nukkad Natak Group">{['nukkadnatak.in','The Nukkad Natak Group'].map((x,i)=><span className={i===1?'accent':''} key={x}><i className="hero__word">{x}</i></span>)}</h1><div className="hero__intro"><p>W.I. Events & Promotions creates powerful street theatre, CSR campaigns, roadshows and audience-focused activations across Delhi and India.</p><div className="button-row"><ButtonLink light>Get a Quote</ButtonLink><ButtonLink to="/our-work">Explore Our Work</ButtonLink></div><small>From script development to nationwide on-ground execution.</small></div></div><a href="#impact" className="hero__scroll">SCROLL TO ENTER <ArrowDown/></a></section>

    <section id="impact" className="impact" ref={impact}><p>Some messages are seen.</p><h2 className="impact__second">Powerful messages<br/><em>are experienced.</em></h2></section>

    <section className="intro section"><SectionTitle eyebrow="THE MOST DIRECT STAGE" title="Indiaâ€™s Most Direct Stage Is the Street"/><div className="intro__grid"><div className="intro__image"><img loading="lazy" src="/images/street-theatre-rehearsal-delhi.webp" width="1536" height="1024" alt="Delhi street theatre ensemble rehearsing together"/></div><div className="intro__copy"><p className="lead">Nukkad Natak brings performers, people and a shared message into one immediate, democratic space.</p><p>Our team brings together topic research, scriptwriting, performance, campaign planning and on-ground coordination. The result is live communication that people can see, hear, question and carry forward.</p><ButtonLink to="/about">Discover Our Story</ButtonLink><blockquote>â€œThe audience is not outside the story. They are part of it.â€</blockquote></div></div></section>

    <section className="services-home section section--dark"><SectionTitle dark eyebrow="PERFORMANCE ARCHIVE" title="Ideas, Given a Voice" copy="One creative and production partnerâ€”from the first line of a script to the last location on a campaign route."/><div className="service-list">{services.map((s,i)=><Link to={`/services/${s.slug}`} className="service-row" key={s.slug}><span>{String(i+1).padStart(2,'0')}</span><h3>{s.title}</h3><p>{s.short}</p><ArrowUpRight/></Link>)}</div></section>

    <section className="why section"><SectionTitle eyebrow="WHY NUKKAD NATAK" title="Why Street Theatre Creates Real Engagement"/><div className="stage"><div className="stage__center"><span>LIVE</span><strong>Human<br/>Connection</strong></div>{['Immediate audience participation','Memorable human storytelling','Strong urban & rural reach','Flexible social & brand communication'].map((x,i)=><div className={`stage__point p${i+1}`} key={x}><span>0{i+1}</span>{x}</div>)}</div></section>

    <section className="journey section section--parchment"><SectionTitle eyebrow="CAMPAIGN JOURNEY" title="From Message to Movement"/><div className="timeline">{process.map((x,i)=><div className="timeline__step" key={x}><span>{String(i+1).padStart(2,'0')}</span><h3>{x}</h3><p>{i===0?'We define the objective, audience and context.':i===1?'Research becomes a clear, relevant performance script.':i===2?'The right ensemble finds the rhythm, voice and movement.':i===3?'Locations, logistics and approvals become one operating plan.':i===4?'Performances meet audiences in real public spaces.':'Campaign activity is documented for review and learning.'}</p></div>)}</div></section>

    <section className="topics-preview section"><SectionTitle eyebrow="CAMPAIGN TOPICS" title="Big Subjects. Clear Human Stories." copy="Social and public-interest themes handled with research, sensitivity and language suited to the audience."/><div className="topic-wall">{topics.slice(0,6).map(([g,...xs],i)=><Link key={g} to="/topics" className={`topic-block topic-block--${i}`}><span>0{i+1}</span><h3>{g}</h3><p>{xs.slice(0,2).join(' Â· ')}</p></Link>)}</div><ButtonLink to="/topics">Explore All Topics</ButtonLink></section>

    <section className="work-preview section section--dark"><SectionTitle dark eyebrow="SELECTED WORK" title="A Living Visual Archive" copy="A glimpse of the formats, people and public spaces at the heart of our work."/><Gallery/><div className="center"><ButtonLink light to="/our-work">View Our Work</ButtonLink></div></section>

    <section className="partners section"><p className="eyebrow">WHO WE WORK WITH</p><h2>Campaigns designed for organisations that need their message to reach <em>people</em>â€”not just screens.</h2><div className="partner-list">{['Corporate CSR Teams','Government Departments','Educational Institutions','NGOs & Social Organisations','Marketing Agencies','Consumer Brands','Public Awareness Programmes'].map(x=><span key={x}>{x}</span>)}</div></section>

    <section className="faq section section--parchment"><SectionTitle eyebrow="FREQUENTLY ASKED" title="Planning a Campaign? Start Here."/><Accordion items={faqs}/></section><ContactCTA/>
  </>
}

