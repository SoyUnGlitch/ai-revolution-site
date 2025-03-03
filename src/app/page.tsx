import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'AI Revolution | Powered by AI',
  description: 'Revolutionize your business with AI solutions',
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-950 via-slate-900 to-teal-950 text-white">
      {/* Apple-inspired Navigation */}
      <nav className="backdrop-blur-xl bg-white/5 py-5 px-6 fixed w-full z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-white font-bold text-2xl flex items-center">
              <span className="text-3xl mr-1 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">∞</span> 
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">intellitech</span>
            </div>
          </div>
          
          {/* Apple-inspired Menu */}
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-10">
              {/* EXP Dropdown */}
              <li className="group relative">
                <button className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors duration-300 flex items-center">
                  EXP
                  <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-36 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <div className="py-2 backdrop-blur-xl bg-white/10 border border-white/10 rounded-lg shadow-xl">
                    <ul>
                      {['001', '002'].map((item, index) => (
                        <li key={index}>
                          <Link href={`/exp/${item.toLowerCase()}`} className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-200">
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
              
              {/* Eventos Dropdown */}
              <li className="group relative">
                <button className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors duration-300 flex items-center">
                  Eventos
                  <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-36 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <div className="py-2 backdrop-blur-xl bg-white/10 border border-white/10 rounded-lg shadow-xl">
                    <ul>
                      {['V1', 'V2', 'Agentes'].map((item, index) => (
                        <li key={index}>
                          <Link href={`/eventos/${item.toLowerCase()}`} className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-200">
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
              
              {/* Regular Menu Items */}
              <li>
                <Link href="/historia" className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors duration-300">
                  Historia
                </Link>
              </li>
              <li>
                <Link href="/autor" className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors duration-300">
                  Autor
                </Link>
              </li>
            </ul>
          </div>
          
          <button className="relative overflow-hidden group px-5 py-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,178,172,0.5)]">
            <span className="relative z-10">Register Now</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </nav>

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10"></div>
          </div>
          
          {/* Floating 3D elements */}
          <div className="absolute top-40 right-20 w-64 h-64 rounded-full bg-gradient-to-r from-teal-500/10 to-blue-500/10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Floating glass elements */}
          <div className="absolute top-1/4 left-1/3 w-32 h-32 border border-white/10 rounded-full backdrop-blur-sm rotate-45 animate-float"></div>
          <div className="absolute bottom-1/4 right-1/3 w-16 h-16 border border-white/10 rounded-full backdrop-blur-sm -rotate-12 animate-float-slow"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 border border-white/10 rounded-full backdrop-blur-sm rotate-12 animate-float-slower"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-teal-300 to-blue-300">
                The Future is <br/>AI-Powered
              </h1>
              <p className="text-white/80 text-xl mb-8 max-w-2xl">
                Elevate your business with cutting-edge AI solutions that transform possibilities into realities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative px-8 py-4 rounded-full overflow-hidden">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-teal-500 to-blue-500 transition-all duration-300 group-hover:scale-105"></span>
                  <span className="absolute inset-0 w-full h-full backdrop-blur-md bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10 font-medium text-white">Experience Now</span>
                </button>
                <button className="group relative px-8 py-4 rounded-full overflow-hidden">
                  <span className="absolute inset-0 w-full h-full border border-white/20 transition-all duration-300 group-hover:border-white/40 group-hover:scale-105"></span>
                  <span className="absolute inset-0 w-full h-full backdrop-blur-md bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10 font-medium text-white/80 group-hover:text-white">Learn More</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Section - Inspired by Reference Image */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/30 to-transparent"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-white/5 backdrop-blur-md border border-white/10 text-teal-300 mb-4">Features</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-white">
                joshuacastro.ai: El Futuro es Hoy
              </h2>
              <p className="text-white/70 max-w-2xl text-lg">
                Experimenta eventos únicos e inmersivos creados completamente con IA, mostrando la evolución constante de la inteligencia artificial. Aprende cómo se construyen en tiempo real y prepárate para integrar la IA en tu vida diaria.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
                <div className="relative backdrop-blur-xl bg-white/5 p-1 rounded-2xl border border-white/10 shadow-xl">
                  <div className="aspect-video rounded-xl overflow-hidden">
                    <Image 
                      src="/api/placeholder/1200/800" 
                      alt="AI Visualization" 
                      width={1200}
                      height={800}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-teal-400 to-blue-400"></div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
                </div>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "IA Generativa",
                    description: "Sistemas que crean contenido original basado en patrones aprendidos.",
                    icon: (
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.5 14.5L3 14.5M14.5 9.5L14.5 3M21 14.5H14.5V21M3 9.5H9.5V3" stroke="url(#paint0_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <defs>
                          <linearGradient id="paint0_linear" x1="3" y1="12" x2="21" y2="12" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#2DD4BF"/>
                            <stop offset="1" stopColor="#38BDF8"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    )
                  },
                  {
                    title: "Agentes",
                    description: "Entidades autónomas que toman decisiones y ejecutan tareas complejas.",
                    icon: (
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 19C4.58172 19 1 15.4183 1 11C1 6.58172 4.58172 3 9 3C13.4183 3 17 6.58172 17 11C17 15.4183 13.4183 19 9 19Z" stroke="url(#paint0_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M23 19L17 13" stroke="url(#paint1_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <defs>
                          <linearGradient id="paint0_linear" x1="1" y1="11" x2="17" y2="11" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#2DD4BF"/>
                            <stop offset="1" stopColor="#38BDF8"/>
                          </linearGradient>
                          <linearGradient id="paint1_linear" x1="17" y1="16" x2="23" y2="16" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#2DD4BF"/>
                            <stop offset="1" stopColor="#38BDF8"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    )
                  },
                  {
                    title: "Futuro de la IA",
                    description: "Explorando las posibilidades y el impacto de la inteligencia artificial avanzada.",
                    icon: (
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="url(#paint0_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 2V4" stroke="url(#paint1_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 20V22" stroke="url(#paint2_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4.93 4.93L6.34 6.34" stroke="url(#paint3_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17.66 17.66L19.07 19.07" stroke="url(#paint4_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 12H4" stroke="url(#paint5_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M20 12H22" stroke="url(#paint6_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6.34 17.66L4.93 19.07" stroke="url(#paint7_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19.07 4.93L17.66 6.34" stroke="url(#paint8_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <defs>
                          <linearGradient id="paint0_linear" x1="8" y1="12" x2="16" y2="12" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#2DD4BF"/>
                            <stop offset="1" stopColor="#38BDF8"/>
                          </linearGradient>
                          <linearGradient id="paint1_linear" x1="12" y1="3" x2="13" y2="3" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#2DD4BF"/>
                            <stop offset="1" stopColor="#38BDF8"/>
                          </linearGradient>
                          <linearGradient id="paint2_linear" x1="12" y1="21" x2="13" y2="21" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#2DD4BF"/>
                            <stop offset="1" stopColor="#38BDF8"/>
                          </linearGradient>
                          <linearGradient id="paint3_linear" x1="4.93" y1="5.635" x2="6.34" y2="5.635" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#2DD4BF"/>
                            <stop offset="1" stopColor="#38BDF8"/>
                          </linearGradient>
                          <linearGradient id="paint4_linear" x1="17.66" y1="18.365" x2="19.07" y2="18.365" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#2DD4BF"/>
                            <stop offset="1" stopColor="#38BDF8"/>
                          </linearGradient>
                          <linearGradient id="paint5_linear" x1="2" y1="12.5" x2="4" y2="12.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#2DD4BF"/>
                            <stop offset="1" stopColor="#38BDF8"/>
                          </linearGradient>
                          <linearGradient id="paint6_linear" x1="20" y1="12.5" x2="22" y2="12.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#2DD4BF"/>
                            <stop offset="1" stopColor="#38BDF8"/>
                          </linearGradient>
                          <linearGradient id="paint7_linear" x1="4.93" y1="18.365" x2="6.34" y2="18.365" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#2DD4BF"/>
                            <stop offset="1" stopColor="#38BDF8"/>
                          </linearGradient>
                          <linearGradient id="paint8_linear" x1="17.66" y1="5.635" x2="19.07" y2="5.635" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#2DD4BF"/>
                            <stop offset="1" stopColor="#38BDF8"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    )
                  },
                  {
                    title: "Deepfakes",
                    description: "Tecnología que permite crear contenido sintético ultrarrealista.",
                    icon: (
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 3H15M12 3V21M12 21H18M12 21H6" stroke="url(#paint0_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <defs>
                          <linearGradient id="paint0_linear" x1="6" y1="12" x2="18" y2="12" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#2DD4BF"/>
                            <stop offset="1" stopColor="#38BDF8"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    )
                  }
                ].map((feature, index) => (
                  <div key={index} className="group relative">
                    <div className="relative backdrop-blur-xl bg-white/5 p-6 rounded-xl border border-white/10 shadow-xl transition-all duration-300 group-hover:border-white/20 group-hover:translate-y-[-2px]">
                      <div className="flex items-start">
                        <div className="mr-4 p-2 rounded-lg bg-white/5 border border-white/10">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                          <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-950/30 to-transparent"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="mb-16 text-center">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-white/5 backdrop-blur-md border border-white/10 text-teal-300 mb-4">CAPABILITIES</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-300">
                Intelligent Solutions
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Discover how our AI-powered features can transform your workflow and boost productivity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature Cards */}
              {[
                {
                  title: "Predictive Intelligence",
                  description: "Anticipate market trends and customer needs with our advanced AI algorithms.",
                  icon: (
                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="url(#paint0_linear)" strokeWidth="1.5"/>
                      <path d="M12 7V12L15 15" stroke="url(#paint1_linear)" strokeWidth="1.5" strokeLinecap="round"/>
                      <defs>
                        <linearGradient id="paint0_linear" x1="3" y1="12" x2="21" y2="12" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#2DD4BF"/>
                          <stop offset="1" stopColor="#38BDF8"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="12" y1="11" x2="15" y2="15" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#2DD4BF"/>
                          <stop offset="1" stopColor="#38BDF8"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  )
                },
                {
                  title: "Neural Networks",
                  description: "Leverage deep learning models that adapt and evolve with your business needs.",
                  icon: (
                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5V19M5 12H19" stroke="url(#paint0_linear)" strokeWidth="1.5" strokeLinecap="round"/>
                      <circle cx="12" cy="12" r="10" stroke="url(#paint1_linear)" strokeWidth="1.5"/>
                      <defs>
                        <linearGradient id="paint0_linear" x1="5" y1="12" x2="19" y2="12" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#2DD4BF"/>
                          <stop offset="1" stopColor="#38BDF8"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="2" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#2DD4BF"/>
                          <stop offset="1" stopColor="#38BDF8"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  )
                },
                {
                  title: "Quantum Processing",
                  description: "Experience computational power that solves complex problems in milliseconds.",
                  icon: (
                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 3V21M3 12H21" stroke="url(#paint0_linear)" strokeWidth="1.5" strokeLinecap="round"/>
                      <circle cx="12" cy="12" r="2" stroke="url(#paint1_linear)" strokeWidth="1.5"/>
                      <defs>
                        <linearGradient id="paint0_linear" x1="3" y1="12" x2="21" y2="12" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#2DD4BF"/>
                          <stop offset="1" stopColor="#38BDF8"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="10" y1="12" x2="14" y2="12" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#2DD4BF"/>
                          <stop offset="1" stopColor="#38BDF8"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  )
                }
              ].map((feature, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative h-full backdrop-blur-xl bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl transition-all duration-300 group-hover:border-white/20 group-hover:translate-y-[-5px]">
                    <div className="mb-6 p-3 w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                    <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Showcase Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/30 to-transparent"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-white/5 backdrop-blur-md border border-white/10 text-blue-300 mb-4">INNOVATION</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">
                  Visualize the Future
                </h2>
                <p className="text-white/60 mb-8">
                  Our 3D visualization technology allows you to see complex data patterns and make informed decisions with unprecedented clarity.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Real-time 3D data visualization",
                    "Interactive holographic interfaces",
                    "Spatial computing integration"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-teal-400 to-blue-400 flex items-center justify-center mr-3">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span className="text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
                <div className="relative backdrop-blur-xl bg-white/5 p-1 rounded-2xl border border-white/10 shadow-xl">
                  <div className="aspect-video rounded-xl overflow-hidden">
                    <Image 
                      src="/api/placeholder/1200/800" 
                      alt="3D Visualization" 
                      width={1200}
                      height={800}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-teal-400 to-blue-400"></div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-6 relative overflow-hidden">
          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "99%", label: "Accuracy" },
                { value: "10x", label: "Faster Processing" },
                { value: "24/7", label: "Availability" },
                { value: "500+", label: "Enterprise Clients" }
              ].map((stat, index) => (
                <div key={index} className="backdrop-blur-xl bg-white/5 p-6 rounded-2xl border border-white/10 text-center transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                  <div className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-300">
                    {stat.value}
                  </div>
                  <div className="text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/30 to-blue-900/30"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="backdrop-blur-xl bg-white/5 p-12 rounded-3xl border border-white/10 shadow-xl max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-300">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-white/60 max-w-2xl mx-auto">
                  Join the AI revolution today and stay ahead of the competition with our cutting-edge solutions.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group relative px-8 py-4 rounded-full overflow-hidden">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-teal-500 to-blue-500 transition-all duration-300 group-hover:scale-105"></span>
                  <span className="absolute inset-0 w-full h-full backdrop-blur-md bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10 font-medium text-white">Get Started</span>
                </button>
                <button className="group relative px-8 py-4 rounded-full overflow-hidden">
                  <span className="absolute inset-0 w-full h-full border border-white/20 transition-all duration-300 group-hover:border-white/40 group-hover:scale-105"></span>
                  <span className="absolute inset-0 w-full h-full backdrop-blur-md bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10 font-medium text-white/80 group-hover:text-white">Schedule Demo</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="backdrop-blur-xl bg-black/20 text-white py-12 px-6 border-t border-white/5">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-white font-bold text-2xl flex items-center mb-4 md:mb-0">
              <span className="text-3xl mr-1 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">∞</span> 
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">intellitech</span>
            </div>
            
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'GitHub', 'Discord'].map((platform, index) => (
                <a key={index} href="#" className="w-10 h-10 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all duration-300">
                  <span className="sr-only">{platform}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/40 text-sm mb-4 md:mb-0">
              © 2023 Intellitech. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Contact Us'].map((item, index) => (
                <a key={index} href="#" className="text-white/40 hover:text-white/80 text-sm transition-colors duration-300">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
