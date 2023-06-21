import Image from "next/image";

export default function HomeSec() {
  return (
    <section className="flex flex-col lg:flex-row lg:pt-20 " id="Home">
      <div className="bg-ColorB flex justify-center flex-col items-center p-9 gap-5 sm:py-20 lg:w-1/2	lg:gap-10 lg:rounded-tr-3xl lg:p-0">
        <h1 className="font-PrimaryFont text-black text-4xl sm:text-6xl md:text-7xl text-center lg:text-5xl xl:text-7xl 2xl:text-8xl">
          David Urbano
        </h1>
        <p className="font-PrimaryFont text-ColorE text-center text-lg w-full sm:text-2xl md:text-3xl sm:max-w-md max-w-xs md:max-w-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          Front End Web Developer - Software Engineer Student
        </p>
      </div>
      <div className="py-3 px-2 flex gap-3 pb-0 border-b-8 border-ColorA sm:justify-around lg:w-1/2 justify-between lg:gap-2 lg:justify-center lg:pt-2 xl:justify-around">
        <Image
          src={
            "https://raw.githubusercontent.com/dalowa/david-urbano/main/public/tiny-tree.png"
          }
          alt={"Pino"}
          priority={true}
          width={350}
          height={0o0}
          className="w-36 h-auto sm:w-64 lg:52 xl:w-96"
        />
        <div className="flex flex-col justify-center 2xl:gap-10 items-center pr-2 2xl:pr-0 lg:gap-3">
          <p className="text-ColorA font-SecondaryFont pb-2 font-semibold w-36 text-right text-sm sm:w-80 sm:text-2xl md:text-3xl lg:text-xl lg:w-52 xl:w-80 xl:text-2xl 2xl:text-3xl 2xl:w-80">
            I feel that life is an adventure of constant growth and this fits
            perfectly with my passion for technology, since it is a constant
            evolution and there are always new things to learn.
          </p>
          <a
            className="hidden bg-ColorB p-3 text-ColorE font-PrimaryFont rounded-2xl hover:bg-ColorD hover:text-ColorB lg:inline lg:text-base transition text-2xl 2xl:text-2xl 2xl:p-3"
            href="#Projects"
          >
            Check out my work
          </a>
        </div>
      </div>
    </section>
  );
}
