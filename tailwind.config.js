/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
  "./pages/**/*.{ts,tsx}",
  "./components/**/*.{ts,tsx}",
  "./app/**/*.{ts,tsx}",
  "./src/**/*.{ts,tsx}",
],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			primary: '#0A2640',
  			dark: '#1B222C'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

