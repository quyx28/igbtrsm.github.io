import React, { useEffect, useState } from 'react';
import {
  ArrowRight, ArrowUpRight, Check, Copy, ExternalLink, Image as ImageIcon,
  ChevronLeft, ChevronRight, Mail, Menu, Phone, Search, ShieldCheck, Sprout, Tent, Users, X
} from 'lucide-react';
import heroImage from './assets/images/hero.jpg';
import guidelinesImage from './assets/images/section3.jpg';
import napulakImage from './assets/images/napulak/napu.jpg';
import igatmonImage from './assets/images/igatmon/igat.jpg';
import salagyawanImage from './assets/images/salag/salag.jpg';
import batoImage from './assets/images/bato/bato (3).jpg';
import guiritsanImage from './assets/images/guiritsan/guirit.jpg';
import butuanImage from './assets/images/butuan/butuan.jpg';
import nadsadjanImage from './assets/images/nadsajan/nads.jpg';
import logoFinalImage from './assets/logo final.jpeg';
import sheanProfileImage from './assets/Profile2.jpeg';
import charisseProfileImage from './assets/Profile.jpeg';

const photoModules = import.meta.glob('./assets/images/**/*.jpg', { eager: true, query: '?url', import: 'default' });
const getGallery = (folder) => Object.entries(photoModules)
  .filter(([path]) => path.includes(`/images/${folder}/`))
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, url]) => url);

const featured = [
  { id: 'napulak', name: 'Mt. Napulak', type: 'Mountains', barangay: 'Brgy. Tigbanaba', elevation: '1,239 MASL', fee: 'Day ₱1,000 · Overnight ₱1,500', image: napulakImage, gallery: getGallery('napulak'), tagline: 'Iconic rock peak and sweeping sea of clouds.', porter: '₱700/10kgs (Day) · ₱1,000/kgs (Overnight)' },
  { id: 'igatmon', name: 'Mt. Igatmon', type: 'Mountains', barangay: 'Brgy. Tigbanaba', elevation: '1,120 MASL', fee: 'Day ₱1,000 · Overnight ₱1,500', image: igatmonImage, gallery: getGallery('igatmon'), tagline: 'Scenic grassland ridges and panoramic highland views.', porter: '₱1,000/10kgs (Day) · ₱1,500/kgs (Overnight)' },
  { id: 'salagyawan', name: 'Mt. Salagyawan (Saligyawan)', type: 'Mountains', barangay: 'Brgy. Igcabugao', elevation: 'Approx. 1,250+ MASL', fee: 'Day ₱800', image: salagyawanImage, gallery: getGallery('salag'), tagline: 'Lush green valleys and dramatic mountain silhouettes.' },
  { id: 'bato', name: 'Mt. Bato Igmatindog', type: 'Mountains', barangay: 'Brgy. Igcabugao', elevation: 'Ridge Peak', fee: 'Day ₱500 · Overnight ₱1,000', image: batoImage, gallery: getGallery('bato'), tagline: 'Striking knife-edge summit trail in Brgy. Igcabugao.' },
  { id: 'guiritsan', name: 'Guiritsan Falls', type: 'Waterfalls', barangay: 'Brgy. Igcabugao', elevation: 'Day Tour 6:00 AM – 5:00 PM', fee: 'Day ₱300 · Overnight ₱1,500', image: guiritsanImage, gallery: getGallery('guiritsan'), tagline: 'Emerald natural basin framed by rolling green hills.' },
  { id: 'butuan', name: 'Butuan Falls', type: 'Waterfalls', barangay: 'Brgy. Igcabugao', elevation: 'Forest Waterfall', fee: 'Day ₱500', image: butuanImage, gallery: getGallery('butuan'), tagline: 'Towering cascade tucked deep inside the forest canopy.' },
  { id: 'nadsadjan', name: 'Nadsadjan Falls', type: 'Waterfalls', barangay: 'Brgy. Passi', elevation: 'Iconic Waterfall', fee: 'Day ₱350 · Overnight ₱500', image: nadsadjanImage, gallery: getGallery('nadsajan'), tagline: 'Dramatic rock canyon and refreshing mountain waters.' },
];

