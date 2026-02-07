import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Developers Treat Testing Like a Janitor's Job",
  description: "The cultural divide in software teams is real. Here's how to shift testing from 'chore' to 'competitive advantage.'",
  openGraph: {
    title: "Why Developers Treat Testing Like a Janitor's Job",
    description: "The cultural divide in software teams is real. Here's how to shift testing from 'chore' to 'competitive advantage.'",
  },
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Back Link */}
        <Link 
          href="/blog"
          className="inline-flex items-center text-slate-500 hover:text-indigo-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
              Team Culture
            </span>
            <span className="text-slate-400 text-sm">February 7, 2026</span>
            <span className="text-slate-400 text-sm">•</span>
            <span className="text-slate-400 text-sm">5 min read</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Why Developers Treat Testing Like a Janitor's Job
          </h1>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            There's a thread on r/webdev that stopped me cold. The title: "Why do devs treat 
            testing like a janitor's job?"
          </p>

          <p>
            The comments were a parade of horror stories. Developers who "got promoted to 
            writing E2E tests against their will." Teams with "no QA team, flaky tests, and 
            constant pager duty." Engineers who saw testing as punishment duty—the work you 
            assign to someone who needs to be taught a lesson.
          </p>

          <p>
            This is the cultural divide that breaks testing strategies before any code is 
            written. And until we fix the culture, better tools are just faster ways to do 
            work nobody wants.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Where the Resentment Comes From
          </h2>

          <p>
            The frustration isn't irrational. It's earned. Here's what developers experience:
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            1. Testing Is Rewardless Work
          </h3>

          <p>
            Write a feature: visible progress, user value, demo material. Write a test: 
            invisible insurance policy that only gets noticed when it fails.
          </p>

          <p>
            There's no dopamine hit in test writing. No "look what I built" moment. Just 
            the quiet knowledge that if something breaks later, you'll be glad you wrote it.
            Which feels less like engineering and more like adulting.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            2. Tests Are Brittler Than the Code They Test
          </h3>

          <p>
            Nothing breeds resentment like maintenance work that feels pointless. And 
            traditional E2E tests are <em>constant</em> maintenance. Change a CSS class? 
            Test breaks. Refactor a component? Test breaks. Run a redesign? Enjoy fixing 
            40% of your test suite for no functional reason.
          </p>

          <p>
            After enough cycles of "fix tests that broke on unrelated changes," developers 
            start to see testing as busywork. They're not wrong.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            3. Testing Is "Someone Else's Job"
          </h3>

          <p>
            In the golden age of software (which never existed, but we like to imagine it), 
            there were QA teams. Dedicated professionals who tested software so developers 
            could write it. That separation of concerns made sense.
          </p>

          <p>
            Now? At most companies, there is no QA team. Or there's one QA engineer for 
            every eight developers. The work that used to be someone's specialty is now 
            "everyone's responsibility"—which, in practice, means it falls through the cracks 
            until it becomes "whoever drew the short straw this sprint."
          </p>

          <p className="bg-amber-50 border-l-4 border-amber-500 pl-4 py-2 my-6">
            <strong>The result:</strong> Testing is seen as a demotion. Something you're assigned 
            to when you're not trusted with "real" work.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            The Cost of the Culture
          </h2>

          <p>
            This isn't just feelings. The "janitorial testing" mindset has concrete costs:
          </p>

          <ul className="space-y-3">
            <li>
              <strong>Test suites that never grow.</strong> Teams write the minimum tests 
              required to check a box, not the tests that would actually catch bugs.
            </li>
            <li>
              <strong>Flaky tests that get ignored.</strong> When tests fail randomly, and 
              nobody owns them, the solution is often to just... not look at them.
            </li>
            <li>
              <strong>Release anxiety.</strong> Teams ship code they haven't adequately tested 
              because testing it properly is too painful. They just hope it works.
            </li>
            <li>
              <strong>QA bottlenecks.</strong> The few tests that do exist create queues, 
              especially when they're slow and flaky.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            How to Change the Culture
          </h2>

          <p>
            Fixing this requires changing how testing <em>feels</em>, not just how it's done. 
            Here's what actually works:
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            1. Make Testing Fast Enough to Feel Like Development
          </h3>

          <p>
            If your test suite takes 12 minutes to run, it's not part of your development 
            loop. It's a separate task. And separate tasks get deprioritized.
          </p>

          <p>
            The goal is tests that run in seconds—fast enough that developers can run them 
            on every save, like a linter. When testing is continuous, it stops being an event.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            2. Make Tests That Survive Refactoring
          </h3>

          <p>
            Tests that break on every UI change teach developers to see testing as fragile 
            and high-maintenance. Tests that adapt to UI changes teach developers that testing 
            is stable and reliable.
          </p>

          <p>
            The difference is often tooling: testing tools that understand <em>intent</em> 
            rather than <em>implementation</em> break less often, and when they do break, 
            they break for reasons that matter.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            3. Assign Ownership (Even If It's Everyone)
          </h3>

          <p>
            "Everyone is responsible for testing" means no one is. Successful teams make 
            testing someone's explicit job—even if that someone rotates, even if they still 
            write code.
          </p>

          <p>
            The owner doesn't have to write every test. They make sure tests get written, 
            that the suite stays healthy, that flaky tests get fixed. It's a role, not a 
            punishment.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
            4. Celebrate Test-Driven Wins
          </h3>

          <p>
            Teams celebrate features shipped. They should also celebrate bugs caught. 
            When a test catches a regression before it hits production, make that visible. 
            Make it clear that the test just saved the team a fire drill.
          </p>

          <p>
            Testing has no natural dopamine cycle. You have to build one.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            The Competitive Advantage
          </h2>

          <p>
            Here's the thing about the "janitorial testing" mindset: it's an opportunity. 
            Teams that solve this culture problem have a genuine competitive advantage.
          </p>

          <p>
            They're the teams that can refactor without fear. That can ship on Fridays. 
            That can onboard new developers without a month of "don't touch the test suite" 
            warnings.
          </p>

          <p>
            Testing culture isn't a soft skill. It's infrastructure. And like any 
            infrastructure, it either accelerates you or holds you back.
          </p>

          <hr className="my-12 border-slate-200" />

          <div className="bg-slate-900 text-white p-8 rounded-2xl not-prose">
            <h3 className="text-xl font-bold mb-3">
              Building a testing culture?
            </h3>
            <p className="text-slate-300 mb-6">
              LessTest is designed for teams that want testing to feel like part of 
              development, not a separate job. Fast, resilient, zero-config.
            </p>
            <a 
              href="#"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 
                       text-white font-semibold rounded-lg transition-colors"
            >
              Learn More →
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
