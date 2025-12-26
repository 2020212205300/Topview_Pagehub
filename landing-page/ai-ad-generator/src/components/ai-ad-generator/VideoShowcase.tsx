import { Play } from "lucide-react";

const VideoShowcase = () => {
  return (
    <section className="py-16 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Video container */}
          <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-secondary border border-border/30 overflow-hidden relative group cursor-pointer">
            {/* Placeholder background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
            
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Play className="w-8 h-8 text-primary-foreground ml-1" />
              </div>
            </div>
            
            {/* Video label */}
            <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-background/80 rounded-full">
              <span className="text-sm font-medium text-foreground">AI Ad Generator Demo</span>
            </div>
          </div>
          
          {/* Caption */}
          <p className="text-center text-muted-foreground mt-6 text-sm">
            See how TopView AI Ad Generator transforms a simple product link into a professional video ad
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
