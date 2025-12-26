import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const AdvertisingHero = () => {
  return (
    <section className="relative pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-widest text-muted-foreground uppercase mb-6">
            USE CASES
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">
            AI Video Ad Generator{" "}
            <span className="block">
              for <span className="gradient-text">Every Platform</span>
            </span>
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Create high-converting video ads for YouTube, TikTok, Meta, and more — 
            in any format, for any industry, powered by AI.
          </p>

          <Button
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-6 text-lg font-medium"
            onClick={() => window.open("https://www.topview.ai/", "_blank")}
          >
            Start Creating Video Ads
            <Sparkles className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AdvertisingHero;
