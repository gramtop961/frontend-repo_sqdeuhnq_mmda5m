import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ChatDemo from './components/ChatDemo';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ChatDemo />
      </main>
      <footer className="border-t border-white/10 bg-black/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 text-center text-white/60">
          © {new Date().getFullYear()} Flames AI — профессиональные интерфейсы с ИИ
        </div>
      </footer>
    </div>
  );
}

export default App;
