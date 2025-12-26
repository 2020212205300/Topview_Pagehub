import { X, Minus, Check, Clock, DollarSign, Zap, Brain, RefreshCw, Sparkles } from "lucide-react";

const comparisonData = [
  {
    feature: "Time to Create",
    icon: Clock,
    manual: "Days to Weeks",
    generator: "Hours",
    agent: "Minutes",
  },
  {
    feature: "Cost",
    icon: DollarSign,
    manual: "$1,000 - $10,000+",
    generator: "$50 - $500",
    agent: "From $0.5",
  },
  {
    feature: "Creative Control",
    icon: Sparkles,
    manual: "Full but complex",
    generator: "Template-based",
    agent: "Natural language",
  },
  {
    feature: "Learning Curve",
    icon: Brain,
    manual: "Steep (months)",
    generator: "Moderate (days)",
    agent: "None (just talk)",
  },
  {
    feature: "Iteration Speed",
    icon: RefreshCw,
    manual: "Slow & expensive",
    generator: "Manual tweaks",
    agent: "Instant refinement",
  },
  {
    feature: "Scalability",
    icon: Zap,
    manual: "Limited",
    generator: "Moderate",
    agent: "Unlimited",
  },
];

const VideoCreationComparison = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            The Evolution
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why <span className="gradient-text">AI Video Agent</span> is Different
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how video creation has evolved from manual production to AI-powered agents.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="hidden md:block" />
            <div className="text-center p-4 rounded-2xl bg-muted/30">
              <span className="text-muted-foreground font-medium text-sm">Traditional</span>
              <h3 className="text-lg font-bold mt-1">Manual Production</h3>
            </div>
            <div className="text-center p-4 rounded-2xl bg-muted/30">
              <span className="text-muted-foreground font-medium text-sm">Current Gen</span>
              <h3 className="text-lg font-bold mt-1">Video Generators</h3>
            </div>
            <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 border border-primary/30">
              <span className="text-primary font-medium text-sm">Next Gen</span>
              <h3 className="text-lg font-bold mt-1 gradient-text">AI Video Agent</h3>
            </div>
          </div>

          {/* Rows */}
          <div className="space-y-3">
            {comparisonData.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-4 gap-4 items-center p-4 rounded-2xl bg-card/50 hover:bg-card/80 transition-colors border border-border/30"
              >
                {/* Feature name */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <row.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-sm md:text-base">{row.feature}</span>
                </div>

                {/* Manual */}
                <div className="text-center">
                  <span className="text-muted-foreground text-sm md:text-base">{row.manual}</span>
                </div>

                {/* Generator */}
                <div className="text-center">
                  <span className="text-muted-foreground text-sm md:text-base">{row.generator}</span>
                </div>

                {/* Agent */}
                <div className="text-center">
                  <span className="text-primary font-semibold text-sm md:text-base">{row.agent}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Summary */}
          <div className="grid grid-cols-4 gap-4 mt-8">
            <div className="hidden md:block" />
            <div className="text-center p-4">
              <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-2">
                <X className="w-6 h-6 text-destructive" />
              </div>
              <span className="text-muted-foreground text-sm">High barrier, slow iteration</span>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center mx-auto mb-2">
                <Minus className="w-6 h-6 text-yellow-500" />
              </div>
              <span className="text-muted-foreground text-sm">Better, but still manual work</span>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <span className="text-primary text-sm font-medium">Just describe, AI delivers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCreationComparison;
