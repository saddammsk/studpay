import { OnboardingLeftCol } from "@/app/components/common/OnboardingLeftCol";


interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {

  return (
      <main className="flex font-dm-sans h-screen overflow-hidden">
        <OnboardingLeftCol />

        {children}
    </main>
  )
}

export default AuthLayout