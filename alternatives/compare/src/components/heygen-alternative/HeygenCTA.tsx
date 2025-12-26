import { Button } from "@/components/ui/button";

const HeygenCTA = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-gradient-to-br from-primary/10 to-purple-500/10">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
          Scale Your Video Creation Effortlessly with TopView.ai
        </h2>
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
          Start for free
        </Button>
      </div>
    </section>
  );
};

export default HeygenCTA;
