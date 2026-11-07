import { useState, useEffect, useRef } from "react";
import { C, QUALS, JOURNEY } from "./data.js";

const PLANE="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z";
const PHONE="9042709171";
const T={Engineering:{c:"#3B5BDB",bg:"#EAEFFF"},Technician:{c:"#B77900",bg:"#FFF1CC"},"IT & Software":{c:"#0A8F66",bg:"#DFF6EC"},Business:{c:"#D9480F",bg:"#FFE9DC"}};
const TRACKS=["All",...Object.keys(T)];
const Plane=({className=""})=><svg viewBox="0 0 24 24" className={className}><path fill="currentColor" d={PLANE}/></svg>;
const Eyebrow=({children})=><p className="mb-3 flex items-center gap-3 text-xs font-extrabold tracking-[.2em] text-royal"><i className="h-px w-8 bg-royal"/>{children}</p>;

function useReveal(){useEffect(()=>{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll(".rv").forEach(n=>io.observe(n));return()=>io.disconnect()},[])}

function Count({to,suffix=""}){
  const [v,setV]=useState(0),r=useRef();
  useEffect(()=>{const io=new IntersectionObserver(([e])=>{if(!e.isIntersecting)return;io.disconnect();const s=performance.now();const f=t=>{const p=Math.min((t-s)/1300,1);setV(Math.round(to*(1-Math.pow(1-p,3))));p<1&&requestAnimationFrame(f)};requestAnimationFrame(f)});io.observe(r.current);return()=>io.disconnect()},[to]);
  return <span ref={r}>{v}{suffix}</span>;
}

const Logo=({light})=>(
  <a href="#top" className="flex items-center gap-2.5">
    <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink text-gold"><Plane className="h-6 w-6"/></span>
    <span className="leading-none"><span className={`block font-display text-xl font-extrabold ${light?"text-white":"text-ink"}`}>Let'Z Fly</span>
    <span className={`block text-[9px] font-extrabold tracking-[.18em] ${light?"text-gold":"text-royal"}`}>COACHING &amp; SUPPORT</span></span>
  </a>
);

function Nav(){
  const [o,setO]=useState(false);
  const L=[["Programs","programs"],["Pathway","pathway"],["Find your fit","finder"],["FAQ","faq"]];
  return(<>
    <div className="bg-ink px-4 py-2 text-center text-xs font-bold text-white"><span className="text-gold">●</span> Admissions open · Call <a className="underline" href={"tel:"+PHONE}>{PHONE}</a></div>
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3"><Logo/>
        <nav className="hidden items-center gap-8 text-sm font-bold md:flex">{L.map(([n,h])=><a key={h} href={"#"+h} className="hover:text-royal">{n}</a>)}
          <a href="#contact" className="rounded-full bg-gold px-5 py-2.5 hover:brightness-95">Enquire now</a></nav>
        <button aria-label="Menu" onClick={()=>setO(!o)} className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 md:hidden">{o?"✕":"☰"}</button></div>
      {o&&<nav className="grid border-t border-ink/10 bg-paper px-5 py-2 md:hidden">{[...L,["Contact","contact"]].map(([n,h])=><a key={h} href={"#"+h} onClick={()=>setO(false)} className="border-b border-ink/5 py-3 font-bold">{n}</a>)}</nav>}
    </header>
  </>);
}

