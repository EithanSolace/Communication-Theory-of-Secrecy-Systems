import React, { useEffect } from 'react';
import { SlideData } from '../types';
import SchematicDiagram from './SchematicDiagram';
import WorkCharacteristicChart from './WorkCharacteristicChart';
import CriteriaRadar from './CriteriaRadar';

interface SlideRendererProps {
  slide: SlideData;
}

const SlideRenderer: React.FC<SlideRendererProps> = ({ slide }) => {
  
  // Trigger MathJax typeset after DOM update
  useEffect(() => {
    if ((window as any).MathJax?.typesetPromise) {
      (window as any).MathJax.typesetPromise().catch((err: any) => console.log(err));
    }
  }, [slide.id]);

  // Determine if this slide has a visual component to render (Excluding 8 which is internal)
  const hasVisual = [3, 6, 10].includes(slide.id);

  if (slide.id === 1) {
    // Title Slide Rendering
    return (
      <div className="animate-fadeIn w-full">
         {slide.content}
      </div>
    );
  }

  return (
    <article className="prose prose-lg prose-slate max-w-none animate-fadeIn">
      <header className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-serif">{slide.title}</h2>
        {slide.subtitle && (
          <h3 className="text-xl text-[#d9232e] italic font-serif mt-2">{slide.subtitle}</h3>
        )}
      </header>
      
      <div className="text-gray-800 leading-relaxed text-lg">
        {slide.content}

        {/* Visuals embedded in the flow - Only render if visual exists and not handled internally */}
        {hasVisual && (
          <div className="my-12 w-full flex justify-center bg-white p-4 md:p-8 rounded-lg border border-gray-100 shadow-sm overflow-hidden">
              {slide.id === 3 && <SchematicDiagram />}
              {slide.id === 6 && <WorkCharacteristicChart />}
              {slide.id === 10 && <CriteriaRadar />}
          </div>
        )}
      </div>
    </article>
  );
};

export default SlideRenderer;