import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Sustainability() {
  const revealHeader = useScrollReveal(0.05);
  const revealSec1 = useScrollReveal(0.1);
  const revealSec2 = useScrollReveal(0.1);
  const revealSec3 = useScrollReveal(0.1);

  return (
    <div className="overflow-hidden">
      {/* Intro Header */}
      <section
        ref={revealHeader.elementRef as React.RefObject<HTMLElement>}
        className={`max-w-[1400px] mx-auto px-6 md:px-10 pt-36 pb-12 reveal-hidden ${
          revealHeader.isRevealed ? 'reveal-visible' : ''
        }`}
      >
        <SectionHeading
          label="SUSTAINABILITY COMMITMENT"
          title="Circular design by default, not by compromise"
          subtitle="At Smeulders Interieurgroep, sustainable architecture is not a secondary layer of compliance. It is the core framework that defines our layout planning, materials specification, and craftsmanship standards."
        />
      </section>

      {/* Principle 1: Material Sourcing */}
      <section
        ref={revealSec1.elementRef as React.RefObject<HTMLElement>}
        className={`max-w-[1400px] mx-auto px-6 md:px-10 py-12 md:py-20 reveal-hidden ${
          revealSec1.isRevealed ? 'reveal-visible' : ''
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] font-semibold tracking-[0.2em] text-white/30 uppercase">
              PRINCIPLE 01
            </span>
            <h3 className="font-display text-2xl md:text-4xl font-light text-white/90 leading-tight">
              Carbon Transparency & Local Timber Sourcing
            </h3>
            <p className="text-sm md:text-base text-white/50 font-light leading-relaxed">
              Every timber beam, veneer panel, and solid work surface specified in our designs originates from FSC-certified local European forests. We trace our supply chains to ensure raw materials are processed within regional hubs, drastically lowering transportation footprint.
            </p>
            <p className="text-sm md:text-base text-white/50 font-light leading-relaxed">
              By rejecting chemically treated composite timbers in favour of natural oils and waxes, we ensure that spatial elements do not release harmful VOCs, protecting indoor air quality while guaranteeing a fully natural wood lifecycle.
            </p>
          </div>
          <div className="lg:col-span-6 aspect-[4/3] md:aspect-[16/10] bg-white/5 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
              alt="Natural wood materials and tactile details"
              className="w-full h-full object-cover transition-transform duration-[1.2s] hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Principle 2: Circularity */}
      <section
        ref={revealSec2.elementRef as React.RefObject<HTMLElement>}
        className={`bg-[#111] border-y border-white/5 py-20 md:py-32 reveal-hidden ${
          revealSec2.isRevealed ? 'reveal-visible' : ''
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6 lg:order-2 space-y-6">
              <span className="text-[10px] font-semibold tracking-[0.2em] text-white/30 uppercase">
                PRINCIPLE 02
              </span>
              <h3 className="font-display text-2xl md:text-4xl font-light text-white/90 leading-tight">
                Design for Disassembly & Modular Layouts
              </h3>
              <p className="text-sm md:text-base text-white/50 font-light leading-relaxed">
                Traditional office renovations create tons of waste because partitions are glued or plastered permanently to floors. Our joinery and acoustic partitions are built using dry-joint mechanical fasteners.
              </p>
              <p className="text-sm md:text-base text-white/50 font-light leading-relaxed">
                This enables components to be unbolted, relocated, or reconfigured with minimal tools and zero damage. If an organisation moves, the entire interior architecture can be packed and reassembled in their new location.
              </p>
            </div>
            <div className="lg:col-span-6 lg:order-1 aspect-[4/3] md:aspect-[16/10] bg-white/5 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                alt="Modular architectural structure detail"
                className="w-full h-full object-cover transition-transform duration-[1.2s] hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Principle 3: Operational Efficiency */}
      <section
        ref={revealSec3.elementRef as React.RefObject<HTMLElement>}
        className={`max-w-[1400px] mx-auto px-6 md:px-10 py-12 md:py-28 reveal-hidden ${
          revealSec3.isRevealed ? 'reveal-visible' : ''
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] font-semibold tracking-[0.2em] text-white/30 uppercase">
              PRINCIPLE 03
            </span>
            <h3 className="font-display text-2xl md:text-4xl font-light text-white/90 leading-tight">
              Biophilia & Low-Energy System Integration
            </h3>
            <p className="text-sm md:text-base text-white/50 font-light leading-relaxed">
              We integrate indoor flora directly into active HVAC and acoustic setups. Biophilic structures are strategically positioned under natural skylights to double as carbon filters and micro-climatic balancing tools.
            </p>
            <p className="text-sm md:text-base text-white/50 font-light leading-relaxed">
              By planning smart spatial routing that channels natural cross-ventilation, we reduce reliance on high-energy air conditioning systems, delivering comfortable, oxygen-rich environments at lower operating costs.
            </p>
          </div>
          <div className="lg:col-span-6 aspect-[4/3] md:aspect-[16/10] bg-white/5 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80"
              alt="Biophilic design elements spa pool"
              className="w-full h-full object-cover transition-transform duration-[1.2s] hover:scale-105"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
export default Sustainability;
