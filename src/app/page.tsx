import NavBar from "@/components/NavBar";
import AboutSec from "@/components/sections/AboutSec";
import FooterSec from "@/components/sections/FooterSec";

import HomeSec from "@/components/sections/HomeSec";
import ProjectsSec from "@/components/sections/ProjectsSec";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="">
        <HomeSec />
        <AboutSec />
        {/* <ProjectsSec /> */}
      </main>
      <FooterSec />
    </>
  );
}
