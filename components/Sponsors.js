export default function Sponsors() {
  const sponsors = [
    { name: "Meta Ads", logo: "/images/meta.svg" },
    { name: "Google Ads", logo: "/images/google.svg" },
    { name: "Calendly", logo: "/images/calendly.svg" },
    { name: "HubSpot", logo: "/images/hubspot.svg" },
  ];

  return (
    <section id="trusted-by" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 dark:text-white">
          Trusted by leading platforms & partners
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10">
          We integrate with the most reliable tools to ensure verified, real-time lead delivery.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-10 opacity-70 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
