import React, { useState, useEffect } from 'react';
import { 
  Globe, Moon, Sun, Search, Briefcase, Users, Code, MessageSquare, 
  Layers, User, CheckCircle2, Star, Shield, ArrowRight, Github, 
  ExternalLink, MapPin, Calendar, Clock, DollarSign, Filter, Plus, 
  Send, ThumbsUp, Bookmark, Sparkles, AlertCircle, X, Check,
  ChevronRight, Laptop, Award, Cpu, BookOpen, Kanban, KanbanSquare, Settings
} from 'lucide-react';

// Import generated images
import heroDevsImg from './assets/images/hero_devs_africa_1792073444709.jpg';
import mentorSessionImg from './assets/images/mentor_session_1792073446230.jpg';
import codeReviewImg from './assets/images/code_review_preview_1792073446398.jpg';

// Multilingual Translations Dictionary (English, French, Hausa)
const t = {
  en: {
    brand: "DevBridge Africa",
    tagline: "Where African developers find jobs, mentors, code reviews, and local tech opportunities.",
    heroHeading: "Empowering African Tech Talent Across Borders & Languages",
    heroSub: "Connecting elite software engineers in Francophone and Anglophone Africa with high-growth remote jobs, elite mentors, and rigorous code reviews.",
    exploreJobs: "Explore Jobs",
    findMentor: "Find a Mentor",
    postJob: "Post a Job / Hire",
    navJobs: "Jobs & Opportunities",
    navMentors: "Mentorship",
    navReviews: "Code Reviews",
    navFeed: "Community Feed",
    navProjects: "Projects & Teams",
    navCrm: "Employer CRM",
    navProfile: "My Profile",
    ecosystemFr: "Francophone Ecosystem (Sénégal, CI, Cameroun, RDC, Maroc, Tunisie)",
    ecosystemEn: "Anglophone Ecosystem (Nigeria, Ghana, Kenya, Rwanda, South Africa)",
    featuresTitle: "Why Top African Engineers & Employers Choose DevBridge",
    featuresSub: "Built specifically for Africa's unique tech landscape, bridging linguistic boundaries between Francophone and Anglophone tech hubs.",
    pricingTitle: "Transparent Pricing & Value",
    pricingSub: "Free for community growth, with premium career acceleration and vetted hiring options.",
    pricingFreeTitle: "Community & Peer",
    pricingFreeDesc: "For junior & mid-level developers starting out.",
    pricingFreePrice: "Free Forever",
    pricingProTitle: "Pro Developer",
    pricingProDesc: "For engineers seeking high-paying remote contracts.",
    pricingProPrice: "$15 / month",
    pricingEmployerTitle: "Employer Talent Hub",
    pricingEmployerDesc: "For startups & enterprises hiring vetted talent.",
    pricingEmployerPrice: "$199 / job post",
    getStarted: "Get Started Free",
    subscribe: "Upgrade Now",
    hireTalent: "Hire Top Talent",
    searchPlaceholder: "Search jobs, skills, mentors, or topics...",
    allCountries: "All Countries",
    allStacks: "All Tech Stacks",
    applyNow: "Apply for Position",
    bookSession: "Book 1:1 Mentorship",
    requestReview: "Submit Code for Review",
    createPost: "Share an update, win, or question...",
    successApplied: "Application submitted successfully with GitHub verification!",
    successBooked: "Mentorship session booked successfully!",
    successReview: "Code review request submitted! An expert reviewer has been assigned.",
    footerText: "DevBridge Africa. Building the unified digital backbone for African software engineering excellence.",
    languages: "Languages",
    skills: "Skills",
    experience: "Experience",
    salaryRange: "Salary / Budget",
    workMode: "Work Mode",
    remote: "Remote",
    local: "Local / Hybrid",
    freelance: "Freelance",
    internship: "Internship"
  },
  fr: {
    brand: "DevBridge Africa",
    tagline: "Là où les développeurs africains trouvent emplois, mentors, revues de code et opportunités tech.",
    heroHeading: "Valoriser les Talents Tech Africains au-delà des Frontières et des Langues",
    heroSub: "Connectez les ingénieurs d'élite en Afrique francophone et anglophone avec des emplois distants, des mentors d'exception et des revues de code rigoureuses.",
    exploreJobs: "Explorer les Emplois",
    findMentor: "Trouver un Mentor",
    postJob: "Publier une Offre / Recruter",
    navJobs: "Emplois & Opportunités",
    navMentors: "Mentorat",
    navReviews: "Revues de Code",
    navFeed: "Fil Communautaire",
    navProjects: "Projets & Équipes",
    navCrm: "CRM Recruteur",
    navProfile: "Mon Profil",
    ecosystemFr: "Écosystème Francophone (Sénégal, CI, Cameroun, RDC, Maroc, Tunisie)",
    ecosystemEn: "Écosystème Anglophone (Nigeria, Ghana, Kenya, Rwanda, Afrique du Sud)",
    featuresTitle: "Pourquoi les Ingénieurs et Recruteurs Choisissent DevBridge",
    featuresSub: "Conçu pour le paysage technologique africain, brisant les barrières linguistiques entre hubs francophones et anglophones.",
    pricingTitle: "Tarification Transparente",
    pricingSub: "Gratuit pour la croissance communautaire, avec des options d'accélération de carrière et de recrutement.",
    pricingFreeTitle: "Communauté & Pair",
    pricingFreeDesc: "Pour les développeurs juniors et intermédiaires.",
    pricingFreePrice: "Gratuit à vie",
    pricingProTitle: "Développeur Pro",
    pricingProDesc: "Pour les ingénieurs visant des contrats internationaux.",
    pricingProPrice: "$15 / mois",
    pricingEmployerTitle: "Hub Recruteur",
    pricingEmployerDesc: "Pour les startups et entreprises recrutant des talents vérifiés.",
    pricingEmployerPrice: "$199 / offre",
    getStarted: "Commencer Gratuitement",
    subscribe: "Passer au Pro",
    hireTalent: "Recruter des Talents",
    searchPlaceholder: "Rechercher des emplois, compétences, mentors...",
    allCountries: "Tous les Pays",
    allStacks: "Toutes les Technologies",
    applyNow: "Postuler au Poste",
    bookSession: "Réserver un Mentorat 1:1",
    requestReview: "Soumettre du Code pour Revue",
    createPost: "Partagez une actualité, une victoire ou une question...",
    successApplied: "Candidature envoyée avec succès avec vérification GitHub !",
    successBooked: "Session de mentorat réservée avec succès !",
    successReview: "Demande de revue de code soumise ! Un expert a été assigné.",
    footerText: "DevBridge Africa. Construire le socle numérique de l'excellence en génie logiciel africain.",
    languages: "Langues",
    skills: "Compétences",
    experience: "Expérience",
    salaryRange: "Salaire / Budget",
    workMode: "Mode de Travail",
    remote: "Télétravail",
    local: "Présentiel / Hybride",
    freelance: "Freelance",
    internship: "Stage"
  },
  ha: {
    brand: "DevBridge Africa",
    tagline: "Inda masu habaka software a Afirka ke samun ayyuka, malamai, da guraren horo.",
    heroHeading: "Haɓaka Ƙwarewar Fasaha ta Afirka ta Fadin Harsuna da Yankuna",
    heroSub: "Haɗa ƙwararrun injiniyoyi a kasashen Afirka masu magana da Faransanci da Turanci tare da manyan ayyuka da ingantattun shawarwari.",
    exploreJobs: "Bincika Ayyuka",
    findMentor: "Nemi Malamin Horo",
    postJob: "Sanya Aiki / Daukar Ma'aikata",
    navJobs: "Ayyuka & Damammaki",
    navMentors: "Bayar da Horo",
    navReviews: "Binciken Lambar Code",
    navFeed: "Dandalin Al'umma",
    navProjects: "Ayudka & Ƙungiyoyi",
    navCrm: "CRM na Masu Aiki",
    navProfile: "Bayanan Bayanai na",
    ecosystemFr: "Yankin Faransanci (Senegal, Côte d'Ivoire, Cameroon, DRC)",
    ecosystemEn: "Yankin Turanci (Nigeria, Ghana, Kenya, Rwanda, South Africa)",
    featuresTitle: "Me yasa Kwararrun Afirka ke Zaban DevBridge",
    featuresSub: "An tsara shi musamman don yanayin fasaha na Afirka, yana kawar da shinge na harshe.",
    pricingTitle: "Farashi mai sauƙi da Gaskiya",
    pricingSub: "Kyauta ga ci gaban al'umma, tare da ingantattun zabuka na musamman.",
    pricingFreeTitle: "Al'umma",
    pricingFreeDesc: "Ga sabbin masu fara koyo.",
    pricingFreePrice: "Kyauta Har Abada",
    pricingProTitle: "Kwararren Mai Haɓakawa",
    pricingProDesc: "Ga injiniyoyin da ke neman manyan kwangiloli.",
    pricingProPrice: "$15 / wata",
    pricingEmployerTitle: "Dandalin Masu Aiki",
    pricingEmployerDesc: "Ga kamfanonin da ke neman ƙwararrun ma'aikata.",
    pricingEmployerPrice: "$199 / aiki",
    getStarted: "Fara Kyauta",
    subscribe: "Ci gaba zuwa Pro",
    hireTalent: "Dauki Kwararru",
    searchPlaceholder: "Bincika ayyuka, fasaha, ko malamai...",
    allCountries: "Duk Kasashe",
    allStacks: "Duk Fasahohi",
    applyNow: "Nemi Wannan Aiki",
    bookSession: "Yi Ajiyar Horo na 1:1",
    requestReview: "Aika da Code don Bincike",
    createPost: "Raba sabon labari ko tambaya...",
    successApplied: "An aika da takardar neman aiki cikin nasara!",
    successBooked: "An yi ajiyar lokacin horo cikin nasara!",
    successReview: "An karɓi buƙatar binciken code!",
    footerText: "DevBridge Africa. Gina kashin bayan dijital na kwarewar software a Afirka.",
    languages: "Harsuna",
    skills: "Fasaha",
    experience: "Kwarewa",
    salaryRange: "Alawus / Kasafin Kudi",
    workMode: "Yadda Ake Aiki",
    remote: "Nesa (Remote)",
    local: "Na Gida",
    freelance: "Kwangila",
    internship: "Horon Aiki"
  }
};

