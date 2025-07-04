
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Shrine InfoTech transformed our online presence completely. Our website traffic increased by 400% in just 3 months!",
      author: "Rajesh Kumar",
      position: "CEO, TechVision Solutions",
      rating: 5,
      result: "400% Traffic Increase"
    },
    {
      quote: "Professional, responsive, and delivered exactly what they promised. Our e-commerce sales doubled within 6 months.",
      author: "Priya Sharma",
      position: "Founder, StyleCraft Boutique",
      rating: 5,
      result: "200% Sales Growth"
    },
    {
      quote: "The best web development investment we've ever made. ROI was visible within weeks.",
      author: "Amit Gupta",
      position: "Director, GreenTech Industries",
      rating: 5,
      result: "Immediate ROI"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            What Our 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">
              {" "}Clients Say
            </span>
            {" "}About Us
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real results from real businesses. Here's how we've helped companies like yours succeed online.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white relative overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
              
              <CardContent className="p-8 space-y-6">
                {/* Rating Stars */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-slate-700 italic leading-relaxed text-lg">
                  "{testimonial.quote}"
                </blockquote>

                {/* Result Badge */}
                <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                  {testimonial.result}
                </div>

                {/* Author */}
                <div className="border-t pt-6">
                  <div className="font-bold text-slate-900 text-lg">{testimonial.author}</div>
                  <div className="text-slate-600 text-sm">{testimonial.position}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">
                100+
              </div>
              <div className="text-slate-600 font-medium">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">
                5★
              </div>
              <div className="text-slate-600 font-medium">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">
                150+
              </div>
              <div className="text-slate-600 font-medium">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">
                48h
              </div>
              <div className="text-slate-600 font-medium">Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
