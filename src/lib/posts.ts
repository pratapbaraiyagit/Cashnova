import type { Post } from './types';

export const posts: Post[] = [
  {
    id: '1',
    slug: 'the-50-30-20-budgeting-rule',
    title: 'The 50/30/20 Rule: A Simple Budget to Transform Your Finances',
    excerpt: 'Learn how to take control of your finances with the 50/30/20 budgeting rule. It\'s the first step towards financial freedom.',
    imageUrl: '/images/sample-post.png',
    imageHint: 'woman planning',
    category: 'budgeting',
    author: 'Maria Garcia',
    date: '2024-07-28',
    featured: true,
    readingTime: 4,
    content: `<h2>Why a Budget is Your Financial Superpower</h2><p>Many people hear the word 'budget' and think of restrictions and spreadsheets. But a budget is actually a plan that gives you freedom! It's about telling your money where to go, instead of wondering where it went. By creating a clear plan for your income and expenses, you can ensure you have enough for your needs, wants, and most importantly, your long-term goals.</p><h3>Step 1: Track Your Spending</h3><p>For one month, track every single dollar you spend. Use an app or a simple notebook. This isn't about judging yourself; it's about gathering data. You might be surprised where your money is actually going!</p><h3>Step 2: Use the 50/30/20 Rule</h3><p>A great starting point for budgeting is the 50/30/20 rule. Allocate 50% of your after-tax income to Needs (housing, utilities, groceries), 30% to Wants (dining out, hobbies, shopping), and 20% to Savings and Debt Repayment. It's a simple framework that you can adjust to your lifestyle.</p>`
  },
  {
    id: '2',
    slug: 'side-hustles-to-boost-your-income',
    title: '10 Side Hustles You Can Start Today to Boost Your Income',
    excerpt: 'Looking for ways to make extra money? Here are 10 profitable side hustles you can start with little to no investment.',
    imageUrl: 'https://placehold.co/800x600.png',
    imageHint: 'laptop desk',
    category: 'side-hustles',
    author: 'John Smith',
    date: '2024-07-25',
    featured: true,
    readingTime: 7,
    content: `<p>Side hustles are a great way to increase your income, pay off debt faster, or save for a big goal. The best part is that many of them can be done from the comfort of your own home and on your own schedule.</p>
    <h3>1. Freelance Writing</h3><p>If you have a way with words, freelance writing is a flexible and profitable option. Websites like Upwork and Fiverr are great places to find your first clients.</p>
    <h3>2. Online Tutoring</h3><p>Are you an expert in a particular subject? Share your knowledge with students online. Platforms like VIPKid or Chegg Tutors can connect you with learners.</p>
    <h3>3. Become a Virtual Assistant</h3><p>Many entrepreneurs and small businesses need help with administrative tasks. As a virtual assistant, you can offer services like email management, scheduling, and social media support.</p>`
  },
  {
    id: '3',
    slug: 'investing-101-a-beginners-guide',
    title: 'Investing 101: A Beginner\'s Guide to Growing Your Wealth',
    excerpt: 'Intimidated by the stock market? This guide breaks down the basics of investing to help you start building long-term wealth.',
    imageUrl: 'https://placehold.co/800x600.png',
    imageHint: 'stock chart',
    category: 'investing',
    author: 'Emily White',
    date: '2024-07-22',
    featured: true,
    readingTime: 8,
    content: `<p>Investing is the most powerful tool for building wealth over time, thanks to the magic of compound interest. While it might seem complex, the basic principles are straightforward.</p><h3>What is Investing?</h3><p>At its core, investing is about using your money to buy assets that have the potential to generate income or appreciate in value. These assets can include stocks, bonds, real estate, and more.</p><h3>Why Should You Invest?</h3><p>Investing helps your money grow and outpace inflation. Instead of letting your cash sit in a low-interest savings account, investing puts it to work for you.</p><h3>How to Get Started</h3><p>A great way for beginners to start is with low-cost index funds or ETFs. These funds hold a diversified portfolio of stocks, which spreads out your risk. Platforms like Vanguard, Fidelity, and Charles Schwab make it easy to open an account and start investing with a small amount of money.</p>`
  },
  {
    id: '4',
    slug: 'how-to-improve-your-credit-score',
    title: 'How to Improve Your Credit Score by 100 Points',
    excerpt: 'A good credit score is key to financial health. Follow these actionable steps to improve your score and unlock better financial opportunities.',
    imageUrl: 'https://placehold.co/800x600.png',
    imageHint: 'credit score report',
    category: 'credit-score',
    author: 'David Chen',
    date: '2024-07-20',
    featured: false,
    readingTime: 6,
    content: `A higher credit score can save you thousands of dollars in interest over your lifetime. It gives you access to better rates on mortgages, car loans, and credit cards. Here's how to boost your score.</p>
    <h3>1. Pay Your Bills on Time</h3><p>Payment history is the single most important factor in your credit score. Even one late payment can have a significant negative impact. Set up automatic payments to ensure you never miss a due date.</p>
    <h3>2. Reduce Your Credit Utilization</h3><p>Your credit utilization ratio is the amount of credit you're using compared to your total credit limit. Aim to keep it below 30%. You can do this by paying down your balances or requesting a credit limit increase.</p>
    <h3>3. Check Your Credit Report for Errors</h3><p>Mistakes on your credit report are more common than you think. You're entitled to a free credit report from each of the three major bureaus (Equifax, Experian, and TransUnion) every year. Review it carefully and dispute any errors you find.</p>`
  }
];
