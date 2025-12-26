import { Youtube, Instagram, Facebook, Linkedin } from "lucide-react";

const PlatformExplainerSection = () => {
  const platforms = [
    {
      name: "YouTube",
      icon: <Youtube className="w-5 h-5 text-red-500" />,
      iconBg: "bg-red-500/10",
      tip: "Hook in 5 seconds • 16:9 landscape • Sound-on optimized",
      desc: "2B+ users. Best for awareness and consideration. TrueView, bumpers, and discovery ads available.",
    },
    {
      name: "TikTok",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      iconBg: "bg-foreground/10",
      tip: "9:16 vertical • 9-15 seconds • Creator-style aesthetic",
      desc: "Algorithm rewards authenticity over polish. Sound-on platform. Pattern interrupt in first second.",
    },
    {
      name: "Meta",
      icon: (
        <div className="flex gap-1">
          <Facebook className="w-4 h-4 text-blue-500" />
          <Instagram className="w-4 h-4 text-pink-500" />
        </div>
      ),
      iconBg: "bg-blue-500/10",
      tip: "Sound-off with captions • Multi-format (1:1, 9:16) • First 3 seconds critical",
      desc: "Most sophisticated targeting. Feeds, Stories, Reels, Watch. 85% of FB video watched without sound.",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5 text-blue-600" />,
      iconBg: "bg-blue-600/10",
      tip: "Under 30 seconds • Professional aesthetic • Value-first messaging",
      desc: "B2B powerhouse. 30% more comments than static. Great for thought leadership and demos.",
    },
  ];

  return (
    <section className="py-16 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Platform-Specific Video Ad Strategies
          </h2>
          
          <p className="text-muted-foreground text-lg mb-10 text-center max-w-2xl mx-auto">
            Each platform has unique requirements. Match your creative to where it runs.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="p-6 rounded-xl border border-border/50 bg-background/50">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-lg ${platform.iconBg} flex items-center justify-center`}>
                    {platform.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{platform.name}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-3">{platform.desc}</p>
                <p className="text-xs text-primary font-medium">{platform.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformExplainerSection;