const trailDirectories = [
  {
    title: 'Barangay Passi · Ordinance No. 02-20',
    items: [
      ['Nadsadjan Falls', '₱350 Day | ₱500 Overnight'], ['Kipot Falls', '₱500 Day'],
      ['Lagsakan Falls', '₱700 Day | ₱1,000 Overnight'], ['Mount Opao', '₱1,500 Day | ₱2,000 Overnight'],
      ['Mount Pulang Lupa', '₱1,500 Day | ₱2,000 Overnight'], ['Kulapnitan Cave', '₱500 Day'],
      ['Matong Cave', '₱2,000 Day | ₱2,500 Overnight'], ['Bais Cave', '₱600 Day | ₱1,000 Overnight'],
      ['Tangyan Dam', '₱250 Day | ₱500 Overnight'], ['Linaw Simon', '₱250 Day | ₱500 Overnight']
    ]
  },
  {
    title: 'Barangay Igcabugao · Ordinance No. 3',
    items: [
      ['Mount Taripis', '₱750 Day | ₱1,500 Overnight'], ['Mount Luboc', '₱700 Day | ₱1,500 Overnight'],
      ['Mount Danao', '₱800 Day'], ['Mount Ningwan', '₱800 Day'], ['Mount Tig-Atay', '₱1,000 Day'],
      ['Mount Tambara', '₱800 Day'], ['Mount Butuan', '₱750 Day'], ['Mount Kurunawan', '₱1,200 Day'],
      ['Mount Andakon', '₱1,200 Day'], ['Guiritsan, Miagos & Sariri Falls Trio', '₱1,000 Day | ₱1,500 Overnight'],
      ['Iglibog Falls', '₱500 Day'], ['Ayo Falls', '₱1,000 Day'], ['Matong North', '₱500 Day'],
      ['Linaw Kawayan', '₱1,000 Day'], ['Kweba Nabaw Cave', '₱500 Day']
    ]
  }
];
const contacts = [
  { name: 'Shean Alfred Edquila', phone: '09086593883', email: 'sedquila@usa.edu.ph', facebook: 'https://www.facebook.com/share/1CMtXcQ1hF/', image: sheanProfileImage },
  { name: 'Charisse Ann Petaño', phone: '09669959861', email: 'cpetano@usa.edu.ph', facebook: 'https://www.facebook.com/share/1Cc3vZCGXf/', image: charisseProfileImage }
];
function SafeImage({ src, alt, className = '', children, fallbackLabel }) {
  const [failed, setFailed] = useState(!src);
  useEffect(() => setFailed(!src), [src]);
  return failed ? (
    <div className={`flex flex-col items-center justify-center bg-[#9AAA90] text-[#344638] text-center ${className}`}>
      <ImageIcon className="mb-3 h-7 w-7 opacity-70" />
      <span className="text-[10px] font-bold uppercase tracking-[.18em]">{fallbackLabel || alt}</span>
      <span className="mt-1 text-[10px] opacity-65">Image arriving soon</span>
      {children}
    </div>
  ) : <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />;
}

function SectionKicker({ number, title }) {
  return <div className="mb-3 text-[11px] font-bold uppercase tracking-[.18em] text-[#4B6B50]">{number} / {title}</div>;
}

