export default function ProofBlock() {
  return (
    <section
      id="proof"
      className="relative py-24 px-6 text-center bg-gradient-to-br from-[#0a0f29] via-[#141b3d] to-[#1a2349] text-white overflow-hidden"
    >
      {/* Accent gradient background */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.3),transparent_60%)]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
          ⚡ Real Results — Nevada Case Study (30 Days)
        </h2>
        <p className="text-lg text-gray-300 mb-16 max-w-2xl mx-auto">
          In just 30 days, our campaign helped agents in Nevada close more deals with
          verified, exclusive leads — powered by our Pay-Per-Lead model.
        </p>

        {/* Case Study Image */}
        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-700/30">
          <img
            src="/images/image.png"
            alt="Meta Ads Case Study Results"
            className="w-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Metrics */}
        <div className="grid md:grid-cols-4 gap-8 mt-12 text-center">
          {[
            { label: "Leads Generated", value: "200+" },
            { label: "Qualified Leads", value: "15" },
            { label: "ROI", value: "100%" },
            { label: "Pricing Model", value: "Pay-Per-Lead" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all duration-300"
            >
              <h3 className="text-3xl font-bold text-white mb-2">{item.value}</h3>
              <p className="text-gray-300 text-sm uppercase tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <p className="mt-12 text-gray-400 text-base">
          These verified results are sourced from our internal Meta Ads campaign
          dashboard. Every lead was qualified by phone before delivery.
        </p>
      </div>
    </section>
  );
}
