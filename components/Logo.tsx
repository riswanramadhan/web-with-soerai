import Image from "next/image";

interface LogoProps {
  className?: string;
  withTagline?: boolean;
  priority?: boolean;
}

export default function Logo({ className, withTagline = false, priority = false }: LogoProps) {
  void withTagline;

  return (
    <Image
      src="/images/logo-withsoerai.png"
      alt="WITH SOERAI"
      width={370}
      height={92}
      sizes="(max-width: 640px) 120px, 190px"
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      className={className}
    />
  );
}
