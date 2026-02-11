import Image from "next/image";
import Footer from "@/components/Footer";
export default function Contact() {
  return (
    <>

      <div className="flex justify-center items-center mt-10 flex-col gap-2">
        <h1 className="text-white text-2xl lg:text-3xl">Get in touch with our team</h1>
        <p className="text-white/80 text-sm  w-[70%] lg:w-[35%] text-center">Discuss your ideas with us. We deliver clear, practical solutions.</p>
      </div>

      <div className="relative w-full h-[600px]">

        <Image
          src="/dmap.png"
          alt="Map image"
          fill
          className="object-contain"
          priority
        />

        <div className="dot india group">
          <span className="tooltip">India · HQ</span>
        </div>

        <div className="dot usa group">
          <span className="tooltip">USA · Office</span>
        </div>

        <div className="dot europe group">
          <span className="tooltip">Europe · Partner</span>
        </div>

        {/* <div className="w-[7px] h-[7px] bg-blue-600 rounded-full translate-x-237 translate-y-67"></div> */}
        {/* <div className="w-[8px] h-[8px] bg-blue-600 rounded-full translate-x-102 translate-y-40"></div> */}

      </div>

      <div className="w-full flex flex-col lg:flex-row items-center px-10 gap-10 lg:gap-30">

        <div className="w-full lg:w-[50%] flex flex-col items-center justify-center gap-2">

            <h1 className="text-2xl lg:text-3xl text-white">nuroscript</h1>
            <p className="text-sm text-white/80 w-[50%] text-center">We believe great technology is built on clarity, purpose, and responsibility.</p>
            <div className="flex items-center gap-5 mt-10">
              <p className="text-sm text-white">nuroscript@gmail.com</p>
            </div>
            
        </div>

        <div className="w-full lg:w-[50%]">
          <div className="flex flex-col gap-2 py-10 lg:px-10" >
            <h1 className="text-white text-2xl lg:text-3xl">Contact Us</h1>
            <p className="text-white/80 text-sm w-[50%] lg:w-[35%]">Our friendly team would love to hear from you!</p>
          </div>

          <div className="flex flex-col gap-5 lg:gap-10 lg:px-10 mb-10 w-full">
            <div className="flex gap-5 items-center w-full">
              <input className="w-full px-5 py-2.5 border-2 border-white text-white/80 rounded-lg text-sm" type="text" placeholder="First name" />
              <input className="w-full px-5 py-2.5 border-2 border-white text-white/80 rounded-lg text-sm" type="text" placeholder="Last name" />
            </div>
            <input className="w-full px-5 py-2.5 border-2 border-white text-white/80 rounded-lg text-sm" type="email" placeholder="Email" />
            <input className="w-full px-5 py-2.5 border-2 border-white text-white/80 rounded-lg text-sm" type="number" placeholder="Phone number" />
            <textarea
              rows={5}
              placeholder="Message"
              className="w-full px-5 py-4 border-2 border-white text-white/80 bg-transparent rounded-lg text-sm resize-none focus:outline-none"
            ></textarea>
            <button className="w-full text-sm bg-white py-2.5 rounded-lg hover:bg-[#4f4f4f] cursor-pointer hover:text-white">Send</button>
          </div>
        </div>
      </div>
      
      <Footer />

    </>
  );
}
