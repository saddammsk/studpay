import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ReactNode } from 'react'

type DropdownItem = {
     label?: string
     shortcut?: string
     onClick?: () => void
     divider?: boolean
}

type StatusDropdownProps = {
     buttonLabel?: string
     buttonClassName?: string
     menuClassName?: string
     items: DropdownItem[]

     /** Button icons */
     leftIcon?: string | ReactNode
     rightIcon?: string | ReactNode
}

const renderIcon = (icon?: string | ReactNode) => {
     if (!icon) return null
     if (typeof icon === 'string') {
          return <img src={icon} alt="" />
     }
     return icon
}

const StatusDropdown = ({
     buttonLabel = 'Status',
     buttonClassName = '',
     menuClassName = '',
     items,
     leftIcon = '/images/filter-icon.svg',
     rightIcon = '/images/droparrow.svg',
}: StatusDropdownProps) => {
     return (
          <Menu>
               <MenuButton
                    className={`inline-flex items-center gap-2 border border-gray-1100 rounded-md px-3 py-1.5 text-sm font-medium text-black font-inter focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white ${buttonClassName}`}
               >
                    {renderIcon(leftIcon)}
                    {buttonLabel}
                    {renderIcon(rightIcon)}
               </MenuButton>

               <MenuItems
                    transition
                    anchor="bottom end"
                    className={`w-52 origin-top-right rounded-xl bg-white shadow-8xl p-1 text-sm/6 text-black-1000 transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0 ${menuClassName}`}
               >
                    {items.map((item, index) =>
                         item.divider ? (
                              <div key={index} className="my-1 h-px bg-white/5" />
                         ) : (
                              <MenuItem key={index}>
                                   <button
                                        type="button"
                                        onClick={item.onClick}
                                        className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10"
                                   >
                                        {item.label}
                                        {item.shortcut && (
                                             <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">
                                                  {item.shortcut}
                                             </kbd>
                                        )}
                                   </button>
                              </MenuItem>
                         )
                    )}
               </MenuItems>
          </Menu>
     )
}

export default StatusDropdown
