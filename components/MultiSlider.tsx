"use client"
import { ReactNode, useMemo, useRef, useState } from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
}

const MultiSlider: React.FC<{ maxSlides?: number; children: ReactNode[] }> = ({
  children,
  maxSlides,
}) => {
  const carouselRef = useRef<Carousel | null>(null)
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  const showPreviousButton = currentSlide > 0

  const responsiveConfig = useMemo(() => {
    if (maxSlides) {
      return {
        ...responsive,
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: maxSlides,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: maxSlides - 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: maxSlides - 1,
        },
      }
    }

    return responsive
  }, [maxSlides])

  return (
    <div className="relative">
      <Carousel
        responsive={responsiveConfig}
        arrows={false}
        infinite={true}
        ssr={true}
        autoPlay={true}
        ref={carouselRef}
        centerMode={true}
        afterChange={(previousSlide, { currentSlide }) =>
          setCurrentSlide(currentSlide)
        }
      >
        {children}
      </Carousel>
      <button
        onClick={() =>
          carouselRef?.current?.next?.(
            currentSlide - 1 < 0 ? children.length - 1 : currentSlide - 1
          )
        }
        type="button"
        className="shadow absolute right-0 top-1/2 -translate-y-1/2 -mt-2 bg-white inline-block h-24 text-gray-500/90 px-2 rounded-tl rounded-bl"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
      {showPreviousButton ? (
        <button
          type="button"
          onClick={() =>
            carouselRef?.current?.previous?.(
              currentSlide + 1 > children.length - 1 ? 0 : currentSlide + 1
            )
          }
          className="shadow absolute left-0 top-1/2 -translate-y-1/2 -mt-2 rounded-tr rounded-br h-24 text-gray-500/90 bg-white inline-block px-2"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
      ) : null}
    </div>
  )
}

export default MultiSlider
