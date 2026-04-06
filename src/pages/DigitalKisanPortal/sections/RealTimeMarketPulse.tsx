"use client";
 
import React from "react";
import { CloudSun, TrendingDown, TrendingUp } from "lucide-react";
import { Line, LineChart } from "recharts";
 
import { Badge } from "@/components/ui/badge";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
 
const marketData = [
  {
    id: "wheat",
    name: "Wheat (Kanak)",
    price: "₹2,450",
    unit: "/qtl",
    delta: "+1.5%",
    trend: "up",
    chartColor: "var(--color-primary)",
    data: [
      { day: "Mon", value: 2380 },
      { day: "Tue", value: 2400 },
      { day: "Wed", value: 2420 },
      { day: "Thu", value: 2410 },
      { day: "Fri", value: 2430 },
      { day: "Sat", value: 2445 },
      { day: "Sun", value: 2450 },
    ],
  },
  {
    id: "paddy",
    name: "Paddy (Dhan)",
    price: "₹2,183",
    unit: "/qtl",
    delta: "+0.4%",
    trend: "up",
    chartColor: "var(--color-chart-2)",
    data: [
      { day: "Mon", value: 2150 },
      { day: "Tue", value: 2160 },
      { day: "Wed", value: 2155 },
      { day: "Thu", value: 2170 },
      { day: "Fri", value: 2175 },
      { day: "Sat", value: 2180 },
      { day: "Sun", value: 2183 },
    ],
  },
  {
    id: "mustard",
    name: "Mustard (Sarson)",
    price: "₹5,650",
    unit: "/qtl",
    delta: "-1.2%",
    trend: "down",
    chartColor: "var(--color-destructive)",
    data: [
      { day: "Mon", value: 5750 },
      { day: "Tue", value: 5720 },
      { day: "Wed", value: 5740 },
      { day: "Thu", value: 5700 },
      { day: "Fri", value: 5680 },
      { day: "Sat", value: 5660 },
      { day: "Sun", value: 5650 },
    ],
  },
];
 
export default function RealTimeMarketPulse() {
  return (
    <section data-section-id="191112" id="current-market-mandi-rates" className="w-full bg-background text-foreground">
      <div className="w-full bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-8">
            
            {}
            <div className="flex items-center gap-3 shrink-0">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-background shadow-sm border border-border">
                <CloudSun className="w-5 h-5 text-primary" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-secondary">32°C</span>
                  <span className="text-xs text-muted-foreground font-medium">Punjab, IN</span>
                </div>
                <Badge variant="secondary" className="mt-0.5 text-[10px] font-bold uppercase tracking-widest bg-accent/20 text-accent-foreground hover:bg-accent/30 border-none">
                  Mandi Active
                </Badge>
              </div>
            </div>
 
            {}
            <div className="w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
              <div className="flex items-center gap-6 lg:gap-8 min-w-max">
                {marketData.map((item, i) => (
                  <div key={item.id} data-index={i} className="flex items-center gap-4">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                        {item.name}
                      </span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-sm font-mono font-bold text-secondary">
                          {item.price}
                        </span>
                        <span className="text-[10px] text-muted-foreground font-mono font-medium">
                          {item.unit}
                        </span>
                      </div>
                    </div>
 
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-8">
                        <ChartContainer
                          config={{
                            value: {
                              label: "Price",
                              color: item.chartColor,
                            },
                          }}
                          className="w-full h-full"
                        >
                          <LineChart data={item.data} margin={{ top: 2, right: 2, bottom: 2, left: 2 }}>
                            <ChartTooltip
                              cursor={false}
                              content={<ChartTooltipContent hideLabel hideIndicator />}
                            />
                            <Line
                              type="monotone"
                              dataKey="value"
                              stroke="var(--color-value)"
                              strokeWidth={2.5}
                              dot={false}
                              isAnimationActive={false}
                            />
                          </LineChart>
                        </ChartContainer>
                      </div>
 
                      <div
                        className={`flex items-center gap-0.5 text-xs font-mono font-bold ${
                          item.trend === "up" ? "text-primary" : "text-destructive"
                        }`}
                      >
                        {item.trend === "up" ? (
                          <TrendingUp className="w-3 h-3" />
                        ) : (
                          <TrendingDown className="w-3 h-3" />
                        )}
                        {item.delta}
                      </div>
                    </div>
                    
                    {}
                    {i < marketData.length - 1 && (
                      <div className="hidden lg:block w-px h-8 bg-border/60 ml-4" />
                    )}
                  </div>
                ))}
              </div>
            </div>
 
          </div>
        </div>
      </div>
    </section>
  );
}
