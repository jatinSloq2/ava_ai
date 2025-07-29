"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-background text-foreground border-t">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Logo & Description */}
        <div>
          <Link href="/" className="text-3xl font-extrabold tracking-tight">
            Resu<span className="text-blue-500">AI</span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Resume Builder & AI-Powered Analyzer.<br />
            Create smarter resumes, faster.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-blue-500 transition">Home</Link></li>
            <li><Link href="/dashboard" className="hover:text-blue-500 transition">Dashboard</Link></li>
            <li><Link href="/contact" className="hover:text-blue-500 transition">Contact Us</Link></li>
            <li><Link href="/templates" className="hover:text-blue-500 transition">Templates</Link></li>
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-blue-500 transition">About Us</Link></li>
            <li><Link href="/blog" className="hover:text-blue-500 transition">Blog</Link></li>
            <li><Link href="/careers" className="hover:text-blue-500 transition">Careers</Link></li>
            <li><Link href="/faq" className="hover:text-blue-500 transition">FAQs</Link></li>
          </ul>
        </div>

        {/* Legal & Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy" className="hover:text-blue-500 transition">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-blue-500 transition">Terms of Service</Link></li>
            <li><a href="mailto:support@resuai.com" className="hover:text-blue-500 transition">support@resuai.com</a></li>
            <li><a href="https://twitter.com/resuai" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">Twitter</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t text-center text-xs text-muted-foreground py-6">
        © {new Date().getFullYear()} ResuAI. All rights reserved.
      </div>
    </footer>
  );
}
