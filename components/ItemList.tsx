import { ChevronRightIcon } from "@heroicons/react/20/solid"
import React from "react"
import Item from "./Item"
import MultiSlider from "./MultiSlider"
import Image from "next/image"

const ItemList: React.FC<{
  heading: string
  items: string[]
  maxSlides?: number
}> = ({ heading, items, maxSlides }) => {
  return (
    <div className="bg-white my-2 rounded py-4">
      <header className="flex items-center justify-between p-4">
        <h2 className="text-2xl font-semibold">{heading}</h2>
        <button className="bg-indigo-600 w-8 h-8 inline-flex items-center justify-center rounded-full">
          <ChevronRightIcon className="h-6 w-6 text-white" />
        </button>
      </header>
      <div className="mx-6">
        <MultiSlider maxSlides={maxSlides}>
          {items.map((item, index) => (
            <Item
              key={index}
              image={item}
              heading="Travel"
              subheading="Explore Now"
            />
          ))}
        </MultiSlider>{" "}
      </div>
    </div>
  )
}

export default ItemList
