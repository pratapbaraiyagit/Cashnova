export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Post {
  id: string; // Firestore document ID
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  imageHint: string;
  category: string; // Category slug
  author: string;
  date: string; // Should be in a format like 'YYYY-MM-DD'
  readingTime: number;
  content: string; // HTML content
}

export interface FaqItem {
    id: string;
    question: string;
    answer: string;
}
