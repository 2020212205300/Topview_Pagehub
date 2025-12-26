import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const navItems = [
    { label: "Use cases", hasDropdown: true },
    { label: "AI tools", hasDropdown: true },
    { label: "AI Ad Generator", hasDropdown: false, href: "/ai-ad-generator" },
    { label: "Resources", hasDropdown: true },
    { label: "Ad library", hasDropdown: false },
    { label: "Pricing", hasDropdown: false },
  ];

  return (
    <header className="fixed top-10 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo with AI Video Agent badge */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              <div className="w-1 h-6 bg-pink-500 rounded-full" />
              <div className="w-1 h-6 bg-purple-500 rounded-full" />
              <div className="w-1 h-6 bg-cyan-400 rounded-full" />
            </div>
            <span className="text-xl font-bold text-foreground">TOPVIEW</span>
          </div>
          <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
            AI Video Agent
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            item.href ? (
              <Link
                key={item.label}
                to={item.href}
                className="flex items-center gap-1 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.label}
                className="flex items-center gap-1 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </button>
            )
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            Sign in
          </Button>
          <Button className="bg-secondary hover:bg-secondary/80 text-foreground border border-border">
            Dashboard
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
