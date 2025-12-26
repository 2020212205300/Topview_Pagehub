import { ShoppingCart, Megaphone, GraduationCap, Users, Video, Sparkles } from "lucide-react";

const useCases = [
  {
    icon: ShoppingCart,
    title: "E-commerce Product Videos",
    description: "Turn product URLs into viral TikTok & Instagram ads in minutes. Perfect Heygen alternative for Shopify sellers.",
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description: "Create scroll-stopping content with AI avatars and trending hooks. Better than Heygen for viral content.",
  },
  {
    icon: GraduationCap,
    title: "Educational Content",
    description: "Transform courses into engaging video lessons with AI presenters. More affordable than Heygen for educators.",
  },
  {
    icon: Users,
    title: "UGC-Style Ads",
    description: "Generate authentic UGC-style videos without hiring creators. Top Heygen alternative for DTC brands.",
  },
  {
    icon: Video,
    title: "YouTube Shorts & Clips",
    description: "Convert long videos into viral shorts automatically. Feature Heygen doesn't offer.",
  },
  {
    icon: Sparkles,
    title: "Multi-Platform Repurposing",
    description: "One video, every platform. Resize and optimize for TikTok, YouTube, Instagram in one click.",
  },
];

const HeygenUseCases = () => {
  return (
    <section className="py-10 md:py-14 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
            Heygen Alternative Use Cases
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            How creators and businesses use Topview.ai as their preferred <strong>Heygen alternative</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="bg-card border border-border/30 rounded-2xl p-6 hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <useCase.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {useCase.title}
              </h3>
              
              <p className="text-muted-foreground text-sm">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeygenUseCases;