"use client";

import { Menu } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchNotifications, markAsRead } from "@/store/slices/notificationsSlice";

export const NotificationDropdown = () => {
  const { list: notifications, loading } = useAppSelector(state => state.notifications);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex cursor-pointer rounded-full hover:bg-blue-1000/10 items-center justify-center md:w-10 w-6 md:h-10 h-6 relative focus:outline-none">
        <Image
          src="../images/notification-icon.svg"
          alt="notifications"
          width={16}
          height={16}
          className="md:h-auto h-4"
        />

        {notifications.filter(n => !n.read).length > 0 && (
          <span className="text-white absolute -top-1 -right-1 flex items-center justify-center font-medium md:text-xs text-[10px] leading-4 bg-blue-1100 md:w-5 w-4 md:h-5 h-4 rounded-full">
            {notifications.filter(n => !n.read).length}
          </span>
        )}
      </Menu.Button>

      <Menu.Items className="absolute md:right-0 -right-14 md:mt-3 mt-4 md:w-96 w-[80vw] bg-white rounded-xl shadow-xl border-gray-2100 z-50 focus:outline-none">
        <div className="px-4 md:py-4 py-3 font-semibold text-sm border-b border-gray-2100">
          {loading ? "Loading..." : "Notifications"}
        </div>

        <div className="max-h-80 overflow-y-auto scrollbar-1">
          {notifications.map(item => (
            <Menu.Item key={item.id}>
              {({ active }) => (
                <div
                  className={`px-4 md:py-3 py-2 cursor-pointer ${
                    active ? "bg-gray-1200/50" : ""
                  } ${item.read ? "opacity-60" : "opacity-100"}`}
                  onClick={() => dispatch(markAsRead(item.id))}
                >
                  <p className="md:text-sm text-xs font-medium">{item.title}</p>
                  <p className="md:text-xs text-[10px] text-gray-500">{item.desc}</p>
                </div>
              )}
            </Menu.Item>
          ))}
        </div>

        <div className="md:p-3 p-2 border-t border-gray-2100 text-center">
          <Link href={"/Notifications"} className="md:text-sm text-xs text-blue-600 hover:underline">
            View all
          </Link>
        </div>
      </Menu.Items>
    </Menu>
  );
};
