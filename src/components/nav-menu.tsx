"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMenu = () => {
  const pathName = usePathname();

  const menuItems = [
    {
      title: "সর্বশেষ",
      link: "/",
      children: [
        { title: "সর্বশেষ সংবাদ", link: "#" },
        { title: "সর্বশেষ ভিডিও", link: "#" },
        { title: "সর্বশেষ ছবি", link: "#" },
      ],
    },
    {
      title: "জাতীয়",
      link: "#",
      children: null,
    },
    {
      title: "রাজনীতি",
      link: "#",
      children: null,
    },
    {
      title: "অর্থনীতি",
      link: "#",
      children: null,
    },
    {
      title: "আন্তর্জাতিক",
      link: "#",
      children: null,
    },
  ];

  return (
    <nav>
      <ul className="items-center hidden gap-5 font-bold md:flex">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="relative flex items-center gap-1 px-2 py-1 cursor-pointer group"
          >
            {item.title}
            {item.children && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
            )}
            <div
              className={`absolute left-0 right-0 bottom-0 h-0.5 bg-black scale-x-0 ${pathName === item.link ? "scale-x-100 opacity-100" : "group-hover:scale-x-100 group-hover:opacity-100"} opacity-0  transition duration-500 origin-left`}
            />
            {item.children && (
              <ul className="absolute left-0 invisible w-40 mt-1 font-normal duration-500 origin-left bg-white border border-gray-100 divide-y shadow-lg opacity-0 top-3 group-hover:top-full trasition group-hover:opacity-100 group-hover:visible">
                {item.children.map((child, childIndex) => (
                  <li key={childIndex} className="px-4 py-2 hover:bg-gray-100">
                    <Link href={child.link}>{child.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
