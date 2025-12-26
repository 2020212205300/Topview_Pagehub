import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Explore = () => {
  const sections = [
    {
      category: "Product",
      links: [
        { name: "AI Video Agent", href: "/" },
        { name: "AI Ads Video", href: "/ai-ad-generator" },
        { name: "AI Product Video", href: "#" },
        { name: "AI UGC Video", href: "#" },
        { name: "URL to Video", href: "#" },
        { name: "AI Avatar Generator", href: "#" },
        { name: "Product Avatar", href: "#" },
        { name: "AI Lip-sync", href: "#" },
        { name: "AI Video Generator", href: "#" },
        { name: "AI Short Video", href: "#" },
        { name: "AI Product Photo", href: "#" },
      ],
    },
    {
      category: "Use Cases",
      links: [
        { name: "Advertising", href: "/use-cases/advertising" },
        { name: "Affiliate Marketing", href: "#" },
        { name: "Ecommerce", href: "#" },
        { name: "DTC Brands", href: "#" },
        { name: "AI Live Stream", href: "#" },
        { name: "Social Media", href: "#" },
      ],
    },
    {
      category: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Learning Center", href: "#" },
        { name: "Affiliate Program", href: "#" },
        { name: "Alternatives", href: "/alternatives" },
        { name: "HeyGen Alternative", href: "/alternatives/heygen-alternative" },
        { name: "API Docs", href: "#" },
      ],
    },
    {
      category: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Contact", href: "#" },
      ],
    },
  ];

  // Split links into 4 columns
  const splitIntoColumns = (links: { name: string; href: string }[], cols: number = 4) => {
    const result: { name: string; href: string }[][] = Array.from({ length: cols }, () => []);
    links.forEach((link, i) => {
      result[i % cols].push(link);
    });
    return result;
  };

  return (
    <>
      <Helmet>
        <title>Explore Topview AI - All Features & Resources</title>
        <meta 
          name="description" 
          content="Explore all Topview AI features, tools, and resources. Find AI video generators, avatar tools, use cases, and more." 
        />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Hero Section - Notion Style */}
          <div className="flex items-center justify-between mb-20 py-12">
            <div className="max-w-lg">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                Explore more
              </h1>
              <p className="text-muted-foreground text-xl leading-relaxed">
                Build, create, and explore the richness of what Topview AI's suite of features has to offer.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <svg className="w-32 h-32 text-primary/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14M5 18h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Links Sections - Notion Style */}
          <div className="space-y-0">
            {sections.map((section, idx) => {
              const columns = splitIntoColumns(section.links);
              return (
                <div 
                  key={section.category} 
                  className={`py-10 ${idx !== sections.length - 1 ? 'border-b border-border/50' : ''}`}
                >
                  <div className="grid grid-cols-[180px_1fr] gap-8">
                    {/* Category Label */}
                    <h2 className="text-base font-semibold text-foreground">
                      {section.category}
                    </h2>
                    
                    {/* Links in 4 columns */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4">
                      {columns.map((col, colIdx) => (
                        <div key={colIdx} className="space-y-4">
                          {col.map((link) => (
                            <Link
                              key={link.name}
                              to={link.href}
                              className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
                            >
                              {link.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Explore;
