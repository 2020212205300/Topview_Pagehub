import { Link } from "react-router-dom";

interface AlternativeLink {
  name: string;
  path: string;
  isActive?: boolean;
}

const alternatives: AlternativeLink[] = [
  { name: "Heygen vs Topview", path: "/alternatives/heygen-alternative", isActive: true },
  { name: "Argil vs Topview", path: "/alternatives/argil-alternative" },
  { name: "Tavus vs Topview", path: "/alternatives/tavus-alternative" },
  { name: "Predis vs Topview", path: "/alternatives/predis-alternative" },
  { name: "Synthesia vs Topview", path: "/alternatives/synthesia-alternative" },
  { name: "D-ID vs Topview", path: "/alternatives/d-id-alternative" },
  { name: "Colossyan vs Topview", path: "/alternatives/colossyan-alternative" },
  { name: "Runway vs Topview", path: "/alternatives/runway-alternative" },
  { name: "Pictory vs Topview", path: "/alternatives/pictory-alternative" },
  { name: "InVideo vs Topview", path: "/alternatives/invideo-alternative" },
];

const AlternativesTagCloud = () => {
  return (
    <section className="py-16 md:py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Explore More <span className="gradient-text">AI Video Tool</span> Comparisons
        </h2>
        <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          See how Topview.ai compares to other popular AI video generation platforms
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {alternatives.map((alt) => (
            <Link
              key={alt.name}
              to={alt.path}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                alt.isActive
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border hover:border-primary/50 hover:bg-primary/5 text-foreground"
              }`}
            >
              {alt.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlternativesTagCloud;
