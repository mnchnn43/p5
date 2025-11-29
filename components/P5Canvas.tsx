import React, { useRef, useEffect } from 'react';
import p5 from 'p5';
import { SketchFunction } from '../types';

interface P5CanvasProps {
  sketch: SketchFunction;
}

const P5Canvas: React.FC<P5CanvasProps> = ({ sketch }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create a new p5 instance bound to this specific DOM element
    const myP5 = new p5(sketch, containerRef.current);

    // Cleanup function to remove the sketch when component unmounts
    return () => {
      myP5.remove();
    };
  }, [sketch]);

  return (
    <div 
      ref={containerRef} 
      className="overflow-hidden rounded-lg shadow-md bg-white flex justify-center items-center"
      style={{ minHeight: '300px' }}
    >
      {/* Canvas will be injected here by p5 */}
    </div>
  );
};

export default P5Canvas;