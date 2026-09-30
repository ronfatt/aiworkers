/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          bg: '#0a0e17',
          surface: '#121826',
          border: '#1e293b',
          accent: '#38bdf8',
          desk: '#151d30',
          meeting: '#131b2e',
          production: '#16192b',
          lounge: '#181926'
        }
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow': 'ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'dash': 'dash 1.5s linear infinite',
      },
      keyframes: {
        dash: {
          to: {
            strokeDashoffset: '-20',
          },
        },
      }
    },
  },
  plugins: [],
}
