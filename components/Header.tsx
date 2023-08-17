import SearchBar from "./SearchBar"
import HeaderNavigation from "./HeaderNavigation"
import HeaderLogo from "./HeaderLogo"

const Header: React.FC<{ logo?: string }> = () => {
  return (
    <div className="bg-white py-4 shadow-md shadow-slate-200">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <HeaderLogo />
        <SearchBar />
        <HeaderNavigation />
      </div>
    </div>
  )
}

export default Header
