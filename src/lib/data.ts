import type { FaqItem, Category } from './types';
import { Lightbulb, PiggyBank, TrendingUp, Handshake, Scale, CircleGauge } from 'lucide-react';
import { FC } from 'react';

// Category definitions are kept here to map slugs from Firestore to icons.
export const categoryDetails: { [key: string]: { name: string; description: string; icon: FC<{className?: string}>; } } = {
  'saving-tips': {
    name: 'Saving Tips',
    description: 'Practical advice to help you save more money every month.',
    icon: PiggyBank,
  },
  'budgeting': {
    name: 'Budgeting',
    description: 'Learn how to manage your money effectively with smart budgeting techniques.',
    icon: Lightbulb,
  },
  'side-hustles': {
    name: 'Side Hustles',
    description: 'Ideas and guides for earning extra income on the side.',
    icon: Handshake,
  },
  'investing': {
    name: 'Investing',
    description: 'Beginner-friendly guides and strategies for growing your wealth.',
    icon: TrendingUp,
  },
  'capital-markets': {
    name: 'Capital Markets',
    description: 'Insights and analysis on stock markets, IPOs, and financial trends.',
    icon: TrendingUp,
  },
  'debt-management': {
    name: 'Debt Management',
    description: 'Strategies for paying off and managing debt effectively.',
    icon: Scale,
  },
  'credit-score': {
    name: 'Credit Score',
    description: 'Understand and improve your credit score to unlock better financial products.',
    icon: CircleGauge,
  },
};

export const getCategoryDetails = (slug: string): Category | undefined => {
  const details = categoryDetails[slug];
  if (!details) return undefined;
  return { slug, ...details };
}

export const getAllCategories = (): Category[] => {
  return Object.entries(categoryDetails).map(([slug, details]) => ({
    slug,
    ...details,
  }));
};


export const faqs: FaqItem[] = [
    {
        id: "faq-1",
        question: "Is the financial advice on this blog suitable for everyone?",
        answer: "Our content is for informational and educational purposes only. It is not intended to be a substitute for professional financial advice. We recommend consulting with a qualified financial advisor to discuss your specific situation."
    },
    {
        id: "faq-2",
        question: "How does Cashnova make money?",
        answer: "We generate revenue through advertisements (Google AdSense) and affiliate links. When you click on an affiliate link and make a purchase, we may earn a small commission at no extra cost to you. This helps us keep the content free."
    },
    {
        id: "faq-3",
        question: "How often do you publish new content?",
        answer: "We aim to publish new articles and tips several times a week. Subscribe to our newsletter to get the latest content delivered directly to your inbox."
    },
    {
        id: "faq-4",
        question: "Can I write for Cashnova?",
        answer: "We are not currently accepting guest posts, but we appreciate your interest! You can follow our social media channels for any future opportunities."
    },
    {
        id: "faq-5",
        question: "Where should I start if I'm new to personal finance?",
        answer: "A great place to start is our 'Budgeting' category. Creating a budget is a fundamental step in taking control of your finances. From there, explore our 'Saving Tips' to see how you can make an immediate impact."
    }
];
