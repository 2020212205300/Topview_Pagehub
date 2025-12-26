import { Quote } from "lucide-react";

const CaseStudy = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
          <span className="gradient-text">Topview AI Video Agent</span> Success Story
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-card to-accent/10 border border-primary/20">
            <Quote className="w-12 h-12 text-primary/40 mb-6" />
            <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
              "Topview's video solutions helped iLive by SHOPNOW grow our AI video 
              production services revenue by 80%, while reducing labor and costs by 50%. 
              It's not just a tool—it's a game-changer for scaling content and driving results."
            </blockquote>
            
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xl font-bold text-white">
                LM
              </div>
              <div>
                <p className="font-semibold text-foreground">Long Ma</p>
                <p className="text-muted-foreground text-sm">CEO, Shopnow Technology JSC</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-2xl bg-black/20">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">5x</div>
                <p className="text-muted-foreground text-sm">lower video production costs</p>
              </div>
              <div className="text-center p-4 rounded-2xl bg-black/20">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">30%</div>
                <p className="text-muted-foreground text-sm">increase in sales revenue</p>
              </div>
              <div className="text-center p-4 rounded-2xl bg-black/20">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">70%</div>
                <p className="text-muted-foreground text-sm">less time spent on content</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
