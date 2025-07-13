
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import OtherServices from "@/components/OtherServices";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Industries from "@/components/Industries";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <OtherServices />
      <Testimonials />
      <Process />
      <Industries />
      <FAQ />
      <CTA />
    </div>
  );
};

export default Index;