export default function App() {
  const [lang, setLang] = useState<'en' | 'fr' | 'ha'>('en');
  const [darkMode, setDarkMode] = useState(false);
  const [ecosystem, setEcosystem] = useState<'all' | 'francophone' | 'anglophone'>('all');
  const [activeTab, setActiveTab] = useState<'home' | 'jobs' | 'mentors' | 'reviews' | 'feed' | 'projects' | 'crm' | 'profile'>('home');
  
  // Modal states
  const [selectedJob, setSelectedJob] = useState<any | null>(null);
  const [selectedMentor, setSelectedMentor] = useState<any | null>(null);
  const [showPostModal, setShowPostModal] = useState(false);
  const [showJobModal, setShowJobModal] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Filter states for Jobs
  const [jobSearch, setJobSearch] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedStack, setSelectedStack] = useState('All');

  // CRM Candidates Pipeline State
  const [crmCandidates, setCrmCandidates] = useState([
    { id: 101, name: "Kofi Mensah", role: "Senior Full-Stack", stage: "Interview", match: "98%", country: "Ghana 🇬🇭", stack: ["React", "Node.js"] },
    { id: 102, name: "Fatou Diop", role: "Backend Engineer", stage: "Technical Review", match: "94%", country: "Senegal 🇸🇳", stack: ["Python", "Django"] },
    { id: 103, name: "Chinedu Okafor", role: "Mobile Lead", stage: "Sourced", match: "91%", country: "Nigeria 🇳🇬", stack: ["Flutter", "GraphQL"] },
    { id: 104, name: "Amina Benali", role: "DevOps Specialist", stage: "Offer", match: "96%", country: "Morocco 🇲🇦", stack: ["AWS", "Terraform"] }
  ]);

  // Posts State
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Amadou Diallo",
      role: "Senior Backend Engineer",
      country: "Senegal 🇸🇳",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
      content: "We just open-sourced our microservices boilerplate tailored for fintech scale in Francophone West Africa! Check out the GitHub repo and let's collaborate. #OpenSource #Fintech #Dakar",
      likes: 42,
      comments: 9,
      time: "2h ago",
      topic: "Open Source"
    },
    {
      id: 2,
      author: "Chiamaka Okafor",
      role: "Staff AI Engineer",
      country: "Nigeria 🇳🇬",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces",
      content: "Hosting a free community office hours this Thursday on optimizing RAG pipelines with LLMs in low-bandwidth environments. Both French and English speakers welcome! 🚀",
      likes: 88,
      comments: 15,
      time: "5h ago",
      topic: "AI / ML"
    }
  ]);

  const [newPostContent, setNewPostContent] = useState('');

  // Jobs Mock Data
  const jobsList = [
    {
      id: 1,
      title: "Senior Full-Stack React & Node Engineer",
      company: "KalaPay Fintech",
      location: "Dakar, Senegal (Remote option)",
      country: "Senegal",
      stack: ["React", "Node.js", "PostgreSQL"],
      type: "Remote / Full-Time",
      salary: "$3,500 - $5,000 / mo",
      ecosystem: "francophone",
      description: "Scale our pan-African payment gateway handling millions of transactions across UEMOA and CEMAC regions."
    },
    {
      id: 2,
      title: "Lead Mobile Flutter Developer",
      company: "Sokoni Logistics",
      location: "Nairobi, Kenya",
      country: "Kenya",
      stack: ["Flutter", "Dart", "GraphQL"],
      type: "Full-Time",
      salary: "$4,000 - $6,000 / mo",
      ecosystem: "anglophone",
      description: "Build last-mile logistics apps empowering tens of thousands of drivers across East Africa."
    },
    {
      id: 3,
      title: "DevOps & Cloud Infrastructure Specialist",
      company: "AfriCloud Solutions",
      location: "Abidjan, Côte d'Ivoire",
      country: "Côte d'Ivoire",
      stack: ["AWS", "Kubernetes", "Terraform"],
      type: "Freelance",
      salary: "$50 - $80 / hr",
      ecosystem: "francophone",
      description: "Help migrate enterprise banking workloads to secure multi-region cloud clusters."
    },
    {
      id: 4,
      title: "Python / Django Backend Engineer",
      company: "LagosHealth AI",
      location: "Lagos, Nigeria (Remote)",
      country: "Nigeria",
      stack: ["Python", "Django", "AI/ML"],
      type: "Remote",
      salary: "$3,000 - $4,500 / mo",
      ecosystem: "anglophone",
      description: "Build diagnostic AI microservices for telemedicine clinics across West Africa."
    },
    {
      id: 5,
      title: "Junior Frontend Developer (Bootcamp Grad)",
      company: "Tunis Digital Lab",
      location: "Tunis, Tunisia",
      country: "Tunisia",
      stack: ["React", "Tailwind CSS", "TypeScript"],
      type: "Internship",
      salary: "$800 - $1,200 / mo",
      ecosystem: "francophone",
      description: "Kickstart your career with mentorship from senior engineers building SaaS products."
    }
  ];

  // Mentors Mock Data
  const mentorsList = [
    {
      id: 1,
      name: "Dr. Ousmane Sonko",
      role: "Principal Architect at Orange Digital",
      country: "Senegal 🇸🇳",
      languages: ["French", "English"],
      specialties: ["System Design", "Cloud Architecture", "Career Growth"],
      rate: "$40 / hr",
      rating: 4.9,
      reviewsCount: 34,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces"
    },
    {
      id: 2,
      name: "Amina Mohammed",
      role: "Engineering Director at Flutterwave",
      country: "Nigeria 🇳🇬",
      languages: ["English"],
      specialties: ["Fintech Security", "Engineering Management", "Mock Interviews"],
      rate: "$60 / hr",
      rating: 5.0,
      reviewsCount: 58,
      avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop&crop=faces"
    },
    {
      id: 3,
      name: "Youssef Ben Ali",
      role: "Staff AI Researcher",
      country: "Morocco 🇲🇦",
      languages: ["French", "Arabic", "English"],
      specialties: ["Machine Learning", "NLP", "Python"],
      rate: "$50 / hr",
      rating: 4.8,
      reviewsCount: 29,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces"
    }
  ];

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const currentDict = t[lang];

  return (
    <div className={`min-h-screen transition-colors duration-200 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white px-6 py-3 rounded-xl shadow-xl flex items-center gap-3 animate-bounce">
          <CheckCircle2 className="w-5 h-5" />
          <span className="font-medium text-sm">{toastMessage}</span>
        </div>
      )}

      {/* Top Utility Bar */}
      <div className={`border-b px-4 py-2 text-xs flex flex-wrap items-center justify-between gap-4 ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-400' : 'bg-white border-slate-200 text-slate-600'}`}>
        <div className="flex items-center gap-4">
          <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> DevBridge Africa
          </span>
          <div className="hidden md:flex items-center gap-2">
            <button 
              onClick={() => setEcosystem('all')} 
              className={`px-2.5 py-1 rounded-md font-medium ${ecosystem === 'all' ? 'bg-emerald-600 text-white' : 'hover:bg-slate-200 dark:hover:bg-slate-800'}`}>
              Pan-Africa 🌍
            </button>
            <button 
              onClick={() => setEcosystem('francophone')} 
              className={`px-2.5 py-1 rounded-md font-medium ${ecosystem === 'francophone' ? 'bg-emerald-600 text-white' : 'hover:bg-slate-200 dark:hover:bg-slate-800'}`}>
              Francophone (FR) 🇫🇷
            </button>
            <button 
              onClick={() => setEcosystem('anglophone')} 
              className={`px-2.5 py-1 rounded-md font-medium ${ecosystem === 'anglophone' ? 'bg-emerald-600 text-white' : 'hover:bg-slate-200 dark:hover:bg-slate-800'}`}>
              Anglophone (EN) 🇬🇧
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Language Selector */}
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
            <button 
              onClick={() => setLang('en')} 
              className={`px-2 py-0.5 text-xs font-semibold rounded ${lang === 'en' ? 'bg-white dark:bg-slate-700 shadow-sm text-emerald-600 dark:text-emerald-400' : 'text-slate-600 dark:text-slate-400'}`}>
              EN
            </button>
            <button 
              onClick={() => setLang('fr')} 
              className={`px-2 py-0.5 text-xs font-semibold rounded ${lang === 'fr' ? 'bg-white dark:bg-slate-700 shadow-sm text-emerald-600 dark:text-emerald-400' : 'text-slate-600 dark:text-slate-400'}`}>
              FR
            </button>
            <button 
              onClick={() => setLang('ha')} 
              className={`px-2 py-0.5 text-xs font-semibold rounded ${lang === 'ha' ? 'bg-white dark:bg-slate-700 shadow-sm text-emerald-600 dark:text-emerald-400' : 'text-slate-600 dark:text-slate-400'}`}>
              HA
            </button>
          </div>

          {/* Dark Mode Toggle */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-emerald-600"
            title="Toggle theme">
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Main Top Navbar Contract */}
      <header className={`sticky top-0 z-40 backdrop-blur-md border-b px-6 py-4 flex items-center justify-between gap-8 ${darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white/80 border-slate-200'}`}>
        
        {/* Zone 1: Brand wordmark */}
        <div className="flex items-center gap-3 shrink-0 cursor-pointer" onClick={() => setActiveTab('home')}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-amber-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
            DB
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight">{currentDict.brand}</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">Africa Tech Ecosystem</p>
          </div>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 text-sm font-medium">
          <button 
            onClick={() => setActiveTab('home')} 
            className={`transition-colors whitespace-nowrap ${activeTab === 'home' ? 'text-emerald-600 font-semibold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}>
            Home
          </button>
          <button 
            onClick={() => setActiveTab('jobs')} 
            className={`transition-colors whitespace-nowrap ${activeTab === 'jobs' ? 'text-emerald-600 font-semibold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}>
            {currentDict.navJobs}
          </button>
          <button 
            onClick={() => setActiveTab('mentors')} 
            className={`transition-colors whitespace-nowrap ${activeTab === 'mentors' ? 'text-emerald-600 font-semibold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}>
            {currentDict.navMentors}
          </button>
          <button 
            onClick={() => setActiveTab('reviews')} 
            className={`transition-colors whitespace-nowrap ${activeTab === 'reviews' ? 'text-emerald-600 font-semibold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}>
            {currentDict.navReviews}
          </button>
          <button 
            onClick={() => setActiveTab('feed')} 
            className={`transition-colors whitespace-nowrap ${activeTab === 'feed' ? 'text-emerald-600 font-semibold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}>
            {currentDict.navFeed}
          </button>
          <button 
            onClick={() => setActiveTab('crm')} 
            className={`transition-colors whitespace-nowrap flex items-center gap-1 ${activeTab === 'crm' ? 'text-emerald-600 font-semibold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}>
            <Kanban className="w-3.5 h-3.5" /> {currentDict.navCrm}
          </button>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button 
            onClick={() => setActiveTab('profile')} 
            className={`px-3.5 py-2 text-xs font-semibold rounded-lg border transition-colors flex items-center gap-1.5 ${activeTab === 'profile' ? 'bg-emerald-600 text-white border-emerald-600' : 'border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800'}`}>
            <User className="w-4 h-4" />
            <span className="hidden sm:inline">{currentDict.navProfile}</span>
          </button>
          <button 
            onClick={() => setShowJobModal(true)}
            className="px-4 py-2 text-xs font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-500 transition-colors shadow-sm flex items-center gap-1.5 whitespace-nowrap">
            <Plus className="w-4 h-4" />
            <span>{currentDict.postJob}</span>
          </button>
        </div>

      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 py-8">

        {/* TAB 1: HOME LANDING PAGE */}
        {activeTab === 'home' && (
          <div className="space-y-16">
            
            {/* Hero Section (2-Column Design) */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" /> Francophone & Anglophone Africa Unified
                </div>
                <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-wrap balance">
                  {currentDict.heroHeading}
                </h1>
                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {currentDict.heroSub}
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button 
                    onClick={() => setActiveTab('jobs')}
                    className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-500 shadow-lg shadow-emerald-600/20 flex items-center gap-2">
                    {currentDict.exploreJobs} <ArrowRight className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setActiveTab('mentors')}
                    className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 font-semibold text-sm hover:bg-slate-100 dark:hover:bg-slate-800">
                    {currentDict.findMentor}
                  </button>
                </div>

                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
                  <div>
                    <p className="text-2xl font-bold font-mono text-emerald-600">4,800+</p>
                    <p className="text-xs text-slate-500">Vetted Engineers</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold font-mono text-amber-500">320+</p>
                    <p className="text-xs text-slate-500">Partner Startups</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold font-mono text-emerald-600">18</p>
                    <p className="text-xs text-slate-500">African Countries</p>
                  </div>
                </div>
              </div>

              {/* Hero Image / Product Demo */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 group">
                <img 
                  src={heroDevsImg} 
                  alt="African developers collaborating" 
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs uppercase tracking-wider text-amber-400 font-semibold">Live Ecosystem</p>
                    <p className="text-lg font-bold">Lagos, Dakar, Nairobi & Casablanca Tech Hubs</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Features & Benefits Section */}
            <section className="space-y-12 pt-12">
              <div className="text-center max-w-2xl mx-auto space-y-3">
                <h2 className="text-3xl font-bold tracking-tight">{currentDict.featuresTitle}</h2>
                <p className="text-sm text-slate-600 dark:text-slate-400">{currentDict.featuresSub}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} space-y-4 shadow-sm`}>
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-lg">
                    01
                  </div>
                  <h3 className="text-lg font-bold">Bilingual Developer Profiles</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Seamlessly switch between French and English. Showcase your GitHub contributions, verified technical assessments, and stack expertise.
                  </p>
                </div>

                <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} space-y-4 shadow-sm`}>
                  <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-lg">
                    02
                  </div>
                  <h3 className="text-lg font-bold">Expert Code Reviews</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Submit your GitHub repo or PR for rigorous architecture, security, and performance reviews by senior engineers across Africa.
                  </p>
                </div>

                <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} space-y-4 shadow-sm`}>
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-lg">
                    03
                  </div>
                  <h3 className="text-lg font-bold">Targeted Job Matching</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Access vetted remote roles, local startups, and freelance client requests without relying on informal WhatsApp groups or noisy feeds.
                  </p>
                </div>
              </div>
            </section>

            {/* AEO / GEO FAQ Section */}
            <section className="space-y-8 pt-12 border-t border-slate-200 dark:border-slate-800">
              <div className="text-center max-w-2xl mx-auto space-y-3">
                <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
                <p className="text-sm text-slate-600 dark:text-slate-400">Everything you need to know about DevBridge Africa and our technical network.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} space-y-2`}>
                  <h3 className="font-bold text-base">How does DevBridge connect Francophone and Anglophone developers?</h3>
                  <p className="text-sm text-slate-500">Our platform supports both ecosystems natively with automatic translation of community posts and bilingual job postings across West, East, North, and South Africa.</p>
                </div>
                <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} space-y-2`}>
                  <h3 className="font-bold text-base">How are developers vetted on the platform?</h3>
                  <p className="text-sm text-slate-500">Developers verify their identity and skills through GitHub activity sync, completed open-source contributions, and mentor-endorsed code reviews.</p>
                </div>
              </div>
            </section>

          </div>
        )}

        {/* TAB 2: JOBS & OPPORTUNITIES */}
        {activeTab === 'jobs' && (
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">{currentDict.navJobs}</h2>
                <p className="text-sm text-slate-500">Discover vetted full-time roles, remote gigs, and freelance contracts.</p>
              </div>
              <button 
                onClick={() => setShowJobModal(true)}
                className="px-4 py-2 bg-emerald-600 text-white text-xs font-semibold rounded-lg hover:bg-emerald-500 flex items-center gap-1.5 shadow-sm">
                <Plus className="w-4 h-4" /> {currentDict.postJob}
              </button>
            </div>

            {/* Filter Bar */}
            <div className={`p-4 rounded-xl border flex flex-wrap items-center gap-4 ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div className="flex-1 min-w-[240px] relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder={currentDict.searchPlaceholder}
                  value={jobSearch}
                  onChange={(e) => setJobSearch(e.target.value)}
                  className={`w-full pl-10 pr-4 py-2 rounded-lg text-sm border focus:outline-none focus:ring-2 focus:ring-emerald-500 ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-slate-50 border-slate-300 text-slate-900'}`}
                />
              </div>

              <select 
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className={`px-3 py-2 rounded-lg text-sm border focus:outline-none ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-slate-50 border-slate-300 text-slate-900'}`}>
                <option value="All">{currentDict.allCountries}</option>
                <option value="Senegal">Senegal 🇸🇳</option>
                <option value="Nigeria">Nigeria 🇳🇬</option>
                <option value="Kenya">Kenya 🇰🇪</option>
                <option value="Côte d'Ivoire">Côte d'Ivoire 🇨🇮</option>
                <option value="Tunisia">Tunisia 🇹🇳</option>
              </select>

              <select 
                value={selectedStack}
                onChange={(e) => setSelectedStack(e.target.value)}
                className={`px-3 py-2 rounded-lg text-sm border focus:outline-none ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-slate-50 border-slate-300 text-slate-900'}`}>
                <option value="All">{currentDict.allStacks}</option>
                <option value="React">React</option>
                <option value="Node.js">Node.js</option>
                <option value="Flutter">Flutter</option>
                <option value="Python">Python</option>
                <option value="AWS">AWS / DevOps</option>
              </select>
            </div>

            {/* Jobs List */}
            <div className="space-y-4">
              {jobsList
                .filter(job => selectedCountry === 'All' || job.country === selectedCountry)
                .filter(job => selectedStack === 'All' || job.stack.includes(selectedStack))
                .filter(job => ecosystem === 'all' || job.ecosystem === ecosystem)
                .map(job => (
                  <div key={job.id} className={`p-6 rounded-xl border transition-all hover:shadow-md ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} flex flex-col md:flex-row md:items-center justify-between gap-6`}>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-bold hover:text-emerald-600 cursor-pointer">{job.title}</h3>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                          {job.type}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-400">{job.company} · <span className="text-emerald-600">{job.location}</span></p>
                      <p className="text-xs text-slate-500 leading-relaxed">{job.description}</p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {job.stack.map(s => (
                          <span key={s} className="px-2 py-0.5 rounded text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
                      <span className="text-sm font-bold font-mono text-emerald-600">{job.salary}</span>
                      <button 
                        onClick={() => setSelectedJob(job)}
                        className="px-4 py-2 bg-emerald-600 text-white text-xs font-semibold rounded-lg hover:bg-emerald-500 shadow-sm">
                        {currentDict.applyNow}
                      </button>
                    </div>
                  </div>
              ))}
            </div>

          </div>
        )}

        {/* TAB 3: MENTORSHIP */}
        {activeTab === 'mentors' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">{currentDict.navMentors}</h2>
              <p className="text-sm text-slate-500">Book 1:1 sessions, resume reviews, and mock interviews with senior African tech leaders.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mentorsList.map(mentor => (
                <div key={mentor.id} className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} space-y-4 flex flex-col justify-between shadow-sm`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <img src={mentor.avatar} alt={mentor.name} className="w-16 h-16 rounded-full object-cover border-2 border-emerald-500" referrerPolicy="no-referrer" />
                      <div>
                        <h3 className="font-bold text-base">{mentor.name}</h3>
                        <p className="text-xs text-slate-500">{mentor.role}</p>
                        <p className="text-xs font-semibold text-emerald-600 mt-0.5">{mentor.country}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 text-xs text-amber-500 font-semibold">
                      <Star className="w-4 h-4 fill-amber-500" />
                      <span>{mentor.rating} ({mentor.reviewsCount} reviews)</span>
                    </div>

                    <div className="space-y-1">
                      <p className="text-xs font-semibold text-slate-400">Specialties:</p>
                      <div className="flex flex-wrap gap-1">
                        {mentor.specialties.map(s => (
                          <span key={s} className="px-2 py-0.5 rounded text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">Rate</span>
                      <p className="text-sm font-bold font-mono text-emerald-600">{mentor.rate}</p>
                    </div>
                    <button 
                      onClick={() => triggerToast(`Booking request sent to ${mentor.name}!`)}
                      className="px-4 py-2 bg-emerald-600 text-white text-xs font-semibold rounded-lg hover:bg-emerald-500">
                      {currentDict.bookSession}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: CODE REVIEWS */}
        {activeTab === 'reviews' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">{currentDict.navReviews}</h2>
              <p className="text-sm text-slate-500">Submit your GitHub pull request or code repository for expert architecture, security, and performance feedback.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className={`p-8 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} space-y-6 shadow-sm`}>
                <h3 className="text-xl font-bold">Request Expert Code Review</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">GitHub Repository or PR URL</label>
                    <input 
                      type="text" 
                      placeholder="https://github.com/username/repo/pull/314" 
                      className={`w-full px-4 py-2 rounded-lg text-sm border focus:outline-none focus:ring-2 focus:ring-emerald-500 ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-slate-50 border-slate-300 text-slate-900'}`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">Review Focus</label>
                    <select className={`w-full px-4 py-2 rounded-lg text-sm border focus:outline-none ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-slate-50 border-slate-300 text-slate-900'}`}>
                      <option>Architecture & Scalability</option>
                      <option>Security & Vulnerability Audit</option>
                      <option>Performance & Query Optimization</option>
                      <option>Junior to Senior Interview Readiness</option>
                    </select>
                  </div>

                  <button 
                    onClick={() => triggerToast(currentDict.successReview)}
                    className="w-full py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-500 shadow-md">
                    {currentDict.requestReview}
                  </button>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                <img 
                  src={codeReviewImg} 
                  alt="Code review preview" 
                  className="w-full h-[380px] object-cover" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: COMMUNITY FEED */}
        {activeTab === 'feed' && (
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">{currentDict.navFeed}</h2>
                <p className="text-sm text-slate-500">Local tech meetups, hackathons, wins, and open-source discussions.</p>
              </div>
              <button 
                onClick={() => setShowPostModal(true)}
                className="px-4 py-2 bg-emerald-600 text-white text-xs font-semibold rounded-lg hover:bg-emerald-500 flex items-center gap-1.5 shadow-sm">
                <Plus className="w-4 h-4" /> New Post
              </button>
            </div>

            <div className="space-y-6">
              {posts.map(post => (
                <div key={post.id} className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} space-y-4 shadow-sm`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={post.avatar} alt={post.author} className="w-10 h-10 rounded-full object-cover border border-emerald-500" referrerPolicy="no-referrer" />
                      <div>
                        <h3 className="font-bold text-sm">{post.author}</h3>
                        <p className="text-xs text-slate-500">{post.role} · <span className="text-emerald-600">{post.country}</span></p>
                      </div>
                    </div>
                    <span className="text-xs text-slate-400">{post.time}</span>
                  </div>

                  <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{post.content}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 font-medium">
                    <button onClick={() => triggerToast("Liked post!")} className="flex items-center gap-1.5 hover:text-emerald-600">
                      <ThumbsUp className="w-4 h-4" /> {post.likes} Likes
                    </button>
                    <button className="flex items-center gap-1.5 hover:text-emerald-600">
                      <MessageSquare className="w-4 h-4" /> {post.comments} Comments
                    </button>
                    <button onClick={() => triggerToast("Saved to bookmarks!")} className="flex items-center gap-1.5 hover:text-emerald-600">
                      <Bookmark className="w-4 h-4" /> Save
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: EMPLOYER CRM / TALENT PIPELINE */}
        {activeTab === 'crm' && (
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Employer Talent CRM & Pipeline</h2>
                <p className="text-sm text-slate-500">Track and manage vetted African developer applications across recruitment stages.</p>
              </div>
              <button 
                onClick={() => triggerToast("Candidate invite link generated!")}
                className="px-4 py-2 bg-emerald-600 text-white text-xs font-semibold rounded-lg hover:bg-emerald-500 flex items-center gap-1.5 shadow-sm">
                <Plus className="w-4 h-4" /> Sourced Candidate
              </button>
            </div>

            {/* CRM Kanban / Pipeline View */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {['Sourced', 'Technical Review', 'Interview', 'Offer'].map(stage => (
                <div key={stage} className={`p-4 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} space-y-4`}>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                    <h3 className="font-bold text-sm">{stage}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 font-mono">
                      {crmCandidates.filter(c => c.stage === stage).length}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {crmCandidates
                      .filter(c => c.stage === stage)
                      .map(candidate => (
                        <div key={candidate.id} className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-300'} space-y-3`}>
                          <div className="flex items-center justify-between">
                            <h4 className="font-bold text-sm">{candidate.name}</h4>
                            <span className="text-xs font-mono text-emerald-600 font-bold">{candidate.match} Match</span>
                          </div>
                          <p className="text-xs text-slate-500">{candidate.role} · {candidate.country}</p>
                          <div className="flex flex-wrap gap-1">
                            {candidate.stack.map(s => (
                              <span key={s} className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-100 dark:bg-emerald-950 text-emerald-600">
                                {s}
                              </span>
                            ))}
                          </div>
                          <button 
                            onClick={() => triggerToast(`Sent interview invite to ${candidate.name}!`)}
                            className="w-full py-1.5 bg-emerald-600 text-white text-xs font-semibold rounded-lg hover:bg-emerald-500">
                            Schedule Interview
                          </button>
                        </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 7: DEVELOPER PROFILE */}
        {activeTab === 'profile' && (
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">{currentDict.navProfile}</h2>
              <p className="text-sm text-slate-500">Manage your professional identity, GitHub verification, and work preferences.</p>
            </div>

            <div className={`p-8 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} space-y-6 shadow-sm`}>
              <div className="flex items-center gap-6">
                <img 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=faces" 
                  alt="Profile" 
                  className="w-20 h-20 rounded-full object-cover border-2 border-emerald-500"
                  referrerPolicy="no-referrer"
                />
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Kofi Mensah</h3>
                  <p className="text-xs text-slate-500">Senior Full-Stack Engineer · Accra, Ghana 🇬🇭</p>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-600">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Open to Remote Work
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1">GitHub Profile</label>
                  <input type="text" defaultValue="https://github.com/kofimensah" className={`w-full px-3 py-2 rounded-lg text-sm border ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-300'}`} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1">Preferred Language</label>
                  <select className={`w-full px-3 py-2 rounded-lg text-sm border ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-300'}`}>
                    <option>English & French (Bilingual)</option>
                    <option>English Only</option>
                    <option>French Only</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Skills & Technologies</label>
                <div className="flex flex-wrap gap-2 pt-1">
                  {['React', 'TypeScript', 'Node.js', 'Python', 'Flutter', 'PostgreSQL', 'AWS', 'Docker'].map(s => (
                    <span key={s} className="px-3 py-1 rounded-lg text-xs font-mono bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-semibold">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <button onClick={() => triggerToast("Profile updated successfully!")} className="px-6 py-3 bg-emerald-600 text-white font-semibold text-sm rounded-xl hover:bg-emerald-500 shadow-md">
                Save Profile Changes
              </button>
            </div>
          </div>
        )}

      </main>

      {/* JOB APPLICATION MODAL */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className={`max-w-lg w-full p-8 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} space-y-6 shadow-2xl relative`}>
            <button onClick={() => setSelectedJob(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
              <X className="w-5 h-5" />
            </button>
            <div>
              <h3 className="text-xl font-bold">{selectedJob.title}</h3>
              <p className="text-xs text-emerald-600 font-semibold">{selectedJob.company} · {selectedJob.location}</p>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">{selectedJob.description}</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Cover Note / Why you?</label>
                <textarea rows={3} placeholder="Briefly explain your experience with this stack..." className={`w-full px-3 py-2 rounded-lg text-sm border ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-slate-50 border-slate-300 text-slate-900'}`}></textarea>
              </div>

              <button 
                onClick={() => {
                  triggerToast(currentDict.successApplied);
                  setSelectedJob(null);
                }}
                className="w-full py-3 bg-emerald-600 text-white font-semibold text-sm rounded-xl hover:bg-emerald-500 shadow-md">
                {currentDict.applyNow}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* POST MODAL */}
      {showPostModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className={`max-w-lg w-full p-8 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} space-y-6 shadow-2xl relative`}>
            <button onClick={() => setShowPostModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-bold">Create Community Post</h3>
            <textarea 
              rows={4} 
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
              placeholder="Share a tech win, question, or open-source announcement..." 
              className={`w-full px-4 py-3 rounded-xl text-sm border ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-slate-50 border-slate-300 text-slate-900'}`}></textarea>
            
            <button 
              onClick={() => {
                if (newPostContent.trim()) {
                  setPosts([{
                    id: Date.now(),
                    author: "You (Developer)",
                    role: "Software Engineer",
                    country: "Africa 🌍",
                    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=faces",
                    content: newPostContent,
                    likes: 1,
                    comments: 0,
                    time: "Just now",
                    topic: "General"
                  }, ...posts]);
                  setNewPostContent('');
                  setShowPostModal(false);
                  triggerToast("Post published successfully!");
                }
              }}
              className="w-full py-3 bg-emerald-600 text-white font-semibold text-sm rounded-xl hover:bg-emerald-500 shadow-md">
              Publish Post
            </button>
          </div>
        </div>
      )}

      {/* JOB POSTING MODAL */}
      {showJobModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className={`max-w-lg w-full p-8 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} space-y-6 shadow-2xl relative`}>
            <button onClick={() => setShowJobModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-bold">Post a Job / Hire African Talent</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Job Title</label>
                <input type="text" placeholder="Senior Backend Engineer" className={`w-full px-3 py-2 rounded-lg text-sm border ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-slate-50 border-slate-300 text-slate-900'}`} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Company Name</label>
                <input type="text" placeholder="Acme Africa" className={`w-full px-3 py-2 rounded-lg text-sm border ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-slate-50 border-slate-300 text-slate-900'}`} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Salary Budget</label>
                <input type="text" placeholder="$3,000 - $5,000 / mo" className={`w-full px-3 py-2 rounded-lg text-sm border ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-slate-50 border-slate-300 text-slate-900'}`} />
              </div>
              <button 
                onClick={() => {
                  setShowJobModal(false);
                  triggerToast("Job posted successfully to both Francophone & Anglophone feeds!");
                }}
                className="w-full py-3 bg-emerald-600 text-white font-semibold text-sm rounded-xl hover:bg-emerald-500 shadow-md">
                Publish Job Listing ($199)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className={`border-t py-12 px-6 mt-20 ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-400' : 'bg-white border-slate-200 text-slate-600'}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold">
              DB
            </div>
            <span className="font-bold text-sm">{currentDict.footerText}</span>
          </div>
          <div className="flex items-center gap-6 text-xs font-medium">
            <a href="#" className="hover:text-emerald-600">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-600">Terms of Service</a>
            <a href="#" className="hover:text-emerald-600">Support / Contact</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
