import type { Post, Category, Resource, FaqItem } from './types';
import { Lightbulb, PiggyBank, TrendingUp, Handshake, BookOpen, AppWindow, Construction, GraduationCap } from 'lucide-react';

export const categories: Category[] = [
  {
    slug: 'saving-tips',
    name: 'Saving Tips',
    description: 'Practical advice to help you save more money every month.',
    icon: PiggyBank,
  },
  {
    slug: 'budgeting',
    name: 'Budgeting',
    description: 'Learn how to manage your money effectively with smart budgeting techniques.',
    icon: Lightbulb,
  },
  {
    slug: 'side-hustles',
    name: 'Side Hustles',
    description: 'Ideas and guides for earning extra income on the side.',
    icon: Handshake,
  },
  {
    slug: 'investing',
    name: 'Investing',
    description: 'Beginner-friendly guides and strategies for growing your wealth.',
    icon: TrendingUp,
  },
];

export const allPosts: Post[] = [
  {
    id: 1,
    slug: '10-simple-ways-to-save-money-daily',
    title: '10 Simple Ways to Save Money Daily',
    excerpt: 'Discover easy-to-implement habits that can significantly boost your savings without drastic lifestyle changes.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'saving money',
    category: 'saving-tips',
    author: 'Jane Doe',
    date: '2024-07-20',
    readingTime: 5,
    content: '<p>Saving money doesn\'t have to be a monumental task. By making small, consistent changes to your daily habits, you can accumulate significant savings over time. Here are ten simple ways to get started:</p><ol><li><strong>Brew Your Own Coffee:</strong> That daily latte adds up. Brewing at home can save you hundreds a year.</li><li><strong>Pack Your Lunch:</strong> Eating out is a major expense. Packing a lunch is healthier for you and your wallet.</li><li><strong>Use a Reusable Water Bottle:</strong> Avoid buying bottled water.</li><li><strong>Unplug Electronics:</strong> Phantom energy from plugged-in devices can increase your electricity bill.</li><li><strong>Automate Savings:</strong> Set up automatic transfers to your savings account each payday.</li><li><strong>Use a Budgeting App:</strong> Track your spending to identify areas where you can cut back.</li><li><strong>Cancel Unused Subscriptions:</strong> Review your monthly subscriptions and cancel any you don\'t use.</li><li><strong>Shop with a List:</strong> Avoid impulse buys at the grocery store by sticking to a list.</li><li><strong>Use Cashback Apps:</strong> Earn money back on purchases you were already going to make.</li><li><strong>DIY Home Maintenance:</strong> Learn basic home repair skills to save on professional services.</li></ol><p>Implementing even a few of these tips can make a noticeable difference in your financial health. Start small, stay consistent, and watch your savings grow.</p>'
  },
  {
    id: 2,
    slug: 'the-ultimate-guide-to-creating-your-first-budget',
    title: 'The Ultimate Guide to Creating Your First Budget',
    excerpt: 'A step-by-step guide to building a budget that works for you, helping you take control of your finances.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'budgeting finance',
    category: 'budgeting',
    author: 'John Smith',
    date: '2024-07-19',
    readingTime: 8,
    content: '<p>Creating a budget is the cornerstone of financial wellness. It allows you to see where your money is going and make intentional decisions about your spending. Here’s a step-by-step guide to creating your first budget:</p><h3>Step 1: Track Your Income and Expenses</h3><p>For one month, meticulously record every dollar that comes in and every dollar that goes out. Use a notebook, spreadsheet, or a budgeting app.</p><h3>Step 2: Categorize Your Spending</h3><p>Group your expenses into categories like Housing, Transportation, Food, Entertainment, and Debt Payments. This helps you identify your biggest spending areas.</p><h3>Step 3: Choose a Budgeting Method</h3><p>There are several popular methods. The 50/30/20 rule (50% for needs, 30% for wants, 20% for savings) is great for beginners. The zero-based budget, where every dollar has a job, is for those who want more control.</p><h3>Step 4: Set Financial Goals</h3><p>What are you saving for? A down payment on a house? Paying off debt? A vacation? Having clear goals makes sticking to your budget easier.</p><h3>Step 5: Create Your Budget</h3><p>Allocate your income to your different spending categories based on your chosen method and goals. Be realistic and flexible.</p><h3>Step 6: Review and Adjust</h3><p>A budget isn’t set in stone. Review it monthly and adjust as your income or expenses change. Life happens, and your budget should adapt with it.</p>'
  },
  {
    id: 3,
    slug: '5-profitable-side-hustles-you-can-start-today',
    title: '5 Profitable Side Hustles You Can Start Today',
    excerpt: 'Looking to earn extra cash? Here are five side hustles you can start with minimal investment.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'side hustle laptop',
    category: 'side-hustles',
    author: 'Emily White',
    date: '2024-07-18',
    readingTime: 6,
    content: '<p>A side hustle can provide an extra income stream to help you reach your financial goals faster. Here are five ideas you can start today:</p><ol><li><strong>Freelance Writing or Design:</strong> If you have a knack for words or visuals, platforms like Upwork and Fiverr can connect you with clients.</li><li><strong>Food Delivery or Ridesharing:</strong> Companies like Uber, Lyft, and DoorDash offer flexible schedules and instant pay.</li><li><strong>Online Tutoring:</strong> Share your expertise in a subject you love. Websites like VIPKid or Chegg Tutors are great places to start.</li><li><strong>Sell Crafts on Etsy:</strong> If you\'re crafty, turn your hobby into a business.</li><li><strong>Become a Virtual Assistant:</strong> Offer administrative, technical, or creative assistance to clients remotely.</li></ol>'
  },
  {
    id: 4,
    slug: 'investing-101-a-beginners-guide-to-the-stock-market',
    title: 'Investing 101: A Beginner\'s Guide to the Stock Market',
    excerpt: 'Demystifying the stock market for beginners. Learn the basics of investing to grow your wealth over the long term.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'stock market chart',
    category: 'investing',
    author: 'Michael Brown',
    date: '2024-07-17',
    readingTime: 10,
    content: '<p>The stock market can seem intimidating, but it\'s one of the most powerful tools for building long-term wealth. Here\'s what you need to know to get started.</p><h3>What is a Stock?</h3><p>A stock represents a share of ownership in a public company. When you buy a stock, you become a part-owner of that business.</p><h3>Why Invest?</h3><p>Investing allows your money to grow through compounding. It helps you outpace inflation and build a nest egg for retirement or other long-term goals.</p><h3>How to Start:</h3><ul><li><strong>Open a Brokerage Account:</strong> This is an account you use to buy and sell stocks.</li><li><strong>Start with Index Funds or ETFs:</strong> These are baskets of stocks that offer instant diversification and are less risky than individual stocks.</li><li><strong>Dollar-Cost Averaging:</strong> Invest a fixed amount of money at regular intervals, regardless of market fluctuations.</li><li><strong>Think Long-Term:</strong> The stock market has ups and downs. A long-term perspective helps you ride out volatility.</li></ul>'
  },
  {
    id: 5,
    slug: 'how-to-build-an-emergency-fund-and-why-you-need-one',
    title: 'How to Build an Emergency Fund (And Why You Need One)',
    excerpt: 'An emergency fund is your financial safety net. Learn how to build one to protect yourself from unexpected life events.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'emergency fund piggy-bank',
    category: 'saving-tips',
    author: 'Jane Doe',
    date: '2024-07-16',
    readingTime: 7,
    content: '<p>An emergency fund is crucial for financial stability. It\'s money set aside to cover unexpected expenses, like a job loss, medical emergency, or major car repair. Aim to save 3-6 months of living expenses in a high-yield savings account—easily accessible but separate from your checking account.</p>'
  },
  {
    id: 6,
    slug: 'zero-based-budgeting-explained',
    title: 'Zero-Based Budgeting Explained',
    excerpt: 'Take full control of your money by giving every dollar a job. Is this advanced budgeting method right for you?',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'calculator budget',
    category: 'budgeting',
    author: 'John Smith',
    date: '2024-07-15',
    readingTime: 6,
    content: '<p>Zero-based budgeting is a method where your income minus your expenses equals zero. Every dollar is allocated to a specific category—spending, saving, investing, or debt repayment—leaving no money unaccounted for. It\'s a hands-on approach that forces you to be intentional with your finances.</p>'
  }
];

