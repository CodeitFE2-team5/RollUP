/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1200px',
      xl: '1280px',
      xl2: '1460px',
    },
    extend: {
      fontFamily: {
        Pretendard: ['Pretendard'],
        NotoSans: ['NotoSans'],
        NanumMyeongjo: ['NanumMyeongjo'],
        NanumHandWriting: ['NanumHandWriting'],
      },
      extend: {},
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar-hide")],
};
