import { db } from '@/lib/firebase';
import { collection, getDocs, query, where, orderBy, limit, getDoc, doc } from 'firebase/firestore';
import type { Post } from '@/lib/types';

const postsCollection = collection(db, 'posts');

// Helper to convert a snapshot to a Post array
const snapshotToPosts = (snapshot: any): Post[] => {
  return snapshot.docs.map((doc: any) => ({ id: doc.id, ...doc.data() } as Post));
};

export const getAllPosts = async (): Promise<Post[]> => {
  const q = query(postsCollection, orderBy('date', 'desc'));
  const snapshot = await getDocs(q);
  return snapshotToPosts(snapshot);
};

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  const q = query(postsCollection, where('slug', '==', slug), limit(1));
  const snapshot = await getDocs(q);
  if (snapshot.empty) {
    return null;
  }
  const postDoc = snapshot.docs[0];
  return { id: postDoc.id, ...postDoc.data() } as Post;
};

export const getPostsByCategory = async (categorySlug: string): Promise<Post[]> => {
    const q = query(postsCollection, where('category', '==', categorySlug), orderBy('date', 'desc'));
    const snapshot = await getDocs(q);
    return snapshotToPosts(snapshot);
};

export const getFeaturedPosts = async (): Promise<Post[]> => {
    const q = query(postsCollection, where('featured', '==', true), limit(3));
    const snapshot = await getDocs(q);
    if (!snapshot.empty) {
        return snapshotToPosts(snapshot);
    }
    // Fallback if no posts are marked as featured
    const fallbackQuery = query(postsCollection, orderBy('date', 'desc'), limit(3));
    const fallbackSnapshot = await getDocs(fallbackQuery);
    return snapshotToPosts(fallbackSnapshot);
}

export const getLatestPosts = async (): Promise<Post[]> => {
    const q = query(postsCollection, orderBy('date', 'desc'), limit(6));
    const snapshot = await getDocs(q);
    return snapshotToPosts(snapshot);
}
