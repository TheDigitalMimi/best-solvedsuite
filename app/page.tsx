// Premium SolvedSuite Homepage - 19 Business Tools for Digital Creators

export default function HomePage() {
  return (
    <main className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen">
      <Header />
      <HeroSection />
      <ToolsShowcase />
      <TestimonialsSection />
      <PricingSection />
      <UrgencySection />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="border-b border-slate-700/50 backdrop-blur-sm bg-slate-900/80 sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-lg flex items-center justify-center">
            <span className="text-slate-900 font-bold">S</span>
          </div>
          <h1 className="font-bold text-2xl text-white">SolvedSuite</h1>
          <span className="bg-emerald-400 text-slate-900 px-2 py-1 rounded text-xs font-bold">PRO</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a href="#tools" className="hover:text-emerald-400 transition-colors">19 Tools</a>
          <a href="#pricing" className="hover:text-emerald-400 transition-colors">Pricing</a>
          <a href="#testimonials" className="hover:text-emerald-400 transition-colors">Success Stories</a>
        </div>
        <a href="#" className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-900 font-bold px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-emerald-400/25 transition-all transform hover:scale-105">
          Start Free Trial
        </a>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 blur-3xl"></div>
      <div className="container mx-auto px-6 text-center relative">
        <div className="inline-flex items-center gap-2 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
          <span className="text-emerald-400 text-sm font-medium">19 Premium Business Tools</span>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
          The Complete
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> Business Suite</span>
          <br />
          for Digital Creators
        </h2>
        
        <p className="mt-8 max-w-3xl mx-auto text-xl text-slate-300 leading-relaxed">
          19 powerful tools for <strong className="text-emerald-400">digital product creation</strong>, 
          <strong className="text-cyan-400"> content creation</strong>, and 
          <strong className="text-emerald-400"> ecommerce</strong>. Everything you need to build, market, and scale your online business.
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#" className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-900 font-bold px-8 py-4 rounded-lg text-lg hover:shadow-2xl hover:shadow-emerald-400/25 transition-all transform hover:scale-105">
            Get All 19 Tools for $39/month
          </a>
          <a href="#tools" className="border border-slate-600 text-white font-medium px-8 py-4 rounded-lg text-lg hover:border-emerald-400 hover:text-emerald-400 transition-all">
            See All Tools
          </a>
        </div>
        
        <div className="mt-8 text-slate-400 text-sm">
          <span className="inline-flex items-center gap-2">
            <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            No setup required • Cancel anytime • 7-day free trial
          </span>
        </div>
      </div>
    </section>
  );
}

