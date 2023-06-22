import Image from "next/image";

export default function AboutMeSec() {
  return (
    <section
      className="bg-ColorC sm:p-10 xl:pt-24 xl:pb-36  xl:w-full xl:flex xl:justify-center"
      id="AboutMe"
    >
      <div className="flex flex-col gap-5 xl:flex-col xl:px-0 xl:gap-1 xl:w-10/12 xl:justify-center xl:items-center 2xl:w-11/12">
        <h2 className="font-PrimaryFont text-ColorE text-2xl md:text-3xl lg:text-4xl xl:text-5xl xl:w-full xl:my-5">{`=> About Me`}</h2>
        <div className="flex flex-col gap-5 lg:flex-row xl:p-3 2xl:p-0">
          <div className="flex flex-col gap-5 xl:gap-10 lg:w-6/12 2xl:justify-end 2xl:items-end">
            <p className="font-SecondaryFont text-base lg:text-xl lg:w-full mx-auto md:text-xl md:text-right xl:text-left xl:text-2xl 2xl:text-3xl 2xl:w-10/12">
              {`I am a young bilingual web developer located in Lima, Peru. I love the
      idea of being able to create something that can change someone's life
      for the better and I like to think that we can make a better world
      with the help of software`}
            </p>
            <h4 className="font-SecondaryFont text-ColorA w-full md:text-lg lg:w-4/5 lg:mx-auto lg:text-xl text-right xl:w-4/5 xl:text-2xl ">
              Read more about me{" "}
              <a className="font-bold underline underline-offset-2 cursor-pointer hover:text-ColorE transition">
                here
              </a>
            </h4>
          </div>
          <div className="flex w-full justify-center items-center h-72 lg:w-6/12">
            <div className="border-2 border-black p-1 bg-ColorB transition-all ease-in-out duration-100 hover:border-none hover:p-0 rounded-lg">
              <Image
                src={
                  "https://raw.githubusercontent.com/dalowa/david-urbano/00405f7387dcfb02f0b0d1ba2255df2f1736f0e2/public/Profile-David.svg"
                }
                alt="Profile David Urbano"
                width={0o0}
                height={0o0}
                className="w-full h-auto border-2 border-black bg-ColorE hover:border-0 transition-all ease-in-out duration-100 hover:shadow-black	hover:shadow-lg	rounded-lg hover:bg-white xl:w-96"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
