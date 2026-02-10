import Link from "next/link";
import Image from "next/image";
export default function Footer() {
    return (
        <>

            <div className="w-full bg-[#4f4f4f]">
                <div className="w-full py-5 flex flex-col gap-5 lg:flex-row lg:items-center px-10">

                    {/* Left */}
                    <div className="flex-1">
                        <h1 className="text-white text-xl">nuroscript</h1>
                    </div>

                    {/* Center */}
                    <div className="flex-1 flex flex-col lg:items-center justify-center gap-5 lg:flex-row lg:gap-8">
                        <span className="text-sm text-white/80">
                            nuroscript@gmail.com
                        </span>

                        <div className="flex items-center gap-5">
                            <a href="https://www.instagram.com/nuroscript" target="_blank">
                                <Image src="/instagram.png" alt="Instagram" width={22} height={22}
                                    className="hover:scale-110 transition" />
                            </a>

                            <a href="https://www.youtube.com/@nuroscript" target="_blank">
                                <Image src="/youtube.png" alt="YouTube" width={23} height={23}
                                    className="hover:scale-110 transition" />
                            </a>

                            <a href="https://twitter.com/nuroscript" target="_blank">
                                <Image src="/twitter.png" alt="Twitter" width={22} height={22}
                                    className="hover:scale-110 transition" />
                            </a>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="flex-1 flex flex-col lg:flex-row justify-end gap-5 lg:items-center">
                        <Link href="/terms" className="text-sm text-white/80 hover:text-white">
                            Terms & Conditions
                        </Link>

                        <Link href="/policy" className="text-sm text-white/80 hover:text-white">
                            Privacy Policy
                        </Link>
                    </div>

                </div>
            </div>

        </>
    );
}
