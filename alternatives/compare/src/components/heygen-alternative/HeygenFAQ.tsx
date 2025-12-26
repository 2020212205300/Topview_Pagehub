import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What is the best free Heygen alternative?",
    answer: "Topview.ai offers free credits to get started, making it an excellent free Heygen alternative. You can create AI-powered marketing videos without upfront payment, with features like URL-to-video and viral templates that Heygen doesn't offer in its free tier.",
  },
  {
    question: "Is Topview.ai better than Heygen for marketing videos?",
    answer: "Yes, for marketing and e-commerce videos, Topview.ai is specifically designed with 5M+ viral templates, UGC-style avatars, and product URL integration—features optimized for ads and social content that Heygen lacks.",
  },
  {
    question: "How much does a Heygen alternative cost?",
    answer: "Topview.ai offers competitive pricing starting with free credits. Paid plans are designed to be cost-effective, delivering professional video creation at a fraction of traditional production costs.",
  },
  {
    question: "Can I clone my voice and avatar like Heygen?",
    answer: "Yes, Topview.ai offers unlimited video cloning capabilities, compared to Heygen's limited 1-3 avatar restriction. You can create multiple custom avatars without identity verification requirements.",
  },
  {
    question: "What file formats and platforms does Topview.ai support?",
    answer: "Topview.ai supports all major formats and automatically optimizes videos for TikTok, Instagram, YouTube Shorts, and other platforms. One-click resizing makes multi-platform publishing effortless.",
  },
  {
    question: "Do I need video editing skills to use Topview.ai?",
    answer: "No, Topview.ai is designed for beginners. The AI handles scripting, editing, and optimization automatically. Just paste a product URL or upload media, and the AI creates a ready-to-publish video.",
  },
];

const HeygenFAQ = () => {
  // Generate JSON-LD structured data for FAQ
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="py-10 md:py-14 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/30 rounded-lg px-5 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left text-sm md:text-base text-foreground hover:no-underline py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default HeygenFAQ;
