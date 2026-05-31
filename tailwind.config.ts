import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // The Lab — instrument-panel dark system (anchored to the dark prototype)
        'space-black': '#08080c',
        'star-white': '#f7fafc',
        'lab-surface': '#0f0f16',
        'lab-surface2': '#141420',
        'lab-border': '#252532',
        'lab-borderlt': '#1a1a24',
        'lab-text': '#e0e0ea',
        'lab-muted': '#5c5c72',
        'lab-dim': '#363648',

        // Accent — brighter honey-amber (moves away from teal, reserved for paulamcmahon.com)
        'honey': '#e8b54a',

        // Status signals
        'lab-green': '#6db88a',
        'lab-blue': '#6b9bc8',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
        display: ['var(--font-rationale)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out',
        'fade-in-delayed': 'fadeIn 1.2s ease-out 0.4s both',
        'float': 'float 6s ease-in-out infinite',
        'pulse-dot': 'pulseDot 2s infinite',
        'blink-live': 'blinkLive 2.2s infinite',
        'cursor-blink': 'cursorBlink 1.1s step-end infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
        blinkLive: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.25' },
        },
        cursorBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
