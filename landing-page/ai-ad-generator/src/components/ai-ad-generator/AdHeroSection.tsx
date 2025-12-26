import { Link, Upload, Library, Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const adPreviews = [
  { id: 1, category: "Fashion", views: "2.4M" },
  { id: 2, category: "Beauty", views: "1.8M" },
  { id: 3, category: "Tech", views: "3.1M" },
  { id: 4, category: "Food", views: "890K" },
  { id: 5, category: "Fitness", views: "1.2M" },
  { id: 6, category: "Home", views: "750K" },
];

const AdHeroSection = () => {
  return (
    <section className="pt-32 pb-16 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        {/* H1 Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-text">AI Ad Generator</span>
            <br />
            <span className="text-foreground">Create Viral Video Ads in Minutes</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Turn your product links, images, or competitor ads into scroll-stopping video ads. 
            No filming, no editing skills needed—just results.
          </p>
        </div>

        {/* Three Input Options */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8">
            <Link className="w-5 h-5" />
            Paste Product URL
          </Button>
          <Button size="lg" variant="outline" className="gap-2 border-border/50 hover:bg-secondary/50">
            <Upload className="w-5 h-5" />
            Upload Images
          </Button>
          <Button size="lg" variant="outline" className="gap-2 border-border/50 hover:bg-secondary/50">
            <Library className="w-5 h-5" />
            Pick from Ad Library
          </Button>
        </div>

        {/* Ad Library Preview Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-foreground">
              Trending Ads in Our Library
            </h2>
            <a 
              href="#" 
              className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
            >
              Browse Full Ad Library
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {adPreviews.map((ad) => (
              <div
                key={ad.id}
                className="group relative aspect-[9/16] bg-secondary rounded-xl overflow-hidden border border-border/30 hover:border-primary/50 transition-all cursor-pointer"
              >
                {/* Placeholder gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary" />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/40">
                  <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                    <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
                  </div>
                </div>
                
                {/* Info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/90 to-transparent">
                  <p className="text-xs font-medium text-foreground">{ad.category}</p>
                  <p className="text-xs text-muted-foreground">{ad.views} views</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdHeroSection;
