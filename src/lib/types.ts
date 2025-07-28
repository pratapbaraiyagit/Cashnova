export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  imageHint: string;
  category: string;
  author: string;
  date: string;
  readingTime: number;
  content: string;
}

export interface FaqItem {
    id: string;
    question: string;
    answer: string;
}
