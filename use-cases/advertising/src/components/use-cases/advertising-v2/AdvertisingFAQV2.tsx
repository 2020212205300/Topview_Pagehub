import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are the different types of video ads?",
    answer:
      "Video ads come in several formats: In-stream ads (pre-roll, mid-roll, post-roll) play before, during, or after video content. Out-stream ads appear outside of video players, typically in text articles or social feeds. Bumper ads are ultra-short 6-second non-skippable formats. Interactive and shoppable ads allow viewers to engage directly with products. Stories and vertical ads are designed specifically for mobile-first platforms like TikTok, Instagram, and Snapchat.",
  },
  {
    question: "In-stream vs out-stream ads: which should I choose?",
    answer:
      "In-stream ads are best when you want guaranteed viewership with a captive audience already watching video content — ideal for brand awareness and storytelling. Out-stream ads are better for extending video reach to non-video environments and often have lower CPMs. For most campaigns, a mix of both maximizes reach while balancing cost efficiency.",
  },
  {
    question: "How effective are video ads compared to static image ads?",
    answer:
      "Video ads consistently outperform static ads across key metrics. Studies show video generates 1200% more shares, increases purchase intent by up to 97%, and improves ad recall significantly. Viewers retain 95% of a video message compared to just 10% from text. However, video requires more production investment — AI tools like Topview have made this accessible to businesses of all sizes.",
  },
  {
    question: "What makes a video ad high-converting?",
    answer:
      "High-converting video ads share common elements: a strong hook in the first 3 seconds, clear value proposition, emotional connection, social proof or demonstrations, and a clear call-to-action. For e-commerce, showing the product in use and highlighting unique benefits drives conversions. For B2B, focusing on pain points and transformation stories works best.",
  },
  {
    question: "How long should my video ad be?",
    answer:
      "Optimal length depends on platform and objective. For awareness: 6-15 seconds works best on social platforms. For consideration: 15-30 seconds allows for more storytelling. For YouTube: 15-60 seconds for skippable ads, 6 seconds for bumper ads. TikTok performs best with 9-15 second videos. The key is to match length to your message complexity and platform norms.",
  },
  {
    question: "What's the best aspect ratio for video ads?",
    answer:
      "Use 16:9 landscape for YouTube and desktop viewing. Use 9:16 vertical for TikTok, Instagram Reels, Stories, and YouTube Shorts. Use 1:1 square for Instagram and Facebook feeds as it works well in both contexts. Many advertisers now create multiple versions — Topview AI can automatically resize and reframe videos for each platform.",
  },
  {
    question: "How can AI improve video ad creation?",
    answer:
      "AI transforms video advertising by enabling rapid creation of multiple ad variations for testing, generating professional-quality content without expensive production, automatically adapting content for different platforms and aspect ratios, and reducing production costs by 80-90%. This allows advertisers to test more creative approaches and optimize based on data rather than assumptions.",
  },
  {
    question: "What industries benefit most from video advertising?",
    answer:
      "While video works for virtually every industry, some see particularly strong results: E-commerce and DTC brands (product demonstrations and UGC-style content), Travel and hospitality (emotional, aspirational storytelling), SaaS and technology (product demos and pain point focused content), Gaming (high-volume creative testing), and Finance and insurance (trust-building through testimonials and explanations).",
  },
];

const AdvertisingFAQV2 = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Video Advertising FAQ: Your Questions Answered
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Everything you need to know about video ad formats, platforms, and best practices.
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

export default AdvertisingFAQV2;
