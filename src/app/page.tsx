import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { featuredPosts, latestPosts } from "@/lib/data";
import BlogPostCard from "@/components/blog-post-card";
import AdPlaceholder from "@/components/ad-placeholder";
import NewsletterForm from "@/components/newsletter-form";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
      <section className="bg-card py-20 sm:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl xl:text-6xl">
            Smart Money Tips for Modern Life
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
            Your daily dose of practical financial wisdom. From saving hacks to investment strategies, we've got you covered.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="transition-transform duration-300 hover:scale-105">
              <Link href="/blog">
                Read The Blog <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="transition-transform duration-300 hover:scale-105">
              <Link href="/newsletter">
                Get The Newsletter <Newspaper className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Featured Insights</h2>
        <p className="text-muted-foreground text-center mt-2 mb-8">Handpicked articles to get you started on your financial journey.</p>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} orientation="vertical" />
          ))}
        </div>
      </section>
      
      <section className="container mx-auto px-4">
        <AdPlaceholder />
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Latest Articles</h2>
        <p className="text-muted-foreground text-center mt-2 mb-8">Stay up-to-date with our most recent posts.</p>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {latestPosts.map((post) => (
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
