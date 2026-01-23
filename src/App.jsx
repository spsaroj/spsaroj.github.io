import Navbar from './components/Navbar';
import About from './pages/About';
import Works from './pages/Works';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-neutral-900 selection:bg-lime-500/30 overflow-x-hidden">
      {/* Background Artistic Elements - Green/Yellow/Blue Theme */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-lime-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-[600px] h-[600px] bg-yellow-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <Navbar />

      <main className="relative z-10 max-w-6xl mx-auto px-6">
        <section id="about" className="min-h-screen py-20 flex items-center justify-center">
          <About />
        </section>

        <section id="works" className="min-h-screen py-20">
          <Works />
        </section>

        <section id="services" className="min-h-screen py-20">
          <Skills />
        </section>

        <section id="contact" className="min-h-[50vh] py-20">
          <Contact />
        </section>
      </main>

      <footer className="relative z-10 py-8 text-center text-neutral-500 text-sm">
        <p>© {new Date().getFullYear()} Saroj Paudel</p>
      </footer>
    </div>
  );
}

export default App;