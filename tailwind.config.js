module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                futuristic: ['Orbitron', 'sans-serif'], // For titles
                body: ['Inter', 'sans-serif'],          // For normal text
            },
            colors: {
                neonBlue: '#3BF7F2',
                neonPurple: '#B174F9',
                neonGreen: '#48FF9B',
                bgDark: '#0f172a',
            },
        },
    },
    plugins: [],
};
