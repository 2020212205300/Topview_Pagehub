import { Bot } from "lucide-react";

const stats = [
  {
    value: "10X",
    label: "faster video production. From weeks to minutes.",
  },
  {
    value: "80-90%",
    label: "cost savings. High-quality videos without the agency price tag.",
  },
  {
    value: "0",
    label: "learning curve. Anyone can start creating immediately.",
  },
];

const StatsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Bot className="w-4 h-4" />
            <span className="text-sm font-medium">Why an AI Video Agent?</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">AI Video Agent</span>: Create Videos{" "}
            10× Faster at a Fraction of the Cost
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Traditional tools require manual editing for every frame. Your AI Video Agent 
            understands your intent and handles everything — from scripting to final cut.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-3xl bg-gradient-to-br from-secondary/50 to-secondary/20 border border-border/30"
            >
              <div className="text-5xl md:text-6xl font-bold gradient-text mb-4">
                {stat.value}
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
