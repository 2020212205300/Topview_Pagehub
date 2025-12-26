import { Sparkles, Zap, Target, Palette } from "lucide-react";

const features = [
  { icon: Sparkles, text: "AI-powered script generation" },
  { icon: Zap, text: "Automatic video editing & transitions" },
  { icon: Target, text: "Platform-optimized formats" },
  { icon: Palette, text: "Brand-consistent visuals" },
];

const WhatIsSection = () => {
  return (
    <section id="what-is" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Illustration */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 via-purple-500/20 to-cyan-500/20 rounded-3xl flex items-center justify-center border border-border/30">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-white" />
                </div>
                <p className="text-lg font-medium text-foreground">AI-Powered Ad Creation</p>
                <p className="text-sm text-muted-foreground mt-2">From product to video in minutes</p>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-2xl border border-primary/20 flex items-center justify-center animate-pulse">
              <span className="text-2xl">🎬</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-500/10 rounded-xl border border-cyan-500/20 flex items-center justify-center animate-pulse delay-500">
              <span className="text-xl">✨</span>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              What Is an <span className="gradient-text">AI Ad Generator</span>?
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                An AI ad generator is an intelligent tool that automatically creates professional video advertisements 
                from minimal input. Simply provide a product URL, upload images, or describe your product—and AI 
                handles the rest: scripting, visual composition, transitions, music, and captions.
              </p>
              <p>
                Unlike traditional video production that requires filming equipment, editing software, and creative 
                expertise, AI ad generators democratize video marketing. They analyze successful ad patterns, understand 
                platform algorithms, and generate content optimized for engagement and conversions.
              </p>
              <p>
                TopView's AI Ad Generator goes further by training on millions of viral ads, enabling it to replicate 
                proven formats while maintaining your brand's unique voice.
              </p>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
