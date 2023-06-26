import Image from "next/image";

export default function AboutSec() {
  const techList = [
    "Javascript (ES6+)",
    "React",
    "NextJS",
    "Typescript",
    "TailwindCSS",
    "Git",
  ];

  return (
    <section
      className="bg-ColorAzulMarino py-44 min-h-screen flex flex-col items-start justify-center w-10/12 mx-auto gap-7 sm:gap-10 lg:gap-3 lg:w-10/12 xl:w-9/12 2xl:w-7/12 lg:flex-row"
      id="About"
    >
      <div className="flex flex-col gap-5 lg:w-7/12">
        <div className="text-ColorGrisClaro text-titleSection font-fontInter font-semibold flex w-full gap-2 items-center leading-none">
          <span className="text-ColorCeleste text-numberTitleSection w-1/12">
            02.
          </span>
          <h2 className="w-5/12">About Me</h2>
          <div className="h-0.5 w-6/12 bg-ColorGrisOscuro"></div>
        </div>
        <p className="text-ColorGris text-sectionText">
          Hello! My name is David and I enjoy creating things that live on the
          internet. My interest in web development started at the end of 2021
          and for more than a year I have been learning web development in a
          self-taught way, with YouTube videos, documentation and a lot of
          practice. Its been quite fun. This year 2023 I decided to study at{" "}
          <a
            href="https://isil.pe/"
            target="_blank"
            className="text-ColorCeleste font-bold"
          >
            ISIL
          </a>{" "}
          to study software engineering formally. I firmly believe that we can
          make a much better world with the help of software, I am currently
          located in Lima, Peru. I am looking for new challenges to explore my
          horizons and improve professionally.
        </p>
        <p className="text-ColorGris text-sectionText">{`Here are a few techlogies I've been working with recently:`}</p>
        <ul className="text-ColorGris flex h-20 w-full flex-wrap">
          {techList.map((e, i) => (
            <li key={i} className="w-1/2 flex items-center gap-2 text-techList">
              <div className="bg-ColorCeleste w-1 rounded-lg h-1 mt-1"></div>
              <p>{e}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-transparent w-full flex lg:w-5/12 lg:py-10 items-center justify-center">
        <Image
          src={
            "https://raw.githubusercontent.com/dalowa/david-urbano/main/public/profile.png"
          }
          alt="David Urbano Animated Profile"
          width={250}
          height={0o0}
          priority={true}
          className="mt-5 w-11/12 sm:w-7/12 md:w-6/12 lg:w-10/12 mx-auto p-1 border-2 rounded-sm border-ColorCeleste shadow-2xl shadow-ColorCeleste"
        />
      </div>
    </section>
  );
}
