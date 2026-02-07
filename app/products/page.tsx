import Footer from "@/components/Footer";
import Image from "next/image";

export default function Products() {
  return (
    <>

      <div className="flex justify-center items-center my-10 flex-col gap-2">
        <h1 className="text-white text-3xl">Our Products</h1>
        <p className="text-white/80 text-sm w-[35%] text-center">Powerful digital products built to scale your business.</p>
      </div>

      <div className="w-full flex flex-col gap-5">

        <div className="px-10 flex flex-col gap-1">
          <h1 className="text-white text-xl">Web Applications</h1>
          <p className="text-white/80">Custom-built web apps tailored to your business needs.</p>
        </div>

        <div className="w-full h-[400px] grid grid-cols-4">

          <div className="w-full h-full relative">

            <Image
              src="/TV.png"
              alt="Hero image"
              fill
              className="object-contain"
              priority
            />

          </div>

           <div className="w-full h-full relative">

            <Image
              src="/TV.png"
              alt="Hero image"
              fill
              className="object-contain"
              priority
            />

          </div>

           <div className="w-full h-full relative">

            <Image
              src="/TV.png"
              alt="Hero image"
              fill
              className="object-contain"
              priority
            />

          </div>

           <div className="w-full h-full relative">

            <Image
              src="/TV.png"
              alt="Hero image"
              fill
              className="object-contain"
              priority
            />

          </div>

        </div>

      </div>

      <Footer />

    </>
  );
}
