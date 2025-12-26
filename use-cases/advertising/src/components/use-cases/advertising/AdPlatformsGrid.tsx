import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const platforms = [
  {
    name: "YouTube",
    slug: "youtube",
    aspectRatios: ["16:9", "9:16 Shorts"],
    adTypes: ["Pre-roll", "Mid-roll", "Bumper", "Shorts"],
    color: "from-red-500/20 to-red-600/10",
  },
  {
    name: "TikTok",
    slug: "tiktok",
    aspectRatios: ["9:16", "1:1"],
    adTypes: ["In-Feed", "TopView", "Spark Ads"],
    color: "from-pink-500/20 to-cyan-500/10",
  },
  {
    name: "Meta (Facebook)",
    slug: "meta",
    aspectRatios: ["1:1", "4:5", "16:9", "9:16"],
    adTypes: ["Feed", "Stories", "Reels", "In-Stream"],
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    name: "Instagram",
    slug: "instagram",
    aspectRatios: ["1:1", "4:5", "9:16"],
    adTypes: ["Feed", "Stories", "Reels", "Explore"],
    color: "from-purple-500/20 to-pink-500/10",
  },
  {
    name: "LinkedIn",
    slug: "linkedin",
    aspectRatios: ["16:9", "1:1", "9:16"],
    adTypes: ["Sponsored Content", "Video Ads"],
    color: "from-blue-600/20 to-blue-700/10",
  },
  {
    name: "Snapchat",
    slug: "snapchat",
    aspectRatios: ["9:16"],
    adTypes: ["Snap Ads", "Story Ads", "AR Lenses"],
    color: "from-yellow-400/20 to-yellow-500/10",
  },
];

const AdPlatformsGrid = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI Video Ads for YouTube, TikTok, Meta & More
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Create video ads optimized for each platform's unique specifications 
            and audience behavior.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {platforms.map((platform) => (
            <Card 
              key={platform.slug} 
              className={`bg-gradient-to-br ${platform.color} border-border hover:border-primary/50 transition-all group`}
            >
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-lg">{platform.name}</h3>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                      Aspect Ratios
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {platform.aspectRatios.map((ratio) => (
                        <span
                          key={ratio}
                          className="text-xs px-2 py-0.5 bg-background/50 rounded text-foreground"
                        >
                          {ratio}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                      Ad Types
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {platform.adTypes.join(" • ")}
                    </p>
                  </div>
                </div>

                <Link
                  to={`/use-cases/${platform.slug}-video-ads`}
                  className="mt-4 inline-block text-xs text-primary hover:underline"
                >
                  Create {platform.name} Ads →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdPlatformsGrid;
