import { useState } from "react";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["All", "Fashion", "Beauty", "Tech", "Home", "Food"];

const trendingAds = [
  { id: 1, category: "Fashion", views: "2.3M", thumbnail: "bg-gradient-to-br from-pink-500/30 to-purple-500/30" },
  { id: 2, category: "Beauty", views: "1.8M", thumbnail: "bg-gradient-to-br from-rose-500/30 to-pink-500/30" },
  { id: 3, category: "Tech", views: "3.1M", thumbnail: "bg-gradient-to-br from-cyan-500/30 to-blue-500/30" },
  { id: 4, category: "Home", views: "1.5M", thumbnail: "bg-gradient-to-br from-amber-500/30 to-orange-500/30" },
  { id: 5, category: "Food", views: "2.7M", thumbnail: "bg-gradient-to-br from-green-500/30 to-emerald-500/30" },
  { id: 6, category: "Fashion", views: "1.9M", thumbnail: "bg-gradient-to-br from-violet-500/30 to-purple-500/30" },
  { id: 7, category: "Beauty", views: "2.1M", thumbnail: "bg-gradient-to-br from-pink-500/30 to-rose-500/30" },
  { id: 8, category: "Tech", views: "4.2M", thumbnail: "bg-gradient-to-br from-blue-500/30 to-indigo-500/30" },
];

const TrendingAdsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredAds = activeCategory === "All" 
    ? trendingAds 
    : trendingAds.filter(ad => ad.category === activeCategory);

  return (
    <section id="trending-ads" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Trending Ads in Our <span className="gradient-text">Library</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse viral ad formats from top-performing campaigns. Clone any style with one click.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Ads Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {filteredAds.map((ad) => (
            <div
              key={ad.id}
              className={`group relative aspect-[9/16] ${ad.thumbnail} rounded-xl overflow-hidden cursor-pointer border border-border/30 hover:border-primary/50 transition-all`}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/20 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                  <Play className="w-5 h-5 text-primary-foreground fill-current ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="text-xs bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full text-foreground">
                  {ad.category}
                </span>
                <span className="text-xs bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full text-foreground">
                  {ad.views} views
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="outline" className="group">
            Browse Full Ad Library
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingAdsSection;