function Hero(){
  const cards=[["PLC Programmer","Engineering","6%","8%","-4deg",0],["DevOps Engineer","IT & Software","58%","2%","3deg",1],["EV Service Technician","Technician","2%","62%","3deg",2],["Digital Marketing Executive","Business","44%","76%","-3deg",3]];
  return(
    <section id="top" className="relative overflow-hidden">
      <div className="dots absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]"/>
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 lg:grid-cols-[1.1fr_.9fr] lg:pt-20">
        <div>
          <Eyebrow>JOB PLACEMENT SKILL TRAINING ACADEMY · COIMBATORE</Eyebrow>
          <h1 className="font-display text-5xl font-extrabold leading-[1.02] sm:text-7xl">Learn the skill.<br/><em className="font-semibold text-royal">Land the job.</em></h1>
          <p className="mt-6 max-w-lg text-lg text-ink/70">Thirteen hands-on programs across engineering, technician trades, IT and business, each ending in resume work, mock interviews and placement support.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#programs" className="rounded-full bg-ink px-7 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:shadow-xl">Explore programs →</a>
            <a href="#finder" className="rounded-full border-2 border-ink px-7 py-3.5 font-bold hover:bg-ink hover:text-white">Find my course</a></div>
        </div>
        <div className="relative mx-auto h-[420px] w-full max-w-md sm:h-[460px]">
          <div className="absolute inset-4 rounded-[3rem] bg-ink"><Plane className="absolute right-6 top-6 h-40 w-40 text-gold/90 sm:h-48 sm:w-48"/>
            <svg viewBox="0 0 200 200" className="absolute bottom-0 left-0 h-3/5 w-3/5 text-white/20"><path d="M10 190C20 90 90 40 190 20" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 7"/></svg></div>
          {cards.map(([r,s,x,y,rot,i])=>(
            <div key={r} className="float absolute w-44 rounded-2xl bg-white p-3.5 shadow-xl shadow-ink/20" style={{left:x,top:y,"--r":rot,animationDelay:i*.8+"s"}}>
              <span className="text-[10px] font-extrabold tracking-wider" style={{color:T[s].c}}>● {s.toUpperCase()}</span><p className="mt-1 text-sm font-extrabold leading-tight">{r}</p></div>))}
          <div className="absolute -right-1 bottom-2 grid h-28 w-28 place-items-center rounded-full bg-gold">
            <svg viewBox="0 0 120 120" className="spin absolute inset-0"><defs><path id="c" d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1-92 0"/></defs><text fontSize="10.5" fontWeight="800" letterSpacing="2.2" fill="#0B1B33"><textPath href="#c">ISO 9001:2015 · CERTIFIED · QUALITY ·</textPath></text></svg>
            <Plane className="h-7 w-7 text-ink"/></div>
        </div>
      </div>
    </section>
  );
}

function Ticker(){
  const t=[...new Set(C.flatMap(c=>c.tools))];
  return(<div className="overflow-hidden bg-ink py-4 text-white"><div className="marq flex gap-10">{[...t,...t].map((x,i)=><span key={i} className="flex items-center gap-10 whitespace-nowrap font-display text-xl font-semibold">{x}<span className="text-gold">✦</span></span>)}</div></div>);
}

function Stats(){
  const roles=C.reduce((n,c)=>n+c.roles.length,0);
  return(<section className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-16 md:grid-cols-4">
    {[[13,"","Career programs"],[4,"","Learning tracks"],[roles,"","Career roles to aim for"],[100,"%","Placement support"]].map(([n,s,l])=>
      <div key={l} className="rv border-l-2 border-gold pl-5"><div className="font-display text-5xl font-extrabold"><Count to={n} suffix={s}/></div><div className="mt-1 text-sm font-bold text-ink/60">{l}</div></div>)}
  </section>);
}

function Drawer({c,close}){
  useEffect(()=>{const k=e=>e.key==="Escape"&&close();addEventListener("keydown",k);document.body.style.overflow="hidden";return()=>{removeEventListener("keydown",k);document.body.style.overflow=""}},[close]);
  const t=T[c.s],H=({children})=><h4 className="mb-2 mt-6 text-xs font-extrabold tracking-[.18em]" style={{color:t.c}}>{children}</h4>;
  return(
    <div className="fixed inset-0 z-[60] flex justify-end"><div onClick={close} className="fade absolute inset-0 bg-ink/60 backdrop-blur-sm"/>
      <aside className="slide relative h-full w-full max-w-lg overflow-y-auto bg-paper p-7 sm:p-9" role="dialog" aria-label={c.t}>
        <button onClick={close} aria-label="Close" className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-ink text-white">✕</button>
        <span className="rounded-full px-3 py-1 text-xs font-extrabold" style={{background:t.bg,color:t.c}}>{c.s} · Program {c.id}</span>
        <h3 className="mt-4 pr-10 font-display text-4xl font-extrabold leading-tight">{c.t}</h3>
        <p className="mt-1 font-display text-lg italic" style={{color:t.c}}>{c.tag}</p><p className="mt-3 text-ink/70">{c.d}</p>
        <H>WHAT YOU WILL LEARN</H><ul className="space-y-2">{c.l.map(x=><li key={x} className="flex gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full" style={{background:t.c}}/>{x}</li>)}</ul>
        <H>TOOLS &amp; PLATFORMS</H><div className="flex flex-wrap gap-2">{c.tools.map(x=><span key={x} className="rounded-full border border-ink/15 px-3 py-1 text-sm font-bold">{x}</span>)}</div>
        <H>CAREER ROLES</H><div className="grid gap-2 sm:grid-cols-2">{c.roles.map(x=><div key={x} className="rounded-xl p-3 text-sm font-extrabold" style={{background:t.bg}}>{x}</div>)}</div>
        <H>WHO CAN JOIN</H><p className="text-ink/70">{c.who}</p>
        <a href="#contact" onClick={close} className="mt-8 block rounded-full bg-ink py-4 text-center font-bold text-white hover:bg-royal">Enquire about this program</a>
      </aside></div>
  );
}

