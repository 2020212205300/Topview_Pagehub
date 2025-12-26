const WhatIsHeygen = () => {
  return (
    <section className="py-10 md:py-14 px-6 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          What is <span className="gradient-text">Heygen</span>?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Logo Image */}
          <div className="order-2 md:order-1 flex justify-center">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden bg-card border border-border/30 p-6 flex items-center justify-center">
              <img 
                src="https://cdn.sanity.io/images/pdhqcmb1/dev/8a4f91321dd9aa4d73140e133701a3080cd703ed-2048x2048.heif"
                alt="Heygen AI video platform logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          {/* Text Content */}
          <div className="order-1 md:order-2 space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Heygen</strong> is an AI video platform for creating videos with AI avatars and voiceovers. Popular for corporate training and explainer videos, it offers 1,000+ digital avatars with multilingual support.
            </p>
            
            <p>
              However, <strong className="text-foreground">e-commerce sellers and content creators</strong> find it limiting for short-form ads—avatars are designed for corporate settings, lacking the natural style needed for viral social content.
            </p>
            
            <p>
              Key limitations include: restricted video cloning (1-3 avatars), no URL-to-video, limited ad templates, and no e-commerce features like virtual try-on.
            </p>
            
            <p>
              <strong className="text-foreground">Topview.ai</strong> addresses these gaps with 5M+ viral templates, unlimited video cloning, and avatars built for marketing content.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsHeygen;
