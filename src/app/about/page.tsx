export default function About() {
  return (
    <main className="min-h-screen bg-space-black">
      {/* Hero Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-star-white mb-6">
            About Moontaxi Lab
          </h1>
          <p className="text-xl md:text-2xl text-nebula-cyan/80 font-light leading-relaxed">
            We live to learn.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 border-t border-nebula-teal/20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-nebula-cyan" />
            <h2 className="font-display text-lg md:text-xl tracking-[0.3em] text-nebula-cyan uppercase">
              Mission
            </h2>
          </div>
          <p className="text-lg md:text-xl text-star-white/90 leading-relaxed">
            We help organizations navigate the intersection of emerging technology 
            and business strategy, transforming complexity into competitive advantage.
          </p>
          <p className="text-star-white/70 leading-relaxed mt-6">
            At Moontaxi Lab, our mission is to guide organizations thrive through the
            complex tech transformations that risk culture and business success.
            
          </p>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-16 px-6 border-t border-nebula-teal/20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-nebula-cyan" />
            <h2 className="font-display text-lg md:text-xl tracking-[0.3em] text-nebula-cyan uppercase">
              Background
            </h2>
          </div>
          <div className="space-y-6 text-star-white/80 leading-relaxed">
            <p>
              With over two decades of experience spanning biotechnology, entertainment, and
              technology sectors, I bring a unique perspective to digital transformation.
           
            </p>
            <p>
              My journey includes leadership roles at organizations like Disney, Yahoo, and pioneering 
              biotech companies, where I led teams through complex technological transitions.

            </p>
            <p>
              This diverse background equips me to understand the multifaceted challenges
              organizations face today, enabling me to craft tailored strategies that drive
              innovation and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 px-6 border-t border-nebula-teal/20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-nebula-cyan" />
            <h2 className="font-display text-lg md:text-xl tracking-[0.3em] text-nebula-cyan uppercase">
              Approach
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Principle 1 */}
            <div className="p-6 border border-nebula-teal/30 rounded-lg bg-space-deep/50">
              <div className="text-3xl font-display text-nebula-cyan mb-4">01</div>
              <h3 className="text-lg font-semibold text-star-white mb-3">
                Strategic
              </h3>
              <p className="text-star-white/70 text-sm leading-relaxed">
                Evidence-based strategy grounded in data and research, not hype.
      
              </p>
            </div>

            {/* Principle 2 */}
            <div className="p-6 border border-nebula-teal/30 rounded-lg bg-space-deep/50">
              <div className="text-3xl font-display text-nebula-cyan mb-4">02</div>
              <h3 className="text-lg font-semibold text-star-white mb-3">
                Connection
              </h3>
              <p className="text-star-white/70 text-sm leading-relaxed">
                Human-centered solutions that amplifies capabilities rather than replacing them.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="p-6 border border-nebula-teal/30 rounded-lg bg-space-deep/50">
              <div className="text-3xl font-display text-nebula-cyan mb-4">03</div>
              <h3 className="text-lg font-semibold text-star-white mb-3">
                Measurable
              </h3>
              <p className="text-star-white/70 text-sm leading-relaxed">
                Practical execution focused on defining success and tracking
                measurable outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Moontaxi Lab Section */}
      <section className="py-16 px-6 border-t border-nebula-teal/20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-nebula-cyan" />
            <h2 className="font-display text-lg md:text-xl tracking-[0.3em] text-nebula-cyan uppercase">
              Why Moontaxi Lab
            </h2>
          </div>
          <p className="text-lg md:text-xl text-star-white/90 leading-relaxed mb-6">
            The name reflects our philosophy: ambitious destinations (the moon)
            require state of the art transportation (the taxi). We bridge the gap
            between vision and execution.
          </p>
          <p className="text-star-white/70 leading-relaxed">
            
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 border-t border-nebula-teal/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl text-star-white mb-6">
            Ready to explore what&apos;s possible?
          </h2>
          <p className="text-star-white/70 mb-8">
            Let&apos;s discuss how Moontaxi Lab can help you 
            navigate the AI landscape.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-nebula-teal text-star-white font-medium rounded-lg hover:bg-nebula-cyan transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  )
}
