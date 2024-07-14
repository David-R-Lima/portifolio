import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface Props {
    children: ReactNode
    current: number
}

interface TrailDot {
  x: number;
  y: number;
  timestamp?: number;
}

type PermanentTrailDot = TrailDot[];

export function TrailEffect({children, current}: Props) {
  const [trail, setTrail] = useState<TrailDot[]>([]);
  const [permanentTrail, setPermanentTrail] = useState<PermanentTrailDot[]>([]);
  const [isToMark, setIsToMark] = useState<boolean>(false);

  const trailLength = 100;
  const trailDuration = 1000;

  const trailRef = useRef<SVGSVGElement>(null);

  useEffect(() => {

    const handleMouseMove = (event: MouseEvent) => {
        const { pageX, pageY } = event;
        updateTrail(pageX, pageY);
    };

    const handleTouchMove = (event: TouchEvent) => {
    const { pageX, pageY } = event.touches[0];
    updateTrail(pageX, pageY);
    };

    const updateTrail = (pageX: number, pageY: number) => {
      const timestamp = Date.now();

      if (isToMark) {
        setPermanentTrail((prevTrails) => {
          const updatedTrails = [...prevTrails];
          updatedTrails[updatedTrails.length - 1].push({ x: pageX + current, y: pageY });
          return updatedTrails;
        });
      } else {
        setTrail((prevTrail) => {
          const newTrail = [...prevTrail, { x: pageX, y: pageY, timestamp }];
          if (newTrail.length > trailLength) {
            newTrail.shift();
          }
          return newTrail;
        });
      }
    };

    const handleMouseDown = () => {
      setIsToMark(true);
      setPermanentTrail((prevTrails) => [...prevTrails, []]); // Start a new permanent trail
    };

    const handleMouseUp = () => {
      setIsToMark(false);
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);

   // touch events
   
   window.addEventListener('touchstart', handleMouseDown);
   window.addEventListener('touchend', handleMouseUp);
   window.addEventListener('touchmove', handleTouchMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);

      // touch events
      window.removeEventListener('touchstart', handleMouseDown);
      window.removeEventListener('touchend', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [trailLength, isToMark, current]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setTrail((prevTrail) => prevTrail.filter(dot => now - (dot.timestamp || 0) < trailDuration));
    }, 100);

    return () => clearInterval(interval);
  }, [trailDuration]);

  return (
    <div className="w-full h-full">
      {children}
      <svg ref={trailRef} className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none overflow-visible">
        {trail.length > 1 && (
          <path
            d={`M ${trail.map(({ x, y }) => `${x} ${y}`).join(' L ')}`}
            fill="none"
            className="stroke-primary"
            strokeWidth="2"
          />
        )}
      </svg>
      {permanentTrail.map((trail, index) => (
        <svg key={index} className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {trail.length > 1 && (
            <path
              d={`M ${trail.map(({ x, y }) => `${x} ${y}`).join(' L ')}`}
              fill="none"
              className="stroke-primary"
              strokeWidth="2"
            />
          )}
        </svg>
      ))}
    </div>
  );
};