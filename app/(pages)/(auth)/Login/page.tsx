import AuthLayout from "@/layouts/AuthLayout";
import { Metadata } from "next";
import { LoginForm } from "./_components/LoginForm";


export const metadata: Metadata = {
  title: 'Login - Partner Portal',
  description: 'Manage rent collection, deposits, and financial reporting in one unified platform.',
}

function LoginPage() {
  

     return (
     <AuthLayout>
          <div className="lg:w-1/2 w-full lg:px-0 px-5 4xl:py-0 lg:py-10 py-0 overflow-auto">
               <div className="h-screen flex items-center justify-center">
                    <div className="w-full max-w-[448px]">
                         <div>
                              <img src="/images/logo.svg" alt="" />
                              <h6 className="mt-1 text-sm font-normal leading-5 text-gray-1000">
                                   Partner Portal
                              </h6>
                              <div className="mt-[34px]">
                                   <h4 className="text-xl font-medium leading-7 mb-2 text-black-1000 tracking-[-0.5px]">
                                        Welcome back
                                   </h4>
                                   <p className="mt-1 text-sm font-normal leading-5 text-gray-1000">
                                        Sign in to access your partner dashboard
                                   </p>

                                   <LoginForm/>

                              </div>
                         </div>
                    </div>
               </div>
          </div>
     </AuthLayout>
     );
}

export default LoginPage;
