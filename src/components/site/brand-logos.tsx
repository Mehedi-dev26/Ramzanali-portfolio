import {
  siYoutube,
  siFacebook,
  siInstagram,
  siTiktok,
  siFigma,
  siCanva,
} from "simple-icons/icons";

type SimpleIconLike = { title: string; path: string; hex: string };

/** Renders an official simple-icons glyph as an inline SVG. */
export function SiGlyph({ icon, size = 18 }: { icon: SimpleIconLike; size?: number }) {
  return (
    <svg
      role="img"
      aria-hidden
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
    >
      <path d={icon.path} />
    </svg>
  );
}

/** Adobe app tiles: dark navy square with the app's brand-colored monogram. */
export function AdobeMark({ label, tone }: { label: string; tone: string }) {
  return (
    <span
      className="font-display text-[13px] font-bold leading-none tracking-tight"
      style={{ color: tone }}
    >
      {label}
    </span>
  );
}

export const brand = {
  youtube: siYoutube as SimpleIconLike,
  facebook: siFacebook as SimpleIconLike,
  instagram: siInstagram as SimpleIconLike,
  tiktok: siTiktok as SimpleIconLike,
  figma: siFigma as SimpleIconLike,
  canva: siCanva as SimpleIconLike | undefined,
};
