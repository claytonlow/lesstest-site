"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  HardDrive,
  Cookie,
  Database,
  RefreshCw,
  Trash2,
  Plus,
} from "lucide-react";
import Link from "next/link";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { PageHeader } from "@/components/sections/page-header";
import { Button } from "@/components/ui/button";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface StorageEntry {
  key: string;
  value: string;
}

export default function StoragePlayground() {
  const [localEntries, setLocalEntries] = useState<StorageEntry[]>([]);
  const [sessionEntries, setSessionEntries] = useState<StorageEntry[]>([]);
  const [cookieEntries, setCookieEntries] = useState<StorageEntry[]>([]);
  const [newLocal, setNewLocal] = useState({ key: "", value: "" });
  const [newSession, setNewSession] = useState({ key: "", value: "" });
  const [newCookie, setNewCookie] = useState({ key: "", value: "" });

  const refreshLocalStorage = useCallback(() => {
    const entries: StorageEntry[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) entries.push({ key, value: localStorage.getItem(key) || "" });
    }
    setLocalEntries(entries);
  }, []);

  const refreshSessionStorage = useCallback(() => {
    const entries: StorageEntry[] = [];
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      if (key) entries.push({ key, value: sessionStorage.getItem(key) || "" });
    }
    setSessionEntries(entries);
  }, []);

  const refreshCookies = useCallback(() => {
    const entries: StorageEntry[] = document.cookie
      .split(";")
      .filter((c) => c.trim())
      .map((c) => {
        const [key, ...rest] = c.trim().split("=");
        return { key, value: rest.join("=") };
      });
    setCookieEntries(entries);
  }, []);

  const refreshAll = useCallback(() => {
    refreshLocalStorage();
    refreshSessionStorage();
    refreshCookies();
  }, [refreshLocalStorage, refreshSessionStorage, refreshCookies]);

  useEffect(() => {
    refreshAll();
  }, [refreshAll]);

  const handleAddLocal = () => {
    if (!newLocal.key) return;
    localStorage.setItem(newLocal.key, newLocal.value);
    setNewLocal({ key: "", value: "" });
    refreshLocalStorage();
  };

  const handleRemoveLocal = (key: string) => {
    localStorage.removeItem(key);
    refreshLocalStorage();
  };

  const handleClearLocal = () => {
    localStorage.clear();
    refreshLocalStorage();
  };

  const handleAddSession = () => {
    if (!newSession.key) return;
    sessionStorage.setItem(newSession.key, newSession.value);
    setNewSession({ key: "", value: "" });
    refreshSessionStorage();
  };

  const handleRemoveSession = (key: string) => {
    sessionStorage.removeItem(key);
    refreshSessionStorage();
  };

  const handleClearSession = () => {
    sessionStorage.clear();
    refreshSessionStorage();
  };

  const handleAddCookie = () => {
    if (!newCookie.key) return;
    document.cookie = `${newCookie.key}=${newCookie.value}; path=/; max-age=86400`;
    setNewCookie({ key: "", value: "" });
    refreshCookies();
  };

  const handleRemoveCookie = (key: string) => {
    document.cookie = `${key}=; path=/; max-age=0`;
    refreshCookies();
  };

  const StorageSection = ({
    title,
    icon: Icon,
    color,
    entries,
    newEntry,
    setNewEntry,
    onAdd,
    onRemove,
    onClear,
    testIdPrefix,
  }: {
    title: string;
    icon: typeof HardDrive;
    color: string;
    entries: StorageEntry[];
    newEntry: { key: string; value: string };
    setNewEntry: (e: { key: string; value: string }) => void;
    onAdd: () => void;
    onRemove: (key: string) => void;
    onClear: () => void;
    testIdPrefix: string;
  }) => {
    const colorMap: Record<string, { bg: string; border: string; text: string; icon: string }> = {
      teal: { bg: "bg-teal-50", border: "border-teal-100", text: "text-teal-700", icon: "text-teal-600" },
      violet: { bg: "bg-violet-50", border: "border-violet-100", text: "text-violet-700", icon: "text-violet-600" },
      amber: { bg: "bg-amber-50", border: "border-amber-100", text: "text-amber-700", icon: "text-amber-600" },
    };
    const c = colorMap[color];

    return (
      <div className="bg-white rounded-2xl p-8 border border-slate-200" data-testid={`${testIdPrefix}-section`}>
        <div className="flex items-center gap-3 mb-1">
          <div className={`w-9 h-9 rounded-lg ${c.bg} ${c.border} border flex items-center justify-center`}>
            <Icon className={`w-5 h-5 ${c.icon}`} />
          </div>
          <h2 className="text-lg font-bold text-slate-900">{title}</h2>
          <span
            className={`ml-auto px-2 py-0.5 ${c.bg} ${c.border} border ${c.text} text-xs font-semibold rounded-full`}
            data-testid={`${testIdPrefix}-count`}
          >
            {entries.length} item{entries.length !== 1 ? "s" : ""}
          </span>
        </div>
        <p className="text-sm text-slate-500 mb-6 ml-12">
          LessTest can set, get, and remove values. This viewer shows current state.
        </p>

        {/* Add new entry */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Key"
            data-testid={`${testIdPrefix}-key-input`}
            value={newEntry.key}
            onChange={(e) => setNewEntry({ ...newEntry, key: e.target.value })}
            onKeyDown={(e) => {
              if (e.key === "Enter") onAdd();
            }}
            className="flex-1 px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder:text-slate-400"
          />
          <input
            type="text"
            placeholder="Value"
            data-testid={`${testIdPrefix}-value-input`}
            value={newEntry.value}
            onChange={(e) => setNewEntry({ ...newEntry, value: e.target.value })}
            onKeyDown={(e) => {
              if (e.key === "Enter") onAdd();
            }}
            className="flex-1 px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder:text-slate-400"
          />
          <Button size="sm" onClick={onAdd} data-testid={`${testIdPrefix}-add`}>
            <Plus className="w-4 h-4" />
          </Button>
        </div>

        {/* Entries */}
        {entries.length === 0 ? (
          <div
            className="py-6 text-center text-sm text-slate-400 border border-dashed border-slate-200 rounded-xl"
            data-testid={`${testIdPrefix}-empty`}
          >
            No entries. Add one above or use LessTest to set values.
          </div>
        ) : (
          <div className="space-y-1.5" data-testid={`${testIdPrefix}-list`}>
            {entries.map((entry) => (
              <div
                key={entry.key}
                className="flex items-center gap-3 px-3 py-2 rounded-lg bg-slate-50 border border-slate-100 group"
                data-testid={`${testIdPrefix}-entry`}
                data-key={entry.key}
              >
                <span className="text-xs font-mono font-semibold text-slate-700 min-w-[80px]" data-testid={`${testIdPrefix}-entry-key`}>
                  {entry.key}
                </span>
                <span className="text-xs font-mono text-slate-500 truncate flex-1" data-testid={`${testIdPrefix}-entry-value`}>
                  {entry.value}
                </span>
                <button
                  onClick={() => onRemove(entry.key)}
                  data-testid={`${testIdPrefix}-remove-${entry.key}`}
                  className="opacity-0 group-hover:opacity-100 p-1 text-slate-400 hover:text-red-500 transition-all"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="flex gap-2 mt-4">
          <Button variant="secondary" size="sm" onClick={onClear} data-testid={`${testIdPrefix}-clear`}>
            <Trash2 className="w-3.5 h-3.5" />
            Clear All
          </Button>
        </div>
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
            badge="Browser Storage"
            title="Storage & cookies playground"
            description="Live viewers for localStorage, sessionStorage, and cookies. Use LessTest's storage tools to set values, then verify them here—or add values manually and assert with Get Local Storage / Get Session Storage."
          />

          <div className="mt-6 mb-12">
            <Button
              variant="secondary"
              size="sm"
              onClick={refreshAll}
              data-testid="refresh-all-storage"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh All
            </Button>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={staggerItem}>
              <StorageSection
                title="Local Storage"
                icon={HardDrive}
                color="teal"
                entries={localEntries}
                newEntry={newLocal}
                setNewEntry={setNewLocal}
                onAdd={handleAddLocal}
                onRemove={handleRemoveLocal}
                onClear={handleClearLocal}
                testIdPrefix="local"
              />
            </motion.div>

            <motion.div variants={staggerItem}>
              <StorageSection
                title="Session Storage"
                icon={Database}
                color="violet"
                entries={sessionEntries}
                newEntry={newSession}
                setNewEntry={setNewSession}
                onAdd={handleAddSession}
                onRemove={handleRemoveSession}
                onClear={handleClearSession}
                testIdPrefix="session"
              />
            </motion.div>

            <motion.div variants={staggerItem}>
              <StorageSection
                title="Cookies"
                icon={Cookie}
                color="amber"
                entries={cookieEntries}
                newEntry={newCookie}
                setNewEntry={setNewCookie}
                onAdd={handleAddCookie}
                onRemove={handleRemoveCookie}
                onClear={() => {
                  cookieEntries.forEach((e) => handleRemoveCookie(e.key));
                }}
                testIdPrefix="cookie"
              />
            </motion.div>

            {/* Testing guide */}
            <motion.div
              variants={staggerItem}
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white"
            >
              <h2 className="text-lg font-bold text-white mb-3">How to test browser storage</h2>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-300">
                <div>
                  <h3 className="text-white font-semibold mb-2">Setting values</h3>
                  <ol className="space-y-2 list-decimal list-inside">
                    <li>Navigate to this page</li>
                    <li>Use <strong className="text-white">Set Local Storage</strong> with key &quot;theme&quot; and value &quot;dark&quot;</li>
                    <li>Click <strong className="text-white">Refresh All</strong> to see the value appear</li>
                    <li>Assert the value with <strong className="text-white">Get Local Storage</strong></li>
                  </ol>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Verifying cookies</h3>
                  <ol className="space-y-2 list-decimal list-inside">
                    <li>Use <strong className="text-white">Set Cookie</strong> with name, value, and this page&apos;s URL</li>
                    <li>Reload the page with <strong className="text-white">Reload Page</strong></li>
                    <li>Assert the cookie count or value with Assert Text</li>
                    <li>Clean up with <strong className="text-white">Delete Cookie</strong></li>
                  </ol>
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