function ContactCard({ person }) {
  const [copied, setCopied] = useState('');
  const copy = async (value, type) => {
    try { await navigator.clipboard.writeText(value); setCopied(type); setTimeout(() => setCopied(''), 1600); } catch { setCopied(''); }
  };
  return (
    <article className="rounded-3xl border border-[#DCE4D8] bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3"><img src={person.image} alt="" className="h-12 w-12 rounded-full object-cover object-top ring-2 ring-[#E6EFE2]" /><div><p className="text-lg font-bold">{person.name}</p><p className="mt-1 text-xs text-[#667268]">BSBA MM - 3B</p></div></div>
        <a href={person.facebook} target="_blank" rel="noreferrer" aria-label={`Facebook of ${person.name}`} className="rounded-full bg-[#EFF3EC] p-3 text-[#2D5A36] hover:bg-[#E2EADF]"><ExternalLink className="h-4 w-4" /></a>
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-2 rounded-2xl bg-[#F7F8F4] p-3"><span className="min-w-0 flex-1 text-sm font-semibold">{person.phone}</span><a href={`tel:${person.phone}`} className="rounded-full bg-[#2D5A36] p-2.5 text-white" aria-label={`Call ${person.name}`}><Phone className="h-4 w-4" /></a><button onClick={() => copy(person.phone, 'phone')} className="rounded-full border border-[#DCE4D8] p-2.5" aria-label="Copy phone">{copied === 'phone' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}</button></div>
        <div className="flex items-center gap-2 rounded-2xl bg-[#F7F8F4] p-3"><Mail className="h-4 w-4 shrink-0 text-[#D97757]" /><span className="min-w-0 flex-1 truncate text-sm font-semibold">{person.email}</span><button onClick={() => copy(person.email, 'email')} className="rounded-full border border-[#DCE4D8] p-2.5" aria-label="Copy email">{copied === 'email' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}</button></div>
        <a href={`mailto:${person.email}?subject=Igbaras%20Eco-Tourism%20Inquiry`} className="flex w-full items-center justify-center gap-2 rounded-full bg-[#D97757] px-4 py-3 text-sm font-bold text-white"><Mail className="h-4 w-4" /> Send an Email <ArrowUpRight className="h-4 w-4" /></a>
      </div>
    </article>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const filtered = featured.filter((spot) => filter === 'All' || spot.type === filter);
  const query = search.trim().toLowerCase();
  const filteredDirectories = trailDirectories.map((directory) => ({
    ...directory,
    items: directory.items.filter(([name]) => name.toLowerCase().includes(query))
  }));

  useEffect(() => {
    setGalleryIndex(0);
    document.body.style.overflow = selected ? 'hidden' : '';
    const handleKeys = (event) => {
      if (!selected) return;
      if (event.key === 'Escape') setSelected(null);
      if (selected.gallery?.length > 1 && event.key === 'ArrowLeft') setGalleryIndex((index) => (index - 1 + selected.gallery.length) % selected.gallery.length);
      if (selected.gallery?.length > 1 && event.key === 'ArrowRight') setGalleryIndex((index) => (index + 1) % selected.gallery.length);
    };
    window.addEventListener('keydown', handleKeys);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', handleKeys); };
  }, [selected]);

  const nav = [['Destinations', 'destinations'], ['More Trails', 'more-trails'], ['Rates', 'rates'], ['Guidelines', 'guidelines'], ['About Us', 'about'], ['Contact', 'contact']];
  const scroll = (id) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };

  return <div className="min-h-screen bg-[#F6F7F2] text-[#1A281E] selection:bg-[#2D5A36] selection:text-white [&_button]:cursor-pointer [&_button]:transition-all [&_button]:duration-200 [&_a]:cursor-pointer [&_a]:transition-all [&_a]:duration-200">
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-[#DCE4D8] bg-white/95 px-4 py-2 shadow-lg shadow-[#1A281E]/5 backdrop-blur md:px-5">
        <button onClick={() => scroll('top')} className="flex items-center gap-2 text-left"><img src={logoFinalImage} alt="Lakbay Igbaras" className="w-10 h-10 rounded-full object-cover border border-[#D5E2CF]" /><strong className="block text-xs tracking-tight">Lakbay Igbaras</strong></button>
        <nav className="hidden items-center gap-6 text-xs font-semibold md:flex">{nav.map(([label, id]) => <button key={id} onClick={() => scroll(id)} className="transition hover:text-[#D97757]">{label}</button>)}</nav>
        <button onClick={() => scroll('contact')} className="hidden rounded-full bg-[#2D5A36] px-5 py-2.5 text-xs font-bold text-white md:block">Inquire Now</button>
        <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-full border border-[#DCE4D8] p-2 md:hidden" aria-label="Toggle navigation">{menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
      </div>
      {menuOpen && <nav className="mx-auto mt-2 max-w-6xl rounded-3xl border border-[#DCE4D8] bg-white p-4 shadow-xl md:hidden">{nav.map(([label, id]) => <button key={id} onClick={() => scroll(id)} className="block w-full rounded-xl px-4 py-3 text-left text-sm font-semibold hover:bg-[#EFF3EC]">{label}</button>)}<button onClick={() => scroll('contact')} className="mt-2 w-full rounded-full bg-[#D97757] py-3 text-sm font-bold text-white">Inquire Now</button></nav>}
    </header>

    <main>
      <section id="top" className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6">
        <div className="relative min-h-[610px] overflow-hidden rounded-3xl text-white md:min-h-[640px]">
          <SafeImage src={heroImage} alt="Igbaras landscape" className="absolute inset-0 h-full w-full object-cover" fallbackLabel="IGBARAS · LANDSCAPE" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#132017]/45 via-[#132017]/55 to-[#132017]/90" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pb-16 text-center text-[#FFFDF7] [text-shadow:0_2px_18px_rgba(0,0,0,0.8)]">
            <span className="mb-6 rounded-full border border-white/40 bg-[#18261B]/70 px-4 py-2 text-[10px] font-bold tracking-[.22em] text-white backdrop-blur-sm">ILOILO · PHILIPPINES</span>
            <h1 className="text-5xl font-black tracking-[.08em] text-white sm:text-7xl md:text-8xl">IGBARAS</h1>
            <p className="mt-3 font-serif text-xl italic text-[#F4F7E9] sm:text-3xl">Agto 'Dya Sa Igbaras!</p>
            <p className="mt-1 font-serif text-lg italic text-[#FFFDF7] sm:text-xl">A little closer to the wild.</p>
            <p className="mt-6 max-w-xl text-sm font-medium leading-7 text-white">From forested peaks and hidden waterfalls to living highland communities, discover the natural heart of southern Iloilo.</p>
          </div>
        </div>
        <div className="relative z-10 mx-auto -mt-14 grid max-w-5xl gap-px overflow-hidden rounded-3xl border border-[#D5E2CF] bg-[#D5E2CF] p-0 shadow-xl md:grid-cols-3">
          {[['Tigbanaba · Igcabugao · Passi','Multi-Barangay Eco-Trails'],['7 Featured Spots + 25 More Trails','Peaks, waterfalls, rivers & caves'],['₱25 Municipal Visitor Fee','Municipal Ordinance 2014-04']].map(([title,sub], i) => <div key={title} className="min-h-28 bg-white p-5 md:p-6"><span className="mb-3 block text-[10px] font-bold text-[#2D5A36]">0{i+1}</span><p className="font-bold">{title}</p><p className="mt-1 text-xs text-[#657166]">{sub}</p></div>)}
        </div>
      </section>

      <section id="destinations" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionKicker number="01" title="The Destination Directory" />
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><h2 className="text-3xl font-bold sm:text-5xl">Choose your <em className="font-serif font-normal text-[#386641]">way out.</em></h2><p className="mt-3 max-w-xl text-sm leading-6 text-[#637065]">Seven featured destinations, official fees, and practical details for your next Igbaras adventure.</p></div>
          <div className="flex flex-wrap gap-2">{[['All','All (7)'],['Mountains','Mountains (4)'],['Waterfalls','Waterfalls (3)']].map(([value,label]) => <button key={value} onClick={() => setFilter(value)} className={`rounded-full px-4 py-2 text-xs font-bold ${filter === value ? 'bg-[#2D5A36] text-white' : 'border border-[#D5E2CF] bg-white text-[#526054]'}`}>{label}</button>)}</div></div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{filtered.map((spot) => <article key={spot.id} className="group relative h-[420px] cursor-pointer overflow-hidden rounded-3xl bg-[#9AAA90] transition duration-300 hover:-translate-y-1">
          <SafeImage src={spot.image} alt={spot.name} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" fallbackLabel={spot.name} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#152419]/95 via-[#152419]/20 to-transparent" />
          <span className="absolute right-4 top-4 max-w-[190px] rounded-full bg-white/95 px-3 py-2 text-right text-[10px] font-bold text-[#1A281E] shadow-sm">{spot.fee}</span>
          <div className="absolute inset-x-0 bottom-0 p-5 text-white"><p className="text-[10px] font-bold uppercase tracking-widest text-white/75">{spot.barangay}</p><h3 className="mt-1 text-2xl font-bold">{spot.name}</h3><p className="mt-2 font-serif text-sm italic text-white/90">{spot.tagline}</p><div className="mt-4 flex items-center justify-between gap-2"><span className="rounded-full bg-black/25 px-3 py-1.5 text-[10px] backdrop-blur">{spot.elevation}</span><button onClick={() => setSelected(spot)} className="flex rounded-full bg-white px-3 py-2 text-[11px] font-bold text-[#1A281E]">View Details <ArrowUpRight className="ml-1 h-3.5 w-3.5" /></button></div></div>
        </article>)}</div>
        <div id="more-trails" className="mt-16 rounded-3xl bg-[#E6EFE2] p-5 sm:p-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><SectionKicker number="" title="More Trails" /><h2 className="text-2xl font-bold sm:text-3xl">Explore More Trails</h2></div><label className="flex min-w-[260px] items-center gap-2 rounded-full border border-[#D5E2CF] bg-white px-4 py-3"><Search className="h-4 w-4 text-[#647166]" /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search trail name" className="w-full bg-transparent text-sm outline-none" /></label></div>
          <div className="mt-7 grid gap-7 md:grid-cols-2">{filteredDirectories.map((directory) => <TrailList key={directory.title} title={directory.title} items={directory.items} />)}</div>
        </div>
      </section>

      <section id="rates" className="border-y border-[#E0E7DC] bg-[#EFF3EC] px-4 py-20 sm:px-6"><div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12"><div className="lg:col-span-5"><SectionKicker number="02" title="Know Before You Go" /><h2 className="text-3xl font-bold sm:text-5xl">Official rates, made <em className="font-serif font-normal text-[#386641]">clear.</em></h2><p className="mt-6 text-sm leading-7 text-[#566258]">Plan with the requirements established under <strong>Municipal Ordinance 2014-04</strong> and <strong>Barangay Ordinance No. 3</strong>. Confirm trail access and rates directly with the local registration area before traveling.</p><div className="mt-8 grid grid-cols-3 gap-2">{[['07','Featured'],['3','Barangays'],['₱25','Visitor Fee']].map(([v,l]) => <div key={l} className="rounded-3xl bg-white p-4 text-center"><strong className="block text-xl text-[#2D5A36]">{v}</strong><span className="text-[10px] font-bold text-[#667268]">{l}</span></div>)}</div></div>
          <div className="space-y-4 lg:col-span-7"><RateCard icon={ShieldCheck} title="Mandatory Entrance & Environmental Fees" items={[['Visitors Fee (Municipal Ordinance 2014-04)','₱25.00'],['Barangay / Environmental Fee (Resident)','₱10.00'],['Barangay / Environmental Fee (Non-Resident)','₱30.00']]}/><RateCard icon={Users} title="Barangay Tigbanaba Guide & Porter Rates" items={[['Mt. Napulak Guide','₱1,000 (Day) | ₱1,500 (Overnight)'],['Mt. Napulak Porter','₱700/10kgs (Day) | ₱1,000/kgs (Overnight)'],['Mt. Igatmon Guide','₱1,000 (Day) | ₱1,500 (Overnight)'],['Mt. Igatmon Porter','₱1,000/10kgs (Day) | ₱1,500/kgs (Overnight)']]}/><RateCard icon={Tent} title="Barangay Igcabugao Standard Guide Rates" items={[['Mountain Day Tours','₱500 to ₱1,200 (Overnight: ₱1,000 to ₱1,500)'],['Waterfalls & Caves Day Tours','₱300 to ₱1,000 (Overnight: ₱1,500)']]}/></div></div></section>

      <section id="guidelines" className="mx-auto max-w-6xl px-4 py-20 sm:px-6"><div className="grid items-center gap-12 lg:grid-cols-12"><div className="relative lg:col-span-5"><div className="aspect-square overflow-hidden rounded-3xl border-4 border-white shadow-lg"><SafeImage src={guidelinesImage} alt="Forest trail" className="h-full w-full scale-[1.12] object-cover" fallbackLabel="Forest Trail" /></div><div className="absolute -bottom-5 right-2 flex h-28 w-28 flex-col items-center justify-center rounded-full border-4 border-[#F6F7F2] bg-[#2D5A36] text-center text-white shadow-lg"><Sprout className="mb-1 h-5 w-5 text-[#B7D5B0]" /><span className="font-serif text-sm italic">Leave it<br />better.</span></div></div><div className="lg:col-span-7"><SectionKicker number="03" title="Walk With Care" /><h2 className="text-3xl font-bold sm:text-5xl">Small steps. Lasting <em className="font-serif font-normal text-[#386641]">respect.</em></h2><div className="mt-8 divide-y divide-[#DCE4D8]">{[
        ['01','Day Tour Schedule','Strictly 6:00 AM – 5:00 PM only.'],['02','Overnight Coordination','Proper coordination with LGU personnel at the registration area is a must for overnight stays.'],['03','Mandatory Registration','Pay the ₱25 Municipal Visitor Fee and ₱10/₱30 Environmental Fee upon arrival.'],['04','Accredited Local Guides','Follow official Barangay Ordinance No. 3 guide rates and safety ratios.'],['05','Pack In, Pack Out','Leave no trace on peaks, campsites, and waterfall basins.']].map(([n,t,d]) => <div key={n} className="flex gap-4 py-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E6EFE2] text-xs font-bold text-[#386641]">{n}</span><div><h3 className="font-bold">{t}</h3><p className="mt-1 text-sm leading-6 text-[#637065]">{d}</p></div></div>)}</div></div></div>
      <div className="mt-16 rounded-3xl bg-[#E6EFE2] p-6 sm:p-8"><p className="mb-6 text-center text-[10px] font-bold uppercase tracking-[.18em] text-[#4B6B50]">Your next trail in three steps</p><div className="grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">{[['1','Pick Destination'],['2','Check Rates & Rules'],['3','Contact Desk to Inquire']].map(([n,t],i) => <React.Fragment key={n}><div className="flex items-center gap-3 rounded-2xl bg-white p-4"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2D5A36] text-xs font-bold text-white">{n}</span><strong className="text-sm">{t}</strong></div>{i < 2 && <ArrowRight className="mx-auto hidden h-4 w-4 text-[#7D907D] md:block" />}</React.Fragment>)}</div></div></section>

      <section id="about" className="scroll-mt-24 border-y border-[#E0E7DC] bg-[#EFF3EC] px-4 py-20 sm:px-6"><div className="mx-auto max-w-6xl"><SectionKicker number="04" title="About Us" /><h2 className="text-3xl font-bold sm:text-5xl">Meet the minds behind Lakbay Igbaras.</h2><p className="mt-6 max-w-3xl text-sm leading-7 text-[#566258]">We are 3rd year BSBA Marketing Management students at the University of San Agustin. We are passionate about learning, growing, and creating meaningful experiences as we prepare for our future in the business world.</p><div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <article className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DCE4D8] shadow-xs flex flex-col sm:flex-row items-center sm:items-start gap-6"><img src={sheanProfileImage} alt="Shean Alfred Edquila" className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover object-top bg-[#F6F7F2] ring-4 ring-[#E6EFE2] shrink-0" /><div><span className="inline-flex rounded-full bg-[#E6EFE2] px-3 py-1 text-[10px] font-bold text-[#386641]">BSBA MM - 3B · University of San Agustin</span><h3 className="mt-3 text-xl font-bold">Shean Alfred Edquila</h3><p className="mt-3 text-sm leading-7 text-[#637065]">Passionate about promoting sustainable local tourism and connecting outdoor enthusiasts with the highland trails, peaks, and communities of Igbaras while honing practical marketing management skills.</p></div></article>
        <article className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DCE4D8] shadow-xs flex flex-col sm:flex-row items-center sm:items-start gap-6"><img src={charisseProfileImage} alt="Charisse Ann Petaño" className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover object-top bg-[#F6F7F2] ring-4 ring-[#E6EFE2] shrink-0" /><div><span className="inline-flex rounded-full bg-[#E6EFE2] px-3 py-1 text-[10px] font-bold text-[#386641]">BSBA MM - 3B · University of San Agustin</span><h3 className="mt-3 text-xl font-bold">Charisse Ann Petaño</h3><p className="mt-3 text-sm leading-7 text-[#637065]">Dedicated to crafting meaningful visitor experiences and making official municipal trail information, rates, and local guide coordination accessible for every traveler exploring Igbaras.</p></div></article>
      </div></div></section>

      <section id="contact" className="scroll-mt-24 px-4 py-20 sm:px-6"><div className="mx-auto max-w-6xl bg-[#E6EFE2] border border-[#D2DFCC] rounded-3xl p-6 sm:p-10 lg:p-12"><div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-start"><div><SectionKicker number="05" title="Direct Inquiry & Contact" /><h2 className="text-3xl font-bold sm:text-5xl">Your trail starts with a hello.</h2><p className="mt-6 text-sm leading-7 text-[#566258]">Have a route in mind? Reach out directly to our coordinators to ask about trail access, official fees, and local guide coordination before your visit.</p></div><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{contacts.map((person) => <ContactCard key={person.email} person={person} />)}</div></div></div></section>
    </main>
    <footer className="bg-[#18261B] px-4 py-10 text-white sm:px-6"><div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 sm:flex-row sm:items-center"><div className="flex items-center gap-3"><img src={logoFinalImage} alt="" className="w-11 h-11 rounded-full object-cover border border-white/20" /><strong className="tracking-wide">Lakbay Igbaras</strong></div><p className="text-xs text-white/60">Explore responsibly. Leave the wild better.</p></div></footer>

    {selected && <div onClick={() => setSelected(null)} className="fixed inset-0 z-50 flex items-center justify-center bg-[#101710]/70 p-4 backdrop-blur-sm"><div onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" className="max-h-[90vh] w-full max-w-2xl overflow-auto rounded-3xl bg-[#F6F7F2] shadow-2xl"><div className="relative h-72 overflow-hidden rounded-t-3xl"><SafeImage src={selected.gallery?.[galleryIndex] || selected.image} alt={`${selected.name} photo ${galleryIndex + 1}`} className="h-full w-full object-cover" fallbackLabel={selected.name} /><div className="absolute inset-0 bg-gradient-to-t from-[#152419]/80 to-transparent" />{selected.gallery?.length > 1 && <><button onClick={() => setGalleryIndex((galleryIndex - 1 + selected.gallery.length) % selected.gallery.length)} className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/95 p-2.5 text-[#1A281E] shadow-lg" aria-label="Previous photo"><ChevronLeft className="h-5 w-5" /></button><button onClick={() => setGalleryIndex((galleryIndex + 1) % selected.gallery.length)} className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/95 p-2.5 text-[#1A281E] shadow-lg" aria-label="Next photo"><ChevronRight className="h-5 w-5" /></button><div className="absolute bottom-20 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/30 px-2 py-1.5">{selected.gallery.map((photo, index) => <button key={photo} onClick={() => setGalleryIndex(index)} aria-label={`View photo ${index + 1}`} className={`h-2 rounded-full transition-all ${index === galleryIndex ? 'w-5 bg-white' : 'w-2 bg-white/55'}`} />)}</div></>}<button onClick={() => setSelected(null)} className="absolute right-4 top-4 rounded-full bg-white p-2 text-[#1A281E]" aria-label="Close"><X className="h-5 w-5" /></button><div className="absolute bottom-5 left-5 text-white"><p className="text-xs uppercase tracking-widest">{selected.barangay}</p><h2 className="mt-1 text-3xl font-bold">{selected.name}</h2></div></div><div className="p-5 sm:p-7"><p className="font-serif text-lg italic text-[#386641]">“{selected.tagline}”</p><div className="mt-6 grid gap-3 sm:grid-cols-2"><div className="rounded-2xl bg-[#E6EFE2] p-4"><span className="text-[10px] font-bold uppercase tracking-widest text-[#647166]">Elevation / Type</span><p className="mt-1 font-bold">{selected.elevation}</p></div><div className="rounded-2xl bg-[#E6EFE2] p-4"><span className="text-[10px] font-bold uppercase tracking-widest text-[#647166]">Guide Fee</span><p className="mt-1 font-bold">{selected.fee}</p></div></div>{selected.porter && <div className="mt-3 rounded-2xl border border-[#D5E2CF] p-4"><span className="text-[10px] font-bold uppercase tracking-widest text-[#647166]">Porter</span><p className="mt-1 font-bold">{selected.porter}</p></div>}<button onClick={() => { scroll('contact'); setSelected(null); }} className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#2D5A36] py-3.5 text-sm font-bold text-white">Inquire about this trail <ArrowRight className="h-4 w-4" /></button></div></div></div>}
  </div>;
}

function TrailList({ title, items }) { return <div><h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-[#386641]">{title}</h3>{items.length ? <div className="overflow-hidden rounded-2xl bg-white/75">{items.map(([name, rate], i) => <div key={name} className={`grid grid-cols-[1fr_auto] gap-3 px-4 py-3 ${i ? 'border-t border-[#DCE4D8]' : ''}`}><span className="text-sm font-semibold">{name}</span><span className="text-right text-xs font-bold text-[#386641]">{rate}</span></div>)}</div> : <p className="rounded-2xl bg-white/70 p-5 text-sm text-[#637065]">No matching trails found.</p>}</div>; }
function RateCard({ icon: Icon, title, items }) {
  const displayItems = title === 'Mandatory Entrance & Environmental Fees'
    ? [
        items[0],
        ['Tigbanaba & Igcabugao Environmental Fee · Resident', '₱10.00'],
        ['Tigbanaba & Igcabugao Environmental Fee · Non-Resident', '₱30.00'],
        ['Passi Environmental Fee · Resident & Non-Resident (Ordinance No. 02-20)', '₱30.00']
      ]
    : items;
  return <article className="rounded-3xl border border-[#DCE4D8] bg-white p-5 sm:p-6"><div className="mb-4 flex items-center gap-3"><span className="rounded-full bg-[#E6EFE2] p-2.5 text-[#386641]"><Icon className="h-4 w-4" /></span><h3 className="font-bold">{title}</h3></div><div className="divide-y divide-[#E5EAE2]">{displayItems.map(([label, value]) => <div key={label} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:justify-between"><span className="text-sm text-[#637065]">{label}</span><strong className="text-sm text-[#386641] sm:text-right">{value}</strong></div>)}</div></article>;
}
