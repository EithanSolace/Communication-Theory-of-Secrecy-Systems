import React, { useEffect, useState } from 'react';
import { SLIDES } from './constants';
import SlideRenderer from './components/SlideRenderer';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Intersection Observer to update active section in sidebar
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(Number(entry.target.id.replace('section-', '')));
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of section is visible
    );

    SLIDES.forEach((slide) => {
      const el = document.getElementById(`section-${slide.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: number) => {
    const el = document.getElementById(`section-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-gray-900 font-serif selection:bg-[#d9232e] selection:text-white">
      
      {/* Navigation / Sidebar */}
      <nav className={`fixed top-0 right-0 h-full w-72 bg-white border-l border-gray-200 z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 shadow-lg md:shadow-none`}>
        <div className="p-8 h-full overflow-y-auto">
          <div className="mb-8 hidden md:block">
            <h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Contents</h5>
            <div className="h-0.5 w-8 bg-[#d9232e]"></div>
          </div>
          <ul className="space-y-4">
            {SLIDES.map((slide) => (
              <li key={slide.id}>
                <button
                  onClick={() => scrollToSection(slide.id)}
                  className={`text-left text-sm leading-relaxed transition-colors duration-200 ${
                    activeSection === slide.id 
                      ? 'text-[#d9232e] font-bold border-l-2 border-[#d9232e] pl-3' 
                      : 'text-gray-500 hover:text-gray-900 pl-3 border-l-2 border-transparent'
                  }`}
                >
                  {slide.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Mobile Close Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="md:hidden absolute top-4 right-4 p-2 text-gray-500"
        >
          <X size={24} />
        </button>
      </nav>

      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setIsMobileMenuOpen(true)}
        className="fixed bottom-6 right-6 md:hidden z-50 bg-[#d9232e] text-white p-3 rounded-full shadow-lg"
      >
        <Menu size={24} />
      </button>

      {/* Main Content */}
      <main className="md:mr-72 transition-all duration-300">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
          
          {SLIDES.map((slide) => (
            <section 
              key={slide.id} 
              id={`section-${slide.id}`}
              className={`mb-24 scroll-mt-20 ${slide.id === 1 ? 'min-h-[80vh] flex flex-col justify-center' : ''}`}
            >
              <SlideRenderer slide={slide} />
              
              {/* Divider between sections */}
              {slide.id !== SLIDES.length && (
                <div className="w-full flex justify-center mt-20 opacity-20">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mx-1"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 mx-1"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 mx-1"></div>
                </div>
              )}
            </section>
          ))}

          {/* Footer */}
          <footer className="mt-32 pt-12 border-t border-gray-200 text-center text-gray-500 text-sm">
            <p>Based on <em>Communication Theory of Secrecy Systems</em> by Claude Shannon (1949).</p>
            <p className="mt-2">Bell System Technical Journal, Vol. 28, pp. 656–715.</p>
          </footer>

        </div>
      </main>
    </div>
  );
};

export default App;