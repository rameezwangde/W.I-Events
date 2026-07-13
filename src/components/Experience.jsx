import { useEffect, useRef, useState } from 'react'

export default function Experience(){
  const [loading,setLoading]=useState(true)
  const cursor=useRef(null)
  useEffect(()=>{const timer=setTimeout(()=>setLoading(false),1100);return()=>clearTimeout(timer)},[])
  useEffect(()=>{if(!matchMedia('(pointer:fine)').matches||matchMedia('(prefers-reduced-motion: reduce)').matches)return;const move=e=>{if(cursor.current)cursor.current.style.transform=`translate3d(${e.clientX}px,${e.clientY}px,0)`};addEventListener('pointermove',move,{passive:true});return()=>removeEventListener('pointermove',move)},[])
  return <><div className={`opening ${loading?'is-active':''}`} aria-hidden="true"><div><strong>W.I.</strong><span>THE STREET BECOMES THE STAGE</span></div></div><span ref={cursor} className="cursor" aria-hidden="true"/></>
}