function Programs({open}){
  const [tr,setTr]=useState("All"),[q,setQ]=useState("");
  const list=C.filter(c=>(tr==="All"||c.s===tr)&&(c.t+c.roles.join()+c.tools.join()).toLowerCase().includes(q.toLowerCase()));
  return(
    <section id="programs" className="mx-auto max-w-6xl px-5 py-20">
      <div className="rv"><Eyebrow>PROGRAMS</Eyebrow><h2 className="max-w-2xl font-display text-4xl font-extrabold sm:text-6xl">Choose a track. <em className="font-semibold text-royal">Build a career.</em></h2></div>
      <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">{TRACKS.map(s=><button key={s} onClick={()=>setTr(s)} className={`rounded-full px-5 py-2 text-sm font-bold ${tr===s?"bg-ink text-white":"border border-ink/15 hover:bg-ink/5"}`}>{s}</button>)}</div>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search a skill, tool or role…" className="w-full rounded-full border border-ink/15 bg-white px-5 py-2.5 text-sm outline-none focus:border-royal md:w-72"/>
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map(c=>{const t=T[c.s];return(
          <button key={c.id} onClick={()=>open(c)} className="group relative overflow-hidden rounded-3xl p-6 text-left transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-ink/15" style={{background:t.bg}}>
            <span className="absolute -right-2 -top-4 font-display text-8xl font-extrabold opacity-[.12]" style={{color:t.c}}>{c.id}</span>
            <span className="text-[11px] font-extrabold tracking-wider" style={{color:t.c}}>{c.s.toUpperCase()}</span>
            <h3 className="mt-3 pr-6 font-display text-2xl font-extrabold leading-tight">{c.t}</h3>
            <p className="mt-2 text-sm text-ink/65">{c.tag}</p>
            <div className="mt-5 flex flex-wrap gap-1.5">{c.roles.slice(0,2).map(r=><span key={r} className="rounded-full bg-white/80 px-2.5 py-1 text-xs font-bold">{r}</span>)}</div>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold">View details <i className="not-italic transition group-hover:translate-x-1.5">→</i></span>
          </button>)})}
        {!list.length&&<p className="col-span-full py-10 text-center text-ink/60">No match yet. Try another word, or call us on {PHONE}.</p>}
      </div>
    </section>
  );
}

function Pathway(){
  return(
    <section id="pathway" className="bg-ink py-20 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-5">
        <div className="rv lg:sticky lg:top-28 lg:col-span-2 lg:self-start"><Eyebrow>YOUR PATH TO PLACEMENT</Eyebrow>
          <h2 className="font-display text-4xl font-extrabold sm:text-6xl">Four steps from <em className="font-semibold text-gold">learner</em> to hired.</h2>
          <p className="mt-5 text-white/65">Every program follows the same proven route, with a mentor beside you at each stage.</p></div>
        <div className="lg:col-span-3">{JOURNEY.map(([a,b,c],i)=>(
          <div key={a} className="rv group grid grid-cols-[80px_1fr] gap-4 border-t border-white/15 py-8 transition hover:bg-white/5 sm:grid-cols-[110px_1fr]">
            <span className="font-display text-6xl font-extrabold text-gold sm:text-7xl">0{i+1}</span>
            <div><p className="text-xs font-extrabold tracking-[.2em] text-white/50">{a.toUpperCase()}</p><h3 className="font-display text-3xl font-extrabold">{b}</h3><p className="mt-2 text-white/65">{c}</p></div></div>))}</div>
      </div>
    </section>
  );
}

