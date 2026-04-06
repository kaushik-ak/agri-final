import React from "react";
import { 
  Brain, 
  Activity, 
  HandHelping, 
  MessageSquareText, 
  Heart, 
  ShieldPlus, 
  ArrowRight, 
  CircleCheck 
} from "lucide-react";
import { Link } from "@/components/common/Link";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
 
const services = [
  {
    title: "Soil Health",
    icon: Brain,
    description: "AI-powered soil analysis to optimize your land's fertility and nutrient balance.",
    features: [
      "Nutrient Profile Analysis",
      "Fertilizer Recommendations",
      "pH Level Monitoring"
    ],
    link: "/SoilHealthPage"
  },
  {
    title: "Weather Alerts",
    icon: Activity,
    description: "Hyper-local weather forecasts and real-time sowing time recommendations.",
    features: [
      "Local Rain Forecasts",
      "Temperature Tracking",
      "Sowing Window Alerts"
    ],
    link: "#"
  },
  {
    title: "Expert Support",
    icon: HandHelping,
    description: "Direct connection with agricultural experts and AI-driven voice assistance.",
    features: [
      "AI Voice Assistant",
      "Video Consultations",
      "Community Forums"
    ],
    link: "#"
  },
  {
    title: "Mandi Prices",
    icon: MessageSquareText,
    description: "Daily market rates from local mandis to ensure you get the best crop value.",
    features: [
      "Daily Market Rates",
      "Nearby Mandi Info",
      "Price Trend Analysis"
    ],
    link: "#"
  },
  {
    title: "Kisan News",
    icon: Heart,
    description: "Stay updated with the latest farming techniques and regional agriculture news.",
    features: [
      "New Farming Tech",
      "Pest Control News",
      "Success Stories"
    ],
    link: "/KisanNewsPage"
  },
  {
    title: "Kisan Portal",
    icon: ShieldPlus,
    description: "Easy access to government schemes, subsidies, and insurance enrollment.",
    features: [
      "PM-Kisan Status",
      "Subsidy Applications",
      "Insurance Enrollment"
    ],
    link: "/DigitalKisanPortalPage"
  }
];
 
export default function ServiceCategories() {
  const { ref, isVisible } = useRevealOnScroll({ threshold: 0.1 });
 
  return (
    <section data-section-id="17543" 
      id="essential-farm-services" 
      ref={ref}
      className="bg-background py-24 relative overflow-hidden text-foreground"
    >
      {}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl opacity-30" />
      </div>
 
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight font-sans">
            Essential Farmer Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-sans">
            AgriKisan provides a digital ecosystem designed to empower Indian farmers with real-time data, AI insights, and direct access to government resources.
          </p>
        </div>
 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              data-index={index}
              className={`transition-all duration-700 delay-[${index * 100}ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <Card className="h-full border-border/60 shadow-md hover:shadow-2xl hover:bg-primary/5 hover:-translate-y-2 transition-all duration-300 group bg-card/80 backdrop-blur-sm rounded-[24px]">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 rounded-[20px] bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 font-sans">
                    {service.title}
                  </CardTitle>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed font-sans">
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent className="pb-6 flex-grow">
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground/90 font-sans">
                        <CircleCheck className="w-4 h-4 text-primary/70 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
 
                <CardFooter className="pt-2">
                  <Button 
                    asChild 
                    variant="ghost" 
                    className="w-full justify-between group-hover:bg-primary/10 group-hover:text-primary hover:no-underline pl-0 hover:pl-4 transition-all duration-300 rounded-xl"
                  >
                    <Link to={service.link}>
                      <span className="font-bold font-sans">Access Service</span>
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}