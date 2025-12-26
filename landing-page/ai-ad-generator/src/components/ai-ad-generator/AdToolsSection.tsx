import { ExternalLink } from "lucide-react";

const tools = [
  { name: "AI Avatar", href: "#", hot: true },
  { name: "AI Image Generator", href: "#" },
  { name: "Product Avatar", href: "#", hot: true },
  { name: "URL to Video", href: "#" },
  { name: "Ad Library", href: "#" },
];

const AdToolsSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
            Explore More <span className="gradient-text">AI Marketing Tools</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Discover our full suite of AI-powered tools to supercharge your marketing
          </p>
        </div>

        {/* Tools Tags */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.href}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary border border-border/50 hover:border-primary/50 hover:bg-secondary/80 transition-all"
            >
              <span className="text-foreground font-medium">{tool.name}</span>
              {tool.hot && (
                <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-destructive/20 text-destructive rounded">
                  HOT
                </span>
              )}
              <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdToolsSection;