function Finder({open}){
  const [q,setQ]=useState("dip"),m=C.filter(c=>c.q.includes(q));
  return(
    <section id="finder" className="mx-auto max-w-6xl px-5 py-20">
      <div className="rv rounded-[2.5rem] bg-gold p-6 sm:p-12">
        <Eyebrow>FIND YOUR FIT</Eyebrow><h2 className="max-w-2xl font-display text-4xl font-extrabold sm:text-5xl">What have you studied so far?</h2>
        <div className="mt-7 inline-flex max-w-full flex-wrap gap-1.5 rounded-3xl bg-ink/10 p-1.5">{QUALS.map(([k,n])=><button key={k} onClick={()=>setQ(k)} className={`rounded-full px-4 py-2 text-sm font-bold ${q===k?"bg-ink text-white":"hover:bg-white/40"}`}>{n}</button>)}</div>
        <p className="mt-7 text-sm font-extrabold">{m.length} programs you can join</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{m.map(c=>(
          <button key={c.id} onClick={()=>open(c)} className="flex items-center gap-3 rounded-2xl bg-white p-4 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <span className="h-10 w-1.5 rounded-full" style={{background:T[c.s].c}}/><span><b className="block text-sm leading-tight">{c.t}</b><span className="text-xs text-ink/55">{c.s}</span></span></button>))}</div>
      </div>
    </section>
  );
}

const FAQ=[["Do I need prior experience?","Not for every program. Web Development and Digital Marketing welcome beginners, and each program page lists exactly who can join."],["Can I join after 10th or 12th?","Yes. Automobile Technician Training accepts 10th / 12th pass, and Multi-Skill Technician Training accepts 8th / 10th pass, ITI or Diploma holders."],["What help do I get after training?","Resume and LinkedIn building, mock interviews and placement support, with personalised mentorship throughout."],["Is the academy certified?","Yes. Let'Z Fly is ISO 9001:2015 certified for its quality management system (Cert. No. 22800552652QM, certified by DGACERT)."],["How do I enrol?","Call 9042709171, email support@letzfly.net or send the enquiry form below and our team will reach out."]];
function Faq(){
  const [o,setO]=useState(0);
  return(
    <section id="faq" className="mx-auto grid max-w-6xl gap-10 px-5 pb-20 lg:grid-cols-5">
      <div className="rv lg:col-span-2"><Eyebrow>GOOD TO KNOW</Eyebrow><h2 className="font-display text-4xl font-extrabold sm:text-5xl">Questions, answered.</h2></div>
      <div className="lg:col-span-3">{FAQ.map(([a,b],i)=>(
        <div key={a} className="border-b border-ink/15"><button onClick={()=>setO(o===i?-1:i)} className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-xl font-extrabold">{a}<span className={`text-2xl text-royal transition ${o===i?"rotate-45":""}`}>+</span></button>
          <div className={`grid transition-all duration-300 ${o===i?"grid-rows-[1fr] pb-5":"grid-rows-[0fr]"}`}><p className="overflow-hidden text-ink/70">{b}</p></div></div>))}</div>
    </section>
  );
}

function Contact(){
  const [f,setF]=useState({name:"",phone:"",course:C[0].t});
  const go=e=>{e.preventDefault();location.href=`mailto:support@letzfly.net?subject=${encodeURIComponent("Admission enquiry: "+f.course)}&body=${encodeURIComponent(`Name: ${f.name}\nPhone: ${f.phone}\nProgram: ${f.course}`)}`};
  const i="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3.5 text-white outline-none placeholder:text-white/50 focus:border-gold";
  return(
    <section id="contact" className="bg-royal text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-2">
        <div className="rv"><p className="mb-3 text-xs font-extrabold tracking-[.2em] text-gold">LAST CALL FOR ADMISSIONS</p>
          <h2 className="font-display text-5xl font-extrabold leading-tight sm:text-6xl">Ready for take-off?</h2>
          <div className="mt-8 space-y-4 text-white/85">
            <p><b className="block text-xs tracking-widest text-gold">CALL</b><a className="text-2xl font-extrabold" href={"tel:"+PHONE}>{PHONE}</a></p>
            <p><b className="block text-xs tracking-widest text-gold">EMAIL</b>support@letzfly.net</p>
            <p><b className="block text-xs tracking-widest text-gold">INSTAGRAM</b>Let_zfly</p>
            <p><b className="block text-xs tracking-widest text-gold">CAMPUS</b>No.4/422-34, Saravana Nagar, Chinnamathampalayam, Bilichi, Coimbatore North - 641019</p></div></div>
        <form onSubmit={go} className="rv space-y-4 self-start rounded-3xl bg-ink p-7">
          <h3 className="font-display text-2xl font-extrabold">Request a call back</h3>
          <input required className={i} placeholder="Your name" value={f.name} onChange={e=>setF({...f,name:e.target.value})}/>
          <input required type="tel" className={i} placeholder="Phone number" value={f.phone} onChange={e=>setF({...f,phone:e.target.value})}/>
          <select className={i+" [&>option]:text-ink"} value={f.course} onChange={e=>setF({...f,course:e.target.value})}>{C.map(c=><option key={c.id}>{c.t}</option>)}</select>
          <button className="w-full rounded-full bg-gold py-4 font-extrabold text-ink hover:brightness-95">Send enquiry →</button></form>
      </div>
      <div className="border-t border-white/15 py-6"><div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-white/70 sm:flex-row"><Logo light/><p>© {new Date().getFullYear()} Let'Z Fly Coaching &amp; Support · ISO 9001:2015 certified</p></div></div>
    </section>
  );
}

export default function App(){
  const [sel,setSel]=useState(null);
  useReveal();
  return(<><Nav/><Hero/><Ticker/><Stats/><Programs open={setSel}/><Pathway/><Finder open={setSel}/><Faq/><Contact/>{sel&&<Drawer c={sel} close={()=>setSel(null)}/>}</>);
}
