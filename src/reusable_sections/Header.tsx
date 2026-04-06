import React, { useState, useEffect } from "react";
import { Menu, X, ShieldCheck, Activity } from "lucide-react";
import { Link } from "@/components/common/Link";
import { MenuProvider, useMenu } from "@/integrations/wordpress/WordPressMenuProvider";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
 
 
interface MenuItem {
  id: string;
  label: string;
  href?: string;
  children?: MenuItem[];
}
 
 
 
function HeaderMenuConsumer() {
  const { menuItems, loading } = useMenu();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
  
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);
 
  if (loading) {
    return (
      <div data-section-id="790" className="flex items-center gap-4">
        <div className="hidden md:flex gap-1">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-9 w-20 bg-muted/20 animate-pulse rounded-md" />
          ))}
        </div>
        <div className="md:hidden h-9 w-9 bg-muted/20 animate-pulse rounded-md" />
      </div>
    );
  }
 
  return (
    <>
      {}
      <div className="hidden md:block">
        <NavigationMenu viewport={false}>
          <NavigationMenuList className="gap-2">
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.id}>
                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary data-[active]:bg-primary/10 data-[active]:text-primary font-sans font-medium tracking-tight")}>
                  <Link to={item.href || "#"}>
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
 
      {}
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileMenuOpen(true)}
          className="text-foreground hover:bg-primary/10 hover:text-primary"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
 
      {}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex flex-col animate-in fade-in slide-in-from-bottom-10 duration-200">
          <div className="flex items-center justify-between p-4 border-b border-border/40">
            <div className="flex items-center gap-2">
               <img 
                  src="https://wpvc-images.s3.us-east-1.amazonaws.com/images/1620659/img/logo_the_ai_content_detective.png" 
                  alt="AgriKisan Digital Portal" 
                  className="h-7 w-auto object-contain" 
                />
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground hover:bg-destructive/10 hover:text-destructive"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              {menuItems.map((item, i) => (
                <Link
                  key={item.id}
                  to={item.href || "#"}
                  className="text-lg font-sans font-semibold py-3 border-b border-border/20 text-foreground/80 hover:text-primary hover:pl-2 transition-all duration-300 flex items-center justify-between group"
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-index={i}
                >
                  {item.label}
                  <span className="opacity-0 group-hover:opacity-100 text-primary transition-opacity">
                    →
                  </span>
                </Link>
              ))}
            </div>
 
            <div className="mt-auto pt-8 border-t border-border/40">
               <div className="flex items-center justify-center gap-2 text-xs font-sans font-bold text-muted-foreground mb-4">
                  <Activity className="h-3 w-3 text-primary animate-pulse" />
                  कृषि सेवा: सक्रिय | PORTAL: ONLINE
               </div>
               <Button className="w-full font-sans font-bold py-6 text-lg rounded-xl" size="lg">
                 कृषि सहायक (KISAN AI)
               </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
 
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
 
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href]') as HTMLAnchorElement | null;
 
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (!href) return;
 
        
        if (href === '/#') {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
 
        
        let hash = '';
        if (href.startsWith('#')) {
          hash = href; 
        } else if (href.startsWith('/') && href.includes('#')) {
          const [path, hashPart] = href.split('#');
          if (hashPart === '') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
          }
          if (path === '/' || path === window.location.pathname) {
            hash = '#' + hashPart;
          }
        }
 
        if (hash && hash !== '#') {
          const element = document.querySelector(hash);
          if (element) {
            e.preventDefault();
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    };
 
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);
 
  return (
    <header 
      id="primary-header" 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
        "bg-background text-foreground", 
        scrolled 
          ? "bg-background/80 backdrop-blur-md border-primary/20 shadow-lg" 
          : "bg-background border-transparent"
      )}
    >
      {}
      <div 
        className={cn(
          "absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-500",
          scrolled ? "w-full opacity-100" : "w-0 opacity-0"
        )} 
      />
 
      <div className="container mx-auto px-4 h-20 flex items-center justify-between relative">
        
        {}
        <div className="flex-shrink-0 z-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute -inset-2 bg-primary/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src="https://wpvc-images.s3.us-east-1.amazonaws.com/images/1620659/img/logo_the_ai_content_detective.png" 
                alt="AgriKisan Logo" 
                className="h-9 w-auto object-contain relative z-10" 
              />
            </div>
          </Link>
        </div>
 
        {}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
          <Badge 
            variant="outline" 
            className="bg-primary/5 backdrop-blur-sm border-primary/30 text-primary font-sans font-bold text-[11px] tracking-wide px-4 py-1.5 flex items-center gap-2 shadow-sm rounded-full"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            हिन्दी | ENGLISH
          </Badge>
        </div>
 
        {}
        <div className="flex items-center gap-4 z-20">
          <MenuProvider menu_id="50">
            <HeaderMenuConsumer />
          </MenuProvider>
          
          <div className="hidden md:block pl-4 border-l border-border/40 ml-2">
             <Button size="sm" className="font-sans font-bold text-xs h-9 px-5 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_rgba(22,163,74,0.3)] rounded-full transition-all hover:scale-105">
                <ShieldCheck className="w-4 h-4 mr-2" />
                KISAN AI
             </Button>
          </div>
        </div>
 
      </div>
    </header>
  );
}