const companies = [
  "Lazada",
  "L'ORÉAL",
  "ANKER",
  "AliExpress",
  "Lay's",
  "HEINEKEN",
  "evian",
];

const HeygenTrustedCompanies = () => {
  return (
    <section className="py-6 px-6 border-y border-border/20">
      <div className="container mx-auto max-w-6xl">
        <p className="text-sm font-medium text-center mb-4 text-muted-foreground">
          Trusted by leading companies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {companies.map((company, index) => (
            <span
              key={index}
              className="text-lg md:text-xl font-semibold text-muted-foreground/60 hover:text-muted-foreground transition-colors"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeygenTrustedCompanies;
