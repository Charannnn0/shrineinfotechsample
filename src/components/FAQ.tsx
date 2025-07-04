
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "2-4 weeks for custom websites, 1-2 weeks for e-commerce platforms. The timeline depends on the complexity and specific requirements of your project. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we provide 6 months of free technical support with every project, plus optional maintenance packages for ongoing updates, security monitoring, and performance optimization."
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Absolutely! We specialize in transforming outdated websites into modern conversion machines. We'll analyze your current site and create a comprehensive redesign strategy."
    },
    {
      question: "What if I'm not satisfied with the result?",
      answer: "We offer unlimited revisions until you're 100% happy with your website. Your satisfaction is our top priority, and we won't consider the project complete until you're thrilled with the results."
    },
    {
      question: "Do you help with SEO and digital marketing?",
      answer: "Yes! Every website we build is SEO-optimized from the ground up. We also offer comprehensive digital marketing services including Google Ads, social media marketing, and content strategy."
    },
    {
      question: "What industries do you work with?",
      answer: "We work with businesses across all industries including Real Estate, Education, Healthcare, E-Commerce, Finance, Hospitality, Technology, Manufacturing, Food & Beverage, and Fashion."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Frequently Asked 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">
              {" "}Questions
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get answers to the most common questions about our web development services
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-slate-200 rounded-xl px-6 data-[state=open]:border-yellow-400 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 hover:text-yellow-600 transition-colors">
                  <span className="text-lg font-semibold text-slate-900">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-slate-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-6 text-lg">
            Still have questions? We're here to help!
          </p>
          <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105">
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
