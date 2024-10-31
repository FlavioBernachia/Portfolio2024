import CustomCursor from "@/components/customCursor";
import "@/styles/globals.css";
import '@/styles/header.css'
import '@/styles/home.css'
import '@/styles/about.css'
import '@/styles/project.css'
import type { AppProps } from "next/app";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



export default function App({ Component, pageProps }: AppProps) {
  
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
      easing: 'ease-in-out', // Función de atenuación
      once: true, // Ejecuta la animación solo una vez al hacer scroll
    });
  }, []);
  return <>
  <Component {...pageProps} />;
  <CustomCursor />
  
  </> 
}
