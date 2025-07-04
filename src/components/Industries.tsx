
const Industries = () => {
  const industries = [
    { name: "Real Estate", icon: "🏠" },
    { name: "Education", icon: "🎓" },
    { name: "Healthcare", icon: "🏥" },
    { name: "E-Commerce", icon: "🛒" },
    { name: "Finance", icon: "💰" },
    { name: "Hospitality", icon: "🏨" },
    { name: "Technology", icon: "💻" },
    { name: "Manufacturing", icon: "🏭" },
    { name: "Food & Beverage", icon: "🍽️" },
    { name: "Fashion", icon: "👗" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Industries 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">
              {" "}We Serve
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Trusted by leading businesses across diverse industries in Hyderabad and beyond
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="group bg-slate-50 hover:bg-gradient-to-br hover:from-yellow-50 hover:to-orange-50 rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg border hover:border-yellow-200"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {industry.icon}
              </div>
              <h3 className="text-sm font-semibold text-slate-900 group-hover:text-yellow-700 transition-colors">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 to-black rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-8">
            Why Hyderabad Businesses Trust Shrine InfoTech
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="space-y-3">
              <div className="text-3xl">🏆</div>
              <div className="text-2xl font-bold text-yellow-400">150+</div>
              <div className="text-slate-300">Successful Projects</div>
            </div>
            <div className="space-y-3">
              <div className="text-3xl">⚡</div>
              <div className="text-2xl font-bold text-yellow-400">48h</div>
              <div className="text-slate-300">Response Time</div>
            </div>
            <div className="space-y-3">
              <div className="text-3xl">🔒</div>
              <div className="text-2xl font-bold text-yellow-400">100%</div>
              <div className="text-slate-300">Secure Development</div>
            </div>
            <div className="space-y-3">
              <div className="text-3xl">💰</div>
              <div className="text-2xl font-bold text-yellow-400">0</div>
              <div className="text-slate-300">Hidden Costs</div>
            </div>
            <div className="space-y-3">
              <div className="text-3xl">🛡️</div>
              <div className="text-2xl font-bold text-yellow-400">6M</div>
              <div className="text-slate-300">Warranty</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
