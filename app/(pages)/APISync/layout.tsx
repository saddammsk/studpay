import Sidebar from "@/app/components/common/Sidebar";
import { Header } from "@/app/components/common/Header";
import { Metadata } from "next";

interface DashboardLayoutProps {
  children: React.ReactNode;

}

export const metadata: Metadata = {
  title: 'API Sync - Partner Portal',
  description: 'Manage API integrations and sync data with external systems.',
}


const APISyncLayout = ({ children }: DashboardLayoutProps) => {
   

  return (
    <main className={`font-dm-sans xl:pl-64 md:pl-50 pt-16 bg-gray-1900`}>
        <Sidebar  />  
        <Header title={"API Sync"} showWallet={false} />

        {children}
    </main>
  )
}

export default APISyncLayout