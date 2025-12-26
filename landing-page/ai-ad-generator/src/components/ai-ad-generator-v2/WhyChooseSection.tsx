import { Video, TrendingUp, MousePointer, ShoppingBag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const advantages = [
  {
    icon: Video,
    title: "No Filming Required",
    description: "Create professional video ads without cameras, studios, or actors. AI generates hyper-realistic visuals from product images alone.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: TrendingUp,
    title: "Trained on Viral Ads",
    description: "Our AI learned from millions of top-performing ads across TikTok, Instagram, and Facebook to replicate winning formulas.",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    icon: MousePointer,
    title: "One-Click Recreation",
    description: "See a competitor's ad you love? Clone its style, structure, and energy in seconds with our Ad Library feature.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Integration",
    description: "Direct integration with Amazon, Shopify, Etsy, and TikTok Shop. Paste your product link and get an ad instantly.",
    gradient: "from-amber-500 to-orange-500",
  },
];

const platforms = ["TikTok", "Instagram", "Facebook", "YouTube", "Amazon"];

const WhyChooseSection = () => {
  return (
    <section id="why-choose" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Why Choose TopView <span className="gradient-text">AI Ad Generator</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The most powerful AI-driven ad creation platform, built specifically for e-commerce success.
          </p>
        </div>

        {/* Advantage Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {advantages.map((advantage, index) => (
            <Card key={index} className="bg-card border-border/30 hover:border-primary/30 transition-all group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${advantage.gradient} flex items-center justify-center flex-shrink-0`}>
                    <advantage.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {advantage.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Platform Logos */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">Optimized for all major platforms</p>
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform) => (
              <span
                key={platform}
                className="px-4 py-2 bg-card border border-border/50 rounded-full text-sm text-muted-foreground"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
