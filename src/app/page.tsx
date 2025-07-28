import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Newspaper, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { featuredPosts, latestPosts, categories } from "@/lib/data";
import BlogPostCard from "@/components/blog-post-card";
import AdPlaceholder from "@/components/ad-placeholder";
import NewsletterForm from "@/components/newsletter-form";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
      <section className="relative pt-20 pb-12 md:pt-32 md:pb-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
        <div className="container mx-auto px-4 relative">
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary animate-fade-in-up">
            <Zap className="mr-2 h-3 w-3" />
            Your Financial Future, Illuminated
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Navigate Your Finances with Cashnova
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            From practical saving tips to smart investment strategies, we provide the clarity you need to build a secure financial future.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button asChild size="lg" className="group transition-transform duration-300 hover:scale-105">
              <Link href="/blog">
                Explore The Blog <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="transition-transform duration-300 hover:scale-105">
              <Link href="/newsletter">
                Join The Newsletter <Newspaper className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Trending Insights</h2>
        <p className="text-muted-foreground text-center mt-2 mb-10">Handpicked articles making waves in the community.</p>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {featuredPosts.map((post) => (
              <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <BlogPostCard post={post} orientation="vertical" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Explore by Category</h2>
        <p className="text-muted-foreground text-center mt-2 mb-10">Find the topics that matter most to you.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map(category => (
            <Link key={category.slug} href={`/categories/${category.slug}`} className="group">
              <Card className="h-full text-center items-center flex flex-col justify-center p-6 transition-all duration-300 hover:bg-primary/10 hover:-translate-y-1">
                <category.icon className="h-10 w-10 text-primary mb-3 transition-transform group-hover:scale-110" />
                <h3 className="font-semibold text-lg">{category.name}</h3>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4">
        <AdPlaceholder />
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Daily Updates</h2>
        <p className="text-muted-foreground text-center mt-2 mb-10">Stay up-to-date with our most recent posts.</p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {latestPosts.slice(0,4).map((post) => (
            <BlogPostCard key={post.id} post={post} orientation="vertical" />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <Link href="/blog">
              View All Posts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="bg-card py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground mt-2 mb-8">Get exclusive tips and insights delivered straight to your inbox. No spam, ever.</p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
}
