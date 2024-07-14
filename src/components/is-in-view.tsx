"use client"

import { Dispatch, ReactNode, SetStateAction, useEffect, useRef } from "react";

interface Props {
    children: ReactNode
    setCurrent: Dispatch<SetStateAction<number>>
    id: number
}

export function IsInView({children, setCurrent, id}: Props) {

  const divRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if(entry.isIntersecting){
            setCurrent(id);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, [setCurrent, id]);
    return (
        <div ref={divRef}>
            {children}
        </div>
    )
}