export const featuredPosts: Post[] = allPosts.slice(0, 3);
export const latestPosts: Post[] = allPosts.slice(0, 6);

export const resources: Resource[] = [
    {
        id: 1,
        title: "Mint",
        description: "A popular, free budgeting app that helps you track all your finances in one place.",
        link: "#",
        type: "App",
        icon: AppWindow,
    },
    {
        id: 2,
        title: "Acorns",
        description: "An investment app that automatically invests your spare change from purchases.",
        link: "#",
        type: "App",
        icon: AppWindow,
    },
    {
        id: 3,
        title: "The Simple Path to Wealth by JL Collins",
        description: "An accessible and powerful book on simple, effective long-term investing.",
        link: "#",
        type: "Book",
        icon: BookOpen,
    },
    {
        id: 4,
        title: "I Will Teach You to Be Rich by Ramit Sethi",
        description: "A 6-week program for automating your finances and living a rich life.",
        link: "#",
        type: "Book",
        icon: BookOpen,
    },
    {
        id: 5,
        title: "Fiverr",
        description: "A great platform to find freelance work or hire talent for your side hustle.",
        link: "#",
        type: "Tool",
        icon: Construction,
    },
    {
        id: 6,
        title: "Coursera: Financial Markets",
        description: "A comprehensive course from Yale University on the fundamentals of financial markets.",
        link: "#",
        type: "Course",
        icon: GraduationCap,
    },
];


export const faqs: FaqItem[] = [
    {
        id: "faq-1",
        question: "Is the financial advice on this blog suitable for everyone?",
        answer: "Our content is for informational and educational purposes only. It is not intended to be a substitute for professional financial advice. We recommend consulting with a qualified financial advisor to discuss your specific situation."
    },
    {
        id: "faq-2",
        question: "How does CashFlow Insights make money?",
        answer: "We generate revenue through advertisements (Google AdSense) and affiliate links. When you click on an affiliate link and make a purchase, we may earn a small commission at no extra cost to you. This helps us keep the content free."
    },
    {
        id: "faq-3",
        question: "How often do you publish new content?",
        answer: "We aim to publish new articles and tips several times a week. Subscribe to our newsletter to get the latest content delivered directly to your inbox."
    },
    {
        id: "faq-4",
        question: "Can I write for CashFlow Insights?",
        answer: "We are not currently accepting guest posts, but we appreciate your interest! You can follow our social media channels for any future opportunities."
    },
    {
        id: "faq-5",
        question: "Where should I start if I'm new to personal finance?",
        answer: "A great place to start is our 'Budgeting' category. Creating a budget is a fundamental step in taking control of your finances. From there, explore our 'Saving Tips' to see how you can make an immediate impact."
    }
];
