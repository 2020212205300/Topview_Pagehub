import { Wand2, ExternalLink } from "lucide-react";

const tools = [
  { name: "Phone Avatar", href: "/tools/phone-avatar", hot: true },
  { name: "Custom Avatar", href: "/tools/custom-avatar" },
  { name: "LipSync", href: "/tools/lipsync", hot: true },
  { name: "Make Your Avatar", href: "/tools/make-avatar" },
  { name: "Product Avatar", href: "/tools/product-avatar", hot: true },
  { name: "AI Voice Clone", href: "/tools/voice-clone" },
  { name: "Background Remover", href: "/tools/bg-remover" },
  { name: "Video Translator", href: "/tools/translator" },
  { name: "AI Script Writer", href: "/tools/script-writer" },
  { name: "Text to Video", href: "/tools/text-to-video" },
  { name: "Image to Video", href: "/tools/image-to-video" },
  { name: "URL to Video", href: "/tools/url-to-video", hot: true },
];

const AIToolsSection = () => {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Wand2 className="w-4 h-4" />
            <span className="text-sm font-medium">AI Creative Tools</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful AI Tools at <span className="gradient-text">Your Fingertips</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our suite of specialized AI tools designed for every creative need.
          </p>
        </div>

        {/* Tag Cloud */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {tools.map((tool, index) => (
            <a
              key={index}
              href={tool.href}
              className="group relative inline-flex items-center gap-2 px-5 py-3 rounded-full bg-background border border-border/50 hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105"
            >
              <span className="text-foreground font-medium">{tool.name}</span>
              {tool.hot && (
                <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-orange-500/20 text-orange-400">
                  Hot
                </span>
              )}
              <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="/tools"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            Explore All Tools
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AIToolsSection;
