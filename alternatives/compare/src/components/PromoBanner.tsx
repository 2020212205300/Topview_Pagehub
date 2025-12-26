import { Gift, Sparkles, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const PromoBanner = () => {
  const [showUpgrade, setShowUpgrade] = useState(true);

  // Toggle between upgrade announcement and promo every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowUpgrade((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-10 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 confetti-container flex items-center justify-center gap-3 overflow-hidden">
      <div
        className={`flex items-center gap-3 transition-all duration-500 ${
          showUpgrade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full absolute"
        }`}
      >
        <Sparkles className="w-4 h-4 text-primary" />
        <span className="text-sm font-medium text-foreground">NEW</span>
        <span className="text-sm text-muted-foreground">
          Topview is now your AI Video Agent — Smarter & More Automated
        </span>
        <ArrowRight className="w-4 h-4 text-primary" />
      </div>

      <div
        className={`flex items-center gap-3 transition-all duration-500 ${
          !showUpgrade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full absolute"
        }`}
      >
        <Gift className="w-5 h-5 text-yellow-400" />
        <span className="text-sm font-medium text-foreground">HOLIDAY SALE</span>
        <span className="px-2 py-0.5 bg-yellow-500/20 rounded text-yellow-400 text-xs font-semibold">
          🏷️ 47% OFF
        </span>
        <span className="text-sm text-muted-foreground">Limited Time Only!</span>
      </div>
    </div>
  );
};

export default PromoBanner;
