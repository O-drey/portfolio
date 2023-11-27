"use client";
import Image from "next/image";

import { useMenu } from "../composables/useMenu";
import logo from "@/app/assets/logo.png";

import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

// export default function MobileHeader() {
//   const { menu } = useMenu();
//   return (
//     <div className="space-y-4 lg:hidden">
//       <div className="flex items-center">
//         <Image
//           alt="logo"
//           src={logo}
//           className="h-12 w-12 object-contain object-left-top"
//         />

//         <div className="p-2  hover:bg-black/30 rounded-full border border-black aspect-square">
//           <XMarkIcon className="h-7 w-7 text-black" />
//         </div>
//       </div>
//       <nav>
//         {menu.map((m, i) => (
//           <div key={i}>
//             <dt className="text-base">{m.title}</dt>
//             <dd className="text-sm">{m.description}</dd>
//           </div>
//         ))}
//       </nav>
//     </div>
//   );
// }

export default function HeaderMobile() {
  const { menu } = useMenu();
  return (
    <div className="md:hidden block text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            <XMarkIcon
              className="h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1">
              {menu.map((men, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <Link
                      href={men.link}
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {men.title}
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
