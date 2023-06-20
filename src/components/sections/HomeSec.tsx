import Image from "next/image";

export default function HomeSec() {
  return (
    <section className="flex flex-col xl:flex-row xl:pt-20" id="Home">
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
          width={350}
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
  );
}
