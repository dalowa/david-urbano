import Image from "next/image";

export default function TechIconCard({ name }: { name: string }) {
  return (
    <div className="transition flex flex-col w-3/12 justify-between h-32 items-center hover:scale-125 md:h-40 lg:w-3/12 lg:h-28 2xl:h-32">
      <Image
        src={`https://raw.githubusercontent.com/dalowa/david-urbano/main/public/techIcons/${name}.png`}
        alt={`ICON ${name.toLocaleUpperCase()}`}
        width={80}
        height={0o0}
        priority={true}
        className="w-full h-auto md:w-9/12 xl:w-10/12 2xl:w-7/12"
      />
      <h5 className="text-center md:text-xl lg:text-sm 2xl:text-base">
        {name.toLocaleUpperCase()}
      </h5>
    </div>
  );
}
