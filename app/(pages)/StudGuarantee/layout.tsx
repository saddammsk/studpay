import Sidebar from "@/app/components/common/Sidebar";
import { Header } from "@/app/components/common/Header";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
  showWallet?: boolean;
  className?: string;
}


const StudGuaranteeLayout = ({ children }: DashboardLayoutProps) => {
 

  return (
    <main className={`font-dm-sans xl:pl-64 md:pl-50 pt-16 bg-gray-1900`}>
        <Sidebar />  
        <Header title={"StudGuarantee"} showWallet={false} />

        {children}
    </main>
  )
}

export default StudGuaranteeLayout