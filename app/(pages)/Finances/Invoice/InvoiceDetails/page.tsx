import Link from "next/link";
import PrimaryLink from "@/app/ui/PrimaryLink";


export default function InvoiceDetailsPage() {


     return (
           
          <div className="xl:py-6 xl:pl-8 4xl:pr-10 xl:px-4 p-4">
               <div className="flex items-center xl:flex-nowrap flex-wrap xl:gap-0 gap-5 sm:gap-0 gap-4 justify-between ">
                    <div className="flex items-center gap-3">
                         <Link href="/" className="w-10 h-10 flex items-center justify-center"><img src="/images/left-icon.svg" alt="" /></Link>
                         <h4 className="text-lg font-bold leding-8 text-black-1200">INV-2024-0847</h4>
                         <div className="font-dm-sans font-bold text-xs text-yellow-1100 bg-yellow-1100/[10%] rounded-full py-0.5 inline-block px-2.5">Pending</div>
                    </div>
                    <div className="flex items-center justify-end flex-wrap gap-3">
                         <PrimaryLink type="submit" className="px-4 !py-2.5 w-fit! gap-2.5  border border-gray-1100!" variant="default">
                              <img src="/images/export-arrow.svg" alt="" /> Download PDF
                         </PrimaryLink>
                         <PrimaryLink type="submit" className="px-4 !py-2.5 w-fit! gap-2.5  border border-gray-1100!" variant="default">
                              <img src="/images/send-icon.svg" alt="" /> Send to Student
                         </PrimaryLink>
                         <PrimaryLink type="submit" className="px-4 !py-2.5 w-fit! gap-2.5  border border-gray-1100!" variant="success">
                              <img src="/images/tick-icon3.svg" alt="" /> Mark as Paid
                         </PrimaryLink>
                    </div>
               </div>
               <div className="mt-9">
                    <div className="flex xl:flex-nowrap flex-wrap gap-6">
                         <div className="4xl:w-9/12 xl:w-8/12 w-full">
                              <div className="bg-white border border-gray-1100 shadow-19xl mb-6 p-6 rounded-xl">
                                   <div className="flex justify-between mb-4">
                                        <div className="">
                                             <h6 className="text-sm font-dm-sans font-normal leading-5 text-gray-3000 mb-1">Total Amount Due</h6>
                                             <span className="block font-dm-sans text-[36px] font-bold leading-10 text-black-1200">$1,250.00</span>
                                        </div>
                                        <div className="bg-gray-3100/[10%] w-12 h-12 rounded-[10px] flex items-center justify-center">
                                             <img src="/images/dollar-green.svg" alt="" />
                                        </div>
                                   </div>
                                   <div className="flex items-center gap-6">
                                        <div className="flex items-center text-sm font-dm-sans gap-2 font-normal leading-5 text-gray-3000">
                                             <img src="/images/calendar2.svg" alt="" />Due: Feb 15, 2024
                                        </div>
                                        <div className="flex items-center text-sm font-dm-sans gap-2 font-normal leading-5 text-gray-3000">
                                             <img src="/images/hastag.svg" alt="" />INV-2024-0847
                                        </div>
                                   </div>
                              </div>
                              <div className="grid lg:grid-cols-2 gap-4 mb-6">
                                   <div className="border border-gray-1100 bg-white rounded-xl shadow-19xl 2xl:p-5 p-4">
                                        <div className="flex items-center gap-3 border-b border-gray-1100 pb-4 mb-4">
                                             <div className="flex items-center justify-center rounded-[10px] bg-gray-3200 w-10 h-10">
                                                  <img src="/images/user-icon4.svg" alt="" />
                                             </div>
                                             <div>
                                                  <h6 className="text-sm font-dm-sans font-normal leading-5 text-gray-3000">Student</h6>
                                                  <span className="block text-base font-dm-sans font-bold leading-6 text-black-1200">Emily Richardson</span>
                                             </div>
                                        </div>
                                        <h6 className="text-sm font-dm-sans font-normal leading-5 text-gray-3000">emily.richardson@university.edu</h6>
                                        <h6 className="text-sm font-dm-sans font-normal leading-5 text-gray-3000">+1 (555) 234-5678</h6>
                                   </div>
                                   <div className="border border-gray-1100 bg-white rounded-xl shadow-19xl 2xl:p-5 p-4">
                                        <div className="flex items-center gap-3 border-b border-gray-1100 pb-4 mb-4">
                                             <div className="flex items-center justify-center rounded-[10px] bg-gray-3200 w-10 h-10">
                                                  <img src="/images/building-icon2.svg" alt="" />
                                             </div>
                                             <div>
                                                  <h6 className="text-sm font-dm-sans font-normal leading-5 text-gray-3000">Property</h6>
                                                  <span className="block text-base font-dm-sans font-bold leading-6 text-black-1200">Maple Court Apartments</span>
                                             </div>
                                        </div>
                                        <h6 className="text-sm font-dm-sans font-normal leading-5 text-black-1200">Unit 4B</h6>
                                        <h6 className="text-sm font-dm-sans font-normal leading-5 text-gray-3000">1234 Maple Street, Portland, OR 97201</h6>
                                   </div>
                              </div>
                              <div className="border border-gray-1100 bg-white rounded-xl shadow-19xl p-5">
                                   <div className="flex items-center gap-3 border-b border-gray-1100 pb-4 mb-4">
                                        <img src="/images/file-icon3.svg" alt="" />
                                        <h6 className="text-base font-dm-sans font-bold leading-5 text-black-1200">Payment Breakdown</h6>
                                   </div>
                                   <div className="border-b border-gray-1100 pb-4 mb-4">
                                        <div className="flex items-center justify-between py-2 mb-3">
                                             <h6 className="text-sm font-dm-sans font-normal leading-5 text-black-1200">Monthly Rent - February 2024</h6>
                                             <h6 className="text-sm font-dm-sans font-normal leading-5 text-black-1200">$1,100.00</h6>
                                        </div>
                                        <div className="flex items-center justify-between py-2 mb-3">
                                             <h6 className="text-sm font-dm-sans font-normal leading-5 text-black-1200">Utilities (Water & Trash)</h6>
                                             <h6 className="text-sm font-dm-sans font-normal leading-5 text-black-1200">$75.00</h6>
                                        </div>
                                        <div className="flex items-center justify-between py-2 mb-3">
                                             <h6 className="text-sm font-dm-sans font-normal leading-5 text-black-1200">Parking Space #12</h6>
                                             <h6 className="text-sm font-dm-sans font-normal leading-5 text-black-1200">$50.00</h6>
                                        </div>
                                        <div className="flex items-center justify-between py-2">
                                             <h6 className="text-sm font-dm-sans font-normal leading-5 text-black-1200">Pet Fee</h6>
                                             <h6 className="text-sm font-dm-sans font-normal leading-5 text-black-1200">$25.00</h6>
                                        </div>
                                   </div>
                                   <div className="flex items-center justify-between mb-2">
                                        <h6 className="text-sm font-dm-sans font-normal leading-5 text-gray-3000">Subtotal</h6>
                                        <h6 className="text-base font-dm-sans font-bold leading-5 text-black15">$1,250.00</h6>
                                   </div>
                                   <div className="flex items-center justify-between">
                                        <h6 className="text-lg font-dm-sans font-bold leading-5 text-black-1200">Total</h6>
                                        <h6 className="text-lg font-dm-sans font-bold leading-5 text-gray-3100">$1,250.00</h6>
                                   </div>
                              </div>
                         </div>
                         <div className="4xl:w-3/12 xl:w-4/12 w-full">
                              <div className="border border-gray-1100 bg-white rounded-xl shadow-19xl 2xl:p-5 p-4 mb-4">
                                   <div className="flex items-center gap-3 border-b border-gray-1100 pb-4 mb-4">
                                        <img src="/images/timer.svg" alt="" />
                                        <h6 className="text-base font-dm-sans font-bold leading-5 text-black-1200">Activity Timeline</h6>
                                   </div>
                                   <div className="pt-11">
                                        <ul className="space-y-8 relative after:content-[''] after:bg-gray-1100 after:h-full after:w-[1px] after:absolute after:left-3 after:-z-10 z-10 after:top-0">
                                             <li className="flex gap-4">
                                                  <div className="bg-gray-3100/[10%] w-6 h-6 rounded-full flex items-center justify-center"><span className="bg-gray-3100 w-2 h-2 rounded-full block"></span></div>
                                                  <div>
                                                       <h6 className="text-sm font-dm-sans font-normal leading-5 text-black15">Invoice Created</h6>
                                                       <span className="block text-xs font-normal leading-4 text-gray-3000">Jan 15, 2024 at 9:30 AM</span>
                                                  </div>
                                             </li>
                                             <li className="flex gap-4">
                                                  <div className="bg-gray-3100/[10%] w-6 h-6 rounded-full flex items-center justify-center"><span className="bg-gray-3100 w-2 h-2 rounded-full block"></span></div>
                                                  <div>
                                                       <h6 className="text-sm font-dm-sans font-normal leading-5 text-black15">Sent to Student</h6>
                                                       <span className="block text-xs font-normal leading-4 text-gray-3000">Jan 16, 2024 at 10:15 AM</span>
                                                  </div>
                                             </li>
                                             <li className="flex gap-4">
                                                  <div className="bg-gray-3100/[10%] w-6 h-6 rounded-full flex items-center justify-center"><span className="bg-gray-3100 w-2 h-2 rounded-full block"></span></div>
                                                  <div>
                                                       <h6 className="text-sm font-dm-sans font-normal leading-5 text-black15">Payment Reminder Sent</h6>
                                                       <span className="block text-xs font-normal leading-4 text-gray-3000">Feb 1, 2024 at 8:00 AM</span>
                                                  </div>
                                             </li>
                                             <li className="flex gap-4">
                                                  <div className="border-2 border-dashed border-gray-3000/[30%] w-6 h-6 rounded-full flex items-center justify-center"><span className="bg-gray-3000/[30%] w-2 h-2 rounded-full block"></span></div>
                                                  <div>
                                                       <h6 className="text-sm font-dm-sans font-normal leading-5 text-gray-3000">Awaiting Payment</h6>
                                                       <span className="block text-xs font-normal leading-4 text-gray-3000">Pending</span>
                                                  </div>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                              <div className="border border-gray-1100 bg-white rounded-xl shadow-19xl 2xl:p-5 p-4 mb-4">
                                   <h4 className="text-sm font-dm-sans font-bold leading-5 text-gray-3000 mb-4">Quick Info</h4>
                                   <div className="space-y-3 mb-3 pb-3 border-b  border-gray-1100">
                                        <div className="flex items-center justify-between">
                                             <h6 className="text-sm font-dm-sans font-normal leading-5 text-gray-3000">Created</h6>
                                             <h6 className="text-sm font-dm-sans font-normal leading-5 text-black-1200">Jan 15, 2024</h6>
                                        </div>
                                        <div className="flex items-center justify-between">
                                             <h6 className="text-sm font-dm-sans font-normal leading-5 text-gray-3000">Sent</h6>
                                             <h6 className="text-sm font-dm-sans font-normal leading-5 text-black-1200">Jan 16, 2024</h6>
                                        </div>
                                        <div className="flex items-center justify-between">
                                             <h6 className="text-sm font-dm-sans font-normal leading-5 text-gray-3000">Due Date</h6>
                                             <h6 className="text-sm font-dm-sans font-normal leading-5 text-black-1200">Feb 15, 2024</h6>
                                        </div>
                                   </div>
                                   <div className="flex items-center justify-between">
                                        <h6 className="text-sm font-dm-sans font-normal leading-5 text-gray-3000">Payment Status</h6>
                                        <div className="font-dm-sans font-bold text-xs text-yellow-1100 bg-yellow-1100/[10%] rounded-full py-0.5 inline-block px-2.5">Pending</div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}
