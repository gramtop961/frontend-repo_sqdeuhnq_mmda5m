import { useState } from 'react';
import { Bot, User, Send } from 'lucide-react';

function Message({ role, text }) {
  const isUser = role === 'user';
  return (
    <div className={`flex items-start gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="mt-1 shrink-0 p-2 rounded-lg bg-indigo-500/20 text-indigo-300">
          <Bot size={16} />
        </div>
      )}
      <div className={`max-w-[80%] rounded-2xl px-4 py-2 shadow-sm ${isUser ? 'bg-white text-gray-900' : 'bg-white/10 text-white'} `}>
        {text}
      </div>
      {isUser && (
        <div className="mt-1 shrink-0 p-2 rounded-lg bg-white text-gray-900">
          <User size={16} />
        </div>
      )}
    </div>
  );
}

export default function ChatDemo() {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Привет! Я твой AI‑помощник. Задай вопрос или попроси идею для дизайна.' },
  ]);
  const [input, setInput] = useState('Придумай приветствие для лендинга про чат с ИИ');
  const [loading, setLoading] = useState(false);

  const onSend = async (e) => {
    e.preventDefault();
    const content = input.trim();
    if (!content) return;

    setMessages((m) => [...m, { role: 'user', text: content }]);
    setInput('');
    setLoading(true);

    // Mock assistant response to keep it frontend-only
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          role: 'assistant',
          text: 'Добро пожаловать в будущее общения! Создаём умные интерфейсы, которые думают вместе с вами.'
        },
      ]);
      setLoading(false);
    }, 700);
  };

  return (
    <section id="chat" className="relative py-20 bg-black">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(50%_50%_at_50%_0%,rgba(236,72,153,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Демо‑чат</h2>
          <p className="mt-2 text-white/70">Почувствуйте аккуратный UX: читаемая типографика, мягкие тени и логичная иерархия.</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 sm:p-6 shadow-2xl shadow-fuchsia-500/10">
          <div className="h-[360px] overflow-y-auto space-y-4 pr-1">
            {messages.map((m, i) => (
              <Message key={i} role={m.role} text={m.text} />
            ))}
            {loading && (
              <div className="text-white/70 text-sm">ИИ печатает…</div>
            )}
          </div>

          <form onSubmit={onSend} className="mt-4 flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Напишите сообщение…"
              className="flex-1 rounded-2xl bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/60"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white px-4 py-3 font-medium shadow-lg hover:shadow-xl transition"
            >
              <Send size={16} />
              Отправить
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
