import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

const SapFioriConsulting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">SAP Fiori Consulting</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Strategic guidance and expert consultation to maximize your SAP Fiori implementation success.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Strategy & Planning</h3>
                <p className="text-muted-foreground">Develop comprehensive Fiori roadmaps aligned with your business objectives.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Architecture Review</h3>
                <p className="text-muted-foreground">Assess and optimize your current Fiori architecture for better performance.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
                <p className="text-muted-foreground">Implement industry standards and SAP recommended practices for Fiori deployments.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Training & Support</h3>
                <p className="text-muted-foreground">Comprehensive training programs to empower your team with Fiori expertise.</p>
              </div>
            </div>
            
            <div className="bg-primary/10 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Why Choose Our Fiori Consulting?</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Deep expertise in SAP Fiori ecosystems</li>
                <li>Proven track record across industries</li>
                <li>Customized solutions for your business needs</li>
                <li>Ongoing support and optimization services</li>
              </ul>
            </div>
            
            <div className="text-center mt-12">
              <Button 
                onClick={() => {
                  window.location.href = '/';
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

export default SapFioriConsulting;