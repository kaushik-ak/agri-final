"use client";
 
import * as React from "react";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
 
const testimonials = [
  {
    author: "Ramesh Kumar",
    position: "Wheat Farmer, Punjab",
    quote: "AgriKisan's AI predicted the pest attack in my wheat field 10 days before it happened. I saved my entire harvest and reduced pesticide use significantly.",
    stat: "92% Yield Saved",
    image: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1620659/img/farmer_punjab_video_thumb.png",
  },
  {
    author: "Sunita Devi",
    position: "Organic Farmer, Maharashtra",
    quote: "The soil health card feature is so simple to understand in Marathi. My fertilizer costs dropped by half, and my soil feels much healthier this season.",
    stat: "50% Cost Cut",
    image: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1620659/img/farmer_maharashtra_video_thumb.png",
  },
  {
    author: "Vikram Singh",
    position: "Vineyard Owner, Karnataka",
    quote: "The voice-activated market price updates help me negotiate better with traders. It's like having a digital expert in my pocket at all times.",
    stat: "30% Profit Rise",
    image: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1620659/img/farmer_karnataka_video_thumb.png",
  },
];
 
export default function HarvestSuccessStories() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
 
  React.useEffect(() => {
    if (!api) return;
 
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
 
  return (
    <section data-section-id="129454"
      id="voice-of-success"
      className="dark bg-background text-foreground relative py-24 md:py-32 overflow-hidden"
    >
      {}
      <div className="absolute inset-0 bg-[url(https://wpvc-images.s3.us-east-1.amazonaws.com/images/1620659/img/indian_farmland_texture.png)] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-[url(https://wpvc-images.s3.us-east-1.amazonaws.com/images/1620659/img/micro_dot_grid.png)] bg-repeat opacity-5 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background pointer-events-none" />
 
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-sm font-mono tracking-widest text-accent uppercase mb-4">
            Digital Kisan Impact
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-foreground">
            Voice of Success
          </h3>
        </div>
 
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((item, index) => (
              <CarouselItem key={index} data-index={index}>
                <div className="p-2 md:p-4">
                  <Card className="bg-card/20 backdrop-blur-xl border-white/5 overflow-hidden flex flex-col lg:flex-row gap-0 p-0 shadow-2xl shadow-black/60 rounded-3xl">
                    {}
                    <div className="w-full lg:w-2/5 h-72 lg:h-auto relative overflow-hidden group cursor-pointer">
                      <img
                        src={item.image}
                        alt={item.author}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-background/95 via-background/40 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="size-16 rounded-full bg-primary/90 flex items-center justify-center shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
                          <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                        </div>
                      </div>
                    </div>
 
                    {}
                    <div className="w-full lg:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
                      <Quote className="absolute top-8 right-8 size-24 text-primary/10 -rotate-12 pointer-events-none" />
                      
                      {}
                      <div className="mb-8">
                        <span className="text-5xl md:text-7xl font-sans font-bold text-accent tracking-tighter [text-shadow:_0_0_40px_rgba(255,191,0,0.3)]">
                          {item.stat}
                        </span>
                      </div>
 
                      <blockquote className="text-xl md:text-2xl lg:text-3xl text-foreground/90 font-serif italic mb-10 leading-relaxed">
                        "{item.quote}"
                      </blockquote>
 
                      <div className="mt-auto">
                        <div className="font-sans font-bold text-xl text-foreground tracking-wide">
                          {item.author}
                        </div>
                        <div className="text-primary text-sm uppercase tracking-widest mt-1 font-mono font-medium">
                          {item.position}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
 
          {}
          <div className="flex items-center justify-center gap-6 mt-12 md:mt-16">
            <CarouselPrevious className="static translate-y-0 left-auto right-auto top-auto bottom-auto bg-secondary/50 border-white/5 hover:bg-primary/20 hover:text-primary transition-colors size-14 rounded-xl" />
            
            <div className="flex gap-3 items-center">
              {Array.from({ length: count }).map((_, i) => (
                <Button
                  key={i}
                  data-index={i}
                  variant="ghost"
                  size="icon"
                  className={`h-2.5 min-w-0 p-0 rounded-full transition-all duration-300 ${
                    i + 1 === current
                      ? "w-10 bg-primary shadow-[0_0_15px_var(--color-primary)]"
                      : "w-2.5 bg-white/10 hover:bg-white/30"
                  }`}
                  onClick={() => api?.scrollTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
 
            <CarouselNext className="static translate-y-0 left-auto right-auto top-auto bottom-auto bg-secondary/50 border-white/5 hover:bg-primary/20 hover:text-primary transition-colors size-14 rounded-xl" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}