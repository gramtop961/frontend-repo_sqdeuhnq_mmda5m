import { Rocket, Shield, Sparkles, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Молниеносный старт',
    desc: 'Готовые шаблоны, мгновенная загрузка и продуманная структура компонентов.',
  },
  {
    icon: Shield,
    title: 'Надёжная архитектура',
    desc: 'Современный стек и чистое разделение ответственности между слоями.',
  },
  {
    icon: Sparkles,
    title: 'Анимации и 3D',
    desc: 'Интерактивные 3D-сцены и плавные переходы усиливают вовлечение.',
  },
  {
    icon: MessageSquare,
    title: 'Демо-чат',
    desc: 'Продуманный UX и визуальная иерархия для комфортного общения.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-black to-gray-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(65%_65%_at_50%_0%,rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Почему это нравится пользователям</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Мы объединяем эстетику и функциональность, чтобы каждый клик ощущался правильно.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.05] transition shadow-xl shadow-fuchsia-500/5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-rose-500 text-white shadow-md shadow-fuchsia-500/30">
                  <Icon size={18} />
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">{desc}</p>
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-r from-fuchsia-500/20 via-indigo-500/20 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
