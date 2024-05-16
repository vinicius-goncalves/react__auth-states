/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'color0': '#AC66F2',
                'color1': '#C394F2',
                'color2': '#C3ADD9',
                'color3': '#D9D9D9',
                'color4': '#0D0D0D'
            },
        }
    },
    plugins: [],
}

