/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        30: '7.5rem'
      }
    },
    colors: {
      'white': '#fff',
      'black': '#000',
      'lightSand': '#FCF7E6',
      'orange': '#ED5E21',
    },
    screens: {
      'largeMobile': '480px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    fontSize: {
      xs: ['12px', '0.9375em'],
      sm: ['14px', '1.125rem'],
      base: ['16px', '1.25rem'],
      xl: ['20px', '1.75rem']
    }
  },
  plugins: [],
}
