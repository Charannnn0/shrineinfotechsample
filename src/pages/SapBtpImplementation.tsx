import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const SapBtpImplementation = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">SAP BTP Implementation</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Transform your business with our comprehensive SAP Business Technology Platform implementation services.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Platform Setup</h3>
                <p className="text-muted-foreground">Complete BTP environment configuration and optimization for your business needs.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Integration Services</h3>
                <p className="text-muted-foreground">Seamless integration with existing systems and third-party applications.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Custom Development</h3>
                <p className="text-muted-foreground">Tailored solutions using SAP BTP's extensive development capabilities.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Support & Maintenance</h3>
                <p className="text-muted-foreground">Ongoing support to ensure optimal performance and system reliability.</p>
              </div>
            </div>
            
            <div className="bg-primary/10 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Why Choose Our SAP BTP Implementation?</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Certified SAP professionals with extensive BTP experience</li>
                <li>Proven methodology for faster deployment</li>
                <li>24/7 support and monitoring</li>
                <li>Cost-effective solutions tailored to your budget</li>
              </ul>
            </div>
            
            <div className="text-center mt-12">
              <Button 
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="bg-accent hover:bg-accent/90 text-white px-8 py-3 text-lg"
              >
                Schedule Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SapBtpImplementation;