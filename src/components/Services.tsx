
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: "🚀",
      title: "SAP BTP Implementation",
      description: "Transform your business with SAP Business Technology Platform. Cloud-native solutions that integrate, extend, and innovate your enterprise systems.",
      features: ["Cloud Integration", "Custom Extensions", "Analytics Platform", "Mobile Solutions"]
    },
    {
      icon: "🎨",
      title: "SAP Fiori Development",
      description: "Create intuitive, responsive user experiences with SAP Fiori. Modern UX/UI design that enhances user productivity and satisfaction.",
      features: ["UX/UI Design", "Mobile Apps", "Custom Tiles", "Role-Based Access"]
    },
    {
      icon: "💡",
      title: "SAP Fiori Consulting",
      description: "Expert guidance on SAP Fiori strategy, implementation, and best practices. Maximize ROI with our proven consulting methodology.",
      features: ["Strategy Planning", "Best Practices", "Training Programs", "Ongoing Support"]
    },
    {
      icon: "⚡",
      title: "SAP S/4HANA Migration",
      description: "Seamless migration to SAP S/4HANA with minimal business disruption. Future-proof your business with intelligent ERP solutions.",
      features: ["Migration Planning", "Data Migration", "System Testing", "Go-Live Support"]
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Our ERP Solutions 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">
              {" "}That Drive Growth
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From SAP implementation to Fiori development, we deliver enterprise solutions that transform your business operations
          </p>
        </div>

        <div className="relative flex flex-col items-center space-y-4 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white w-full max-w-2xl relative"
              style={{
                transform: `translateY(-${index * 20}px)`,
                zIndex: services.length - index,
              }}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-yellow-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-slate-600 leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                      <span className="text-sm text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
