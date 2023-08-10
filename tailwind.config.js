/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['your-sans-font', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'serif'],
        mono: ['Menlo', '"Courier New"', 'monospace'],
        mono1: ['"Courier New"', 'Menlo', 'monospace']
        // Add more font families here as needed
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class'
    })
  ],
}

