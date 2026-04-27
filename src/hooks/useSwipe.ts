import { useState } from "react";
import type { TouchEvent } from "react";

const SWIPE_THRESHOLD = 50;

interface SwipeHandlers {
  onTouchStart: (e: TouchEvent) => void;
  onTouchEnd: (e: TouchEvent) => void;
}

export function useSwipe(
  onSwipeLeft: () => void,
  onSwipeRight: () => void
): SwipeHandlers {
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const onTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (e: TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      diff > 0 ? onSwipeLeft() : onSwipeRight();
    }
    setTouchStart(null);
  };

  return { onTouchStart, onTouchEnd };
}
