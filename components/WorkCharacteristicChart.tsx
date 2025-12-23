import React from 'react';

const WorkCharacteristicChart: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center py-8">
      <div className="w-full max-w-lg bg-white p-4">
        <svg viewBox="0 0 500 350" className="w-full h-auto" style={{ fontFamily: 'serif' }}>
          
          {/* Axes */}
          <line x1="50" y1="300" x2="480" y2="300" stroke="black" strokeWidth="1.5" /> {/* X Axis */}
          <line x1="50" y1="300" x2="50" y2="20" stroke="black" strokeWidth="1.5" />   {/* Y Axis */}
          
          {/* Label N on X Axis */}
          <text x="440" y="320" fontSize="14" fontStyle="italic">N</text>

          {/* Curve He(M) - Equivocation */}
          {/* Logic: Starts at origin, rises to a small hump, then drops to zero at Unicity Distance */}
          <path 
            d="M 50 300 C 100 200, 150 200, 240 300" 
            fill="none" 
            stroke="black" 
            strokeWidth="2"
          />
          {/* Label He(M) */}
          <text x="185" y="255" fontSize="14">H<tspan dy="3" fontSize="10">E</tspan><tspan dy="-3" fontSize="14">(M)</tspan></text>

          {/* Curve W - Work */}
          {/* Part 1: Dashed Line (Rising phase to Peak) */}
          {/* Logic: Rises much higher than H, peak is the max complexity */}
          <path 
            d="M 50 300 C 100 100, 150 20, 220 20" 
            fill="none" 
            stroke="black" 
            strokeWidth="2"
            strokeDasharray="6,4"
          />
          
          {/* Part 2: Solid Line (Falling phase to Asymptote) */}
          {/* Logic: Drops steeply but levels off above the x-axis (Work remains hard) */}
          {/* Starting from (220, 20) where the previous path ended */}
          <path 
            d="M 220 20 C 280 20, 280 220, 480 230" 
            fill="none" 
            stroke="black" 
            strokeWidth="2"
          />
          
          {/* Label W */}
          <text x="290" y="190" fontSize="14" fontWeight="bold">W</text>

        </svg>
      </div>
      <div className="mt-4 text-center text-gray-500 text-xs italic font-serif">
          Fig. 12. Typical work and equivocation characteristics
      </div>
    </div>
  );
};

export default WorkCharacteristicChart;