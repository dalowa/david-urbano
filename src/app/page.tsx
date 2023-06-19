import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <NavBar />
      <section className="flex flex-col xl:flex-row xl:mt-20">
        <div className="bg-ColorB flex justify-center flex-col items-center py-9 gap-5 xl:w-1/2	xl:gap-10 xl:rounded-tr-3xl">
          <h1 className="font-PrimaryFont text-black text-4xl xl:text-8xl text-center">
            David Urbano
          </h1>
          <p className="font-PrimaryFont text-ColorE text-center text-lg w-full max-w-xs xl:text-4xl xl:max-w-xl ">
            Front End Web Developer - Software Engineer Student
          </p>
        </div>
        <div className="p-5 flex gap-4 pb-0 border-b-8 border-ColorA xl:w-1/2 justify-between xl:gap-2">
          <Image
            src={
              "https://raw.githubusercontent.com/dalowa/david-urbano/8250a1e35a2a09bfd32eb9788b2f4a003114953a/public/pino.svg"
            }
            alt={"Pino"}
            priority={true}
            width={0o0}
            height={0o0}
            className="w-24 h-auto xl:w-64 xl:h-auto"
          />
          <div className="flex flex-col justify-center gap-10 items-center">
            <p className="text-ColorA font-SecondaryFont font-semibold text-right text-lg xl:text-4xl xl:max-w-lg">
              I feel that life is an adventure of constant growth and this fits
              perfectly with my passion for technology, since it is a constant
              evolution and there are always new things to learn.
            </p>
            <a
              className="hidden bg-ColorB p-3 text-ColorE xl:inline font-PrimaryFont rounded-2xl hover:bg-ColorD hover:text-ColorB transition text-2xl"
              href="#Projects"
            >
              Check out my work
            </a>
          </div>
        </div>
      </section>

      <section className="bg-ColorC p-5 flex flex-col gap-5 xl:py-52 xl:px-80 xl:flex-row xl:items-center xl:justify-center">
        <div className="flex flex-col gap-5 xl:gap-10">
          <h2 className="font-PrimaryFont text-ColorE text-2xl xl:text-5xl">{`=> About Me`}</h2>
          <p className="font-SecondaryFont text-base xl:text-2xl xl:w-4/5">
            {`I am a young bilingual web developer located in Lima, Peru. I love the
          idea of being able to create something that can change someone's life
          for the better and I like to think that we can make a better world
          with the help of software`}
          </p>
          <h4 className="font-SecondaryFont text-ColorA w-full text-right xl:w-4/5 xl:text-2xl">
            Read more about me{" "}
            <a className="font-bold underline underline-offset-2 cursor-pointer hover:text-ColorE transition">
              here
            </a>
          </h4>
        </div>
        <div className="flex w-full justify-center items-center h-72">
          <div className="border-2 border-black p-1 bg-ColorB transition-all ease-in-out duration-100 hover:border-none hover:p-0 rounded-lg">
            <Image
              src={
                "https://raw.githubusercontent.com/dalowa/david-urbano/00405f7387dcfb02f0b0d1ba2255df2f1736f0e2/public/Profile-David.svg"
              }
              alt="Profile David Urbano"
              width={0o0}
              height={0o0}
              className="w-64 h-auto	border-2 border-black bg-ColorE hover:border-0 transition-all ease-in-out duration-100 hover:shadow-black	hover:shadow-lg	rounded-lg hover:bg-white xl:w-80"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
