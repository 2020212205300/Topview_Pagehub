import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is an AI Video Agent?",
    answer: "An AI Video Agent is an intelligent system that understands your creative intent and autonomously handles the entire video creation process — from scripting and scene generation to editing and effects. Unlike traditional video tools that require manual editing, an AI Video Agent works like a creative partner: you describe what you want, and it delivers.",
  },
  {
    question: "What is Topview and how does it work?",
    answer: "Topview is your AI Video Agent for video creation. Simply describe your video idea, upload product images, or provide a reference video — our AI Agent understands your needs and automatically generates professional videos in minutes. No editing skills required.",
  },
  {
    question: "What types of videos can I create?",
    answer: "Currently, Topview excels at marketing videos including product showcases, UGC-style content, avatar marketing videos, and product try-on videos. We're expanding to support more scenarios including education, content creation, and enterprise use cases.",
  },
  {
    question: "How is this different from traditional video tools?",
    answer: "Traditional tools require you to manually edit every frame, choose transitions, and handle effects. Topview's AI Video Agent understands your intent and handles all these decisions automatically. You describe what you want in natural language, and the Agent delivers — 10x faster than manual editing.",
  },
  {
    question: "Do I need video editing experience?",
    answer: "No! Topview is designed for everyone. Our AI Video Agent handles all the complex video editing, so you can create stunning videos with zero learning curve. Just describe your idea and let the Agent work.",
  },
  {
    question: "How long does it take to generate a video?",
    answer: "Most videos are generated within minutes. What traditionally took expensive agencies and production teams can now be accomplished in a fraction of the time with your AI Video Agent.",
  },
  {
    question: "Can I customize the AI-generated videos?",
    answer: "Yes! You can provide reference videos, specify styles, and refine results through natural conversation with your Agent. It learns your preferences and adapts to your brand identity over time.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
          <span className="gradient-text">AI Video Agent</span> FAQ
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-2xl bg-card border border-border/30 px-6 overflow-hidden"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6 text-foreground font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
