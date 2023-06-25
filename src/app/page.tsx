import NavBar from "@/components/NavBar";
import IconDeploy from "@/components/icons/IconDeploy";
import AboutMeSec from "@/components/sections/AboutMeSec";
import EducationSec from "@/components/sections/EducationSec";
import HomeSec from "@/components/sections/HomeSec";
import ProjectsSec from "@/components/sections/ProjectsSec";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="">
        <HomeSec />
      </main>
    </>
  );
}
