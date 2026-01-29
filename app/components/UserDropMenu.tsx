import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

interface UserDropMenuProps {
  avatarUrl?: string;  
  initials?: string;   
  hasProfilePicture: boolean; 
}

const UserDropMenu = ({ avatarUrl, initials, hasProfilePicture }: UserDropMenuProps) => {
  return (
    <div className="relative">
      <Menu>
        <MenuButton className="inline-flex cursor-pointer items-center gap-1 rounded-lg md:px-2 px-0 py-1.5 focus:outline-none">
          <span className="text-blue-1100 font-dm-sans font-normal md:text-sm text-xs rounded-full flex items-center justify-center">
            {hasProfilePicture ? (
              <Image
                src={avatarUrl!}
                alt="user"
                width={32}
                height={32}
                className="rounded-full"
              />
            ) : initials ? (
              <span className="w-8 h-8 rounded-full bg-blue-1000/10 flex items-center justify-center">{initials}</span>
            ) : (
              <Image
                src="/images/user-img.png"
                alt="user"
                width={32}
                height={32}
                className="rounded-full"
              />
            )}
          </span>

          <span className="md:flex hidden items-center justify-center w-4 h-4">
            <img src="../images/down-arrow.svg" alt="" />
          </span>
        </MenuButton>

        <MenuItems className="w-52 absolute right-0 origin-top-right rounded-xl bg-white border border-gray-2100 shadow1 p-1 focus:outline-none">
          <MenuItem>
            <Link
              href={"/Setting/Profile"}
              className="group hover:text-blue-500 hover:bg-gray-1200/50 cursor-pointer text-sm flex w-full items-center gap-2 rounded-lg px-3 py-1.5 text-gray-1000 leading-6 font-normal"
            >
              Account Settings
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href={"/Setting/Profile"}
              className="group hover:text-blue-500 hover:bg-gray-1200/50 cursor-pointer text-sm flex w-full items-center gap-2 rounded-lg px-3 py-1.5 text-gray-1000 leading-6 font-normal"
            >
              Profile Settings
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href={"/Setting/Profile"}
              className="group hover:text-blue-500 hover:bg-gray-1200/50 cursor-pointer text-sm flex w-full items-center gap-2 rounded-lg px-3 py-1.5 text-gray-1000 leading-6 font-normal"
            >
              Change Profile Picture
            </Link>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
};

export default UserDropMenu;
