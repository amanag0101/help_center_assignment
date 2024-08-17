import Image from "next/image";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="bg-black text-white flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 p-4">
      <div className="flex gap-3">
        <div className="flex items-center gap-2">
          <Image src="/icons/logo.png" alt="Logo" width={25} height={25} />
          <p className="font-medium">Abstract</p>

          <p className="border border-white h-6"></p>

          <p className="">Help Center</p>
        </div>
      </div>

      <Button
        className="border rounded-md border-white bg-[#1a1a1a]"
        text="Submit a request"
      />
    </header>
  );
};
