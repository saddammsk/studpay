import Link from "next/link";

function Pagination() {
     return (
          <div>
               <ul className="flex gap-2">
                    <li>
                         <Link href="/" className="w-10 h-10 flex items-center justify-center rounded-[10px] border border-gray-1300 bg-gray-1600 opacity-50"><img src="/images/left-arrow2.svg" alt="" /></Link>
                    </li>
                    <li>
                         <Link href="/" className="w-10 h-10 flex items-center justify-center transition-all ease-in-out duration-500 bg-blue-1100 text-white rounded-[10px] border border-gray-1300 font-normal text-sm leading-5">1</Link>
                    </li>
                    <li>
                         <Link href="/" className="w-10 h-10 flex items-center justify-center transition-all ease-in-out duration-500 hover:bg-blue-1100 hover:text-white rounded-[10px] border border-gray-1300 bg-gray-1600 text-black-1000 font-normal text-sm leading-5">2</Link>
                    </li>
                    <li>
                         <Link href="/" className="w-10 h-10 flex items-center justify-center transition-all ease-in-out duration-500 hover:bg-blue-1100 hover:text-white rounded-[10px] border border-gray-1300 bg-gray-1600 text-black-1000 font-normal text-sm leading-5">3</Link>
                    </li>
                    <li>
                         <Link href="/" className="w-10 h-10 flex items-center justify-center transition-all ease-in-out duration-500 hover:bg-blue-1100 hover:text-white rounded-[10px] border border-gray-1300 bg-gray-1600 text-black-1000 font-normal text-sm leading-5">4</Link>
                    </li>
                    <li>
                         <Link href="/" className="w-10 h-10 flex items-center justify-center transition-all ease-in-out duration-500 hover:bg-blue-1100 hover:text-white rounded-[10px] border border-gray-1300 bg-gray-1600 text-black-1000 font-normal text-sm leading-5">5</Link>
                    </li>
                    <li>
                         <Link href="/" className="w-10 h-10 flex items-center justify-center transition-all ease-in-out duration-500 hover:bg-blue-1100 hover:text-white rounded-[10px] border border-gray-1300 bg-gray-1600 text-black-1000 font-normal text-sm leading-5"><img src="/images/right-arrow.svg" alt="" /></Link>
                    </li>
               </ul>
          </div>
     )
}

export default Pagination
