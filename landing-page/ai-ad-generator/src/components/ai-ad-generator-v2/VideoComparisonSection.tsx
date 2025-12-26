import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoComparisonSection = () => {
  return (
    <section className="py-16 md:py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* H2 Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See AI Ad Generator in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch how TopView transforms reference videos into branded ads for your product in minutes
          </p>
        </div>

        {/* Dark Container with Video Comparison */}
        <div className="bg-slate-800 rounded-3xl p-6 md:p-10 mb-10">
          <div className="flex items-center justify-center gap-4 md:gap-6">
            
            {/* Left: Reference Video */}
            <div className="relative flex-shrink-0">
              {/* Reference Badge */}
              <span className="absolute top-3 left-1/2 -translate-x-1/2 z-10 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-white text-sm font-medium">
                Reference
              </span>
              <div className="relative aspect-[9/16] w-[140px] md:w-[200px] bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl overflow-hidden group cursor-pointer">
                {/* TODO: Replace with reference video URL - woman wearing black sunglasses */}
                {/* Example: <video src="reference-video.mp4" className="w-full h-full object-cover" autoPlay muted loop playsInline /> */}
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 md:w-6 md:h-6 text-white ml-0.5" fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>

            {/* Center: Product Image + Curved Arrow */}
            <div className="flex flex-col items-center justify-center gap-2 md:gap-4">
              {/* Product Image */}
              <div className="bg-white rounded-xl p-3 md:p-4 w-16 h-16 md:w-24 md:h-24 flex items-center justify-center shadow-lg">
                {/* TODO: Replace with product image URL - Under Armour blue sunglasses */}
                <div className="w-full h-full bg-slate-100 rounded-lg flex items-center justify-center">
                  <span className="text-[8px] md:text-xs text-slate-400 text-center">Product</span>
                </div>
              </div>
              
              {/* Curved Arrow SVG */}
              <svg 
                width="80" 
                height="40" 
                viewBox="0 0 80 40" 
                className="text-white hidden md:block"
                fill="none"
              >
                <path 
                  d="M5 20 Q 40 40 75 20" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  fill="none"
                />
                <path 
                  d="M68 15 L75 20 L68 25" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
              
              {/* Mobile Arrow */}
              <svg 
                width="40" 
                height="24" 
                viewBox="0 0 40 24" 
                className="text-white md:hidden"
                fill="none"
              >
                <path 
                  d="M5 12 H 30" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                />
                <path 
                  d="M26 7 L32 12 L26 17" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Right: AI-Recreated Video */}
            <div className="relative flex-shrink-0">
              {/* AI-Recreated Badge */}
              <span className="absolute top-3 left-1/2 -translate-x-1/2 z-10 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-white text-sm font-medium">
                AI-Recreated
              </span>
              <div className="relative aspect-[9/16] w-[140px] md:w-[200px] bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl overflow-hidden group cursor-pointer">
                {/* TODO: Replace with AI recreated video URL - woman wearing the product sunglasses */}
                {/* Example: <video src="ai-recreated-video.mp4" className="w-full h-full object-cover" autoPlay muted loop playsInline /> */}
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 md:w-6 md:h-6 text-white ml-0.5" fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
            Try AI Ad Recreation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoComparisonSection;
