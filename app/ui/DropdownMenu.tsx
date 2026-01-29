import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

type DropdownItem = {
     label: string
     value: string
     separator?: boolean
}

type DropdownMenuProps = {
     label: string
     items: DropdownItem[]
     onSelect?: (value: string) => void
     selectedValue?: string
}

function DropdownMenu({ label, items, onSelect, selectedValue }: DropdownMenuProps) {
     const displayLabel = selectedValue 
          ? items.find(item => item.value === selectedValue)?.label || label
          : label;

     return (
          <div className="">
               <Menu>
                    <MenuButton className="inline-flex transition-all duration-300 focus:ring-2 outline-0! focus:ring-blue-1000 cursor-pointer items-center justify-between bg-white min-w-28 w-full gap-2 rounded-lg border border-gray-1300 px-3 py-2 text-sm font-normal text-black-1200 font-inter">
                         {displayLabel} <img src="/images/droparrow.svg" alt="" />
                    </MenuButton>
                    <MenuItems
                         className="w-50 absolute origin-top-right rounded-xl border border-gray-2100 bg-white p-1.2 shadow-8xl transition duration-100 ease-out focus:outline-none z-10"
                    >
                         {items.map((item: DropdownItem, index: number) => (
                              <div key={index}>
                                   {item.separator && <div className="my-1 h-px bg-gray-200" />}
                                   {!item.separator && item.label && (
                                        <MenuItem>
                                             <button 
                                                  onClick={() => onSelect?.(item.value)}
                                                  className={`group cursor-pointer flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-gray-1200/50 hover:text-blue-500 ${
                                                       selectedValue === item.value ? 'bg-blue-50 text-blue-500' : ''
                                                  }`}
                                             >
                                                  {item.label}
                                             </button>
                                        </MenuItem>
                                   )}
                              </div>
                         ))}
                    </MenuItems>
               </Menu>
          </div>
     )
}

export default DropdownMenu