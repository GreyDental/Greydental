import Image from "next/image";
import Link from "next/link";

/** Wordmark only: THE GREY DENTAL (no tagline) — 1024×276 */
const LOGO_SRC = "/Student_Dashboard/grey-dental-wordmark.png";
const ASPECT = 1024 / 276;

/**
 * Sized to match the old plain-text logo:
 * text-xl / text-2xl “Grey Dental” ≈ 150–170px wide × ~32–36px tall.
 * At height 44 → width ≈ 163px.
 */
const DEFAULT_HEIGHT = 44;

type BrandLogoProps = {
  href?: string;
  className?: string;
  height?: number;
  /** Stretch to the parent width, keep aspect ratio */
  fluid?: boolean;
  /** Knock out the plate and render a light wordmark for dark surfaces */
  onDark?: boolean;
  priority?: boolean;
};

export default function BrandLogo({
  href = "/",
  className = "",
  height = DEFAULT_HEIGHT,
  fluid = false,
  onDark = false,
  priority = false,
}: BrandLogoProps) {
  const width = Math.round(height * ASPECT);

  const image = (
    <Image
      src={LOGO_SRC}
      alt="The Grey Dental"
      width={fluid ? 1024 : width}
      height={fluid ? 276 : height}
      unoptimized
      priority={priority}
      className={`object-contain flex-shrink-0 ${
        fluid ? "w-full h-auto object-center" : "object-left"
      } ${onDark ? "brightness-0 invert" : ""} ${className}`}
      style={fluid ? { width: "100%", height: "auto" } : { width, height, maxWidth: "100%" }}
    />
  );

  if (!href) return image;

  return (
    <Link
      href={href}
      className={
        fluid
          ? "flex w-full items-center justify-center"
          : "inline-flex items-center flex-shrink-0"
      }
      aria-label="Grey Dental home"
    >
      {image}
    </Link>
  );
}
