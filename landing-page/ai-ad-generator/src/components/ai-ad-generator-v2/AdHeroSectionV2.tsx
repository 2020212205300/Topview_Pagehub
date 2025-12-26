import { Image, Video, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const AdHeroSectionV2 = () => {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* H1 Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
            <span className="gradient-text">AI Ad Generator</span> — Create Video Ads with AI
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Turn any product into scroll-stopping video ads in minutes. No filming, no editing skills required.
          </p>
        </div>

        {/* Glass Card Input Box - Homepage Style */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="glass-card rounded-2xl p-6">
            <p className="text-muted-foreground text-left mb-4">
              Paste a product URL, upload images, or add a reference video — AI will create your ad instantly.
            </p>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Image className="w-4 h-4" />
                Add Image & Link
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Video className="w-4 h-4" />
                Reference Video
              </button>
              <div className="flex-1" />
              <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:opacity-90 transition-opacity">
                <ArrowUp className="w-5 h-5 text-primary-foreground" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
            Generate Your First Ad Free
          </Button>
          <p className="text-sm text-muted-foreground mt-3">No credit card required</p>
        </div>
      </div>
    </section>
  );
};

export default AdHeroSectionV2;
