import { Building2, Users, Award, Clock } from "lucide-react";
const About = () => {
  const stats = [{
    icon: Award,
    value: "50+",
    label: "Certified Consultants"
  }];
  return <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="lg:ml-8 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                About <span className="text-accent">Shrine InfoTech</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Leading ERP solutions provider specializing in SAP technologies. We help businesses 
                transform their operations with cutting-edge enterprise solutions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-2">Expert Team</h4>
                  <p className="text-slate-600">Certified SAP consultants with deep industry expertise</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-2">Proven Results</h4>
                  <p className="text-slate-600">Successful implementations across diverse industries</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-2">End-to-End Support</h4>
                  <p className="text-slate-600">From planning to implementation and ongoing support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="order-first lg:order-last">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="Java programming on monitor"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;