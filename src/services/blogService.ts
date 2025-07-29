
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import type { Post } from '@/lib/types';

// Initialize Firebase Admin SDK
if (getApps().length === 0) {
  // When running in a Google Cloud environment, the SDK automatically
  // finds the service account credentials.
  initializeApp();
}

const db = getFirestore();

export const getAllPosts = async (): Promise<Post[]> => {
  const postsCol = db.collection('posts');
  const q = postsCol.orderBy('date', 'desc');
  const postsSnapshot = await q.get();
  const postList = postsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Post));
  return postList;
};

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  const postsCol = db.collection('posts');
  const q = postsCol.where('slug', '==', slug).limit(1);
  const postSnapshot = await q.get();
  if (postSnapshot.empty) {
    return null;
  }
  const doc = postSnapshot.docs[0];
  return { id: doc.id, ...doc.data() } as Post;
};

export const getPostsByCategory = async (categorySlug: string): Promise<Post[]> => {
    const postsCol = db.collection('posts');
    const q = postsCol.where('category', '==', categorySlug).orderBy('date', 'desc');
    const postsSnapshot = await q.get();
    const postList = postsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Post));
    return postList;
};

export const getFeaturedPosts = async (): Promise<Post[]> => {
    const postsCol = db.collection('posts');
    // Assuming you have a boolean field 'featured' in your documents
    const q = postsCol.where('featured', '==', true).limit(3);
    const postsSnapshot = await q.get();
    if (!postsSnapshot.empty) {
         return postsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Post));
    }
    // Fallback if no posts are marked as featured
    const fallbackQuery = postsCol.orderBy('date', 'desc').limit(3);
    const fallbackSnapshot = await fallbackQuery.get();
    return fallbackSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Post));
}

export const getLatestPosts = async (): Promise<Post[]> => {
    const postsCol = db.collection('posts');
    const q = postsCol.orderBy('date', 'desc').limit(6);
    const postsSnapshot = await q.get();
    return postsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Post));
}

// In Firestore, you don't query for categories directly if they are just fields on posts.
// We get the full list of category definitions from `src/lib/data.ts`
// You would create a `categories` collection if categories had their own data.
