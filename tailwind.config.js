/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        fontInter: ["var(--fontInter)"],
        fontFiraCode: ["var(--fontFiraCode)"],
        fontRobotoMono: ["var(--fontRobotoMono)"],
      },
      colors: {
        ColorCeleste: "#64ffda",
        ColorAzulMarinoOpaco: "#0a192fBF",
        ColorAzulMarino: "#0a192f",
        ColorAzulMarinoClaro: "#112240",
        ColorGrisClaro: "#ccd6f6",
        ColorGris: "#8892b0",
        ColorGrisOscuro: "#727c99",
        WhiteOpacity50: "#ffffffBF",
      },
      rotate: {
        n45: "-45deg",
      },
      fontSize: {
        Title: "clamp(40px, 7vw, 80px)",
        SubTitle: "clamp(10px, 5vw, 17px)",
        navBarMobile: "clamp(10px, 5vw, 20px)",
        navBarDesktop: "clamp(10px, 5vw, 15px)",
        titleSection: "clamp(22px, 5vw, 32px)",
        numberTitleSection: "clamp(15px, 3vw, 20px)",
        sectionText: "clamp(16px, 3vw, 20px)",
        techList: "clamp(17px, 2vw, 20px)",
      },
    },
  },
  plugins: [],
};
