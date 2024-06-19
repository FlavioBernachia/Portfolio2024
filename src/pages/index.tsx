import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Header } from "@/components/header";
import  { HomePage }  from '@/components/home'
import { About } from "@/components/about";
import { Projects } from "@/components/projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Header/>
    <HomePage />
    <About/>
    <Projects title={""} description={""} imageUrl={undefined} projectUrl={""}/>
    </>
  );
}
