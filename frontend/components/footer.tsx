import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-black text-white grid grid-cols-2 md:flex flex-row gap-4 justify-between p-8">
      <div>
        <p className="font-bold mb-2">Abstract</p>
        <p>Branches</p>
      </div>

      <div>
        <p className="font-bold mb-2">Resources</p>
        <p>Blog</p>
        <p>Help Center</p>
        <p>Release Notes</p>
        <p>Status</p>
      </div>

      <div>
        <p className="font-bold mb-2">Community</p>
        <p>Twitter</p>
        <p>LinkedIn</p>
        <p>Facebook</p>
        <p>Dribble</p>
        <p>Podcast</p>
      </div>

      <div>
        <p className="font-bold mb-2">Company</p>
        <p>About Us</p>
        <p>Careers</p>
        <p>Legal</p>

        <div className="md:flex md:flex-row md:gap-16 mt-4">
          <div>
            <p className="font-bold mb-2">Contact Us</p>
            <p>info@abstract.com</p>
          </div>

          <div className="text-sm mt-1 max-sm:absolute max-sm:bg-black max-sm:w-full max-sm:left-0 max-sm:text-center max-sm:mt-6">
            <Image className="max-sm:mx-auto" src="/icons/logo.png" alt="Logo" width={25} height={25} />

            <p className="mt-2">&copy; Copyright 2022</p>
            <p>Abstract Studios Design, Inc.</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>   
  );
};
