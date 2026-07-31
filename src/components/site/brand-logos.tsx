import {
  siYoutube,
  siFacebook,
  siInstagram,
  siTiktok,
  siFigma,
} from "simple-icons/icons";

type SimpleIconLike = { title: string; path: string; hex: string };

/** Renders an official simple-icons glyph as an inline SVG. */
export function SiGlyph({ icon, size = 17 }: { icon: SimpleIconLike; size?: number }) {
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

/** Two-letter monogram tile used for Adobe / editing apps. */
export function AdobeMark({ label }: { label: string }) {
  return (
    <span className="font-display text-[12px] font-bold leading-none tracking-tight">
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
};
