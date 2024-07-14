import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface Props {
    children: ReactNode
}

interface TrailDot {
    x: number;
    y: number;
    timestamp: number;
  }

  interface PermanentTrailDot {
    x: number;
    y: number;
  }
export function TrailEffect({children}: Props) {
  const [trail, setTrail] = useState<TrailDot[]>([]);
  const [permanentTrail, setPermanentTrail] = useState<PermanentTrailDot[][]>([])

  const [isToMark, setIsToMark] = useState<boolean>(false)

  const trailLength = 100;
  const trailDuration = 1000;

  const trailRef = useRef(null);
  const permanentTrailRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const timestamp = Date.now();

      if(isToMark) {
        setPermanentTrail((prevTrail) => {
            const newTrail = [...prevTrail, { x: clientX, y: clientY }];
            return newTrail;
          });
      } else {
        setTrail((prevTrail) => {
            const newTrail = [...prevTrail, { x: clientX, y: clientY, timestamp }];
            if (newTrail.length > trailLength) {
              newTrail.shift(); // Remove the oldest position if the trail is too long
            }
            return newTrail;
          });
      }
    };

    const handleMouseDown = () => {
        setIsToMark(true)
    };
  
    const handleMouseUp = () => {
        setIsToMark(false)
    };
  
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [trailLength, isToMark]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setTrail((prevTrail) => prevTrail.filter(dot => now - dot.timestamp < trailDuration));
    }, 100);

    return () => clearInterval(interval);
  }, [trailDuration]);

  return (
    <div className="relative w-full h-screen" style={{
        userSelect: "none"
    }}>
      {children}
      <svg ref={trailRef} className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {trail.length > 1 && (
          <path
            d={`M ${trail.map(({ x, y }) => `${x} ${y}`).join(' L ')}`}
            fill="none"
            className="stroke-primary"
            strokeWidth="2"
          />
        )}
      </svg>
      {permanentTrail.map((trail, index) => {
        return <svg key={index} ref={permanentTrailRef} className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {trail.length > 1 && (
                <path
                d={`M ${trail.map(({ x, y }) => `${x} ${y}`).join(' L ')}`}
                fill="none"
                className="stroke-primary"
                strokeWidth="2"
                />
            )}
            </svg>
      })}

      <div className='absolute bottom-2 right-2'>
        <button onClick={() => {
            setIsToMark(true)
        }}>click</button>
      </div>
    </div>
  );
};

