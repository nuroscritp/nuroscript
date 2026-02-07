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

        <div className="w-full h-[250px] gap-10 grid grid-cols-4 px-10 my-10">

          <div className="w-full h-full relative">

            <Image
              src="/ProductsImg/web1.jpg"
              alt="Hero image"
              fill
              className="object-fill rounded-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-102"
              priority
            />

          </div>

          <div className="w-full h-full relative">

            <Image
              src="/ProductsImg/web2.jpg"
              alt="Hero image"
              fill
              className="object-fill rounded-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-102"
              priority
            />

          </div>

          <div className="w-full h-full relative">

            <Image
              src="/ProductsImg/web3.jpg"
              alt="Hero image"
              fill
              className="object-fill rounded-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-102"
              priority
            />

          </div>

          <div className="w-full h-full relative">

            <Image
              src="/ProductsImg/webFour.jpg"
              alt="Hero image"
              fill
              className="object-fill rounded-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-102"
              priority
            />

          </div>

        </div>

        <h1 className="px-10 font-medium text-xl text-white">What we build</h1>
        <div className="px-10">
          <ul className="list-disc pl-6 flex flex-col gap-4">
            <li className="text-white/80">Business dashboards & admin panels</li>
            <li className="text-white/80">SaaS platforms</li>
            <li className="text-white/80">CRM / ERP systems</li>
            <li className="text-white/80">Booking & management systems</li>
            <li className="text-white/80">Startup MVPs</li>
          </ul>
        </div>

        <h1 className="px-10 font-medium text-xl text-white mt-10">Tech</h1>
        <div className="px-10">
          <ul className="list-disc pl-6 flex gap-10">
            <li className="text-white/80">React</li>
            <li className="text-white/80">Next.js</li>
            <li className="text-white/80">Node.js</li>
            <li className="text-white/80">Python</li>
            <li className="text-white/80">Cloud Hosting</li>
          </ul>
        </div>

        <h1 className="px-10 font-medium text-xl text-white mt-10">Best for</h1>
        <p className="text-white/80 px-10">Startups, businesses, enterprises, SaaS founders</p>

      </div>

      <hr className="h-[1px] bg-gradient-to-r from-purple-500 to-blue-500 my-20 mx-10 border-0" />


      <div className="w-full flex flex-col gap-5">

        <div className="px-10 flex flex-col gap-1">
          <h1 className="text-white text-xl">Mobile Applications (Android & iOS)</h1>
          <p className="text-white/80">High-performance mobile apps with beautiful UI & smooth UX.</p>
        </div>

        <div className="w-full h-[320px] gap-10 grid grid-cols-4 px-10 my-10">

          <div className="w-full h-full relative">

            <Image
              src="/ProductsImg/app1.jpg"
              alt="Hero image"
              fill
              className="object-fill rounded-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-102"
              priority
            />

          </div>

          <div className="w-full h-full relative">

            <Image
              src="/ProductsImg/app2.jpg"
              alt="Hero image"
              fill
              className="object-fill rounded-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-102"
              priority
            />

          </div>

          <div className="w-full h-full relative">

            <Image
              src="/ProductsImg/appThre.jpg"
              alt="Hero image"
              fill
              className="object-fill rounded-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-102"
              priority
            />

          </div>

          <div className="w-full h-full relative">

            <Image
              src="/ProductsImg/appFr.jpg"
              alt="Hero image"
              fill
              className="object-fill rounded-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-102"
              priority
            />

          </div>

        </div>

        <h1 className="px-10 font-medium text-xl text-white">What we build</h1>
        <div className="px-10">
          <ul className="list-disc pl-6 flex flex-col gap-4">
            <li className="text-white/80">Business & service apps</li>
            <li className="text-white/80">E-commerce apps</li>
            <li className="text-white/80">Learning & course apps</li>
            <li className="text-white/80">Social & community apps</li>
            <li className="text-white/80">On-demand service apps</li>
          </ul>
        </div>

        <h1 className="px-10 font-medium text-xl text-white mt-10">Tech</h1>
        <div className="px-10">
          <ul className="list-disc pl-6 flex gap-10">
            <li className="text-white/80">Flutter</li>
            <li className="text-white/80">Kotlin</li>
            <li className="text-white/80">Swift</li>
            <li className="text-white/80">Firebase</li>
            <li className="text-white/80">React Native</li>
          </ul>
        </div>

      </div>

      <hr className="h-[1px] bg-gradient-to-r from-purple-500 to-blue-500 my-20 mx-10 border-0" />


      <Footer />

    </>
  );
}
