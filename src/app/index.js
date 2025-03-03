// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>AI Revolution | Powered by AI</title>
        <meta name="description" content="Revolutionize your business with AI solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="bg-white py-4 px-6 shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-teal-500 font-bold text-2xl flex items-center">
              <span className="text-3xl mr-1">+</span> intellitech
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-teal-500">Home</Link>
            <Link href="/solutions" className="text-gray-700 hover:text-teal-500">Solutions</Link>
            <Link href="/cases" className="text-gray-700 hover:text-teal-500">Cases</Link>
            <Link href="/about" className="text-gray-700 hover:text-teal-500">About Us</Link>
            <Link href="/resources" className="text-gray-700 hover:text-teal-500">Resources</Link>
            <Link href="/blog" className="text-gray-700 hover:text-teal-500">Blog</Link>
          </div>
          
          <button className="bg-teal-600 text-white px-4 py-2 rounded-md font-medium hover:bg-teal-700 transition">
            Register Now
          </button>
        </div>
      </nav>

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center bg-gradient-to-br from-teal-400 to-teal-600">
          <div className="absolute inset-0 overflow-hidden">
            <Image 
              src="/api/placeholder/1200/800" 
              alt="AI Revolution" 
              className="object-cover w-full h-full opacity-30 mix-blend-overlay"
              width={1200}
              height={800}
            />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                Revolutionize Tomorrow, Powered by AI
              </h1>
              <p className="text-white text-xl mb-8 max-w-2xl">
                Unleash your business potential with revolutionary AI solutions. Let our intelligent systems drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-teal-600 px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition">
                  Try Now
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-md font-bold hover:bg-white hover:bg-opacity-10 transition">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 bg-white">
          <div className="container mx-auto">
            <div className="mb-12">
              <span className="bg-teal-100 text-teal-600 px-4 py-1 rounded-full text-sm font-medium">Features</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                Tools You Didn't Know You Needed
              </h2>
              <p className="text-gray-600 max-w-2xl">
                Discover how our AI-powered features can transform your workflow and boost productivity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Predictive Intelligence</h3>
                <p className="text-gray-600">
                  Anticipate market trends and customer needs with our advanced AI algorithms.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Workflow Automation</h3>
                <p className="text-gray-600">
                  Streamline processes and eliminate repetitive tasks with intelligent automation.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Real-Time Insights</h3>
                <p className="text-gray-600">
                  Access actionable analytics and insights to make informed business decisions.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Human-AI Collaboration</h3>
                <p className="text-gray-600">
                  Enhance team capabilities by pairing human expertise with AI assistance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="container mx-auto text-center mb-16">
            <span className="bg-teal-100 text-teal-600 px-4 py-1 rounded-full text-sm font-medium">Benefits</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-4">
              Smarter Business.<br/>Smarter Future.
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transform how you operate with AI-driven solutions that deliver measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {/* Benefit 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition text-center">
              <div className="w-16 h-16 mx-auto mb-4">
                <svg className="w-full h-full text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="font-bold mb-2">Operational Efficiency</h3>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition text-center">
              <div className="w-16 h-16 mx-auto mb-4">
                <svg className="w-full h-full text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <h3 className="font-bold mb-2">Accelerated Growth</h3>
            </div>

            {/* Benefit 3 */}
            <div className="bg-teal-500 p-6 rounded-lg shadow-md text-center text-white">
              <div className="w-16 h-16 mx-auto mb-4">
                <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 className="font-bold mb-2">Data-Driven Decisions</h3>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition text-center">
              <div className="w-16 h-16 mx-auto mb-4">
                <svg className="w-full h-full text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="font-bold mb-2">Cost Optimization</h3>
            </div>

            {/* Benefit 5 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition text-center">
              <div className="w-16 h-16 mx-auto mb-4">
                <svg className="w-full h-full text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                </svg>
              </div>
              <h3 className="font-bold mb-2">Customer Experiences</h3>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 px-6 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <span className="bg-teal-100 text-teal-600 px-4 py-1 rounded-full text-sm font-medium">How It Works Section</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-4">
                Bringing Ideas to Life,<br/>One Algorithm at a Time.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {/* Step 1 */}
              <div className="bg-gray-900 p-6 rounded-lg text-white hover:shadow-lg transition">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center mr-3">
                    <span className="text-lg font-bold">1</span>
                  </div>
                  <h3 className="font-bold text-lg">Assessment</h3>
                </div>
                <p className="text-gray-300">We analyze your business needs and identify opportunities for AI implementation.</p>
              </div>

              {/* Step 2 */}
              <div className="bg-teal-100 p-6 rounded-lg hover:shadow-lg transition">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-teal-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-lg font-bold">2</span>
                  </div>
                  <h3 className="font-bold text-lg">AI Implementation</h3>
                </div>
                <p className="text-gray-700">Our experts develop and deploy custom AI solutions tailored to your requirements.</p>
              </div>

              {/* Step 3 */}
              <div className="bg-gray-900 p-6 rounded-lg text-white hover:shadow-lg transition">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center mr-3">
                    <span className="text-lg font-bold">3</span>
                  </div>
                  <h3 className="font-bold text-lg">Continuous Optimization</h3>
                </div>
                <p className="text-gray-300">We refine and enhance your AI systems to deliver better results over time.</p>
              </div>

              {/* Image */}
              <div className="bg-white p-4 rounded-lg flex items-center justify-center">
                <div className="relative w-full h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/api/placeholder/400/300"
                    alt="AI Implementation"
                    className="object-cover"
                    width={400}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-12 px-6 bg-gray-50 border-t border-b border-gray-200">
          <div className="container mx-auto">
            <p className="text-center text-gray-500 mb-8">More than 500+ companies trusted us</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {/* Company Logos */}
              {['Waveline', 'Graphio', 'Friendsy', 'Logique', 'Signum', 'ICR'].map((company, index) => (
                <div key={index} className="text-gray-400 font-medium text-lg">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 px-6 bg-white">
          <div className="container mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Our AI. Their Success Stories.
              </h2>
              <p className="text-gray-600 text-center max-w-2xl mx-auto">
                Discover how businesses across industries achieved remarkable results with our AI solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
              {/* Client images */}
              {[...Array(12)].map((_, i) => (
                <div key={i} className="bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={`/api/placeholder/${200 + i}/${200}`}
                    alt={`Client ${i + 1}`}
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className="bg-teal-600 text-white px-6 py-3 rounded-md font-medium hover:bg-teal-700 transition">
                Read our customer success story
              </button>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 px-6 bg-teal-50 rounded-lg mx-4 md:mx-8 my-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your AI Revolution Starts Today.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-teal-600 text-white px-6 py-3 rounded-md font-medium hover:bg-teal-700 transition">
                Get Started Now
              </button>
              <button className="border-2 border-teal-600 text-teal-600 px-6 py-3 rounded-md font-medium hover:bg-teal-50 transition">
                Request a Custom Demo
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="mb-8 md:mb-0">
              <div className="text-white font-bold text-2xl flex items-center mb-4">
                <span className="text-3xl mr-1">+</span> intellitech
              </div>
              <p className="text-gray-400 max-w-xs">
                Revolutionizing businesses through intelligent AI solutions and innovative technology.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold mb-4">Menu</h3>
                <ul className="space-y-2">
                  {['Home', 'Services', 'About', 'Contact'].map((item, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-400 hover:text-white transition">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-4">Company & Legal</h3>
                <ul className="space-y-2">
                  {['Privacy Policy', 'Terms', 'Security', 'Compliance'].map((item, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-400 hover:text-white transition">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-4">Resources</h3>
                <ul className="space-y-2">
                  {['Blog', 'Guides', 'API', 'Support'].map((item, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-400 hover:text-white transition">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-4">Connect</h3>
                <div className="flex space-x-4">
                  {/* Social Icons */}
                  {['Facebook', 'Twitter', 'LinkedIn', 'YouTube'].map((social, i) => (
                    <a 
                      key={i}
                      href="#" 
                      className="text-gray-400 hover:text-white transition"
                      aria-label={social}
                    >
                      {social[0]}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-700 text-gray-400 text-sm">
            <p>© 2025 IntelliTech, All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}