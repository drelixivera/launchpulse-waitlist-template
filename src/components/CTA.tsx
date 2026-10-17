import React from 'react';
import { Sparkles } from 'lucide-react';
import { EmailForm } from './EmailForm';

export const CTA: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 relative border-t border-slate-200/50 dark:border-slate-800/60 overflow-hidden">
      {/* Background ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/20 dark:to-transparent pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-blue-500" />
          <span>Limited Spots Remaining</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
          Ready to supercharge your engineering workflow?
        </h2>

        <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
          Join the priority list today. The first 500 developers receive a complimentary 6-month Pro subscription.
        </p>

        <div className="mt-8">
          <EmailForm id="bottom-email-form" />
        </div>
      </div>
    </section>
  );
};
