import { Link } from "react-router-dom";
import { Crown, TrendingUp, Zap, Users } from "lucide-react";

const alternatives = [
  {
    name: "Heygen",
    title: "Best Heygen Alternative",
    description: "More avatars, unlimited cloning, viral templates",
    path: "/alternatives/heygen-alternative",
    icon: Crown,
    highlight: true,
  },
  {
    name: "Tavus",
    title: "Best Tavus Alternative",
    description: "Faster personalization, better pricing",
    path: "/alternatives/tavus-alternative",
    icon: TrendingUp,
    highlight: false,
  },
  {
    name: "Synthesia",
    title: "Best Synthesia Alternative",
    description: "More creative freedom, viral ad focus",
    path: "/alternatives/synthesia-alternative",
    icon: Zap,
    highlight: false,
  },
  {
    name: "Colossyan",
    title: "Best Colossyan Alternative",
    description: "Superior templates, marketing-first approach",
    path: "/alternatives/colossyan-alternative",
    icon: Users,
    highlight: false,
  },
];

const AlternativesLeaderboard = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Top AI Video Tool Comparisons
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          See why thousands of marketers are switching to Topview.ai from these popular platforms
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {alternatives.map((alt, index) => (
            <Link
              key={alt.name}
              to={alt.path}
              className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                alt.highlight
                  ? "border-primary bg-primary/5 hover:border-primary/80"
                  : "border-border bg-card hover:border-primary/50"
              }`}
            >
              {alt.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${alt.highlight ? "bg-primary/20" : "bg-muted"}`}>
                  <alt.icon className={`w-5 h-5 ${alt.highlight ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  #{index + 1}
                </span>
              </div>

              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {alt.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {alt.description}
              </p>

              <div className="mt-4 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Compare now →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlternativesLeaderboard;
