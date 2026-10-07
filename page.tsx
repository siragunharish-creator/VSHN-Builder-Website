import React, { useState, useMemo, useEffect } from 'react';
import {
  Compass,
  Hammer,
  Layers,
  Ruler,
  Building,
  CheckCircle2,
  Phone,
  MessageSquare,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  MapPin,
  Calendar,
  Sparkles,
  ShieldCheck,
  UserCheck,
  Clock,
  Layers3,
  Check,
  Maximize2,
  X,
  Instagram,
  Youtube,
  Send,
  Calculator,
  HardHat,
  Eye,
  Info,
  Menu
} from 'lucide-react';

const BRAND = {
  name: "VSHN BUILDERS",
  tagline: "Building Dreams. Creating Trust.",
  secondaryTagline: "YOUR DREAM HOME. OUR RESPONSIBILITY.",
  phone: "+91 70925 07374",
  phoneRaw: "7092507374",
  address: "Near New Washermenpet Metro, Tondiarpet, Chennai, Tamil Nadu 600081",
  experienceYears: "12+",
  combinedExpYears: "20+",
  serviceAreas: ["Chennai", "Tiruvannamalai", "Tamil Nadu"],
  social: {
    instagram: "https://instagram.com/vshn_builders",
    youtube: "https://youtube.com/@vshnbuilders",
    threads: "https://threads.net/@vshn_builders"
  }
};

const PACKAGES = [
  {
    id: 'super',
    name: 'SUPER',
    rate: 2250,
    unit: '₹2,250 / sq.ft',
    highlight: 'Essential Quality Construction',
    badge: 'Popular for Standard Homes',
    description: 'Balanced structural integrity with quality branded raw materials, durable finishes, and verified engineering supervision for first-time builders.',
    highlightsList: [
      'Standard framed structure with TMT steel & 53 grade cement',
      'Quality red brick / solid block masonry',
      'Vitrified tile flooring (Standard range)',
      'Branded CP & sanitary fittings',
      'Teak wood main door frame & flush interior doors',
      'Complete 2D floor planning & technical supervision'
    ]
  },
  {
    id: 'deluxe',
    name: 'DELUXE',
    rate: 2450,
    unit: '₹2,450 / sq.ft',
    highlight: 'Enhanced Modern Comfort',
    badge: 'Recommended for Modern Living',
    isPopular: true,
    description: 'Upgraded modern fixtures, premium tiles, refined woodwork, and custom exterior elevation aesthetics built to elevate daily living.',
    highlightsList: [
      'Reinforced framed structure with premium grade materials',
      'Premium double-charged vitrified tiles (up to 4x2 ft)',
      'Granite kitchen counter with stainless steel sink & glazed tiles',
      'Branded electricals (Legrand/Anchor) & concealed copper conduits',
      'Polished teak wood main door with brass hardware',
      'Complete 2D floor plans + 3D exterior elevation visualization'
    ]
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    rate: 2650,
    unit: '₹2,650 / sq.ft',
    highlight: 'Architectural Luxury & Craftsmanship',
    badge: 'Master Crafted Elegance',
    description: 'Comprehensive architectural styling, superior stone finishes, premium designer bathrooms, and precision engineering craftsmanship.',
    highlightsList: [
      'Heavy-duty foundation engineering with strict slump & cube testing',
      'Italian style glazed porcelain tiles / granite flooring selections',
      'Premium bath fittings (Jaguar/Kohler range) & wall-hung EWCs',
      'First-quality solid teak wood doors throughout major entries',
      'Designer 3D architectural facade with textured finishes & safety glass',
      'End-to-end dedicated site engineer & milestone inspection reports'
    ]
  }
];

const SERVICES_DATA = [
  {
    num: "01",
    title: "Complete House Construction",
    summary: "End-to-end residential construction from soil testing and foundation to structural masonry, interior finishing, and ceremonial handover.",
    icon: Building,
    details: "We take entire ownership of your residential journey. With regular site engineering supervision, grade-tested materials, and stage-by-stage transparent reporting, your home is constructed with structural resilience and aesthetic grace."
  },
  {
    num: "02",
    title: "2D House Plans",
    summary: "Practical, functional floor plans designed around Vaastu compliance, natural ventilation, daylight, and optimal plot dimension utilization.",
    icon: Ruler,
    details: "Custom layouts engineered to eliminate dead spaces and maximize utility. Every square foot of your plot in Chennai or Tiruvannamalai is planned with municipal approval standards in mind."
  },
  {
    num: "03",
    title: "3D Architectural Design",
    summary: "High-definition 3D exterior elevation and spatial visualization to help your family experience your home before breaking ground.",
    icon: Layers,
    details: "Eliminate guesswork. Our 3D visualization displays realistic sunlight angles, modern facade textures, lighting fixtures, and balcony details so you make confident design decisions."
  },
  {
    num: "04",
    title: "Home Renovation",
    summary: "Comprehensive renovation, structural modification, vertical floor additions, and aesthetic modernization of existing properties.",
    icon: Hammer,
    details: "Transform old independent homes into modern living spaces. We examine structural load capacity before suggesting layout remodeling, waterproofing, re-tiling, and electrical overhauls."
  },
  {
    num: "05",
    title: "Planning & Construction Guidance",
    summary: "Professional mentorship for plot owners who need structural planning, soil checks, material selection advice, and budget feasibility.",
    icon: Compass,
    details: "Already own land in Chennai or Tiruvannamalai? We provide transparent step-by-step guidance on structural design, budgeting, municipal permits, and realistic construction timelines."
  },
  {
    num: "06",
    title: "Construction Consultation",
    summary: "Dedicated advisory for cost estimation, quality audits, material specifications, and technical problem-solving during ongoing builds.",
    icon: HardHat,
    details: "Receive direct, no-nonsense technical guidance from certified civil engineers and seasoned site supervisors to avoid budget overruns and construction flaws."
  }
];

const PROCESS_STEPS = [
  { step: "01", title: "Consultation", desc: "Detailed discussion to understand your family requirements, lifestyle preferences, plot constraints, and target budget." },
  { step: "02", title: "Site Assessment", desc: "Physical inspection of your plot, soil condition, road access, groundwater levels, and orientation (Vaastu)." },
  { step: "03", title: "Planning", desc: "Crafting functional 2D floor plans optimized for plot dimensions, municipal bylaws, natural ventilation, and space efficiency." },
  { step: "04", title: "3D Design", desc: "Creating realistic 3D exterior elevations so you can experience the colors, materials, and facade aesthetics before building." },
  { step: "05", title: "Estimation", desc: "Providing itemized and transparent package estimates with clear milestone schedules. Zero hidden surprises." },
  { step: "06", title: "Construction", desc: "Disciplined execution by trained site teams with strict quality checks, structural curing, and periodic photo updates." },
  { step: "07", title: "Handover", desc: "Thorough quality snagging, deep cleaning, final finishing checks, and warm ceremonial handover of your dream home." }
];

const PROJECTS_DATA = [
  {
    id: "vshn-proj-01",
    name: "The Royal Oak Villa",
    location: "Madipakkam, Chennai",
    type: "Independent Residential Duplex",
    status: "Completed",
    plotSize: "1,800 sq.ft (30 x 60)",
    builtUpArea: "2,450 sq.ft",
    floors: "G + 1 Floor",
    service: "Turnkey Construction & 3D Design",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description: "A contemporary duplex home featuring double-height living spaces, teakwood main door work, and energy-efficient cross ventilation designed for Chennai's coastal climate.",
    note: "Official VSHN portfolio slot. Replace photograph with VSHN project image."
  },
  {
    id: "vshn-proj-02",
    name: "Sri Annamalai Illam",
    location: "Tiruvannamalai",
    type: "Traditional Contemporary House",
    status: "Completed",
    plotSize: "2,400 sq.ft (40 x 60)",
    builtUpArea: "3,100 sq.ft",
    floors: "G + 2 Floors",
    service: "2D Plan, 3D Elevation & Construction",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    description: "Spacious independent family residence constructed with reinforced concrete foundations, expansive pooja room, and terrace pergola overlooking mountain views.",
    note: "Official VSHN portfolio slot. Replace photograph with VSHN project image."
  },
  {
    id: "vshn-proj-03",
    name: "Urban Horizon Residence",
    location: "Kolathur, Chennai",
    type: "Modern Compact Independent House",
    status: "Completed",
    plotSize: "1,200 sq.ft (30 x 40)",
    builtUpArea: "1,980 sq.ft",
    floors: "G + 1 Floor",
    service: "Full House Construction",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    description: "Smart space management on a 1,200 sq.ft plot, creating 3 master bedrooms, covered car parking, and an architectural cantilevered balcony facade.",
    note: "Official VSHN portfolio slot. Replace photograph with VSHN project image."
  },
  {
    id: "vshn-proj-04",
    name: "Green Crest Villa",
    location: "Porur, Chennai",
    type: "Renovation & Vertical Expansion",
    status: "Completed",
    plotSize: "1,500 sq.ft",
    builtUpArea: "2,200 sq.ft",
    floors: "G + 1 Floor Addition",
    service: "Structural Strengthening & Renovation",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    description: "Complete structural retrofitting of a 22-year-old ground floor house, followed by the addition of a contemporary 1st floor suite with lightwells.",
    note: "Official VSHN portfolio slot. Replace photograph with VSHN project image."
  }
];

