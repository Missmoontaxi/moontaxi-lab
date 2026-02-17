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
        // Dark space backgrounds
        'space-black': '#0a0a0f',
        'space-deep': '#0d1117',
        'space-dark': '#161b22',

        // Nebula accent colors (from your image)
        'nebula-teal': '#1a5f5a',
        'nebula-cyan': '#4fd1c5',
        'nebula-green': '#2d8a6e',
        'nebula-red': '#c53030',
        'nebula-coral': '#fc8181',

        // Star/highlight colors
        'star-white': '#f7fafc',
        'star-blue': '#90cdf4',

        // DNA helix colors
        'helix-yellow': '#ecc94b',
        'helix-blue': '#4299e1',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-rationale)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out',
        'fade-in-delayed': 'fadeIn 1.2s ease-out 0.4s both',
        'float': 'float 6s ease-in-out infinite',
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
      },
    },
  },
  plugins: [],
}

export default config
