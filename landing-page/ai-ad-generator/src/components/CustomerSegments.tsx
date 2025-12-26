import { DollarSign, Store, ShoppingBag, Building2 } from "lucide-react";

const segments = [
  {
    icon: DollarSign,
    title: "Affiliate Marketers",
    description: "Stay ahead of the competition with scroll-stopping product videos—no studio, no product on hand, just high-converting content ready in minutes. Maximize clicks, commissions, and conversions effortlessly.",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
  },
  {
    icon: Store,
    title: "DTC Brands",
    description: "Launch campaigns faster, personalize for every audience, and cut creative costs. Topview helps brands scale ad production without losing the brand look that makes customers click.",
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Sellers",
    description: "Turn your listings into irresistible showcases. Instantly create product videos that boost visibility, drive sales, and make your products shine—without expensive production.",
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
  },
  {
    icon: Building2,
    title: "Agencies",
    description: "Deliver more content, faster, and at a lower cost. Topview helps agencies wow clients with AI-powered video campaigns that scale creativity and ROI like never before.",
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
  },
];

const CustomerSegments = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">AI Video Agent</span> for Every Business
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover how Topview helps companies create viral content at scale — 
            boosting reach, conversion, and ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {segments.map((segment, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-card border border-border/30 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${segment.bgColor} flex items-center justify-center mb-6`}>
                <segment.icon className={`w-7 h-7 ${segment.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {segment.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {segment.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerSegments;
