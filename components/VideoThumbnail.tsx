"use client";

import { useState } from "react";

export default function VideoThumbnail({ videoId }: { videoId: string }) {
  const [play, setPlay] = useState(false);
  const [thumbError, setThumbError] = useState(false);

  const thumbnailUrl = thumbError
    ? `https://img.youtube.com/vi/${videoId}/sddefault.jpg`
    : `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="aspect-video rounded-xl overflow-hidden bg-black relative">
      {!play ? (
        <button
          onClick={() => setPlay(true)}
          className="w-full h-full relative"
        >
          {/* High-quality thumbnail */}
          <img
            src={thumbnailUrl}
            alt="Video thumbnail"
            className="w-full h-full object-contain "
            onError={() => setThumbError(true)}
          />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-black/60 rounded-full flex items-center justify-center text-white text-2xl">
              ▶
            </div>
          </div>
        </button>
      ) : (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0`}
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}
