import Image from 'next/image';
import React, { useState } from 'react';
import Modal from 'react-modal';
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

  // Función para abrir el modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageSrc: string): void => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = (): void => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };


  return (
    <div className='aboutGeneral'> <div className='aboutDirection' id='AboutTittle'></div> <h2 className='aboutTittle' data-aos="fade-up">About me.</h2>
    <div>
      <h2 className='aboutTitle' data-aos="fade-up">
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

      <div className='aboutContent' data-aos="fade-up">
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
<div className='certifications' data-aos="fade-up">
            <Image
              src={certified1}
              width={500}
              height={500}
              alt='certification'
              className='c1'
              onClick={() => openModal("/profesional developer (2).jpg")} // Abre el modal con `certified1`
            />
            <Image
              src={certified2}
              width={500}
              height={500}
              alt='certification'
              className='c2'
              onClick={() => openModal("/specialist frontend.jpg")} // Abre el modal con `certified2`
            />
          </div>
    </div>

  </div>
        <div className='gallery' data-aos="fade-up">
          <div className='smallImage' ><Image className='gallery-image' width={230} height={230} src={foto3} alt="" ></Image></div>
        <div className='largeImage' ><Image className='gallery-image'  width={230} height={320}src={foto4} alt="" ></Image></div>
          <div className='largeImage' ><Image className='gallery-image' width={230} height={320} src={foto2} alt="" ></Image></div>
          <div className='smallImage' ><Image className='gallery-image' width={230} height={230} src={foto5} alt="" ></Image></div>
          <div className='smallImage' ><Image className='gallery-image' width={230} height={230} src={foto6} alt="" ></Image></div>
          <div className='largeImage'><Image className='gallery-image' width={230} height={320} src={foto1} alt="" ></Image></div>
          <div className='smallImage' id='gallery-image-ult' ></div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        overlayClassName="modal"
        style={{
          overlay: { backgroundColor: "rgba(0, 0, 0, 0.8)" },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            maxWidth: "50%",
            maxHeight: "70%",
            padding: "0",
          },
        }}
        className="modal-content"
      >
        {selectedImage && (
          <Image
            src={selectedImage}
            alt="Expanded certification"
            width={500}
            height={400}
            onClick={closeModal}
          />
        )}
      </Modal>

    </div>
    </div>
  );
};