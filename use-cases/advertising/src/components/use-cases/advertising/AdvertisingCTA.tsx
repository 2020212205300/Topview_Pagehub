import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const AdvertisingCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start creating{" "}
            <span className="block mt-2 gradient-text">high-performance</span>{" "}
            <span className="block mt-2">ad videos with AI</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-10">
            Join 50,000+ advertisers scaling their creative output with Topview.
          </p>

          <Button
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-10 py-6 text-lg font-medium"
            onClick={() => window.open("https://www.topview.ai/", "_blank")}
          >
            Get Started Free
            <Sparkles className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AdvertisingCTA;
