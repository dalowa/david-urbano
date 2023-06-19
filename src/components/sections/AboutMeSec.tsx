import Image from "next/image";

export default function AboutMeSec() {
  return (
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
  );
}