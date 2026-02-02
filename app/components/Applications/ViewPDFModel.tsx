'use client';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';

interface ViewPDFModelProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export const ViewPDFModel = ({isOpen, setIsOpen}: ViewPDFModelProps) => {

    
  return (
          <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                    className="relative z-50">
                    <DialogBackdrop className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"/>
            
                    <div className="fixed inset-0 flex items-center justify-center p-4 overflow-x-auto">
                      <DialogPanel className="
                        w-full max-w-[894px] relative border overflow-hidden border-gray27 rounded-xl bg-white
                        transition-all duration-300
                        data-closed:scale-95 data-closed:opacity-0">
                            <div className="w-full flex justify-between items-center bg-white p-4 border-b border-gray27">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 bg-red-1000/10 rounded-xl flex items-center justify-center p-1">
                                            <img src="/icons/file-red-icon-1.svg" alt="" />
                                        </div>
                                        <div className="">
                                            <h3 className='text-black-1000 font-bold font-inter'>Lease_Agreement_2024.pdf</h3>
                                            <div className="flex items-center gap-3 mt-0.5">
                                            <p className='text-gray-2200 text-xs'>2.4 MB • <span>Jan 3, 2025</span></p>
                                            <span className='text-xs text-gray-4400 capitalize bg-gray-2300 rounded-full px-2 py-1 font-bold'>pending</span>
                                            </div>
                                        </div>
                                    </div>

                                </div> 

                                <div className="inline-flex gap-4">
                                    <button className='bg-gray34 text-sm rounded-xl border border-gray27 flex items-center justify-center gap-2 text-black24 px-3 py-1.5 h-10 transition duration-300 hover:shadow-lg cursor-pointer'>
                                    <img src="/images/download-icon.svg" alt="" />
                                        Download
                                    </button>
                            <button onClick={() => setIsOpen(false)} className="cursor-pointer">
                                <img src="/icons/close-icon-black.svg" className='w-5' alt="" />
                            </button>
                            </div>

                        </div>
                       
                        <div className="w-full h-[85vh] p-4 bg-gray-2300/40 overflow-y-auto scroll-hide">
                        <div className="flex-1 flex items-center justify-center min-h-screen bg-gray34 border border-gray27 rounded-[10px] p-4">

                            PDF Here

                            {/* content */}

                        </div>
                        </div>

                      </DialogPanel>
                    </div>
          </Dialog>
  )
}