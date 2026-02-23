import React from 'react';

export const RolfLogo = ({ className = "", variant = "light" }: { className?: string, variant?: "light" | "dark" }) => {
  const textColor = variant === "dark" ? "#1D1D1D" : "#FFFFFF";
  const topFlagColor = variant === "dark" ? "#1D1D1D" : "#FFFFFF";
  const bottomFlagColor = "#FFCD00";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 420 160"
      width="100%"
      height="100%"
      className={className}
    >
      <g transform="translate(30, 0) skewX(-10)" fillRule="evenodd">
        {/* Flag */}
        <path d="M 0 0 h 40 v 24 h -40 z" fill={topFlagColor}/>
        <path d="M 0 38 h 40 v 24 h -40 z" fill="#E3000F"/>
        <path d="M 0 76 h 40 v 24 h -40 z" fill={bottomFlagColor}/>

        {/* ROLF */}
        <path d="M 50 0 H 100 C 122 0, 136 12, 136 32 C 136 46, 128 56, 116 60 L 140 100 H 110 L 92 64 H 76 V 100 H 50 Z
                 M 76 24 H 96 C 104 24, 108 28, 108 35 C 108 42, 104 46, 96 46 H 76 Z
                 M 190 0 C 220 0, 235 20, 235 50 C 235 80, 220 100, 190 100 C 160 100, 145 80, 145 50 C 145 20, 160 0, 190 0 Z
                 M 190 24 C 176 24, 169 34, 169 50 C 169 66, 176 76, 190 76 C 204 76, 211 66, 211 50 C 211 34, 204 24, 190 24 Z
                 M 250 0 H 276 V 76 H 316 V 100 H 250 Z
                 M 326 0 H 390 V 24 H 352 V 42 H 384 V 66 H 352 V 100 H 326 Z"
              fill={textColor}/>

        {/* MOTOR OIL */}
        <path d="M 50 120 h 12 l 8 16 l 8 -16 h 12 v 30 h -8 v -18 l -8 16 h -8 l -8 -16 v 18 h -8 z
                 M 110 120 c 8 0, 14 5, 14 15 c 0 10, -6 15, -14 15 c -8 0, -14 -5, -14 -15 c 0 -10, 6 -15, 14 -15 z
                 M 110 126 c 4 0, 6 3, 6 9 c 0 6, -2 9, -6 9 c -4 0, -6 -3, -6 -9 c 0 -6, 2 -9, 6 -9 z
                 M 130 120 h 22 v 6 h -7 v 24 h -8 v -24 h -7 z
                 M 170 120 c 8 0, 14 5, 14 15 c 0 10, -6 15, -14 15 c -8 0, -14 -5, -14 -15 c 0 -10, 6 -15, 14 -15 z
                 M 170 126 c 4 0, 6 3, 6 9 c 0 6, -2 9, -6 9 c -4 0, -6 -3, -6 -9 c 0 -6, 2 -9, 6 -9 z
                 M 190 120 h 14 c 7 0, 10 3, 10 9 c 0 5, -2 7, -6 8 l 8 13 h -9 l -6 -11 h -3 v 11 h -8 z
                 M 198 126 h 4 c 3 0, 4 1, 4 4 c 0 3, -1 4, -4 4 h -4 z
                 M 240 120 c 8 0, 14 5, 14 15 c 0 10, -6 15, -14 15 c -8 0, -14 -5, -14 -15 c 0 -10, 6 -15, 14 -15 z
                 M 240 126 c 4 0, 6 3, 6 9 c 0 6, -2 9, -6 9 c -4 0, -6 -3, -6 -9 c 0 -6, 2 -9, 6 -9 z
                 M 260 120 h 8 v 30 h -8 z
                 M 275 120 h 8 v 24 h 12 v 6 h -20 z"
              fill={textColor}/>
      </g>
    </svg>
  );
};

