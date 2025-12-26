import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  // Generate JSON-LD structured data for breadcrumbs
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://topview.ai"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        ...(item.path && { "item": `https://topview.ai${item.path}` })
      }))
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="py-4 px-6 bg-muted/40 border-b border-border/30">
        <div className="container mx-auto max-w-6xl">
          <ol className="flex items-center flex-wrap gap-1 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="flex items-center">
              <Link 
                to="/" 
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                itemProp="item"
              >
                <Home className="w-4 h-4" />
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            
            {items.map((item, index) => (
              <li 
                key={index} 
                itemProp="itemListElement" 
                itemScope 
                itemType="https://schema.org/ListItem"
                className="flex items-center"
              >
                <ChevronRight className="w-4 h-4 text-muted-foreground mx-1" />
                {item.path ? (
                  <Link 
                    to={item.path} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    itemProp="item"
                  >
                    <span itemProp="name">{item.label}</span>
                  </Link>
                ) : (
                  <span className="text-foreground font-medium" itemProp="name">
                    {item.label}
                  </span>
                )}
                <meta itemProp="position" content={String(index + 2)} />
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumb;
