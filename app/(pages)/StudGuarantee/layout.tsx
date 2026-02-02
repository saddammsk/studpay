import Sidebar from "@/app/components/common/Sidebar";
import { Header } from "@/app/components/common/Header";
import { Metadata } from "next";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
  showWallet?: boolean;
  className?: string;
}


export const metadata: Metadata = {
  title: 'StudGuarantee - Partner Portal',
  description: 'Manage StudGuarantee features and settings.',
}



const StudGuaranteeLayout = ({ children }: DashboardLayoutProps) => {
 

  return (
    <main className={`font-dm-sans xl:pl-64 md:pl-50 pt-16 bg-gray-1900`}>
        <Sidebar />  
        <Header title={"StudGuarantee"} />

        {children}
    </main>
  )
}

export default StudGuaranteeLayout