import React, { useState } from 'react';
import {
  Mountain,
  MapPin,
  Users,
  Compass,
  ArrowUpRight,
  ShieldCheck,
  Tent,
  Sprout,
  Phone,
  Mail,
  MessageCircle,
  Image as ImageIcon,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';

// ==========================================
// PLACEHOLDER DATA (Easy to edit later)
// ==========================================
const siteData = {
  brand: {
    name: "IGBARAS",
    sub: "ECO-TOURISM",
    locationTag: "ILOILO · PHILIPPINES",
    heroTitle: "A little closer to the wild.",
    heroDesc:
      "From the slopes of Mt. Napulak to forest trails and hidden falls. Find your path, know the essentials, and connect with the local desk."
  },
  quickStats: [
    { icon: MapPin, title: "Igbaras, Iloilo", sub: "Southern Panay foothills" },
    { icon: Compass, title: "3 destinations to explore", sub: "Peaks, falls & caverns" },
    { icon: Users, title: "1 guide : 5 visitors", sub: "Standard local safety ratio" }
  ],
  destinations: [
    {
      id: "napulak",
      category: "SUMMIT TRAIL",
      name: "Mt. Napulak",
      tagline: "Follow the call of the mountains.",
      pricePill: "Sample entry ₱50",
      difficulty: "Difficulty: TBC",
      elevation: "Elevation: 1,239 MASL",
      placeholderLabel: "MT. NAPULAK · MOUNTAIN LANDSCAPE",
      image: "" // Leave empty for Figma placeholder style, or put image URL later
    },
    {
      id: "nadsadjan",
      category: "WATERFALL TRAIL",
      name: "Nadsadjan Falls",
      tagline: "Take the path to a slower pace.",
      pricePill: "Sample entry ₱50",
      difficulty: "Difficulty: TBC",
      elevation: "Elevation: TBC",
      placeholderLabel: "NADSADJAN FALLS · FOREST WATERFALL",
      image: ""
    },
    {
      id: "bat-cave",
      category: "CAVE TRAIL",
      name: "Bat Cave",
      tagline: "Discover a different side of Igbaras.",
      pricePill: "Sample entry ₱50",
      difficulty: "Difficulty: TBC",
      elevation: "Elevation: TBC",
      placeholderLabel: "BAT CAVE · CAVE ENTRANCE",
      image: ""
    }
  ],
  rates: [
    {
      title: "Municipal / Environmental",
      subtitle: "Sample per-visitor fees",
      icon: ShieldCheck,
      items: [
        { label: "Municipal registration", cost: "₱30" },
        { label: "Environmental contribution", cost: "₱20" }
      ]
    },
    {
      title: "Accredited guide · 1:5 ratio",
      subtitle: "Sample fees per group of up to 5",
      icon: Users,
      items: [
        { label: "Day trail guide", cost: "₱1,000" },
        { label: "Overnight trail guide", cost: "₱1,500" }
      ]
    },
    {
      title: "Camping / Porter",
      subtitle: "Sample fees · confirm inclusions",
      icon: Tent,
      items: [
        { label: "Camping per person", cost: "₱100" },
        { label: "Porter per load", cost: "₱500" }
      ]
    }
  ],
  guidelines: [
    {
      num: "01",
      title: "Check access before setting out",
      desc: "Ask the desk about trail openings, weather, and any local requirements."
    },
    {
      num: "02",
      title: "Coordinate with a local guide",
      desc: "Confirm the 1:5 guide ratio, meeting point, and route suitability."
    },
    {
      num: "03",
      title: "Pack in. Pack out.",
      desc: "Bring water and reusable essentials; take all your litter home."
    },
    {
      num: "04",
      title: "Respect the living landscape",
      desc: "Stay on established paths. Give wildlife and local communities space."
    },
    {
      num: "05",
      title: "Prepare for a changing trail",
      desc: "Wear suitable footwear and share your itinerary with someone you trust."
    }
  ],
  steps: [
    { num: "1", title: "Pick Destination", desc: "Find the route that fits you" },
    { num: "2", title: "Check Rates & Rules", desc: "Know the essentials first" },
    { num: "3", title: "Contact Desk to Inquire", desc: "Confirm the details directly" }
  ],
  contact: {
    location: "Igbaras, Iloilo",
    addressNote: "Visitor desk address to be confirmed",
    hoursNote: "Days and hours to be confirmed",
    phone: "+639123456789",
    phoneDisplay: "Number to be confirmed",
    email: "tourism.igbaras@example.com",
    emailDisplay: "Email address to be confirmed",
    messengerUrl: "https://m.me/"
  }
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F6F7F2] text-[#1A281E] font-sans selection:bg-[#2A4B32] selection:text-white">
      
      {/* ==========================================
          STICKY TOP NAVBAR
      ========================================== */}
      <header className="sticky top-0 z-50 px-4 pt-4 pb-2">
        <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-md border border-[#E2E8DD] rounded-full px-5 py-3 flex items-center justify-between shadow-xs">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#26462E] text-white flex items-center justify-center">
              <Mountain className="w-4 h-4" />
            </div>
            <div className="leading-none">
              <span className="font-extrabold tracking-tight text-sm block text-[#1A281E]">
                {siteData.brand.name}
              </span>
              <span className="text-[9px] tracking-widest uppercase text-[#5C6B5E] font-semibold">
                {siteData.brand.sub}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-[#4A584C]">
            <a href="#destinations" className="hover:text-[#1A281E] transition">Destinations</a>
            <a href="#rates" className="hover:text-[#1A281E] transition">Rates</a>
            <a href="#guidelines" className="hover:text-[#1A281E] transition">Guidelines</a>
            <a href="#contact" className="hover:text-[#1A281E] transition">Contact</a>
          </nav>

          {/* CTA Pill */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-[#2D5A36] hover:bg-[#224529] text-white text-xs font-semibold px-5 py-2.5 rounded-full transition inline-flex items-center gap-1.5"
            >
              Inquire Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1A281E]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden max-w-6xl mx-auto mt-2 bg-white border border-[#E2E8DD] rounded-2xl p-4 shadow-lg flex flex-col gap-3 text-sm font-semibold">
            <a href="#destinations" onClick={() => setMobileMenuOpen(false)} className="py-1.5 px-3 rounded-lg hover:bg-[#EFF3EC]">Destinations</a>
            <a href="#rates" onClick={() => setMobileMenuOpen(false)} className="py-1.5 px-3 rounded-lg hover:bg-[#EFF3EC]">Rates & Fees</a>
            <a href="#guidelines" onClick={() => setMobileMenuOpen(false)} className="py-1.5 px-3 rounded-lg hover:bg-[#EFF3EC]">Guidelines</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-1.5 px-3 rounded-lg hover:bg-[#EFF3EC]">Contact</a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#2D5A36] text-white text-center py-2.5 rounded-full mt-1"
            >
              Inquire Now
            </a>
          </div>
        )}
      </header>

      {/* ==========================================
          HERO SECTION & OVERLAPPING BAR
      ========================================== */}
      <section className="px-4 pt-4 pb-16 max-w-6xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#6C8469] via-[#4A6449] to-[#283B28] text-white px-6 pt-16 pb-28 md:py-28 text-center shadow-sm">
          {/* Subtle Top Pill */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-xs border border-white/20 px-3.5 py-1 rounded-full text-[10px] tracking-widest uppercase font-semibold mb-6">
            <span>{siteData.brand.locationTag}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase">
            {siteData.brand.name}
          </h1>
          <p className="font-serif italic text-xl sm:text-2xl text-[#E3ECE0] mt-2">
            {siteData.brand.heroTitle}
          </p>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-white/85 mt-4 leading-relaxed">
            {siteData.brand.heroDesc}
          </p>

          {/* Placeholder Indicator inside Hero */}
          <div className="mt-8 inline-flex items-center gap-2 text-[11px] text-white/50 border border-dashed border-white/25 rounded-lg px-3 py-1.5">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>HERO LANDSCAPE IMAGE PLACEHOLDER</span>
          </div>
        </div>

        {/* Overlapping 3-Column Pill Bar */}
        <div className="max-w-4xl mx-auto -mt-14 relative z-10 bg-[#E6EFE2] p-2.5 rounded-3xl shadow-md border border-[#D5E2CF]">
          <div className="bg-white rounded-2xl p-4 sm:px-6 sm:py-4 grid grid-cols-1 sm:grid-cols-3 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E8ECE6]">
            {siteData.quickStats.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <div key={idx} className={`flex items-center gap-3.5 ${idx > 0 ? 'pt-3 sm:pt-0 sm:pl-5' : ''}`}>
                  <div className="w-9 h-9 rounded-full bg-[#EAF1E6] text-[#2D5A36] flex items-center justify-center shrink-0">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1A281E]">{stat.title}</p>
                    <p className="text-[11px] text-[#637065]">{stat.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          01 / THE DESTINATION DIRECTORY
      ========================================== */}
      <section id="destinations" className="px-4 py-14 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#4B6B50] block mb-2">
              01 / THE DESTINATION DIRECTORY
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A281E]">
              Three ways to <span className="font-serif italic font-normal text-[#386641]">wander.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5A685C] max-w-sm leading-relaxed">
            A summit, a waterfall, a world beneath the trees. Explore the directory and ask the desk which route is right for you.
          </p>
        </div>

        {/* 3 Portrait Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteData.destinations.map((spot) => (
            <div
              key={spot.id}
              className="group relative rounded-3xl overflow-hidden bg-[#9BAE96] border border-[#DCE4D8] h-[420px] flex flex-col justify-between p-5 shadow-xs hover:shadow-md transition"
            >
              {/* Optional Real Image Layer */}
              {spot.image && (
                <img
                  src={spot.image}
                  alt={spot.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              )}

              {/* Center Placeholder Label (Visible when no photo is added yet) */}
              {!spot.image && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-[#364935]/70 pointer-events-none">
                  <ImageIcon className="w-7 h-7 mb-2 stroke-[1.5]" />
                  <span className="text-[10px] font-bold tracking-widest uppercase">
                    {spot.placeholderLabel}
                  </span>
                  <span className="text-[10px] opacity-75 mt-0.5">Image placeholder</span>
                </div>
              )}

              {/* Bottom Dark Gradient Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#162418]/95 via-[#162418]/50 to-transparent pointer-events-none" />

              {/* Top Row: Floating Price Pill */}
              <div className="relative z-10 flex justify-end">
                <span className="bg-white/95 backdrop-blur-xs text-[#1A281E] text-[11px] font-semibold px-3.5 py-1.5 rounded-full shadow-xs">
                  {spot.pricePill}
                </span>
              </div>

              {/* Bottom Row: Spot Info */}
              <div className="relative z-10 text-white">
                <span className="text-[9px] tracking-widest uppercase text-white/75 font-semibold block mb-1">
                  {spot.category}
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">{spot.name}</h3>
                  <a
                    href="#contact"
                    className="w-7 h-7 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition"
                    title="Inquire about this trail"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
                <p className="font-serif italic text-xs text-white/85 mt-1 mb-4">
                  {spot.tagline}
                </p>

                {/* Metadata Badges */}
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] bg-black/35 border border-white/20 px-2.5 py-1 rounded-full">
                    {spot.difficulty}
                  </span>
                  <span className="text-[10px] bg-black/35 border border-white/20 px-2.5 py-1 rounded-full">
                    {spot.elevation}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[11px] text-[#6E7B6F] mt-5 text-center sm:text-left">
          All prices are illustrative samples, not official fees. Difficulty and elevation are pending confirmation; check route access and conditions with the local desk.
        </p>
      </section>

      {/* ==========================================
          02 / KNOW BEFORE YOU GO (RATES MATRIX)
      ========================================== */}
      <section id="rates" className="px-4 py-16 bg-[#EFF3EC] border-y border-[#E0E7DC]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column (Editorial + 3 Stat Badges) */}
          <div className="lg:col-span-5 space-y-5">
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#4B6B50] block">
              02 / KNOW BEFORE YOU GO
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A281E] leading-tight">
              A clearer path to <span className="font-serif italic font-normal text-[#386641]">planning.</span>
            </h2>
            <p className="text-sm font-semibold text-[#2E3D30]">
              Good adventures begin with the essentials.
            </p>
            <p className="text-xs sm:text-sm text-[#5A685C] leading-relaxed">
              Use this sample matrix to understand the types of fees to ask about. The local desk must confirm current rates, guide availability, inclusions, and any additional charges.
            </p>

            {/* 3 Circular / Pill Stat Badges */}
            <div className="grid grid-cols-3 gap-3 pt-4">
              <div className="bg-white rounded-2xl p-3.5 text-center border border-[#DCE4D8]">
                <span className="text-lg font-extrabold text-[#2D5A36] block">03</span>
                <span className="text-[10px] text-[#637065] block mt-0.5">Destinations</span>
              </div>
              <div className="bg-white rounded-2xl p-3.5 text-center border border-[#DCE4D8]">
                <span className="text-lg font-extrabold text-[#2D5A36] block">1:5</span>
                <span className="text-[10px] text-[#637065] block mt-0.5">Guide ratio</span>
              </div>
              <div className="bg-white rounded-2xl p-3.5 text-center border border-[#DCE4D8]">
                <span className="text-lg font-extrabold text-[#2D5A36] block">₱</span>
                <span className="text-[10px] text-[#637065] block mt-0.5">Sample rates</span>
              </div>
            </div>
          </div>

          {/* Right Column (3 Stacked Rate Cards) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#637065] mb-1">
              ILLUSTRATIVE ONLY · NOT OFFICIAL RATES
            </div>

            {siteData.rates.map((group, idx) => {
              const IconComponent = group.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#E2EBE0] border border-[#D0DDD0] rounded-2xl p-5 sm:p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#2D5A36] text-white flex items-center justify-center shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-[#1A281E]">{group.title}</h3>
                      <p className="text-[11px] text-[#5C6B5E]">{group.subtitle}</p>
                    </div>
                  </div>

                  <div className="space-y-2.5 border-t border-[#C9D6C7] pt-3.5">
                    {group.items.map((item, i) => (
                      <div key={i} className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="text-[#3A4A3C]">{item.label}</span>
                        <span className="font-bold text-[#1A281E] bg-white/80 px-3 py-1 rounded-full text-xs">
                          {item.cost}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            <p className="text-[11px] text-[#637065] pt-1">
              No payments are collected here. Ask for the confirmed LGU fee schedule before making plans.
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================
          03 / WALK WITH CARE (GUIDELINES & 1-2-3)
      ========================================== */}
      <section id="guidelines" className="px-4 py-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Square Placeholder Image + Overlapping "Leave it better" Badge */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-square rounded-3xl bg-[#D6E2D3] border-4 border-white shadow-sm flex flex-col items-center justify-center p-8 text-center text-[#3D523E]">
              <ImageIcon className="w-8 h-8 mb-2 stroke-[1.5]" />
              <span className="text-[11px] font-bold tracking-widest uppercase">
                FOREST TRAIL · LOCAL LANDSCAPE
              </span>
              <span className="text-[11px] opacity-75 mt-1">Image placeholder</span>
            </div>

            {/* Overlapping Circular Green Badge */}
            <div className=" -bottom-5 right-4 sm:right-6 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#2D5A36] border-4 border-[#F6F7F2] text-white flex flex-col items-center justify-center text-center p-3 shadow-md">
              <Sprout className="w-5 h-5 mb-1 text-[#A7D7A9]" />
              <span className="font-serif italic text-xs sm:text-sm leading-tight">
                Leave it<br />better.
              </span>
            </div>
          </div>

          {/* Right Column: 01 - 05 Guidelines List */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#4B6B50] block mb-2">
                03 / WALK WITH CARE
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A281E]">
                Small steps. Lasting <span className="font-serif italic font-normal text-[#386641]">respect.</span>
              </h2>
              <p className="text-xs text-[#637065] mt-2">
                Practical visitor guidance, not official LGU rules. Confirm local regulations and requirements with the desk before your visit.
              </p>
            </div>

            <div className="divide-y divide-[#E2E8DD]">
              {siteData.guidelines.map((rule) => (
                <div key={rule.num} className="py-3.5 flex items-start gap-4">
                  <span className="text-xs font-bold text-[#386641] bg-[#E6EFE2] px-2.5 py-1 rounded-full shrink-0 mt-0.5">
                    {rule.num}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-[#1A281E]">{rule.title}</h3>
                    <p className="text-xs text-[#5A685C] mt-0.5">{rule.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 1-2-3 Horizontal Step Bar */}
        <div className="mt-16 bg-[#E6EFE2] border border-[#D5E2CF] rounded-3xl p-6 sm:p-8">
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#4B6B50] block text-center mb-6">
            YOUR NEXT TRAIL IN THREE STEPS
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {siteData.steps.map((step, index) => (
              <div
                key={step.num}
                className="bg-white rounded-2xl p-5 flex items-center justify-between border border-[#DCE4D8]"
              >
                <div className="flex items-center gap-3.5">
                  <span className="w-8 h-8 rounded-full bg-[#2D5A36] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {step.num}
                  </span>
                  <div>
                    <h4 className="font-bold text-sm text-[#1A281E]">{step.title}</h4>
                    <p className="text-[11px] text-[#637065]">{step.desc}</p>
                  </div>
                </div>
                {index < 2 && (
                  <ArrowRight className="hidden md:block w-4 h-4 text-[#8FA18E] shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          04 / CONNECT WITH THE DESK (CONTACT)
      ========================================== */}
      <section id="contact" className="px-4 pb-20 max-w-6xl mx-auto">
        <div className="bg-[#E6EFE2] border border-[#D2DFCC] rounded-3xl p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: Desk Details */}
          <div className="lg:col-span-6 space-y-5">
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#4B6B50] block">
              04 / CONNECT WITH THE DESK
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A281E]">
              Your trail starts with a <span className="font-serif italic font-normal text-[#386641]">hello.</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#526054] leading-relaxed">
              Have a route in mind? Ask about access, confirmed fees, guide coordination, and what to prepare. A conversation is the best place to start.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-white/80 rounded-2xl p-4 border border-[#D5E2CF]">
                <span className="text-xs font-bold text-[#1A281E] block">{siteData.contact.location}</span>
                <span className="text-[11px] text-[#637065] mt-0.5 block">{siteData.contact.addressNote}</span>
              </div>
              <div className="bg-white/80 rounded-2xl p-4 border border-[#D5E2CF]">
                <span className="text-xs font-bold text-[#1A281E] block">Office hours</span>
                <span className="text-[11px] text-[#637065] mt-0.5 block">{siteData.contact.hoursNote}</span>
              </div>
            </div>
            <p className="text-[11px] text-[#637065]">
              Please confirm office details before traveling.
            </p>
          </div>

          {/* Right Side: Interactive Action Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DCE4D8] shadow-xs space-y-4">
              <div>
                <h3 className="text-xl font-bold text-[#1A281E]">Let's talk trails.</h3>
                <p className="text-xs text-[#637065] mt-1">
                  Share your destination, group size, and preferred visit period with the desk.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {/* Button 1: Call */}
                <a
                  href={`tel:${siteData.contact.phone}`}
                  className="w-full bg-[#2D5A36] hover:bg-[#224529] text-white rounded-2xl p-4 flex items-center justify-between transition"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4" />
                    <div className="text-left">
                      <span className="text-xs font-bold block">Call the desk</span>
                      <span className="text-[10px] text-white/75 block">{siteData.contact.phoneDisplay}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                {/* Button 2: Email */}
                <a
                  href={`mailto:${siteData.contact.email}?subject=Igbaras%20Trail%20Inquiry`}
                  className="w-full bg-[#D97757] hover:bg-[#c56748] text-white rounded-2xl p-4 flex items-center justify-between transition"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4" />
                    <div className="text-left">
                      <span className="text-xs font-bold block">Email an inquiry</span>
                      <span className="text-[10px] text-white/80 block">{siteData.contact.emailDisplay}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                {/* Button 3: Messenger */}
                <a
                  href={siteData.contact.messengerUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#F6F7F2] hover:bg-[#E9EFE6] text-[#1A281E] border border-[#D5E2CF] rounded-2xl p-4 flex items-center justify-between transition"
                >
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-4 h-4 text-[#2D5A36]" />
                    <div className="text-left">
                      <span className="text-xs font-bold block">Facebook Messenger</span>
                      <span className="text-[10px] text-[#637065] block">Official page to be confirmed</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#637065]" />
                </a>
              </div>

              <p className="text-[10px] text-[#7A877B] leading-relaxed pt-2">
                Contact channels are placeholders pending confirmation. No online payments or bookings. An inquiry is not a reservation. Confirm all arrangements directly with the desk.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          DARK FOREST FOOTER
      ========================================== */}
      <footer className="bg-[#18261B] text-[#D5DDD3] py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          <div className="md:col-span-2 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#2D5A36] text-white flex items-center justify-center">
                <Mountain className="w-3.5 h-3.5" />
              </div>
              <span className="font-extrabold tracking-tight text-sm text-white">
                {siteData.brand.name} <span className="font-normal text-xs text-white/60">{siteData.brand.sub}</span>
              </span>
            </div>
            <p className="font-serif italic text-sm text-white/80 pt-1">
              Rooted in nature. Connected by community.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-widest uppercase text-white/50 mb-3">
              EXPLORE IGBARAS
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li><a href="#destinations" className="hover:text-white">Destinations</a></li>
              <li><a href="#rates" className="hover:text-white">Rates & fees</a></li>
              <li><a href="#guidelines" className="hover:text-white">Trail guidelines</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-widest uppercase text-white/50 mb-3">
              GET IN TOUCH
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li><a href="#contact" className="hover:text-white">Contact the desk</a></li>
              <li><a href={`tel:${siteData.contact.phone}`} className="hover:text-white">Call · Email</a></li>
              <li><a href={siteData.contact.messengerUrl} className="hover:text-white">Facebook Messenger</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/45 gap-2">
          <p>Igbaras Eco-Tourism · Destination directory & direct inquiries</p>
          <p>Planning preview · Rates and visitor details require confirmation</p>
        </div>
      </footer>

    </div>
  );
}