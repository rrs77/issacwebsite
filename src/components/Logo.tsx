type LogoProps = {
  className?: string;
  compact?: boolean;
  light?: boolean;
};

export function Logo({ className = "", compact = false, light = false }: LogoProps) {
  if (compact) {
    return (
      <span className={`inline-flex items-center gap-2.5 ${className}`}>
        <img
          src={`${import.meta.env.BASE_URL}logo.png`}
          alt=""
          className="h-9 w-9 rounded-md object-contain sm:h-10 sm:w-10"
          width={40}
          height={40}
          decoding="async"
        />
        <span className="font-display text-sm font-bold leading-tight tracking-tight text-ink sm:text-[0.95rem]">
          Old Moulsham
          <span className="block text-[0.7rem] font-semibold tracking-[0.08em] text-gold uppercase">
            Tutoring
          </span>
        </span>
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src={`${import.meta.env.BASE_URL}logo.png`}
        alt="Old Moulsham Tutoring"
        className={
          light
            ? "h-14 w-auto rounded-md bg-[#F9F5F0] p-1.5 sm:h-16"
            : "h-12 w-auto sm:h-14"
        }
        width={160}
        height={140}
        decoding="async"
      />
    </span>
  );
}
