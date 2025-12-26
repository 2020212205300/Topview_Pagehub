import { Link2, Sparkles, Eye, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Link2,
    title: "One-Click Product Link Import",
    description: "TopView AI Ad Generator is compatible with all major e-commerce platforms. Whether it's Amazon, Shopify, Etsy, or TikTok Shop, we perfectly scrape and analyze your product details instantly.",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: Sparkles,
    title: "Advanced Built-in Prompt System",
    description: "Stop struggling with complex prompts. We offer built-in, pre-set prompt combinations tailored for short video sales and viral marketing styles. Just select the vibe, and the AI handles the rest.",
    gradient: "from-purple-500/20 to-violet-500/20",
  },
  {
    icon: Eye,
    title: "Hyper-Realistic Visuals",
    description: "From accurate product rendering to natural AI Avatar expressions and movements, we deliver high-fidelity visuals that make your ads look professional, authentic, and trustworthy.",
    gradient: "from-pink-500/20 to-rose-500/20",
  },
];

const AdFeatures = () => {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Powerful Features for <span className="gradient-text">AI Ad Creation</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to create professional video ads without the learning curve
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className={`h-full bg-gradient-to-br ${feature.gradient} border-border/30 hover:border-primary/30 transition-all duration-300`}
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
            Try AI Video Ads Generator Free
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AdFeatures;
