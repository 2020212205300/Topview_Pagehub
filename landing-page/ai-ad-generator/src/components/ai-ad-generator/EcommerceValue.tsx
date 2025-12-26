import { DollarSign, Zap, TrendingUp, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: DollarSign,
    title: "Cost-Saving",
    description: "Eliminate the high costs of hiring professional photographers, models, and studios. Generate studio-quality ads for a fraction of the price.",
  },
  {
    icon: Zap,
    title: "High Efficiency",
    description: "Access smart clip stitching, trending background audio, dynamic caption styles, and transitions. Everything you need is right inside TopView.",
  },
  {
    icon: TrendingUp,
    title: "Trend Monitoring",
    description: "Stay ahead of the curve. Monitor the latest industry trends and hot ads in our Ad Library so you never miss a viral wave.",
  },
];

const EcommerceValue = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            The Best <span className="gradient-text">AI Ad Generator</span> for E-commerce Sellers
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From production and editing to publishing and tracking, manage your entire creative workflow on TopView.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="h-full bg-card border-border/30 hover:border-primary/30 transition-all duration-300"
            >
              <CardContent className="p-8 text-center">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {benefit.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
            Try AI Product Ad Generator Free
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EcommerceValue;
