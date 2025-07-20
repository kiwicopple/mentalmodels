"use client";

import { useEffect } from "react";
import { Button } from "./ui/button";

interface BottomNavigationProps {
  onNext: () => void;
  onPrevious: () => void;
  currentIndex: number;
  totalCount: number;
}

export function BottomNavigation({
  onNext,
  onPrevious,
  currentIndex,
  totalCount,
}: BottomNavigationProps) {
  // Add keyboard event listeners
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Only handle arrow keys if no input is focused
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          onPrevious();
          break;
        case "ArrowRight":
          event.preventDefault();
          onNext();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onNext, onPrevious]);

  return (
    <div className="sticky bottom-0 bg-background border-t mt-auto">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <Button
            onClick={onPrevious}
            variant="outline"
            size="sm"
            className="flex items-center gap-1"
          >
            <span className="hidden sm:inline text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
              ←
            </span>
            <span>Back</span>
          </Button>

          <span className="text-sm text-muted-foreground">
            {currentIndex + 1} / {totalCount}
          </span>

          <Button
            onClick={onNext}
            size="sm"
            className="flex items-center gap-1"
          >
            <span>Next</span>
            <span className="hidden sm:inline text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
              →
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
