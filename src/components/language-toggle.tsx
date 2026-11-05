'use client';

import { useLanguage } from '../context/language-context';
import { cn } from '../lib/utils';

interface LanguageToggleProps {
  className?: string;
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const { language, toggleLanguage } = useLanguage();
  const isEnglish = language === 'en';

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={isEnglish ? 'Switch to Swahili' : 'Switch to English'}
      title={isEnglish ? 'Switch to Swahili' : 'Switch to English'}
      className={cn(
        'relative inline-flex items-center rounded-full border border-border bg-muted p-1 shadow-sm transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50',
        className
      )}
    >
      {/* Sliding thumb */}
      <span
        aria-hidden
        className={cn(
          'pointer-events-none absolute top-1 left-1 h-7 w-9 rounded-full bg-background shadow transition-transform duration-200 ease-out',
          isEnglish ? 'translate-x-full' : 'translate-x-0'
        )}
      />
      <span
        aria-hidden
        className={cn(
          'relative z-10 flex h-7 w-9 items-center justify-center text-base leading-none transition-colors',
          isEnglish ? 'text-muted-foreground' : 'text-foreground'
        )}
      >
        🇹🇿
      </span>
      <span
        aria-hidden
        className={cn(
          'relative z-10 flex h-7 w-9 items-center justify-center text-base leading-none transition-colors',
          isEnglish ? 'text-foreground' : 'text-muted-foreground'
        )}
      >
        🇬🇧
      </span>
    </button>
  );
}
