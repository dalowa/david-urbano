import NavBar from "@/components/NavBar";
import AboutSec from "@/components/sections/AboutSec";
import ContactSec from "@/components/sections/ContactSec";
import FooterSec from "@/components/sections/FooterSec";
import HomeSec from "@/components/sections/HomeSec";
import MainProjectsSec from "@/components/sections/MainProjectsSec";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HomeSec />
        <AboutSec />
        <MainProjectsSec />
        {/* <ContactSec /> */}
      </main>
      <FooterSec />
    </>
  );
}
