"use client";

import { useState, useEffect } from 'react';
import type { Post } from '@/lib/types';
import { getAllPosts } from '@/services/blogService';
import { getAllCategories } from '@/lib/data';
import BlogPostCard from '@/components/blog-post-card';
import AdPlaceholder from '@/components/ad-placeholder';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from '@/components/ui/skeleton';

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = getAllCategories();

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const posts = await getAllPosts();
      setAllPosts(posts);
      setIsLoading(false);
    };
    fetchPosts();
  }, []);

  const filteredPosts = selectedCategory === 'all'
    ? allPosts
    : allPosts.filter(post => post.category === selectedCategory);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">The Cashnova Blog</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          All our articles in one place. Use the filter to find exactly what you're looking for.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
        <p className="font-semibold">Filter by category:</p>
        <div className="hidden sm:flex flex-wrap justify-center gap-2">
          <Button variant={selectedCategory === 'all' ? 'default' : 'outline'} onClick={() => handleCategoryChange('all')}>All</Button>
          {categories.map(category => (
            <Button key={category.slug} variant={selectedCategory === category.slug ? 'default' : 'outline'} onClick={() => handleCategoryChange(category.slug)}>
              {category.name}
            </Button>
          ))}
        </div>
         <div className="sm:hidden w-full max-w-xs">
           <Select onValueChange={handleCategoryChange} defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              {categories.map(category => (
                <SelectItem key={category.slug} value={category.slug}>{category.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
       {isLoading ? (
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
            {Array.from({ length: POSTS_PER_PAGE }).map((_, index) => (
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
            {paginatedPosts.map((post, index) => (
              <>
                <BlogPostCard key={post.id} post={post} orientation="horizontal" />
                {index === 3 && <div className="lg:col-span-2"><AdPlaceholder /></div>}
              </>
            ))}
          </div>
        )}


       {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-12">
          <Button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} variant="outline">
            Previous
          </Button>
          <span className="text-sm text-muted-foreground">
            Page {currentPage} of {totalPages}
          </span>
          <Button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} variant="outline">
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
