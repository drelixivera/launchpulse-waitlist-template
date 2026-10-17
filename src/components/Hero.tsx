import { Check, Users, Zap, ShieldCheck, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/site';
import { EmailForm } from './EmailForm';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-24 md:pt-32 md:pb-36 overflow-hidden">
      {/* 1. Engineering Grid Pattern with smooth radial fade */}
      <div className="absolute inset-0 bg-grid-pattern mask-radial-faded pointer-events-none -z-10" />

      {/* 2. Raycast-style Top Spotlight & Aurora Beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-500/25 via-indigo-500/15 to-transparent blur-[110px] pointer-events-none -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-28 bg-sky-400/20 blur-[70px] pointer-events-none -z-10" />

      {/* 3. Luminous Top Border Accent Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-75" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Floating Badge Left (Visible on desktop) */}
        <div className="hidden lg:flex items-center space-x-3 absolute -left-4 xl:left-0 top-16 p-3 rounded-2xl backdrop-blur-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-blue-500/5 animate-float-slow select-none">
          <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 flex items-center justify-center text-emerald-500">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Edge Network</span>
            </div>
            <div className="text-xs font-bold text-slate-800 dark:text-slate-200">12ms Global P99</div>
          </div>
        </div>

        {/* Floating Badge Right (Visible on desktop) */}
        <div className="hidden lg:flex items-center space-x-3 absolute -right-4 xl:right-0 top-24 p-3 rounded-2xl backdrop-blur-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-indigo-500/5 animate-float-reverse select-none">
          <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/80 flex items-center justify-center text-blue-500">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Encryption</div>
            <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Zero-Knowledge Vault</div>
          </div>
        </div>

        {/* Center Content */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Shimmering Top Pill Badge */}
          <div className="inline-flex items-center group relative overflow-hidden rounded-full p-[1px] mb-8 shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-400 animate-shimmer" />
            <div className="relative inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-200 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
              <span className="font-semibold text-blue-600 dark:text-blue-400">{siteConfig.badge.highlight}:</span>
              <span>{siteConfig.badge.text}</span>
              <ArrowRight className="w-3 h-3 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          {/* High-Impact Hero Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
            {siteConfig.headline.regular}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-400 dark:from-blue-400 dark:via-indigo-300 dark:to-sky-300">
              {siteConfig.headline.gradient}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            {siteConfig.subheadline}
          </p>

          {/* Email Capture Form */}
          <div className="mt-10">
            <EmailForm id="hero-email-form" />
          </div>

          {/* Live Activity Micro-Banner */}
          <div className="mt-4 flex items-center justify-center space-x-2 text-[11px] text-slate-500 dark:text-slate-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>26 founders reserved beta access in the last 3 hours</span>
          </div>

          {/* Perks Checklist */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-600 dark:text-slate-400 font-medium">
            {siteConfig.perks.map((perk, i) => (
              <div key={i} className="flex items-center space-x-1.5">
                <div className="w-4 h-4 rounded-full bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <span>{perk}</span>
              </div>
            ))}
          </div>

          {/* Social Proof */}
          <div className="mt-10 pt-8 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <div className="flex -space-x-2.5 overflow-hidden">
              {siteConfig.stats.avatars.map((url, index) => (
                <img
                  key={index}
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover shadow-sm"
                  src={url}
                  alt="Early user avatar"
                />
              ))}
            </div>
            <div className="flex items-center space-x-1.5 text-xs text-slate-600 dark:text-slate-400">
              <Users className="w-4 h-4 text-slate-400" />
              <span>
                <strong className="font-semibold text-slate-900 dark:text-white">{siteConfig.stats.count}</strong>{' '}
                {siteConfig.stats.label}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
