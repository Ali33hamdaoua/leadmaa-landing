export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 
                 dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a]
                 overflow-hidden transition-colors duration-500"
    >
      {/* Fond lumineux / sombre avec halo subtil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,rgba(147,51,234,0.08),transparent_70%)] 
                      dark:bg-[radial-gradient(circle_at_30%_40%,rgba(79,70,229,0.25),transparent_70%)]"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        {/* Titre */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white">
          🎯 Pay-Per-Qualified-Lead <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500">
            Pricing
          </span>
        </h2>

        {/* Description principale */}
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
          Qualified lead pricing ranges from{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">$300</span> 
          {" "}to{" "}
          <span className="font-semibold text-purple-600 dark:text-purple-400">$1,000+</span>, 
          depending on the average property value in your market.
        </p>

        <p className="text-md text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-10">
          We always structure pricing to ensure agent profitability — your ROI is at the center of our model.
        </p>
        </div>
    </section>
  );
}
