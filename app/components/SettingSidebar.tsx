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
                              href="/Setting/Profile"
                              className={`${baseClass} ${pathname === "/Setting/Profile" ? activeClass : inactiveClass}`}
                         >
                              <img src="/images/profile-icon.svg" alt="" />
                              Profile
                         </Link>
                    </li>

                    <li>
                         <Link
                              href="/Setting/Billing"
                              className={`${baseClass} ${pathname === "/Setting/Billing" ? activeClass : inactiveClass}`}
                         >
                              <img src="/images/wallet-icon.svg" alt="" />
                              Bank & Billing
                         </Link>
                    </li>

                    <li>
                         <Link
                              href="/Setting/Security"
                              className={`${baseClass} ${pathname === "/Setting/Security" ? activeClass : inactiveClass}`}
                         >
                              <img src="/images/shield-icon2.svg" alt="" />
                              Security
                         </Link>
                    </li>

                    <li>
                         <Link
                              href="/Setting/Notifications"
                              className={`${baseClass} ${pathname === "/Setting/Notifications" ? activeClass : inactiveClass}`}
                         >
                              <img src="/images/bell-icon.svg" alt="" />
                              Notifications
                         </Link>
                    </li>

                    <li>
                         <Link
                              href="/Setting/Teams"
                              className={`${baseClass} ${pathname === "/Setting/Teams" ? activeClass : inactiveClass}`}
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
