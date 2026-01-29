import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import clsx from 'clsx'
import { useState } from 'react'

export type SelectOption = {
     id: number | string
     name: string
}

type SelectBoxProps = {
     options: SelectOption[]
     defaultValue?: SelectOption
     onChange?: (value: SelectOption) => void
     className?: string
}

const SelectBox = ({
     options,
     defaultValue,
     onChange,
}: SelectBoxProps) => {
     const [selected, setSelected] = useState<SelectOption>(
          defaultValue ?? options[0]
     )

     const handleChange = (value: SelectOption) => {
          setSelected(value)
          onChange?.(value)
     }

     return (
          <div className="w-full">
               <Listbox value={selected} onChange={handleChange}>
                    <ListboxButton
                         className={clsx(
                              'relative block w-full flex items-center justify-between text-sm font-inter leading-5 text-black-1000 bg-gray-1600 border border-gray-1300 px-3 h-10 rounded-[10px]',
                              'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
                         )}
                    >
                         {selected?.name}
                         <img src="/images/droparrow.svg" alt="" />
                    </ListboxButton>

                    <ListboxOptions
                         anchor="bottom"
                         transition
                         className={clsx(
                              'w-(--button-width) rounded-xl border border-white/5 bg-gray-1600 p-1 [--anchor-gap:--spacing(1)] focus:outline-none',
                              'transition duration-100 ease-in data-leave:data-closed:opacity-0'
                         )}
                    >
                         {options.map((item) => (
                              <ListboxOption
                                   key={item.id}
                                   value={item}
                                   className="group flex cursor-default items-center gap-2 rounded-lg px-3 py-1.5 select-none data-focus:bg-white/10"
                              >
                                   <div className="text-sm/6 text-black-1000">
                                        {item.name}
                                   </div>
                              </ListboxOption>
                         ))}
                    </ListboxOptions>
               </Listbox>
          </div>
     )
}

export default SelectBox
