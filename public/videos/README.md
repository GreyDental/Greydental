# Lecture video

Place the lecture recording in this folder as:

```
public/videos/lecture.mp4
```

The app serves it at `/videos/lecture.mp4`. The course detail page, the student
dashboard "Watch lecture" link, and the admin on-demand video cards all use the
same file.

To use a different file or a hosted URL, pass `src` to `LectureVideo` or change
`LECTURE_VIDEO_SRC` in `src/lib/video.ts`.
