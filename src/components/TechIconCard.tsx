import Image from "next/image";

export default function TechIconCard({ name }: { name: string }) {
  return (
    <div className="transition flex flex-col w-24 justify-between h-32 items-center xl:hover:scale-125">
      <Image
        src={`https://raw.githubusercontent.com/dalowa/david-urbano/main/public/techIcons/${name}.png`}
        alt={`ICON ${name.toLocaleUpperCase()}`}
        width={80}
        height={0o0}
        priority={true}
        className="w-20 h-auto xl:w-28"
      />
      <h5 className="text-center xl:text-xl">{name.toLocaleUpperCase()}</h5>
    </div>
  );
}
