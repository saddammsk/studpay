import Sidebar from "@/app/components/common/Sidebar";
import { Header } from "@/app/components/common/Header";

interface DashboardLayoutProps {
  children: React.ReactNode;
}


const DashboardLayout = ({ children }: DashboardLayoutProps) => {
      

  return (
    <main className={`font-dm-sans xl:pl-64 md:pl-50 pt-16 bg-gray-1200`}>
        <Sidebar />  
        <Header title={"Dashboard"} showWallet={true} />

        {children}
    </main>
  )
}

export default DashboardLayout