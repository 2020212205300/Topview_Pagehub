import { ShoppingBag, Plane, Gamepad2, Building2 } from "lucide-react";

const IndustryUseCasesContent = () => {
  const industries = [
    {
      icon: <ShoppingBag className="w-5 h-5 text-primary" />,
      title: "E-commerce & DTC",
      insight: "UGC-style ads drive 4x higher CTR than polished brand content.",
      approach: "Showcase products in action. Test multiple hooks and formats at scale with AI.",
    },
    {
      icon: <Plane className="w-5 h-5 text-primary" />,
      title: "Travel & Hospitality",
      insight: "Emotional storytelling outperforms feature-focused messaging.",
      approach: "Transport viewers to destinations. Align creative with booking windows and seasons.",
    },
    {
      icon: <Building2 className="w-5 h-5 text-primary" />,
      title: "SaaS & Technology",
      insight: "Lead with pain points, not features. Show transformation.",
      approach: "Full-funnel video: awareness on pain, consideration on capabilities, retargeting with testimonials.",
    },
    {
      icon: <Gamepad2 className="w-5 h-5 text-primary" />,
      title: "Gaming & Entertainment",
      insight: "Creative fatigue happens fast. Weekly refresh is standard.",
      approach: "Test dozens of variations. AI enables rapid iteration without cost increases.",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Industry Video Ad Strategies
          </h2>
          
          <p className="text-muted-foreground text-lg mb-10 text-center max-w-2xl mx-auto">
            What works varies by vertical. Here's the playbook for top-performing industries.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="p-6 rounded-xl border border-border/50 bg-card/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    {industry.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{industry.title}</h3>
                </div>
                <p className="text-sm text-primary font-medium mb-2">{industry.insight}</p>
                <p className="text-muted-foreground text-sm">{industry.approach}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryUseCasesContent;