export const RServiceLogo = ({ className = "", variant = "light" }: { className?: string, variant?: "light" | "dark" }) => {
  const color = variant === "dark" ? "#1D1D1D" : "#FFCD00";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 780 120"
      width="100%"
      height="100%"
      className={className}
    >
      <g transform="translate(30, 10) skewX(-10)" fill={color} fillRule="evenodd">
        <path d="M 0 0 h 40 v 24 h -40 z M 0 38 h 40 v 24 h -40 z M 0 76 h 40 v 24 h -40 z"/>
        <path d="M 50 0 H 100 C 122 0, 136 12, 136 32 C 136 46, 128 56, 116 60 L 140 100 H 110 L 92 64 H 76 V 100 H 50 Z
                 M 76 24 H 96 C 104 24, 108 28, 108 35 C 108 42, 104 46, 96 46 H 76 Z
                 M 145 40 h 30 v 20 h -30 z
                 M 230 0 C 255 0, 270 12, 270 32 H 244 C 244 22, 238 18, 230 18 C 220 18, 216 23, 216 29 C 216 36, 221 38, 236 43 C 258 50, 270 58, 270 76 C 270 94, 255 100, 230 100 C 205 100, 188 88, 188 70 H 214 C 214 80, 220 84, 230 84 C 240 84, 244 80, 244 74 C 244 67, 239 65, 224 60 C 202 53, 190 45, 190 28 C 190 12, 205 0, 230 0 Z
                 M 285 0 h 60 v 24 h -34 v 14 h 28 v 24 h -28 v 14 h 34 v 24 h -60 z
                 M 355 0 H 405 C 427 0, 441 12, 441 32 C 441 46, 433 56, 421 60 L 445 100 H 415 L 397 64 H 381 V 100 H 355 Z
                 M 381 24 H 401 C 409 24, 413 28, 413 35 C 413 42, 409 46, 401 46 H 381 Z
                 M 455 0 H 483 L 495 65 L 507 0 H 535 L 509 100 H 481 Z
                 M 545 0 H 571 V 100 H 545 Z
                 M 625 0 C 650 0, 668 12, 675 30 L 650 40 C 646 30, 638 24, 625 24 C 611 24, 601 34, 601 50 C 601 66, 611 76, 625 76 C 638 76, 646 70, 650 60 L 675 70 C 668 88, 650 100, 625 100 C 595 100, 575 82, 575 50 C 575 18, 595 0, 625 0 Z
                 M 685 0 h 60 v 24 h -34 v 14 h 28 v 24 h -28 v 14 h 34 v 24 h -60 z"/>
      </g>
    </svg>
  );
};

export const OilChangeIcon = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={className}>
    <rect width="64" height="64" rx="12" fill="#1D1D1D"/>
    <g fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 20v30a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V20a4 4 0 0 0-4-4H24a4 4 0 0 0-4 4z" stroke="#FFFFFF"/>
      <path d="M26 16v-4h12v4" stroke="#FFFFFF"/>
      <path d="M20 26h-6v12h6" stroke="#FFFFFF"/>
      <path d="M32 26 c-3 4-5 7-5 10 a5 5 0 0 0 10 0 c0-3-2-6-5-10 z" stroke="#FFCD00"/>
    </g>
  </svg>
);

export const TireServiceIcon = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={className}>
    <rect width="64" height="64" rx="12" fill="#1D1D1D"/>
    <g fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="32" r="20" stroke="#FFFFFF"/>
      <circle cx="32" cy="32" r="12" stroke="#FFFFFF"/>
      <circle cx="32" cy="32" r="4" stroke="#FFCD00"/>
      <path d="M32 20v8 M22 40l6-6 M42 40l-6-6 M20 24l8 4 M44 24l-8 4" stroke="#FFCD00"/>
    </g>
  </svg>
);

export const BrakePadsIcon = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={className}>
    <rect width="64" height="64" rx="12" fill="#1D1D1D"/>
    <g fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="30" cy="34" r="18" stroke="#FFFFFF"/>
      <circle cx="30" cy="34" r="6" stroke="#FFFFFF"/>
      <path d="M36 17 A 20 20 0 0 1 48 28 L 43 32 A 14 14 0 0 0 34 22 Z" stroke="#FFCD00"/>
    </g>
  </svg>
);

