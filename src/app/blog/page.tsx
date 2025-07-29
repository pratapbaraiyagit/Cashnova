import type { Post } from '@/lib/types';
import { getAllPosts } from '@/services/blogService';
import { getAllCategories } from '@/lib/data';
import BlogPostCard from '@/components/blog-post-card';
import AdPlaceholder from '@/components/ad-placeholder';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

export default async function BlogPage({ searchParams }: { searchParams?: { [key: string]: string | undefined } }) {
  const allPosts = await getAllPosts();
  const categories = getAllCategories();
  const selectedCategory = searchParams?.category;

  const filteredPosts = selectedCategory
    ? allPosts.filter(post => post.category === selectedCategory)
    : allPosts;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">The Cashnova Blog</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          All our articles in one place. Use the filter to find exactly what you're looking for.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-2 mb-8">
        <Button asChild variant={!selectedCategory ? 'default' : 'outline'}>
          <Link href="/blog">All</Link>
        </Button>
        {categories.map(category => (
          <Button key={category.slug} asChild variant={selectedCategory === category.slug ? 'default' : 'outline'}>
            <Link href={`/blog?category=${category.slug}`}>{category.name}</Link>
          </Button>
        ))}
      </div>
      
      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
        {filteredPosts.map((post, index) => (
          <React.Fragment key={post.id}>
            <BlogPostCard post={post} orientation="horizontal" />
            {index === 3 && <div className="lg:col-span-2"><AdPlaceholder /></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
