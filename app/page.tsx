import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>

      <div className="w-full h-[300px] lg:h-[600px] px-10 lg:px-30 flex flex-col lg:flex-row gap-5 items-center">

        <div className="flex flex-col gap-5 w-full mt-10 lg:w-[50%] ">
          <h1 className="font-medium text-2xl lg:text-4xl bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            We build modern web & mobile apps
          </h1>
          <p className="text-white/80 text-sm lg:text-base">nuroscript designs and develops high-performance digital products for startups and growing businesses.</p>
          <div className=" mt-6 flex items-center gap-5">

            <Link
              href="/contact"
              className="text-sm lg:text-base px-3.5 lg:px-5 py-1.5 border-2 border-white bg-white text-black rounded-lg hover:bg-[#4f4f4f] hover:text-white hover:border-[#4f4f4f] cursor-pointer"
            >
              Get in touch
            </Link>

            <Link
              href="/work"
              className="text-sm lg:text-base px-3.5 lg:px-5 py-1.5 border-2 border-white rounded-lg text-white hover:bg-[#4f4f4f] hover:border-[#4f4f4f] cursor-pointer"
            >
              View our work
            </Link>

          </div>
        </div>

        <div className="relative w-[55%] h-full hidden lg:block">
          <Image
            src="/HeroBack.png"
            alt="Hero image"
            fill
            className="object-contain"
            priority
          />

        </div>

      </div>

      <div className="w-full h-[550px] flex flex-col lg:flex-row items-center p-5 gap-5 bg-[#131313]">

        <div className="h-full w-[90%] lg:w-[45%] relative">

          <Image
            src="/girlwal.png"
            alt="Hero image"
            fill
            className="object-contain"
            priority
          />

        </div>

        <div className="h-full w-[90%] lg:w-[55%] flex flex-col items-center justify-center gap-5">

          <h1 className=" text-xl lg:text-2xl text-white">Powerful Web Applications</h1>
          <p className="text-white/80 text-sm text-center w-[80%]">We design and develop fast, secure, and scalable web applications tailored to your business goals. From clean user interfaces to robust backend systems, every detail is crafted for performance and long-term growth.</p>

        </div>

      </div>

      <div className="w-full h-[590px] lg:h-[550px] pb-5 lg:pb-0 flex flex-col-reverse lg:flex-row items-center p-5 gap-5">

        <div className="h-[40%] w-full lg:w-[55%] flex flex-col items-center justify-center gap-5">

          <h1 className=" text-xl lg:text-2xl text-white">High-Performance Mobile Apps</h1>
          <p className="text-white/80 text-sm text-center w-[80%]">We develop reliable, scalable, and user-friendly mobile applications tailored for Android and iOS. From intuitive UI to powerful backend integration, our apps are built for speed, security, and growth.</p>

        </div>

        <div className="h-[60%] lg:h-[85%] w-full lg:w-[45%] relative mb-5  mt-5 lg:mt-0 lg:mb-0">

          <Image
            src="/pho.png"
            alt="Hero image"
            fill
            className="object-contain"
            priority
          />

        </div>

      </div>

      <div className="w-full h-[550px] flex flex-col lg:flex-row items-center p-5 lg:gap-5 bg-[#131313]">

        <div className="h-[60%] lg:h-[90%] w-[95%] lg:w-[45%] relative my-5 lg:my-0">

          <Image
            src="/Gaming.png"
            alt="Hero image"
            fill
            className="object-contain"
            priority
          />

        </div>


        <div className="h-[40%] lg:h-full w-[90%] lg:w-[55%] flex flex-col items-center justify-center gap-5">

          <h1 className=" text-xl lg:text-2xl text-white">Next-Gen Tablet Games</h1>
          <p className="text-white/80 text-sm text-center w-[80%]">From casual to interactive gameplay, we build tablet games that are visually stunning, responsive, and optimized for performance across all tablet devices.</p>

        </div>

      </div>


      <div className="w-full h-[550px] pb-5 lg:pb-0 flex flex-col-reverse lg:flex-row items-center p-5 gap-5">

        <div className="h-full w-[90%] lg:w-[55%] flex flex-col items-center justify-center gap-5">

          <h1 className=" text-xl lg:text-2xl text-white">Engaging Mobile Game Development</h1>
          <p className="text-white/80 text-sm text-center w-[80%]">We create high-quality mobile games with smooth gameplay, eye-catching visuals, and optimized performance. Built for Android and iOS to keep players engaged and coming back.</p>

        </div>

        <div className="lg:h-[80%] lg:w-[40%] h-[90%] w-[90%] relative">

          <Image
            src="/gamingM.png"
            alt="Hero image"
            fill
            className="object-contain"
            priority
          />

        </div>

      </div>

      <div className="w-full h-[550px] flex flex-col lg:flex-row items-center p-5 lg:gap-5 bg-[#131313]">

        <div className="lg:h-[65%] lg:w-[50%] h-[60%] w-[90%] relative">

          <Image
            src="/TV.png"
            alt="Hero image"
            fill
            className="object-contain"
            priority
          />

        </div>

        <div className="h-[35%] lg:h-full w-[90%] lg:w-[55%] flex flex-col items-center justify-center gap-5">

          <h1 className="text-xl lg:text-2xl text-white">Smart TV App Development</h1>
          <p className="text-white/80 text-sm text-center w-[80%]">We build fast, intuitive, and visually rich TV applications optimized for large screens, remote navigation, and smooth performance across Smart TV platforms.</p>

        </div>

      </div>


      
      <div className="w-full h-[560px] lg:h-[550px] pb-5 lg:pb-0 flex flex-col-reverse lg:flex-row items-center p-5 gap-5">

        <div className="lg:h-full h-[30%] w-[90%] lg:w-[55%] flex flex-col items-center justify-center gap-5 my-5 lg:my-0">

          <h1 className=" text-xl lg:text-2xl text-white">Apps for Wearables</h1>
          <p className="text-white/80 text-sm text-center w-[80%]">We build lightweight, fast, and intuitive smartwatch applications designed for quick interactions, real-time data, and seamless performance on wearable devices.</p>

        </div>

        <div className="lg:h-[90%] lg:w-[45%] h-[70%] w-full relative">

          <Image
            src="/watch.png"
            alt="Hero image"
            fill
            className="object-contain"
            priority
          />

        </div>

      </div>



      <Footer />

    </>
  );
}
