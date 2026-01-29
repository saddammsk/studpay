"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setActiveMenu } from "@/store/slices/navigationSlice";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItemProps {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
}

const menuItems: MenuItemProps[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    href: "/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="group-hover:stroke-blue-1100" d="M7.5 2.5H3.33333C2.8731 2.5 2.5 2.8731 2.5 3.33333V9.16667C2.5 9.6269 2.8731 10 3.33333 10H7.5C7.96024 10 8.33333 9.6269 8.33333 9.16667V3.33333C8.33333 2.8731 7.96024 2.5 7.5 2.5Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path className="group-hover:stroke-blue-1100" d="M16.666 2.5H12.4993C12.0391 2.5 11.666 2.8731 11.666 3.33333V5.83333C11.666 6.29357 12.0391 6.66667 12.4993 6.66667H16.666C17.1263 6.66667 17.4993 6.29357 17.4993 5.83333V3.33333C17.4993 2.8731 17.1263 2.5 16.666 2.5Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path className="group-hover:stroke-blue-1100" d="M16.666 10H12.4993C12.0391 10 11.666 10.3731 11.666 10.8333V16.6667C11.666 17.1269 12.0391 17.5 12.4993 17.5H16.666C17.1263 17.5 17.4993 17.1269 17.4993 16.6667V10.8333C17.4993 10.3731 17.1263 10 16.666 10Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path className="group-hover:stroke-blue-1100" d="M7.5 13.3335H3.33333C2.8731 13.3335 2.5 13.7066 2.5 14.1668V16.6668C2.5 17.1271 2.8731 17.5002 3.33333 17.5002H7.5C7.96024 17.5002 8.33333 17.1271 8.33333 16.6668V14.1668C8.33333 13.7066 7.96024 13.3335 7.5 13.3335Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "listings",
    label: "Listings",
    href: "/Listings",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="group-hover:stroke-blue-1100" d="M5 18.3334V3.33341C5 2.89139 5.17559 2.46746 5.48816 2.1549C5.80072 1.84234 6.22464 1.66675 6.66667 1.66675H13.3333C13.7754 1.66675 14.1993 1.84234 14.5118 2.1549C14.8244 2.46746 15 2.89139 15 3.33341V18.3334H5Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path className="group-hover:stroke-blue-1100" d="M4.99935 10H3.33268C2.89065 10 2.46673 10.1756 2.15417 10.4882C1.84161 10.8007 1.66602 11.2246 1.66602 11.6667V16.6667C1.66602 17.1087 1.84161 17.5326 2.15417 17.8452C2.46673 18.1577 2.89065 18.3333 3.33268 18.3333H4.99935" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path className="group-hover:stroke-blue-1100" d="M15 7.5H16.6667C17.1087 7.5 17.5326 7.6756 17.8452 7.98816C18.1577 8.30072 18.3333 8.72464 18.3333 9.16667V16.6667C18.3333 17.1087 18.1577 17.5326 17.8452 17.8452C17.5326 18.1577 17.1087 18.3333 16.6667 18.3333H15" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path className="group-hover:stroke-blue-1100" d="M8.33398 5H11.6673" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path className="group-hover:stroke-blue-1100" d="M8.33398 8.33325H11.6673" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path className="group-hover:stroke-blue-1100" d="M8.33398 11.6667H11.6673" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path className="group-hover:stroke-blue-1100" d="M8.33398 15H11.6673" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "tenants",
    label: "Tenants",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="group-hover:stroke-blue-1100" d="M13.3327 17.5V15.8333C13.3327 14.9493 12.9815 14.1014 12.3564 13.4763C11.7313 12.8512 10.8834 12.5 9.99935 12.5H4.99935C4.11529 12.5 3.26745 12.8512 2.64233 13.4763C2.01721 14.1014 1.66602 14.9493 1.66602 15.8333V17.5" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path className="group-hover:stroke-blue-1100" d="M7.49935 9.16667C9.3403 9.16667 10.8327 7.67428 10.8327 5.83333C10.8327 3.99238 9.3403 2.5 7.49935 2.5C5.6584 2.5 4.16602 3.99238 4.16602 5.83333C4.16602 7.67428 5.6584 9.16667 7.49935 9.16667Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path className="group-hover:stroke-blue-1100" d="M18.334 17.5001V15.8334C18.3334 15.0948 18.0876 14.3774 17.6351 13.7937C17.1826 13.2099 16.5491 12.793 15.834 12.6084" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path className="group-hover:stroke-blue-1100" d="M13.334 2.6084C14.051 2.79198 14.6865 3.20898 15.1403 3.79366C15.5942 4.37833 15.8405 5.09742 15.8405 5.83757C15.8405 6.57771 15.5942 7.2968 15.1403 7.88147C14.6865 8.46615 14.051 8.88315 13.334 9.06673" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "applications",
    label: "Applications",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="group-hover:stroke-blue-1100" d="M12.5007 1.66675H5.00065C4.55862 1.66675 4.1347 1.84234 3.82214 2.1549C3.50958 2.46746 3.33398 2.89139 3.33398 3.33341V16.6667C3.33398 17.1088 3.50958 17.5327 3.82214 17.8453C4.1347 18.1578 4.55862 18.3334 5.00065 18.3334H15.0007C15.4427 18.3334 15.8666 18.1578 16.1792 17.8453C16.4917 17.5327 16.6673 17.1088 16.6673 16.6667V5.83341L12.5007 1.66675Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path className="group-hover:stroke-blue-1100" d="M11.666 1.66675V5.00008C11.666 5.44211 11.8416 5.86603 12.1542 6.17859C12.4667 6.49115 12.8907 6.66675 13.3327 6.66675H16.666" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path className="group-hover:stroke-blue-1100" d="M8.33268 7.5H6.66602" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path className="group-hover:stroke-blue-1100" d="M13.3327 10.8333H6.66602" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path className="group-hover:stroke-blue-1100" d="M13.3327 14.1667H6.66602" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "finances",
    label: "Finances",
    href: "/Finances",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="group-hover:stroke-blue-1100" d="M15.8333 5.83333V3.33333C15.8333 3.11232 15.7455 2.90036 15.5893 2.74408C15.433 2.5878 15.221 2.5 15 2.5H4.16667C3.72464 2.5 3.30072 2.67559 2.98816 2.98816C2.67559 3.30072 2.5 3.72464 2.5 4.16667C2.5 4.60869 2.67559 5.03262 2.98816 5.34518C3.30072 5.65774 3.72464 5.83333 4.16667 5.83333H16.6667C16.8877 5.83333 17.0996 5.92113 17.2559 6.07741C17.4122 6.23369 17.5 6.44565 17.5 6.66667V10M17.5 10H15C14.558 10 14.134 10.1756 13.8215 10.4882C13.5089 10.8007 13.3333 11.2246 13.3333 11.6667C13.3333 12.1087 13.5089 12.5326 13.8215 12.8452C14.134 13.1577 14.558 13.3333 15 13.3333H17.5C17.721 13.3333 17.933 13.2455 18.0893 13.0893C18.2455 12.933 18.3333 12.721 18.3333 12.5V10.8333C18.3333 10.6123 18.2455 10.4004 18.0893 10.2441C17.933 10.0878 17.721 10 17.5 10Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path className="group-hover:stroke-blue-1100" d="M2.5 4.16675V15.8334C2.5 16.2754 2.67559 16.6994 2.98816 17.0119C3.30072 17.3245 3.72464 17.5001 4.16667 17.5001H16.6667C16.8877 17.5001 17.0996 17.4123 17.2559 17.256C17.4122 17.0997 17.5 16.8878 17.5 16.6667V13.3334" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "studguarantee",
    label: "StudGuarantee",
    href: "/StudGuarantee",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="group-hover:stroke-blue-1100" d="M17.4993 1.66675L15.8326 3.33341M15.8326 3.33341L18.3326 5.83341L15.4159 8.75008L12.9159 6.25008M15.8326 3.33341L12.9159 6.25008M9.49092 9.67508C9.9212 10.0996 10.2633 10.6051 10.4974 11.1624C10.7315 11.7197 10.8531 12.3178 10.8551 12.9223C10.8571 13.5267 10.7396 14.1256 10.5092 14.6845C10.2788 15.2433 9.94014 15.7511 9.51271 16.1785C9.08528 16.606 8.57752 16.9446 8.01867 17.175C7.45982 17.4054 6.86092 17.523 6.25645 17.5209C5.65197 17.5189 5.05387 17.3973 4.49658 17.1632C3.93928 16.9291 3.43381 16.587 3.00925 16.1567C2.17436 15.2923 1.71239 14.1346 1.72283 12.9328C1.73327 11.7311 2.2153 10.5815 3.06508 9.73175C3.91487 8.88196 5.06443 8.39993 6.26616 8.38949C7.4679 8.37905 8.62566 8.84102 9.49009 9.67591L9.49092 9.67508ZM9.49092 9.67508L12.9159 6.25008" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "apisync",
    label: "API Sync",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="group-hover:stroke-blue-1100" d="M2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C12.0967 2.50789 14.1092 3.32602 15.6167 4.78333L17.5 6.66667" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path className="group-hover:stroke-blue-1100" d="M17.5007 2.5V6.66667H13.334" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path className="group-hover:stroke-blue-1100" d="M17.5 10C17.5 11.9891 16.7098 13.8968 15.3033 15.3033C13.8968 16.7098 11.9891 17.5 10 17.5C7.90329 17.4921 5.89081 16.674 4.38333 15.2167L2.5 13.3333" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path className="group-hover:stroke-blue-1100" d="M6.66667 13.3333H2.5V17.4999" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const SidebarMenuItem = ({ item, onMenuClick }: { item: MenuItemProps; onMenuClick: (id: string) => void }) => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };
 
  return (
    <li className="mb-1">
      <Link
        href={item.href}
        onClick={() => onMenuClick(item.id)}
        className={`group flex items-center gap-3 py-3 px-4 rounded-lg font-dm-sans text-base font-normal leading-6 transition-all duration-300 ${
          isActive(item.href)
            ? "bg-blue-1000/10 text-blue-1000 font-medium"
            : "text-gray-1000 hover:bg-blue-1000/10 hover:text-blue-1000 hover:font-medium"
        }`}
      >
        <span className="flex items-center justify-center w-5 h-5">{item.icon}</span>
        <span className="flex-1 w-full">{item.label}</span>
      </Link>
    </li>
  );
};

