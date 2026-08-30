import type { SVGProps } from 'react';

export default function LogoIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <rect width="32" height="32" rx="8" fill="currentColor" fillOpacity="0.15" />
      <path
        d="M8 22V10h3.2l4.1 7.2V10H18v12h-3.1l-4.2-7.4V22H8zm10.2 0V10h3v12h-3z"
        fill="currentColor"
      />
    </svg>
  );
}
