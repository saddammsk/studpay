import Sidebar from "@/app/components/common/Sidebar";
import { Header } from "@/app/components/common/Header";
import { Metadata } from "next";

interface DashboardLayoutProps {
  children: React.ReactNode;

}


export const metadata: Metadata = {
  title: 'Finances - Partner Portal',
  description: 'Manage rent collection, deposits, and financial reporting in one unified platform.',
}


const FinancesLayout = ({ children }: DashboardLayoutProps) => {
   

  return (
    <main className={`font-dm-sans xl:pl-64 md:pl-50 pt-16 bg-gray-1900`}>
        <Sidebar />  
        <Header title={"Finances"} showWallet={false} />

        {children}
    </main>
  )
}

export default FinancesLayout