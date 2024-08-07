"use client"

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-out-cubic', 
    });
  }, []);

  return (
    <div>
      <Header />
      <MainSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
