"use client";

import { useState, useRef, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

export default function CalendarDropdown() {
     const [selected, setSelected] = useState<Date>();
     const [open, setOpen] = useState(false);
     const ref = useRef<HTMLDivElement>(null);

     // close on outside click
     useEffect(() => {
          const handler = (e: MouseEvent) => {
               if (ref.current && !ref.current.contains(e.target as Node)) {
                    setOpen(false);
               }
          };
          document.addEventListener("mousedown", handler);
          return () => document.removeEventListener("mousedown", handler);
     }, []);

     // 👉 helper for 7 characters
     const truncateText = (text: string, limit = 9) =>
          text.length > limit ? text.slice(0, limit) + "..." : text;

     const formattedDate = selected
          ? format(selected, "MMMM dd, yyyy")
          : "Select date";

     return (
          <div className="relative min-w-[160px]" ref={ref}>
               <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center justify-between font-inter font-normal text-black leading-5 w-full p-2.5 border border-gray-2400 rounded-[10px] bg-white"
               >
                    <div className="flex items-center gap-2">
                         <img src="/images/calendar2.svg" className="mr-3" alt="" />
                         <span className="text-sm">
                              {truncateText(formattedDate)}
                         </span>
                    </div>
                    <span>
                         <img src="/images/droparrow.svg" alt="" />
                    </span>
               </button>

               {open && (
                    <div className="absolute right-0 z-20 mt-2 bg-white border rounded-xl shadow-lg p-3">
                         <DayPicker
                              mode="single"
                              selected={selected}
                              onSelect={setSelected}
                         />
                    </div>
               )}
          </div>
     );
}
