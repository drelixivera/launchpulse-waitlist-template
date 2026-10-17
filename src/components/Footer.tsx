import React from 'react';
import { Sparkles } from 'lucide-react';
import { siteConfig } from '../config/site';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-200/60 dark:border-slate-800/80 bg-white/40 dark:bg-slate-950/40 text-xs text-slate-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center space-x-2">
          <div className="h-6 w-6 rounded-lg bg-blue-600 flex items-center justify-center text-white">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <span className="font-semibold text-slate-800 dark:text-slate-200">
            {siteConfig.name}
          </span>
        </div>

        {/* Copyright */}
        <p className="text-center sm:text-left">
          {siteConfig.footer.copyright}
        </p>

        {/* Links */}
        <div className="flex items-center space-x-5">
          {siteConfig.footer.links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
