import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

const SapIntegrationServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">SAP Integration Services</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Connect your SAP systems with third-party applications for seamless data flow and business process automation.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">API Integration</h3>
                <p className="text-muted-foreground">Robust API solutions for connecting SAP with external systems and applications.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Real-time Data Sync</h3>
                <p className="text-muted-foreground">Ensure data consistency across all systems with real-time synchronization.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Cloud Integration</h3>
                <p className="text-muted-foreground">Seamless integration between on-premise SAP and cloud-based applications.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Process Automation</h3>
                <p className="text-muted-foreground">Automate business processes across integrated systems for improved efficiency.</p>
              </div>
            </div>
            
            <div className="bg-primary/10 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Integration Excellence</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Enterprise-grade security and compliance</li>
                <li>Scalable integration architecture</li>
                <li>Monitoring and error handling</li>
                <li>Performance optimization and tuning</li>
              </ul>
            </div>
            
            <div className="text-center mt-12">
              <Button 
                onClick={() => document.querySelector('[data-email-section]')?.scrollIntoView({ behavior: 'smooth' })}
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

export default SapIntegrationServices;