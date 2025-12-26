import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const testimonial = {
  quote:
    "Topview's AI Video Agent helped iLive by SHOPNOW grow our AI video production services revenue by 80%, while reducing labor and costs by 50%.",
  author: "Long Ma",
  role: "CEO, Shopnow Technology JSC",
  stats: [
    { value: "5x", label: "Lower costs" },
    { value: "30%", label: "Sales increase" },
    { value: "70%", label: "Time saved" },
  ],
  caseStudyLink:
    "https://www.topview.ai/case-studies/shopnow-technology-case-study-social-commerce",
};

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-card/30">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-card border-border">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <blockquote className="text-lg font-medium mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {testimonial.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                      <p className="text-[10px] text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => window.open(testimonial.caseStudyLink, "_blank")}
                >
                  Read Case Study →
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TestimonialsSection;
