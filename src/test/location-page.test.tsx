import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { describe, it, expect } from "vitest";
import LocationPage from "@/pages/electrician/LocationPage";

describe("Location page", () => {
  it("renders Electrician Tring page from the location template", () => {
    render(
      <HelmetProvider>
        <MemoryRouter initialEntries={["/electrician/tring"]}>
          <Routes>
            <Route path="/electrician/:slug" element={<LocationPage />} />
          </Routes>
        </MemoryRouter>
      </HelmetProvider>,
    );

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Electrician Tring");
    expect(screen.getByRole("heading", { name: /Electrical Services in Tring/i })).toBeInTheDocument();
    const blogLink = screen
      .getAllByRole("link", { name: /Consumer Unit vs Fuse Box/i })
      .find((a) => a.getAttribute("href") === "/blog/consumer-unit-vs-fuse-box");
    expect(blogLink).toBeTruthy();
    const emergencyLink = screen
      .getAllByRole("link", { name: /Emergency Electrician/i })
      .find((a) => a.getAttribute("href") === "/services/emergency-electrician");
    expect(emergencyLink).toBeTruthy();
  });
});
