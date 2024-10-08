import Image from 'next/image';
import React, { useState } from 'react';
import foto1 from "../../public/sombrero.jpg"
import foto2 from "../../public/calvo.jpg"
import foto3 from "../../public/perfil.jpg"
import foto4 from "../../public/fotoconro.jpg"
import foto5 from "../../public/Minimalist Coffee Break Instagram Story (230 x 230 px).png"
import foto6 from "../../public/gnar.png"
import certified1 from "../../public/profesional developer (2).jpg"
import certified2 from "../../public/specialist frontend.jpg"

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
        <p>Welcome to my portfolio!</p>
    <p>
      I&apos;m a passionate full-stack developer with a strong focus on web development. Recently, I completed the Certified Tech Developer program, a prestigious collaboration between Digital House, Mercado Libre, and Globant. Through this program, I&apos;ve earned certifications such as &quot;Professional Developer&quot; and &quot;Frontend Specialist,&quot; showcasing my dedication to excellence.
    </p>
    <p>
      My expertise lies in creating innovative solutions and collaborating effectively within multidisciplinary teams. With a commitment to staying updated with the latest technologies, I&apos;m excited about the opportunity to leverage my skills to contribute to the success of your company.
    </p>
    <div className='title-certification'><h2>Certifications</h2></div>
    <div className='certifications'>
 <Image src={certified1} width={1000} height={250} alt='certification' className='c1'></Image>
 <Image src={certified2} width={1000} height={250} alt='certification' className='c2'></Image>
    </div>

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