const GALLERY_ITEMS = [
  { id: 1, title: "Modern Duplex Exterior", category: "Completed Homes", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80" },
  { id: 2, title: "Foundation & Plinth Casting", category: "Site Progress", url: "https://images.unsplash.com/photo-1541888946425-d0fbb1861593?auto=format&fit=crop&w=1000&q=80" },
  { id: 3, title: "3D Elevation Facade Render", category: "3D Designs", url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80" },
  { id: 4, title: "Structural Brick Masonry", category: "Construction", url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80" },
  { id: 5, title: "Architectural 2D Cad Blueprint", category: "2D Plans", url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80" },
  { id: 6, title: "Living Area Renovation", category: "Renovation", url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80" },
  { id: 7, title: "Terrace Waterproofing & Slab", category: "Site Progress", url: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1000&q=80" },
  { id: 8, title: "Completed Villa in Tiruvannamalai", category: "Completed Homes", url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80" }
];

const FAQS = [
  {
    q: "How much does house construction cost in Chennai?",
    a: "House construction in Chennai typically ranges from ₹2,250 to ₹2,650+ per square foot. The exact cost depends on structural specifications, foundation type (pile vs. isolated footing depending on soil conditions), finishes, interior woodwork, and package selection. Contact VSHN Builders for an itemized estimate based on your plot."
  },
  {
    q: "What is included in house construction packages?",
    a: "Our construction packages cover turnkey scope: earthwork excavation, RCC framed structure (columns, beams, slabs), branded TMT steel, 53-grade cement, red brick/solid block masonry, plastering, internal/external electrical conduits, CP & sanitary plumbing, tile flooring, painting, and woodwork. Inclusions are transparently detailed according to the chosen package."
  },
  {
    q: "Do you provide 2D house plans?",
    a: "Yes. We design customized 2D architectural plans and structural working drawings according to plot dimensions, client lifestyle requirements, municipal approval bylaws, and Vaastu principles."
  },
  {
    q: "Do you provide 3D elevation designs?",
    a: "Yes. We create photorealistic 3D exterior elevations so you can visualize the modern architectural style, balcony designs, texture paints, and ambient lighting before physical construction begins."
  },
  {
    q: "Do you undertake renovation projects?",
    a: "Yes. We handle structural retrofitting, vertical floor expansions, bathroom modernizations, and complete interior/exterior remodeling for existing houses in Chennai and Tiruvannamalai."
  },
  {
    q: "Do you construct houses in Tiruvannamalai?",
    a: "Yes. Tiruvannamalai is one of our two primary service hubs alongside Chennai. We maintain dedicated local supervision and seasoned construction crews for projects in the region."
  },
  {
    q: "Can I build a house if I already have an approved plan?",
    a: "Absolutely. If you already possess an approved 2D plan or architectural drawings from your architect, we review the structural requirements, site feasibility, and provide a competitive, transparent construction quotation."
  },
  {
    q: "How do I get an accurate construction estimate?",
    a: "You can simply share your plot location, plot dimensions, expected number of floors, and approximate built-up area through our online form or WhatsApp (+91 70925 07374). We will discuss your preferences and prepare a detailed preliminary estimate."
  }
];

const createWhatsAppUrl = (customText) => {
  const defaultText = `Hi VSHN Builders 👋\nI am interested in building a house.\nLocation:\nPlot Size:\nNumber of Floors:\nPlease share more details.`;
  const textToSend = customText || defaultText;
  return `https://wa.me/917092507374?text=${encodeURIComponent(textToSend)}`;
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeGalleryTab, setActiveGalleryTab] = useState("All");
  const [lightboxImg, setLightboxImg] = useState(null);
  const [activeProjectModal, setActiveProjectModal] = useState(null);
  const [activeFaq, setActiveFaq] = useState(0);
  const [activeProgressionStep, setActiveProgressionStep] = useState(0);

  // Calculator State
  const [calcArea, setCalcArea] = useState(1500);
  const [calcPackage, setCalcPackage] = useState("deluxe");

  // Contact Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "Chennai",
    plotSize: "",
    floors: "G + 1 Floor",
    builtUpArea: "",
    service: "House Construction",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Filtered Gallery
  const filteredGallery = useMemo(() => {
    if (activeGalleryTab === "All") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter(item => item.category === activeGalleryTab);
  }, [activeGalleryTab]);

  // Selected package for calculation
  const selectedPkgObj = useMemo(() => {
    return PACKAGES.find(p => p.id === calcPackage) || PACKAGES[1];
  }, [calcPackage]);

  const estimatedTotal = useMemo(() => {
    return calcArea * selectedPkgObj.rate;
  }, [calcArea, selectedPkgObj]);

  const formatINR = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Build prefilled WhatsApp message
    const waMsg = `Hi VSHN Builders 👋\nI submitted an inquiry:\n- Name: ${formData.name}\n- Phone: ${formData.phone}\n- Location: ${formData.location}\n- Plot Size: ${formData.plotSize || 'Not specified'}\n- Floors: ${formData.floors}\n- Approx Built-up Area: ${formData.builtUpArea || 'TBD'} sq.ft\n- Service: ${formData.service}\n- Note: ${formData.message || 'Need consultation'}`;
    const url = `https://wa.me/917092507374?text=${encodeURIComponent(waMsg)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#121316] font-sans antialiased selection:bg-[#C69C55] selection:text-white">
      
      {}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E8E6E1] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-11 h-11 bg-[#121316] border border-[#C69C55] flex items-center justify-center text-[#C69C55] font-black text-xl tracking-wider shadow-sm group-hover:scale-105 transition-transform">
                V
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#121316] leading-none">
                  VSHN <span className="text-[#C69C55] font-semibold">BUILDERS</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#666870] font-medium mt-1">
                  Building Dreams • Creating Trust
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium text-[#303238]">
              <a href="#about" className="hover:text-[#C69C55] transition-colors">About</a>
              <a href="#services" className="hover:text-[#C69C55] transition-colors">Services</a>
              <a href="#process" className="hover:text-[#C69C55] transition-colors">Process</a>
              <a href="#projects" className="hover:text-[#C69C55] transition-colors">Projects</a>
              <a href="#packages" className="hover:text-[#C69C55] transition-colors">Packages</a>
              <a href="#gallery" className="hover:text-[#C69C55] transition-colors">Gallery</a>
              <a href="#testimonials" className="hover:text-[#C69C55] transition-colors">Trust</a>
              <a href="#faq" className="hover:text-[#C69C55] transition-colors">FAQ</a>
              <a href="#contact" className="hover:text-[#C69C55] transition-colors">Contact</a>
            </nav>

            {/* Right CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-2 text-xs font-semibold px-3 py-2 border border-[#C69C55]/60 text-[#121316] hover:bg-[#C69C55]/10 rounded transition"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#C69C55]" />
                WhatsApp
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#121316] text-[#C69C55] hover:bg-black font-semibold text-xs tracking-wider uppercase px-5 py-2.5 rounded shadow hover:shadow-md transition"
              >
                Get a Quote
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${BRAND.phone}`}
                className="p-2 text-[#121316] bg-[#F4F3EF] rounded border border-[#E8E6E1]"
                aria-label="Call VSHN"
              >
                <Phone className="w-4 h-4 text-[#C69C55]" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#121316] rounded focus:outline-none"
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#E8E6E1] px-5 py-6 space-y-4 shadow-xl">
            <div className="grid grid-cols-2 gap-3 text-sm font-medium">
              <a onClick={() => setMobileMenuOpen(false)} href="#about" className="py-2 hover:text-[#C69C55]">About VSHN</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#services" className="py-2 hover:text-[#C69C55]">Services</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#process" className="py-2 hover:text-[#C69C55]">Our Process</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#projects" className="py-2 hover:text-[#C69C55]">Projects</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#packages" className="py-2 hover:text-[#C69C55]">Packages</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#gallery" className="py-2 hover:text-[#C69C55]">Gallery</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#faq" className="py-2 hover:text-[#C69C55]">FAQ</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#contact" className="py-2 hover:text-[#C69C55]">Contact</a>
            </div>
            <div className="pt-3 border-t border-gray-100 flex gap-2">
              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2.5 bg-[#25D366] text-white text-xs font-bold rounded flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp
              </a>
              <a
                href={`tel:${BRAND.phone}`}
                className="flex-1 text-center py-2.5 bg-[#121316] text-[#C69C55] text-xs font-bold rounded flex items-center justify-center gap-1.5"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
          </div>
        )}
      </header>

      {}
      <section className="relative min-h-[88vh] flex items-center bg-[#121316] text-white overflow-hidden">
        {/* Background Architectural Visual with Subtle Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
            alt="VSHN Builders Architectural House Construction"
            className="w-full h-full object-cover object-center opacity-30 scale-105 transform motion-safe:animate-pulse transition duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121316] via-[#121316]/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl space-y-7">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C69C55]/40 bg-[#C69C55]/10 text-[#C69C55] text-xs font-semibold tracking-wide">
              <ShieldCheck className="w-4 h-4 text-[#C69C55]" />
              <span>12+ Years of Construction Experience</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C69C55]"></span>
              <span>Chennai & Tiruvannamalai</span>
            </div>

            {/* Master Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              Building Dreams. <br />
              <span className="text-[#C69C55] italic font-serif font-normal">Creating Trust.</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl font-medium text-[#E0E2EC] tracking-wide">
              Complete Home Construction in Chennai & Tamil Nadu
            </p>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-[#B0B4C0] leading-relaxed max-w-2xl">
              From planning and 2D floor plans to 3D design, construction and finishing, VSHN Builders helps you build your dream home with practical guidance and transparent execution.
            </p>

            {/* Secondary Tagline Banner */}
            <div className="text-xs uppercase tracking-widest text-[#C69C55] font-bold border-l-2 border-[#C69C55] pl-3 py-0.5">
              YOUR DREAM HOME. OUR RESPONSIBILITY.
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 bg-[#C69C55] hover:bg-[#b58b43] text-[#121316] font-bold text-sm tracking-wider uppercase px-8 py-4 rounded shadow-lg transition duration-200"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-[#C69C55] hover:text-[#C69C55] text-white font-semibold text-sm tracking-wider px-7 py-4 rounded transition duration-200 backdrop-blur-sm"
              >
                View Our Projects
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-white/10 text-xs text-[#9DA3B4]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#C69C55]" />
                <span>Zero Hidden Costs</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#C69C55]" />
                <span>B.E Civil Engineering Lead</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#C69C55]" />
                <span>Daily/Weekly Site Updates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="bg-white border-b border-[#E8E6E1] py-12 relative z-20 -mt-2 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
            
            <div className="flex flex-col items-center text-center p-3">
              <span className="text-4xl sm:text-5xl font-black text-[#121316] tracking-tight">12+</span>
              <span className="text-sm font-bold text-[#C69C55] uppercase tracking-wider mt-1">Years</span>
              <p className="text-xs text-[#666870] mt-1 font-medium">Construction Experience</p>
            </div>

            <div className="flex flex-col items-center text-center p-3 pt-6 lg:pt-3">
              <span className="text-4xl sm:text-5xl font-black text-[#121316] tracking-tight">20+</span>
              <span className="text-sm font-bold text-[#C69C55] uppercase tracking-wider mt-1">Years</span>
              <p className="text-xs text-[#666870] mt-1 font-medium">Combined Founder Experience</p>
            </div>

            <div className="flex flex-col items-center text-center p-3 pt-6 lg:pt-3">
              <div className="text-2xl sm:text-3xl font-black text-[#121316] tracking-tight flex items-center gap-1">
                Chennai <span className="text-[#C69C55] font-light">&</span> Tiruvannamalai
              </div>
              <span className="text-sm font-bold text-[#C69C55] uppercase tracking-wider mt-1">Dual Hubs</span>
              <p className="text-xs text-[#666870] mt-1 font-medium">Primary Tamil Nadu Service Areas</p>
            </div>

            <div className="flex flex-col items-center text-center p-3 pt-6 lg:pt-3">
              <span className="text-3xl sm:text-4xl font-black text-[#121316] tracking-tight">End-to-End</span>
              <span className="text-sm font-bold text-[#C69C55] uppercase tracking-wider mt-1">Support</span>
              <p className="text-xs text-[#666870] mt-1 font-medium">From 2D Blueprints to Handover</p>
            </div>

          </div>
        </div>
      </section>

      {}
      <section id="about" className="py-24 bg-[#FBFBFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual / Graphic column */}
            <div className="lg:col-span-5 relative">
              <div className="relative border-4 border-white shadow-2xl overflow-hidden rounded bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb1861593?auto=format&fit=crop&w=900&q=80"
                  alt="VSHN Builders Site Engineering"
                  className="w-full h-[460px] object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 text-white">
                  <div className="text-xs uppercase tracking-widest text-[#C69C55] font-semibold">Site Leadership</div>
                  <div className="text-base font-bold mt-1">Practical Site Know-how Meets Civil Engineering</div>
                </div>
              </div>
              
              {/* Floating Brass Badge */}
              <div className="absolute -top-5 -left-5 bg-[#121316] text-white p-5 border-2 border-[#C69C55] shadow-xl hidden sm:block max-w-[210px]">
                <div className="text-2xl font-black text-[#C69C55]">2006</div>
                <div className="text-xs text-gray-300 font-medium leading-snug mt-1">
                  First construction groundwork initiated by founder P. Vadamalai.
                </div>
              </div>
            </div>

            {/* Text & Founder Story column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <div className="text-xs uppercase font-bold tracking-widest text-[#C69C55]">
                  About VSHN Builders
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121316] tracking-tight leading-tight">
                  More Than Construction. <br />
                  <span className="text-[#C69C55]">We Build With Responsibility.</span>
                </h2>
              </div>

              <p className="text-base text-[#4D5058] leading-relaxed">
                VSHN Builders is a construction-focused company serving Chennai, Tiruvannamalai, and Tamil Nadu. Our approach combines practical construction experience with thorough planning, architectural clarity, and customer-focused execution.
              </p>

              {/* Journey Path */}
              <div className="bg-white p-4 border border-[#E8E6E1] rounded shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-[#666870] mb-2">Our Comprehensive Customer Journey:</div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#121316]">
                  <span className="bg-[#F4F3EF] px-2.5 py-1 rounded">Idea</span>
                  <span className="text-[#C69C55]">→</span>
                  <span className="bg-[#F4F3EF] px-2.5 py-1 rounded">Planning</span>
                  <span className="text-[#C69C55]">→</span>
                  <span className="bg-[#F4F3EF] px-2.5 py-1 rounded">Design</span>
                  <span className="text-[#C69C55]">→</span>
                  <span className="bg-[#F4F3EF] px-2.5 py-1 rounded">Estimation</span>
                  <span className="text-[#C69C55]">→</span>
                  <span className="bg-[#F4F3EF] px-2.5 py-1 rounded">Construction</span>
                  <span className="text-[#C69C55]">→</span>
                  <span className="bg-[#F4F3EF] px-2.5 py-1 rounded">Finishing</span>
                  <span className="text-[#C69C55]">→</span>
                  <span className="bg-[#121316] text-[#C69C55] px-2.5 py-1 rounded">Handover</span>
                </div>
              </div>

              {/* Verified Founder Story */}
              <div className="border-l-4 border-[#C69C55] bg-white p-5 rounded-r shadow-sm space-y-3">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-[#C69C55]" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#121316]">
                    The Founder Foundation
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#4D5058] leading-relaxed">
                  <strong>P. Vadamalai</strong> began working in the construction field at a young age and started his first independent construction work in 2006, bringing decades of field mastery and structural insight.
                </p>
                <p className="text-xs sm:text-sm text-[#4D5058] leading-relaxed">
                  His son <strong>Vinoth Kumar, B.E. Civil Engineering</strong>, adds modern engineering precision: building planning, 2D/3D design, electrical, plumbing (MEP), and systematic site management.
                </p>
                <p className="text-xs font-semibold text-[#121316] italic">
                  Together, authentic on-ground experience and technical civil engineering form the unshakable foundation of VSHN Builders.
                </p>
              </div>

              {/* Core Pillars Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#303238]">
                  <CheckCircle2 className="w-4 h-4 text-[#C69C55] flex-shrink-0" />
                  <span>Practical Guidance</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#303238]">
                  <CheckCircle2 className="w-4 h-4 text-[#C69C55] flex-shrink-0" />
                  <span>Transparent Rates</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#303238]">
                  <CheckCircle2 className="w-4 h-4 text-[#C69C55] flex-shrink-0" />
                  <span>Quality Assurance</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#303238]">
                  <CheckCircle2 className="w-4 h-4 text-[#C69C55] flex-shrink-0" />
                  <span>Timely Execution</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#303238]">
                  <CheckCircle2 className="w-4 h-4 text-[#C69C55] flex-shrink-0" />
                  <span>Attention to Detail</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#303238]">
                  <CheckCircle2 className="w-4 h-4 text-[#C69C55] flex-shrink-0" />
                  <span>Personal Attention</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {}
      <section id="services" className="py-24 bg-white border-y border-[#E8E6E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="text-xs uppercase font-bold tracking-widest text-[#C69C55]">
              Our Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121316] tracking-tight">
              Everything You Need to Build With Confidence
            </h2>
            <p className="text-sm sm:text-base text-[#666870]">
              From vacant plots to complete architectural homes, we provide complete technical, aesthetic, and structural services under one reliable roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((srv) => {
              const IconComp = srv.icon;
              return (
                <div
                  key={srv.num}
                  className="bg-[#FBFBFA] border border-[#E8E6E1] p-8 rounded hover:border-[#C69C55] hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-white border border-[#E8E6E1] rounded flex items-center justify-center text-[#121316] group-hover:text-[#C69C55] group-hover:border-[#C69C55] transition-colors">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#A0A2AA] tracking-wider">
                        {srv.num}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#121316] group-hover:text-[#C69C55] transition-colors">
                      {srv.title}
                    </h3>

                    <p className="text-sm text-[#4D5058] leading-relaxed">
                      {srv.summary}
                    </p>

                    <p className="text-xs text-[#7A7E8B] leading-relaxed border-t border-gray-200/80 pt-3">
                      {srv.details}
                    </p>
                  </div>

                  <div className="pt-6 mt-4">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#121316] hover:text-[#C69C55] transition-colors uppercase tracking-wider"
                    >
                      <span>Inquire This Service</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C69C55]" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {}
      <section className="py-24 bg-[#121316] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-[#C69C55]">
              Architectural Clarity
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              From Your Idea to a Real Home
            </h2>
            <p className="text-sm sm:text-base text-[#B0B4C0] leading-relaxed">
              Before construction begins, we help you visualize your home, understand the layout, and make important decisions with greater confidence.
            </p>
          </div>

          {/* Interactive Step Selector */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {[
              { idx: 0, title: "01 — 2D Floor Plan", subtitle: "Layout & Flow" },
              { idx: 1, title: "02 — 3D Elevation", subtitle: "Exterior Rendering" },
              { idx: 2, title: "03 — Construction", subtitle: "Execution & QC" },
              { idx: 3, title: "04 — Completed Home", subtitle: "Delivered Reality" }
            ].map((step) => (
              <button
                key={step.idx}
                onClick={() => setActiveProgressionStep(step.idx)}
                className={`p-4 text-left border rounded transition-all ${
                  activeProgressionStep === step.idx
                    ? "bg-[#C69C55] text-[#121316] border-[#C69C55] shadow-lg font-bold"
                    : "bg-[#1C1D22] text-gray-300 border-white/10 hover:border-[#C69C55]/60"
                }`}
              >
                <div className="text-xs tracking-wider uppercase font-semibold">{step.title}</div>
                <div className={`text-xs mt-1 ${activeProgressionStep === step.idx ? "text-[#121316]" : "text-gray-400"}`}>
                  {step.subtitle}
                </div>
              </button>
            ))}
          </div>

          {/* Dynamic Stage Presentation Container */}
          <div className="bg-[#1C1D22] border border-white/10 rounded-lg p-6 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Visual Display */}
              <div className="lg:col-span-7 relative overflow-hidden rounded border border-white/10 aspect-[16/10] bg-black">
                {activeProgressionStep === 0 && (
                  <img
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
                    alt="2D Floor Plan Technical Architectural Drawing"
                    className="w-full h-full object-cover"
                  />
                )}
                {activeProgressionStep === 1 && (
                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                    alt="3D Elevation Exterior Architectural Render"
                    className="w-full h-full object-cover"
                  />
                )}
                {activeProgressionStep === 2 && (
                  <img
                    src="https://images.unsplash.com/photo-1541888946425-d0fbb1861593?auto=format&fit=crop&w=1200&q=80"
                    alt="Real Construction In Progress with Formwork"
                    className="w-full h-full object-cover"
                  />
                )}
                {activeProgressionStep === 3 && (
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                    alt="Completed Independent Residential Home by VSHN Builders"
                    className="w-full h-full object-cover"
                  />
                )}
                
                <div className="absolute top-3 left-3 bg-[#121316]/90 backdrop-blur-sm border border-[#C69C55]/50 px-3 py-1 text-[11px] font-bold text-[#C69C55] uppercase tracking-wider rounded">
                  {activeProgressionStep === 0 && "Step 01: 2D Spatial Plan"}
                  {activeProgressionStep === 1 && "Step 02: 3D Exterior Facade"}
                  {activeProgressionStep === 2 && "Step 03: Field Construction"}
                  {activeProgressionStep === 3 && "Step 04: Finished Home"}
                </div>
              </div>

              {/* Explanatory Content */}
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-block px-3 py-1 bg-[#C69C55]/20 text-[#C69C55] text-xs font-bold uppercase tracking-wider rounded">
                  Phase {activeProgressionStep + 1} of 4
                </div>

                {activeProgressionStep === 0 && (
                  <>
                    <h3 className="text-2xl font-bold text-white">Precise 2D Floor Plans</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      We draft functional room allocations tailored specifically to your family’s routine, plot boundaries, Vaastu orientation, and municipal setback rules in Chennai & Tiruvannamalai.
                    </p>
                    <ul className="text-xs text-gray-400 space-y-2">
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#C69C55]" /> Plot dimension efficiency</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#C69C55]" /> Ventilation & light corridors</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#C69C55]" /> Furniture & electrical clearance</li>
                    </ul>
                  </>
                )}

                {activeProgressionStep === 1 && (
                  <>
                    <h3 className="text-2xl font-bold text-white">Photorealistic 3D Facades</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Visualize the exterior look, roof lines, color combinations, and balcony designs long before structural bricklaying starts. Make informed choices without expensive on-site alterations.
                    </p>
                    <ul className="text-xs text-gray-400 space-y-2">
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#C69C55]" /> Modern architectural themes</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#C69C55]" /> Exterior texture & tile options</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#C69C55]" /> Exterior lighting placement</li>
                    </ul>
                  </>
                )}

                {activeProgressionStep === 2 && (
                  <>
                    <h3 className="text-2xl font-bold text-white">Supervised Site Execution</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Civil engineers and skilled masonry crews coordinate every phase: soil excavation, footings, column reinforcement, brickwork, and MEP conduit integration.
                    </p>
                    <ul className="text-xs text-gray-400 space-y-2">
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#C69C55]" /> Structural concrete curing rigor</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#C69C55]" /> Branded steel & cement verification</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#C69C55]" /> Scheduled WhatsApp site reports</li>
                    </ul>
                  </>
                )}

                {activeProgressionStep === 3 && (
                  <>
                    <h3 className="text-2xl font-bold text-white">Warm Ceremonial Handover</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      The finalized house matches the approved 3D concept down to the last millwork detail. We conduct full snag-checking, chemical deep cleaning, and key handover.
                    </p>
                    <ul className="text-xs text-gray-400 space-y-2">
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#C69C55]" /> Final plumbing & pressure test</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#C69C55]" /> Electrical switchboard verification</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#C69C55]" /> Ready-for-Grihapravesam handover</li>
                    </ul>
                  </>
                )}

                <div className="pt-3">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#C69C55] hover:underline uppercase tracking-wider"
                  >
                    <span>Request Plan & 3D Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {}
      <section id="process" className="py-24 bg-[#FBFBFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <div className="text-xs uppercase font-bold tracking-widest text-[#C69C55]">
              Methodical Execution
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121316] tracking-tight">
              Our 7-Step Construction Process
            </h2>
            <p className="text-sm text-[#666870]">
              Clear stages designed to eliminate anxiety, maintain project velocity, and guarantee top-tier structural quality.
            </p>
          </div>

          {/* Responsive Process Flow */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="bg-white border border-[#E8E6E1] p-5 rounded relative flex flex-col justify-between hover:border-[#C69C55] transition shadow-sm group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-black text-[#C69C55] bg-[#C69C55]/10 px-2 py-0.5 rounded">
                      {step.step}
                    </span>
                    {idx < PROCESS_STEPS.length - 1 && (
                      <span className="hidden lg:block text-[#C69C55] font-bold text-xs">→</span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-[#121316] group-hover:text-[#C69C55] transition-colors mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#5E616B] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-2 border-t border-gray-100 flex items-center text-[10px] text-[#A0A3AD] font-semibold uppercase tracking-wider">
                  Phase {idx + 1}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {}
      <section id="projects" className="py-24 bg-white border-y border-[#E8E6E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#C69C55]">
                Realized Blueprints
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121316] tracking-tight mt-1">
                Homes We've Helped Build
              </h2>
              <p className="text-sm text-[#666870] mt-1">
                Explore our construction, design, and renovation work across Chennai and Tiruvannamalai.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#121316] hover:text-[#C69C55]"
            >
              Discuss Your Plot Requirements <ArrowRight className="w-3.5 h-3.5 text-[#C69C55]" />
            </a>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROJECTS_DATA.map((proj) => (
              <div
                key={proj.id}
                className="bg-[#FBFBFA] border border-[#E8E6E1] rounded overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-[#C69C55] transition group"
              >
                <div>
                  <div className="relative aspect-[4/3] bg-gray-200 overflow-hidden">
                    <img
                      src={proj.image}
                      alt={proj.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-2 right-2 bg-black/80 text-white text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded">
                      {proj.status}
                    </div>
                    <div className="absolute bottom-2 left-2 bg-black/75 backdrop-blur-sm text-[#C69C55] text-[10px] font-semibold px-2 py-0.5 rounded">
                      {proj.note}
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-1.5 text-xs text-[#737682] font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#C69C55]" />
                      <span>{proj.location}</span>
                    </div>

                    <h3 className="text-lg font-bold text-[#121316] group-hover:text-[#C69C55] transition-colors leading-snug">
                      {proj.name}
                    </h3>

                    <div className="text-xs text-[#52555E] space-y-1 pt-1">
                      <div><strong className="text-[#121316]">Type:</strong> {proj.type}</div>
                      <div><strong className="text-[#121316]">Built-up:</strong> {proj.builtUpArea}</div>
                      <div><strong className="text-[#121316]">Floors:</strong> {proj.floors}</div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => setActiveProjectModal(proj)}
                    className="w-full py-2.5 px-3 bg-white border border-[#D5D3CC] hover:border-[#C69C55] hover:bg-[#121316] hover:text-white text-[#121316] text-xs font-bold rounded tracking-wider uppercase transition flex items-center justify-center gap-1.5"
                  >
                    <span>View Project Details</span>
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Authentic Note */}
          <div className="mt-8 p-4 bg-[#F4F3EF] border border-[#E8E6E1] rounded text-center text-xs text-[#666870]">
            <strong>Note on Portfolio Integrity:</strong> In accordance with our brand honesty rules, we display genuine structural layouts. Real project photography and ongoing client milestone shots are updated systematically.
          </div>

        </div>
      </section>

      {}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="relative bg-white max-w-3xl w-full rounded-lg shadow-2xl overflow-hidden border border-[#C69C55]">
            <button
              onClick={() => setActiveProjectModal(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/70 hover:bg-black text-white rounded-full transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-64 sm:h-80 bg-black">
              <img
                src={activeProjectModal.image}
                alt={activeProjectModal.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-6 text-white">
                <span className="text-xs uppercase font-bold text-[#C69C55] tracking-widest">{activeProjectModal.type}</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold">{activeProjectModal.name}</h3>
                <div className="flex items-center gap-2 text-xs text-gray-300 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#C69C55]" /> {activeProjectModal.location}
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#666870] mb-2">Project Overview</h4>
                <p className="text-sm text-[#4D5058] leading-relaxed">{activeProjectModal.description}</p>
              </div>

              {/* Specifications Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 bg-[#FBFBFA] border border-[#E8E6E1] rounded text-xs">
                <div>
                  <span className="text-[#888B96] block">Plot Size</span>
                  <span className="font-bold text-[#121316]">{activeProjectModal.plotSize}</span>
                </div>
                <div>
                  <span className="text-[#888B96] block">Built-up Area</span>
                  <span className="font-bold text-[#121316]">{activeProjectModal.builtUpArea}</span>
                </div>
                <div>
                  <span className="text-[#888B96] block">Floors</span>
                  <span className="font-bold text-[#121316]">{activeProjectModal.floors}</span>
                </div>
                <div>
                  <span className="text-[#888B96] block">Scope</span>
                  <span className="font-bold text-[#121316]">{activeProjectModal.service}</span>
                </div>
                <div>
                  <span className="text-[#888B96] block">Status</span>
                  <span className="font-bold text-green-700">{activeProjectModal.status}</span>
                </div>
                <div>
                  <span className="text-[#888B96] block">Engineering Supervision</span>
                  <span className="font-bold text-[#121316]">VSHN Technical Team</span>
                </div>
              </div>

              <div className="p-3 bg-amber-50 border border-amber-200 text-amber-900 text-xs rounded">
                <strong>VSHN Quality Standard:</strong> Constructed using certified structural grade steel, strict concrete slump test checks, and moisture-sealed masonry work.
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={createWhatsAppUrl(`Hi VSHN Builders, I am interested in knowing more about a project like "${activeProjectModal.name}" (${activeProjectModal.location}). Can you share estimate details?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 bg-[#25D366] text-white text-xs font-bold rounded flex items-center justify-center gap-2 hover:bg-[#20b858] transition"
                >
                  <MessageSquare className="w-4 h-4" /> Enquire About This Project via WhatsApp
                </a>
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="py-3 px-5 border border-gray-300 text-xs font-bold text-gray-700 rounded hover:bg-gray-100 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {}
      <section id="packages" className="py-24 bg-[#FBFBFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#C69C55]">
              Transparent Construction Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121316] tracking-tight">
              Choose the Right Construction Package
            </h2>
            <p className="text-sm text-[#666870]">
              Clear, per-square-foot rates designed to give your family predictable budgeting with verified material specifications.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded border flex flex-col justify-between transition-all relative ${
                  pkg.isPopular
                    ? "bg-white border-[#C69C55] shadow-xl md:-translate-y-2 ring-1 ring-[#C69C55]"
                    : "bg-white border-[#E8E6E1] shadow-sm hover:border-[#C69C55]/60"
                }`}
              >
                {pkg.isPopular && (
                  <div className="bg-[#C69C55] text-[#121316] text-[11px] font-black uppercase tracking-widest py-1.5 text-center">
                    ★ Most Popular Choice
                  </div>
                )}

                <div className="p-8 space-y-6">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-black tracking-tight text-[#121316]">{pkg.name}</h3>
                      <span className="text-[10px] font-semibold bg-[#F4F3EF] px-2 py-0.5 rounded text-[#666870]">
                        {pkg.badge}
                      </span>
                    </div>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-4xl font-extrabold text-[#121316]">₹{pkg.rate.toLocaleString()}</span>
                      <span className="text-xs text-[#70737E] font-medium ml-2">/ sq.ft</span>
                    </div>
                    <p className="text-xs text-[#666870] mt-2 font-medium">{pkg.highlight}</p>
                  </div>

                  <p className="text-xs text-[#4D5058] leading-relaxed border-t border-gray-100 pt-4">
                    {pkg.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#121316]">
                      Included Features:
                    </div>
                    <ul className="space-y-2.5">
                      {pkg.highlightsList.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#4D5058]">
                          <Check className="w-3.5 h-3.5 text-[#C69C55] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-8 pt-0 space-y-3">
                  <div className="text-center text-[11px] text-[#7A7E8B] italic">
                    Package details available on enquiry
                  </div>
                  <a
                    href={createWhatsAppUrl(`Hi VSHN Builders, I am interested in the ${pkg.name} package (₹${pkg.rate}/sq.ft). Please share detailed specifications.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-4 rounded text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition ${
                      pkg.isPopular
                        ? "bg-[#121316] text-[#C69C55] hover:bg-black"
                        : "bg-[#F4F3EF] hover:bg-[#C69C55] hover:text-[#121316] text-[#121316]"
                    }`}
                  >
                    <span>Enquire {pkg.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Cost Estimator Tool */}
          <div className="bg-white border border-[#E8E6E1] rounded-lg p-6 sm:p-10 shadow-sm max-w-4xl mx-auto mb-8">
            <div className="flex items-center gap-2.5 mb-6 text-[#121316]">
              <Calculator className="w-6 h-6 text-[#C69C55]" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold">Interactive Construction Cost Estimator</h3>
                <p className="text-xs text-[#666870]">Move the slider to estimate structural budget based on your planned built-up area</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center text-sm font-semibold mb-2">
                    <label htmlFor="area-slider" className="text-[#303238]">Built-up Area (Sq. Ft):</label>
                    <span className="text-lg font-bold text-[#C69C55]">{calcArea.toLocaleString()} sq.ft</span>
                  </div>
                  <input
                    id="area-slider"
                    type="range"
                    min="600"
                    max="4500"
                    step="50"
                    value={calcArea}
                    onChange={(e) => setCalcArea(Number(e.target.value))}
                    className="w-full accent-[#C69C55] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                    <span>600 sq.ft (Compact)</span>
                    <span>2,000 sq.ft (Standard Villa)</span>
                    <span>4,500 sq.ft (Grand Duplex)</span>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#303238] block mb-2">Select Package Tier:</label>
                  <div className="grid grid-cols-3 gap-2">
                    {PACKAGES.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setCalcPackage(p.id)}
                        className={`py-2 px-3 text-xs font-bold rounded border transition ${
                          calcPackage === p.id
                            ? "bg-[#121316] text-[#C69C55] border-[#121316]"
                            : "bg-[#FBFBFA] text-[#4D5058] border-gray-200 hover:border-[#C69C55]"
                        }`}
                      >
                        {p.name}
                        <div className="text-[10px] font-normal opacity-80">₹{p.rate}/ft</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Estimate Display Card */}
              <div className="bg-[#121316] text-white p-6 rounded-lg text-center space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#C69C55]">
                  Estimated Construction Budget
                </span>
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  {formatINR(estimatedTotal)}
                </div>
                <div className="text-xs text-gray-400">
                  Based on <strong>{calcArea.toLocaleString()} sq.ft</strong> @ ₹{selectedPkgObj.rate}/sq.ft ({selectedPkgObj.name} Package)
                </div>
                <div className="pt-2">
                  <a
                    href={createWhatsAppUrl(`Hi VSHN Builders, I calculated an estimate on your website for ${calcArea} sq.ft with the ${selectedPkgObj.name} package (~${formatINR(estimatedTotal)}). Please guide me with next steps.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold bg-[#C69C55] text-[#121316] px-4 py-2.5 rounded hover:bg-[#b58b43] transition"
                  >
                    <span>Lock in Estimate on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Mandatory Disclaimer */}
          <div className="max-w-3xl mx-auto p-4 bg-white border border-[#E8E6E1] rounded text-center">
            <p className="text-xs text-[#666870] leading-relaxed">
              <strong>Important Pricing Disclaimer:</strong> Construction rates may vary depending on design, site conditions, soil bearing capacity, specifications, materials, and project requirements. Contact us for a project-specific estimate.
            </p>
          </div>

        </div>
      </section>

      {}
      <section className="py-24 bg-white border-b border-[#E8E6E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#C69C55]">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121316] tracking-tight">
              Why Choose VSHN?
            </h2>
            <p className="text-sm text-[#666870]">
              Built upon grounded foundations of engineering transparency, genuine experience, and personal accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="p-6 bg-[#FBFBFA] border border-[#E8E6E1] rounded hover:border-[#C69C55] transition space-y-3">
              <div className="w-10 h-10 rounded bg-[#121316] text-[#C69C55] flex items-center justify-center font-bold">01</div>
              <h3 className="text-lg font-bold text-[#121316]">Practical Experience</h3>
              <p className="text-xs text-[#52555E] leading-relaxed">
                Real construction experience combined with technical knowledge. Ground knowledge since 2006 ensures practical answers to site challenges.
              </p>
            </div>

            <div className="p-6 bg-[#FBFBFA] border border-[#E8E6E1] rounded hover:border-[#C69C55] transition space-y-3">
              <div className="w-10 h-10 rounded bg-[#121316] text-[#C69C55] flex items-center justify-center font-bold">02</div>
              <h3 className="text-lg font-bold text-[#121316]">Transparent Approach</h3>
              <p className="text-xs text-[#52555E] leading-relaxed">
                Clear communication about planning, specifications, raw material grades, and itemized billing. No surprise overheads or hidden rate escalations.
              </p>
            </div>

            <div className="p-6 bg-[#FBFBFA] border border-[#E8E6E1] rounded hover:border-[#C69C55] transition space-y-3">
              <div className="w-10 h-10 rounded bg-[#121316] text-[#C69C55] flex items-center justify-center font-bold">03</div>
              <h3 className="text-lg font-bold text-[#121316]">Customer Focus</h3>
              <p className="text-xs text-[#52555E] leading-relaxed">
                We understand that building a home is a major family decision and life investment. We listen patiently and customize layouts around your real life.
              </p>
            </div>

            <div className="p-6 bg-[#FBFBFA] border border-[#E8E6E1] rounded hover:border-[#C69C55] transition space-y-3">
              <div className="w-10 h-10 rounded bg-[#121316] text-[#C69C55] flex items-center justify-center font-bold">04</div>
              <h3 className="text-lg font-bold text-[#121316]">Design + Construction</h3>
              <p className="text-xs text-[#52555E] leading-relaxed">
                Planning, 2D blueprints, 3D photorealistic elevations, and actual structural execution under one roof. No miscommunication between designer and builder.
              </p>
            </div>

            <div className="p-6 bg-[#FBFBFA] border border-[#E8E6E1] rounded hover:border-[#C69C55] transition space-y-3">
              <div className="w-10 h-10 rounded bg-[#121316] text-[#C69C55] flex items-center justify-center font-bold">05</div>
              <h3 className="text-lg font-bold text-[#121316]">Local Understanding</h3>
              <p className="text-xs text-[#52555E] leading-relaxed">
                Deep experience with residential construction requirements, local soil profiles, climate conditions, and municipal bylaws in Chennai and Tiruvannamalai.
              </p>
            </div>

            <div className="p-6 bg-[#FBFBFA] border border-[#E8E6E1] rounded hover:border-[#C69C55] transition space-y-3">
              <div className="w-10 h-10 rounded bg-[#121316] text-[#C69C55] flex items-center justify-center font-bold">06</div>
              <h3 className="text-lg font-bold text-[#121316]">Responsibility</h3>
              <p className="text-xs text-[#52555E] leading-relaxed">
                Your home is treated as a personal responsibility, not just another commercial contract. Daily accountability from our founders on your site.
              </p>
            </div>

          </div>

        </div>
      </section>

      {}
      <section id="gallery" className="py-24 bg-[#FBFBFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#C69C55]">Visual Archive</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121316] tracking-tight mt-1">
                Project Gallery
              </h2>
              <p className="text-sm text-[#666870] mt-1">
                Snapshots across blueprints, 3D renderings, active construction, and completed independent homes.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 bg-white p-1 border border-[#E8E6E1] rounded">
              {["All", "Completed Homes", "Construction", "3D Designs", "2D Plans", "Renovation", "Site Progress"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveGalleryTab(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded transition ${
                    activeGalleryTab === cat
                      ? "bg-[#121316] text-[#C69C55]"
                      : "text-[#666870] hover:text-[#121316]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => setLightboxImg(item)}
                className="group relative aspect-square bg-gray-200 rounded overflow-hidden cursor-pointer border border-[#E8E6E1]"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                  <span className="text-[10px] uppercase tracking-wider text-[#C69C55] font-bold">{item.category}</span>
                  <p className="text-xs font-semibold leading-tight mt-0.5">{item.title}</p>
                  <span className="text-[10px] text-gray-300 mt-2 flex items-center gap-1">
                    <Eye className="w-3 h-3" /> Click to enlarge
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 text-xs text-[#80838E]">
            PROJECT IMAGE PLACEHOLDERS — SYSTEMATICALLY REFRESHED WITH NEW SITE PROGRESS
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setLightboxImg(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute -top-10 right-0 text-white hover:text-[#C69C55] transition"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={lightboxImg.url}
              alt={lightboxImg.title}
              className="max-h-[80vh] w-auto rounded shadow-2xl object-contain border border-[#C69C55]/30"
            />
            <div className="text-white text-center mt-3">
              <span className="text-xs uppercase text-[#C69C55] font-bold">{lightboxImg.category}</span>
              <h4 className="text-base font-semibold">{lightboxImg.title}</h4>
            </div>
          </div>
        </div>
      )}

      {}
      <section className="py-20 bg-white border-y border-[#E8E6E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#C69C55]">Digital Presence</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121316] tracking-tight mt-1">
                See VSHN in Action
              </h2>
              <p className="text-sm text-[#666870] mt-1">
                Follow our on-site construction updates, 2D to 3D transformations, and engineering guides.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={BRAND.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded shadow hover:opacity-90 transition"
              >
                <Instagram className="w-4 h-4" /> Instagram (@vshn_builders)
              </a>
              <a
                href={BRAND.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF0000] text-white text-xs font-bold rounded shadow hover:opacity-90 transition"
              >
                <Youtube className="w-4 h-4" /> YouTube (@vshnbuilders)
              </a>
            </div>
          </div>

          {/* Social Showcase Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-[#FBFBFA] border border-[#E8E6E1] p-6 rounded space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#121316]">Site Progress Reels</h4>
                  <p className="text-[11px] text-[#70737E]">@vshn_builders</p>
                </div>
              </div>
              <p className="text-xs text-[#4D5058] leading-relaxed">
                Watch concrete slab casting, steel binding inspection, brickwork alignment, and interior woodworking in short video updates.
              </p>
              <a
                href={BRAND.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C69C55] hover:underline"
              >
                Watch Reels on Instagram <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="bg-[#FBFBFA] border border-[#E8E6E1] p-6 rounded space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center">
                  <Youtube className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#121316]">Project Walkthroughs</h4>
                  <p className="text-[11px] text-[#70737E]">@vshnbuilders</p>
                </div>
              </div>
              <p className="text-xs text-[#4D5058] leading-relaxed">
                Full-length site tours detailing foundation design, plumbing layout, natural ventilation tips, and elevation aesthetic choices.
              </p>
              <a
                href={BRAND.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C69C55] hover:underline"
              >
                Subscribe on YouTube <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="bg-[#FBFBFA] border border-[#E8E6E1] p-6 rounded space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#121316]">2D to 3D Transformations</h4>
                  <p className="text-[11px] text-[#70737E]">Design Series</p>
                </div>
              </div>
              <p className="text-xs text-[#4D5058] leading-relaxed">
                See how a rough plot dimension sketches evolve into architect-approved 2D drawings and photorealistic elevation renderings.
              </p>
              <a
                href={createWhatsAppUrl("Hi VSHN Builders, I want to see sample 2D and 3D design portfolios for independent houses.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C69C55] hover:underline"
              >
                Request Design Catalog <ArrowRight className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {}
      <section id="testimonials" className="py-24 bg-[#FBFBFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#C69C55]">
              Real Feedback Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121316] tracking-tight">
              What Our Customers Say
            </h2>
            <p className="text-sm text-[#666870]">
              In line with our strict brand integrity policy, we only present verified client experiences.
            </p>
          </div>

          {/* Genuine Verified Placeholders (No Fake Reviews) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            <div className="bg-white border-2 border-dashed border-[#D5D3CC] p-8 rounded text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#F4F3EF] flex items-center justify-center text-[#C69C55]">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#121316]">Verified Customer Testimonials</h3>
              <p className="text-xs text-[#666870] leading-relaxed">
                Real customer testimonials will be added here upon formal project documentation and client privacy consent. We do not invent fictional endorsements.
              </p>
              <div className="text-[11px] text-[#A0A3AD] font-semibold uppercase tracking-wider">
                Status: Awaiting Next Handover Documentation
              </div>
            </div>

            <div className="bg-white border border-[#E8E6E1] p-8 rounded flex flex-col justify-between space-y-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C69C55]">Trusted by Our Customers</span>
                  <span className="text-xs font-semibold px-2 py-0.5 bg-blue-50 text-blue-700 rounded">Google Reviews</span>
                </div>
                <h3 className="text-lg font-bold text-[#121316]">Google Business Profile</h3>
                <p className="text-xs text-[#52555E] leading-relaxed">
                  Have we completed a design, plan, or site project for you? We encourage clients to share honest feedback directly on Google to help other families build with peace of mind.
                </p>
              </div>

              <div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#121316] text-[#C69C55] hover:bg-black text-xs font-bold rounded tracking-wider uppercase transition"
                >
                  <span>View Google Reviews</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="block text-center text-[10px] text-gray-400 mt-2">
                  Live verified reviews link to our Google Business Profile
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {}
      <section className="py-24 bg-white border-y border-[#E8E6E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#C69C55]">Regional Operations</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121316] tracking-tight mt-1">
                  Building Across Tamil Nadu
                </h2>
              </div>

              <p className="text-sm text-[#4D5058] leading-relaxed">
                While our primary active execution bases are situated in <strong>Chennai</strong> and <strong>Tiruvannamalai</strong>, we undertake residential building projects throughout Tamil Nadu for clients seeking committed civil engineering leadership.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-[#FBFBFA] border border-[#E8E6E1] rounded flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C69C55] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#121316]">Chennai Operational Office</h4>
                    <p className="text-xs text-[#666870] mt-0.5">
                      Near New Washermenpet Metro, Tondiarpet, Chennai, Tamil Nadu 600081
                    </p>
                    <span className="text-[11px] text-[#C69C55] font-semibold mt-1 inline-block">
                      Convenient connectivity via Metro & North Chennai transit corridors
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-[#FBFBFA] border border-[#E8E6E1] rounded flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C69C55] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#121316]">Tiruvannamalai Regional Hub</h4>
                    <p className="text-xs text-[#666870] mt-0.5">
                      Dedicated local civil supervision and residential construction management across Tiruvannamalai district.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-amber-50/70 border border-amber-200 rounded text-xs text-amber-900 leading-relaxed">
                <strong>Project outside our main hubs?</strong> Talk to our team to assess site feasibility, material logistics, and timeline execution anywhere in Tamil Nadu.
              </div>
            </div>

            {/* Map Presentation Card */}
            <div className="lg:col-span-6">
              <div className="bg-[#121316] text-white p-6 sm:p-8 rounded-lg shadow-xl space-y-6 border border-[#C69C55]/30">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs uppercase font-bold text-[#C69C55]">Office Location</span>
                    <h3 className="text-lg font-bold">New Washermenpet Metro Station Vicinity</h3>
                  </div>
                  <div className="w-10 h-10 rounded bg-[#C69C55]/20 flex items-center justify-center text-[#C69C55]">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>

                <div className="aspect-[16/9] bg-[#1C1D22] rounded overflow-hidden relative border border-white/10 flex items-center justify-center p-4 text-center">
                  <div className="space-y-2">
                    <Building className="w-8 h-8 text-[#C69C55] mx-auto" />
                    <p className="text-xs font-semibold text-gray-200">
                      VSHN BUILDERS — Tondiarpet / New Washermenpet Metro
                    </p>
                    <p className="text-[11px] text-gray-400 max-w-xs">
                      {BRAND.address}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://maps.google.com/?q=New+Washermenpet+Metro+Tondiarpet+Chennai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 bg-[#C69C55] hover:bg-[#b58b43] text-[#121316] text-xs font-bold rounded text-center tracking-wider uppercase transition flex items-center justify-center gap-2"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={`tel:${BRAND.phone}`}
                    className="py-3 px-6 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded text-center transition flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C69C55]" />
                    <span>Call Office</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {}
      <section className="py-16 bg-[#121316] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-[#C69C55]/40 p-8 sm:p-12 rounded-lg bg-gradient-to-r from-[#121316] via-[#1a1b20] to-[#121316] flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C69C55]">
                Landowner Opportunity
              </span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Have a Property or Development Opportunity?
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                If you own a property and are exploring construction, redevelopment, or development opportunities, talk to our team about your requirements. We provide straightforward engineering assessments without inflated promises.
              </p>
            </div>
            <a
              href={createWhatsAppUrl("Hi VSHN Builders, I own a plot/property in Tamil Nadu and would like to discuss a construction or development opportunity.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-[#C69C55] hover:bg-[#b58b43] text-[#121316] font-bold text-xs uppercase tracking-wider py-4 px-8 rounded shadow-lg transition"
            >
              Discuss Your Property
            </a>
          </div>
        </div>
      </section>

      {}
      <section id="faq" className="py-24 bg-[#FBFBFA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#C69C55]">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121316] tracking-tight">
              Straight Answers for Home Builders
            </h2>
            <p className="text-sm text-[#666870]">
              Everything you need to know about pricing, plans, timelines, and construction in Chennai & Tamil Nadu.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-[#E8E6E1] rounded overflow-hidden transition"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? -1 : index)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-base font-bold text-[#121316]">{faq.q}</span>
                    <span className="p-1 rounded bg-[#F4F3EF] text-[#121316]">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4 text-[#C69C55]" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-[#4D5058] leading-relaxed border-t border-gray-100 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <p className="text-xs text-[#666870]">Have a question not listed here?</p>
            <a
              href={createWhatsAppUrl("Hi VSHN Builders, I have a specific question about home construction.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C69C55] hover:underline mt-1"
            >
              Ask our Civil Engineering team on WhatsApp <ArrowRight className="w-3 h-3" />
            </a>
          </div>

        </div>
      </section>

      {}
      <section id="contact" className="py-24 bg-white border-t border-[#E8E6E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Details & Direct Callouts */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#C69C55]">
                  Start Your Journey
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121316] tracking-tight mt-1 leading-tight">
                  Planning to Build Your Dream Home?
                </h2>
                <p className="text-sm text-[#4D5058] mt-3 leading-relaxed">
                  Tell us about your plot and requirements. Our engineering team will review the details and help you understand the next steps, timelines, and realistic budgets.
                </p>
              </div>

              {/* Contact info cards */}
              <div className="space-y-4">
                <a
                  href={`tel:${BRAND.phone}`}
                  className="flex items-center gap-4 p-4 bg-[#FBFBFA] border border-[#E8E6E1] rounded hover:border-[#C69C55] transition group"
                >
                  <div className="w-12 h-12 rounded bg-[#121316] text-[#C69C55] flex items-center justify-center group-hover:scale-105 transition">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#70737E] font-medium block">Call Direct</span>
                    <span className="text-base font-bold text-[#121316]">{BRAND.phone}</span>
                  </div>
                </a>

                <a
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#FBFBFA] border border-[#E8E6E1] rounded hover:border-[#25D366] transition group"
                >
                  <div className="w-12 h-12 rounded bg-[#25D366] text-white flex items-center justify-center group-hover:scale-105 transition">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#70737E] font-medium block">Instant WhatsApp</span>
                    <span className="text-base font-bold text-[#121316]">+91 70925 07374</span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-[#FBFBFA] border border-[#E8E6E1] rounded">
                  <div className="w-12 h-12 rounded bg-[#121316] text-[#C69C55] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#70737E] font-medium block">Office Address</span>
                    <span className="text-xs font-semibold text-[#121316] leading-relaxed block">
                      {BRAND.address}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#F4F3EF] rounded border border-[#E8E6E1] text-xs text-[#666870]">
                <strong>Working Hours:</strong> Monday – Saturday: 9:00 AM – 7:30 PM. Site consultations scheduled on prior notice.
              </div>
            </div>

            {/* Comprehensive Lead Capture Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#FBFBFA] border border-[#E8E6E1] rounded-lg p-6 sm:p-10 shadow-lg">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#121316]">Request a Free Consultation</h3>
                  <p className="text-xs text-[#666870] mt-1">
                    Fill out the form below. We will analyze your plot specs and reach out promptly.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-8 bg-green-50 border border-green-200 text-center rounded space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto" />
                    <h4 className="text-lg font-bold text-green-900">Inquiry Prepared!</h4>
                    <p className="text-xs text-green-700 max-w-md mx-auto">
                      Thank you for contacting VSHN Builders. Your project details have been formatted and dispatched to WhatsApp (+91 70925 07374). We will get in touch shortly.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-2 text-xs font-bold text-green-800 underline"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#303238] uppercase mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Ramesh Kumar"
                          className="w-full text-xs p-3 bg-white border border-[#D5D3CC] rounded focus:border-[#C69C55] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#303238] uppercase mb-1">
                          Phone Number (+91) *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 98765 43210"
                          className="w-full text-xs p-3 bg-white border border-[#D5D3CC] rounded focus:border-[#C69C55] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#303238] uppercase mb-1">
                          Location *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="e.g. Chennai / Tiruvannamalai / Other"
                          className="w-full text-xs p-3 bg-white border border-[#D5D3CC] rounded focus:border-[#C69C55] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#303238] uppercase mb-1">
                          Plot Size
                        </label>
                        <input
                          type="text"
                          value={formData.plotSize}
                          onChange={(e) => setFormData({ ...formData, plotSize: e.target.value })}
                          placeholder="e.g. 30 x 40 (1200 sq.ft)"
                          className="w-full text-xs p-3 bg-white border border-[#D5D3CC] rounded focus:border-[#C69C55] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#303238] uppercase mb-1">
                          Number of Floors
                        </label>
                        <select
                          value={formData.floors}
                          onChange={(e) => setFormData({ ...formData, floors: e.target.value })}
                          className="w-full text-xs p-3 bg-white border border-[#D5D3CC] rounded focus:border-[#C69C55] focus:outline-none"
                        >
                          <option value="Ground Floor only">Ground Floor only</option>
                          <option value="G + 1 Floor">G + 1 Floor (Duplex)</option>
                          <option value="G + 2 Floors">G + 2 Floors</option>
                          <option value="G + 3 Floors or more">G + 3 Floors or more</option>
                          <option value="To be decided">To be decided</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#303238] uppercase mb-1">
                          Approx. Built-up Area (Sq.Ft)
                        </label>
                        <input
                          type="text"
                          value={formData.builtUpArea}
                          onChange={(e) => setFormData({ ...formData, builtUpArea: e.target.value })}
                          placeholder="e.g. 1800 sq.ft"
                          className="w-full text-xs p-3 bg-white border border-[#D5D3CC] rounded focus:border-[#C69C55] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#303238] uppercase mb-1">
                        Service Required *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full text-xs p-3 bg-white border border-[#D5D3CC] rounded focus:border-[#C69C55] focus:outline-none"
                      >
                        <option value="House Construction">House Construction (Turnkey)</option>
                        <option value="Renovation">Home Renovation</option>
                        <option value="2D Plan">2D Floor Plan</option>
                        <option value="3D Design">3D Exterior / Elevation Design</option>
                        <option value="Planning">Planning & Permissions</option>
                        <option value="Construction Consultation">Construction Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#303238] uppercase mb-1">
                        Message / Specific Requirements
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us if you have already bought land, specific Vaastu requests, or target start dates..."
                        className="w-full text-xs p-3 bg-white border border-[#D5D3CC] rounded focus:border-[#C69C55] focus:outline-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-[#121316] hover:bg-black text-[#C69C55] font-bold text-xs uppercase tracking-wider rounded shadow transition flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Request a Consultation</span>
                    </button>
                    <p className="text-[11px] text-center text-[#7A7E8B]">
                      Zero sales spam. Your details remain confidential with our founding civil engineering team.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {}
      <footer className="bg-[#121316] text-white pt-20 pb-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
            
            {/* Col 1: Brand & Taglines */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 border border-[#C69C55] flex items-center justify-center text-[#C69C55] font-black text-xl">
                  V
                </div>
                <div>
                  <span className="text-xl font-extrabold tracking-tight text-white block">
                    VSHN <span className="text-[#C69C55]">BUILDERS</span>
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-gray-400">
                    Building Dreams. Creating Trust.
                  </span>
                </div>
              </div>
              
              <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
                Practical, honest, and high-quality residential construction services serving Chennai, Tiruvannamalai, and Tamil Nadu. Combining decades of hands-on building experience with modern civil engineering precision.
              </p>

              <div className="text-xs text-[#C69C55] font-semibold uppercase tracking-wider pt-1">
                {BRAND.secondaryTagline}
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={BRAND.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded bg-white/5 hover:bg-[#C69C55] hover:text-[#121316] text-gray-300 flex items-center justify-center transition"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={BRAND.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded bg-white/5 hover:bg-[#C69C55] hover:text-[#121316] text-gray-300 flex items-center justify-center transition"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded bg-white/5 hover:bg-[#25D366] hover:text-white text-gray-300 flex items-center justify-center transition"
                  aria-label="WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C69C55] mb-4">Quick Links</h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li><a href="#" className="hover:text-white transition">Home</a></li>
                <li><a href="#about" className="hover:text-white transition">About VSHN</a></li>
                <li><a href="#services" className="hover:text-white transition">Services</a></li>
                <li><a href="#process" className="hover:text-white transition">Construction Process</a></li>
                <li><a href="#projects" className="hover:text-white transition">Featured Projects</a></li>
                <li><a href="#packages" className="hover:text-white transition">Pricing Packages</a></li>
                <li><a href="#gallery" className="hover:text-white transition">Visual Gallery</a></li>
                <li><a href="#testimonials" className="hover:text-white transition">Trust & Reviews</a></li>
                <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>

            {/* Col 3: Services */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C69C55] mb-4">Services</h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li><a href="#services" className="hover:text-white transition">House Construction</a></li>
                <li><a href="#services" className="hover:text-white transition">Renovation Work</a></li>
                <li><a href="#services" className="hover:text-white transition">2D House Plans</a></li>
                <li><a href="#services" className="hover:text-white transition">3D Architectural Design</a></li>
                <li><a href="#services" className="hover:text-white transition">Planning & Permissions</a></li>
                <li><a href="#services" className="hover:text-white transition">Construction Consultation</a></li>
              </ul>
            </div>

            {/* Col 4: Service Areas & Address */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C69C55] mb-4">Contact & Location</h4>
              <div className="space-y-3 text-xs text-gray-400">
                <p>
                  <strong className="text-white block mb-0.5">Primary Hubs:</strong>
                  Chennai | Tiruvannamalai | Tamil Nadu
                </p>
                <p>
                  <strong className="text-white block mb-0.5">Direct Helpline:</strong>
                  <a href={`tel:${BRAND.phone}`} className="text-[#C69C55] hover:underline font-bold">
                    {BRAND.phone}
                  </a>
                </p>
                <p>
                  <strong className="text-white block mb-0.5">Address:</strong>
                  {BRAND.address}
                </p>
              </div>
            </div>

          </div>

          {/* Copyright & Technical Footnote */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-4">
            <div>
              © {new Date().getFullYear()} VSHN BUILDERS. All Rights Reserved. Built with responsibility in Tamil Nadu.
            </div>
            <div className="flex items-center gap-4">
              <span>Chennai • Tiruvannamalai</span>
              <span>•</span>
              <a href="#contact" className="hover:text-[#C69C55]">Privacy & Trust Statement</a>
            </div>
          </div>

        </div>
      </footer>

      {}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5">
        <a
          href={createWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 p-3.5 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform flex items-center justify-center"
          title="Chat on WhatsApp (+91 70925 07374)"
          aria-label="WhatsApp VSHN Builders"
        >
          <MessageSquare className="w-6 h-6" />
        </a>
        <a
          href={`tel:${BRAND.phone}`}
          className="w-13 h-13 p-3.5 bg-[#121316] text-[#C69C55] border border-[#C69C55] rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform flex items-center justify-center sm:hidden"
          title="Call VSHN Builders"
          aria-label="Call VSHN Builders"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>

    </div>
  );
}
