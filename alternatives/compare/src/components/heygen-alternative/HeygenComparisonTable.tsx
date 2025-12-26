import { Check, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const comparisonFeatures = [
  { feature: "AI Video Editor: Product URL To Video", topview: true, heygen: false },
  { feature: "AI Video Editor: Media to Video", topview: true, heygen: false },
  { feature: "AI Video Editor: Brand kit", topview: true, heygen: true },
  { feature: "AI Photo Avatar", topview: true, heygen: true },
  { feature: "Video Script Extractor", topview: true, heygen: false },
  { feature: "Long video to shorts", topview: true, heygen: false },
  { feature: "AI Audio Generator", topview: true, heygen: true },
  { feature: "Tiktok ADS Library", topview: true, heygen: false },
  { feature: "Youtube ADS Library", topview: true, heygen: false },
  { feature: "Viral Video Hook", topview: true, heygen: false },
  { feature: "Product URL To Video Chrome Plugin", topview: true, heygen: false },
  { feature: "AI Analysis Scene", topview: true, heygen: false },
  { feature: "Auto select clip", topview: true, heygen: false },
  { feature: "Customizable Script", topview: true, heygen: true },
  { feature: "Video Editor", topview: true, heygen: true },
  { feature: "Viral Script Type", topview: true, heygen: false },
  { feature: "AI Script Generator", topview: "3-12 scripts", heygen: false },
  { feature: "Viral Hooks", topview: true, heygen: false },
  { feature: "Script with Emoji", topview: true, heygen: false },
  { feature: "Customize Studio Avatar", topview: true, heygen: true },
  { feature: "Customize Instant Photo Avatar", topview: "Coming Soon", heygen: true },
  { feature: "Customize Instant Video Avatar", topview: "Coming Soon", heygen: true },
  { feature: "AI Photo Avatar with Full Body", topview: true, heygen: true },
  { feature: "Ultra realistic voice generator", topview: true, heygen: true },
  { feature: "Emotional voice special for Tiktok & Reels", topview: true, heygen: false },
  { feature: "Voice clone", topview: true, heygen: true },
  { feature: "Smart Captions with keyword highlight", topview: true, heygen: true },
  { feature: "Animated Captions", topview: true, heygen: false },
  { feature: "Smart Emoji Captions", topview: true, heygen: false },
];

const HeygenComparisonTable = () => {
  const [showDetails, setShowDetails] = useState(false);
  const displayedFeatures = showDetails ? comparisonFeatures : comparisonFeatures.slice(0, 12);

  const renderValue = (value: boolean | string) => {
    if (typeof value === "string") {
      return <span className="text-sm text-muted-foreground">{value}</span>;
    }
    return value ? (
      <Check className="w-5 h-5 text-green-500" />
    ) : (
      <X className="w-5 h-5 text-red-500/60" />
    );
  };

  // Calculate stats
  const topviewWins = comparisonFeatures.filter(f => f.topview === true && f.heygen === false).length;
  const bothHave = comparisonFeatures.filter(f => f.topview === true && f.heygen === true).length;
  const heygenOnly = comparisonFeatures.filter(f => f.topview === false && f.heygen === true).length;

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Heygen vs Topview.ai: Feature Comparison
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            See why Topview.ai is the <strong>best Heygen alternative</strong> with more features at better value
          </p>

          {/* Stats Summary */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
              <div className="text-3xl font-bold text-primary">{topviewWins}</div>
              <div className="text-sm text-muted-foreground">Topview Exclusive Features</div>
            </div>
            <div className="bg-muted/50 border border-border/30 rounded-xl p-4">
              <div className="text-3xl font-bold text-foreground">{bothHave}</div>
              <div className="text-sm text-muted-foreground">Shared Features</div>
            </div>
            <div className="bg-muted/30 border border-border/30 rounded-xl p-4">
              <div className="text-3xl font-bold text-muted-foreground">{heygenOnly}</div>
              <div className="text-sm text-muted-foreground">Heygen Only</div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border/30 overflow-hidden bg-card/50">
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-muted/30 border-b border-border/30">
            <div className="p-4 font-semibold text-foreground">Feature-wise comparison</div>
            <div className="p-4 font-semibold text-center text-primary">TopView.ai</div>
            <div className="p-4 font-semibold text-center text-muted-foreground">Heygen</div>
          </div>

          {/* Table Body */}
          {displayedFeatures.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 border-b border-border/20 ${
                index % 2 === 0 ? "bg-background/50" : "bg-muted/10"
              }`}
            >
              <div className="p-4 text-sm text-foreground">{item.feature}</div>
              <div className="p-4 flex justify-center items-center">
                {renderValue(item.topview)}
              </div>
              <div className="p-4 flex justify-center items-center">
                {renderValue(item.heygen)}
              </div>
            </div>
          ))}
        </div>

        {/* Show Details Button */}
        <div className="text-center mt-6">
          <Button
            variant="outline"
            onClick={() => setShowDetails(!showDetails)}
            className="px-8"
          >
            {showDetails ? "Show Less" : "Show Details"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeygenComparisonTable;
