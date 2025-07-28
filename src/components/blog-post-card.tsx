import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

interface BlogPostCardProps {
  post: Post;
  orientation?: 'vertical' | 'horizontal';
}

export default function BlogPostCard({ post, orientation = 'vertical' }: BlogPostCardProps) {
  const { title, excerpt, imageUrl, imageHint, category, slug, date, readingTime } = post;

  const cardContent = (
    <>
      <div className="relative w-full aspect-video overflow-hidden rounded-t-lg">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          data-ai-hint={imageHint}
        />
      </div>
      <CardHeader>
        <Badge variant="secondary" className="w-fit mb-2">{category.replace('-', ' ')}</Badge>
        <CardTitle className="text-xl leading-snug group-hover:text-primary transition-colors">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">{excerpt}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center text-xs text-muted-foreground">
        <div className="flex gap-4">
            <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{readingTime} min read</span>
            </div>
        </div>
        <div className="flex items-center gap-1 text-primary font-semibold">
          Read More <ArrowRight className="h-3 w-3" />
        </div>
      </CardFooter>
    </>
  );
  
  const horizontalLayout = (
    <Card className="group flex flex-col md:flex-row overflow-hidden transition-shadow hover:shadow-lg">
      <div className="md:w-1/3 relative aspect-video md:aspect-auto overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          data-ai-hint={imageHint}
        />
      </div>
      <div className="md:w-2/3 flex flex-col">
        <CardHeader>
          <Badge variant="secondary" className="w-fit mb-2">{category.replace('-', ' ')}</Badge>
          <CardTitle className="text-xl leading-snug group-hover:text-primary transition-colors">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">{excerpt}</p>
        </CardContent>
        <CardFooter className="mt-auto flex justify-between items-center text-xs text-muted-foreground">
        <div className="flex gap-4">
            <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{readingTime} min read</span>
            </div>
        </div>
        <div className="flex items-center gap-1 text-primary font-semibold">
          Read More <ArrowRight className="h-3 w-3" />
        </div>
        </CardFooter>
      </div>
    </Card>
  )

  return (
    <Link href={`/blog/${slug}`} className="group">
      {orientation === 'vertical' ? 
        <Card className="h-full flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
          {cardContent}
        </Card> : 
        horizontalLayout
      }
    </Link>
  );
}
