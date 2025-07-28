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

  const cardClasses = "h-full flex flex-col bg-card overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-primary/10 group-hover:-translate-y-1";

  const cardContent = (
    <>
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          data-ai-hint={imageHint}
        />
      </div>
      <CardHeader>
        <Badge variant="secondary" className="w-fit mb-2 uppercase text-xs tracking-wider">{category.replace('-', ' ')}</Badge>
        <CardTitle className="text-xl leading-snug group-hover:text-primary transition-colors">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm">{excerpt}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center text-xs text-muted-foreground mt-auto">
        <div className="flex gap-4">
            <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                <span>{date}</span>
            </div>
            <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                <span>{readingTime} min read</span>
            </div>
        </div>
        <div className="flex items-center gap-1 text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
          Read More <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
        </div>
      </CardFooter>
    </>
  );
  
  const horizontalLayout = (
    <Card className={cn(cardClasses, "md:flex-row")}>
      <div className="md:w-2/5 relative aspect-video md:aspect-auto overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          data-ai-hint={imageHint}
        />
      </div>
      <div className="md:w-3/5 flex flex-col">
        <CardHeader>
           <Badge variant="secondary" className="w-fit mb-2 uppercase text-xs tracking-wider">{category.replace('-', ' ')}</Badge>
           <CardTitle className="text-xl leading-snug group-hover:text-primary transition-colors">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground text-sm">{excerpt}</p>
        </CardContent>
        <CardFooter className="mt-auto flex justify-between items-center text-xs text-muted-foreground">
        <div className="flex gap-4">
            <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                <span>{date}</span>
            </div>
            <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                <span>{readingTime} min read</span>
            </div>
        </div>
        <div className="flex items-center gap-1 text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
          Read More <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
        </div>
        </CardFooter>
      </div>
    </Card>
  )

  return (
    <Link href={`/blog/${slug}`} className="group block">
      {orientation === 'vertical' ? 
        <Card className={cardClasses}>
          {cardContent}
        </Card> : 
        horizontalLayout
      }
    </Link>
  );
}