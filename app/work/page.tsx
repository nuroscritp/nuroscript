"use client";

import Footer from "@/components/Footer";
import VideoThumbnail from "@/components/VideoThumbnail";

export default function Work() {
  return (
    <>
      {/* Heading */}
      <div className="flex justify-center items-center mt-10 mb-16 flex-col gap-2">
        <h1 className="text-white text-2xl lg:text-3xl">Our Work</h1>
        <p className="text-white/80 text-sm w-[50%] lg:w-[35%] text-center">
          Software solutions crafted for performance and scale.
        </p>
      </div>

      {/* Work Grid */}
      <div className="max-w-7xl mb-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-10 py-5 lg:p-1">

        {/* Logitech */}
        <VideoThumbnail videoId="lOs7Num3riU" />
        <WorkDesc
          title="Logitech Mouse Webapp"
          desc="The Logitech Mouse Web App UI is designed with a minimal, modern, and user-centric approach, focusing on clarity, control, and performance."
        />

        {/* Bakery */}
        <VideoThumbnail videoId="Eexx_smR_yI" />
        <WorkDesc
          title="Modern Bakery Website"
          desc="A warm, elegant, and visually appetizing design that reflects the freshness and craftsmanship of a premium bakery brand."
        />

        {/* Starbucks */}
        <VideoThumbnail videoId="JwglIK64YXw" />
        <WorkDesc
          title="Starbucks Website"
          desc="A premium, modern, and brand-driven digital experience reflecting warmth, sophistication, and global coffee culture."
        />

        {/* Audi R8 */}
        <VideoThumbnail videoId="CT749UCbY8I" />
        <WorkDesc
          title="Audi R8 Website"
          desc="A luxury-driven digital experience that mirrors the power, precision, and elegance of the iconic supercar."
        />

        {/* DarkBrew */}
        <VideoThumbnail videoId="G9pkmXsZG1A" />
        <WorkDesc
          title="DarkBrew Coffee Website"
          desc="A bold, dark-themed, premium aesthetic reflecting the richness and intensity of freshly brewed coffee."
        />

        {/* Lamp */}
        <VideoThumbnail videoId="Qurdko8whzo" />
        <WorkDesc
          title="Lamp Webapp"
          desc="A clean, modern, and minimal design focused on elegance, lighting aesthetics, and interior appeal."
        />

        {/* Christmas */}
        <VideoThumbnail videoId="Tncn48CtFNw" />
        <WorkDesc
          title="Festive Christmas Website"
          desc="A joyful, colorful holiday-themed website capturing warmth, celebration, and seasonal spirit."
        />

        {/* Cozelatte */}
        <VideoThumbnail videoId="BmHQ9zjLN2Q" />
        <WorkDesc
          title="Cozelatte Coffee Website"
          desc="A cozy, warm, and inviting design inspired by comfort, latte moments, and community vibes."
        />

      </div>

      <Footer />
    </>
  );
}

/* Description Component */
function WorkDesc({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div>
      <h2 className="text-2xl font-medium mb-4 text-white">{title}</h2>
      <p className="text-white/70 text-sm mb-4">{desc}</p>
      <p className="text-sm text-white/60 mb-6">
        Tech: React & Tailwind CSS
      </p>
      <a
        href="https://www.youtube.com/@nuroscript"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-2 bg-white text-black rounded-lg hover:bg-red-600 hover:text-white transition"
      >
        View More
      </a>
    </div>
  );
}
