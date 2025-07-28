import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const saveSubscription = async (email: string) => {
  if (!email) {
    throw new Error("Email is required");
  }

  const subscriptionRef = collection(db, "subscriptions");
  await addDoc(subscriptionRef, {
    email: email,
    subscribedAt: serverTimestamp(),
  });
};

interface ContactMessage {
    name: string;
    email: string;
    message: string;
}

export const saveContactMessage = async (data: ContactMessage) => {
    if (!data.email || !data.name || !data.message) {
        throw new Error("All fields are required");
    }

    const messagesRef = collection(db, "contactMessages");
    await addDoc(messagesRef, {
        ...data,
        sentAt: serverTimestamp(),
    });
};
