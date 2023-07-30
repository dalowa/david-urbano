import Project from "@/data/InterfaceProject";
import IconDeploy from "./icons/IconDeploy";
import IconGithub from "./icons/IconGithub";

export default function Project({
  isRight,
  id,
  type,
  title,
  description,
  techList,
  linkGithub,
  linkDeploy,
}: Project) {
  return (
    <>
      <div
        className={
          isRight
            ? "relative flex w-full min-h-projectMinHeight shadow-shadowProject sm:items-center lg:shadow-none"
            : "relative justify-end flex w-full min-h-projectMinHeight shadow-shadowProject sm:items-center lg:shadow-none"
        }
      >
        <div
          className={
            id == "01"
              ? "w-full min-h-projectMinHeight bg-top bg-cover bg-no-repeat bg-bg01 sm:bg-bg01sm md:bg-bg01md lg:bg-bg01lg xl:bg-bg01xl 2xl:bg-bg012xl lg:w-7/12"
              : id == "02"
              ? "w-full min-h-projectMinHeight bg-top bg-cover bg-no-repeat bg-red-600 lg:w-7/12"
              : id == "03"
              ? "w-full min-h-projectMinHeight bg-top bg-cover bg-no-repeat bg-white lg:w-7/12"
              : "w-full min-h-projectMinHeight bg-top bg-cover bg-no-repeat bg-green-500 lg:w-7/12"
          }
        ></div>
        <a
          className={
            isRight
              ? "hidden lg:inline lg:left-0 lg:inset-y-0 lg:absolute min-h-projectMinHeight lg:w-7/12 bg-ColorCelesteFiltro hover:bg-transparent transition-colors z-10"
              : "hidden lg:inline lg:right-0 lg:inset-y-0 lg:absolute min-h-projectMinHeight lg:w-7/12 bg-ColorCelesteFiltro hover:bg-transparent transition-colors z-10"
          }
          href=""
          target="_blank"
        ></a>

        <div
          className={`absolute inset-y-0 bg-ColorAzulMarinoProject min-h-projectMinHeight py-6 sm:py-10 md:py-14 lg:py-7 xl:py-5 lg:bg-transparent flex flex-col gap-2 justify-between lg:w-7/12 ${
            isRight ? "lg:right-0 lg:items-end" : "lg:left-0 items-start"
          }`}
        >
          <div
            className={`flex flex-col gap-2 w-10/12 md:w-10/12 mx-auto lg:mx-0 ${
              isRight ? "lg:items-end" : "lg:items-start"
            }`}
          >
            {" "}
            <h4 className="text-ColorCeleste">{type}</h4>
            <h5 className="text-white font-bold text-projectTitle">{title}</h5>
          </div>
          <p
            className={`lg:z-20 text-ColorGrisClaro my-5 w-10/12 md:w-10/12 mx-auto lg:bg-ColorProjectText lg:p-5 lg:my-1 lg:mx-0 lg:w-full ${
              isRight ? "lg:text-right" : "lg:text-left"
            }`}
          >
            {description}
          </p>
          <div
            className={`flex flex-col gap-5 w-10/12 md:w-10/12 mx-auto lg:mx-0 ${
              isRight ? "lg:items-end" : "lg:items-start"
            }`}
          >
            <ul className="flex text-ColorGrisClaro gap-2 flex-wrap text-sm">
              {techList.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
            <div className="flex gap-5">
              {linkGithub !== undefined ? (
                <IconGithub
                  Link={linkGithub}
                  Class="w-5 text-ColorGrisClaro hover:text-ColorCeleste transition hover:-translate-y-1"
                />
              ) : (
                <></>
              )}

              {linkDeploy !== undefined ? (
                <IconDeploy
                  Link={linkDeploy}
                  Class="w-5 text-ColorGrisClaro hover:text-ColorCeleste transition-colors hover:-translate-y-1"
                />
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
