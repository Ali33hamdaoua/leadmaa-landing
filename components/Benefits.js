export default function Benefits() {
  const benefits = [
    {
      title: "100% Exclusive Leads",
      text: "You’ll never share leads with other agents — every lead is yours alone.",
      icon: "✅",
    },
    {
      title: "Pay-Per-Lead Model",
      text: "Only pay for verified, qualified leads — transparent and performance-driven.",
      icon: "💸",
    },
    {
      title: "Real-Time Delivery",
      text: "Receive your leads instantly — fresh, verified, and ready to close.",
      icon: "⚡",
    },
  ];

  return (
    <section
      id="benefits"
      className="relative py-24 
                 bg-gradient-to-br from-gray-50 via-white to-gray-100 
                 dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a]
                 overflow-hidden transition-colors duration-500"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.08),transparent_60%)] dark:bg-[radial-gradient(circle_at_60%_20%,rgba(79,70,229,0.2),transparent_70%)]"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-gray-900 dark:text-white">
          3 Key{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400">
            Benefits
          </span>
        </h2>

        <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
          Discover why top-performing agents choose our verified, pay-per-lead system to scale their client acquisition.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="group p-8 
                         bg-white dark:bg-slate-800/90 
                         rounded-2xl shadow-lg 
                         border border-gray-200 dark:border-slate-700
                         hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{b.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 transition">
                {b.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
