import Project from "../Project";
import ProjectsDataList from "@/data/ProjectsDataList";

export default function ProjectsSec() {
  return (
    <section
      id="Projects"
      className=" bg-ColorAzulMarino py-44 min-h-screen flex flex-col items-start w-11/12 sm:w-10/12 md:w-11/12 md:px-5 mx-auto gap-7 sm:gap-10 lg:gap-3 lg:w-10/12 xl:w-9/12 2xl:w-7/12"
    >
      <div className="text-ColorGrisClaro justify-start text-titleSection font-fontInter font-semibold flex w-full gap-2 items-center leading-none mb-16 px-2">
        <span className="text-ColorCeleste text-numberTitleSection">03.</span>
        <h2 className="">{"Some Things I've Built"}</h2>
      </div>
      <div className="px-2 w-full flex flex-col gap-10">
        {ProjectsDataList.map((e, i) => (
          <Project
            isRight={e.isRight}
            key={i}
            id={e.id}
            type={e.type}
            title={e.title}
            description={e.description}
            techList={e.techList}
            linkDeploy={e.linkDeploy}
            linkGithub={e.linkGithub}
          ></Project>
        ))}
      </div>
    </section>
  );
}
