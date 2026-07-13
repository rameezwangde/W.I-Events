import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { SEO, PageHero, SectionTitle, ContactCTA } from '../components/Site'
import { services } from '../data/siteData'
export default function Services(){return <><SEO/><PageHero eyebrow="SERVICES" title="Nukkad Natak, CSR Campaign and Roadshow Services in India" copy="Integrated creative, performance and field execution for organisations that need to communicate with real audiences."/><section className="section"><SectionTitle eyebrow="ONE TEAM, END TO END" title="From the First Insight to the Final Performance"/><div className="services-index">{services.map((s,i)=><Link key={s.slug} to={`/services/${s.slug}`}><span>0{i+1}</span><div><h2>{s.title}</h2><p>{s.short}</p><small>{s.applications.join(' · ')}</small></div><ArrowUpRight/></Link>)}</div></section><ContactCTA/></>}
