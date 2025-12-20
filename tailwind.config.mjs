/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        whiteedgar: "#EDEDED",
        edgar: "#EDEDED1A",
        lavender: "#5A607F",
        violet: "#ACB2D4",
        fade: "#FFFFFF0F",
        commodore: "#234467",
        war: "#0F1F30",
        stone: "#C4C4C4",
        subterranean: "#203851",
        crystal: "#E6E9F4",
        peach: "#FFB5A6",
        whitefade: "#FFFFFF33",
        tangerine: "#F78124",
        lightgrey: "#ACB2D4CC",
        dead: "#3B3B3B",
        darkblue: "#1A2C42",
        moderate: "#3B3B3B33",
        partyparrot: "#8280FF",
        alienated: "#00D54F",
        ginger: "#F7A250",
        chelsea: "#88AE5D",
        brandeis: "#006EFF",
        deutzia: "#F7FBFE",
        sharp: "#2A3B52",
        scarlet: "#F91D0A",
        wisteria: "#D7DBEC",
        overlay: "rgba(35, 68, 103, 0.50)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "var(--color-commodore )",
          foreground: "hsl(var(--commodore -foreground))",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          foreground: "hsl(var(--secondary-foreground))",
        },
        quatanery: "var(--color-quatanery)",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
