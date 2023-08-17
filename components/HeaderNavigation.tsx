import {
  BuildingStorefrontIcon,
  EllipsisVerticalIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline"

import HeaderLink from "./HeaderLink"
import { ChevronDownIcon } from "@heroicons/react/20/solid"

function HeaderNavigation() {
  return (
    <ul className="flex">
      <HeaderLink
        text="Become a seller"
        icon={<BuildingStorefrontIcon className="w-6 h-6" />}
      />
      <HeaderLink
        text="Sign in"
        icon={<UserIcon className="w-6 h-6" />}
        rightIcon={<ChevronDownIcon className="w-6 h-6" />}
      />

      <HeaderLink text="Cart" icon={<ShoppingCartIcon className="w-6 h-6" />} />

      <HeaderLink text="" icon={<EllipsisVerticalIcon className="w-6 h-6" />} />
    </ul>
  )
}

export default HeaderNavigation
