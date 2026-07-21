import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      typography: ({ theme }: { theme: (path: string) => string | string[] }) => {
        const headingFont = Array.isArray(theme("fontFamily.heading")) ? (theme("fontFamily.heading") as string[]).join(",") : (theme("fontFamily.heading") as string);
        return {
          rigs: {
            css: {
              "--tw-prose-body": theme("colors.foreground") as string,
              "--tw-prose-headings": theme("colors.foreground") as string,
              "--tw-prose-lead": theme("colors.muted.foreground") as string,
              "--tw-prose-links": theme("colors.primary.DEFAULT") as string,
              "--tw-prose-bold": theme("colors.foreground") as string,
              "--tw-prose-counters": theme("colors.muted.foreground") as string,
              "--tw-prose-bullets": theme("colors.muted.foreground") as string,
              "--tw-prose-hr": theme("colors.border") as string,
              "--tw-prose-quotes": theme("colors.foreground") as string,
              "--tw-prose-quote-borders": theme("colors.border") as string,
              "--tw-prose-captions": theme("colors.muted.foreground") as string,
              "--tw-prose-code": theme("colors.foreground") as string,
              "--tw-prose-pre-code": theme("colors.foreground") as string,
              "--tw-prose-pre-bg": theme("colors.muted.DEFAULT") as string,
              "--tw-prose-th-borders": theme("colors.border") as string,
              "--tw-prose-td-borders": theme("colors.border") as string,
              h2: { fontFamily: headingFont, fontWeight: "800" },
              h3: { fontFamily: headingFont, fontWeight: "800" },
              h4: { fontFamily: headingFont, fontWeight: "800" },
              a: { fontWeight: "600", textDecoration: "none" },
              "a:hover": { textDecoration: "underline" },
              strong: { fontWeight: "700" },
              code: { fontWeight: "600" },
              "ul > li::marker": { color: theme("colors.muted.foreground") as string },
              "ol > li::marker": { color: theme("colors.muted.foreground") as string },
            },
          },
        };
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        rigs: {
          dark: "hsl(var(--rigs-dark))",
          light: "hsl(var(--rigs-light))",
          teal: "hsl(var(--rigs-teal))",
          navy: "hsl(var(--rigs-navy))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [tailwindcssAnimate, typography],
} satisfies Config;
