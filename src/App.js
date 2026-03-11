import React, { useEffect } from 'react';

import Cursor   from './components/Cursor/Cursor';
import Navbar   from './components/Navbar/Navbar';
import Hero     from './components/Hero/Hero';
import Marquee  from './components/Marquee/Marquee';
import About    from './components/About/About';
import Education   from './components/Education/Education';
import Experience  from './components/Experience/Experience';
import Contact     from './components/Contact/Contact';
import Footer      from './components/Footer/Footer';

import { useCursor } from './hooks/useCursor';

function App() {
  // Activate cursor tracking after mount
  useCursor();

  // Global reveal observer for any .reveal not handled by component hooks
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
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Education />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
