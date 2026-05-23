import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],

  content: [
    "./src/**/*.{ts.tsx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        lavender: '#cdb4ff',
        pink: '#ffafcc',
        cream: '#fff8f0',
        dark: '#111111'
      },

      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },

      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },

          "50%": {
            transform: "translateY(-20px)",
          },
        },

        shimmer: {
          "0%": {
            backgroundPosition: "-100px 0",
          },

          "100%": {
            backgroundPosition: "-1000px 0",
          },
        },
      },
    },
  },

  plugins: [],
};

export default config;