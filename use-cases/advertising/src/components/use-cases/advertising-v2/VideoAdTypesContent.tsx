const VideoAdTypesContent = () => {
  const adTypes = [
    {
      title: "In-Stream Ads",
      description: "Pre-roll, mid-roll, and post-roll ads that play within video content. YouTube's TrueView is the prime example — you only pay when viewers watch 30+ seconds.",
    },
    {
      title: "Out-Stream Ads",
      description: "Video ads embedded in articles, feeds, or apps. Auto-play when visible, pause when scrolled past. Great for reaching non-video platforms.",
    },
    {
      title: "Interactive & Shoppable",
      description: "Clickable elements, polls, and product carousels within video. Instagram and TikTok lead this format for direct purchase from content.",
    },
    {
      title: "Bumper Ads (6s)",
      description: "Ultra-short, non-skippable ads. Forces message distillation to one hook. Studies show 30% lift in ad recall when part of broader campaigns.",
    },
    {
      title: "Native & Rewarded",
      description: "Native ads match platform aesthetics. Rewarded ads offer value exchange (game lives, content access) — achieving 90%+ completion rates.",
    },
    {
      title: "Stories & Vertical",
      description: "9:16 full-screen format for Instagram, TikTok, Snapchat. Consistently outperforms repurposed horizontal content on mobile.",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Video Ad Formats: A Quick Guide
          </h2>
          
          <p className="text-muted-foreground text-lg mb-10 text-center max-w-2xl mx-auto">
            Different formats serve different goals. Choose based on your campaign objectives.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adTypes.map((type, index) => (
              <div key={index} className="p-5 rounded-xl border border-border/50 bg-card/30 hover:bg-card/50 transition-colors">
                <h3 className="text-lg font-semibold mb-2">{type.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoAdTypesContent;