export const RepairWorksIcon = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={className}>
    <rect width="64" height="64" rx="12" fill="#1D1D1D"/>
    <g fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M32 38 l 6 -12 h 12 l 6 12 v 6 h -4 a 6 6 0 0 1 -12 0 h -8 z" stroke="#FFFFFF"/>
      <circle cx="44" cy="44" r="6" stroke="#FFFFFF"/>
      <path d="M36 38 h 18" stroke="#FFFFFF"/>
      <path d="M12 18 A 6 6 0 1 1 20 18 A 2 2 0 0 0 18 20 A 2 2 0 0 1 14 20 A 2 2 0 0 0 12 18 Z" stroke="#FFCD00"/>
      <path d="M16 20 V 46" stroke="#FFCD00"/>
    </g>
  </svg>
);

export const BatteryIcon = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={className}>
    <rect width="64" height="64" rx="12" fill="#1D1D1D"/>
    <g fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="14" y="24" width="36" height="26" rx="2" stroke="#FFFFFF"/>
      <path d="M20 24 v -6 h 6 v 6 M38 24 v -6 h 6 v 6" stroke="#FFFFFF"/>
      <path d="M14 34 h 36" stroke="#FFFFFF"/>
      <path d="M23 42 h 6 M26 39 v 6" stroke="#FFCD00"/>
      <path d="M37 42 h 6" stroke="#FFCD00"/>
    </g>
  </svg>
);

export const RestroomIcon = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={className}>
    <rect width="64" height="64" rx="12" fill="#1D1D1D"/>
    <g fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="22" cy="18" r="4" stroke="#FFFFFF"/>
      <path d="M18 26 h 8 a 2 2 0 0 1 2 2 v 12 h -2 v 12 h -4 v -12 h -2 v 12 h -4 v -12 h -2 v -12 a 2 2 0 0 1 2 -2 z" stroke="#FFFFFF"/>
      <circle cx="42" cy="18" r="4" stroke="#FFCD00"/>
      <path d="M42 26 l -6 16 h 3 v 10 h 4 v -10 h 2 v 10 h 4 v -10 h 3 z" stroke="#FFCD00"/>
    </g>
  </svg>
);

export const CashDeskIcon = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={className}>
    <rect width="64" height="64" rx="12" fill="#1D1D1D"/>
    <g fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="22" y="14" width="20" height="30" rx="3" stroke="#FFFFFF"/>
      <rect x="26" y="18" width="12" height="8" rx="1" stroke="#FFFFFF"/>
      <path d="M26 30h2 M31 30h2 M36 30h2 M26 34h2 M31 34h2 M36 34h2 M26 38h2 M31 38h2 M36 38h2" stroke="#FFFFFF"/>
      <path d="M26 44 v 8 h 12 v -8" stroke="#FFCD00"/>
    </g>
  </svg>
);

export const HandingOverIcon = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={className}>
    <rect width="64" height="64" rx="12" fill="#1D1D1D"/>
    <g fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 40 l 12 8 h 14 c 6 0 10 -4 10 -8 c 0 -5 -4 -6 -8 -4 l -10 4" stroke="#FFFFFF"/>
      <path d="M18 40 c 0 -4 4 -6 10 -4 l 8 4" stroke="#FFFFFF"/>
      <rect x="26" y="16" width="16" height="10" rx="2" stroke="#FFCD00"/>
      <circle cx="34" cy="21" r="2" stroke="#FFCD00"/>
    </g>
  </svg>
);

export const CarReceivingIcon = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={className}>
    <rect width="64" height="64" rx="12" fill="#1D1D1D"/>
    <g fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 48 V 28 L 32 12 L 52 28 V 48" stroke="#FFFFFF"/>
      <path d="M18 48 V 32 L 32 20 L 46 32 V 48" stroke="#FFFFFF"/>
      <path d="M24 48 v -8 c 0 -2 2 -4 4 -4 h 8 c 2 0 4 2 4 4 v 8" stroke="#FFCD00"/>
      <path d="M22 42 h 20" stroke="#FFCD00"/>
      <rect x="26" y="38" width="12" height="4" rx="1" stroke="#FFCD00"/>
    </g>
  </svg>
);
