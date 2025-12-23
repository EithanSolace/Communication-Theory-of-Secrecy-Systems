import React, { useEffect, useState } from 'react';

// A visual representation of the Baker's Map (Stretching and Folding)
const MixingDough: React.FC = () => {
  const [step, setStep] = useState(0);

  // Auto-animate
  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // Generate points
  const points = [];
  const gridSize = 10;
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      // Normalize to 0-1
      const nx = x / (gridSize - 1);
      const ny = y / (gridSize - 1);
      
      let cx = nx;
      let cy = ny;
      let color = nx < 0.5 ? '#d9232e' : '#2563eb'; // Left Red, Right Blue

      // Transformation Logic
      // Step 0: Initial
      // Step 1: Stretch horizontally (2x), Compress vertically (0.5y)
      // Step 2: Cut (Right half moves)
      // Step 3: Stack (Right half goes on top)
      
      let tx = cx * 100; // %
      let ty = cy * 100; // %
      let opacity = 1;

      if (step >= 1) {
        // Stretch
        tx = cx * 200;
        ty = cy * 50;
      }
      
      if (step >= 2) {
         // Cut preparation visually (no change in position yet, maybe separation)
         if (tx > 100) {
             // It's the right half
         }
      }

      if (step === 3) {
          // Stack
          if (tx > 100) {
              tx = (tx - 100); // Shift back to 0-100 range
              ty = ty + 50;    // Stack on top (which is visually bottom in CSS usually, but let's say +50%)
          }
      }

      points.push(
        <div
          key={`${x}-${y}`}
          className="absolute w-2 h-2 rounded-full transition-all duration-1000 ease-in-out"
          style={{
            backgroundColor: color,
            left: `${tx}%`,
            top: `${ty}%`,
            opacity: opacity,
            transform: 'translate(-50%, -50%)'
          }}
        />
      );
    }
  }

  const captions = [
    "1. Initial State (Red/Blue separated)",
    "2. Stretch (2x Width, 0.5x Height)",
    "3. Cut right half",
    "4. Fold/Stack on top"
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="relative w-64 h-64 border-2 border-gray-800 bg-white overflow-hidden shadow-lg">
         {/* Container for points */}
         <div className="absolute inset-0 m-4 relative w-full h-full">
            {points}
         </div>
         
         {/* Dividing Line for visual reference */}
         <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-200 pointer-events-none"></div>
         <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-200 pointer-events-none"></div>
      </div>
      
      <div className="mt-6 font-mono text-sm text-gray-600 bg-gray-100 px-4 py-2 rounded">
          {captions[step]}
      </div>
      
      <p className="text-xs text-gray-400 mt-2 text-center max-w-md">
          The Baker's Map ($x, y \to 2x, y/2$) demonstrates how iterative stretching and folding rapidly mixes the phase space (Diffusion).
      </p>
    </div>
  );
};

export default MixingDough;