
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: "🚀",
      title: "Custom Website Development",
      description: "Transform your vision into a stunning digital reality. No templates, no shortcuts - just premium websites built specifically for your business goals.",
      features: ["Custom Design", "Premium Quality", "Business-Focused", "Unique Solutions"]
    },
    {
      icon: "🛒",
      title: "E-Commerce Solutions",
      description: "Start selling online with confidence. Our e-commerce platforms are designed to convert browsers into buyers with seamless checkout experiences.",
      features: ["Secure Payments", "Inventory Management", "Mobile Commerce", "Analytics Dashboard"]
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description: "Your website looks perfect on every device. Mobile, tablet, desktop - we ensure flawless user experience across all platforms.",
      features: ["Mobile-First", "Cross-Browser", "Fast Loading", "Touch Optimized"]
    },
    {
      icon: "🎯",
      title: "SEO-Optimized Development",
      description: "Get discovered by your ideal customers. Every website we build follows Google's best practices to rank higher in search results.",
      features: ["On-Page SEO", "Technical SEO", "Speed Optimization", "Schema Markup"]
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Our Web Development Services 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">
              {" "}That Deliver ROI
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional services designed to transform your business and drive measurable results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white"
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
