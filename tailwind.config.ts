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
        gold: {
          50: '#fff9e6',
          100: '#ffedb3',
          200: '#ffe180',
          300: '#ffd54d',
          400: '#ffc91a',
          500: '#e6b300',
          600: '#b38a00',
          700: '#806200',
          800: '#4d3a00',
          900: '#1a1300',
        },
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
      },
      navy: {
        900: '#1a365d',
      },
      burgundy: {
        500: '#6b2737',
        600: '#5a202d',
        700: '#491a23',
      },
      slate: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
      }
    },
    fontFamily: {
      serif: ['Georgia', 'serif'],
    }
  },
  plugins: [],
} satisfies Config;
