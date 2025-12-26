import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the best free AI ad generator?",
    answer: "TopView is widely recognized as one of the best free AI ad generators available. It offers a free tier that lets you create professional video ads without a credit card. Unlike other tools, TopView is specifically trained on viral e-commerce ads, making it ideal for product marketing on TikTok, Instagram, and Facebook.",
  },
  {
    question: "How does AI ad creation work?",
    answer: "AI ad creation works by analyzing your input—whether it's a product URL, uploaded images, or text description—and automatically generating a complete video ad. The AI writes compelling scripts, selects relevant visuals, adds transitions and effects, incorporates background music, and generates captions. The entire process takes just minutes instead of hours or days.",
  },
  {
    question: "Can I create product ads from just a URL?",
    answer: "Yes! Simply paste your product URL from Amazon, Shopify, Etsy, TikTok Shop, or any e-commerce platform. Our AI automatically extracts product images, descriptions, pricing, and key features to create a tailored video ad. No manual input required—though you can always customize the result.",
  },
  {
    question: "Is TopView AI Ad Generator free to use?",
    answer: "Yes, TopView offers a free plan that includes creating your first video ads without any payment. This lets you experience the full power of AI ad generation before committing. Paid plans unlock higher volumes, premium features, and priority rendering for professional users and agencies.",
  },
  {
    question: "Can I customize AI-generated ads?",
    answer: "Absolutely. After generation, you have full control to edit scripts, swap clips, change music, adjust captions, modify transitions, and fine-tune timing. Think of AI as your starting point—it handles the heavy lifting while you add the finishing touches to match your brand perfectly.",
  },
];

const AdFAQV2 = () => {
  return (
    <section id="faq" className="py-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            <span className="gradient-text">AI Ad Generator</span> FAQ
          </h2>
          <p className="text-muted-foreground">
            Common questions about creating video ads with AI
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border/30 rounded-xl px-6 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default AdFAQV2;
