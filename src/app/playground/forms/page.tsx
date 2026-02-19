"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle,
  Upload,
  Search,
} from "lucide-react";
import Link from "next/link";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { PageHeader } from "@/components/sections/page-header";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

export default function FormsPlayground() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    search: "",
    bio: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
  const [terms, setTerms] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [contactMethod, setContactMethod] = useState("");
  const [country, setCountry] = useState("");
  const [role, setRole] = useState("");
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ fullName: "", email: "", password: "", search: "", bio: "" });
    setSubmitted(false);
    setNewsletter(false);
    setTerms(false);
    setDarkMode(false);
    setContactMethod("");
    setCountry("");
    setRole("");
    setUploadedFile(null);
    setSearchResults([]);
  };

  const handleSearch = () => {
    const items = ["Red Sneakers", "Blue Jacket", "Green Hat", "Red Dress", "Blue Shoes"];
    const query = formData.search.toLowerCase();
    if (!query) {
      setSearchResults([]);
      return;
    }
    setSearchResults(items.filter((item) => item.toLowerCase().includes(query)));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setUploadedFile(file ? file.name : null);
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
            badge="Forms & Inputs"
            title="Form interactions playground"
            description="Text fields, checkboxes, radio buttons, dropdowns, file uploads, and keyboard-triggered actions. Every form tool has a target here."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 space-y-8"
          >
            {/* Registration Form */}
            <motion.div
              variants={staggerItem}
              className="bg-white rounded-2xl p-8 border border-slate-200"
            >
              <h2 className="text-lg font-bold text-slate-900 mb-1">Registration Form</h2>
              <p className="text-sm text-slate-500 mb-6">
                Test Send Text, Clear Input, Check/Uncheck, Select Option, and Press Key (Enter to submit).
              </p>

              {submitted ? (
                <div data-testid="form-success" className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2" data-testid="success-title">
                    Registration Successful
                  </h3>
                  <p className="text-slate-600 mb-1" data-testid="success-name">
                    Welcome, {formData.fullName || "User"}!
                  </p>
                  <p className="text-sm text-slate-500 mb-6" data-testid="success-email">
                    Confirmation sent to {formData.email || "your email"}
                  </p>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={handleReset}
                    data-testid="reset-form"
                  >
                    Reset Form
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} data-testid="registration-form">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        data-testid="input-fullname"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        data-testid="input-email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        data-testid="input-password"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        data-testid="select-country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-slate-700 bg-white"
                      >
                        <option value="">Select a country</option>
                        <option value="us">United States</option>
                        <option value="uk">United Kingdom</option>
                        <option value="ca">Canada</option>
                        <option value="au">Australia</option>
                        <option value="nz">New Zealand</option>
                        <option value="de">Germany</option>
                        <option value="fr">France</option>
                        <option value="jp">Japan</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Role
                      </label>
                      <select
                        id="role"
                        name="role"
                        data-testid="select-role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-slate-700 bg-white"
                      >
                        <option value="">Select a role</option>
                        <option value="developer">Developer</option>
                        <option value="qa">QA Engineer</option>
                        <option value="manager">Manager</option>
                        <option value="designer">Designer</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="bio" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Bio
                      </label>
                      <textarea
                        id="bio"
                        name="bio"
                        data-testid="textarea-bio"
                        placeholder="Tell us about yourself..."
                        rows={3}
                        value={formData.bio}
                        onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all placeholder:text-slate-400 resize-none"
                      />
                    </div>
                  </div>

                  {/* Checkboxes */}
                  <div className="mt-6 space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer" data-testid="checkbox-newsletter-label">
                      <input
                        type="checkbox"
                        id="newsletter"
                        data-testid="checkbox-newsletter"
                        checked={newsletter}
                        onChange={(e) => setNewsletter(e.target.checked)}
                        className="w-4 h-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                      />
                      <span className="text-sm text-slate-700">Subscribe to newsletter</span>
                    </label>

                    <label className="flex items-center gap-3 cursor-pointer" data-testid="checkbox-terms-label">
                      <input
                        type="checkbox"
                        id="terms"
                        data-testid="checkbox-terms"
                        checked={terms}
                        onChange={(e) => setTerms(e.target.checked)}
                        className="w-4 h-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                      />
                      <span className="text-sm text-slate-700">I agree to the terms and conditions</span>
                    </label>

                    <label className="flex items-center gap-3 cursor-pointer" data-testid="checkbox-darkmode-label">
                      <input
                        type="checkbox"
                        id="darkMode"
                        data-testid="checkbox-darkmode"
                        checked={darkMode}
                        onChange={(e) => setDarkMode(e.target.checked)}
                        className="w-4 h-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                      />
                      <span className="text-sm text-slate-700">Enable dark mode</span>
                    </label>
                  </div>

                  {/* Radio Buttons */}
                  <div className="mt-6">
                    <p className="text-sm font-medium text-slate-700 mb-2">Preferred contact method</p>
                    <div className="flex flex-wrap gap-4">
                      {["email", "phone", "sms"].map((method) => (
                        <label
                          key={method}
                          className="flex items-center gap-2 cursor-pointer"
                          data-testid={`radio-contact-${method}-label`}
                        >
                          <input
                            type="radio"
                            name="contactMethod"
                            value={method}
                            data-testid={`radio-contact-${method}`}
                            checked={contactMethod === method}
                            onChange={(e) => setContactMethod(e.target.value)}
                            className="w-4 h-4 border-slate-300 text-teal-600 focus:ring-teal-500"
                          />
                          <span className="text-sm text-slate-700 capitalize">{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex gap-3">
                    <Button
                      type="submit"
                      data-testid="submit-registration"
                      disabled={!terms}
                    >
                      Register
                    </Button>
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={handleReset}
                      data-testid="clear-form"
                    >
                      Clear All
                    </Button>
                  </div>

                  {!terms && (
                    <p className="mt-3 text-xs text-amber-600" data-testid="terms-warning">
                      You must agree to the terms to register.
                    </p>
                  )}
                </form>
              )}
            </motion.div>

            {/* Search with Keyboard */}
            <motion.div
              variants={staggerItem}
              className="bg-white rounded-2xl p-8 border border-slate-200"
            >
              <h2 className="text-lg font-bold text-slate-900 mb-1">Search</h2>
              <p className="text-sm text-slate-500 mb-6">
                Type a query and press Enter or click Search. Tests Send Text + Press Key (Enter).
              </p>

              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    data-testid="input-search"
                    placeholder='Try "red" or "blue"...'
                    value={formData.search}
                    onChange={(e) => setFormData({ ...formData, search: e.target.value })}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSearch();
                    }}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all placeholder:text-slate-400"
                  />
                </div>
                <Button onClick={handleSearch} data-testid="search-button">
                  Search
                </Button>
              </div>

              {searchResults.length > 0 && (
                <div className="mt-4" data-testid="search-results">
                  <p className="text-sm text-slate-600 mb-2" data-testid="search-results-count">
                    {searchResults.length} result{searchResults.length !== 1 ? "s" : ""} found
                  </p>
                  <ul className="space-y-2">
                    {searchResults.map((result) => (
                      <li
                        key={result}
                        className="px-4 py-2 bg-slate-50 rounded-lg text-sm text-slate-700 border border-slate-100"
                        data-testid="search-result-item"
                      >
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {formData.search && searchResults.length === 0 && (
                <p className="mt-4 text-sm text-slate-500" data-testid="no-results">
                  No results found for &quot;{formData.search}&quot;
                </p>
              )}
            </motion.div>

            {/* File Upload */}
            <motion.div
              variants={staggerItem}
              className="bg-white rounded-2xl p-8 border border-slate-200"
            >
              <h2 className="text-lg font-bold text-slate-900 mb-1">File Upload</h2>
              <p className="text-sm text-slate-500 mb-6">
                Test the File Upload tool. Accepts images and documents.
              </p>

              <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center hover:border-teal-300 transition-colors">
                <Upload className="w-8 h-8 text-slate-400 mx-auto mb-3" />
                <p className="text-sm text-slate-600 mb-3">
                  Drag a file here or click to browse
                </p>
                <input
                  type="file"
                  id="file-upload"
                  data-testid="file-upload"
                  accept="image/*,.pdf,.csv,.txt"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label htmlFor="file-upload">
                  <Button
                    type="button"
                    variant="secondary"
                    size="sm"
                    className="cursor-pointer"
                    onClick={() => document.getElementById("file-upload")?.click()}
                    data-testid="file-upload-button"
                  >
                    Choose File
                  </Button>
                </label>
              </div>

              {uploadedFile && (
                <div
                  className="mt-4 flex items-center gap-3 px-4 py-3 bg-emerald-50 border border-emerald-100 rounded-xl"
                  data-testid="file-upload-success"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm text-emerald-800" data-testid="uploaded-filename">
                    {uploadedFile}
                  </span>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
