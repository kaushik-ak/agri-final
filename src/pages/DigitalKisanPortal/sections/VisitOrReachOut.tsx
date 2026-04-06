"use client";
 
import React from "react";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { Link } from "@/components/common/Link";
 
export default function VisitOrReachOut() {
  const { ref: leftRef, isVisible: leftVisible } = useRevealOnScroll({
    threshold: 0.2,
  });
  const { ref: rightRef, isVisible: rightVisible } = useRevealOnScroll({
    threshold: 0.2,
  });
 
  const address = "Krishi Bhavan, Sector 10, New Delhi, India";
  const phone = "1800-123-4567";
 
  return (
    <section data-section-id="193788"
      id="expert-help-desk"
      className="py-24 lg:py-32 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {}
          <div
            ref={leftRef}
            className={`relative w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-xl border border-border/40 transition-all duration-1000 ease-out ${
              leftVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10 pointer-events-none" />
            <img
              src="https://wpvc-images.s3.us-east-1.amazonaws.com/images/1620659/img/emerald_earth_styled_map.png"
              alt="AgriKisan Expert Support Center"
              className="w-full h-full object-cover"
            />
          </div>
 
          {}
          <div
            ref={rightRef}
            className={`flex flex-col gap-12 transition-all duration-1000 delay-200 ease-out ${
              rightVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Expert Help Desk
              </h2>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Get real-time guidance on crop diseases, soil health, and government schemes from our certified agricultural experts today.
              </p>
            </div>
 
            <div className="flex flex-col gap-10">
              {}
              <div className="flex items-start gap-6 group">
                <div className="flex items-center justify-center size-20 rounded-3xl bg-accent shadow-sm shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <MapPin className="size-10 text-primary" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col pt-2 space-y-1">
                  <h3 className="text-2xl font-semibold text-foreground tracking-tight">
                    Regional Center
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {address}
                  </p>
                </div>
              </div>
 
              {}
              <div className="flex items-start gap-6 group">
                <div className="flex items-center justify-center size-20 rounded-3xl bg-accent shadow-sm shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <Phone className="size-10 text-primary" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col pt-2 space-y-1">
                  <h3 className="text-2xl font-semibold text-foreground tracking-tight">
                    Toll-Free Helpline
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {phone}
                  </p>
                </div>
              </div>
            </div>
 
            {}
            <div className="pt-4">
              <Link to="#" className="inline-block w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-16 px-10 rounded-xl text-lg font-semibold shadow-lg bg-primary text-primary-foreground hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <MessageCircle className="size-6 mr-3" />
                  Chat on WhatsApp
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}