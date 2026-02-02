import Sidebar from "@/app/components/common/Sidebar";
import { Header } from "@/app/components/common/Header";
import { Metadata } from "next";
import SettingSidebar from "@/app/components/SettingSidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;

}

export const metadata: Metadata = {
  title: 'Settings - Partner Portal',
  description: 'Manage API integrations and sync data with external systems.',
}


const SettingsLayout = ({ children }: DashboardLayoutProps) => {
   

  return (
    <main className={`font-dm-sans min-h-screen xl:pl-64 md:pl-50 pt-16 bg-gray-1900`}>
        <Sidebar  />  
        <Header title={""} />

          <div className="xl:py-6 xl:px-4 p-4">
            <div className="lg:flex gap-31.5">
                  <div className="lg:w-[256px] lg:h-[calc(100vh_-_123px)] lg:fixed static top-22 xl:left-71 left-53 bg-white border-r border-gray-1300/50">
                      <div className="md:p-6 px-4 pt-0 pb-6 border-b border-gray-1300/[50%]">
                            <h4 className="font-inter text-lg font-bold leading-7 text-black-1000">Settings</h4>
                            <p className="text-sm font-normal leading-5 text-gray-1400">Manage your account</p>
                      </div>
                      <SettingSidebar></SettingSidebar>
                  </div>
                  {children}
            </div>
        </div>
    </main>
  )
}

export default SettingsLayout