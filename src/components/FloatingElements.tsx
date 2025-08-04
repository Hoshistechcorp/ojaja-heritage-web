import { useState, useEffect } from 'react';

const FloatingElements = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating drink bottles */}
      <div className="absolute top-1/4 left-10 animate-bounce" style={{animationDelay: '0s'}}>
        <div className="w-8 h-12 bg-ojaja-pink/20 rounded-full opacity-30"></div>
      </div>
      
      <div className="absolute top-1/3 right-20 animate-bounce" style={{animationDelay: '1s'}}>
        <div className="w-6 h-10 bg-ojaja-blue/20 rounded-full opacity-30"></div>
      </div>
      
      <div className="absolute bottom-1/4 left-1/4 animate-bounce" style={{animationDelay: '2s'}}>
        <div className="w-5 h-8 bg-ojaja-orange/20 rounded-full opacity-30"></div>
      </div>
      
      <div className="absolute top-1/2 right-10 animate-bounce" style={{animationDelay: '3s'}}>
        <div className="w-7 h-11 bg-ojaja-green/20 rounded-full opacity-30"></div>
      </div>

      {/* Floating bubbles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`absolute animate-bounce opacity-20`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        >
          <div className={`w-3 h-3 bg-ojaja-${['pink', 'blue', 'orange', 'green'][Math.floor(Math.random() * 4)]}/30 rounded-full`}></div>
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;