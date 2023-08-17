import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"

export default function SearchBar() {
  return (
    <div className="bg-blue-100/50 border-1 border-solid relative border-slate-200 rounded flex-1 max-w-lg shadow">
      <MagnifyingGlassIcon className="w-4 h-4 object-contain absolute top-1/2 left-4 -translate-y-1/2" />
      <input
        className="p-1 w-full h-full bg-transparent  focus:outline-none pl-10 pt-3 pb-3 placeholder:text-slate-600"
        placeholder="Search for Products, Brands and More"
      />
    </div>
  )
}
