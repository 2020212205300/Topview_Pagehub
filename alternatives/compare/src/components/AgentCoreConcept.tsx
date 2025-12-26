import { Upload, Link, Video, Film, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: Upload,
    secondaryIcon: Link,
    title: "Your Product",
    description: "Upload images or paste a product URL — AI extracts what it needs automatically.",
    gradient: "from-purple-500/20 to-violet-500/20",
  },
  {
    icon: Video,
    title: "Reference Video",
    description: "Provide any video you like — AI analyzes shots, pacing, and storytelling.",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: Film,
    title: "AI-Cloned Video",
    description: "Get a multi-shot, complete video that matches your reference style.",
    gradient: "from-pink-500/20 to-rose-500/20",
  },
];

const AgentCoreConcept = () => {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Clone Any Video Style with <span className="gradient-text">AI</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Upload your product, provide a reference video, and let AI recreate the entire video concept with your product.
          </p>
        </div>

        {/* Three-step flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className={`h-full bg-gradient-to-br ${step.gradient} border-border/30 hover:border-primary/30 transition-all duration-300`}>
                <CardContent className="p-8 text-center">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-6">
                    {step.secondaryIcon ? (
                      <div className="flex items-center gap-1">
                        <step.icon className="w-6 h-6 text-primary" />
                        <span className="text-muted-foreground">/</span>
                        <step.secondaryIcon className="w-5 h-5 text-primary" />
                      </div>
                    ) : (
                      <step.icon className="w-8 h-8 text-primary" />
                    )}
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

        {/* Bottom highlight */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-primary font-medium">
              Not just editing — AI understands and recreates the entire video concept
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentCoreConcept;
