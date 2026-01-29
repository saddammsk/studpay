"use client"
import clsx from "clsx"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
     Popover,
     PopoverTrigger,
     PopoverContent,
} from "@/components/ui/popover"
import { addDays, format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { type DateRange } from "react-day-picker"

type DatePickerProps = {
     className?: string
     buttonClassName?: string
}
export function DatePicker({
     className,
     buttonClassName,
}: DatePickerProps) {
     const [date, setDate] = React.useState<DateRange | undefined>({
          from: new Date(new Date().getFullYear(), 0, 20),
          to: addDays(new Date(new Date().getFullYear(), 0, 20), 20),
     })

     return (
          <div className={clsx("", className)}>
               <Popover>
                    <PopoverTrigger asChild>
                         <Button
                              variant="outline"
                              id="date-picker-range"
                              className={clsx(
                                   "justify-start px-2.5 w-full h-10 font-normal text-sm font-inter leading-5 text-gray-1400 bg-gray-1600 border border-gray-1300",
                                   buttonClassName
                              )}
                         >
                              <CalendarIcon />
                              {date?.from ? (
                                   date.to ? (
                                        <>
                                             {format(date.from, "LLL dd, y")} -{" "}
                                             {format(date.to, "LLL dd, y")}
                                        </>
                                   ) : (
                                        format(date.from, "LLL dd, y")
                                   )
                              ) : (
                                   <span>Pick a date</span>
                              )}
                         </Button>
                    </PopoverTrigger>

                    <PopoverContent className="w-auto p-0" align="start">
                         <Calendar
                              mode="range"
                              defaultMonth={date?.from}
                              selected={date}
                              onSelect={setDate}
                              numberOfMonths={2}
                         />
                    </PopoverContent>
               </Popover>
          </div>
     )
}

