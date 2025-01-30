import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'school-yellow': '#FFD700',
        'school-purple': '#6A1B9A',
      },
      fontFamily: {
        heading: 'var(--font-poppins)',
        body: 'var(--font-open-sans)',
      },
      backdropBlur: {
        xs: '2px',
      },
      spacing: {
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 8px 32px rgba(0,0,0,0.05)',
        'glow': '0 8px 24px rgba(245,158,11,0.3)'
      }
    },
  },
  plugins: [],
} satisfies Config;
