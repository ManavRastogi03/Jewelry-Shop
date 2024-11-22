// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a', // Base dark background color
        secondary: '#1e293b', // Optional secondary color
        glowGreen: '#10B981', // Custom glowing green color
      },
      animation: {
        typewriter: 'typewriter 5s steps(30, end) infinite, blink 0.5s step-end infinite',
        glow: 'glow 1.5s ease-in-out infinite', // Define the glow animation
        spin: 'spin 2s linear infinite',
      },
      keyframes: {
        typewriter: {
          '0%': { width: '0%' },
          '70%': { width: '100%' },
          '100%': { width: '0%' }, // Reset to 0% width for repetition
        },
        blink: {
          '50%': { 'border-color': 'transparent' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(16, 185, 129, 1), 0 0 10px rgba(16, 185, 129, 1)' },
          '50%': { boxShadow: '0 0 20px rgba(16, 185, 129, 1), 0 0 30px rgba(16, 185, 129, 1)' },
          '100%': { boxShadow: '0 0 5px rgba(16, 185, 129, 1), 0 0 10px rgba(16, 185, 129, 1)' },
        },
      },
    },
  },
  plugins: [],
};
