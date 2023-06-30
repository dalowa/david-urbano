import Image from "next/image";

export default function HomeSec() {
  return (
    <section
      className="bg-ColorAzulMarino h-screen flex flex-col items-start justify-center w-10/12 mx-auto gap-3 sm:gap-5 lg:gap-3 lg:w-10/12 xl:w-9/12 2xl:w-7/12"
      id="Home"
    >
      <h3 className="text-ColorCeleste font-extralight text-xl">
        Hi, my name is
      </h3>
      <h1 className="text-ColorGrisClaro font-bold leading-none text-Title">
        David Urbano.
      </h1>
      <h2 className="text-ColorGris font-semibold text-Title leading-none tracking-tight">
        I build things for the web.
      </h2>
      <p className="text-ColorGris mt-3 text-SubTitle md:w-11/12 lg:w-9/12 2xl:w-7/12">
        I am a bilingual web developer, I love all the possibilities that
        software development offers. Currently, developing independent projects
        and looking for new challenges to expand my knowledge.
      </p>
      <a className="text-ColorCeleste py-3 px-6 border border-ColorCeleste border-solid rounded-md mt-10 cursor-pointer transition-colors hover:bg-ColorCeleste hover:text-ColorAzulMarino hover:shadow-md hover:shadow-ColorCeleste">
        Check out my work
      </a>
    </section>
  );
}
