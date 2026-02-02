import Sidebar from "@/app/components/common/Sidebar";
import { Header } from "@/app/components/common/Header";

interface DashboardLayoutProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}


const DashboardLayout = ({ children, className = "bg-gray-1200", title = "Dashboard" }: DashboardLayoutProps) => {
      

  return (
    <main className={`font-dm-sans xl:pl-64 md:pl-50 pt-16 ${className}`}>
        <Sidebar />  
        <Header title={title} showWallet={true} />
        {children}
    </main>
  )
}

export default DashboardLayout