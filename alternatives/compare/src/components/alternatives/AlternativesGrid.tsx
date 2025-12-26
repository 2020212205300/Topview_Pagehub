import { Link } from "react-router-dom";

interface Alternative {
  name: string;
  title: string;
  path: string;
  bgColor: string;
  headline: string;
  subline?: string;
}

const alternatives: Alternative[] = [
  { 
    name: "Argil", 
    title: "Top Argil Alternative", 
    path: "/alternatives/argil-alternative",
    bgColor: "bg-gradient-to-b from-zinc-900 to-zinc-800",
    headline: "Generate engaging AI videos",
    subline: "Get a perfect video for social media"
  },
  { 
    name: "Kive", 
    title: "Top Kive Alternative", 
    path: "/alternatives/kive-alternative",
    bgColor: "bg-gradient-to-b from-neutral-100 to-neutral-200",
    headline: "On-brand visuals. Made by AI.",
  },
  { 
    name: "Katalist AI", 
    title: "Top Katalist AI Alternative", 
    path: "/alternatives/katalist-ai-alternative",
    bgColor: "bg-gradient-to-b from-stone-800 to-stone-900",
    headline: "Create Visual Stories with Storyboard AI",
  },
  { 
    name: "Heygen", 
    title: "Top Heygen Alternative", 
    path: "/alternatives/heygen-alternative",
    bgColor: "bg-gradient-to-b from-blue-900 to-blue-950",
    headline: "AI Video Generator for Business",
  },
  { 
    name: "Synthesia", 
    title: "Top Synthesia Alternative", 
    path: "/alternatives/synthesia-alternative",
    bgColor: "bg-gradient-to-b from-indigo-900 to-indigo-950",
    headline: "Turn text into AI videos",
  },
  { 
    name: "Tavus", 
    title: "Top Tavus Alternative", 
    path: "/alternatives/tavus-alternative",
    bgColor: "bg-gradient-to-b from-purple-900 to-purple-950",
    headline: "Personalized video at scale",
  },
  { 
    name: "D-ID", 
    title: "Top D-ID Alternative", 
    path: "/alternatives/d-id-alternative",
    bgColor: "bg-gradient-to-b from-cyan-900 to-cyan-950",
    headline: "Creative Reality™ Studio",
  },
  { 
    name: "Colossyan", 
    title: "Top Colossyan Alternative", 
    path: "/alternatives/colossyan-alternative",
    bgColor: "bg-gradient-to-b from-emerald-900 to-emerald-950",
    headline: "AI video creation for enterprise",
  },
  { 
    name: "Pictory", 
    title: "Top Pictory Alternative", 
    path: "/alternatives/pictory-alternative",
    bgColor: "bg-gradient-to-b from-rose-900 to-rose-950",
    headline: "Video Marketing Made Easy",
  },
  { 
    name: "InVideo", 
    title: "Top InVideo Alternative", 
    path: "/alternatives/invideo-alternative",
    bgColor: "bg-gradient-to-b from-amber-900 to-amber-950",
    headline: "Create videos 10x faster",
  },
  { 
    name: "Runway", 
    title: "Top Runway Alternative", 
    path: "/alternatives/runway-alternative",
    bgColor: "bg-gradient-to-b from-slate-900 to-slate-950",
    headline: "Advancing creativity with AI",
  },
  { 
    name: "Quickads", 
    title: "Top Quickads Alternative", 
    path: "/alternatives/quickads-alternative",
    bgColor: "bg-gradient-to-b from-orange-900 to-orange-950",
    headline: "AI-powered ad creation",
  },
];

const AlternativesGrid = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Explore More <span className="gradient-text">AI Video Tool</span> Comparisons
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          See how Topview.ai compares to other popular AI video generation platforms
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {alternatives.map((alt) => (
            <Link
              key={alt.name}
              to={alt.path}
              className="group block"
            >
              {/* Preview Card */}
              <div className={`${alt.bgColor} rounded-xl overflow-hidden aspect-[16/10] p-6 flex flex-col justify-center items-center text-center border border-border/50 group-hover:border-primary/50 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1`}>
                <h3 className={`text-xl md:text-2xl font-bold leading-tight ${alt.bgColor.includes('neutral') ? 'text-zinc-900' : 'text-white'}`}>
                  {alt.headline}
                </h3>
                {alt.subline && (
                  <p className={`text-sm mt-2 ${alt.bgColor.includes('neutral') ? 'text-zinc-600' : 'text-white/70'}`}>
                    {alt.subline}
                  </p>
                )}
              </div>
              
              {/* Title */}
              <h4 className="text-lg font-semibold text-center mt-4 text-foreground group-hover:text-primary transition-colors">
                {alt.title}
              </h4>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-10">
          <span className="px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-sm font-medium">1</span>
          <span className="px-3 py-1.5 rounded-md bg-muted text-muted-foreground text-sm hover:bg-muted/80 cursor-pointer transition-colors">2</span>
          <span className="text-muted-foreground px-1">...</span>
          <span className="px-3 py-1.5 rounded-md bg-muted text-muted-foreground text-sm hover:bg-muted/80 cursor-pointer transition-colors">35</span>
        </div>
      </div>
    </section>
  );
};

export default AlternativesGrid;
