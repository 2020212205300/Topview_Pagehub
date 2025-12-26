import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeygenHeroSection = () => {
  return (
    <section className="py-10 md:py-14 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Best <span className="gradient-text">Heygen Alternative</span>
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
              Why settle for Heygen's limitations? Topview.ai gives you <strong className="text-foreground">unlimited avatar cloning</strong>, <strong className="text-foreground">5M+ viral ad templates</strong>, and the unique ability to turn any product URL into scroll-stopping video ads—features Heygen simply doesn't offer. Join 100,000+ marketers who switched for faster, cheaper, and more engaging video creation.
            </p>

            {/* Single CTA */}
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-5 text-base gap-2">
              Try Topview Free
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden border border-border/30 bg-gradient-to-br from-primary/10 to-purple-500/10">
              <img 
                src="https://d1735p3aqhycef.cloudfront.net/alternatives/heygen-alternative/logo-70e22505752dd528042acd16a53b6045.jpg"
                alt="Topview.ai vs Heygen comparison - Best Heygen Alternative for AI video generation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeygenHeroSection;
