import type { Config } from "tailwindcss";

/**
 * Design tokens do portfólio neo-brutalista.
 *  - paper / ink / surface mudam entre tema claro e escuro (ver src/index.css)
 *  - neo-* são as cores "pop" fixas: o texto em cima delas é sempre preto.
 */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "rgb(var(--paper) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        neo: {
          black: "#0A0A0A",
          white: "#FFFFFF",
          yellow: "#FFE01B",
          red: "#FF2D3A",
          blue: "#1559FF",
          lime: "#B8F24E",
          cyan: "#55E8FF",
          sky: "#7AD3FF",
          orange: "#FFB55E",
          pink: "#FFA3A3",
          mint: "#5FEAB5",
          coral: "#FF6464",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk Variable"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"Space Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      boxShadow: {
        brutal: "6px 6px 0 0 rgb(var(--ink))",
        "brutal-sm": "4px 4px 0 0 rgb(var(--ink))",
        "brutal-lg": "10px 10px 0 0 rgb(var(--ink))",
      },
      borderWidth: {
        3: "3px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        blink: "blink 1s steps(1) infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
