"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MousePointerClick,
  Copy,
  Trash2,
  Edit,
  MoreHorizontal,
  GripVertical,
  Info,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { PageHeader } from "@/components/sections/page-header";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function ActionsPlayground() {
  const [clickCount, setClickCount] = useState(0);
  const [doubleClickText, setDoubleClickText] = useState("Double-click me to edit");
  const [isEditing, setIsEditing] = useState(false);
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null);
  const [contextAction, setContextAction] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dragItems, setDragItems] = useState(["Item A", "Item B", "Item C", "Item D", "Item E"]);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const editInputRef = useRef<HTMLInputElement>(null);

  const handleDoubleClick = () => {
    setIsEditing(true);
    setTimeout(() => editInputRef.current?.focus(), 0);
  };

  const handleEditComplete = () => {
    setIsEditing(false);
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY });
    setContextAction(null);
  };

  const handleContextAction = (action: string) => {
    setContextAction(action);
    setContextMenu(null);
  };

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    setDragOverIndex(index);
  };

  const handleDrop = (targetIndex: number) => {
    if (draggedIndex === null) return;
    const newItems = [...dragItems];
    const [removed] = newItems.splice(draggedIndex, 1);
    newItems.splice(targetIndex, 0, removed);
    setDragItems(newItems);
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  return (
    <div
      className="min-h-screen bg-slate-50 text-slate-900 selection:bg-teal-100"
      onClick={() => {
        setContextMenu(null);
        setDropdownOpen(false);
      }}
    >
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
            badge="Mouse & Actions"
            title="Click, hover, drag & scroll"
            description="Interactive targets for every mouse-based LessTest tool. Click counters, double-click editing, right-click context menus, hover reveals, drag-and-drop lists, and scroll targets."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 space-y-8"
          >
            {/* Click Counter */}
            <motion.div
              variants={staggerItem}
              className="bg-white rounded-2xl p-8 border border-slate-200"
            >
              <h2 className="text-lg font-bold text-slate-900 mb-1">Click</h2>
              <p className="text-sm text-slate-500 mb-6">
                Click the button and assert the counter value with Assert Text.
              </p>

              <div className="flex items-center gap-6">
                <button
                  data-testid="click-counter-button"
                  onClick={() => setClickCount((c) => c + 1)}
                  className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 active:scale-95 transition-all shadow-sm shadow-teal-200"
                >
                  <MousePointerClick className="w-5 h-5 inline mr-2" />
                  Click me
                </button>
                <div className="text-center">
                  <span className="text-3xl font-bold text-slate-900" data-testid="click-count">
                    {clickCount}
                  </span>
                  <p className="text-xs text-slate-500 mt-1">clicks</p>
                </div>
                <button
                  data-testid="click-counter-reset"
                  onClick={() => setClickCount(0)}
                  className="px-4 py-2 text-sm text-slate-500 hover:text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50 transition-all"
                >
                  Reset
                </button>
              </div>
            </motion.div>

            {/* Double Click */}
            <motion.div
              variants={staggerItem}
              className="bg-white rounded-2xl p-8 border border-slate-200"
            >
              <h2 className="text-lg font-bold text-slate-900 mb-1">Double Click</h2>
              <p className="text-sm text-slate-500 mb-6">
                Double-click the text below to enter edit mode, type new text, then press Enter.
              </p>

              {isEditing ? (
                <input
                  ref={editInputRef}
                  type="text"
                  data-testid="doubleclick-input"
                  value={doubleClickText}
                  onChange={(e) => setDoubleClickText(e.target.value)}
                  onBlur={handleEditComplete}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleEditComplete();
                  }}
                  className="px-4 py-3 rounded-xl border-2 border-teal-500 text-lg font-medium text-slate-900 focus:outline-none w-full max-w-md"
                />
              ) : (
                <div
                  data-testid="doubleclick-target"
                  onDoubleClick={handleDoubleClick}
                  className="inline-flex items-center gap-3 px-6 py-4 rounded-xl border-2 border-dashed border-slate-300 cursor-pointer hover:border-sky-300 hover:bg-sky-50/50 transition-all"
                >
                  <Edit className="w-5 h-5 text-slate-400" />
                  <span className="text-lg font-medium text-slate-700" data-testid="doubleclick-text">
                    {doubleClickText}
                  </span>
                </div>
              )}
            </motion.div>

            {/* Right Click */}
            <motion.div
              variants={staggerItem}
              className="bg-white rounded-2xl p-8 border border-slate-200"
            >
              <h2 className="text-lg font-bold text-slate-900 mb-1">Right Click</h2>
              <p className="text-sm text-slate-500 mb-6">
                Right-click anywhere in the box below to open a custom context menu.
              </p>

              <div
                data-testid="rightclick-target"
                onContextMenu={handleContextMenu}
                className="relative h-40 rounded-xl border-2 border-dashed border-slate-300 flex items-center justify-center cursor-context-menu hover:border-rose-300 hover:bg-rose-50/30 transition-all"
              >
                <p className="text-slate-400 text-sm">Right-click this area</p>

                {contextAction && (
                  <div
                    className="absolute bottom-4 left-4 px-3 py-1.5 bg-slate-900 text-white text-xs rounded-lg"
                    data-testid="context-action-result"
                  >
                    Action: {contextAction}
                  </div>
                )}
              </div>

              {contextMenu && (
                <div
                  className="fixed z-50 bg-white rounded-xl shadow-xl border border-slate-200 py-1.5 min-w-[160px]"
                  style={{ top: contextMenu.y, left: contextMenu.x }}
                  data-testid="context-menu"
                >
                  {[
                    { icon: Copy, label: "Copy", id: "copy" },
                    { icon: Edit, label: "Edit", id: "edit" },
                    { icon: Trash2, label: "Delete", id: "delete" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      data-testid={`context-menu-${item.id}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleContextAction(item.label);
                      }}
                      className="w-full flex items-center gap-2.5 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      <item.icon className="w-4 h-4 text-slate-400" />
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Hover */}
            <motion.div
              variants={staggerItem}
              className="bg-white rounded-2xl p-8 border border-slate-200"
            >
              <h2 className="text-lg font-bold text-slate-900 mb-1">Hover</h2>
              <p className="text-sm text-slate-500 mb-6">
                Hover over cards to reveal hidden content. Test Hover + Assert Visible.
              </p>

              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { id: "tooltip", label: "Tooltip", detail: "This is a helpful tooltip!" },
                  { id: "preview", label: "Preview", detail: "Hidden preview content revealed on hover." },
                  { id: "actions", label: "Actions", detail: "Edit • Delete • Share" },
                ].map((card) => (
                  <div
                    key={card.id}
                    data-testid={`hover-card-${card.id}`}
                    onMouseEnter={() => setHoveredCard(card.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="relative px-5 py-4 rounded-xl border border-slate-200 hover:border-amber-200 hover:shadow-md transition-all cursor-default"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Info className="w-4 h-4 text-slate-400" />
                      <span className="font-medium text-sm text-slate-800">{card.label}</span>
                    </div>
                    <p className="text-xs text-slate-500">Hover to reveal</p>

                    {hoveredCard === card.id && (
                      <div
                        className="mt-3 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg"
                        data-testid={`hover-content-${card.id}`}
                      >
                        {card.detail}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Hover Dropdown */}
              <div className="mt-6">
                <p className="text-sm text-slate-600 mb-3">Hover dropdown menu:</p>
                <div
                  className="relative inline-block"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    data-testid="hover-dropdown-trigger"
                    className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all"
                  >
                    <MoreHorizontal className="w-4 h-4" />
                    More Options
                    <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  {dropdownOpen && (
                    <div
                      className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-lg border border-slate-200 py-1.5 min-w-[180px] z-10"
                      data-testid="hover-dropdown-menu"
                    >
                      {["Profile", "Settings", "Help", "Log Out"].map((item) => (
                        <button
                          key={item}
                          data-testid={`hover-dropdown-${item.toLowerCase().replace(" ", "-")}`}
                          className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Drag & Drop */}
            <motion.div
              variants={staggerItem}
              className="bg-white rounded-2xl p-8 border border-slate-200"
            >
              <h2 className="text-lg font-bold text-slate-900 mb-1">Drag & Drop</h2>
              <p className="text-sm text-slate-500 mb-6">
                Reorder items by dragging. Test with the Drag & Drop tool using source and target selectors.
              </p>

              <div className="max-w-sm space-y-2" data-testid="drag-list">
                {dragItems.map((item, index) => (
                  <div
                    key={item}
                    draggable
                    data-testid={`drag-item-${index}`}
                    data-value={item}
                    onDragStart={() => handleDragStart(index)}
                    onDragOver={(e) => handleDragOver(e, index)}
                    onDrop={() => handleDrop(index)}
                    onDragEnd={handleDragEnd}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-sm font-medium transition-all cursor-grab active:cursor-grabbing ${
                      dragOverIndex === index
                        ? "border-teal-400 bg-teal-50"
                        : draggedIndex === index
                          ? "border-slate-300 bg-slate-100 opacity-50"
                          : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <GripVertical className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    <span className="text-slate-700" data-testid={`drag-item-text-${index}`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs text-slate-500" data-testid="drag-order">
                Current order: {dragItems.join(", ")}
              </p>
            </motion.div>

            {/* Scroll Targets */}
            <motion.div
              variants={staggerItem}
              className="bg-white rounded-2xl p-8 border border-slate-200"
            >
              <h2 className="text-lg font-bold text-slate-900 mb-1">Scroll</h2>
              <p className="text-sm text-slate-500 mb-6">
                A scrollable container with anchor elements. Test Scroll to element, top, and bottom.
              </p>

              <div
                className="h-64 overflow-y-auto rounded-xl border border-slate-200 p-4"
                data-testid="scroll-container"
              >
                <div id="scroll-top" data-testid="scroll-anchor-top" className="mb-4 px-3 py-2 bg-teal-50 border border-teal-100 rounded-lg text-sm text-teal-700 font-medium">
                  Top of scrollable area
                </div>

                {Array.from({ length: 20 }, (_, i) => (
                  <div
                    key={i}
                    data-testid={`scroll-row-${i}`}
                    className="px-3 py-2 text-sm text-slate-600 border-b border-slate-100 last:border-0"
                  >
                    Scrollable row {i + 1}
                  </div>
                ))}

                <div id="scroll-middle" data-testid="scroll-anchor-middle" className="my-4 px-3 py-2 bg-amber-50 border border-amber-100 rounded-lg text-sm text-amber-700 font-medium">
                  Middle anchor point
                </div>

                {Array.from({ length: 20 }, (_, i) => (
                  <div
                    key={i + 20}
                    data-testid={`scroll-row-${i + 20}`}
                    className="px-3 py-2 text-sm text-slate-600 border-b border-slate-100 last:border-0"
                  >
                    Scrollable row {i + 21}
                  </div>
                ))}

                <div id="scroll-bottom" data-testid="scroll-anchor-bottom" className="mt-4 px-3 py-2 bg-rose-50 border border-rose-100 rounded-lg text-sm text-rose-700 font-medium">
                  Bottom of scrollable area
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
