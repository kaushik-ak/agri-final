"use client";
 
import React from "react";
import { Package, TestTube, Microscope, ChartLine } from "lucide-react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
 
const steps = [
  {
    id: "dig",
    title: "Dig",
    icon: TestTube,
    description: "Use a clean spade to dig a V-shaped hole about 6 inches deep in multiple spots across your farmland.",
  },
  {
    id: "collect",
    title: "Collect",
    icon: Microscope,
    description: "Take a thin slice of soil from the side of the hole and remove any grass, roots, or stones from the sample.",
  },
  {
    id: "pack",
    title: "Pack",
    icon: Package,
    description: "Mix samples in a clean bucket, dry them in shade, and pack 500g in a secure, labeled AgriKisan bag.",
  },
  {
    id: "submit",
    title: "Submit",
    icon: ChartLine,
    description: "Hand over your sample at the nearest Kisan Kendra or submit a request via our app for doorstep collection.",
  },
];
 
export default function ThePathFromSampleToScience() {
  const { ref, isVisible } = useRevealOnScroll({ threshold: 0.1 });
 
  return (
    <section data-section-id="137532"
      id="soil-testing-process"
      className="relative py-24 overflow-hidden bg-background text-foreground"
      ref={ref}
    >
      {}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-accent/10 blur-[80px]" />
      </div>
 
      <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-6xl">
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-foreground tracking-tight">
            Simplified Soil Testing Process
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Follow these four easy steps to unlock the potential of your land. Our scientific approach ensures your soil gets exactly what it needs to thrive.
          </p>
        </div>
 
        <div className="relative mt-12">
          {}
          <div className="hidden md:block absolute top-12 left-[12.5%] w-[75%] h-2 z-0">
            <svg width="100%" height="100%" preserveAspectRatio="none">
              {}
              <line
                x1="0"
                y1="4"
                x2="100%"
                y2="4"
                stroke="var(--color-border)"
                strokeWidth="2"
                strokeDasharray="8 8"
              />
              {}
              <line
                x1="0"
                y1="4"
                x2="100%"
                y2="4"
                stroke="var(--color-primary)"
                strokeWidth="2"
                strokeDasharray="8 8"
                className="animate-[flow-dash_1.5s_linear_infinite] opacity-60"
              />
            </svg>
          </div>
 
          {}
          <div className="md:hidden absolute top-[10%] bottom-[10%] left-1/2 -translate-x-1/2 w-0.5 z-0">
             <div className="w-full h-full border-l-2 border-dashed border-border relative">
                <div className="absolute top-0 left-[-1px] w-[2px] h-full bg-primary opacity-60 animate-[flow-dash-vertical_1.5s_linear_infinite]" style={{ backgroundImage: 'linear-gradient(to bottom, transparent, var(--color-primary), transparent)', backgroundSize: '100% 200%' }}></div>
             </div>
          </div>
 
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-4 relative z-10">
            {steps.map((step, i) => (
              <div
                key={step.id}
                data-index={i}
                className={`group relative flex flex-col items-center text-center w-full md:w-1/4 transition-all duration-700 delay-[${i * 200}ms] transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              >
                {}
                <div className="relative w-24 h-24 rounded-3xl bg-card border-2 border-input shadow-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:shadow-xl group-hover:shadow-primary/20 z-10">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <step.icon className="w-10 h-10 text-primary group-hover:text-primary transition-colors duration-300 relative z-10" strokeWidth={1.5} />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center text-sm shadow-md">
                    {i + 1}
                  </div>
                </div>
 
                <h3 className="mt-6 text-2xl font-bold text-foreground font-sans">
                  {step.title}
                </h3>
 
                {}
                <div className="absolute top-full mt-4 w-64 p-5 bg-card text-card-foreground rounded-3xl border-2 border-input shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 translate-y-2 group-hover:translate-y-0 pointer-events-none">
                  <p className="text-base leading-relaxed font-medium">{step.description}</p>
                  {}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-card border-t-2 border-l-2 border-input rotate-45" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
 
      {}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes flow-dash {
            from { stroke-dashoffset: 16; }
            to { stroke-dashoffset: 0; }
          }
          @keyframes flow-dash-vertical {
            0% { background-position: 0% -100%; }
            100% { background-position: 0% 100%; }
          }
        `
      }} />
    </section>
  );
}