"use client";
 
import React, { useState, useEffect } from "react";
import { 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight, 
  Lock, 
  MapPin 
} from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
 
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ChartConfig, 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";
import { Link } from "@/components/common/Link";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
 
 
const chartData = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 18500 },
  { month: "Mar", revenue: 22000 },
  { month: "Apr", revenue: 35000 },
  { month: "May", revenue: 48000 },
  { month: "Jun", revenue: 62000 },
];
 
const chartConfig = {
  revenue: {
    label: "Rainfall",
    color: "hsl(var(--accent))",
  },
} satisfies ChartConfig;
 
export default function TheUnfairAdvantageYourCompetitorsFear() {
  const { ref, isVisible } = useRevealOnScroll({ threshold: 0.1 });
  const [spotsLeft, setSpotsLeft] = useState(3);
 
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSpotsLeft((prev) => (prev > 1 ? prev - 1 : 1));
    }, 8000);
    return () => clearInterval(interval);
  }, []);
 
  return (
    <section data-section-id="18247"
      id="weather-crop-alerts"
      ref={ref}
      className="dark bg-background text-foreground relative min-h-[90vh] w-full overflow-hidden py-20 lg:py-32 flex items-center"
    >
      {}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://wpvc-images.s3.us-east-1.amazonaws.com/images/1620659/img/mesh_gradient_orange.png')] bg-cover bg-center opacity-30 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-accent/15 via-transparent to-transparent" />
      </div>
 
      {}
      <style jsx>{`
        @keyframes float-card {
          0%, 100% { transform: perspective(1000px) rotateY(-12deg) rotateX(6deg) translateY(0px); }
          50% { transform: perspective(1000px) rotateY(-12deg) rotateX(6deg) translateY(-20px); }
        }
        .animate-float-card {
          animation: float-card 6s ease-in-out infinite;
        }
      `}</style>
 
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          
          {}
          <div 
            className={`lg:col-span-7 flex flex-col gap-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-4">
              <Badge variant="outline" className="w-fit border-accent/50 text-accent bg-accent/10 px-4 py-1.5 text-sm backdrop-blur-md">
                <Lock className="mr-2 h-3.5 w-3.5" />
                Urgent Weather Advisory
              </Badge>
              
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl xl:text-7xl leading-[1.1]">
                HEAVY <span className="bg-gradient-to-r from-orange-400 to-amber-600 bg-clip-text text-transparent">RAIN</span> ALERT: Next 48 Hours
              </h1>
              
              <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed">
                Significant precipitation detected for Northern Punjab. Delay harvesting and cover 
                stored grain immediately to prevent moisture damage. AgriKisan's AI sensors 
                predict high risk for the next two days.
              </p>
            </div>
 
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="#contact">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto text-base font-semibold bg-accent text-accent-foreground hover:bg-accent/90 shadow-[0_0_30px_-5px_var(--color-accent)] hover:shadow-[0_0_40px_-5px_var(--color-accent)] transition-shadow duration-300"
                >
                  Share via WhatsApp
                  <ShieldCheck className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link to="/KisanNewsPage">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto text-base border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm"
                >
                  View Full Forecast
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
 
            <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    data-index={i}
                    className="h-8 w-8 rounded-full border-2 border-background bg-muted overflow-hidden"
                  >
                    <img 
                      src={`/img/avatar_user_${i}.png`} 
                      alt={`User ${i}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p>Helping 50,000+ farmers protect their crops</p>
            </div>
          </div>
 
          {}
          <div 
            className={`lg:col-span-5 perspective-1000 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none animate-float-card">
              {}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/30 to-orange-500/30 blur-3xl opacity-50 rounded-full" />
              
              <Card className="relative border-white/10 bg-card/50 backdrop-blur-xl shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-accent to-amber-600" />
                
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl font-bold">Rainfall Probability</CardTitle>
                      <CardDescription>Hourly Forecast for Punjab</CardDescription>
                    </div>
                    <Badge variant="destructive" className="animate-pulse shadow-lg shadow-destructive/20">
                      <MapPin className="mr-1 h-3 w-3" />
                      Alert Zone: Northern Punjab
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="h-[250px] w-full">
                    <ChartContainer config={chartConfig}>
                      <AreaChart
                        data={chartData}
                        margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                      >
                        <defs>
                          <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="var(--color-accent)" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="var(--color-accent)" stopOpacity={0.1} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                        <XAxis
                          dataKey="month"
                          tickLine={false}
                          axisLine={false}
                          tickMargin={8}
                          tickFormatter={(value) => value.slice(0, 3)}
                          stroke="rgba(255,255,255,0.5)"
                        />
                        <YAxis 
                          tickLine={false}
                          axisLine={false}
                          tickFormatter={(value) => `${value / 1000}%`}
                          stroke="rgba(255,255,255,0.5)"
                        />
                        <ChartTooltip
                          cursor={false}
                          content={<ChartTooltipContent indicator="dot" hideLabel />}
                        />
                        <Area
                          dataKey="revenue"
                          type="natural"
                          fill="url(#fillRevenue)"
                          fillOpacity={0.4}
                          stroke="var(--color-accent)"
                          strokeWidth={3}
                          stackId="a"
                        />
                      </AreaChart>
                    </ChartContainer>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-white/5 p-3 border border-white/5">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <TrendingUp className="h-4 w-4 text-orange-400" />
                        Humidity
                      </div>
                      <p className="text-2xl font-bold text-foreground">88%</p>
                    </div>
                    <div className="rounded-lg bg-white/5 p-3 border border-white/5">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <ShieldCheck className="h-4 w-4 text-amber-400" />
                        Wind Speed
                      </div>
                      <p className="text-2xl font-bold text-foreground">22km/h</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
 
              {}
              <div className="absolute -right-6 top-1/4 hidden lg:block animate-bounce [animation-duration:3s]">
                <div className="rounded-lg border border-white/10 bg-background/80 p-3 shadow-xl backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/20 text-orange-500">
                      <TrendingUp className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">Alert Status</p>
                      <p className="text-sm font-bold text-foreground">Rising Risk</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}