import { Film, Megaphone, ShoppingBag, Share2, Video } from "lucide-react";

const videoTypes = [
  {
    icon: Film,
    title: "Video Ads",
    description: "High-converting video ads optimized for any platform. Drive sales with AI-generated creatives.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Megaphone,
    title: "Marketing Videos",
    description: "Brand storytelling and promotional content that captures attention and builds awareness.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Videos",
    description: "Product demos, unboxing, and shopping videos that boost conversions and reduce returns.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    gradient: "from-orange-500/20 to-yellow-500/20",
  },
  {
    icon: Share2,
    title: "Social Media Videos",
    description: "TikTok, Reels, and Shorts optimized content that goes viral and grows your audience.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=400&fit=crop",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
];

const AIFeatures = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Video className="w-4 h-4" />
            <span className="text-sm font-medium">Video Content Types</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            AI Videos for <span className="gradient-text">Every Marketing Need</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Create any type of marketing video with your AI Video Agent — from ads to social content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoTypes.map((type, index) => (
            <div
              key={index}
              className={`group rounded-3xl overflow-hidden bg-gradient-to-br ${type.gradient} border border-border/50 hover:border-primary/50 transition-all duration-300`}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={type.image}
                  alt={type.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                    <type.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {type.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {type.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;
