import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LessTest Blog - Testing Insights & Best Practices",
  description: "Micro-articles on testing philosophy, tool comparisons, and building frictionless developer workflows.",
};

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: "the-golden-cage",
    title: "The Golden Cage: Why Testing Platforms Don't Want You to Leave",
    excerpt: "Most testing platforms lock you into proprietary formats and marked-up AI costs. Here's why that matters—and how LessTest takes a different approach to data ownership.",
    date: "2026-02-19",
    readTime: "6 min read",
    category: "Vendor Lock-in",
  },
  {
    slug: "what-happens-when-you-run-an-llm-test",
    title: "What Happens When You Run an LLM Test (And Why It Costs So Much)",
    excerpt: "Ever wondered what happens behind the scenes when an AI-powered testing platform runs your tests? Here's the honest breakdown of token costs, latency, and why hybrid approaches might be your best bet.",
    date: "2026-02-18",
    readTime: "7 min read",
    category: "AI Testing",
  },
  {
    slug: "full-llm-vs-hybrid-testing",
    title: "Why Full LLM Testing Isn't the Answer (And What Actually Works)",
    excerpt: "Full LLM testing tools promise the world—70% faster test creation, self-healing tests, plain English authoring. But at scale, the reality doesn't match the hype. Here's why hybrid testing is the smarter path forward.",
    date: "2026-02-18",
    readTime: "6 min read",
    category: "AI Testing",
  },
  {
    slug: "works-in-chrome-safari-broken",
    title: "It Works in Chrome. Safari Says Otherwise.",
    excerpt: "Cross-browser testing is the nightmare that never ends. Safari works differently. Mobile is chaos. Here's how to finally solve it.",
    date: "2026-02-18",
    readTime: "8 min read",
    category: "Cross-Platform Testing",
  },
  {
    slug: "sprint-ends-friday",
    title: "The Sprint Ends Friday. QA is Still Testing Monday.",
    excerpt: "QA is always the bottleneck. Always scrambling. Always working overtime. Here's how to escape the sprint crunch cycle.",
    date: "2026-02-18",
    readTime: "7 min read",
    category: "Agile & DevOps",
  },
  {
    slug: "hate-writing-test-cases",
    title: "I'd Rather Debug Production Than Write Another Test Case",
    excerpt: "If you hate writing test cases, you're not alone—and you're not wrong to question your career. Here's why this universal pain point has a solution.",
    date: "2026-02-18",
    readTime: "6 min read",
    category: "QA Productivity",
  },
  {
    slug: "finished-playwright-course-now-what",
    title: "I Finished the Playwright Course. Now I Have No Idea How Real Projects Work.",
    excerpt: "The gap between learning testing frameworks and understanding professional project structure is massive. Here's what tutorials don't teach you.",
    date: "2026-02-07",
    readTime: "6 min read",
    category: "Career & Learning",
  },
  {
    slug: "why-tests-fail-on-redesigns",
    title: "Why 85% of E2E Tests Fail on UI Redesigns (And How to Fix It)",
    excerpt: "One developer spent 4 months comparing Cypress vs Playwright. Then a redesign broke everything. Here's why—and how to build tests that survive design changes.",
    date: "2026-02-06",
    readTime: "5 min read",
    category: "Testing Philosophy",
  },
  {
    slug: "i-watched-our-qa-drown-in-selenium",
    title: "I Watched Our QA Drown in Selenium. So I Built LessTest.",
    excerpt: "The origin story: How an 8-developer team with 1 QA engineer led to a failed AI experiment, a hybrid insight, and a new approach to testing.",
    date: "2026-02-06",
    readTime: "6 min read",
    category: "Founder Story",
  },
  {
    slug: "playwright-vs-lesstest-2025",
    title: "Playwright vs LessTest: A Developer's Guide for 2025",
    excerpt: "Playwright is powerful. But is it the right tool for fast-moving teams? We compare setup time, maintenance burden, and developer experience.",
    date: "2026-02-06",
    readTime: "6 min read",
    category: "Tool Comparison",
  },
  {
    slug: "testing-as-janitorial-work",
    title: "Why Developers Treat Testing Like a Janitor's Job",
    excerpt: "The cultural divide in software teams is real. Here's how to shift testing from 'chore' to 'competitive advantage.'",
    date: "2026-02-06",
    readTime: "5 min read",
    category: "Team Culture",
  },
  {
    slug: "zero-config-testing-reality",
    title: "Zero-Config Testing: Marketing Buzzword or Real Possibility?",
    excerpt: "We auto-detect Next.js, Vite, and Node setups so you can run tests in under 60 seconds. Here's how it works.",
    date: "2026-02-06",
    readTime: "3 min read",
    category: "Engineering",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            LessTest Blog
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl">
            Micro-articles on testing philosophy, tool comparisons, and building 
            frictionless developer workflows. No fluff, just signal.
          </p>
        </div>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl p-8 border border-slate-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-slate-400 text-sm">{post.date}</span>
                <span className="text-slate-400 text-sm">•</span>
                <span className="text-slate-400 text-sm">{post.readTime}</span>
              </div>
              
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                <Link 
                  href={`/blog/${post.slug}`}
                  className="hover:text-teal-600 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              
              <p className="text-slate-600 leading-relaxed mb-4">
                {post.excerpt}
              </p>
              
              <Link
                href={`/blog/${post.slug}`}
                className="text-teal-600 font-semibold hover:text-teal-700 transition-colors"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
