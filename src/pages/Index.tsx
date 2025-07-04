
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Industries from "@/components/Industries";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <Process />
      <Industries />
      <FAQ />
      <CTA />
    </div>
  );
};

export default Index;
