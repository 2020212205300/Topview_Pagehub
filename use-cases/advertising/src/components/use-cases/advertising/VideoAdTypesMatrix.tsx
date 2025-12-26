import { Card, CardContent } from "@/components/ui/card";
import { Play, Square, Layers, MousePointer, Smartphone, Gift, Zap, Clock } from "lucide-react";

const adTypes = [
  {
    icon: Play,
    title: "In-Stream Ads",
    description: "Play before, during, or after video content. Skippable or non-skippable formats.",
    platforms: ["YouTube", "Meta", "TikTok"],
  },
  {
    icon: Square,
    title: "Out-Stream Ads",
    description: "Auto-play in non-video environments like articles and feeds.",
    platforms: ["Meta", "Instagram", "Web"],
  },
  {
    icon: Layers,
    title: "Linear Video Ads",
    description: "Traditional TV-style ads that interrupt main content.",
    platforms: ["YouTube", "CTV", "Streaming"],
  },
  {
    icon: MousePointer,
    title: "Interactive Ads",
    description: "Clickable elements, polls, and shoppable features for engagement.",
    platforms: ["TikTok", "Instagram", "Snapchat"],
  },
  {
    icon: Smartphone,
    title: "Native Video Ads",
    description: "Seamlessly blend with platform content for organic feel.",
    platforms: ["TikTok", "Instagram", "LinkedIn"],
  },
  {
    icon: Gift,
    title: "Rewarded Video Ads",
    description: "Users watch in exchange for in-app rewards or content.",
    platforms: ["Mobile Games", "Apps"],
  },
  {
    icon: Zap,
    title: "Bumper Ads",
    description: "6-second non-skippable ads for quick brand awareness.",
    platforms: ["YouTube", "Meta"],
  },
  {
    icon: Clock,
    title: "Stories & Reels Ads",
    description: "Full-screen vertical video ads in ephemeral content.",
    platforms: ["Instagram", "TikTok", "Snapchat"],
  },
];

const VideoAdTypesMatrix = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            8 Types of Video Ads You Can Create with AI
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Generate any video ad format with AI — from in-stream to interactive, 
            optimized for every platform and campaign goal.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {adTypes.map((type, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <type.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-sm mb-2">{type.title}</h3>
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                  {type.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {type.platforms.slice(0, 2).map((platform) => (
                    <span
                      key={platform}
                      className="text-[10px] px-2 py-0.5 bg-secondary rounded-full text-muted-foreground"
                    >
                      {platform}
                    </span>
                  ))}
                  {type.platforms.length > 2 && (
                    <span className="text-[10px] px-2 py-0.5 bg-secondary rounded-full text-muted-foreground">
                      +{type.platforms.length - 2}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoAdTypesMatrix;
