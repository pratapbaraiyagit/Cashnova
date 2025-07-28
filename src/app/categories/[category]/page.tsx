import { notFound } from 'next/navigation';
import { allPosts, categories } from '@/lib/data';
import BlogPostCard from '@/components/blog-post-card';
import AdPlaceholder from '@/components/ad-placeholder';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

type CategoryPageProps = {
  params: {
    category: string;
  };
};

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = params;
  const category = categories.find((c) => c.slug === categorySlug);

  if (!category) {
    notFound();
  }

  const posts = allPosts.filter((post) => post.category === categorySlug);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <category.icon className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">{category.name}</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          {category.description}
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
        {posts.map((post, index) => (
          <>
            <BlogPostCard key={post.id} post={post} orientation="horizontal" />
            {index === 3 && <div className="lg:col-span-2"><AdPlaceholder /></div>}
          </>
        ))}
      </div>
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
