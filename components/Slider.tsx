"use client"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"
import React, { useRef } from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Slider: React.FC<{
  children: React.ReactChild[]
  showIndicators?: boolean
  autoPlay?: boolean
  multi?: boolean
}> = ({ children, showIndicators = true, autoPlay = false, multi }) => {
  const heroSectionRef = useRef<Carousel | null>(null)

  const multiProps = multi
    ? {
        centerMode: true,
        centerSlidePercentage: 100 / 3,
      }
    : {}

  return (
    <div className="relative">
      <Carousel
        showStatus={false}
        ref={heroSectionRef}
        showArrows={false}
        autoPlay={autoPlay}
        infiniteLoop
        showThumbs={false}
        showIndicators={showIndicators}
        {...multiProps}
      >
        {children}
      </Carousel>
      <button
        onClick={() => heroSectionRef?.current?.increment()}
        type="button"
        className="shadow absolute right-0 top-1/2 -translate-y-1/2 -mt-2 bg-white inline-block h-24 text-gray-500/90 px-2 rounded-tl rounded-bl"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={() => heroSectionRef?.current?.decrement()}
        className="shadow absolute left-0 top-1/2 -translate-y-1/2 -mt-2 rounded-tr rounded-br h-24 text-gray-500/90 bg-white inline-block px-2"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
    </div>
  )
}

export default Slider
