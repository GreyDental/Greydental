/**
 * Lecture video source used across the course page and dashboards.
 *
 * The file lives in `public/videos/lecture.mp4`, so it is served from
 * `/videos/lecture.mp4` in both development and production.
 */
export const LECTURE_VIDEO_SRC = "/videos/lecture.mp4";

export const LECTURE_VIDEO_POSTER = "/Specific_Course_Page/hero.png";

/** Resolve a lecture video URL, falling back to the default when blank. */
export function lectureVideoUrl(src?: string): string {
  const value = (src ?? "").trim();
  return value.length > 0 ? value : LECTURE_VIDEO_SRC;
}
