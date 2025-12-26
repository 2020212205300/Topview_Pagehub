import { Package, Users, MessageSquare, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const adTypes = [
  {
    icon: Package,
    title: "Product Showcase Ads",
    description: "Highlight product features with dynamic visuals, zoom effects, and benefit-focused messaging. Perfect for new launches.",
    example: "360° product views, feature callouts, price reveals",
    color: "text-pink-500",
    bg: "bg-pink-500/10",
  },
  {
    icon: Users,
    title: "UGC-Style Ads",
    description: "AI-generated content that mimics authentic user-generated videos. Feels organic while being fully produced.",
    example: "Unboxing, try-on, first impressions",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: MessageSquare,
    title: "Testimonial Ads",
    description: "Social proof videos featuring AI avatars or text-based reviews with engaging visual storytelling.",
    example: "Customer quotes, star ratings, before/after",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Lightbulb,
    title: "Explainer Ads",
    description: "Educational content that demonstrates product value through problem-solution narratives.",
    example: "How-to guides, benefit breakdowns, tutorials",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
];

const AdTypesSection = () => {
  return (
    <section id="ad-types" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Types of <span className="gradient-text">AI Video Ads</span> You Can Create
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Generate diverse ad formats tailored to your marketing goals and target audience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {adTypes.map((type, index) => (
            <Card key={index} className="bg-card border-border/30 hover:border-primary/30 transition-all overflow-hidden group">
              <CardContent className="p-0">
                <div className="flex">
                  {/* Icon Section */}
                  <div className={`${type.bg} p-6 flex items-center justify-center`}>
                    <type.icon className={`w-10 h-10 ${type.color}`} />
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6 flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {type.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                      {type.description}
                    </p>
                    <p className="text-xs text-muted-foreground/70">
                      <span className="font-medium">Examples:</span> {type.example}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdTypesSection;
