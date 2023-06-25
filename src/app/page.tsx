import NavBar from "@/components/NavBar";
import AboutSec from "@/components/sections/AboutSec";

import HomeSec from "@/components/sections/HomeSec";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="">
        <HomeSec />
        <AboutSec />
      </main>
    </>
  );
}
