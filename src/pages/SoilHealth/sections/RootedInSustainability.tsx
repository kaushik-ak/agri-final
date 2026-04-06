"use client";
 
import { Droplets, Leaf, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
 
const sustainabilityFeatures = [
  {
    title: "Save on Fertilizers",
    description: "Our AI analysis identifies exactly which nutrients your soil lacks, preventing wasteful over-application and reducing your input costs significantly.",
    icon: Droplets,
  },
  {
    title: "Boost Your Harvest",
    description: "Healthy soil leads to stronger crops. By balancing your soil's pH and minerals, you can achieve up to 30% higher yields every season.",
    icon: Leaf,
  },
  {
    title: "Localized Insights",
    description: "Get recommendations tailored to your specific village and climate conditions, ensuring your farming practices are perfectly aligned with your land.",
    icon: MapPin,
  },
];
 
export default function RootedInSustainability() {
  const { ref, isVisible } = useRevealOnScroll({ threshold: 0.1 });
 
  return (
    <section data-section-id="186670" 
      id="why-test-your-soil" 
      className="bg-background text-foreground relative overflow-hidden py-24 lg:py-32"
    >
      {}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url(https://wpvc-images.s3.us-east-1.amazonaws.com/images/1620659/img/soil_texture_overlay.png)] bg-cover bg-center bg-no-repeat mix-blend-multiply" />
 
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight mb-6 text-secondary">
            Why Test Your Soil?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl font-sans">
            Unlock the hidden potential of your land. AgriKisan brings scientific soil testing to your doorstep to ensure a prosperous future for your family.
          </p>
        </div>
 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {sustainabilityFeatures.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                data-index={i}
                className={`transition-all duration-1000 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                } ${i === 1 ? "md:mt-[40px]" : ""}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <Card className="h-full bg-card/80 backdrop-blur-md border-border/50 shadow-xl rounded-[24px] hover:shadow-2xl transition-all duration-500 group">
                  <CardHeader className="pb-4 pt-8 px-8">
                    <div className="mb-8 transform group-hover:scale-110 transition-transform duration-300">
                      <Icon 
                        className="w-14 h-14 text-primary" 
                        strokeWidth={1.5} 
                        aria-hidden="true"
                      />
                    </div>
                    <CardTitle className="text-2xl font-sans font-bold tracking-tight text-secondary">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <p className="text-muted-foreground leading-relaxed text-lg font-sans">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}