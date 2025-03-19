
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				mono: ['JetBrains Mono', 'monospace'],
				cyber: ['Orbitron', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				cyber: {
					black: '#050505',
					darker: '#0A0A0A',
					dark: '#121212',
					cyan: '#0AFFFF',
					green: '#0AFF0A',
					pink: '#FF10F0',
					blue: '#0A50FF',
					purple: '#6E0AFF',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'digital-rain': {
					'0%': { transform: 'translateY(-100%)', opacity: '0' },
					'10%': { opacity: '1' },
					'100%': { transform: 'translateY(100vh)', opacity: '0.5' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 10px theme(colors.cyber.cyan), 0 0 20px theme(colors.cyber.cyan)',
						opacity: '1' 
					},
					'50%': { 
						boxShadow: '0 0 15px theme(colors.cyber.cyan), 0 0 30px theme(colors.cyber.cyan)',
						opacity: '0.8' 
					}
				},
				'glitch': {
					'0%, 100%': { transform: 'translateX(0)' },
					'20%, 60%': { transform: 'translateX(-2px)' },
					'40%, 80%': { transform: 'translateX(2px)' }
				},
				'scan-line': {
					'0%': { transform: 'translateY(0%)', opacity: '0' },
					'50%': { opacity: '0.5' },
					'100%': { transform: 'translateY(100%)', opacity: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'typing': {
					'0%': { width: '0%' },
					'100%': { width: '100%' }
				},
				'blink-caret': {
					'0%, 100%': { borderColor: 'transparent' },
					'50%': { borderColor: 'theme(colors.cyber.cyan)' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'digital-rain': 'digital-rain 5s linear infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'glitch': 'glitch 0.3s ease-in-out infinite',
				'scan-line': 'scan-line 2s linear infinite',
				'float': 'float 3s ease-in-out infinite',
				'typing': 'typing 3.5s steps(40, end)',
				'blink-caret': 'blink-caret 0.75s step-end infinite',
			},
			backdropFilter: {
				'none': 'none',
				'blur': 'blur(20px)',
			},
			boxShadow: {
				'neon-cyan': '0 0 5px theme(colors.cyber.cyan), 0 0 20px theme(colors.cyber.cyan)',
				'neon-green': '0 0 5px theme(colors.cyber.green), 0 0 20px theme(colors.cyber.green)',
				'neon-pink': '0 0 5px theme(colors.cyber.pink), 0 0 20px theme(colors.cyber.pink)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
