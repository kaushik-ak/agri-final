import React, { useEffect, useState } from "react";
import { Calendar, Clock, User, ArrowRight, Share2, Tag } from "lucide-react";
import { PostsProvider, usePosts } from "@/integrations/wordpress/WordPressPostsProvider";
import { WP_Query } from "@/integrations/wordpress/wp_query";
import { Link } from "@/components/common/Link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
 
 
 
function RelatedPostsConsumer() {
  const { posts, loading, error } = usePosts();
 
  if (loading) {
    return (
      <div data-section-id="19107" className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-96 w-full animate-pulse rounded-2xl bg-muted/30" data-index={i} />
        ))}
      </div>
    );
  }
 
  if (error || posts.length === 0) {
    return null;
  }
 
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {posts.map((post, i) => (
        <Card key={post.id} className="group overflow-hidden border-none bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1" data-index={i}>
          <div className="relative aspect-[4/3] overflow-hidden">
            {post.featuredImage ? (
              <img
                src={post.featuredImage}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
                <span className="text-sm font-sans">No image available</span>
              </div>
            )}
          </div>
          <CardHeader className="p-6 pb-2">
            <div className="mb-2 flex items-center gap-2 text-xs font-medium text-primary">
              <Calendar className="h-3 w-3" />
              <span>{post.date ? new Date(post.date).toLocaleDateString("en-IN", { year: 'numeric', month: 'long', day: 'numeric' }) : "Date unavailable"}</span>
            </div>
            <CardTitle className="line-clamp-2 text-lg font-bold leading-tight tracking-tight text-foreground group-hover:text-primary transition-colors">
              <Link to={post.link || "#"} className="hover:text-primary transition-colors">
                {post.title}
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 pt-2">
            <CardDescription className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
              {post.excerpt ? (
                <span dangerouslySetInnerHTML={{ __html: post.excerpt }} />
              ) : (
                "Explore valuable insights and updates for the farming community in our latest knowledge series..."
              )}
            </CardDescription>
          </CardContent>
          <CardFooter className="p-6 pt-0">
            <Link to={post.link || "#"} className="w-full">
              <Button variant="outline" className="w-full cursor-pointer justify-between border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground rounded-xl transition-all">
                Read Full Article <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
 
function RelatedPostsWrapper({ currentPostId }: { currentPostId: string }) {
  
  const queryParams = {
    post_type: "post",
    posts_per_page: 3,
    post__not_in: [currentPostId],
    orderby: "date",
    order: "DESC",
  };
  const wp_query = new WP_Query(queryParams);
 
  return (
    <div className="mt-24 border-t border-border pt-16">
      <div className="mb-10 flex items-center justify-between">
        <h3 className="font-serif text-3xl font-bold tracking-tight text-foreground">Recommended for You</h3>
        <Link to="/KisanNewsPage">
          <Button variant="ghost" className="hidden sm:flex text-primary hover:text-primary hover:bg-primary/5 rounded-full">View All Kisan News</Button>
        </Link>
      </div>
      <PostsProvider wp_query={wp_query}>
        <RelatedPostsConsumer />
      </PostsProvider>
    </div>
  );
}
 
 
 
function SinglePostConsumer() {
  const { posts, loading, error } = usePosts();
 
  if (loading) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="mb-8 h-12 w-3/4 animate-pulse rounded-lg bg-muted/30" />
        <div className="mb-12 h-96 w-full animate-pulse rounded-2xl bg-muted/30" />
        <div className="space-y-4">
          <div className="h-4 w-full animate-pulse rounded bg-muted/30" />
          <div className="h-4 w-full animate-pulse rounded bg-muted/30" />
          <div className="h-4 w-2/3 animate-pulse rounded bg-muted/30" />
        </div>
      </div>
    );
  }
 
  if (error) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-destructive">Error Loading Article</h2>
        <p className="text-muted-foreground mt-2">Unable to retrieve the requested content at this time.</p>
        <Link to="/DigitalKisanPortalPage">
          <Button className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">Return to Portal Home</Button>
        </Link>
      </div>
    );
  }
 
  if (!posts || posts.length === 0) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-foreground">Article Not Found</h2>
        <p className="text-muted-foreground mt-2">The article you are looking for may have been moved or removed.</p>
        <Link to="/DigitalKisanPortalPage">
          <Button className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">Return to Portal Home</Button>
        </Link>
      </div>
    );
  }
 
  const post = posts[0];
  const authorName = post.author?.name || "AgriKisan Expert Team";
  const authorAvatar = post.author?.avatar?.["96"] || "";
  const publishDate = post.date ? new Date(post.date).toLocaleDateString("en-IN", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : "";
 
  return (
    <article className="container mx-auto max-w-5xl px-4 py-12 md:py-24">
      {}
      <header className="mx-auto mb-12 max-w-4xl text-center">
        <div className="mb-8 flex flex-wrap items-center justify-center gap-4 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
          {post.categories && post.categories.length > 0 && (
            <span className="rounded-full bg-primary/10 px-4 py-1 text-primary">
              {post.categories[0].name}
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-primary" />
            {publishDate}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-primary" />
            4 min read
          </span>
        </div>
        
        <h1 className="font-serif text-4xl font-bold leading-[1.15] text-foreground md:text-5xl lg:text-7xl tracking-tight">
          {post.title}
        </h1>
 
        {}
        <div className="mt-10 flex items-center justify-center gap-4">
          <Avatar className="h-14 w-14 border-2 border-primary/20 shadow-md">
            <AvatarImage src={authorAvatar} alt={authorName} />
            <AvatarFallback className="bg-muted"><User className="h-7 w-7 text-primary" /></AvatarFallback>
          </Avatar>
          <div className="text-left">
            <p className="text-base font-bold text-foreground leading-none">By {authorName}</p>
            <p className="text-xs font-medium text-primary mt-1 uppercase tracking-wider">Agri-Advisor Specialist</p>
          </div>
        </div>
      </header>
 
      {}
      {post.featuredImage && (
        <div className="mb-20 overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-border/50">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="h-auto w-full object-cover"
          />
        </div>
      )}
 
      {}
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-16 lg:grid-cols-[1fr_280px]">
        <div className="prose prose-lg prose-stone dark:prose-invert max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground prose-a:text-primary">
          {}
          <div dangerouslySetInnerHTML={{ __html: post.content || "" }} />
          
          {}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-16 flex flex-wrap items-center gap-3 border-t border-border pt-10">
              <Tag className="h-4 w-4 text-primary" />
              <span className="mr-2 text-sm font-bold uppercase tracking-widest text-muted-foreground">Topics:</span>
              {post.tags.map((tag, i) => (
                <Link key={tag.id} to={tag.link || "#"}>
                  <span className="rounded-full bg-muted px-4 py-1.5 text-xs font-bold text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground" data-index={i}>
                    #{tag.name}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
 
        {}
        <aside className="space-y-8">
          <div className="sticky top-24 rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-8 shadow-sm ring-1 ring-border/50">
            <h3 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-primary">About the Advisor</h3>
            <div className="flex flex-col items-center text-center">
              <Avatar className="mb-5 h-24 w-24 ring-4 ring-primary/10">
                <AvatarImage src={authorAvatar} alt={authorName} />
                <AvatarFallback className="bg-muted"><User className="h-12 w-12 text-primary" /></AvatarFallback>
              </Avatar>
              <h4 className="text-xl font-bold text-foreground tracking-tight">{authorName}</h4>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Expert in sustainable farming practices, soil rejuvenation, and digital crop management.</p>
              <Separator className="my-6 bg-border/60" />
              <div className="flex w-full justify-center gap-4">
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full bg-muted/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
              <Link to="#" className="mt-6 w-full">
                <Button variant="outline" size="sm" className="w-full rounded-xl border-primary/20 text-primary font-bold hover:bg-primary/5">Expert Profile</Button>
              </Link>
            </div>
          </div>
        </aside>
      </div>
 
      {}
      <RelatedPostsWrapper currentPostId={post.id} />
    </article>
  );
}
 
export default function SinglePostTemplateSection() {
  
  
  const currentWpQueryParams = (typeof window !== 'undefined' && (window as any).wvcClient) 
    ? (window as any).wvcClient.getCurrentWPQueryParams() 
    : { post_type: "post", p: 1 }; 
 
  const wp_query = new WP_Query(currentWpQueryParams);
 
  return (
    <section id="single-post-template-section" className="bg-background min-h-screen w-full text-foreground selection:bg-primary/20 selection:text-primary">
      <PostsProvider wp_query={wp_query}>
        <SinglePostConsumer />
      </PostsProvider>
    </section>
  );
}