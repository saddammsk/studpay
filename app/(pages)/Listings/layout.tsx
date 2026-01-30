"use client";
import Sidebar from "@/app/components/common/Sidebar";
import { Header } from "@/app/components/common/Header";
import { useAppSelector } from "@/store/hooks";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
  showWallet?: boolean;
  className?: string;
}


const ListingLayout = ({ children }: DashboardLayoutProps) => {
       const isMenuOpen = useAppSelector(
          (state) => state.navigation.isMenuOpen
        );

  return (
    <main className={`font-dm-sans xl:pl-64 md:pl-50 pt-16 bg-gray-1900`}>
        <Sidebar isOpen={isMenuOpen} />  
        <Header title={"Finances"} showWallet={false} />

        {children}
    </main>
  )
}

export default ListingLayout