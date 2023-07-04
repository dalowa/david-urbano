import IconGithub from "../icons/IconGithub";
import IconInstagram from "../icons/IconInstagram";
import IconLinkedin from "../icons/IconLinkedin";
import IconTwitter from "../icons/IconTwitter";

export default function FooterSec() {
  const iconClass =
    "text-ColorGrisClaro w-6 lg:w-5 hover:text-ColorCeleste transition hover:-translate-y-1";

  return (
    <>
      <footer className=" py-2">
        <div className=" flex w-full gap-10 lg:gap-6 justify-center items-center py-4 lg:fixed lg:left-10 lg:bottom-0 lg:flex-col lg:w-auto lg:p-0">
          <IconGithub Link="https://github.com/dalowa" Class={iconClass} />
          <IconInstagram Link="" Class={iconClass} />
          <IconTwitter Link="" Class={iconClass} />
          <IconLinkedin Link="" Class={iconClass} />
          <div className="w-px h-32 bg-ColorGrisClaro hidden lg:inline"></div>
        </div>
        <div className="hidden lg:flex flex-col items-center gap-5 lg:fixed lg:right-10 lg:bottom-0">
          <p className="vertical-text text-ColorGris font-fontRobotoMono text-sm">
            david.urbano.mmiii@gmail.com
          </p>
          <div className="w-px h-32 bg-ColorGrisClaro"></div>
        </div>
        <div className="flex justify-center items-center text-ColorGris">
          <div className="font-fontInter text-sm">Built by David Urbano</div>
        </div>
      </footer>
    </>
  );
}
