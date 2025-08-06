import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "#F37F2C",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#10202F",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
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
        bogo: {
          orange: {
            50: "#FFF3E6",
            100: "#FFE0BF",
            300: "#FFB066",
            500: "#F37F2C",
            600: "#DB6F22",
            800: "#A94F12",
            900:"#FF5707",
            lightTransparent: "rgba(243, 127, 44, 0.15)"
          },
          dark: {
            50: "#DDE3E8",
            100: "#B8C4CD",
            300: "#5C6B7B",
            500: "#10202F",
            600: "#0D1A27",
            800: "#09131F",
          },
        },
      },

      backgroundImage: {
        "bogo-gradient":
          "linear-gradient(90deg, hsla(25, 100%, 50%, 1) 0%, hsla(209, 49%, 12%, 1) 100%)",
          "bogo-gradient-2":"linear-gradient(90deg, hsla(17, 95%, 50%, 1) 0%, hsla(42, 94%, 57%, 1) 100%)",
          "bogo-gradient-4": "linear-gradient(90deg, hsla(14, 89%, 46%, 1) 0%, hsla(37, 89%, 52%, 1) 100%)",
          "bogo-gradient-3":"linear-gradient(90deg, hsla(14, 89%, 46%, 1) 0%, hsla(26, 100%, 50%, 1) 72%, hsla(27, 100%, 45%, 1) 100%)",
          "bogo-gradient-5":"linear-gradient(90deg, hsla(4, 100%, 54%, 1) 0%, hsla(29, 86%, 52%, 1) 100%)",
          "bogo-gradient-6": "linear-gradient(90deg, hsla(26, 100%, 15%, 1) 0%, hsla(14, 83%, 42%, 1) 0%, hsla(29, 100%, 52%, 1) 100%)",
          "bogo-gradient-7":"linear-gradient(90deg, hsla(23, 100%, 50%, 1) 0%, hsla(34, 100%, 50%, 1) 49%, hsla(23, 100%, 50%, 1) 100%)"
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
        "float": {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }, // gentle float
        },
        marquee: {
      '0%': { transform: 'translateX(0%)' },
      '100%': { transform: 'translateX(-50%)' }, // because we duplicate the list
    },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "marquee": 'marquee 25s linear infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
