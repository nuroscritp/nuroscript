import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>

      <div className="w-full h-[600px] px-30 flex gap-5 items-center">

        <div className="flex flex-col gap-5 w-[50%] ">
          <h1 className="font-medium text-4xl bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            We build modern web & mobile apps
          </h1>
          <p className="text-white/80">nuroscript designs and develops high-performance digital products for startups and growing businesses.</p>
          <div className=" mt-6 flex items-center gap-5">

            <Link
              href="/contact"
              className="px-5 py-1.5 border-2 border-white bg-white text-black rounded-lg hover:bg-[#4f4f4f] hover:text-white hover:border-[#4f4f4f] cursor-pointer"
            >
              Get in touch
            </Link>

            <Link
              href="/work"
              className="px-5 py-1.5 border-2 border-white rounded-lg text-white hover:bg-[#4f4f4f] hover:border-[#4f4f4f] cursor-pointer"
            >
              View our work
            </Link>

          </div>
        </div>

        <div className="relative w-[50%] h-full">
          <Image
            src="/mac.png"
            alt="Hero image"
            fill
            className="object-contain"
            priority
          />

          <div className="relative w-[35%] h-full">
            <Image
              src="/feather.png"
              alt="Hero image"
              fill
              className="object-contain rotate-55 translate-x-50 translate-y-5"
              priority
            />

            <Image
              src="/phone.png"
              alt="Hero image"
              fill
              className="object-contain translate-x-112 translate-y-3"
              priority
            />

            <Image
              src="/feather.png"
              alt="Hero image"
              fill
              className="object-contain rotate-55 translate-x-112 translate-y-3"
              priority
            />
            
          </div>
          

        </div>

      </div>

      <div className="w-full">

      </div>

      <Footer />

    </>
  );
}
