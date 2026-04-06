import { MapPin, Clock, Phone, Mail, TrainFront, Bus, ExternalLink } from "lucide-react";
import { Link } from "@/components/common/Link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
 
export default function OurSouthLondonOffice() {
  return (
    <section data-section-id="187228" 
      id="find-nearest-lab" 
      className="bg-background text-foreground relative w-full min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden"
    >
      {}
      <div className="absolute inset-0 w-full h-full z-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224128.3021034448!2d77.06889754999999!3d28.5272803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b71532ad4b4!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
          className="w-full h-full border-0 filter grayscale sepia hue-rotate-[60deg] saturate-100 contrast-110 brightness-75"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="AgriKisan - Find Nearest Soil Testing Lab"
        ></iframe>
        {}
        <div className="absolute inset-0 bg-background/20 pointer-events-none backdrop-grayscale-[0.2]"></div>
      </div>
 
      {}
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row justify-end items-center py-16 md:py-24">
        
        {}
        <Card className="w-full max-w-md bg-card/95 backdrop-blur-md text-card-foreground shadow-2xl border-2 border-primary/10 rounded-[24px] overflow-hidden">
          <CardHeader className="pb-6 border-b border-border/50 bg-primary/5">
            <CardTitle className="text-2xl md:text-3xl font-sans font-bold text-primary">
              Soil Testing Center
            </CardTitle>
          </CardHeader>
          
          <CardContent className="pt-8 space-y-8">
            {}
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2.5 rounded-full shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1 text-secondary">Center Location</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Krishi Vigyan Kendra, Pusa Campus, New Delhi, India
                </p>
              </div>
            </div>
 
            {}
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2.5 rounded-full shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1 text-secondary">Service Hours</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Monday to Saturday, 8am to 6pm
                </p>
              </div>
            </div>
 
            {}
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2.5 rounded-full shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1 text-secondary">Helpline</h4>
                <p className="text-muted-foreground leading-relaxed mb-1">
                  1800-11-1552 (Toll Free)
                </p>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4 opacity-70" />
                  <span>support@agrikisan.gov.in</span>
                </div>
              </div>
            </div>
 
            {}
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2.5 rounded-full shrink-0">
                <TrainFront className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-secondary">Nearby Landmark</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <TrainFront className="w-4 h-4 opacity-70" /> 
                    <span>Near Rajendra Place Metro Station</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Bus className="w-4 h-4 opacity-70" /> 
                    <span>District Agriculture Office Routes</span>
                  </li>
                </ul>
              </div>
            </div>
 
            {}
            <div className="pt-4">
              <Button 
                asChild 
                size="lg" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-md rounded-xl h-14 text-lg font-bold group"
              >
                <Link to="https://maps.google.com/?q=Krishi+Vigyan+Kendra+Pusa+Delhi" newTab>
                  Navigate to Lab 
                  <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
 
      </div>
    </section>
  );
}