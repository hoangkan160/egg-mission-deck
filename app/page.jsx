"use client";

import { useEffect, useState } from "react";

const values = [
  {id:"dudu-siba-sticker",title:"DUDU × SIBA",product:"Sticker Pack #01",state:"ACCEPTED",evidence:["12 assets complete","Visual QA passed","Market-ready package"],acceptance:"PASSED",authority:"NONE",money:"—",next:"Market test"},
  {id:"dudu-siba-story",title:"DUDU × SIBA",product:"Micro Story Engine",state:"TESTING",evidence:["Story formula locked","5 prototypes","Character consistency checked"],acceptance:"IN PROGRESS",authority:"NONE",money:"—",next:"Publish test batch"},
  {id:"ip-bible",title:"DUDU × SIBA",product:"Character Bible",state:"ACCEPTED",evidence:["DUDU identity locked","Siba identity locked","Relationship defined"],acceptance:"PASSED",authority:"NONE",money:"—",next:"Feed Asset Factory"}
];
const metrics=[["VALUE OBJECTS","03"],["ACCEPTED","02"],["TESTING","01"],["AUTHORITY","00"]];

export default function Home(){
 const [selected,setSelected]=useState(values[0]);
 const [showEvidence,setShowEvidence]=useState(true);
 const [installed,setInstalled]=useState(false);
 useEffect(()=>{if("serviceWorker" in navigator) navigator.serviceWorker.register("/sw.js").catch(()=>{});},[]);
 const status=selected.authority==="NONE"?"NO FOUNDER ACTION REQUIRED":"FOUNDER AUTHORITY REQUIRED";
 return <main className="cockpit">
  <header className="topbar">
   <div><div className="eyebrow"><span className="pulse"/> EGG / FOUNDER COCKPIT</div><h1>ĐÂU A <em>SOI 2</em></h1><p>VALUE OBSERVATORY · v0.1</p></div>
   <div className="top-actions"><div className="live"><span/> LIVE</div><button className="install" onClick={()=>setInstalled(true)}>{installed?"PWA READY":"ADD TO PHONE"}</button></div>
  </header>
  <section className="attention"><span className="eyebrow">FOUNDER ATTENTION</span><strong>{status}</strong><small>Execution remains behind the cockpit.</small></section>
  <section className="metrics">{metrics.map(([label,value])=><div className="metric" key={label}><span>{label}</span><b>{value}</b></div>)}</section>
  <section className="value-grid">
   <div className="value-list"><div className="section-title"><span>VALUE OBJECTS</span><small>{values.length} tracked</small></div>
    {values.map(v=><button className={selected.id===v.id?"value-card active":"value-card"} key={v.id} onClick={()=>setSelected(v)}>
      <div className="card-head"><span className="state">{v.state}</span><span>↗</span></div><h2>{v.title}</h2><p>{v.product}</p>
      <div className="mini-flow"><span>VALUE</span><i>→</i><span>EVIDENCE</span><i>→</i><span>ACCEPTANCE</span></div>
    </button>)}
   </div>
   <article className="detail">
    <div className="detail-head"><div><span className="eyebrow">VALUE OBJECT</span><h2>{selected.title}</h2><p>{selected.product}</p></div><div className="accepted">{selected.acceptance}</div></div>
    <div className="chain">
     {[["01","VALUE",selected.product,true],["02","EVIDENCE",selected.evidence.length+" verified signals",true],["03","ACCEPTANCE",selected.acceptance,selected.acceptance==="PASSED"],["04","FOUNDER AUTHORITY",selected.authority,selected.authority==="NONE"]].map(([n,label,text,ok])=><div className={ok?"chain-node ok":"chain-node"} key={label}><span className="num">{n}</span><div><b>{label}</b><p>{text}</p></div><strong>{ok?"✓":"!"}</strong></div>)}
    </div>
    <button className="evidence-toggle" onClick={()=>setShowEvidence(!showEvidence)}>EVIDENCE {showEvidence?"−":"+"}</button>
    {showEvidence&&<div className="evidence-list">{selected.evidence.map(item=><div key={item}><span>✓</span><p>{item}</p><small>VERIFIED</small></div>)}</div>}
    <div className="value-footer"><div><span>NEXT VALUE</span><b>{selected.next}</b></div><div><span>MONEY</span><b>{selected.money}</b></div></div>
   </article>
  </section>
  <section className="principle"><span>BIỆT ĐỘI</span><b>PROCESS</b><i>→</i><span>EGG</span><b>EVIDENCE</b><i>→</i><span>FOUNDER</span><b>VALUE</b></section>
  <footer><span>ĐÂU A SOI 2 · FOUNDER COCKPIT</span><span>VALUE OBJECT → EVIDENCE → ACCEPTANCE → AUTHORITY</span></footer>
 </main>
}