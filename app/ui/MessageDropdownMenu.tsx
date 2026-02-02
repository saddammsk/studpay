import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
type DropdownItem = {
     label?: string
     shortcut?: string
     separator?: boolean
}

type DropdownMenuProps = {
     label: string
     items: DropdownItem[]
}
function DropdownMenu({ label, items }: DropdownMenuProps) {
     return (
          <div className="w-full">
               <Menu>
                    <MenuButton className="inline-flex items-center justify-between min-w-37.5 w-full gap-2 rounded-xl bg-gray-1500/50 px-3 h-9 text-sm font-normal text-black-1200 font-inter">
                         {label} <img src="/images/droparrow.svg" alt="" />
                    </MenuButton>
                    <MenuItems
                         className="w-50 absolute origin-top-right rounded-xl border border-gray-2100 bg-white p-1.2 shadow-8xl transition duration-100 ease-out focus:outline-none"
                    >
                         {items.map((item: DropdownItem, index: number) => (
                              <div key={index}>
                                   {item.separator && <div className="my-1 h-px bg-white/5" />}
                                   {!item.separator && item.label && (
                                        <MenuItem>
                                             <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                                                  {item.label}
                                                  {item.shortcut && (
                                                       <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">
                                                            {item.shortcut}
                                                       </kbd>
                                                  )}
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
