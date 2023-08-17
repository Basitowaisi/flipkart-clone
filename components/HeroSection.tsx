"use client"
import Image from "next/image"
import Slider from "./Slider"

const carouselImages = [
  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/82fb6e04ef0bf250.jpg?q=90",
  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/2194c1ed10f3040d.jpg?q=90",
  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/a2457f65cf993bf8.jpg?q=20",
  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/68ba00d4876d844b.jpg?q=90",
  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/5c28b798715ba85f.jpg?q=90",
  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/7530e8b380c8abd0.jpg?q=20",
  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/7530e8b380c8abd0.jpg?q=90",
  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/422cf7abda50cf4c.jpg?q=90",
]

function HeroSection() {
  return (
    <div className="relative">
      <Slider autoPlay={true}>
        {carouselImages.map((image, index) => (
          <Image
            src={image}
            width={1600}
            height={270}
            key={image}
            alt={`Image ${index}`}
          />
        ))}
      </Slider>
    </div>
  )
}

export default HeroSection
