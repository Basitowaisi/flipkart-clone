import Image from "next/image"
import React from "react"

const items = [
  {
    title: "Grocery",
    src: "https://rukminim1.flixcart.com/flap/96/96/image/29327f40e9c4d26b.png?q=100",
  },
  {
    title: "Mobiles",
    src: "https://rukminim1.flixcart.com/flap/96/96/image/22fddf3c7da4c4f4.png?q=100",
  },
  {
    title: "Fashion",
    src: "https://rukminim1.flixcart.com/fk-p-flap/96/96/image/0d75b34f7d8fbcb3.png?q=100",
  },
  {
    title: "Electronics",
    src: "https://rukminim1.flixcart.com/flap/96/96/image/69c6589653afdb9a.png?q=100",
  },
  {
    title: "Home & Furniture",
    src: "https://rukminim1.flixcart.com/flap/96/96/image/ab7e2b022a4587dd.jpg?q=100",
  },
  {
    title: "Appliances",
    src: "https://rukminim1.flixcart.com/flap/96/96/image/0ff199d1bd27eb98.png?q=100",
  },
  {
    title: "Travel",
    src: "https://rukminim1.flixcart.com/flap/96/96/image/71050627a56b4693.png?q=100",
  },
  {
    title: "Beauty, Toys & More",
    src: "https://rukminim1.flixcart.com/flap/96/96/image/dff3f7adcf3a90c6.png?q=100",
  },
  {
    title: "Two wheelers",
    src: "https://rukminim1.flixcart.com/fk-p-flap/96/96/image/05d708653beff580.png?q=100",
  },
]

function Cards() {
  return (
    <ul className="bg-white md:max-w-7xl lg:max-w-[100%] flex my-2 justify-between">
      {items.map((item) => (
        <li
          key={item.src}
          className="p-4 flex items-center justify-center flex-col text-center"
        >
          <Image src={item.src} width={100} height={120} alt={item.title} />
          <p className="text-sm font-semibold mt-2">{item.title}</p>
        </li>
      ))}
    </ul>
  )
}

export default Cards
