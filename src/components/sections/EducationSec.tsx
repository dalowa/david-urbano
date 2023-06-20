import TechList from "@/data/TechIconCards";
import Image from "next/image";
import TechIconCard from "../TechIconCard";

export default function EducationSec() {
  return (
    <section className="p-1 xl:py-20 xl:px-80 xl:pb-32" id="Education">
      <div className="flex flex-col">
        <h2 className="text-2xl text-ColorA font-PrimaryFont p-2 xl:text-5xl ">{`=> Education`}</h2>
        <div className="font-SecondaryFont flex flex-col xl:flex-row xl:items-center xl:gap-10 xl:w-full xl:justify-around">
          <div className="flex flex-col gap-5 my-5 text-xl font-semibold text-center xl:text-3xl">
            <div className="flex items-center justify-center gap-5">
              <h4 className="text-ColorB w-44 xl:w-72">
                Self-taught - Web Development
              </h4>
              <span className="text-black bg-ColorC p-2 rounded-lg xl:p-4">
                2022 - Present
              </span>
            </div>
            <div className="flex items-center justify-center gap-5">
              <h4 className="text-ColorB w-44 xl:w-72">
                ISIL - Software Development
              </h4>
              <span className="text-black bg-ColorC p-2 rounded-lg xl:p-4">
                2023 - Present
              </span>
            </div>
          </div>
          <div className="bg-ColorE p-1 border border-black rounded-xl flex flex-col gap-5 xl:shadow-black xl:shadow-lg">
            <h3 className="text-xl font-PrimaryFont w-full text-center py-2 xl:text-3xl">{`<< Tech Skills >>`}</h3>
            <div className="font-SecondaryFont font-semibold flex flex-wrap p-3 gap-5 justify-center items-center xl:max-w-md xl:pb-10 xl:gap-8 ">
              {TechList.map((e, i) => (
                <TechIconCard key={i} name={e} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
