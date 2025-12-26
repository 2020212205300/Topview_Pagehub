import { Upload, Palette, Video, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Upload,
    title: "Input Product Info",
    description: "Upload local files or simply paste your product URL.",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: Palette,
    title: "Select Ad Template",
    description: "Tell us which ad style you want to reference, or pick a viral template from our library.",
    gradient: "from-purple-500/20 to-violet-500/20",
  },
  {
    icon: Video,
    title: "Get Your Winning Ad",
    description: "Our AI Agent perfectly showcases your product in a complete, ready-to-launch video.",
    gradient: "from-pink-500/20 to-rose-500/20",
  },
];

const AdSteps = () => {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Create <span className="gradient-text">AI Product Ads</span> in 3 Simple Steps
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From product link to polished video ad in minutes—no experience required
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className={`h-full bg-gradient-to-br ${step.gradient} border-border/30 hover:border-primary/30 transition-all duration-300`}>
                <CardContent className="p-8 text-center">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  {/* Step number */}
                  <div className="text-xs font-medium text-muted-foreground mb-2">
                    Step {index + 1}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Arrow between cards (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 lg:-right-5 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-primary/50" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
            Try TopView AI Ad Generator Free
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AdSteps;
