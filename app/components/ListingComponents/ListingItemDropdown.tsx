"use client";

import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";

export default function ListingItemDropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center justify-center w-8 h-8 rounded-[10px] bg-white hover:ring-blue-1000 ring-2 ring-transparent cursor-pointer transition">
          <Image src="/images/dots-icon.svg" alt="options" width={20} height={20} />
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
        <Menu.Items className="absolute right-0 mt-2 w-[200px] bg-white border border-gray-1200 rounded-xl shadow-lg z-10 focus:outline-none">
          <ul className="py-2">
            <Menu.Item>
              {({ active }) => (
                <li className={`px-4 py-2  ${active ? "bg-gray-1200/50" : ""}`}>
                  <button className="flex cursor-pointer text-black-1000 items-center gap-2 w-full text-left">
                    <Image src="/icons/view-icon-1.svg" alt="View" width={16} height={16} />
                    View
                  </button>
                </li>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <li className={`px-4 py-2  ${active ? "bg-gray-1200/50" : ""}`}>
                  <button className="flex cursor-pointer text-black-1000 items-center gap-2 w-full text-left">
                    <Image src="/icons/edit-icon-1.svg" alt="Edit" width={16} height={16} />
                    Edit
                  </button>
                </li>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <li className={`px-4 py-2 cursor-pointer ${active ? "bg-red-500/10" : ""}`}>
                  <button className="flex cursor-pointer items-center gap-2 w-full text-left text-red-500">
                    <Image src="/icons/delete-icon-1.svg" alt="Delete" width={16} height={16} />
                    Delete
                  </button>
                </li>
              )}
            </Menu.Item>
          </ul>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
