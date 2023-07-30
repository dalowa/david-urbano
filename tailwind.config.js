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
        ColorCelesteFiltro: "#64ffda26",
        ColorAzulMarinoOpaco: "#0a192fBF",
        ColorAzulMarinoProject: "#101E34F2",
        ColorProjectText: "#112240",
        ColorProjectBorder: "#020c1bb3",
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
        Title: "clamp(35px, 7vw, 80px)",
        SubTitle: "clamp(10px, 4vw, 18px)",
        navBarMobile: "clamp(10px, 5vw, 20px)",
        navBarDesktop: "clamp(10px, 5vw, 15px)",
        titleSection: "clamp(22px, 5vw, 28px)",
        numberTitleSection: "clamp(15px, 3vw, 20px)",
        sectionText: "clamp(16px, 3vw, 20px)",
        techList: "clamp(17px, 2vw, 20px)",
        projectTitle: "clamp(22px, 3vw, 30px)",
      },
      backgroundImage: {
        bg01: "url(https://raw.githubusercontent.com/dalowa/david-urbano/main/public/projects-image/01/bg-01.png)",
        bg01sm:
          "url(https://raw.githubusercontent.com/dalowa/david-urbano/main/public/projects-image/01/bg-01-sm.png)",
        bg01md:
          "url(https://raw.githubusercontent.com/dalowa/david-urbano/main/public/projects-image/01/bg-01-md.png)",
        bg01lg:
          "url(https://raw.githubusercontent.com/dalowa/david-urbano/main/public/projects-image/01/bg-01-lg.png)",
        bg01xl:
          "url(https://raw.githubusercontent.com/dalowa/david-urbano/main/public/projects-image/01/bg-01-xl.png)",
        bg012xl:
          "url(https://raw.githubusercontent.com/dalowa/david-urbano/main/public/projects-image/01/bg-01-2xl.png)",
      },
      minHeight: {
        projectMinHeight: "22rem" /* 352px */,
      },
      boxShadow: {
        shadowProject: "0px 10px 30px -5px rgba(2,12,27,0.7)",
      },
    },
  },
  plugins: [],
};
