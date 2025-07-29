import type { Post } from '@/lib/types';
import { posts } from '@/lib/posts';

export const getAllPosts = async (): Promise<Post[]> => {
  // Sort posts by date in descending order
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return sortedPosts;
};

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  const post = posts.find(p => p.slug === slug);
  return post || null;
};

export const getPostsByCategory = async (categorySlug: string): Promise<Post[]> => {
  const filteredPosts = posts.filter(p => p.category === categorySlug);
  const sortedPosts = filteredPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return sortedPosts;
};

export const getFeaturedPosts = async (): Promise<Post[]> => {
    const featured = posts.filter(p => p.featured === true).slice(0, 3);
    if (featured.length > 0) {
        return featured;
    }
    // Fallback if no posts are marked as featured
    const latest = await getLatestPosts();
    return latest.slice(0,3);
}

export const getLatestPosts = async (): Promise<Post[]> => {
    const sortedPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return sortedPosts.slice(0, 6);
}
