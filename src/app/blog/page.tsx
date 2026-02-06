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
              className="bg-white rounded-2xl p-8 border border-slate-100 hover:border-indigo-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-slate-400 text-sm">{post.date}</span>
                <span className="text-slate-400 text-sm">•</span>
                <span className="text-slate-400 text-sm">{post.readTime}</span>
              </div>
              
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                <Link 
                  href={`/blog/${post.slug}`}
                  className="hover:text-indigo-600 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              
              <p className="text-slate-600 leading-relaxed mb-4">
                {post.excerpt}
              </p>
              
              <Link
                href={`/blog/${post.slug}`}
                className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
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
