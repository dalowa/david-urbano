import TechList from "@/data/TechIconCards";

import TechIconCard from "../TechIconCard";

export default function EducationSec() {
  return (
    <section
      className="flex justify-center items-center py-6 lg:py-10 xl:py-16"
      id="Education"
    >
      <div className="flex flex-col w-11/12 justify-center xl:w-10/12">
        <h2 className="text-2xl text-ColorA font-PrimaryFont p-2 md:text-3xl lg:text-4xl xl:text-5xl">{`=> Education`}</h2>
        <div className="font-SecondaryFont flex flex-col gap-5 justify-center items-center lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-10 text-xl font-semibold text-center w-full sm:my-10 md:w-10/12 md:text-2xl lg:w-6/12 lg:gap-20 2xl:text-3xl">
            <div className="flex items-center justify-between gap-0">
              <h4 className="text-ColorB w-6/12 md:text-left">
                Self-taught - Web Development
              </h4>
              <span className="text-black bg-ColorC p-2 rounded-lg">
                2022 - Present
              </span>
            </div>
            <div className="flex items-center justify-between gap-0">
              <h4 className="text-ColorB w-6/12 md:text-left">
                ISIL - Software Development
              </h4>
              <span className="text-black bg-ColorC p-2 rounded-lg">
                2023 - Present
              </span>
            </div>
          </div>
          <div className="bg-ColorE p-1 border border-black rounded-xl flex flex-col gap-5 w-full sm:w-9/12 md:w-11/12 md:py-5 lg:w-6/12 lg:p-1 lg:gap-0 xl:w-5/12 2xl:pt-5 shadow-lg shadow-black">
            <h3 className="text-xl font-PrimaryFont w-full text-center py-2 md:text-3xl lg:text-2xl 2xl:text-3xl">{`<< Tech Skills >>`}</h3>
            <div className="font-SecondaryFont font-semibold flex flex-wrap p-3 gap-5 justify-center items-center lg:pb-10 lg:pt-5 2xl:py-16">
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
