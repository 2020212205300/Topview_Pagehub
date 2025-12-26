import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What video ad formats can I create with Topview AI?",
    answer:
      "Topview supports all major video ad formats including in-stream ads (pre-roll, mid-roll, post-roll), out-stream ads, bumper ads (6-second non-skippable), Stories and Reels format, interactive shoppable videos, and native social content. Our AI automatically optimizes each format for its intended platform.",
  },
  {
    question: "Which platforms does Topview support for video ads?",
    answer:
      "Topview creates video ads optimized for YouTube, TikTok, Instagram (Feed, Stories, Reels), Facebook, LinkedIn, Snapchat, Twitter/X, and Pinterest. Each platform has unique requirements for aspect ratios, safe areas, and captions — our AI handles all of this automatically.",
  },
  {
    question: "What aspect ratios are supported for video ads?",
    answer:
      "Topview supports all standard video ad ratios: 16:9 landscape (1920×1080) for YouTube and desktop, 9:16 vertical (1080×1920) for TikTok, Stories, and Reels, 1:1 square (1080×1080) for social feeds, and 4:5 portrait (1080×1350) for Instagram. You can create one video and auto-resize for all platforms.",
  },
  {
    question: "Can I create YouTube pre-roll ads with AI?",
    answer:
      "Yes. Topview excels at creating YouTube pre-roll ads including skippable TrueView ads (hook viewers in the first 5 seconds), non-skippable 15-second ads, and 6-second bumper ads. Our AI understands YouTube's specific requirements and creates content optimized for the platform's viewer behavior.",
  },
  {
    question: "How do I make TikTok video ads that convert?",
    answer:
      "Topview creates native TikTok-style ads that blend with organic content. Our AI generates vertical 9:16 videos with attention-grabbing hooks, trending aesthetics, and authentic creator-style storytelling. We optimize for TikTok's unique sound-on environment and short attention spans (9-15 second sweet spot).",
  },
  {
    question: "What's the ideal video ad length for different platforms?",
    answer:
      "Optimal lengths vary: TikTok and Reels perform best at 9-15 seconds, Instagram Stories at 15 seconds, YouTube bumper ads at 6 seconds, YouTube skippable ads at 15-60 seconds, Facebook feed at 15-30 seconds, and LinkedIn at under 30 seconds. Topview AI automatically trims and paces content for each platform.",
  },
  {
    question: "Can Topview create video ads for e-commerce products?",
    answer:
      "Absolutely. E-commerce is our specialty. Simply provide a product URL and Topview generates UGC-style product videos, unboxing content, feature demonstrations, and lifestyle ads. Our Product Avatar feature creates realistic videos of AI presenters interacting with your actual products.",
  },
  {
    question: "How much does AI video ad creation cost compared to traditional production?",
    answer:
      "Topview reduces video production costs by 80-90%. Traditional video ads cost $5,000-$50,000 per video with weeks of production time. With Topview, you can create professional-quality video ads for as low as $0.5 per video in minutes, enabling true creative testing at scale.",
  },
  {
    question: "Do I need editing skills to create video ads with Topview?",
    answer:
      "No editing experience required. Topview uses natural language processing — describe what you want or provide a product URL, and our AI handles scripting, scene generation, editing, captions, and export. Anyone can create professional video ads without technical skills.",
  },
  {
    question: "Can I resize one video ad for multiple platforms automatically?",
    answer:
      "Yes. Topview's smart auto-reframing technology lets you upload a single video and instantly generate versions for every platform: 16:9 for YouTube, 9:16 for TikTok and Stories, 1:1 for Instagram feed. The AI keeps the main subject centered and adjusts pacing for each platform's best practices.",
  },
];

const AdvertisingFAQ = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          AI Video Ad Generator: Frequently Asked Questions
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Common questions about creating video ads for YouTube, TikTok, Meta and more.
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-medium pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default AdvertisingFAQ;
