import Image from "next/image";

import Searchbar from "./Seachbar";
import HeaderMobile from "./HeaderMobile";
import { useMenu } from "@/app/composables/useMenu";

import logo from "@/app/assets/logo.png";

export default function Header() {
  const { menu: menus } = useMenu();
  return (
    <header className="bg-yellow-600 text-black w-full flex items-center justify-between p-4">
      <a className="h-12 w-12 aspect-square" href="/" rel="noopener noreferrer">
        <Image
          src={logo}
          alt="Arteez Logo"
          className="object-contain object-left-top"
          width={100}
          height={24}
          priority
        />
      </a>
      <Searchbar text="" />
      <div className="hidden md:flex items-center space-x-1">
        {menus.map((menu, index) => (
          <a href={menu.link} key={index}>
            <div className="hover:bg-yellow-400/40 p-2 transition-colors duration-150 rounded-md">
              {/* {menu.icon} */}
              <span>{menu.title}</span>
            </div>
          </a>
        ))}
      </div>
      <HeaderMobile />
    </header>
  );
}
