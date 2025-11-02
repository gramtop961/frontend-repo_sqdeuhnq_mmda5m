import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center text-white">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/20 text-xs sm:text-sm">
          <Sparkles size={14} className="text-yellow-300" />
          Поколение интерфейсов с ИИ
        </span>
        <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight">
          Красивый и интерактивный чат с ИИ
        </h1>
        <p className="mt-4 text-white/80 max-w-2xl mx-auto">
          Современный, игривый и технологичный дизайн для портфолио и реальных продуктов. Трёхмерные объекты, плавные анимации и продуманная типографика.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#chat" className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition">
            Начать диалог
          </a>
          <a href="#features" className="inline-flex items-center justify-center rounded-full bg-white/10 text-white px-6 py-3 font-semibold ring-1 ring-white/20 hover:bg-white/15 transition">
            Узнать больше
          </a>
        </div>
      </div>
    </section>
  );
}
