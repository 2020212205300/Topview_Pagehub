import { Image, Video, ArrowUp, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-40 pb-20 px-6">
      <div className="container mx-auto text-center">
        {/* Subtitle with AI Video Agent positioning */}
        <p className="text-muted-foreground text-lg mb-4 animate-fade-in flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-primary" />
          Meet Topview — Your AI Video Agent
        </p>

        {/* Main Title - H1 for SEO */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
          <span className="gradient-text">Create Any Video, Just Tell Your Agent</span>
        </h1>

        {/* New description explaining the upgrade */}
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "0.15s" }}>
          From marketing to content creation — describe what you need, let AI handle the rest.
        </p>

        {/* Input Box */}
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-2xl p-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <p className="text-muted-foreground text-left mb-4">
              Describe your video idea — upload assets or paste a reference link, your AI Agent will handle the rest.
            </p>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Image className="w-4 h-4" />
                Add Image & Link
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Video className="w-4 h-4" />
                Reference Video
              </button>
              <div className="flex-1" />
              <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:opacity-90 transition-opacity">
                <ArrowUp className="w-5 h-5 text-primary-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
