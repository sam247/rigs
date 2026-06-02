import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import Blog from "@/pages/Blog";
import ConsumerUnitVsFuseBox from "@/pages/blog/ConsumerUnitVsFuseBox";

describe("Blog", () => {
  it("renders blog hub and links to first article", () => {
    render(
      <HelmetProvider>
        <MemoryRouter initialEntries={["/blog"]}>
          <Blog />
        </MemoryRouter>
      </HelmetProvider>,
    );

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Blog");
    const link = screen
      .getAllByRole("link", { name: /Consumer Unit vs Fuse Box/i })
      .find((a) => a.getAttribute("href") === "/blog/consumer-unit-vs-fuse-box");
    expect(link).toBeTruthy();
  });

  it("renders article, table, image, and internal links", () => {
    render(
      <HelmetProvider>
        <MemoryRouter initialEntries={["/blog/consumer-unit-vs-fuse-box"]}>
          <ConsumerUnitVsFuseBox />
        </MemoryRouter>
      </HelmetProvider>,
    );

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Consumer Unit vs Fuse Box: What’s the Difference?");
    expect(screen.getByRole("img", { name: /Modern consumer unit/i })).toHaveAttribute(
      "src",
      "/blog_images/consumer_unit_vs_fuse_box.jpg",
    );

    expect(screen.getByRole("table")).toBeInTheDocument();

    const emergencyLink = screen.getAllByRole("link", { name: /emergency electrician/i }).find((a) =>
      a.getAttribute("href")?.includes("/services/emergency-electrician"),
    );
    expect(emergencyLink).toBeTruthy();

    const consumerUnitUpgradeLink = screen
      .getAllByRole("link", { name: /consumer unit upgrade/i })
      .find((a) => a.getAttribute("href") === "/services/fuse-board-upgrades");
    expect(consumerUnitUpgradeLink).toBeTruthy();
  });
});
