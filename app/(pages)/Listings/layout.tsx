import Sidebar from "@/app/components/common/Sidebar";
import { Header } from "@/app/components/common/Header";
import { Metadata } from "next";

interface DashboardLayoutProps {
  children: React.ReactNode;
}


export const metadata: Metadata = {
  title: 'Listings - Partner Portal',
  description: 'Manage Listings features and settings.',
}


const ListingLayout = ({ children }: DashboardLayoutProps) => {
  

  return (
    <main className={`font-dm-sans xl:pl-64 md:pl-50 pt-16 bg-gray-1900`}>
        <Sidebar />  
        <Header title={"Listings"} />

        {children}
    </main>
  )
}

export default ListingLayout