import { Package, Pencil, ShoppingCart } from 'lucide-react';

// This is your entire homepage in one file.
export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <FeaturesGrid />
      <PricingSection />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-2xl text-navy">SolvedSuite</h1>
        <a href="#pricing" className="bg-teal text-white font-bold px-5 py-2 rounded-lg hover:bg-teal/90 transition-colors">
          Get Founder's Rate
        </a>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="pt-32 pb-20 text-center bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold text-navy tracking-tight">
          Launch Your Online Business.
          <br />
          <span className="text-teal">Create, Market, and Sell with AI.</span>
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-grey-dark">
          SolvedSuite provides 19 powerful AI tools to generate digital products, create marketing content, and build your e-commerce store—all in one place.
        </p>
        <div className="mt-8">
          <a href="#pricing" className="bg-teal text-white font-bold px-8 py-4 rounded-lg text-xl hover:bg-teal/90 transition-colors">
            Claim Your Founder's Pricing
          </a>
        </div>
      </div>
    </section>
  );
}

function FeaturesGrid() {
  return (
    <section id="features" className="py-20 bg-grey-light">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-navy">From Zero to Launch, All in One Place</h3>
        <p className="mt-4 max-w-2xl mx-auto text-grey-dark">Stop juggling dozens of apps. SolvedSuite combines your entire workflow into one intelligent platform.</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border text-center"><div className="mx-auto w-fit bg-grey-light p-4 rounded-full"><Package className="h-8 w-8 text-teal" /></div><h4 className="mt-6 text-xl font-bold text-navy">Digital Product Generators</h4><p className="mt-2 text-grey-dark">Instantly create ebooks, courses, lead magnets, planners, and more.</p></div>
            <div className="bg-white p-8 rounded-xl shadow-lg border text-center"><div className="mx-auto w-fit bg-grey-light p-4 rounded-full"><Pencil className="h-8 w-8 text-yellow" /></div><h4 className="mt-6 text-xl font-bold text-navy">Content Creation Suite</h4><p className="mt-2 text-grey-dark">Generate social media posts, video scripts, and a full 30-day content calendar.</p></div>
            <div className="bg-white p-8 rounded-xl shadow-lg border text-center"><div className="mx-auto w-fit bg-grey-light p-4 rounded-full"><ShoppingCart className="h-8 w-8 text-navy" /></div><h4 className="mt-6 text-xl font-bold text-navy">E-commerce Toolkit</h4><p className="mt-2 text-grey-dark">Write product descriptions, build landing pages, and create entire ad campaigns.</p></div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-navy">Get Founder's Pricing. Lock It In Forever.</h3>
        <p className="mt-4 max-w-2xl mx-auto text-grey-dark">Be one of the first 100 members and secure a permanent discount. As we add more tools, your price will never go up.</p>
        <div className="mt-12 flex justify-center">
          <div className="bg-white p-8 rounded-xl shadow-2xl border-2 border-teal w-full max-w-md">
            <p className="font-bold text-yellow">LIMITED TIME OFFER</p>
            <div className="flex items-end justify-center gap-2 mt-4"><span className="text-2xl font-medium text-grey line-through">$49</span><span className="text-5xl font-extrabold text-navy">$39</span><span className="text-lg text-grey">/month</span></div>
            <p className="mt-4 text-grey-dark">Full access to all 19 AI tools & all future updates.</p>
            <a href="#" className="mt-8 block w-full bg-teal text-white font-bold px-8 py-4 rounded-lg text-xl hover:bg-teal/90 transition-colors">Claim My Spot Now</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
    return (
        <footer className="py-12 bg-grey-light">
            <div className="container mx-auto px-6 text-center">
                <p className="font-bold text-navy">SolvedSuite</p>
                <p className="mt-2 text-sm text-grey">&copy; 2024 SolvedSuite. All rights reserved.</p>
            </div>
        </footer>
    )
}
