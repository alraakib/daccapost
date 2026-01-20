import DaccaPostLogo from "@/assets/daccapost-logo.png";
import NavMenu from "@/components/nav-menu";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="items-center justify-center hidden px-4 border-b border-black md:flex min-h-24">
        <Image src={DaccaPostLogo} alt="Logo" width={184} height={23} />
      </div>
      <div className="flex items-center justify-between px-4 py-2 mx-auto">
        {/* Menu Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
        </svg>
        <Image
          src={DaccaPostLogo}
          className="block mx-auto my-2 md:hidden"
          alt="Logo"
          width={184}
          height={23}
        />

        {/* Nav Menu */}
        <NavMenu />
        {/* Search Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
        </svg>
      </div>
    </header>
  );
};

export default Header;
