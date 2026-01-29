"use client";
import Sidebar from "@/app/components/Sidebar";
import { Header } from "@/app/ui/Header";
import { useAppSelector } from "@/store/hooks";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
  showWallet?: boolean;
  className?: string;
}


const DashboardLayout = ({ children, title = "Dashboard", showWallet = true, className= "bg-gray-1200" }: DashboardLayoutProps) => {
       const isMenuOpen = useAppSelector(
          (state) => state.navigation.isMenuOpen
        );

  return (
    <main className={`font-dm-sans xl:pl-64 md:pl-50 pt-16 ${className}`}>
        <Sidebar isOpen={isMenuOpen} />  
        <Header title={title} showWallet={showWallet} />

        {children}
    </main>
  )
}

export default DashboardLayout