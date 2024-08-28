import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'mukta-regular': ['Mukta-Regular', 'sans-serif'],
        'mukta-bold': ['Mukta-Bold', 'sans-serif'],
        'mukta-extrabold': ['Mukta-ExtraBold', 'sans-serif'],
        'mukta-light': ['Mukta-Light', 'sans-serif'],
        'mukta-medium': ['Mukta-Medium', 'sans-serif'],
        'mukta-semibold': ['Mukta-SemiBold', 'sans-serif'],
        'mukta-extralight': ['Mukta-ExtraLight', 'sans-serif'],
      },
      colors: {
        zodiac: '#0C243C',
        tiara: '#C9D1D5',
      },
    },
  },
  plugins: [],
};
export default config;
