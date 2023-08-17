import Image from "next/image"
import React from "react"

function HeaderLogo() {
  return (
    <div className="flex items-center flex-col">
      <Image
        height={38}
        width={120}
        alt="Flipkart"
        src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/flipkart-095e08.svg"
      />
      <div className="flex items-center ml-10 gap-2 text-base">
        <span className="font-semibold italic text-slate-400">Explore </span>
        <span className="font-semibold italic text-yellow-400">Plus </span>
        <Image
          height={8}
          width={8}
          alt="plus icon"
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/plus-brand-bc165b.svg"
        />
      </div>
    </div>
  )
}

export default HeaderLogo
