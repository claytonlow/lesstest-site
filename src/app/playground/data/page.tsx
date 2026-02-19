"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Eye,
  EyeOff,
  Plus,
  Minus,
  ToggleLeft,
  ToggleRight,
  Star,
  Trash2,
  CheckCircle,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { PageHeader } from "@/components/sections/page-header";
import { Button } from "@/components/ui/button";
import { staggerContainer, staggerItem } from "@/lib/animations";

const initialItems = [
  { id: 1, name: "Apples", category: "Fruit" },
  { id: 2, name: "Bananas", category: "Fruit" },
  { id: 3, name: "Carrots", category: "Vegetable" },
  { id: 4, name: "Broccoli", category: "Vegetable" },
  { id: 5, name: "Salmon", category: "Protein" },
];

export default function DataPlayground() {
  const [counter, setCounter] = useState(0);
  const [messageVisible, setMessageVisible] = useState(true);
  const [alertDismissed, setAlertDismissed] = useState(false);
  const [toggleStates, setToggleStates] = useState({
    notifications: true,
    analytics: false,
    darkMode: false,
  });
  const [items, setItems] = useState(initialItems);
  const [rating, setRating] = useState(0);
  const [statusLabel, setStatusLabel] = useState("Active");

  const handleToggle = (key: keyof typeof toggleStates) => {
    setToggleStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleAddItem = () => {
    const newId = Math.max(0, ...items.map((i) => i.id)) + 1;
    const names = ["Milk", "Bread", "Cheese", "Yogurt", "Rice", "Pasta", "Chicken", "Eggs"];
    const categories = ["Dairy", "Grain", "Protein"];
    setItems([
      ...items,
      {
        id: newId,
        name: names[newId % names.length],
        category: categories[newId % categories.length],
      },
    ]);
  };

  const handleRemoveItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
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
            badge="Data & Assertions"
            title="Dynamic content for assertions"
            description="Counters, toggleable elements, dynamic lists, and attribute states. Everything you need to test Assert Visible, Assert Text, Assert Count, Assert Attribute, and Extract Variable."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 space-y-8"
          >
            {/* Counter */}
            <motion.div
              variants={staggerItem}
              className="bg-white rounded-2xl p-8 border border-slate-200"
            >
              <h2 className="text-lg font-bold text-slate-900 mb-1">Counter</h2>
              <p className="text-sm text-slate-500 mb-6">
                Increment/decrement and assert the value with Assert Text or Extract Variable.
              </p>

              <div className="flex items-center gap-4">
                <button
                  data-testid="counter-decrement"
                  onClick={() => setCounter((c) => c - 1)}
                  className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
                >
                  <Minus className="w-4 h-4 text-slate-600" />
                </button>

                <span
                  className="text-4xl font-bold text-slate-900 w-20 text-center tabular-nums"
                  data-testid="counter-value"
                >
                  {counter}
                </span>

                <button
                  data-testid="counter-increment"
                  onClick={() => setCounter((c) => c + 1)}
                  className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
                >
                  <Plus className="w-4 h-4 text-slate-600" />
                </button>

                <button
                  data-testid="counter-reset"
                  onClick={() => setCounter(0)}
                  className="ml-4 px-3 py-1.5 text-xs text-slate-500 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  Reset
                </button>
              </div>

              <p className="mt-4 text-sm text-slate-500" data-testid="counter-label">
                The counter is currently at <strong data-testid="counter-inline">{counter}</strong>
              </p>
            </motion.div>

            {/* Visibility Toggles */}
            <motion.div
              variants={staggerItem}
              className="bg-white rounded-2xl p-8 border border-slate-200"
            >
              <h2 className="text-lg font-bold text-slate-900 mb-1">Visibility Toggles</h2>
              <p className="text-sm text-slate-500 mb-6">
                Show/hide elements to test Assert Visible and Assert Absence.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setMessageVisible(!messageVisible)}
                    data-testid="toggle-message"
                  >
                    {messageVisible ? (
                      <><EyeOff className="w-4 h-4" /> Hide Message</>
                    ) : (
                      <><Eye className="w-4 h-4" /> Show Message</>
                    )}
                  </Button>

                  {messageVisible && (
                    <div
                      className="px-4 py-2 bg-teal-50 border border-teal-100 rounded-lg text-sm text-teal-700"
                      data-testid="visible-message"
                    >
                      This message is visible!
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setAlertDismissed(!alertDismissed)}
                    data-testid="toggle-alert"
                  >
                    {alertDismissed ? "Show Alert" : "Dismiss Alert"}
                  </Button>

                  {!alertDismissed && (
                    <div
                      className="flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-100 rounded-lg text-sm text-amber-700"
                      data-testid="dismissable-alert"
                    >
                      <XCircle className="w-4 h-4" />
                      This is a dismissable alert
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Status & Attributes */}
            <motion.div
              variants={staggerItem}
              className="bg-white rounded-2xl p-8 border border-slate-200"
            >
              <h2 className="text-lg font-bold text-slate-900 mb-1">Attributes & Status</h2>
              <p className="text-sm text-slate-500 mb-6">
                Elements with dynamic attributes for Assert Attribute testing. Toggle states, disabled states, and ARIA attributes.
              </p>

              {/* Toggle switches */}
              <div className="space-y-3 mb-6">
                {(Object.entries(toggleStates) as [keyof typeof toggleStates, boolean][]).map(
                  ([key, value]) => (
                    <div key={key} className="flex items-center justify-between max-w-sm">
                      <span className="text-sm text-slate-700 capitalize">{key}</span>
                      <button
                        data-testid={`toggle-${key}`}
                        data-state={value ? "on" : "off"}
                        aria-checked={value}
                        role="switch"
                        onClick={() => handleToggle(key)}
                        className={`relative w-11 h-6 rounded-full transition-colors ${
                          value ? "bg-teal-600" : "bg-slate-300"
                        }`}
                      >
                        <div
                          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                            value ? "translate-x-5" : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>
                  )
                )}
              </div>

              {/* Status label */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm text-slate-700">Status:</span>
                <span
                  data-testid="status-badge"
                  data-status={statusLabel.toLowerCase()}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                    statusLabel === "Active"
                      ? "bg-emerald-50 border border-emerald-100 text-emerald-700"
                      : statusLabel === "Pending"
                        ? "bg-amber-50 border border-amber-100 text-amber-700"
                        : "bg-red-50 border border-red-100 text-red-700"
                  }`}
                >
                  {statusLabel === "Active" ? (
                    <CheckCircle className="w-3 h-3" />
                  ) : statusLabel === "Pending" ? (
                    <ToggleLeft className="w-3 h-3" />
                  ) : (
                    <XCircle className="w-3 h-3" />
                  )}
                  {statusLabel}
                </span>
                <div className="flex gap-1 ml-auto">
                  {["Active", "Pending", "Inactive"].map((status) => (
                    <button
                      key={status}
                      data-testid={`set-status-${status.toLowerCase()}`}
                      onClick={() => setStatusLabel(status)}
                      className={`px-3 py-1 text-xs rounded-lg border transition-all ${
                        statusLabel === status
                          ? "bg-slate-900 text-white border-slate-900"
                          : "border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              {/* Disabled button */}
              <div className="flex items-center gap-4">
                <button
                  data-testid="disabled-button"
                  disabled
                  className="px-4 py-2 bg-slate-100 text-slate-400 rounded-lg text-sm font-medium cursor-not-allowed border border-slate-200"
                >
                  Disabled Button
                </button>
                <button
                  data-testid="enabled-button"
                  aria-label="Enabled action button"
                  className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors"
                >
                  Enabled Button
                </button>
              </div>
            </motion.div>

            {/* Star Rating */}
            <motion.div
              variants={staggerItem}
              className="bg-white rounded-2xl p-8 border border-slate-200"
            >
              <h2 className="text-lg font-bold text-slate-900 mb-1">Star Rating</h2>
              <p className="text-sm text-slate-500 mb-6">
                Click stars to rate. Test with Click + Assert Attribute (data-rating).
              </p>

              <div className="flex items-center gap-1" data-testid="star-rating" data-rating={rating}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    data-testid={`star-${star}`}
                    onClick={() => setRating(star)}
                    className="p-1 hover:scale-110 transition-transform"
                  >
                    <Star
                      className={`w-7 h-7 ${
                        star <= rating
                          ? "fill-amber-400 text-amber-400"
                          : "text-slate-300"
                      }`}
                    />
                  </button>
                ))}
                <span className="ml-3 text-sm text-slate-600" data-testid="rating-text">
                  {rating > 0 ? `${rating} of 5 stars` : "No rating yet"}
                </span>
              </div>
            </motion.div>

            {/* Dynamic List */}
            <motion.div
              variants={staggerItem}
              className="bg-white rounded-2xl p-8 border border-slate-200"
            >
              <h2 className="text-lg font-bold text-slate-900 mb-1">Dynamic List</h2>
              <p className="text-sm text-slate-500 mb-6">
                Add/remove items to test Assert Count, Assert Text, and Extract Variable on list items.
              </p>

              <div className="flex items-center gap-3 mb-4">
                <Button size="sm" onClick={handleAddItem} data-testid="add-item">
                  <Plus className="w-4 h-4" />
                  Add Item
                </Button>
                <span className="text-sm text-slate-500" data-testid="item-count">
                  {items.length} item{items.length !== 1 ? "s" : ""}
                </span>
              </div>

              {items.length === 0 ? (
                <div
                  className="py-8 text-center text-sm text-slate-400 border border-dashed border-slate-200 rounded-xl"
                  data-testid="empty-list"
                >
                  No items. Click &quot;Add Item&quot; to populate the list.
                </div>
              ) : (
                <div className="space-y-2" data-testid="item-list">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      data-testid="list-item"
                      data-item-id={item.id}
                      className="flex items-center justify-between px-4 py-3 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <div>
                        <span className="text-sm font-medium text-slate-800" data-testid="item-name">
                          {item.name}
                        </span>
                        <span className="ml-2 text-xs text-slate-400" data-testid="item-category">
                          {item.category}
                        </span>
                      </div>
                      <button
                        data-testid={`remove-item-${item.id}`}
                        onClick={() => handleRemoveItem(item.id)}
                        className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <Button
                variant="secondary"
                size="sm"
                onClick={() => setItems(initialItems)}
                data-testid="reset-items"
                className="mt-4"
              >
                Reset List
              </Button>
            </motion.div>

            {/* Text Extraction Targets */}
            <motion.div
              variants={staggerItem}
              className="bg-white rounded-2xl p-8 border border-slate-200"
            >
              <h2 className="text-lg font-bold text-slate-900 mb-1">Extraction Targets</h2>
              <p className="text-sm text-slate-500 mb-6">
                Static text values designed for Extract Variable and Assert Text testing.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="px-4 py-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-xs text-slate-400 block mb-1">Order ID</span>
                  <span className="text-sm font-mono font-semibold text-slate-800" data-testid="order-id">
                    ORD-2024-78432
                  </span>
                </div>
                <div className="px-4 py-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-xs text-slate-400 block mb-1">Total Price</span>
                  <span className="text-sm font-mono font-semibold text-slate-800" data-testid="total-price">
                    $149.99
                  </span>
                </div>
                <div className="px-4 py-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-xs text-slate-400 block mb-1">User Email</span>
                  <span className="text-sm font-mono font-semibold text-slate-800" data-testid="user-email">
                    testuser@lesstest.io
                  </span>
                </div>
                <div className="px-4 py-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-xs text-slate-400 block mb-1">Timestamp</span>
                  <span className="text-sm font-mono font-semibold text-slate-800" data-testid="timestamp">
                    2024-12-15T10:30:00Z
                  </span>
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
