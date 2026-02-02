"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function SettingSidebar() {
     const pathname = usePathname();

     const baseClass =
          "flex items-center gap-3 py-[14px] px-4 text-base font-normal font-inter leading-6 rounded-[10px]";

     const activeClass = "bg-blue-1100/[10%] text-blue-1000 active";
     const inactiveClass = "text-gray-1400";

     return (
          <div className="overflow-auto setting-sidebar">
               <ul className="p-3 space-y-1 lg:block flex lg:w-auto w-[780px]">
                    <li>
                         <Link
                              href="/Settings/Profile"
                              className={`${baseClass} ${pathname === "/Settings/Profile" ? activeClass : inactiveClass}`}
                         >
                              <img src="/images/profile-icon.svg" alt="" />
                              Profile
                         </Link>
                    </li>

                    <li>
                         <Link
                              href="/Settings/Billing"
                              className={`${baseClass} ${pathname === "/Settings/Billing" ? activeClass : inactiveClass}`}
                         >
                              <img src="/images/wallet-icon.svg" alt="" />
                              Bank & Billing
                         </Link>
                    </li>

                    <li>
                         <Link
                              href="/Settings/Security"
                              className={`${baseClass} ${pathname === "/Settings/Security" ? activeClass : inactiveClass}`}
                         >
                              <img src="/images/shield-icon2.svg" alt="" />
                              Security
                         </Link>
                    </li>

                    <li>
                         <Link
                              href="/Settings/Notifications"
                              className={`${baseClass} ${pathname === "/Settings/Notifications" ? activeClass : inactiveClass}`}
                         >
                              <img src="/images/bell-icon.svg" alt="" />
                              Notifications
                         </Link>
                    </li>

                    <li>
                         <Link
                              href="/Settings/Team"
                              className={`${baseClass} ${pathname === "/Settings/Team" ? activeClass : inactiveClass}`}
                         >
                              <img src="/images/user-icon.svg" alt="" />
                              Team & Access
                         </Link>
                    </li>
               </ul>
          </div>
     );
}

export default SettingSidebar;
