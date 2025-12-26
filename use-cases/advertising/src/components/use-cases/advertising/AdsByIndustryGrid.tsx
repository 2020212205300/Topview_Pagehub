import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Plane, Cpu, Gamepad2, Building2, Landmark, GraduationCap, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  {
    icon: ShoppingBag,
    name: "E-commerce",
    slug: "ecommerce",
    description: "Product showcases, UGC-style ads, flash sales",
    examples: ["Product demos", "Unboxing", "Before/After"],
  },
  {
    icon: Plane,
    name: "Travel & Tourism",
    slug: "travel",
    description: "Destination videos, hotel tours, booking promos",
    examples: ["Destination guides", "Hotel tours", "Deal alerts"],
  },
  {
    icon: Cpu,
    name: "AI & SaaS",
    slug: "saas",
    description: "Feature explainers, demo videos, testimonials",
    examples: ["Product demos", "How-it-works", "Testimonials"],
  },
  {
    icon: Gamepad2,
    name: "Gaming",
    slug: "gaming",
    description: "Gameplay footage, character reveals, event promos",
    examples: ["Gameplay clips", "Trailers", "Event promos"],
  },
  {
    icon: Building2,
    name: "Real Estate",
    slug: "real-estate",
    description: "Property tours, market updates, agent intros",
    examples: ["Virtual tours", "Listings", "Market updates"],
  },
  {
    icon: Landmark,
    name: "Finance",
    slug: "finance",
    description: "Educational content, product explainers, trust-building",
    examples: ["Explainers", "Tips", "Service intros"],
  },
  {
    icon: GraduationCap,
    name: "Education",
    slug: "education",
    description: "Course previews, instructor intros, student testimonials",
    examples: ["Course previews", "Testimonials", "Tips"],
  },
  {
    icon: Heart,
    name: "Health & Wellness",
    slug: "health",
    description: "Product benefits, expert advice, transformation stories",
    examples: ["Before/After", "Expert tips", "Product demos"],
  },
];

const AdsByIndustryGrid = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI Video Ads for E-commerce, SaaS, Travel & Every Industry
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            AI-powered video ads tailored for your specific industry and audience.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((industry) => (
            <Card 
              key={industry.slug}
              className="bg-card border-border hover:border-primary/50 transition-all group"
            >
              <CardContent className="p-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <industry.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">{industry.name}</h3>
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                  {industry.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {industry.examples.slice(0, 2).map((example) => (
                    <span
                      key={example}
                      className="text-[10px] px-2 py-0.5 bg-secondary rounded-full text-muted-foreground"
                    >
                      {example}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/use-cases/${industry.slug}-video-ads`}
                  className="mt-3 inline-block text-xs text-primary hover:underline"
                >
                  See examples →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdsByIndustryGrid;