const Sidebar = ({ isOpen = false }: { isOpen: boolean }) => {
  const dispatch = useAppDispatch();
  const activeMenu = useAppSelector((state) => state.navigation.activeMenu);

  const handleMenuClick = (menuId: string) => {
    dispatch(setActiveMenu(menuId));
  };

  return (
    <div
      className={`bg-white xl:max-w-63.75 border-r border-gray-1100 max-w-50 w-full fixed top-0 h-full 
      flex flex-col justify-between z-50 transition-all duration-500 ease-in-out
      ${isOpen ? "left-0" : "-left-full"} md:left-0`}
    >
      <div className="border-b border-solid border-gray-1100 xl:p-6 px-4 py-6">
        <Link href="/" className="flex items-center">
          <img src="/images/logo.svg" alt="Logo" />
        </Link>
      </div>

      <div className="xl:p-4 px-2 py-4 flex-1">
        <ul>
          {menuItems.map((item) => (
            <SidebarMenuItem
              key={item.id}
              item={item}
              onMenuClick={handleMenuClick}
            />
          ))}
        </ul>
      </div>

      <div className="border-t border-solid border-gray-1100 xl:p-4 px-2 py-4">
        <ul>
          <li className="mb-1">
            <Link
              href="/Setting/Profile"
              onClick={() => handleMenuClick("settings")}
              className={`group flex items-center gap-3 py-3 px-4 rounded-lg font-dm-sans text-base font-normal leading-6 transition-all duration-300 ${
                activeMenu === "settings"
                  ? "bg-blue-1000/10 text-blue-1000 font-medium"
                  : "text-gray-1000 hover:bg-blue-1000/10 hover:text-blue-1000 hover:font-medium"
              }`}
            >
              <span className="flex items-center justify-center w-5 h-5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="group-hover:stroke-blue-1100" d="M10.1824 1.6665H9.81569C9.37366 1.6665 8.94974 1.8421 8.63718 2.15466C8.32462 2.46722 8.14902 2.89114 8.14902 3.33317V3.48317C8.14872 3.77544 8.07157 4.0625 7.92531 4.31553C7.77904 4.56857 7.56881 4.7787 7.31569 4.92484L6.95736 5.13317C6.70399 5.27945 6.41659 5.35646 6.12402 5.35646C5.83146 5.35646 5.54406 5.27945 5.29069 5.13317L5.16569 5.0665C4.78325 4.84589 4.32889 4.78604 3.90236 4.90009C3.47583 5.01415 3.11198 5.29278 2.89069 5.67484L2.70736 5.9915C2.48674 6.37395 2.42689 6.82831 2.54095 7.25484C2.655 7.68137 2.93364 8.04521 3.31569 8.2665L3.44069 8.34984C3.69259 8.49526 3.90204 8.70408 4.04823 8.95553C4.19443 9.20698 4.27227 9.49231 4.27403 9.78317V10.2082C4.27519 10.5019 4.19873 10.7906 4.05239 11.0453C3.90606 11.2999 3.69503 11.5113 3.44069 11.6582L3.31569 11.7332C2.93364 11.9545 2.655 12.3183 2.54095 12.7448C2.42689 13.1714 2.48674 13.6257 2.70736 14.0082L2.89069 14.3248C3.11198 14.7069 3.47583 14.9855 3.90236 15.0996C4.32889 15.2136 4.78325 15.1538 5.16569 14.9332L5.29069 14.8665C5.54406 14.7202 5.83146 14.6432 6.12402 14.6432C6.41659 14.6432 6.70399 14.7202 6.95736 14.8665L7.31569 15.0748C7.56881 15.221 7.77904 15.4311 7.92531 15.6841C8.07157 15.9372 8.14872 16.2242 8.14902 16.5165V16.6665C8.14902 17.1085 8.32462 17.5325 8.63718 17.845C8.94974 18.1576 9.37366 18.3332 9.81569 18.3332H10.1824C10.6244 18.3332 11.0483 18.1576 11.3609 17.845C11.6734 17.5325 11.849 17.1085 11.849 16.6665V16.5165C11.8493 16.2242 11.9265 15.9372 12.0727 15.6841C12.219 15.4311 12.4292 15.221 12.6824 15.0748L13.0407 14.8665C13.2941 14.7202 13.5815 14.6432 13.874 14.6432C14.1666 14.6432 14.454 14.7202 14.7074 14.8665L14.8324 14.9332C15.2148 15.1538 15.6692 15.2136 16.0957 15.0996C16.5222 14.9855 16.8861 14.7069 17.1074 14.3248L17.2907 13.9998C17.5113 13.6174 17.5712 13.163 17.4571 12.7365C17.343 12.31 17.0644 11.9461 16.6824 11.7248L16.5574 11.6582C16.303 11.5113 16.092 11.2999 15.9457 11.0453C15.7993 10.7906 15.7229 10.5019 15.724 10.2082V9.7915C15.7229 9.49782 15.7993 9.20904 15.9457 8.95441C16.092 8.69978 16.303 8.48834 16.5574 8.3415L16.6824 8.2665C17.0644 8.04521 17.343 7.68137 17.4571 7.25484C17.5712 6.82831 17.5113 6.37395 17.2907 5.9915L17.1074 5.67484C16.8861 5.29278 16.5222 5.01415 16.0957 4.90009C15.6692 4.78604 15.2148 4.84589 14.8324 5.0665L14.7074 5.13317C14.454 5.27945 14.1666 5.35646 13.874 5.35646C13.5815 5.35646 13.2941 5.27945 13.0407 5.13317L12.6824 4.92484C12.4292 4.7787 12.219 4.56857 12.0727 4.31553C11.9265 4.0625 11.8493 3.77544 11.849 3.48317V3.33317C11.849 2.89114 11.6734 2.46722 11.3609 2.15466C11.0483 1.8421 10.6244 1.6665 10.1824 1.6665Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                  <path className="group-hover:stroke-blue-1100" d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="flex-1 w-full">Settings</span>
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="group flex items-center gap-3 py-3 px-4 rounded-lg font-dm-sans text-base font-normal leading-6 text-gray-1000 hover:bg-blue-1000/10 hover:text-blue-1000 hover:font-medium transition-all duration-300"
            >
              <span className="flex items-center justify-center w-5 h-5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="group-hover:stroke-blue-1100" d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                  <path className="group-hover:stroke-blue-1100" d="M13.334 14.1668L17.5007 10.0002L13.334 5.8335" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                  <path className="group-hover:stroke-blue-1100" d="M17.5 10H7.5" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="flex-1 w-full">Log out</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;