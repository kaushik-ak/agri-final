"use client";
 
import React from "react";
import { Search } from "lucide-react";
 
import { Link } from "@/components/common/Link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
 
export default function ThePeoplesPortal() {
  const backgroundImages = [
    "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1620659/img/state_landscape_mountains.png",
    "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1620659/img/state_landscape_city.png",
    "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1620659/img/state_landscape_coast.png",
  ];
 
  const trendingTopics = [
    { label: "Soil Health", url: "/SoilHealthPage" },
    { label: "Kisan News", url: "/KisanNewsPage" },
    { label: "Digital Portal", url: "/DigitalKisanPortalPage" },
    { label: "Weather", url: "#" },
  ];
 
  return (
    <section data-section-id="90649"
      id="farmers-digital-assistant"
      className="relative w-full h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-background"
    >
      {}
      <div className="absolute inset-0 z-0">
        <Carousel
          opts={{
            loop: true,
            watchDrag: false,
            duration: 60,
          }}
          className="w-full h-full"
        >
          <CarouselContent className="h-full ml-0">
            {backgroundImages.map((src, i) => (
              <CarouselItem
                key={i}
                data-index={i}
                className="pl-0 h-full relative min-w-full"
              >
                <img
                  src={src}
                  alt={`State landscape ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        {}
        <div className="absolute inset-0 bg-secondary/40 z-10" />
      </div>
 
      {}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-bold text-white tracking-tight leading-tight mb-10 drop-shadow-2xl">
          Namaste, how can I help you today?
        </h1>
 
        {}
        <div className="w-full max-w-3xl relative mb-8 group">
          <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full transition-all group-hover:bg-primary/30" />
          <div className="relative flex items-center">
            <Input
              type="text"
              placeholder="Ask anything about your crops or schemes..."
              className="w-full h-16 pl-8 pr-36 text-lg md:text-xl rounded-full bg-background/95 backdrop-blur-md border-primary/20 shadow-2xl text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black/20 transition-all"
            />
            <Button
              size="lg"
              className="absolute right-2 top-2 bottom-2 h-12 rounded-full px-6 md:px-8 text-base font-bold bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform"
            >
              <Search className="w-5 h-5 md:mr-2" />
              <span className="hidden md:inline">Voice Search</span>
            </Button>
          </div>
        </div>
 
        {}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          <span className="text-white/90 font-medium text-sm md:text-base drop-shadow-md">
            Popular Topics:
          </span>
          {trendingTopics.map((topic, i) => (
            <Link key={i} to={topic.url} data-index={i}>
              <Badge
                variant="secondary"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-xl px-4 py-1.5 text-sm md:text-base font-medium transition-colors cursor-pointer shadow-md"
              >
                {topic.label}
              </Badge>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}