type MediaFrameProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  kenburns?: boolean;
  overlay?: "none" | "bottom";
  fit?: "cover" | "contain";
};

export function MediaFrame({
  src,
  alt,
  className = "",
  imgClassName = "",
  kenburns = false,
  overlay = "none",
  fit = "cover",
}: MediaFrameProps) {
  return (
    <div className={`relative overflow-hidden bg-black ${className}`.trim()}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={[
          "block w-full",
          fit === "contain" ? "object-contain" : "object-cover",
          kenburns ? "photo-kenburns" : "",
          imgClassName || "h-full",
        ]
          .filter(Boolean)
          .join(" ")}
      />
      {overlay === "bottom" ? (
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
          aria-hidden="true"
        />
      ) : null}
    </div>
  );
}
