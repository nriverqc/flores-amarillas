import React from 'react';

interface FlowerSVGProps {
  className?: string;
  isHovered?: boolean;
}

// 1. Girasol Monumental (Sunflower)
export const SunflowerSVG: React.FC<FlowerSVGProps> = ({ className = 'w-48 h-48', isHovered = false }) => {
  return (
    <svg viewBox="0 0 200 200" className={`${className} transition-transform duration-700 ${isHovered ? 'scale-110 rotate-6' : ''}`}>
      <defs>
        <radialGradient id="sfHalo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fffbeb" stopOpacity="0.9" />
          <stop offset="35%" stopColor="#fde047" stopOpacity="0.4" />
          <stop offset="70%" stopColor="#ca8a04" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#ca8a04" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sfPetalGrad1" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#d97706" />
          <stop offset="40%" stopColor="#eab308" />
          <stop offset="85%" stopColor="#fde047" />
          <stop offset="100%" stopColor="#fffbeb" />
        </linearGradient>
        <linearGradient id="sfPetalGrad2" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#b45309" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#fef08a" />
        </linearGradient>
        <radialGradient id="sfCenterGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#854d0e" />
          <stop offset="60%" stopColor="#451a03" />
          <stop offset="90%" stopColor="#290e02" />
          <stop offset="100%" stopColor="#713f12" />
        </radialGradient>
        <linearGradient id="sfLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#15803d" />
          <stop offset="60%" stopColor="#166534" />
          <stop offset="100%" stopColor="#14532d" />
        </linearGradient>
      </defs>

      {/* Radiant Glow Behind Flower */}
      <circle cx="100" cy="100" r="95" fill="url(#sfHalo)" className="animate-pulse-glow" />

      {/* Leaves behind petals */}
      <path d="M45,130 C20,150 15,180 50,175 C70,170 75,145 60,130 Z" fill="url(#sfLeafGrad)" opacity="0.85" />
      <path d="M155,130 C180,150 185,180 150,175 C130,170 125,145 140,130 Z" fill="url(#sfLeafGrad)" opacity="0.85" />

      {/* Outer Layer Petals (20 petals rotated) */}
      <g transform="translate(100,100)">
        {Array.from({ length: 20 }).map((_, i) => {
          const rot = i * (360 / 20);
          return (
            <g key={`outer-${i}`} transform={`rotate(${rot})`}>
              <path
                d="M-8,-25 C-16,-55 0,-88 0,-88 C0,-88 16,-55 8,-25 Z"
                fill="url(#sfPetalGrad2)"
                className="transition-all duration-500"
              />
            </g>
          );
        })}
      </g>

      {/* Inner Layer Petals offset */}
      <g transform="translate(100,100)">
        {Array.from({ length: 20 }).map((_, i) => {
          const rot = i * (360 / 20) + 9;
          return (
            <g key={`inner-${i}`} transform={`rotate(${rot})`}>
              <path
                d="M-7,-20 C-13,-48 0,-76 0,-76 C0,-76 13,-48 7,-20 Z"
                fill="url(#sfPetalGrad1)"
              />
              <path d="M0,-20 L0,-65" stroke="#ca8a04" strokeWidth="0.8" opacity="0.6" />
            </g>
          );
        })}
      </g>

      {/* Sunflower Seed Center */}
      <circle cx="100" cy="100" r="32" fill="url(#sfCenterGrad)" stroke="#a16207" strokeWidth="2.5" />

      {/* Concentric spiral dots / golden pollen texture */}
      <g opacity="0.75">
        <circle cx="100" cy="100" r="2.5" fill="#fef08a" />
        {/* Ring 1 */}
        <circle cx="93" cy="97" r="1.8" fill="#facc15" />
        <circle cx="107" cy="97" r="1.8" fill="#facc15" />
        <circle cx="100" cy="107" r="1.8" fill="#facc15" />
        <circle cx="94" cy="104" r="1.6" fill="#ca8a04" />
        <circle cx="106" cy="104" r="1.6" fill="#ca8a04" />
        {/* Ring 2 */}
        <circle cx="88" cy="92" r="2" fill="#eab308" />
        <circle cx="112" cy="92" r="2" fill="#eab308" />
        <circle cx="114" cy="105" r="2" fill="#facc15" />
        <circle cx="86" cy="105" r="2" fill="#facc15" />
        <circle cx="100" cy="116" r="2" fill="#ca8a04" />
        <circle cx="100" cy="84" r="2" fill="#ca8a04" />
        {/* Ring 3 */}
        <circle cx="82" cy="99" r="1.8" fill="#fef08a" />
        <circle cx="118" cy="99" r="1.8" fill="#fef08a" />
        <circle cx="90" cy="114" r="1.8" fill="#facc15" />
        <circle cx="110" cy="114" r="1.8" fill="#facc15" />
        <circle cx="90" cy="86" r="1.8" fill="#ca8a04" />
        <circle cx="110" cy="86" r="1.8" fill="#ca8a04" />
      </g>
    </svg>
  );
};

