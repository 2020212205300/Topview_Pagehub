import { Monitor, Smartphone, Square } from "lucide-react";

const specs = [
  {
    icon: Monitor,
    ratio: "16:9",
    name: "Landscape",
    resolution: "1920×1080",
    platforms: "YouTube, LinkedIn, Facebook Feed",
    duration: "15-60 sec",
  },
  {
    icon: Smartphone,
    ratio: "9:16",
    name: "Vertical",
    resolution: "1080×1920",
    platforms: "TikTok, Reels, Stories, Shorts",
    duration: "9-30 sec",
  },
  {
    icon: Square,
    ratio: "1:1",
    name: "Square",
    resolution: "1080×1080",
    platforms: "Instagram Feed, Facebook, Twitter",
    duration: "15-30 sec",
  },
];

const QuickSpecsSection = () => {
  return (
    <section className="py-16 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Video Ad Quick Reference: Sizes & Specs
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            {specs.map((spec) => {
              const Icon = spec.icon;
              return (
                <div
                  key={spec.ratio}
                  className="bg-background border border-border rounded-xl p-5 text-center"
                >
                  <div className="flex justify-center mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{spec.ratio}</div>
                  <div className="text-sm text-muted-foreground mb-3">{spec.name} • {spec.resolution}</div>
                  <div className="text-xs text-muted-foreground mb-2">{spec.platforms}</div>
                  <div className="inline-block px-2 py-1 bg-primary/10 rounded text-xs text-primary font-medium">
                    {spec.duration}
                  </div>
                </div>
              );
            })}
          </div>
          
          <p className="text-center text-sm text-muted-foreground mt-6">
            Topview AI automatically generates and resizes video ads for all platforms and aspect ratios.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuickSpecsSection;
