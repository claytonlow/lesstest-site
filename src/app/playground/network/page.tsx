"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Send,
  Loader2,
  CheckCircle,
  XCircle,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { PageHeader } from "@/components/sections/page-header";
import { Button } from "@/components/ui/button";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface ApiResponse {
  status: "idle" | "loading" | "success" | "error";
  data?: Record<string, unknown>;
  httpCode?: number;
  responseTime?: number;
}

export default function NetworkPlayground() {
  const [getResponse, setGetResponse] = useState<ApiResponse>({ status: "idle" });
  const [postResponse, setPostResponse] = useState<ApiResponse>({ status: "idle" });
  const [delayResponse, setDelayResponse] = useState<ApiResponse>({ status: "idle" });
  const [errorResponse, setErrorResponse] = useState<ApiResponse>({ status: "idle" });
  const [fetchCount, setFetchCount] = useState(0);

  const makeRequest = async (
    endpoint: string,
    method: string,
    setter: (r: ApiResponse) => void,
    body?: Record<string, unknown>,
  ) => {
    setter({ status: "loading" });
    setFetchCount((c) => c + 1);
    const start = performance.now();

    try {
      const res = await fetch(endpoint, {
        method,
        headers: body ? { "Content-Type": "application/json" } : undefined,
        body: body ? JSON.stringify(body) : undefined,
      });

      const data = await res.json();
      const responseTime = Math.round(performance.now() - start);

      setter({
        status: res.ok ? "success" : "error",
        data,
        httpCode: res.status,
        responseTime,
      });
    } catch {
      const responseTime = Math.round(performance.now() - start);
      setter({
        status: "error",
        data: { error: "Network request failed" },
        httpCode: 0,
        responseTime,
      });
    }
  };

  const ResponseDisplay = ({
    response,
    testId,
  }: {
    response: ApiResponse;
    testId: string;
  }) => {
    if (response.status === "idle") return null;

    return (
      <div className="mt-4" data-testid={`${testId}-response`}>
        {response.status === "loading" ? (
          <div className="flex items-center gap-2 text-sm text-slate-500" data-testid={`${testId}-loading`}>
            <Loader2 className="w-4 h-4 animate-spin" />
            Loading...
          </div>
        ) : (
          <div
            className={`rounded-xl border p-4 ${
              response.status === "success"
                ? "bg-emerald-50 border-emerald-100"
                : "bg-red-50 border-red-100"
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              {response.status === "success" ? (
                <CheckCircle className="w-4 h-4 text-emerald-600" />
              ) : (
                <XCircle className="w-4 h-4 text-red-600" />
              )}
              <span
                className={`text-sm font-semibold ${
                  response.status === "success" ? "text-emerald-700" : "text-red-700"
                }`}
                data-testid={`${testId}-status`}
              >
                {response.httpCode}
              </span>
              <span className="text-xs text-slate-500" data-testid={`${testId}-time`}>
                {response.responseTime}ms
              </span>
            </div>
            <pre
              className="text-xs text-slate-700 overflow-x-auto bg-white/50 rounded-lg p-3"
              data-testid={`${testId}-body`}
            >
              {JSON.stringify(response.data, null, 2)}
            </pre>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-teal-100">
      <Nav />

      <main className="pt-32 pb-24">
        <div className="px-6 md:px-8 max-w-5xl mx-auto">
          <Link
            href="/playground"
            data-testid="back-to-playground"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-teal-600 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Playground
          </Link>

          <PageHeader
            badge="Network & APIs"
            title="Network request playground"
            description="Buttons that fire real HTTP requests to test endpoints. Use Start Network Capture before clicking, then Wait for Capture to inspect responses."
          />

          <div className="mt-6 mb-12 flex items-center gap-3">
            <span className="text-sm text-slate-500">
              Total requests made: <strong data-testid="fetch-count">{fetchCount}</strong>
            </span>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* GET Request */}
            <motion.div
              variants={staggerItem}
              className="bg-white rounded-2xl p-8 border border-slate-200"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-mono font-bold rounded">
                  GET
                </span>
                <h2 className="text-lg font-bold text-slate-900">Fetch Users</h2>
              </div>
              <p className="text-sm text-slate-500 mb-4">
                Fires a GET request to <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">/api/playground?action=users</code>.
                Capture this with Start Network Capture using pattern <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">*/api/playground*</code>.
              </p>

              <Button
                size="sm"
                onClick={() =>
                  makeRequest("/api/playground?action=users", "GET", setGetResponse)
                }
                data-testid="fetch-users-button"
              >
                <Send className="w-4 h-4" />
                Fetch Users
              </Button>

              <ResponseDisplay response={getResponse} testId="get-users" />
            </motion.div>

            {/* POST Request */}
            <motion.div
              variants={staggerItem}
              className="bg-white rounded-2xl p-8 border border-slate-200"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 bg-sky-50 border border-sky-100 text-sky-700 text-xs font-mono font-bold rounded">
                  POST
                </span>
                <h2 className="text-lg font-bold text-slate-900">Create User</h2>
              </div>
              <p className="text-sm text-slate-500 mb-4">
                Fires a POST request with a JSON body. Extract the returned <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">id</code> using JSONPath.
              </p>

              <Button
                size="sm"
                onClick={() =>
                  makeRequest("/api/playground", "POST", setPostResponse, {
                    name: "Test User",
                    email: "test@lesstest.io",
                    role: "qa",
                  })
                }
                data-testid="create-user-button"
              >
                <Send className="w-4 h-4" />
                Create User
              </Button>

              <ResponseDisplay response={postResponse} testId="post-user" />
            </motion.div>

            {/* Delayed Response */}
            <motion.div
              variants={staggerItem}
              className="bg-white rounded-2xl p-8 border border-slate-200"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 bg-amber-50 border border-amber-100 text-amber-700 text-xs font-mono font-bold rounded">
                  GET
                </span>
                <h2 className="text-lg font-bold text-slate-900">Slow Endpoint (2s delay)</h2>
              </div>
              <p className="text-sm text-slate-500 mb-4">
                Simulates a slow API response. Great for testing Wait for Network Idle and loading states.
              </p>

              <Button
                size="sm"
                onClick={() =>
                  makeRequest("/api/playground?action=slow", "GET", setDelayResponse)
                }
                data-testid="slow-request-button"
              >
                <RefreshCw className="w-4 h-4" />
                Slow Request
              </Button>

              <ResponseDisplay response={delayResponse} testId="slow-request" />
            </motion.div>

            {/* Error Response */}
            <motion.div
              variants={staggerItem}
              className="bg-white rounded-2xl p-8 border border-slate-200"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 bg-red-50 border border-red-100 text-red-700 text-xs font-mono font-bold rounded">
                  GET
                </span>
                <h2 className="text-lg font-bold text-slate-900">Error Endpoint (500)</h2>
              </div>
              <p className="text-sm text-slate-500 mb-4">
                Returns a 500 error. Test error handling, or mock this with Route Network Request to return a success instead.
              </p>

              <Button
                size="sm"
                variant="secondary"
                onClick={() =>
                  makeRequest("/api/playground?action=error", "GET", setErrorResponse)
                }
                data-testid="error-request-button"
              >
                <XCircle className="w-4 h-4" />
                Trigger Error
              </Button>

              <ResponseDisplay response={errorResponse} testId="error-request" />
            </motion.div>

            {/* Network Capture Guide */}
            <motion.div
              variants={staggerItem}
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white"
            >
              <h2 className="text-lg font-bold text-white mb-3">How to test network captures</h2>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">
                    1
                  </span>
                  <p>
                    Add a <strong className="text-white">Start Network Capture</strong> step with pattern{" "}
                    <code className="text-teal-300 bg-white/10 px-1.5 py-0.5 rounded text-xs">*/api/playground*</code>
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">
                    2
                  </span>
                  <p>
                    Add a <strong className="text-white">Click</strong> step targeting one of the fetch buttons above
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">
                    3
                  </span>
                  <p>
                    Add <strong className="text-white">Wait for Capture</strong> referencing the same capture name
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">
                    4
                  </span>
                  <p>
                    Assert <code className="text-teal-300 bg-white/10 px-1.5 py-0.5 rounded text-xs">captureName_httpCode</code> equals{" "}
                    <code className="text-teal-300 bg-white/10 px-1.5 py-0.5 rounded text-xs">200</code>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
