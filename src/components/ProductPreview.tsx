import React, { useState } from 'react';
import { Terminal, Activity, ShieldCheck, Cpu, Code2 } from 'lucide-react';

export const ProductPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'terminal' | 'analytics'>('overview');

  return (
    <section className="relative px-4 sm:px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        {/* Subtle decorative glow */}
        <div className="absolute inset-x-0 -top-8 h-32 bg-blue-500/20 blur-3xl pointer-events-none -z-10" />

        {/* Faux Browser Window Container */}
        <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 shadow-2xl shadow-blue-500/5 backdrop-blur-xl overflow-hidden transition-all">
          {/* Browser Header Bar */}
          <div className="h-11 px-4 border-b border-slate-200/80 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-950/70 flex items-center justify-between text-xs">
            {/* Mac-style Window Controls */}
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>

            {/* Address / Tabs */}
            <div className="flex items-center space-x-1 sm:space-x-2 bg-slate-200/60 dark:bg-slate-900 px-3 py-1 rounded-md text-[11px] text-slate-600 dark:text-slate-400 font-mono">
              <span>app.launchpulse.dev/preview</span>
            </div>

            {/* Live Indicator */}
            <div className="flex items-center space-x-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="hidden sm:inline">Production Ready</span>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center border-b border-slate-200/60 dark:border-slate-800/80 px-4 pt-2 text-xs font-medium space-x-4">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-2.5 transition-colors border-b-2 flex items-center space-x-1.5 ${
                activeTab === 'overview'
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400 font-semibold'
                  : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Workspace Overview</span>
            </button>
            <button
              onClick={() => setActiveTab('terminal')}
              className={`pb-2.5 transition-colors border-b-2 flex items-center space-x-1.5 ${
                activeTab === 'terminal'
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400 font-semibold'
                  : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Terminal Engine</span>
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`pb-2.5 transition-colors border-b-2 flex items-center space-x-1.5 ${
                activeTab === 'analytics'
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400 font-semibold'
                  : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Telemetry & Health</span>
            </button>
          </div>

          {/* Interactive Screen Content */}
          <div className="p-5 sm:p-7 min-h-[340px] flex flex-col justify-between">
            {activeTab === 'overview' && (
              <div className="space-y-5 animate-fade-in">
                {/* Metric cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl border border-slate-200/70 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                    <span className="text-[11px] font-medium text-slate-500">Global Uptime</span>
                    <div className="text-xl font-bold text-slate-900 dark:text-white mt-1">99.998%</div>
                    <span className="text-[10px] text-emerald-500 font-medium">↑ 0.02% vs last cycle</span>
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200/70 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                    <span className="text-[11px] font-medium text-slate-500">P99 Response Time</span>
                    <div className="text-xl font-bold text-slate-900 dark:text-white mt-1">14ms</div>
                    <span className="text-[10px] text-blue-500 font-medium">Edge cached worldwide</span>
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200/70 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                    <span className="text-[11px] font-medium text-slate-500">Automated Tests</span>
                    <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">324 / 324 Passed</div>
                    <span className="text-[10px] text-slate-400">Zero regressions found</span>
                  </div>
                </div>

                {/* Pipeline visual row */}
                <div className="p-4 rounded-xl border border-slate-200/70 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-950/40">
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                      Active Continuous Deployment Stream
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">commit #4f89d2a</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-600 to-emerald-500 h-full w-[88%] rounded-full animate-pulse" />
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-500 mt-2">
                    <span>Build & Unit Tests: Complete</span>
                    <span className="text-blue-500 font-medium">Deploying to Edge (88%)...</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'terminal' && (
              <div className="font-mono text-xs bg-slate-950 text-slate-200 p-4 rounded-xl border border-slate-800 space-y-2 animate-fade-in shadow-inner">
                <div className="text-slate-500">// Booting isolated environment...</div>
                <div className="text-emerald-400">$ launchpulse init --template modern-stack</div>
                <div className="text-slate-300">✔ Cloned production repository in 420ms</div>
                <div className="text-slate-300">✔ Auto-configured PostgreSQL and Redis instances</div>
                <div className="text-slate-300">✔ Synchronized environment secrets from Vault</div>
                <div className="text-blue-400">⚡ Server listening at https://workspace-alpha.launchpulse.dev:3000</div>
                <div className="flex items-center text-slate-400 pt-2">
                  <span className="text-emerald-400 mr-2">&gt;</span>
                  <span className="w-2 h-4 bg-emerald-400 animate-pulse" />
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="space-y-4 animate-fade-in">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Throughput (Requests / Minute)</span>
                  <span className="text-blue-500 font-semibold">14,280 RPM</span>
                </div>
                {/* Visual faux bar chart */}
                <div className="h-28 flex items-end justify-between gap-1.5 pt-4">
                  {[40, 65, 55, 80, 70, 95, 60, 85, 90, 75, 100, 88].map((val, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1 group">
                      <div
                        style={{ height: `${val}%` }}
                        className="w-full bg-blue-500/30 group-hover:bg-blue-500 rounded-t transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>00:00</span>
                  <span>06:00</span>
                  <span>12:00</span>
                  <span>18:00</span>
                  <span>Live</span>
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800/50 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
              <span className="flex items-center gap-1">
                <Code2 className="w-3.5 h-3.5 text-blue-500" />
                <span>Fully typed TypeScript & Tailwind integration</span>
              </span>
              <span className="font-mono text-slate-400">v1.0.0-rc2</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
