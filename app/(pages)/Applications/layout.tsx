import Sidebar from "@/app/components/common/Sidebar";
import { Header } from "@/app/components/common/Header";
import { Metadata } from "next";

interface DashboardLayoutProps {
  children: React.ReactNode;
}


export const metadata: Metadata = {
  title: 'Applications - Partner Portal',
  description: 'Manage rent collection, deposits, and financial reporting in one unified platform.',
}

const ApplicationsLayout = ({ children }: DashboardLayoutProps) => {
     

  return (
    <main className={`font-dm-sans xl:pl-64 md:pl-50 pt-16 bg-gray-1900 min-h-screen`}>
        <Sidebar />  
        <Header title={"Applications"} showWallet={false} />

        {children}
    </main>
  )
}

export default ApplicationsLayout