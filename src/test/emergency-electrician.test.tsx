import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import EmergencyElectricianHertfordshire from "@/pages/services/EmergencyElectricianHertfordshire";

describe("Emergency electrician landing page", () => {
  it("renders key sections and related service links", () => {
    render(
      <HelmetProvider>
        <MemoryRouter initialEntries={["/services/emergency-electrician"]}>
          <EmergencyElectricianHertfordshire />
        </MemoryRouter>
      </HelmetProvider>,
    );

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Emergency Electrician Hertfordshire");
    expect(screen.getByRole("heading", { name: "Related Electrical Services" })).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /Domestic Services Hub/i })).toHaveAttribute("href", "/domestic");

    const expectLink = (name: RegExp, href: string) => {
      const el = screen.getAllByRole("link", { name }).find((a) => a.getAttribute("href") === href);
      expect(el).toBeTruthy();
      expect(el).toHaveAttribute("href", href);
    };

    expectLink(/Fuse Board Upgrades/i, "/domestic#fuse-board-upgrades");
    expectLink(/House Rewiring/i, "/domestic#house-rewiring");
    expectLink(/EICR Certificates/i, "/domestic#eicr-certificates");
    expectLink(/Consumer Unit Upgrades/i, "/domestic#consumer-unit-upgrades");
  });
});
