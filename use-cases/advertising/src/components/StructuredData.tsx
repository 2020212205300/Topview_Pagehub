import React from 'react';

const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Topview",
    "url": "https://topview.ai",
    "logo": "https://topview.ai/logo.png",
    "sameAs": [
      "https://twitter.com/TopviewAI",
      "https://www.linkedin.com/company/topview-ai"
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Topview AI Video Agent",
    "operatingSystem": "Web",
    "applicationCategory": "MultimediaApplication",
    "description": "Topview is an AI Video Agent that turns product links or descriptions into high-converting video ads. Features include AI avatars, script generation, and multi-platform optimization.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "10"
    },
    "offers": {
      "@type": "Offer",
      "price": "0.50",
      "priceCurrency": "USD",
      "description": "Production costs as low as $0.5 per video"
    },
    "featureList": [
      "AI Script Generation",
      "Product Avatar Creation",
      "UGC Style AI Avatars",
      "Multi-platform Native Exports",
      "Reference Video Cloning",
      "10x Faster Video Production"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is an AI Video Agent and how does it differ from traditional video generators?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unlike basic template-based video generators, an AI Video Agent understands your creative intent. It autonomously handles the entire production workflow — from scripting and scene generation to advanced editing."
        }
      },
      {
        "@type": "Question",
        "name": "How can Topview's AI reduce video production costs by 80-90%?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Topview eliminates the need for expensive studios and manual editing teams, allowing you to produce high-quality video ads for as low as $0.5 per video."
        }
      },
      {
        "@type": "Question",
        "name": "What is the Product Avatar feature and how does it benefit E-commerce sellers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Product Avatar feature generates videos of avatars interacting with your specific products, allowing precise control over product size and position."
        }
      },
      {
        "@type": "Question",
        "name": "Are the videos optimized for platforms like TikTok, Meta, and Google Ads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Topview's Native Exports feature automatically adapts videos to platform-specific requirements like aspect ratios and safe areas for TikTok, Reels, and YouTube Shorts."
        }
      },
      {
        "@type": "Question",
        "name": "How fast can I create a video ad using the AI Video Agent?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can go from a product URL or idea to a polished, platform-ready video ad in just minutes, which is 10x faster than traditional production."
        }
      },
      {
        "@type": "Question",
        "name": "Who should use Topview's AI video tools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Topview is built for Growth Marketers, E-commerce sellers, DTC brands, Agencies, and Social Media Managers looking to scale video content."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need professional editing skills to use Topview?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zero editing experience is required. The platform uses natural language processing and intuitive AI controls to generate professional-grade content."
        }
      },
      {
        "@type": "Question",
        "name": "Can I clone a specific video style using AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can provide any reference video, and the AI Agent analyzes the shots, pacing, and storytelling style to recreate a similar concept."
        }
      }
    ]
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://topview.ai",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://topview.ai/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
    </>
  );
};

export default StructuredData;
