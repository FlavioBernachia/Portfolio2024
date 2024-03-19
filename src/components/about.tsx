import React, { useState } from 'react';

interface RGB {
  r: number;
  g: number;
  b: number;
}

export const About: React.FC = () => {
  const text: string = "Frontend: More Than Code, a Digital Artistic Expression.";
  const letters: string[] = text.split(""); // Dividir el texto en un array de letras
  const [randomColors, setRandomColors] = useState<RGB[]>([]);

  const handleHover = (): void => {
    const colors: RGB[] = letters.map(() => ({
      r: Math.floor(Math.random() * 256),
      g: Math.floor(Math.random() * 256),
      b: Math.floor(Math.random() * 256)
    }));
    setRandomColors(colors);
  };

  const handleMouseLeave = (): void => {
    const colors: RGB[] = letters.map(() => ({
      r: 0,
      g: 0,
      b: 0
    }));
    setRandomColors(colors);
  };

  return (
    <div>
      <h2 className='aboutTitle'>
        {letters.map((letter: string, index: number) => (
          <span 
            key={index} 
            style={{ color: randomColors[index] ? `rgb(${randomColors[index].r}, ${randomColors[index].g}, ${randomColors[index].b})` : 'black' }}
            onMouseEnter={handleHover} // Manejar el evento onMouseEnter
            onMouseLeave={handleMouseLeave} // Manejar el evento onMouseLeave
          >
            {letter}
          </span>
        ))}
      </h2>
    </div>
  );
};