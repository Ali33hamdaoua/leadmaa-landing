export default function QualificationForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    window.open("https://calendly.com/", "_blank");
  };

  return (
    <section
      id="form"
      className="relative py-24 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white">
          Get Qualified <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Leads Today</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12 text-lg">
          Fill out the short form below and schedule your personalized call to start receiving verified, exclusive leads.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-8 bg-white dark:bg-slate-800 p-10 rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-700 transition-transform hover:scale-[1.01]"
        >
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all w-full"
              required
            />
            <input
              type="email"
              placeholder="Business Email"
              className="p-4 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all w-full"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="p-4 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all w-full"
              required
            />
            <input
              type="text"
              placeholder="Agency / Brokerage"
              className="p-4 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all w-full"
              required
            />
          </div>

          {/* Select Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <select className="p-4 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all w-full">
              <option>Transactions in the Last 12 Months</option>
              <option>0–5</option>
              <option>6–15</option>
              <option>16–30</option>
              <option>30+</option>
            </select>

            <select className="p-4 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all w-full">
              <option>Lead Type Desired</option>
              <option>Buyer</option>
              <option>Seller</option>
              <option>Both</option>
            </select>
          </div>

          {/* ZIP + Value */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Target ZIP Codes"
              className="p-4 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all w-full"
            />
            <select className="p-4 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all w-full">
              <option>Average Property Value</option>
              <option>&lt; $250K</option>
              <option>$250K–$500K</option>
              <option>$500K–$1M</option>
              <option>$1M+</option>
            </select>
          </div>

          {/* CTA Button */}
          <button
            type="submit"
            className="w-full py-4 mt-6 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-xl hover:from-purple-700 hover:via-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-2xl"
          >
            Submit My Request →
          </button>

          {/* Small disclaimer */}
          <p className="text-sm text-gray-400 mt-4">
            Once submitted, you’ll be redirected to schedule a quick call via Calendly.
          </p>
        </form>
      </div>
    </section>
  );
}
