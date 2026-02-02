import Link from 'next/link';
import React from 'react'

interface LogoutModelProps {
  show: boolean;
  onClose: () => void;
}

export const LogoutModel = ({ show, onClose }: LogoutModelProps) => {
  return (
    <div className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 ${show ? 'block' : 'hidden'}`}>
      <div className="bg-white w-full max-w-[448px] p-6 rounded-xl shadow-xl border border-gray-4300">
        <h2 className="text-lg font-bold mb-1 text-black-1500">Log out</h2>
        <p className="mb-4 text-gray24 text-sm">Are you sure you want to logout?</p>
        <div className="flex justify-between items-center space-x-2 mt-8">
          <button onClick={onClose} className="px-4 text-sm py-2 bg-gray-300/10 border border-gray-4300 rounded-xl hover:ring-blue-1000 ring-2 ring-transparent transition duration-300 cursor-pointer">
            Cancel
          </button>
          <Link href={"/Login"} className="px-4 py-2 transitions duration-300 cursor-pointer ring-2 ring-transparent hover:ring-red-1000 text-sm bg-red-1100 text-white rounded-xl hover:bg-red-600">
            Logout
          </Link>
        </div>
      </div>
    </div>
  )
}
