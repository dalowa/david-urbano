import ContactUs from "../ContactUs";

export default function ContactSec() {
  return (
    <>
      <section className="bg-ColorAzulMarino py-32 min-h-screen flex flex-col items-center justify-center w-10/12 mx-auto gap-16 sm:gap-10 lg:gap-3 lg:w-10/12 xl:w-9/12 2xl:w-7/12 ">
        <div className="text-ColorGrisClaro justify-center text-titleSection font-fontInter font-semibold flex w-full gap-2 items-center leading-none">
          <span className="text-ColorCeleste text-numberTitleSection">03.</span>
          <h2 className="">Contact Me</h2>
          {/* <div className="h-0.5 w-6/12 bg-ColorGrisOscuro"></div> */}
        </div>
        <ContactUs />
      </section>
    </>
  );
}
