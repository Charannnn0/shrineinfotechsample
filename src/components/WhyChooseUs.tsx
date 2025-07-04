
import { Check } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Proven Results",
      description: "Our websites generate 3x more leads than industry average",
      stat: "3x",
      statLabel: "More Leads"
    },
    {
      title: "Lightning Fast",
      description: "All sites load in under 3 seconds (Google loves this)",
      stat: "<3s",
      statLabel: "Load Time"
    },
    {
      title: "Mobile-First",
      description: "78% of your customers browse on mobile",
      stat: "78%",
      statLabel: "Mobile Users"
    },
    {
      title: "SEO-Optimized",
      description: "Get found on Google from day one",
      stat: "#1",
      statLabel: "Google Ranking"
    },
    {
      title: "Conversion-Focused",
      description: "Every element designed to turn visitors into customers",
      stat: "400%",
      statLabel: "ROI Increase"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Why 90% of Businesses 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              {" "}Choose Us
            </span>
            <br />
            Over Other Web Developers
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Results that speak louder than promises. Here's what sets us apart.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 hover:from-slate-700 hover:to-slate-800 transition-all duration-300 hover:scale-105"
            >
              {/* Decorative Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 group-hover:from-slate-700 group-hover:to-slate-800">
                
                {/* Check Icon */}
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Check className="w-6 h-6 text-black" />
                </div>

                {/* Stat */}
                <div className="mb-4">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                    {reason.stat}
                  </div>
                  <div className="text-sm text-slate-400 font-medium">
                    {reason.statLabel}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
