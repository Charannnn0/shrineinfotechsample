import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";
const CTA = () => {
  const { toast } = useToast();

  useEffect(() => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbw04kaLRZtqZkOqQI9gsEDnxqQsp5l_LvCueM4lm52ci6-7mEoK_AE47SMl04ZLVTeM/exec';
    
    const handleFormSubmit = (e: Event) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const data = Object.fromEntries(new FormData(form));
      
      // Add additional data
      const submissionData = {
        ...data,
        timestamp: new Date().toISOString(),
        source: "Business Consultation Form"
      };

      fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(submissionData),
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'no-cors'
      })
      .then(() => {
        toast({
          title: "Form Submitted Successfully!",
          description: "Thank you for your submission. We'll get back to you within 24 hours."
        });
        form.reset();
      })
      .catch(() => {
        toast({
          title: "Submission Error",
          description: "There was an issue submitting your form. Please try again.",
          variant: "destructive"
        });
      });
    };

    // Use a timeout to ensure the DOM is ready
    const timeout = setTimeout(() => {
      const form = document.getElementById('contactForm') as HTMLFormElement;
      if (form) {
        form.addEventListener('submit', handleFormSubmit);
      }
    }, 100);

    return () => {
      clearTimeout(timeout);
      const form = document.getElementById('contactForm') as HTMLFormElement;
      if (form) {
        form.removeEventListener('submit', handleFormSubmit);
      }
    };
  }, [toast]);
  return <section className="py-20 bg-gradient-to-br from-slate-900 via-black to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,193,7,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,165,0,0.1),transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Ready to Dominate Your 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              {" "}Industry Online?
            </span>
          </h2>
          
        </div>

        {/* Offer Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-center border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-bold text-white mb-3">Free Strategy Session</h3>
            <p className="text-slate-300">Discover how to 3x your online leads</p>
          </div>
          
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-center border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-white mb-3">Competitor Analysis</h3>
            <p className="text-slate-300">See what your competition is missing</p>
          </div>
          
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-center border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold text-white mb-3">Custom Design Mockup</h3>
            <p className="text-slate-300">Visualize your new website</p>
          </div>
        </div>

        {/* Urgency Banner */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 mb-12 text-center px-0 py-0">
          <div className="text-white">
            <div className="text-2xl font-bold mb-2">
          </div>
            <div className="text-red-100">
          </div>
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-6">Get Started Today</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <div className="text-white font-semibold">Call Now</div>
                  <div className="text-yellow-400 text-lg">+91- 93810 44375</div>
                </div>
              </div>
              
              <div data-email-section className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <div className="text-white font-semibold">Email Us</div>
                  <div className="text-yellow-400 text-lg">info@shrineinfotech.com</div>
                </div>
              </div>
            </div>

            <div className="text-slate-300">
              <div className="font-semibold text-white mb-2">Address:</div>
              <p>Plot No: 178 & 179, Jahanavi Township,<br />KT Annaram Road, Suryapet, Telangana-508213</p>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-8 pt-8 border-t border-slate-700">
              <div className="text-center">
                
                
              </div>
              <div className="text-center">
                
                
              </div>
              
            </div>
          </div>

          {/* Right - CTA Form */}
          <div id="consultation-form" className="bg-white rounded-3xl p-8 shadow-2xl">
            <h4 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Get In Touch With Our Team
            </h4>
            
            <form id="contactForm" className="space-y-4">
              <input type="text" name="name" placeholder="Your Name" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent" required />
              <input type="email" name="email" placeholder="Email Address" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent" required />
              <input type="tel" name="phone" placeholder="Phone Number" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent" required />
              <textarea name="message" placeholder="Tell us about your project" rows={4} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent" required />
              
              <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold py-4 text-lg transition-all duration-300 hover:scale-105">
                Send
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>
            
            <p className="text-sm text-slate-500 text-center mt-4">No obligations. No sales pressure. Just actionable insights to grow your business.</p>
          </div>
        </div>
      </div>
    </section>;
};
export default CTA;