import "@testing-library/jest-dom";
import { vi } from "vitest";

vi.mock("next/link", async () => {
  const React = await import("react");
  return {
    __esModule: true,
    default: ({ href, children, ...props }: any) =>
      React.createElement("a", { href: typeof href === "string" ? href : href?.toString?.(), ...props }, children),
  };
});

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(""),
  useParams: () => ({}),
}));

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});

class IntersectionObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  value: IntersectionObserverMock,
});

Object.defineProperty(globalThis, "IntersectionObserver", {
  writable: true,
  value: IntersectionObserverMock,
});
