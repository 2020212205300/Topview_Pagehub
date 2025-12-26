const companies = [
  "Meta", "TikTok", "Shopify", "Amazon", "Google", "Microsoft",
  "Netflix", "Spotify", "Adobe", "Salesforce",
];

interface TrustedCompaniesProps {
  title?: string;
}

const TrustedCompanies = ({ title = "Trusted by Teams Using AI Video Agent" }: TrustedCompaniesProps) => {
  return (
    <section className="py-16 px-6 border-t border-border/30">
      <div className="container mx-auto">
        <h2 className="text-center text-muted-foreground text-lg mb-10">
          {title}
        </h2>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-slide-left">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-12 py-4"
              >
                <span className="text-2xl font-bold text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
