import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface SEOContentBlockProps {
  title: string;
  description: string;
  ctaText: string;
  imagePosition?: "left" | "right";
}

const SEOContentBlock = ({ 
  title, 
  description, 
  ctaText, 
  imagePosition = "right" 
}: SEOContentBlockProps) => {
  const isImageLeft = imagePosition === "left";

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className={`flex flex-col ${isImageLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16`}>
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-foreground leading-tight">
              {title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {description}
            </p>
            <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
              {ctaText}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          
          {/* Image placeholder */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-secondary border border-border/30 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 rounded-full bg-primary/40" />
                  </div>
                  <p className="text-muted-foreground text-sm">Preview Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOContentBlock;
