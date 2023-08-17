import Image from "next/image"
import React from "react"

const Item: React.FC<{
  image: string
  heading: string
  subheading: string
}> = ({ image, heading, subheading }) => {
  return (
    <div className="flex items-center justify-between flex-col h-full border border-solid border-slate-300 p-4 rounded max-w-[200px]">
      <Image
        src={image}
        alt="heading"
        width={100}
        height={100}
        className="object-contain max-h-[150px] flex-1"
      />
      <div>
        <h3 className="text-slate-500">{heading}</h3>
        <h4 className="font-semibold text-black">{subheading}</h4>
      </div>
    </div>
  )
}

export default Item
