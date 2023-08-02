import ContactMe from "../ContactMe";

export default function ContactSec() {
  return (
    <>
      <section
        id="Contact"
        className="bg-ColorAzulMarino py-28 min-h-screen flex flex-col items-center justify-center w-10/12 mx-auto gap-12 sm:gap-10 lg:gap-3 lg:w-10/12 xl:w-9/12 2xl:w-7/12"
      >
        <div className="text-ColorGrisClaro justify-center text-titleSection font-fontInter font-semibold flex w-full gap-2 items-center leading-none mb-16">
          <span className="text-ColorCeleste text-numberTitleSection">03.</span>
          <h2 className="">Contact Me</h2>
        </div>
        <ContactMe />
      </section>
    </>
  );
}
