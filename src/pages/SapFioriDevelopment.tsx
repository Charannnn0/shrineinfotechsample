import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

const SapFioriDevelopment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">SAP Fiori Development</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Create intuitive and responsive user experiences with our expert SAP Fiori development services.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Custom Fiori Apps</h3>
                <p className="text-muted-foreground">Develop tailored Fiori applications that meet your specific business requirements.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">UI5 Development</h3>
                <p className="text-muted-foreground">Build modern, responsive interfaces using the latest UI5 frameworks and best practices.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Fiori Launchpad</h3>
                <p className="text-muted-foreground">Configure and customize your Fiori Launchpad for optimal user experience.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Mobile Optimization</h3>
                <p className="text-muted-foreground">Ensure your Fiori apps work seamlessly across all devices and platforms.</p>
              </div>
            </div>
            
            <div className="bg-primary/10 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Our Fiori Development Expertise</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>End-to-end Fiori application development</li>
                <li>Performance optimization and best practices</li>
                <li>Integration with backend SAP systems</li>
                <li>User-centric design and UX optimization</li>
              </ul>
            </div>
            
            <div className="bg-accent/10 p-8 rounded-lg border-l-4 border-accent mt-8">
              <h3 className="text-2xl font-semibold mb-4">Start Your Fiori Development Project</h3>
              <p className="text-muted-foreground mb-6">
                Transform your SAP user experience with our custom Fiori development services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => window.location.href = '/#consultation-form'}
                  className="bg-accent hover:bg-accent/90 text-white"
                >
                  Get Free Consultation
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => window.location.href = 'tel:+919381044375'}
                  className="border-accent text-accent hover:bg-accent hover:text-white"
                >
                  Call Now: +91-93810 44375
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SapFioriDevelopment;