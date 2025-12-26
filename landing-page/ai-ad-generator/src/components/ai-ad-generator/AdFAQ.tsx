import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can I really generate an ad from just a product link?",
    answer: "Yes! Our AI analyzes your product page content—including images, descriptions, and pricing—to automatically create a compelling script and video. Simply paste your Amazon, Shopify, Etsy, or TikTok Shop link, and our AI Ad Generator handles the rest.",
  },
  {
    question: "Is TopView free to try?",
    answer: "Yes, you can use our free AI ad generator to create your first video ads without a credit card. Experience the full power of AI-driven ad creation with our trial, then upgrade to unlock more features and higher output volumes.",
  },
  {
    question: "Can I customize the ads after generation?",
    answer: "Absolutely. You can tweak scripts, change background music, adjust clip sequences, modify captions, and fine-tune transitions in our intuitive editor. Our AI gives you a professional starting point, and you have full creative control to make it perfect.",
  },
];

const AdFAQ = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            <span className="gradient-text">AI Ad Generator</span> FAQ
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about creating video ads with AI
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

export default AdFAQ;
