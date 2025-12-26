import { TrendingUp, Eye, Zap } from "lucide-react";

const WhyVideoAdsSection = () => {
  return (
    <section className="py-16 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Why Video Ads Outperform Every Other Format
          </h2>
          
          <p className="text-muted-foreground text-lg mb-10 text-center max-w-2xl mx-auto">
            Video consistently delivers higher engagement, better recall, and stronger conversions.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-background/50">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">1200% More Shares</h3>
              <p className="text-muted-foreground text-sm">
                Video generates 12x more shares than text and images. Viewers retain 95% of video messages vs 10% from text.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-background/50">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Algorithm Priority</h3>
              <p className="text-muted-foreground text-sm">
                Meta, TikTok, and YouTube all prioritize video. Reels get 22% more engagement, meaning lower CPMs for you.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-background/50">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Removes Barriers</h3>
              <p className="text-muted-foreground text-sm">
                Traditional video costs $5K-$50K. AI tools like Topview create broadcast-quality ads in minutes at a fraction of the cost.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyVideoAdsSection;
