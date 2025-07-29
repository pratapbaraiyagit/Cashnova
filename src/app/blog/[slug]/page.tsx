import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts, getPostBySlug, getPostsByCategory } from '@/services/blogService';
import { getCategoryDetails } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, UserCircle, ArrowRight } from 'lucide-react';
import AdPlaceholder from '@/components/ad-placeholder';
import BlogPostCard from '@/components/blog-post-card';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

// This function generates static pages at build time
export async function generateStaticParams() {
  const allPosts = await getAllPosts();
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }
  
  const postCategory = getCategoryDetails(post.category);
  
  // Fetch related posts (from the same category, excluding the current one)
  const allRelatedPosts = await getPostsByCategory(post.category);
  const relatedPosts = allRelatedPosts.filter(p => p.id !== post.id).slice(0, 2);

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
