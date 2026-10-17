import React, { useState, useEffect } from 'react';
import { Mail, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface EmailFormProps {
  id?: string;
}

export const EmailForm: React.FC<EmailFormProps> = ({ id = "email-form" }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [queuePosition, setQueuePosition] = useState<number | null>(null);

  useEffect(() => {
    // Check if user already registered on this device
    const saved = localStorage.getItem('waitlist_registered');
    if (saved) {
      const data = JSON.parse(saved);
      setEmail(data.email || '');
      setQueuePosition(data.position || 1241);
      setStatus('success');
    }
  }, []);

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#3b82f6', '#6366f1', '#10b981', '#f59e0b'],
      });
    } catch {
      // Graceful fallback if confetti fails
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your email address.');
      return;
    }
    if (!emailRegex.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');

    // Simulate API submission delay (replace with your Formspree/Resend/Supabase endpoint)
    setTimeout(() => {
      const randomPosition = Math.floor(1200 + Math.random() * 50);
      setQueuePosition(randomPosition);
      setStatus('success');
      triggerConfetti();

      // Save to localStorage
      localStorage.setItem(
        'waitlist_registered',
        JSON.stringify({ email, position: randomPosition, date: new Date().toISOString() })
      );
    }, 800);
  };

  const handleReset = () => {
    localStorage.removeItem('waitlist_registered');
    setEmail('');
    setStatus('idle');
  };

  if (status === 'success') {
    return (
      <div className="w-full max-w-md mx-auto p-4 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-left animate-fade-in shadow-sm">
        <div className="flex items-start space-x-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <h4 className="text-sm font-semibold text-emerald-900 dark:text-emerald-200">
              You're in! Welcome to the priority queue.
            </h4>
            <p className="text-xs text-emerald-700 dark:text-emerald-300 mt-1">
              You are <span className="font-bold">#{queuePosition}</span> in line. We just reserved your early-bird perks for <span className="font-medium underline">{email}</span>.
            </p>
            <button
              onClick={handleReset}
              className="text-[11px] text-emerald-600 dark:text-emerald-400 hover:underline mt-2 inline-block"
            >
              Register with another email
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form id={id} onSubmit={handleSubmit} className="w-full max-w-md mx-auto" noValidate>
      <div className="flex flex-col sm:flex-row gap-2.5 p-1.5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-lg shadow-slate-200/50 dark:shadow-black/40 focus-within:ring-2 focus-within:ring-blue-500/50 transition-all">
        <div className="relative flex-1 flex items-center">
          <Mail className="absolute left-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === 'error') setStatus('idle');
            }}
            placeholder="Enter your work email..."
            className="w-full pl-10 pr-3 py-2.5 text-sm bg-transparent text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none"
            disabled={status === 'loading'}
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center justify-center space-x-1.5 px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 active:scale-95 disabled:opacity-60 rounded-xl transition-all shadow-md shadow-blue-600/20"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Joining...</span>
            </>
          ) : (
            <>
              <span>Claim Invite</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </div>

      {status === 'error' && (
        <p className="text-xs text-rose-500 mt-2 text-left sm:text-center font-medium animate-fade-in">
          {errorMessage}
        </p>
      )}
    </form>
  );
};
