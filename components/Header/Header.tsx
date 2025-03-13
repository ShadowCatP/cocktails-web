import Image from "next/image";

export const Header = () => {
  return (
    <header className="p-3">
      <div className="flex items-center gap-3 font-semibold">
        <Image
          src={"/logo.png"}
          width={1775}
          height={1480}
          alt="Logo"
          className="w-16"
        />
        <h1 className="text-3xl select-none">
          Cocktails{" "}
          <span className="rounded-md bg-blue-400 p-2 text-white">hub</span>
        </h1>
      </div>
    </header>
  );
};
