"use client";

import { useState } from "react";
import Image from "next/image";
import { LECTURE_VIDEO_POSTER, lectureVideoUrl } from "@/lib/video";

type LectureVideoProps = {
  /** Video source. Defaults to `/videos/lecture.mp4`. */
  src?: string;
  /** Preview image shown before playback. */
  poster?: string;
  /** Accessible name for the play button and player. */
  title?: string;
  className?: string;
  priority?: boolean;
};

/**
 * Lecture video placeholder that swaps the poster for an inline HTML5 player.
 * No third-party video hosting is required; the file is served from `public/`.
 */
export default function LectureVideo({
  src,
  poster = LECTURE_VIDEO_POSTER,
  title = "Lecture video",
  className = "",
  priority = false,
}: LectureVideoProps) {
  const [playing, setPlaying] = useState(false);
  const videoSrc = lectureVideoUrl(src);

  if (playing) {
    return (
      <video
        className={`h-full w-full bg-black object-contain ${className}`}
        controls
        autoPlay
        playsInline
        poster={poster}
        aria-label={title}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play ${title}`}
      className={`group relative block h-full w-full cursor-pointer ${className}`}
    >
      <Image
        src={poster}
        alt=""
        fill
        sizes="(max-width: 1024px) 100vw, 60vw"
        className="object-cover"
        priority={priority}
      />
      <span className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/20">
        <Image
          src="/Specific_Course_Page/play.svg"
          alt=""
          width={74}
          height={71}
          className="h-14 w-14 drop-shadow-lg sm:h-[74px] sm:w-[71px]"
        />
      </span>
    </button>
  );
}
