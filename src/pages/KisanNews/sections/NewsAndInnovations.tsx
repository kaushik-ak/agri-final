"use client";
 
import React from "react";
import { ArrowRight, Mail, CloudSun } from "lucide-react";
import { PostsProvider, usePosts } from "@/integrations/wordpress/WordPressPostsProvider";
import { WP_Query } from "@/integrations/wordpress/wp_query";
import { Link } from "@/components/common/Link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
 
function NewsConsumer() {
  const { posts, loading, error, refetch } = usePosts();
 
  if (loading) {
    return (
      <div data-section-id="50603" className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {[...Array(2)].map((_, i) => (
          <div key={i} data-index={i} className="h-64 animate-pulse bg-muted/50 rounded-3xl" />
        ))}
      </div>
    );
  }
 
  if (error) {
    return (
      <div className="py-12 text-center text-muted-foreground">
        <p className="font-sans text-lg">Unable to load latest agricultural updates.</p>
        <Button variant="link" onClick={refetch} className="mt-2 text-primary font-bold">
          Try Again
        </Button>
      </div>
    );
  }
 
  if (posts.length === 0) {
    return (
      <div className="py-12 text-center text-muted-foreground">
        <p className="font-sans text-lg">No new updates available at the moment. Please check back later.</p>
      </div>
    );
  }
 
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {posts.map((post, i) => (
        <article key={post.id} data-index={i} className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold text-foreground font-sans tracking-tight">
            {post.title}
          </h3>
          <div 
            className="line-clamp-3 text-lg leading-relaxed text-muted-foreground font-sans"
            dangerouslySetInnerHTML={{ __html: post.excerpt || "" }}
          />
          {post.link && (
            <Link 
              to={post.link} 
              className="group mt-auto inline-flex items-center gap-2 text-base font-bold text-primary hover:text-primary/80 transition-colors"
            >
              Read Full Update
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </article>
      ))}
    </div>
  );
}
 
export default function NewsAndInnovations() {
  
  const wp_query_params = { 
    per_page: 2,
    orderby: 'date',
    order: 'desc'
  };
  const wp_query = new WP_Query(wp_query_params);
 
  const tools = [
    {
      id: 1,
      label: "AI KISAN CHAT",
      icon: <Mail className="h-12 w-12 text-white" />,
      bgClass: "bg-secondary",
      textClass: "text-white",
      link: "/DigitalKisanPortalPage",
    },
    {
      id: 2,
      label: "WEATHER ALERTS",
      icon: <CloudSun className="h-12 w-12 text-white" />,
      bgClass: "bg-accent", 
      textClass: "text-secondary",
      link: "/KisanNewsPage",
    },
    {
      id: 3,
      label: "SOIL HEALTH CARD",
      icon: <img src="https://wpvc-images.s3.us-east-1.amazonaws.com/images/1620659/img/olympe_parcelles_logo.png" alt="Soil Health Portal" className="h-12 w-auto object-contain brightness-0 invert" />,
      bgClass: "bg-primary",
      textClass: "text-primary-foreground", 
      link: "/SoilHealthPage",
    },
  ];
 
  return (
    <section id="latest-farm-updates" className="bg-background py-16 md:py-24 text-foreground">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {}
        <div className="mb-12">
          <h2 className="inline-block border-b-4 border-primary pb-2 text-3xl font-bold text-foreground md:text-4xl font-sans tracking-tight">
            Kisan News & Innovations
          </h2>
        </div>
 
        {}
        <div className="mb-16">
          <PostsProvider wp_query={{ per_page: 2, orderby: "date", order: "desc" }}>
            <NewsConsumer />
          </PostsProvider>
        </div>
 
        {}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {tools.map((tool, i) => (
            <Link 
              key={tool.id} 
              to={tool.link} 
              className="group block h-full"
              data-index={i}
            >
              <Card className={`flex aspect-square h-full w-full flex-col items-center justify-center gap-4 rounded-[24px] border-none shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${tool.bgClass}`}>
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="mb-4 flex h-20 w-20 items-center justify-center">
                    {tool.icon}
                  </div>
                  <span className={`text-base font-bold tracking-widest font-sans ${tool.textClass}`}>
                    {tool.label}
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}