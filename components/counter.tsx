'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const Counter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && count === 0) {
      let start = 0;
      const duration = 1500;
      const steps = 60;
      const increment = target / steps;
      const interval = duration / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          clearInterval(timer);
          setCount(target);
        } else {
          setCount(Math.ceil(start));
        }
      }, interval);
    }
  }, [isInView, target]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

export default Counter;
