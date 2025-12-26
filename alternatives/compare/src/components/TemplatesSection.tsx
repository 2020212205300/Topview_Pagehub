import { useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const tabs = [
  { id: "all", label: "All" },
  { id: "video-agent", label: "Video Agent" },
  { id: "avatar", label: "Avatar" },
  { id: "product-avatar", label: "Product Avatar" },
  { id: "viral-hooks", label: "Viral Hooks" },
];

const templates = [
  {
    title: "Noodle Avalanche",
    category: "viral-hooks",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
  },
  {
    title: "Product Spotlight",
    category: "video-agent",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
  },
  {
    title: "Digital Avatar Host",
    category: "avatar",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=300&fit=crop",
  },
  {
    title: "Vacuuming Gorilla",
    category: "viral-hooks",
    image: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=400&h=300&fit=crop",
  },
  {
    title: "Product Demo Scene",
    category: "product-avatar",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
  },
  {
    title: "Brand Storyteller",
    category: "video-agent",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
  },
  {
    title: "Virtual Presenter",
    category: "avatar",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop",
  },
  {
    title: "Giant Sneaker Jesus",
    category: "viral-hooks",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
  },
];

const TemplatesSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredTemplates =
    activeTab === "all"
      ? templates
      : templates.filter((t) => t.category === activeTab);

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Video Templates Created by <span className="gradient-text">AI Agent</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse templates and start creating in seconds
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredTemplates.map((template, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-card hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="aspect-[4/3]">
                <img
                  src={template.image}
                  alt={template.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-foreground font-medium text-sm md:text-base">
                  {template.title}
                </h3>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="w-4 h-4 text-white fill-white" />
              </div>
            </div>
          ))}
        </div>

        {/* See All Button */}
        <div className="text-center mt-10">
          <Button variant="outline" size="lg" className="group">
            See All Templates
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;
