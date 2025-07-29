"use client";

import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import { getPostsByCategory } from '@/services/blogService';
import { getAllCategories, getCategoryDetails } from '@/lib/data';
import BlogPostCard from '@/components/blog-post-card';
import AdPlaceholder from '@/components/ad-placeholder';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import type { Post } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';

type CategoryPageProps = {
  params: {
    category: string;
  };
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = params;
  const category = getCategoryDetails(categorySlug);
  
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!category) return;
    const fetchPosts = async () => {
      setIsLoading(true);
      const fetchedPosts = await getPostsByCategory(categorySlug);
      setPosts(fetchedPosts);
      setIsLoading(false);
    };
    fetchPosts();
  }, [categorySlug, category]);


  if (!category) {
    notFound();
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <category.icon className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">{category.name}</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          {category.description}
        </p>
      </div>

      {isLoading ? (
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-4">
                    <Skeleton className="w-full md:w-2/5 aspect-video md:aspect-square" />
                    <div className="w-full md:w-3/5 space-y-3">
                        <Skeleton className="h-5 w-1/4" />
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-16 w-full" />
                        <Skeleton className="h-5 w-1/2" />
                    </div>
                </div>
            ))}
        </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
            {posts.map((post, index) => (
              <>
                <BlogPostCard key={post.id} post={post} orientation="horizontal" />
                {index === 3 && <div className="lg:col-span-2"><AdPlaceholder /></div>}
              </>
            ))}
          </div>
        )}

       <div className="text-center mt-12">
          <Button asChild variant="outline">
            <Link href="/categories">
              <ArrowLeft className="mr-2 h-4 w-4" />
              All Categories
            </Link>
          </Button>
        </div>
    </div>
  );
}
