'use client'
import UserDropMenu from '../UserDropMenu';
import { toggleMenu } from "@/store/slices/navigationSlice";
import { useAppDispatch } from '@/store/hooks';
import { useUser } from '@/hooks/useUser';
import Link from 'next/link';
import { NotificationDropdown } from '../../ui/NotificationDropdown';

export const Header = ({title, showWallet, userId="user_001"}: {title: string, showWallet: boolean, userId?: string}) => {

  const dispatch = useAppDispatch();
  const { user, balance, avatarUrl, initials, hasProfilePicture, loading } = useUser(userId);


  if (!user || loading) return (
      <header className="fixed top-0 h-16 left-0 w-full border-b border-solid border-gray-1100 bg-white xl:pl-64 md:pl-50 py-[7.5px]">
      </header>
  )


  return (
      <header className="fixed top-0 left-0 z-40 w-full border-b border-solid border-gray-1100 bg-white xl:pl-64 md:pl-50 py-[7.5px]">
        <div className="xl:px-6 md:px-3 px-4 flex items-center justify-between">
          <div className="">
            <h4 className="text-black-1000 font-dm-sans font-semibold md:text-lg text-base md:leading-7 leading-5 tracking-[-0.45px]">{title}</h4>
            <p className="text-gray-1000 font-dm-sans font-normal md:text-sm text-xs leading-5">Welcome back, {user?.name}</p>
          </div>
          <div className="flex items-center md:gap-4 gap-2.5">
            {showWallet &&
            <div className="">
              <Link href="/Finances" className="flex items-center justify-center md:gap-2 text-black-1000 font-medium text-sm rounded-lg bg-gray-1200 leading-5 md:px-4 md:py-2.5 md:w-auto md:h-auto w-6 h-6">
                <img src="../images/wallet.svg" alt="" className="md:h-auto h-3.5" />
                <span className="md:flex hidden items-center">{balance}</span>
              </Link>
            </div>}
            <NotificationDropdown/>
            <UserDropMenu avatarUrl={avatarUrl ?? undefined} initials={initials ?? undefined} hasProfilePicture={hasProfilePicture} />

            <button
              onClick={() => {
                dispatch(toggleMenu());
              }}
              className="md:hidden flex items-center">
              <img src="../images/menu-icon.svg" alt="" className="h-5" />
            </button>


          </div>
        </div>
      </header>
  )
}