// 2. Rosa Amarilla (Yellow Rose)
export const RoseSVG: React.FC<FlowerSVGProps> = ({ className = 'w-48 h-48', isHovered = false }) => {
  return (
    <svg viewBox="0 0 200 200" className={`${className} transition-transform duration-700 ${isHovered ? 'scale-110 -rotate-3' : ''}`}>
      <defs>
        <radialGradient id="roseGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fef08a" stopOpacity="0.4" />
          <stop offset="70%" stopColor="#ca8a04" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="rosePetal1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="45%" stopColor="#facc15" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id="rosePetal2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="50%" stopColor="#eab308" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
        <linearGradient id="roseCenter" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#b45309" />
          <stop offset="60%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#fef08a" />
        </linearGradient>
        <linearGradient id="roseLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="80%" stopColor="#15803d" />
          <stop offset="100%" stopColor="#14532d" />
        </linearGradient>
      </defs>

      {/* Aura */}
      <circle cx="100" cy="100" r="90" fill="url(#roseGlow)" />

      {/* Sepals and Leaves */}
      <path d="M50,150 C30,170 40,195 70,185 C85,175 75,155 60,150 Z" fill="url(#roseLeaf)" />
      <path d="M150,150 C170,170 160,195 130,185 C115,175 125,155 140,150 Z" fill="url(#roseLeaf)" />

      {/* Outer Rose Petals */}
      <path d="M40,105 C35,60 70,35 100,45 C130,35 165,60 160,105 C155,145 125,165 100,165 C75,165 45,145 40,105 Z" fill="url(#rosePetal2)" opacity="0.95" />

      {/* Left and Right Overlapping Petals */}
      <path d="M50,95 C45,65 85,55 105,75 C105,115 65,145 50,95 Z" fill="url(#rosePetal1)" />
      <path d="M150,95 C155,65 115,55 95,75 C95,115 135,145 150,95 Z" fill="url(#rosePetal2)" />

      {/* Mid Layer Curving Petals */}
      <path d="M68,85 C75,60 125,60 132,85 C138,110 115,135 100,135 C85,135 62,110 68,85 Z" fill="url(#rosePetal1)" />
      <path d="M78,110 C85,135 115,135 122,110 C128,95 112,85 100,85 C88,85 72,95 78,110 Z" fill="url(#rosePetal2)" />

      {/* Inner Rose Bud Vortex Spiral */}
      <path d="M88,96 C86,85 102,80 110,87 C118,94 110,106 102,107 C94,108 90,102 91,97 C92,92 98,90 101,93"
        fill="url(#roseCenter)"
        stroke="#92400e"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Dew drop */}
      <circle cx="125" cy="75" r="2.8" fill="#ffffff" opacity="0.8" />
      <circle cx="126" cy="74" r="1" fill="#ffffff" />
    </svg>
  );
};

