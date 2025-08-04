import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

const SapS4HanaMigration = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">SAP S/4HANA Migration</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Seamlessly migrate to SAP S/4HANA with our proven methodology and expert guidance.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Migration Assessment</h3>
                <p className="text-muted-foreground">Comprehensive analysis of your current system and migration readiness.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Data Migration</h3>
                <p className="text-muted-foreground">Secure and efficient transfer of your business-critical data to S/4HANA.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Process Optimization</h3>
                <p className="text-muted-foreground">Streamline business processes during migration for improved efficiency.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Post-Migration Support</h3>
                <p className="text-muted-foreground">Comprehensive support to ensure smooth operations after migration.</p>
              </div>
            </div>
            
            <div className="bg-primary/10 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Our S/4HANA Migration Approach</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Risk-free migration with minimal downtime</li>
                <li>Industry-specific best practices</li>
                <li>Comprehensive testing and validation</li>
                <li>Change management and user training</li>
              </ul>
            </div>
            
            <div className="bg-accent/10 p-8 rounded-lg border-l-4 border-accent mt-8">
              <h3 className="text-2xl font-semibold mb-4">Ready to Start Your S/4HANA Migration?</h3>
              <p className="text-muted-foreground mb-6">
                Get expert guidance and a customized migration strategy for your business.
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

export default SapS4HanaMigration;