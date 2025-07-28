import * as React from 'react';

const Logo = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 128 128"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="128" height="128" rx="32" fill="currentColor" />
    <path
      d="M32 96V78.8571C32 72.861 36.9152 68 42.9818 68H53.0182C59.0848 68 64 72.861 64 78.8571V96H51.5V80H44.5V96H32Z"
      fill="hsl(var(--background))"
    />
    <path
      d="M64 32V49.1429C64 55.139 68.9152 60 74.9818 60H85.0182C91.0848 60 96 55.139 96 49.1429V32H83.5V48H76.5V32H64Z"
      fill="hsl(var(--background))"
    />
  </svg>
);

export default Logo;
