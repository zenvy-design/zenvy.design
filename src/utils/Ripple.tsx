import React, { useEffect, useState } from "react";

interface RippleType {
  id: number;
  x: number;
  y: number;
  size: number;
}

const Ripple = () => {
  const [ripples, setRipples] = useState<RippleType[]>([]);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];

    ripples.forEach((ripple) => {
      const timeout = setTimeout(() => {
        setRipples((prevRipples) =>
          prevRipples.filter((r) => r.id !== ripple.id)
        );
      }, 600);
      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [ripples]);

  const addRipple = (e: React.MouseEvent<HTMLElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const size = Math.max(button.offsetWidth, button.offsetHeight);
    
    setRipples((prev) => [
      ...prev,
      {
        id: Date.now(),
        x,
        y,
        size,
      },
    ]);
  };

  return {
    ripples: ripples.map((ripple) => (
      <span
        key={ripple.id}
        style={{
          position: 'absolute',
          left: ripple.x - ripple.size / 2,
          top: ripple.y - ripple.size / 2,
          width: ripple.size,
          height: ripple.size,
          borderRadius: '50%',
        }}
        className="ripple-effect"
      />
    )),
    addRipple,
  };
};

export default Ripple;
