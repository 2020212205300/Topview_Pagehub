import { useState } from "react";
import { Check, X, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const comparisonFeatures = [
  { name: "Product URL to Video", topview: true, heygen: false, tavus: false, synthesia: false },
  { name: "AI Avatar Generation", topview: true, heygen: true, tavus: true, synthesia: true },
  { name: "Unlimited Avatar Cloning", topview: true, heygen: false, tavus: true, synthesia: false },
  { name: "Voice Cloning", topview: true, heygen: true, tavus: true, synthesia: true },
  { name: "5M+ Viral Templates", topview: true, heygen: false, tavus: false, synthesia: false },
  { name: "TikTok/YouTube Ads Library", topview: true, heygen: false, tavus: false, synthesia: false },
  { name: "Emotional Voice Control", topview: true, heygen: false, tavus: false, synthesia: false },
  { name: "Smart Auto Captions", topview: true, heygen: true, tavus: false, synthesia: true },
  { name: "Animated Captions", topview: true, heygen: false, tavus: false, synthesia: false },
  { name: "Multi-language Support", topview: true, heygen: true, tavus: true, synthesia: true },
  { name: "Auto B-Roll Generation", topview: true, heygen: false, tavus: false, synthesia: false },
  { name: "AI Script Writing", topview: true, heygen: true, tavus: false, synthesia: true },
  { name: "Batch Video Creation", topview: true, heygen: true, tavus: true, synthesia: true },
  { name: "Custom Branding", topview: true, heygen: true, tavus: true, synthesia: true },
  { name: "Hook Templates Library", topview: true, heygen: false, tavus: false, synthesia: false },
];

const products = [
  { key: "topview", name: "Topview.ai", highlight: true },
  { key: "heygen", name: "Heygen", highlight: false },
  { key: "tavus", name: "Tavus", highlight: false },
  { key: "synthesia", name: "Synthesia", highlight: false },
];

const MultiProductComparison = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedFeatures = showAll ? comparisonFeatures : comparisonFeatures.slice(0, 8);

  const getFeatureCount = (productKey: string) => {
    return comparisonFeatures.filter(
      (f) => f[productKey as keyof typeof f] === true
    ).length;
  };

  const renderValue = (value: boolean) => {
    return value ? (
      <Check className="w-5 h-5 text-green-500 mx-auto" />
    ) : (
      <X className="w-5 h-5 text-muted-foreground/40 mx-auto" />
    );
  };

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Feature Comparison
        </h2>
        <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          See how Topview.ai compares to other leading AI video platforms across key features
        </p>

        {/* Feature Count Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-3xl mx-auto">
          {products.map((product) => (
            <div
              key={product.key}
              className={`text-center p-4 rounded-xl ${
                product.highlight
                  ? "bg-primary/10 border border-primary/30"
                  : "bg-card border border-border"
              }`}
            >
              <div className={`text-2xl font-bold ${product.highlight ? "text-primary" : "text-foreground"}`}>
                {getFeatureCount(product.key)}/{comparisonFeatures.length}
              </div>
              <div className="text-sm text-muted-foreground">{product.name}</div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-xl border border-border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px] md:w-[280px]">Feature</TableHead>
                {products.map((product) => (
                  <TableHead
                    key={product.key}
                    className={`text-center ${product.highlight ? "bg-primary/10" : ""}`}
                  >
                    <span className={product.highlight ? "text-primary font-semibold" : ""}>
                      {product.name}
                    </span>
                    {product.highlight && (
                      <span className="block text-xs text-primary/80 mt-1">Recommended</span>
                    )}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {displayedFeatures.map((feature, index) => (
                <TableRow key={feature.name} className={index % 2 === 0 ? "bg-muted/20" : ""}>
                  <TableCell className="font-medium">{feature.name}</TableCell>
                  {products.map((product) => (
                    <TableCell
                      key={product.key}
                      className={product.highlight ? "bg-primary/5" : ""}
                    >
                      {renderValue(feature[product.key as keyof typeof feature] as boolean)}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Show More Button */}
        <div className="text-center mt-6">
          <Button
            variant="outline"
            onClick={() => setShowAll(!showAll)}
            className="gap-2"
          >
            {showAll ? (
              <>
                Show Less <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Show All {comparisonFeatures.length} Features <ChevronDown className="w-4 h-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MultiProductComparison;
