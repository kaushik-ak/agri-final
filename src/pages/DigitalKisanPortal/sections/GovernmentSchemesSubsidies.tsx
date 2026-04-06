"use client";
 
import React from "react";
import { Calendar, ChevronRight, FileText } from "lucide-react";
import { PostsProvider, usePosts } from "@/integrations/wordpress/WordPressPostsProvider";
import { WP_Query } from "@/integrations/wordpress/wp_query";
import { Link } from "@/components/common/Link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
 
function SchemesListConsumer() {
  const { posts, loading, error, hasNext, hasPrev, nextPage, prevPage } = usePosts();
 
  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Card key={i} data-index={i} className="animate-pulse">
            <CardContent className="p-6 flex flex-col md:flex-row gap-6 justify-between">
              <div className="flex-1 space-y-3">
                <div className="h-6 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-full"></div>
                <div className="h-4 bg-muted rounded w-5/6"></div>
              </div>
              <div className="shrink-0 flex flex-col items-start md:items-end gap-4">
                <div className="h-6 bg-muted rounded w-24"></div>
                <div className="h-10 bg-muted rounded w-32"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }
 
  if (error) {
    return (
      <div className="text-center py-12 bg-white rounded-xl border border-border">
        <p className="text-destructive mb-2">Failed to load schemes.</p>
        <p className="text-sm text-muted-foreground">{error}</p>
      </div>
    );
  }
 
  if (posts.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-xl border border-border">
        <FileText className="mx-auto h-12 w-12 text-muted-foreground mb-4 opacity-20" />
        <h3 className="text-lg font-medium text-foreground">No schemes available</h3>
        <p className="text-muted-foreground mt-1">Check back later for new government subsidies and programs.</p>
      </div>
    );
  }
 
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {posts.map((post, i) => {
          const isActive = true;
          
          return (
            <Card key={post.id} data-index={i} className="overflow-hidden transition-shadow hover:shadow-md">
              <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-semibold text-foreground leading-tight">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <div 
                      className="text-muted-foreground text-sm line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: post.excerpt }}
                    />
                  )}
                </div>
 
                <div className="shrink-0 flex flex-row md:flex-col items-center md:items-end gap-4 w-full md:w-auto justify-between md:justify-start border-t md:border-t-0 pt-4 md:pt-0 mt-2 md:mt-0 border-border">
                  <Badge 
                    variant="default" 
                    className="whitespace-nowrap bg-green-100 text-green-800 border-green-200"
                  >
                    <Calendar className="w-3 h-3 mr-1" />
                    Currently Active
                  </Badge>
                  
                  <Link to={post.link || "#"}>
                    <Button className="w-full md:w-auto group">
                      Apply Now
                      <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
 
              </CardContent>
            </Card>
          );
        })}
      </div>
 
      {(hasNext || hasPrev) && (
        <div className="flex items-center justify-between pt-6 border-t border-border/50">
          <Button 
            variant="outline" 
            onClick={prevPage} 
            disabled={!hasPrev}
          >
            Previous
          </Button>
          <Button 
            variant="outline" 
            onClick={nextPage} 
            disabled={!hasNext}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
 
export default function GovernmentSchemesSubsidies() {
  const wp_query_params = { 
    per_page: 5,
    order: "desc",
    orderby: "date"
  };
  const wp_query = new WP_Query(wp_query_params);
 
  return (
    <section id="government-schemes-subsidies" className="py-16 md:py-24 bg-[#F9F6F0]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Government Schemes & Subsidies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Explore the latest agricultural programs, financial assistance, and subsidies provided by the government to support your farming journey.
          </p>
        </div>
 
        <PostsProvider wp_query={{ per_page: 5, order: "desc", orderby: "date" }}>
          <SchemesListConsumer />
        </PostsProvider>
      </div>
    </section>
  );
}