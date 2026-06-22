import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#F5F2ED',
        surface: '#FAF8F5',
        ink: '#1A1A1A',
        'ink-60': '#4A4540',
        'ink-30': '#9A9390',
        border: '#D5CFC8',
        accent: '#B8F000',
      },
      fontFamily: {
        mincho: ['"Shippori Mincho"', 'serif'],
        serif: ['"Noto Serif JP"', 'serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      fontSize: {
        'body': ['16px', { lineHeight: '2.2' }],
        'xs-mono': ['9px', { letterSpacing: '0.2em' }],
        'sm-mono': ['10px', { letterSpacing: '0.15em' }],
      },
    },
  },
  plugins: [],
}
export default config
