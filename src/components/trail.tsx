import { useTrail } from '@/context/useTrail';
import { Pencil, Trash } from 'lucide-react';
import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { TrailConfig } from './trail-config';

interface Props {
    children: ReactNode
    current: number
}

interface TrailDot {
  x: number;
  y: number;
  timestamp?: number;
}

export function TrailEffect({children, current}: Props) {
  const { trail, permanentTrail, setTrail, setPermanentTrail, config, toMark, setToMark, setTrails, clearPermanentTrail } = useTrail()

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

      if (toMark) {
        setPermanentTrail({
          x: pageX,
          y: pageY
        })
      } else {
        setTrail({
          x: pageX,
          y: pageY,
          timestamp: timestamp
        })
      }
    };

    const handleMouseDown = () => {
      setToMark(true);
      permanentTrail.push({
        config: config,
        trail: []
      })// Start a new permanent trail
    };

    const handleMouseUp = () => {
      setToMark(false);
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
  }, [config, toMark, current, setPermanentTrail, setTrail, setToMark, permanentTrail]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const temp = trail.filter(dot => now - (dot.timestamp || 0) < config.duration)
      setTrails(temp)
    }, 100);

    return () => clearInterval(interval);
  }, [config, trail, setTrail, setTrails]);

  return (
    <div className="w-full h-full">
      {children}
      <svg ref={trailRef} className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none overflow-visible" style={{ userSelect: "none"}}>
        {trail.length > 1 && (
          <path
            d={`M ${trail.map(({ x, y }) => `${x} ${y}`).join(' L ')}`}
            fill="none"
            style={{
              stroke: config.color,
              strokeWidth: config.width,
              strokeOpacity: config.opacity
            }}
          />
        )}
      </svg>
      {permanentTrail.map((trails, index) => (
        <svg key={index} className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none overflow-visible" style={{ userSelect: "none"}}>
          {trails.trail?.length > 1 && (
            <path
              d={`M ${trails.trail.map(({ x, y }) => `${x} ${y}`).join(' L ')}`}
              fill="none"
              style={{
                stroke: trails.config.color,
                strokeWidth: trails.config.width,
                strokeOpacity: trails.config.opacity
              }}
            />
          )}
        </svg>
      ))}
      <div className='absolute top-6 left-6 flex space-x-2'>
        <TrailConfig></TrailConfig>
        <Trash className='size-6 hover:cursor-pointer' onClick={() => {
          clearPermanentTrail()
        }}></Trash>
      </div>
    </div>
  );
};