// 3. Tulipán Amarillo (Yellow Tulip)
export const TulipSVG: React.FC<FlowerSVGProps> = ({ className = 'w-48 h-48', isHovered = false }) => {
  return (
    <svg viewBox="0 0 200 200" className={`${className} transition-transform duration-700 ${isHovered ? 'scale-110 rotate-3' : ''}`}>
      <defs>
        <radialGradient id="tulipGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.4" />
          <stop offset="70%" stopColor="#f59e0b" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="tulipPetalLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="60%" stopColor="#facc15" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id="tulipPetalRight" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fffbeb" />
          <stop offset="60%" stopColor="#eab308" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
        <linearGradient id="tulipPetalCenter" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fff7ed" />
          <stop offset="50%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#ca8a04" />
        </linearGradient>
        <linearGradient id="tulipStem" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#16a34a" />
          <stop offset="50%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#15803d" />
        </linearGradient>
      </defs>

      {/* Aura */}
      <circle cx="100" cy="100" r="90" fill="url(#tulipGlow)" />

      {/* Elegant Curved Stem */}
      <path d="M100,135 Q105,170 95,195" stroke="url(#tulipStem)" strokeWidth="7" strokeLinecap="round" fill="none" />
      {/* Tall Tulip Leaf */}
      <path d="M96,165 C80,140 70,110 85,85 C95,120 102,150 96,165 Z" fill="url(#tulipStem)" />

      {/* Center Back Petal */}
      <path d="M100,30 C75,55 80,115 100,135 C120,115 125,55 100,30 Z" fill="url(#tulipPetalCenter)" />

      {/* Left Goblet Petal */}
      <path d="M60,65 C52,95 65,130 100,138 C80,120 70,85 85,55 C72,58 64,61 60,65 Z" fill="url(#tulipPetalLeft)" />

      {/* Right Goblet Petal */}
      <path d="M140,65 C148,95 135,130 100,138 C120,120 130,85 115,55 C128,58 136,61 140,65 Z" fill="url(#tulipPetalRight)" />

      {/* Front Accent Petal */}
      <path d="M82,75 C85,115 95,135 100,137 C105,135 115,115 118,75 C110,68 90,68 82,75 Z" fill="url(#tulipPetalCenter)" opacity="0.9" />

      {/* High-gloss highlights */}
      <path d="M78,72 Q72,95 82,118" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.5" fill="none" />
    </svg>
  );
};

// 4. Margarita Silvestre (Yellow Daisy)
export const DaisySVG: React.FC<FlowerSVGProps> = ({ className = 'w-48 h-48', isHovered = false }) => {
  return (
    <svg viewBox="0 0 200 200" className={`${className} transition-transform duration-700 ${isHovered ? 'scale-110 rotate-12' : ''}`}>
      <defs>
        <radialGradient id="daisyGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fffbeb" stopOpacity="0.5" />
          <stop offset="70%" stopColor="#facc15" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="daisyPetal" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="35%" stopColor="#fcd34d" />
          <stop offset="85%" stopColor="#fef9c3" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
        <radialGradient id="daisyCenter" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ca8a04" />
          <stop offset="65%" stopColor="#a16207" />
          <stop offset="100%" stopColor="#713f12" />
        </radialGradient>
      </defs>

      {/* Aura */}
      <circle cx="100" cy="100" r="92" fill="url(#daisyGlow)" />

      {/* Daisy Petals (16 radiating slender rounded petals) */}
      <g transform="translate(100,100)">
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = i * (360 / 16);
          return (
            <g key={`daisy-p-${i}`} transform={`rotate(${angle})`}>
              <path
                d="M-7,-22 C-10,-55 0,-82 0,-82 C0,-82 10,-55 7,-22 Z"
                fill="url(#daisyPetal)"
              />
              <line x1="0" y1="-25" x2="0" y2="-70" stroke="#f59e0b" strokeWidth="0.8" opacity="0.4" />
            </g>
          );
        })}
      </g>

      {/* Central disk */}
      <circle cx="100" cy="100" r="24" fill="url(#daisyCenter)" stroke="#ca8a04" strokeWidth="2" />

      {/* Disk Florets Texture */}
      <g opacity="0.85">
        <circle cx="100" cy="100" r="3" fill="#fef08a" />
        <circle cx="94" cy="96" r="2" fill="#facc15" />
        <circle cx="106" cy="96" r="2" fill="#facc15" />
        <circle cx="100" cy="106" r="2" fill="#facc15" />
        <circle cx="93" cy="104" r="1.7" fill="#eab308" />
        <circle cx="107" cy="104" r="1.7" fill="#eab308" />
        <circle cx="90" cy="99" r="1.8" fill="#fde047" />
        <circle cx="110" cy="99" r="1.8" fill="#fde047" />
        <circle cx="100" cy="90" r="1.8" fill="#fde047" />
        <circle cx="100" cy="111" r="1.8" fill="#eab308" />
      </g>
    </svg>
  );
};