function ToolsShowcase() {
  const toolCategories = [
    {
      category: "Digital Product Creation",
      icon: "📦",
      color: "from-emerald-400 to-green-400",
      tools: [
        "Course Builder Pro",
        "eBook Generator",
        "Template Designer",
        "Digital Asset Manager",
        "Product Launch Wizard",
        "Sales Page Creator",
        "Membership Site Builder"
      ]
    },
    {
      category: "Content Creation",
      icon: "✨",
      color: "from-cyan-400 to-blue-400",
      tools: [
        "AI Content Writer",
        "Social Media Scheduler",
        "Video Script Generator",
        "Blog Post Optimizer",
        "Email Campaign Builder",
        "Graphic Design Studio"
      ]
    },
    {
      category: "Ecommerce & Business",
      icon: "🚀",
      color: "from-purple-400 to-pink-400",
      tools: [
        "Store Builder Pro",
        "Inventory Manager",
        "Analytics Dashboard",
        "Customer Support Bot",
        "Payment Processor",
        "Marketing Automation"
      ]
    }
  ];

  return (
    <section id="tools" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-white mb-4">19 Premium Tools, One Platform</h3>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Everything you need to create, market, and sell digital products online. No more juggling multiple subscriptions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {toolCategories.map((category, index) => (
            <div key={index} className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-emerald-400/30 transition-all hover:shadow-lg hover:shadow-emerald-400/10">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-2xl`}>
                  {category.icon}
                </div>
                <h4 className="text-xl font-bold text-white">{category.category}</h4>
              </div>
              
              <ul className="space-y-3">
                {category.tools.map((tool, toolIndex) => (
                  <li key={toolIndex} className="flex items-center gap-3 text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-400 mb-6">Usually sold separately for $300+/month</p>
          <a href="#pricing" className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-900 font-bold px-8 py-4 rounded-lg hover:shadow-lg hover:shadow-emerald-400/25 transition-all">
            Get Everything for $39/month
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "SolvedSuite replaced five different apps I was paying $300+ for. Now I save 4 hours every day and my revenue doubled.",
      author: "Sarah Martinez",
      role: "Digital Course Creator",
      revenue: "+200% revenue"
    },
    {
      quote: "I went from struggling freelancer to running a 6-figure agency. The tools just work together beautifully.",
      author: "Michael Chen",
      role: "Marketing Agency Owner",
      revenue: "6-figure agency"
    },
    {
      quote: "Finally, business tools that actually understand creators. It's like having a whole tech team in one subscription.",
      author: "Jessica Thompson",
      role: "Content Creator & Coach",
      revenue: "5x productivity"
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-white mb-4">Transforming Businesses Daily</h3>
          <p className="text-xl text-slate-300">Join thousands of creators who've scaled with SolvedSuite</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-emerald-400/30 transition-all">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <blockquote className="text-lg text-slate-200 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-slate-400">{testimonial.role}</div>
                </div>
                <div className="bg-emerald-400/10 border border-emerald-400/20 rounded-full px-3 py-1">
                  <span className="text-emerald-400 text-sm font-medium">{testimonial.revenue}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-6">Simple, Transparent Pricing</h3>
          <p className="text-xl text-slate-300 mb-12">Get all 19 premium tools for less than what most charge for one.</p>
          
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border-2 border-emerald-400/50 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 to-cyan-400/5"></div>
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-emerald-400 text-slate-900 rounded-full px-4 py-2 mb-6 font-bold">
                <span>💎</span>
                <span>FOUNDER'S SPECIAL</span>
              </div>
              
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-3xl text-slate-400 line-through">$49</span>
                  <span className="text-6xl font-bold text-white">$39</span>
                  <span className="text-2xl text-slate-300">/month</span>
                </div>
                <p className="text-emerald-400 font-medium">Save $10/month • Limited to next 100 customers</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-10">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    All 19 Premium Tools
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Unlimited Projects
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Priority Support
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Regular Updates
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    7-Day Free Trial
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Cancel Anytime
                  </div>
                </div>
              </div>

              <a href="#" className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-900 font-bold px-10 py-5 rounded-xl text-xl hover:shadow-2xl hover:shadow-emerald-400/25 transition-all transform hover:scale-105 inline-block">
                Start Your Free Trial
              </a>
              
              <p className="text-slate-400 text-sm mt-4">No credit card required • Setup in 2 minutes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function UrgencySection() {
  return (
    <section className="py-16 bg-gradient-to-r from-red-600/10 to-orange-600/10 border-y border-red-500/20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold p-4 rounded-xl mb-8 shadow-lg">
            <div className="flex items-center justify-center gap-2 text-lg">
              <span className="animate-pulse">🚨</span>
              <span>FOUNDER'S PRICING ENDS SOON</span>
              <span className="animate-pulse">🚨</span>
            </div>
            <p className="mt-2 text-lg">Only 100 spots available at this price!</p>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Lock In Your Founder's Rate
            <span className="text-emerald-400"> FOREVER</span>
          </h3>
          
          <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <p className="text-slate-300 mb-2">Recent signups:</p>
                <div className="space-y-2 text-sm">
                  <p className="text-emerald-400">✓ Sarah from Dallas just secured her spot</p>
                  <p className="text-emerald-400">✓ Michael from Seattle locked in his rate</p>
                  <p className="text-emerald-400">✓ Jessica from Miami joined 2 minutes ago</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4">
                  <p className="text-red-400 font-bold text-lg">Only 23 spots left today!</p>
                  <p className="text-slate-400 text-sm">Then price goes to $49/month</p>
                </div>
              </div>
            </div>
          </div>

          <a href="#" className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-900 font-bold px-10 py-5 rounded-xl text-xl hover:shadow-2xl hover:shadow-emerald-400/25 transition-all transform hover:scale-105 inline-block">
            Secure My Founder's Rate Now
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-16 bg-slate-900 border-t border-slate-700/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-xl flex items-center justify-center">
              <span className="text-slate-900 font-bold text-xl">S</span>
            </div>
            <div>
              <h4 className="font-bold text-2xl text-white">SolvedSuite</h4>
              <p className="text-slate-400 text-sm">19 tools. One platform. Infinite possibilities.</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Support</a>
          </div>
        </div>
        
        <div className="border-t border-slate-700/50 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 SolvedSuite. Built for creators, by creators. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
