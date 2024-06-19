const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  safelist: [
    {
      pattern: /border-(red|green|yellow)-(300)/,
    },
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },

    boxShadow: {
      1: 'var(--box-shadow-level-1)',
      2: 'var(--box-shadow-level-2)',
      3: 'var(--box-shadow-level-3)',
      4: 'var(--box-shadow-level-4)',
      5: 'var(--box-shadow-level-5)',
      6: 'var(--box-shadow-level-6)',
      purple: 'var(--box-shadow-purple)',
      purple2: 'var(--box-shadow-purple-2)',
      blue: 'var(--box-shadow-blue)',
      yellow: 'var(--box-shadow-yellow)',
    },

    colors: {
      border: 'var(--border)',
      input: 'var(--input)',
      ring: 'var(--ring)',
      separator: 'var(--separator)',

      background: 'var(--background)',
      foreground: 'var(--foreground)',

      white: 'var(--white)',
      black: 'var(--black)',

      'primary-light': {
        1: 'var(--primary-light-1)',
        2: 'var(--primary-light-2)',
        '1_5': 'var(--primary-light-1_5)',
      },
      primary: {
        DEFAULT: 'var(--primary)',
        foreground: 'var(--primary-foreground)',
      },
      'primary-dark': {
        1: 'var(--primary-dark-1)',
        2: 'var(--primary-dark-2)',
      },

      'secondary-light': {
        1: 'var(--secondary-light-1)',
        2: 'var(--secondary-light-2)',
        3: 'var(--secondary-light-3)',
      },
      secondary: {
        DEFAULT: 'var(--secondary)',
        foreground: 'var(--secondary-foreground)',
      },
      'secondary-dark': {
        1: 'var(--secondary-dark-1)',
        2: 'var(--secondary-dark-2)',
        3: 'var(--secondary-dark-3)',
      },

      'tertiary-light': {
        1: 'var(--tertiary-light-1)',
        2: 'var(--tertiary-light-2)',
      },
      tertiary: {
        DEFAULT: 'var(--tertiary)',
        foreground: 'var(--tertiary-foreground)',
      },
      'tertiary-dark': {
        1: 'var(--tertiary-dark-1)',
        2: 'var(--tertiary-dark-2)',
      },

      destructive: {
        DEFAULT: 'var(--destructive)',
        foreground: 'var(--destructive-foreground)',
      },
      muted: {
        DEFAULT: 'var(--muted)',
        foreground: 'var(--muted-foreground)',
      },
      accent: {
        DEFAULT: 'var(--accent)',
        foreground: 'var(--accent-foreground)',
      },
      popover: {
        DEFAULT: 'var(--popover)',
        foreground: 'var(--popover-foreground)',
      },
      card: {
        DEFAULT: 'var(--card)',
        foreground: 'var(--card-foreground)',
      },

      'success-light': {
        1: 'var(--success-light-1)',
        2: 'var(--success-light-2)',
      },
      success: 'var(--success)',
      'success-dark': {
        1: 'var(--success-dark-1)',
        2: 'var(--success-dark-2)',
      },

      'warning-light': {
        1: 'var(--warning-light-1)',
        2: 'var(--warning-light-2)',
      },
      warning: 'var(--warning)',
      'warning-dark': {
        1: 'var(--warning-dark-1)',
        2: 'var(--warning-dark-2)',
      },

      'error-light': {
        1: 'var(--error-light-1)',
        2: 'var(--error-light-2)',
      },
      error: 'var(--error)',
      'error-dark': {
        1: 'var(--error-dark-1)',
        2: 'var(--error-dark-2)',
      },

      purple: {
        100: 'var(--purple-100)',
        200: 'var(--purple-200)',
        300: 'var(--purple-300)',
        400: 'var(--purple-400)',
        500: 'var(--purple-500)',
      },

      blue: {
        100: 'var(--blue-100)',
        200: 'var(--blue-200)',
        300: 'var(--blue-300)',
        400: 'var(--blue-400)',
        500: 'var(--blue-500)',
      },

      green: {
        100: 'var(--green-100)',
        200: 'var(--green-200)',
        300: 'var(--green-300)',
        400: 'var(--green-400)',
        500: 'var(--green-500)',
      },

      yellow: {
        100: 'var(--yellow-100)',
        200: 'var(--yellow-200)',
        300: 'var(--yellow-300)',
        400: 'var(--yellow-400)',
        500: 'var(--yellow-500)',
      },

      red: {
        100: 'var(--red-100)',
        200: 'var(--red-200)',
        300: 'var(--red-300)',
        400: 'var(--red-400)',
        500: 'var(--red-500)',
      },

      orange: {
        100: 'var(--orange-100)',
        200: 'var(--orange-200)',
        300: 'var(--orange-300)',
        400: 'var(--orange-400)',
        500: 'var(--orange-500)',
      },

      neutral: {
        50: 'var(--neutral-50)',
        100: 'var(--neutral-100)',
        200: 'var(--neutral-200)',
        300: 'var(--neutral-300)',
        400: 'var(--neutral-400)',
        500: 'var(--neutral-500)',
        600: 'var(--neutral-600)',
        700: 'var(--neutral-700)',
        800: 'var(--neutral-800)',
        900: 'var(--neutral-900)',
      },

      progress: {
        green: 'var(--progress-green)',
        purple: 'var(--progress-purple)',
        orange: 'var(--progress-orange)',
        red: 'var(--progress-red)',
        blue: 'var(--progress-blue)',
        destructive: 'var(--destructive)',
      },
    },

    borderRadius: {
      full: '9999px',
      pill: '500px',
      xl: 'calc(var(--radius) * 5) /* 20px */',
      lg: 'calc(var(--radius) * 3) /* 12px */',
      md: 'calc(var(--radius) * 2) /* 8px */',
      sm: 'calc(var(--radius) + 2px) /* 6px */',
      xs: 'calc(var(--radius)) /* 4px */',
      none: '0px',
    },

    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwind-scrollbar')({ nocompatible: true }),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.progress-gradient': {
          'background-image':
            'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)',
          'background-size': '1rem 1rem',
        },
      })
    }),
  ],
}
