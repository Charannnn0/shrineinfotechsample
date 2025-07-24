
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
      </div>
    </section>
  );
};

export default Industries;
