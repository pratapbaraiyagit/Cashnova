"use client";

import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug, getPostsByCategory } from '@/services/blogService';
import { getCategoryDetails } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, UserCircle, ArrowRight } from 'lucide-react';
import AdPlaceholder from '@/components/ad-placeholder';
import BlogPostCard from '@/components/blog-post-card';
import { Post } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  const [post, setPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      const currentPost = await getPostBySlug(slug);
      
      if (!currentPost) {
        setIsLoading(false);
        // We can't use notFound() in a client component directly in this way
        // A redirect or a "not found" state would be better.
        // For now, we'll just show a message.
        return;
      }
      
      setPost(currentPost);

      const allRelated = await getPostsByCategory(currentPost.category);
      const filteredRelated = allRelated.filter(p => p.id !== currentPost.id).slice(0, 2);
      setRelatedPosts(filteredRelated);
      
      setIsLoading(false);
    };

    fetchPost();
  }, [slug]);

  if (isLoading) {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <Skeleton className="h-8 w-1/4 mx-auto mb-4" />
            <Skeleton className="h-12 w-3/4 mx-auto mb-6" />
            <Skeleton className="h-5 w-1/2 mx-auto mb-8" />
            <Skeleton className="w-full aspect-video rounded-lg mb-8" />
            <div className="space-y-4">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-5/6" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-3/4" />
            </div>
        </div>
    );
  }

  if (!post) {
    // This can be improved with a proper 404 component
    return (
        <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-2xl font-bold">Post not found</h1>
            <p className="mt-4 text-muted-foreground">The post you are looking for does not exist.</p>
            <Button asChild className="mt-6">
                <Link href="/">Go back to Home</Link>
            </Button>
        </div>
    );
  }
  
  const postCategory = getCategoryDetails(post.category);

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <header className="mb-8 text-center">
         {postCategory && (
            <Link href={`/categories/${post.category}`}>
                <Badge variant="default" className="mb-4 transition-transform hover:scale-105">{postCategory.name}</Badge>
            </Link>
         )}
        <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">{post.title}</h1>
        <div className="mt-4 flex justify-center items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <UserCircle className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </header>

      <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8 shadow-lg">
        <Image src={post.imageUrl} alt={post.title} fill className="object-cover" data-ai-hint={post.imageHint} />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none font-body"
           dangerouslySetInnerHTML={{ __html: post.content }} />
           
      <div className="my-12">
        <AdPlaceholder />
      </div>

      {relatedPosts.length > 0 && (
        <section className="mt-16 border-t pt-12">
          <h2 className="text-2xl font-bold text-center mb-8">Related Articles</h2>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
            {relatedPosts.map(relatedPost => (
              <BlogPostCard key={relatedPost.id} post={relatedPost} orientation="vertical" />
            ))}
          </div>
        </section>
      )}

    </article>
  );
}
