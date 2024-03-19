import Image from 'next/image';
import React, { useState } from 'react';
import foto1 from "../../public/sombrero.jpg"
import foto2 from "../../public/calvo.jpg"
import foto3 from "../../public/perfil.jpg"
import foto4 from "../../public/fotoconro.jpg"
import foto5 from "../../public/Minimalist Coffee Break Instagram Story (230 x 230 px).png"
import foto6 from "../../public/gnar.png"

interface RGB {
  r: number;
  g: number;
  b: number;
}

export const About: React.FC = () => {
  const text: string = "Frontend: More Than Code, a Digital Artistic Expression.";
  const letters: string[] = text.split("");
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
            onMouseEnter={handleHover} // 
            onMouseLeave={handleMouseLeave} 
          >
            {letter}
          </span>
        ))}
      </h2>

      <div className='aboutContent'>
        <div className='aboutMe'>
        <p>
            Welcome to my portfolio!
        </p>
        <p>
            My name is Flavio Nicolás Bernachia, and Im thrilled to welcome you to my digital space. Originally from the vibrant city of San Nicolás de los Arroyos, in the Buenos Aires Province, I now call the beautiful city of Rosario, Santa Fe, my home.
        </p>
        <p>
            Im a passionate full-stack developer with a special focus on the world of web development. Recently, I had the honor of successfully completing the Certified Tech Developer program, a renowned collaboration between Digital House, Mercado Libre, and Globant. Through this program, Ive earned diplomas that attest to my commitment to excellence, such as "Professional Developer" and "Frontend Specialist".
        </p>
        <p>
            In addition to my technical experience, Im also advancing in my studies of Law, reflecting my passion for lifelong learning and my desire to tackle diverse challenges.
        </p>
        <p>
            I consider myself a creative and solution-oriented individual, always on the lookout for opportunities to grow and learn. Im excited about the possibility of working on innovative projects and contributing to the success of your team.
            I invite you to explore my portfolio and discover more about my work and skills. I look forward to the opportunity to chat with you and discuss how I can be a valuable asset to your company!
        </p>
        <p>
            Thank you for visiting my site and considering my profile!
        </p>
        <p>
            Best regards,
            Flavio Nicolás Bernachia
          </p>
        </div>
        <div className='gallery'>
          <div className='smallImage'><Image className='gallery-image' width={230} height={230} src={foto3} alt="" ></Image></div>
        <div className='largeImage'><Image className='gallery-image'  width={230} height={320}src={foto4} alt="" ></Image></div>
          <div className='largeImage'><Image className='gallery-image' width={230} height={320} src={foto2} alt="" ></Image></div>
          <div className='smallImage'><Image className='gallery-image' width={230} height={230} src={foto5} alt="" ></Image></div>
          <div className='smallImage'><Image className='gallery-image' width={230} height={230} src={foto6} alt="" ></Image></div>
          <div className='largeImage'><Image className='gallery-image' width={230} height={320} src={foto1} alt="" ></Image></div>
          <div className='smallImage' id='gallery-image-ult'></div>
        </div>
      </div>
    </div>
  );
};