/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#C5A059', // Champagne Gold
                    dark: '#A38446',
                    light: '#DEC07B',
                },
                dark: {
                    DEFAULT: '#0a0a0a', // Rich Charcoal
                    lighter: '#1a1a1a',
                    card: '#141414',
                },
                light: {
                    DEFAULT: '#EAEAEA', // Off-white
                    dim: '#888888',
                }
            },
            fontFamily: {
                serif: ['"Cormorant Garamond"', 'serif'],
                sans: ['"Montserrat"', 'sans-serif'],
            },
            animation: {
                'slow-zoom': 'zoom 20s linear infinite',
                'fade-in': 'fadeIn 1s ease-out forwards',
                'slide-up': 'slideUp 0.8s ease-out forwards',
            },
            keyframes: {
                zoom: {
                    '0%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(1.1)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            }
        },
    },
    plugins: [],
}
