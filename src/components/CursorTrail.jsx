import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CursorTrail() {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newTrail = {
        id: Math.random(),
        x: e.clientX,
        y: e.clientY,
      };
      setTrails((prev) => [...prev, newTrail].slice(-10)); // Ограничиваем количество следов
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      {trails.map((trail) => (
        <motion.div
          key={trail.id}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 2 }}
          transition={{ duration: 0.5 }}
          className="absolute w-6 h-6 bg-[#010f36] rounded-full"
          style={{ top: trail.y - 12, left: trail.x - 12 }}
        />
      ))}
    </div>
  );
}
