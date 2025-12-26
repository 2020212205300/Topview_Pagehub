import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MonitorPlay, Building } from "lucide-react";
import { Link } from "react-router-dom";

const platformPages = [
  { name: "YouTube Video Ads", slug: "youtube-video-ads", ready: false },
  { name: "TikTok Video Ads", slug: "tiktok-video-ads", ready: false },
  { name: "Meta Video Ads", slug: "meta-video-ads", ready: false },
  { name: "Instagram Video Ads", slug: "instagram-video-ads", ready: false },
  { name: "LinkedIn Video Ads", slug: "linkedin-video-ads", ready: false },
  { name: "Snapchat Video Ads", slug: "snapchat-video-ads", ready: false },
];

const industryPages = [
  { name: "E-commerce Video Ads", slug: "ecommerce-video-ads", ready: false },
  { name: "Travel Video Ads", slug: "travel-video-ads", ready: false },
  { name: "SaaS Video Ads", slug: "saas-video-ads", ready: false },
  { name: "Gaming Video Ads", slug: "gaming-video-ads", ready: false },
  { name: "Real Estate Video Ads", slug: "real-estate-video-ads", ready: false },
  { name: "Finance Video Ads", slug: "finance-video-ads", ready: false },
];

const RelatedPagesHub = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Video Ad Guides by Platform & Industry
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Deep-dive into platform-specific and industry-specific video ad strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* By Platform */}
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MonitorPlay className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">By Platform</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {platformPages.map((page) => (
                  <Link
                    key={page.slug}
                    to={page.ready ? `/use-cases/${page.slug}` : "#"}
                    className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                      page.ready 
                        ? "bg-secondary/50 hover:bg-secondary text-foreground" 
                        : "bg-secondary/20 text-muted-foreground cursor-not-allowed"
                    }`}
                  >
                    <span className="text-sm">{page.name}</span>
                    {page.ready ? (
                      <ArrowRight className="w-4 h-4" />
                    ) : (
                      <span className="text-[10px] px-1.5 py-0.5 bg-muted rounded">Soon</span>
                    )}
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* By Industry */}
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">By Industry</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {industryPages.map((page) => (
                  <Link
                    key={page.slug}
                    to={page.ready ? `/use-cases/${page.slug}` : "#"}
                    className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                      page.ready 
                        ? "bg-secondary/50 hover:bg-secondary text-foreground" 
                        : "bg-secondary/20 text-muted-foreground cursor-not-allowed"
                    }`}
                  >
                    <span className="text-sm">{page.name}</span>
                    {page.ready ? (
                      <ArrowRight className="w-4 h-4" />
                    ) : (
                      <span className="text-[10px] px-1.5 py-0.5 bg-muted rounded">Soon</span>
                    )}
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RelatedPagesHub;
