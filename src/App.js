import { useEffect } from 'react';

import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Cursor from './components/Cursor/Cursor';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Marquee from './components/Marquee/Marquee';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';

import { useCursor } from './hooks/useCursor';
import { useTheme } from './hooks/useTheme';

function App() {
  useCursor();
  const { theme, toggleTheme } = useTheme();

  // Global reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Cursor />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
