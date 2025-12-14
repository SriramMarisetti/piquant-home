// src/components/Preloader.tsx
import { useEffect, useState } from "react";

const Preloader = ({ onFinish }: { onFinish: () => void }) => {
  const [zoom, setZoom] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setZoom(true), 1000); // zoom in
    const timer2 = setTimeout(() => setHide(true), 2000); // hide loader
    const timer3 = setTimeout(() => onFinish(), 2500);    // show page

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-background transition-opacity duration-500 z-50 ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
<h1
  className={`text-6xl md:text-8xl font-extrabold tracking-widest transition-all duration-1000 ${
    zoom
      ? "scale-[30] text-background bg-primary p-8"
      : "text-primary"
  }`}
>
  <span className={zoom ? "hidden" : "inline-block"}>PRASAD</span>
  <span className={zoom ? "inline-block" : "hidden"}>P</span>
</h1>

    </div>
  );
};

export default Preloader;
