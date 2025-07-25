
import { ArrowRight } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "1",
      title: "Discovery Call",
      subtitle: "Free 30-min consultation",
      description: "We understand your business goals, target audience, and specific requirements.",
      icon: "📞"
    },
    {
      number: "2",
      title: "Strategic Planning",
      subtitle: "Custom proposal within 24 hours",
      description: "Detailed project roadmap with timeline, features, and investment breakdown.",
      icon: "📋"
    },
    {
      number: "3",
      title: "Design & Development",
      subtitle: "2-4 weeks depending on complexity",
      description: "Regular updates, milestone reviews, and your feedback incorporated at every stage.",
      icon: "💻"
    },
    {
      number: "4",
      title: "Launch & Support",
      subtitle: "Ongoing optimization",
      description: "Complete testing, training, and 6 months of free technical support.",
      icon: "🚀"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Our Simple 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">
              {" "}4-Step Process
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From concept to launch, we make web development straightforward and stress-free
          </p>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="hidden lg:block absolute top-32 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`group relative animate-fade-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Step Number Circle */}
                <div className="relative mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-2xl font-bold text-black">{step.number}</span>
                  </div>
                  
                  {/* Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-12 text-yellow-500">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  )}
                </div>

                {/* Content Card */}
                <div className="bg-slate-50 rounded-2xl p-6 group-hover:bg-white group-hover:shadow-xl transition-all duration-300 h-full">
                  <div className="text-center space-y-4">
                    <div className="text-4xl mb-4">{step.icon}</div>
                    
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-yellow-600 transition-colors">
                      {step.title}
                    </h3>
                    
                    <div className="text-sm font-semibold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full inline-block">
                      {step.subtitle}
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-slate-900 to-black rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-slate-300 mb-8 text-lg">
            Book your free consultation call today and let's discuss your project
          </p>
          <button 
            onClick={() => document.querySelector('[data-email-section]')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
          >
            Submit
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
