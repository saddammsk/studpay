"use client";

import { useState, useRef, useEffect } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay } from "date-fns";

interface CalendarInputProps {
     placeholder?: string;
     label?: string;
}

export default function CalendarInput({
     placeholder = "Select date",
     label = "From",
}: CalendarInputProps) {
     const [currentDate, setCurrentDate] = useState(new Date());
     const [selectedDate, setSelectedDate] = useState<Date | null>(null);
     const [open, setOpen] = useState(false);

     const ref = useRef<HTMLDivElement>(null);

     const start = startOfMonth(currentDate);
     const end = endOfMonth(currentDate);
     const days = eachDayOfInterval({ start, end });
     const startDay = getDay(start);

     useEffect(() => {
          function handleClickOutside(e: MouseEvent) {
               if (ref.current && !ref.current.contains(e.target as Node)) {
                    setOpen(false);
               }
          }
          document.addEventListener("mousedown", handleClickOutside);
          return () => document.removeEventListener("mousedown", handleClickOutside);
     }, []);

     return (
          <div className="relative" ref={ref}>
               <div className="relative">
                    <input
                         readOnly
                         onClick={() => setOpen(!open)}
                         value={selectedDate ? format(selectedDate, "PPP") : ""}
                         placeholder={placeholder}
                         className="text-sm font-inter pl-12 w-full block leading-5 text-black-1000 bg-gray-1600 border border-gray-1300 px-3 h-10 rounded-[10px]"
                    />
                    <div className="absolute top-1/2 -translate-y-1/2 left-4">
                         <img src="/images/calendar2.svg" alt="" />
                    </div>
               </div>
               {open && (
                    <div className="absolute z-50 mt-2 w-72 rounded-2xl border bg-white p-4 shadow">
                         <div className="mb-4 flex items-center justify-between">
                              <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))}>←</button>
                              <h2 className="font-semibold">{format(currentDate, "MMMM yyyy")}</h2>
                              <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))}>→</button>
                         </div>

                         <div className="grid grid-cols-7 text-center text-xs text-gray-500">
                              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                                   <div key={d}>{d}</div>
                              ))}
                         </div>

                         <div className="mt-2 grid grid-cols-7 gap-1">
                              {Array.from({ length: startDay }).map((_, i) => (
                                   <div key={i} />
                              ))}

                              {days.map((day) => (
                                   <button
                                        key={day.toISOString()}
                                        onClick={() => {
                                             setSelectedDate(day);
                                             setOpen(false);
                                        }}
                                        className={`rounded-lg p-2 text-sm hover:bg-blue-100 ${selectedDate && format(day, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd")
                                             ? "bg-blue-500 text-white"
                                             : ""
                                             }`}
                                   >
                                        {format(day, "d")}
                                   </button>
                              ))}
                         </div>
                    </div>
               )}
          </div>
     );
}
