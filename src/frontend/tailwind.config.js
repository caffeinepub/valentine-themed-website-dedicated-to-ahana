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
                },
                'peach-light': 'oklch(var(--peach-light))',
                'peach-dark': 'oklch(var(--peach-dark))',
                'peach-accent': 'oklch(var(--peach-accent))',
                'peach-accent-light': 'oklch(var(--peach-accent-light))',
                'peach-border': 'oklch(var(--peach-border))',
                'peach-border-dark': 'oklch(var(--peach-border-dark))',
                'peach-card-dark': 'oklch(var(--peach-card-dark))',
                'coral-light': 'oklch(var(--coral-light))',
                'coral-dark': 'oklch(var(--coral-dark))',
                'coral-accent': 'oklch(var(--coral-accent))',
                'coral-accent-light': 'oklch(var(--coral-accent-light))',
                'coral-border': 'oklch(var(--coral-border))',
                'coral-border-dark': 'oklch(var(--coral-border-dark))',
                'coral-card-dark': 'oklch(var(--coral-card-dark))',
                'sunset-light': 'oklch(var(--sunset-light))',
                'sunset-dark': 'oklch(var(--sunset-dark))',
                'sunset-accent': 'oklch(var(--sunset-accent))',
                'sunset-accent-light': 'oklch(var(--sunset-accent-light))',
                'sunset-border': 'oklch(var(--sunset-border))',
                'sunset-border-dark': 'oklch(var(--sunset-border-dark))',
                'sunset-card-dark': 'oklch(var(--sunset-card-dark))'
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            boxShadow: {
                xs: '0 1px 2px 0 rgba(0,0,0,0.05)',
                '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)'
            },
            fontFamily: {
                sans: ['Quicksand', 'system-ui', 'sans-serif'],
                display: ['Pacifico', 'cursive']
            },
            keyframes: {
                'float-particle': {
                    '0%': { 
                        transform: 'translateY(0) translateX(0) rotate(0deg)',
                        opacity: '0'
                    },
                    '10%': { opacity: '0.7' },
                    '90%': { opacity: '0.7' },
                    '100%': { 
                        transform: 'translateY(-110vh) translateX(30px) rotate(360deg)',
                        opacity: '0'
                    }
                },
                'gentle-float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' }
                },
                'spin-slow': {
                    from: { transform: 'rotate(0deg)' },
                    to: { transform: 'rotate(360deg)' }
                },
                'confetti-fall': {
                    '0%': { 
                        transform: 'translateY(-10vh) rotate(0deg)',
                        opacity: '1'
                    },
                    '100%': { 
                        transform: 'translateY(110vh) rotate(720deg)',
                        opacity: '0'
                    }
                }
            },
            animation: {
                'float-particle': 'float-particle linear infinite',
                'gentle-float': 'gentle-float 4s ease-in-out infinite',
                'spin-slow': 'spin-slow 8s linear infinite',
                'confetti-fall': 'confetti-fall ease-in forwards'
            }
        }
    },
    plugins: [typography, containerQueries, animate]
};
