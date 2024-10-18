import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/solid'

function DropdownMenu() {
  const handleDelete = () => {
    console.log('handleDelete')
  }

  const handleEdit = () => {
    console.log('handleEdit')
  }

  return (
    <Menu>
      <MenuButton>
        <EllipsisVerticalIcon className="mx-8 size-5 fill-black " />
      </MenuButton>
      <MenuItems 
        transition 
        anchor="top start"
        className=" rounded-xl border border-black bg-white p-1 text-sm/6 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        <MenuItem>
          <button className="flex items-center gap-2 w-full rounded-lg py-1.5 px-3 data- hover:bg-blue-500 hover:text-white" onClick={handleEdit}>
            <PencilIcon className="size-4 fill-black/50" />
            Actualizar
          </button>
        </MenuItem>
        <div className="my-1 h-px bg-white/5" />
        <MenuItem>
          <button className="flex items-center gap-2 w-full rounded-lg py-1.5 px-3  hover:bg-blue-500 hover:text-white" onClick={handleDelete}>
            <TrashIcon className="size-4 fill-black/50"  />
            Eliminar
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  )
}

export default DropdownMenu