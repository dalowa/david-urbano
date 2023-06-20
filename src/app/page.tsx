import NavBar from "@/components/NavBar";
import AboutMeSec from "@/components/sections/AboutMeSec";
import EducationSec from "@/components/sections/EducationSec";
import HomeSec from "@/components/sections/HomeSec";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HomeSec />
      <AboutMeSec />
      <EducationSec />
    </main>
  );
}
