import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Smartphone, Square } from "lucide-react";

const specs = [
  {
    icon: Monitor,
    ratio: "16:9",
    name: "Landscape",
    resolution: "1920×1080",
    platforms: ["YouTube", "Meta Feed", "LinkedIn", "CTV"],
    duration: "15s - 60s",
    bestFor: "Pre-roll, In-stream, TV",
  },
  {
    icon: Smartphone,
    ratio: "9:16",
    name: "Vertical",
    resolution: "1080×1920",
    platforms: ["TikTok", "Reels", "Stories", "Shorts"],
    duration: "6s - 60s",
    bestFor: "Mobile-first, Stories, Shorts",
  },
  {
    icon: Square,
    ratio: "1:1",
    name: "Square",
    resolution: "1080×1080",
    platforms: ["Instagram Feed", "Meta Feed", "LinkedIn"],
    duration: "15s - 60s",
    bestFor: "Feed ads, Carousel",
  },
  {
    icon: Smartphone,
    ratio: "4:5",
    name: "Portrait",
    resolution: "1080×1350",
    platforms: ["Instagram Feed", "Meta Feed"],
    duration: "15s - 60s",
    bestFor: "Mobile feed optimization",
  },
];

const AdSpecsTable = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Video Ad Sizes & Specs: 16:9, 9:16, 1:1 Explained
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Topview AI automatically generates videos in the right format for each platform.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {specs.map((spec) => (
            <Card key={spec.ratio} className="bg-card border-border">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <spec.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{spec.ratio}</p>
                    <p className="text-xs text-muted-foreground">{spec.name}</p>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      Resolution
                    </p>
                    <p className="font-medium">{spec.resolution}</p>
                  </div>
                  
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      Duration
                    </p>
                    <p className="font-medium">{spec.duration}</p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      Best For
                    </p>
                    <p className="text-muted-foreground text-xs">{spec.bestFor}</p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      Platforms
                    </p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {spec.platforms.slice(0, 3).map((platform) => (
                        <span
                          key={platform}
                          className="text-[10px] px-2 py-0.5 bg-secondary rounded text-muted-foreground"
                        >
                          {platform}
                        </span>
                      ))}
                      {spec.platforms.length > 3 && (
                        <span className="text-[10px] px-2 py-0.5 bg-secondary rounded text-muted-foreground">
                          +{spec.platforms.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdSpecsTable;
