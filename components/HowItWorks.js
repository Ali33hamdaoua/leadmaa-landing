export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Lead Generation",
      text: "We target your preferred ZIP codes and attract motivated buyers or sellers through multi-channel ad campaigns."
    },
    {
      number: "2",
      title: "Phone Verification",
      text: "Our in-house team personally calls each prospect to confirm real intent, buying or selling motivation, and timeline."
    },
    {
      number: "3",
      title: "Real-Time Delivery",
      text: "You instantly receive verified, qualified leads straight to your inbox or CRM. Invalid ones? We replace them for free."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title Section */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          How It Works
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 mt-2">
            3 Simple Steps to Get Verified Leads
          </span>
        </h2>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative group p-8 rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-slate-700"
            >
              {/* Step Icon */}
              <div className="absolute -top-6 left-8 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl shadow-lg">
                {step.number}
              </div>

              {/* Content */}
              <h3 className="mt-6 mb-3 text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-500 transition">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {step.text}
              </p>

              {/* Accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
