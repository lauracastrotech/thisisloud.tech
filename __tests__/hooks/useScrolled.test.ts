import { renderHook, act } from "@testing-library/react";
import { useScrolled } from "@/hooks/useScrolled";

describe("useScrolled", () => {
  beforeEach(() => {
    Object.defineProperty(window, "scrollY", { value: 0, writable: true });
  });

  it("returns false on initial render before any scrolling", () => {
    const { result } = renderHook(() => useScrolled(60));
    expect(result.current).toBe(false);
  });

  it("returns true when scrolled past threshold", () => {
    const { result } = renderHook(() => useScrolled(60));

    act(() => {
      Object.defineProperty(window, "scrollY", { value: 100, writable: true });
      window.dispatchEvent(new Event("scroll"));
    });

    expect(result.current).toBe(true);
  });

  it("returns false when scrolled back above threshold", () => {
    const { result } = renderHook(() => useScrolled(60));

    act(() => {
      Object.defineProperty(window, "scrollY", { value: 100, writable: true });
      window.dispatchEvent(new Event("scroll"));
    });

    act(() => {
      Object.defineProperty(window, "scrollY", { value: 30, writable: true });
      window.dispatchEvent(new Event("scroll"));
    });

    expect(result.current).toBe(false);
  });

  it("respects a custom threshold", () => {
    const { result } = renderHook(() => useScrolled(200));

    act(() => {
      Object.defineProperty(window, "scrollY", { value: 100, writable: true });
      window.dispatchEvent(new Event("scroll"));
    });

    expect(result.current).toBe(false);
  });
});
