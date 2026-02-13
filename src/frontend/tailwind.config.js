import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            colors: {
                border: 'oklch(var(--border))',
                input: 'oklch(var(--input))',
                ring: 'oklch(var(--ring) / <alpha-value>)',
                background: 'oklch(var(--background))',
                foreground: 'oklch(var(--foreground))',
                primary: {
                    DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
                    foreground: 'oklch(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
                    foreground: 'oklch(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
                    foreground: 'oklch(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
                    foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
                },
                accent: {
                    DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
                    foreground: 'oklch(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'oklch(var(--popover))',
                    foreground: 'oklch(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'oklch(var(--card))',
                    foreground: 'oklch(var(--card-foreground))'
                },
                success: {
                    DEFAULT: 'oklch(var(--success) / <alpha-value>)',
                    foreground: 'oklch(var(--success-foreground))'
                },
                warning: {
                    DEFAULT: 'oklch(var(--warning) / <alpha-value>)',
                    foreground: 'oklch(var(--warning-foreground))'
                },
                valentine: {
                    pink: 'oklch(var(--valentine-pink) / <alpha-value>)',
                    rose: 'oklch(var(--valentine-rose) / <alpha-value>)',
                    peach: 'oklch(var(--valentine-peach) / <alpha-value>)',
                    lavender: 'oklch(var(--valentine-lavender) / <alpha-value>)'
                },
                chart: {
                    1: 'oklch(var(--chart-1))',
                    2: 'oklch(var(--chart-2))',
                    3: 'oklch(var(--chart-3))',
                    4: 'oklch(var(--chart-4))',
                    5: 'oklch(var(--chart-5))'
                },
                sidebar: {
                    DEFAULT: 'oklch(var(--sidebar))',
                    foreground: 'oklch(var(--sidebar-foreground))',
                    primary: 'oklch(var(--sidebar-primary))',
                    'primary-foreground': 'oklch(var(--sidebar-primary-foreground))',
                    accent: 'oklch(var(--sidebar-accent))',
                    'accent-foreground': 'oklch(var(--sidebar-accent-foreground))',
                    border: 'oklch(var(--sidebar-border))',
                    ring: 'oklch(var(--sidebar-ring))'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
                xl: 'calc(var(--radius) + 4px)',
                '2xl': 'calc(var(--radius) + 8px)',
                '3xl': 'calc(var(--radius) + 12px)'
            },
            boxShadow: {
                xs: '0 1px 2px 0 rgba(0,0,0,0.05)',
                '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
                glow: '0 0 20px rgba(255, 105, 180, 0.3)',
                'glow-lg': '0 0 40px rgba(255, 105, 180, 0.4)',
                'inner-glow': 'inset 0 0 20px rgba(255, 105, 180, 0.2)'
            },
            fontFamily: {
                sans: ['Poppins', 'system-ui', 'sans-serif'],
                display: ['Caveat', 'cursive'],
                script: ['Dancing Script', 'cursive']
            },
            keyframes: {
                'float-up': {
                    '0%': { 
                        transform: 'translateY(0) translateX(0) rotate(0deg)',
                        opacity: '0'
                    },
                    '10%': { opacity: '1' },
                    '90%': { opacity: '1' },
                    '100%': { 
                        transform: 'translateY(-100vh) translateX(var(--drift-x, 20px)) rotate(var(--rotate, 15deg))',
                        opacity: '0'
                    }
                },
                'sparkle': {
                    '0%, 100%': { 
                        opacity: '0',
                        transform: 'scale(0) rotate(0deg)'
                    },
                    '50%': { 
                        opacity: '1',
                        transform: 'scale(1) rotate(180deg)'
                    }
                },
                'confetti-fall': {
                    '0%': { 
                        transform: 'translateY(-100vh) rotate(0deg)',
                        opacity: '1'
                    },
                    '100%': { 
                        transform: 'translateY(100vh) rotate(720deg)',
                        opacity: '0'
                    }
                },
                'gentle-pulse': {
                    '0%, 100%': { 
                        opacity: '1',
                        transform: 'scale(1)'
                    },
                    '50%': { 
                        opacity: '0.9',
                        transform: 'scale(1.02)'
                    }
                },
                'heartbeat': {
                    '0%, 100%': { transform: 'scale(1)' },
                    '10%, 30%': { transform: 'scale(1.1)' },
                    '20%, 40%': { transform: 'scale(1)' }
                },
                shimmer: {
                    '0%': { backgroundPosition: '-1000px 0' },
                    '100%': { backgroundPosition: '1000px 0' }
                }
            },
            animation: {
                'float-up': 'float-up var(--duration, 8s) ease-in-out infinite',
                'sparkle': 'sparkle var(--duration, 2s) ease-in-out infinite',
                'confetti-fall': 'confetti-fall var(--duration, 3s) ease-in forwards',
                'gentle-pulse': 'gentle-pulse 3s ease-in-out infinite',
                'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
                shimmer: 'shimmer 2s infinite linear'
            }
        }
    },
    plugins: [typography, containerQueries, animate]
};
