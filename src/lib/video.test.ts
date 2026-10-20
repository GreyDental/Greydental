import { describe, expect, it } from "vitest";
import { LECTURE_VIDEO_SRC, lectureVideoUrl } from "@/lib/video";

describe("lectureVideoUrl", () => {
  it("defaults to the lecture video in public/videos", () => {
    expect(lectureVideoUrl()).toBe(LECTURE_VIDEO_SRC);
    expect(LECTURE_VIDEO_SRC).toBe("/videos/lecture.mp4");
  });

  it("returns a supplied source unchanged", () => {
    expect(lectureVideoUrl("/videos/other.mp4")).toBe("/videos/other.mp4");
  });

  it("trims surrounding whitespace", () => {
    expect(lectureVideoUrl("  /videos/other.mp4  ")).toBe("/videos/other.mp4");
  });

  it("falls back to the default when the source is blank", () => {
    expect(lectureVideoUrl("   ")).toBe(LECTURE_VIDEO_SRC);
  });
});
