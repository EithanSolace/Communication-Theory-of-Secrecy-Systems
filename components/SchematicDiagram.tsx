import React from 'react';

const SchematicDiagram: React.FC = () => {
  return (
    <div className="w-full py-8 flex flex-col items-center">
      {/* 
        Removed overflow-x-auto and min-width to prevent scrollbars.
        The SVG is now fully responsive (w-full h-auto) and will scale down on smaller screens.
        ViewBox is optimized to minimize empty space.
      */}
      <div className="w-full px-1 md:px-4">
        <svg viewBox="0 0 950 480" className="w-full h-auto" style={{ fontFamily: 'serif' }} preserveAspectRatio="xMidYMid meet">
          <defs>
            <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
              <polygon points="0 0, 6 2, 0 4" fill="#000" />
            </marker>
            <marker id="dot" markerWidth="6" markerHeight="6" refX="3" refY="3">
              <circle cx="3" cy="3" r="2.5" fill="#000" />
            </marker>
          </defs>

          {/* --- BOXES --- */}
          
          {/* Message Source (Left) */}
          <rect x="10" y="150" width="150" height="80" fill="none" stroke="#000" strokeWidth="1.5" />
          <text x="85" y="185" textAnchor="middle" fontSize="14" fontWeight="bold">MESSAGE</text>
          <text x="85" y="205" textAnchor="middle" fontSize="14" fontWeight="bold">SOURCE</text>

          {/* Encipherer (Center) */}
          <rect x="330" y="150" width="150" height="80" fill="none" stroke="#000" strokeWidth="1.5" />
          <text x="405" y="180" textAnchor="middle" fontSize="14" fontWeight="bold">ENCIPHERER</text>
          <text x="405" y="210" textAnchor="middle" fontSize="16" fontStyle="italic">T<tspan dy="5" fontSize="10">K</tspan></text>

          {/* Decipherer (Right) */}
          <rect x="700" y="150" width="150" height="80" fill="none" stroke="#000" strokeWidth="1.5" />
          <text x="775" y="180" textAnchor="middle" fontSize="14" fontWeight="bold">DECIPHERER</text>
          <text x="775" y="210" textAnchor="middle" fontSize="16" fontStyle="italic">T<tspan dy="5" fontSize="10">K</tspan><tspan dy="-10" dx="1" fontSize="10">-1</tspan></text>

          {/* Key Source (Bottom Center-Left) */}
          <rect x="330" y="360" width="150" height="70" fill="none" stroke="#000" strokeWidth="1.5" />
          <text x="405" y="390" textAnchor="middle" fontSize="14" fontWeight="bold">KEY</text>
          <text x="405" y="410" textAnchor="middle" fontSize="14" fontWeight="bold">SOURCE</text>


          {/* --- PATHS & ARROWS --- */}

          {/* 1. Message Source -> Encipherer */}
          <line x1="160" y1="190" x2="330" y2="190" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
          <text x="245" y="180" textAnchor="middle" fontSize="12">MESSAGE</text>
          <text x="245" y="205" textAnchor="middle" fontSize="14" fontStyle="italic">M</text>

          {/* 2. Encipherer -> Decipherer (The Channel) */}
          <line x1="480" y1="190" x2="700" y2="190" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
          <text x="540" y="180" textAnchor="middle" fontSize="12">CRYPTOGRAM</text>
          <text x="560" y="205" textAnchor="middle" fontSize="14" fontStyle="italic">E</text>
          <text x="660" y="205" textAnchor="middle" fontSize="14" fontStyle="italic">E</text>

          {/* 3. Decipherer -> Destination */}
          <line x1="850" y1="190" x2="930" y2="190" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
          <text x="890" y="180" textAnchor="middle" fontSize="12">MESSAGE</text>
          <text x="890" y="205" textAnchor="middle" fontSize="14" fontStyle="italic">M</text>

          {/* 4. Key Source -> Encipherer */}
          {/* Vertical Line Up */}
          <line x1="405" y1="360" x2="405" y2="230" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
          <text x="395" y="280" textAnchor="end" fontSize="12">KEY</text>
          <text x="395" y="300" textAnchor="end" fontSize="14" fontStyle="italic">K</text>

          {/* 5. Key Source -> Decipherer */}
          {/* Branch from the Key line */}
          <path d="M 405 310 L 775 310 L 775 230" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead)" markerStart="url(#dot)" />
          <text x="590" y="325" textAnchor="middle" fontSize="12">KEY K</text>

          {/* 6. Enemy Intercept */}
          {/* Branch from Channel line up to Enemy */}
          <line x1="590" y1="190" x2="590" y2="100" stroke="#000" strokeWidth="1.5" markerEnd="url(#arrowhead)" markerStart="url(#dot)" />
          
          <text x="600" y="150" textAnchor="start" fontSize="14" fontStyle="italic">E</text>

          {/* Enemy Labels */}
          <text x="590" y="70" textAnchor="middle" fontSize="12" fontWeight="bold">ENEMY</text>
          <text x="590" y="90" textAnchor="middle" fontSize="12" fontWeight="bold">CRYPTANALYST</text>

        </svg>
      </div>
      <div className="mt-4 text-center text-gray-500 text-xs italic font-serif">
          Fig. 1. Schematic of a general secrecy system
      </div>
    </div>
  );
};

export default SchematicDiagram;