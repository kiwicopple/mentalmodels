"use client";

import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  return (
    <div className="sticky bottom-0 bg-background border-t mt-auto">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <Button onClick={onPrevious} variant="outline" size="sm">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back
          </Button>

          <span className="text-sm text-muted-foreground">
            {currentIndex + 1} / {totalCount}
          </span>

          <Button onClick={onNext} size="sm">
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}
