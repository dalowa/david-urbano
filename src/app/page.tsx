import NavBar from "@/components/NavBar";
import AboutMeSec from "@/components/sections/AboutMeSec";
import HomeSec from "@/components/sections/HomeSec";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HomeSec />
      <AboutMeSec />
    </main>
  );
}
