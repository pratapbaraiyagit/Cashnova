import type { Post, Category, FaqItem } from './types';
import { Lightbulb, PiggyBank, TrendingUp, Handshake, Scale, CircleGauge } from 'lucide-react';

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
  {
    slug: 'debt-management',
    name: 'Debt Management',
    description: 'Strategies for paying off and managing debt effectively.',
    icon: Scale,
  },
  {
    slug: 'credit-score',
    name: 'Credit Score',
    description: 'Understand and improve your credit score to unlock better financial products.',
    icon: CircleGauge,
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
  },
  {
    id: 7,
    slug: 'debt-consolidation-is-it-right-for-you',
    title: 'Debt Consolidation: Is It Right for You?',
    excerpt: 'Learn the pros and cons of debt consolidation and whether it\'s a suitable strategy for your financial situation.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'debt papers',
    category: 'debt-management',
    author: 'Michael Brown',
    date: '2024-07-22',
    readingTime: 7,
    content: '<h2>Understanding Debt Consolidation</h2><p>Debt consolidation is the process of combining multiple debts into a single, new loan, ideally with a lower interest rate. This can simplify your payments and potentially save you money on interest. Common methods include personal loans and balance transfer credit cards.</p><h3>Pros:</h3><ul><li>Simplified finances with one monthly payment.</li><li>Potential for a lower interest rate.</li><li>A clear end date for your debt payoff.</li></ul><h3>Cons:</h3><ul><li>It doesn\'t solve underlying spending issues.</li><li>Origination fees or balance transfer fees can be costly.</li><li>You might end up with a longer repayment period.</li></ul><p>Before deciding, compare offers and read the fine print. Ensure the new payment is affordable and that the strategy will genuinely help you become debt-free faster.</p>'
  },
  {
    id: 8,
    slug: 'how-to-improve-your-credit-score-by-100-points',
    title: 'How to Improve Your Credit Score by 100 Points',
    excerpt: 'Actionable steps to boost your credit score significantly, opening doors to better loans and lower interest rates.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'credit score report',
    category: 'credit-score',
    author: 'Emily White',
    date: '2024-07-21',
    readingTime: 8,
    content: '<h2>Key Factors of Your Credit Score</h2><p>Your credit score is primarily based on five factors: payment history (35%), amounts owed (30%), length of credit history (15%), new credit (10%), and credit mix (10%).</p><h3>Actionable Steps:</h3><ol><li><strong>Pay Bills on Time:</strong> This is the most impactful factor. Set up autopay to avoid missing payments.</li><li><strong>Lower Your Credit Utilization:</strong> Aim to use less than 30% of your available credit. Pay down balances or request a credit limit increase.</li><li><strong>Dispute Errors on Your Report:</strong> Check your credit report for free annually and dispute any inaccuracies.</li><li><strong>Become an Authorized User:</strong> If a family member has good credit, ask to become an authorized user on one of their cards.</li><li><strong>Don\'t Close Old Accounts:</strong> Closing old credit cards can shorten your credit history and increase your utilization ratio.</li></ol><p>Improving your score takes time and consistency, but the benefits are well worth the effort.</p>'
  },
  {
    id: 9,
    slug: 'the-snowball-vs-avalanche-debt-payoff-method',
    title: 'The Snowball vs. Avalanche Debt Payoff Method',
    excerpt: 'Two popular debt repayment strategies, but which one is right for you? We break down the differences.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'decision path',
    category: 'debt-management',
    author: 'John Smith',
    date: '2024-07-14',
    readingTime: 6,
    content: '<h3>The Debt Snowball Method</h3><p>With this method, you pay off your debts from the smallest balance to the largest, regardless of interest rates. The psychological win of paying off a debt quickly provides motivation.</p><h3>The Debt Avalanche Method</h3><p>Here, you focus on paying off debts with the highest interest rates first. Mathematically, this method saves you the most money over time.</p><h3>Which is better?</h3><p>The best method is the one you can stick with. If you need quick wins to stay motivated, the snowball method is a great choice. If you are disciplined and want to save the most money, the avalanche method is financially superior.</p>'
  },
  {
    id: 10,
    slug: 'what-is-a-roth-ira-and-should-you-open-one',
    title: 'What Is a Roth IRA and Should You Open One?',
    excerpt: 'A powerful retirement savings tool that offers tax-free growth and withdrawals. Find out if a Roth IRA fits your retirement strategy.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'retirement savings',
    category: 'investing',
    author: 'Jane Doe',
    date: '2024-07-13',
    readingTime: 7,
    content: '<p>A Roth IRA is an individual retirement account where you contribute after-tax dollars. Your money grows tax-free, and you can make qualified withdrawals tax-free in retirement. Unlike a traditional IRA, you don\'t get a tax deduction for contributions.</p><h3>Benefits:</h3><ul><li>Tax-free withdrawals in retirement.</li><li>No required minimum distributions (RMDs).</li><li>You can withdraw contributions (not earnings) at any time, penalty-free.</li></ul><h3>Who should consider a Roth IRA?</h3><p>A Roth IRA is often a good choice for those who expect to be in a higher tax bracket in retirement than they are now. It\'s also great for young investors who have a long time horizon for growth.</p>'
  },
  {
    id: 11,
    slug: 'how-to-manage-student-loans-effectively',
    title: 'How to Manage Student Loans Effectively',
    excerpt: 'Strategies for tackling student loan debt, from repayment plans to refinancing options.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'student graduation',
    category: 'debt-management',
    author: 'Emily White',
    date: '2024-07-12',
    readingTime: 9,
    content: '<p>Student loan debt can be overwhelming. The key is to have a clear plan.</p><h3>1. Understand Your Loans</h3><p>Know the difference between your federal and private loans, including interest rates and repayment terms.</p><h3>2. Choose the Right Repayment Plan</h3><p>Federal loans offer several options, including income-driven repayment (IDR) plans that can lower your monthly payment.</p><h3>3. Consider Refinancing</h3><p>If you have good credit and a stable income, you might be able to refinance your loans to get a lower interest rate, especially with private loans.</p><h3>4. Pay Extra When Possible</h3><p>Even small extra payments can reduce the total interest you pay and shorten your loan term. Specify that extra payments should go toward the principal of your highest-interest loan.</p>'
  },
  {
    id: 12,
    slug: 'understanding-your-paycheck-deductions-and-withholding',
    title: 'Understanding Your Paycheck: Deductions and Withholding',
    excerpt: 'Ever wonder where all your money goes before it hits your bank account? We break down the common paycheck deductions.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'paycheck analysis',
    category: 'budgeting',
    author: 'Michael Brown',
    date: '2024-07-11',
    readingTime: 6,
    content: '<h3>Pre-Tax Deductions:</h3><p>These are taken from your gross pay before taxes are calculated, lowering your taxable income. Common examples include health insurance premiums and 401(k) contributions.</p><h3>Taxes:</h3><p>This includes federal and state income tax, as well as FICA taxes (Social Security and Medicare).</p><h3>Post-Tax Deductions:</h3><p>These are taken out after taxes have been calculated. Examples include Roth 401(k) contributions or wage garnishments.</p><p>Reviewing your paystub helps you understand your total compensation and ensure your withholdings are correct.</p>'
  }
];

export const featuredPosts: Post[] = allPosts.slice(0, 3);
export const latestPosts: Post[] = allPosts.slice(0, 6);

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
