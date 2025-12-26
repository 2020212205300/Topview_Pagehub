import { Camera, Scissors, Copy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const useCases = [
  {
    icon: Camera,
    painPoint: "Don't Know How to Film?",
    solution: "AI Creates Professional Ads",
    description: "No cameras, no lighting setups, no actors. Upload product images and let AI generate studio-quality video ads with realistic visuals and smooth animations.",
    cta: "Create Without Filming",
    gradient: "from-pink-500/20 to-rose-500/20",
    iconColor: "text-pink-500",
  },
  {
    icon: Scissors,
    painPoint: "Don't Know How to Edit?",
    solution: "AI Handles All Post-Production",
    description: "Skip the learning curve of complex editing software. AI automatically adds transitions, background music, captions, and effects—all optimized for engagement.",
    cta: "Let AI Edit For You",
    gradient: "from-purple-500/20 to-violet-500/20",
    iconColor: "text-purple-500",
  },
  {
    icon: Copy,
    painPoint: "Running Out of Ideas?",
    solution: "Clone Viral Ads Instantly",
    description: "Browse our library of 10,000+ top-performing ads. Find a style you like and recreate it with your product in seconds. Stay ahead of trends effortlessly.",
    cta: "Browse Ad Library",
    gradient: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-500",
  },
];

const AdUseCases = () => {
  return (
    <section id="use-cases" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            <span className="gradient-text">AI Ad Generator</span> Use Cases
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Common challenges solved by AI-powered ad creation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <Card 
              key={index} 
              className={`bg-gradient-to-br ${useCase.gradient} border-border/30 hover:border-primary/30 transition-all h-full`}
            >
              <CardContent className="p-6 flex flex-col h-full">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-background/80 flex items-center justify-center mb-5">
                  <useCase.icon className={`w-7 h-7 ${useCase.iconColor}`} />
                </div>

                {/* Pain Point */}
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  {useCase.painPoint}
                </p>

                {/* Solution */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {useCase.solution}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-5">
                  {useCase.description}
                </p>

                {/* CTA */}
                <Button variant="outline" className="w-full bg-background/50 hover:bg-background">
                  {useCase.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdUseCases;
