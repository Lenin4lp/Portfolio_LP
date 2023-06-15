import React, { useEffect, useRef, useState } from "react";

// * Custom hook that will help to animate every single selected element that enters on viewport

function useIntersection(options = {}) {
  const elementRef = useRef();
  const [isIntersecting, setIsIntersecting] = useState(false);
  useEffect(() => {
    const element = elementRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsIntersecting(entry.isIntersecting);
      });
    }, options);

    if (element) {
      observer.observe(element);
    }
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);
  return [elementRef, isIntersecting];
}

export default useIntersection;
