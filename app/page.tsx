// This is the complete code for your new dark-themed homepage.

// Main Component for the page
export default function HomePage() {
  return (
    <main className="bg-navy">
      <Header />
      <HeroSection />
      <TestimonialsSection />
      <UrgencySection />
      {/* We can add more sections here later */}
      <Footer />
    </main>
  );
}


// --- All the page sections are defined below ---

function Header() {
  return (
    <header className="border-b border-white/10">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-2xl text-white">SolvedSuite</h1>
        <div className="hidden md:flex items-center gap-8 text-sm text-light-slate">
          <a href="#" className="hover:text-white transition-colors">Tools</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
          <a href="#" className="hover:text-white transition-colors">Blog</a>
        </div>
        <a href="#" className="bg-yellow text-navy font-bold px-5 py-2 rounded-lg hover:opacity-90 transition-opacity">
          Start Free Trial
        </a>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="py-24 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-teal">
          Your business. Smarter.
          <br />
          Your business. Solved.
        </h2>
        <p className="mt-8 max-w-2xl mx-auto text-lg text-light-slate">
          SolvedSuite isn't just a bundle of tools. It's the AI brain that runs your business for you. From generating digital products to creating entire marketing campaigns, we've solved it.
        </p>
        <div className="mt-10">
          <a href="#" className="bg-yellow text-navy font-bold px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity">
            Start Today — Let the AI Brain Work for You
          </a>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6 text-center">
                <h3 className="text-3xl font-bold text-white">Already changing the game.</h3>
                <p className="mt-2 text-light-slate">"It feels like having an entire business department in one tab."</p>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    <div className="bg-dark-slate p-8 rounded-xl border border-white/10">
                        <p className="text-white">“SolvedSuite replaced five apps I was paying $300+ for. Now I save hours every day.”</p>
                    </div>
                    <div className="bg-dark-slate p-8 rounded-xl border border-white/10">
                        <p className="text-white">“I tripled my output because SolvedSuite handles all the admin work choking my schedule.”</p>
                    </div>
                    <div className="bg-dark-slate p-8 rounded-xl border border-white/10">
                        <p className="text-white">“Our agency grew 300% without adding staff. The tools just work together — beautifully.”</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function UrgencySection() {
    return (
        <section className="py-20 bg-dark-slate border-y border-white/10">
            <div className="container mx-auto px-6 text-center">
                <div className="bg-red-600 text-white font-bold p-3 rounded-lg max-w-3xl mx-auto">
                    🚨 FOUNDER'S PRICING ENDS SOON (Only 100 spots available!) 🚨
                </div>
                <h3 className="mt-10 text-4xl font-extrabold text-white">Lock In Your Founder's Rate. FOREVER.</h3>
                <p className="mt-4 text-yellow animate-pulse">
                    Sarah from Dallas just secured her spot • Michael from Seattle locked in his rate • Only 23 spots left today!
                </p>
                <p className="mt-12 text-5xl font-bold text-yellow">$39 / month</p>
                <p className="text-light-slate">(Normally $49/month)</p>
            </div>
        </section>
    )
}

function Footer() {
    return (
        <footer className="py-12">
            <div className="container mx-auto px-6 text-center">
                <p className="font-bold text-2xl text-white">SolvedSuite</p>
                <p className="mt-2 text-sm text-light-slate">The future of business software. Solved.</p>
            </div>
        </footer>
    )
}
