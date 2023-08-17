import Cards from "@/components/Cards"
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import Item from "@/components/Item"
import ItemList from "@/components/ItemList"
import Image from "next/image"

const electronicsItems = [
  "https://rukminim1.flixcart.com/image/210/210/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=90",
  "https://rukminim1.flixcart.com/image/210/210/kactpjk0/shaver/m/6/z/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg?q=90",
  "https://rukminim1.flixcart.com/flap/210/210/image/20c224cd52ae7a87.jpg?q=90",
  "https://rukminim1.flixcart.com/image/210/210/xif0q/power-bank/d/a/f/-original-imagky3e8yp5ebvr.jpeg?q=90",
  "https://rukminim1.flixcart.com/image/210/210/kuh9yfk0/monitor/w/f/q/g24-20-full-hd-23-8-66cfgac1in-lenovo-original-imag7h74tqhfy6bm.jpeg?q=90",
  "https://rukminim1.flixcart.com/image/210/210/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=90",
  "https://rukminim1.flixcart.com/image/210/210/xif0q/monitor/m/a/b/-original-imagsatbymyszzjf.jpeg?q=90",
  "https://rukminim1.flixcart.com/image/210/210/kx50gi80/projector/r/9/p/zeb-pixa-play-12-5-6-dobly-audio-led-projector-zebronics-original-imag9z3yujqmzqt4.jpeg?q=90",
]

const beautyItems = [
  "https://rukminim1.flixcart.com/image/210/210/jk1grrk0/car-pressure-washer/j/c/m/06008a7af0-bosch-original-imaf7hd6bv8g3m6r.jpeg?q=90",
  "https://rukminim1.flixcart.com/image/210/210/jxz0brk0/stuffed-toy/n/t/s/4-feet-pink-very-beautiful-best-quality-for-special-gift-125-13-original-imafgv92puzkdytg.jpeg?q=90",
  "https://rukminim1.flixcart.com/image/210/210/k6fd47k0/nut-dry-fruit/p/z/7/200-100-natural-california-pouch-happilo-original-imafzvw2tcazeur6.jpeg?q=90",
  "https://rukminim1.flixcart.com/image/210/210/l111lzk0/cycle/m/r/e/xc-900-grey-lite-26-15-5-cradiac-21-gear-120-original-imagczuzpxeweczm.jpeg?q=90",
  "https://rukminim1.flixcart.com/image/210/210/l51d30w0/shopsy-sport-mat/p/w/s/anadi-01-yoga-mat-4-30-anadi-enterprise-15-original-imagfsxudxcm7r48.jpeg?q=90",
  "https://rukminim1.flixcart.com/image/210/210/k7w8eq80/two-wheeler-tyre/v/y/s/90-90-12-106061-milaze-tl-54j-sw-ceat-original-imafqyx5tnfraaxh.jpeg?q=90",
  "https://rukminim1.flixcart.com/image/210/210/xif0q/microphone/n/h/e/professional-grade-k8-microphone-for-type-c-mobiles-and-iphone-original-imagj2fugcxzvf9h.jpeg?q=90",
  "https://rukminim1.flixcart.com/image/210/210/kkimfm80/tea/z/n/1/premium-pouch-regular-tea-powder-tata-original-imafzuf2mnubzphd.jpeg?q=90",
]

const otherItems = [
  {
    heading: "Totes",
    subheading: "Min. 70% Off",
    image:
      "https://rukminim1.flixcart.com/image/250/250/xif0q/hand-messenger-bag/r/k/7/-original-imagkycgwvwpzucm.jpeg?q=90",
  },
  {
    heading: "Sunglasses",
    subheading: "Min. 50% Off",
    image:
      "https://rukminim1.flixcart.com/image/250/250/xif0q/sunglass/7/m/m/m-6090-single-sheet-black-piraso-original-imagkfkfpezkgrhx.jpeg?q=90",
  },
  {
    heading: "Facial Kit",
    subheading: "Min. 50% Off",
    image:
      "https://rukminim1.flixcart.com/image/250/250/xif0q/facial-kit/f/s/b/40-pearl-facial-kit-6-step-facial-single-use-mini-facial-kit-for-original-imaggaxh8chpxczy.jpeg?q=90",
  },
  {
    heading: "Furniture",
    subheading: "Min. 70% Off",
    image:
      "https://rukminim1.flixcart.com/image/250/250/ks3jjbk0/portable-laptop-table/v/s/k/rubber-wood-study-table-for-bed-study-laptop-table-with-original-imag5qhgyz4gkahh.jpeg?q=90",
  },
]

export default function Home() {
  return (
    <main className="bg-gray-200 min-h-screen pb-6">
      <Header logo="Flipkart" />
      <div className="mx-4">
        <Cards />
        <HeroSection />
        <section className="flex gap-4">
          <div className="max-w-[85%]">
            <ItemList
              heading="Best of Electronics"
              items={electronicsItems}
              maxSlides={4}
            />
          </div>
          <Image
            src="https://rukminim1.flixcart.com/fk-p-flap/530/810/image/be963b6c6b7c510a.jpg?q=20"
            width={200}
            height={100}
            className="my-2"
            alt="ad banner"
          />
        </section>

        <ItemList heading="Beauty, Food, Toys & more" items={beautyItems} />

        <section className="grid grid-cols-3">
          <div className="grid grid-cols-2 bg-white p-4 justify-center gap-2">
            {otherItems.map((item) => (
              <Item {...item} key={item.image} />
            ))}
          </div>

          <img
            src="https://rukminim1.flixcart.com/www/1070/760/promos/22/05/2023/6350965b-ae8b-4b2a-a298-2ce4c7371f0d.jpg?q=90"
            className="w-full col-span-2"
            alt="ad banner"
          />
        </section>
      </div>
    </main>
  )
}
