import React from 'react';

function TravelEnglishLanding() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex justify-center px-4 py-8">
      <div className="w-full max-w-6xl">
        {/* Main card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-950/95 to-slate-950 shadow-[0_0_40px_rgba(8,47,73,0.9)] border border-cyan-500/30">
          {/* Glow elements */}
          <div className="pointer-events-none absolute -top-32 -left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -right-10 h-72 w-72 rounded-full bg-orange-400/25 blur-3xl" />

          {/* Content wrapper */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-12 flex flex-col gap-10">
            {/* Hero section */}
            <section className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center">
              <div className="flex-1 space-y-4 sm:space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-slate-900/70 px-3 py-1 text-xs sm:text-sm text-cyan-100 shadow-[0_0_15px_rgba(34,211,238,0.6)]">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Онлайн-курс для детей от опытного репетитора английского</span>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-cyan-300/80">
                    Курс «Английский для путешествий»
                  </p>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight text-slate-50">
                    Как говорить по-английски в поездках
                    <span className="block text-cyan-300/90">
                      уверенно, спокойно и без страха
                    </span>
                  </h1>
                  <p className="max-w-xl text-sm sm:text-base text-slate-200/80">
                    Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана? 
                    Этот курс научит вашего ребёнка реальному разговорному английскому, который пригодится 
                    в отпуске, поездках и будущих путешествиях!
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200/80">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/15 text-lg">
                      ✈️
                    </span>
                    <span>Атмосфера реальных путешествий на каждом уроке</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200/80">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/15 text-lg">
                      🎧
                    </span>
                    <span>Онлайн-формат в Zoom в комфортной обстановке дома</span>
                  </div>
                </div>
              </div>

              {/* Side panel with levels */}
              <div className="w-full max-w-sm lg:w-80">
                <div className="rounded-2xl bg-slate-900/80 border border-cyan-500/30 shadow-[0_0_25px_rgba(8,47,73,0.7)] p-4 sm:p-5 flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/80">Уровень</p>
                      <p className="text-sm sm:text-base font-semibold text-slate-50">A2–B1 (Pre-Intermediate)</p>
                    </div>
                    <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-sky-500 to-emerald-400 shadow-[0_0_20px_rgba(34,211,238,0.9)]">
                      <span className="text-xl">🌍</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                    <div className="rounded-xl bg-slate-900/80 border border-slate-700/80 px-3 py-2 flex flex-col gap-1">
                      <p className="text-[11px] uppercase tracking-wide text-slate-400">Первая группа</p>
                      <p className="font-semibold text-slate-50">4–5 класс</p>
                    </div>
                    <div className="rounded-xl bg-slate-900/80 border border-slate-700/80 px-3 py-2 flex flex-col gap-1">
                      <p className="text-[11px] uppercase tracking-wide text-slate-400">Вторая группа</p>
                      <p className="font-semibold text-slate-50">6–8 класс</p>
                    </div>
                  </div>

                  <div className="rounded-xl bg-gradient-to-r from-cyan-500/20 via-cyan-400/25 to-orange-400/30 border border-cyan-300/40 px-3 py-3 text-xs sm:text-sm text-slate-50/90">
                    <p className="font-medium mb-1">Набор уже открыт ✨</p>
                    <p>Маленькие группы до 6 человек — максимум практики для каждого ребёнка.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Program & features grid */}
            <section className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)]">
              {/* Program */}
              <div className="space-y-4">
                <h2 className="text-lg sm:text-xl font-semibold text-slate-50 flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 text-base">
                    🧳
                  </span>
                  Программа курса
                </h2>
                <div className="grid gap-3 sm:gap-4">
                  {[
                    {
                      title: '1. Аэропорт без стресса',
                      text:
                        'Регистрация, паспортный контроль, вопросы на таможне — всё на английском. Уверенность уже в первые часы за границей.',
                    },
                    {
                      title: '2. В отеле: заселение и помощь',
                      text:
                        'Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi. Практика вежливых фраз и повседневной лексики.',
                    },
                    {
                      title: '3. Кафе и рестораны',
                      text:
                        'Заказ еды, вопросы про аллергены, счёт и чаевые. Развитие гастрономического словаря и уверенности в общении.',
                    },
                    {
                      title: '4. На улице: ориентирование и просьбы',
                      text:
                        'Как спросить дорогу, вызвать такси или найти аптеку. Понимание устной речи и произношения в реальных ситуациях.',
                    },
                    {
                      title: '5. Экстренные случаи',
                      text:
                        'Потеря вещей, болезнь, помощь полиции — всё это на английском. Важные фразы, которые могут спасти отпуск.',
                    },
                    {
                      title: '6–8. Туризм и развлечения',
                      text:
                        'Покупка билетов, экскурсии, общение с гидами, музеи и парки. Погружение в культурный контекст через язык.',
                    },
                    {
                      title: '9. Дружба в путешествиях',
                      text:
                        'Как познакомиться с другими детьми или подростками за границей. Игровая практика диалогов и неформального общения.',
                    },
                    {
                      title: "10. Дипломный проект: 'Мой идеальный отпуск'",
                      text:
                        'Ребёнок планирует воображаемое путешествие и представляет его на английском. Развитие связной речи и творческого самовыражения.',
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl bg-slate-900/80 border border-slate-700/80 px-4 py-3 sm:px-5 sm:py-4 shadow-[0_18px_40px_rgba(15,23,42,0.8)] hover:border-cyan-400/70 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all duration-300"
                    >
                      <h3 className="text-sm sm:text-base font-semibold text-slate-50 mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-200/80">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why special + requirements */}
              <div className="space-y-6">
                <div className="rounded-2xl bg-slate-900/80 border border-cyan-500/40 p-4 sm:p-5 shadow-[0_0_30px_rgba(34,211,238,0.5)]">
                  <h2 className="text-lg sm:text-xl font-semibold text-slate-50 flex items-center gap-2 mb-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/25 text-base">
                      ✨
                    </span>
                    Почему этот курс особенный?
                  </h2>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200/85 list-disc pl-4">
                    <li>Акцент на практическую, живую речь, а не на грамматику ради грамматики.</li>
                    <li>Все ситуации — из реальной жизни путешественника.</li>
                    <li>Интерактивные задания: ролевые игры, аудиоситуации, мини-квесты.</li>
                    <li>
                      Ребёнок выходит на уровень{' '}
                      <span className="font-semibold text-cyan-300">A2–B1 (Pre-Intermediate)</span> за курс.
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-slate-900/80 border border-slate-700/80 p-4 sm:p-5 flex flex-col gap-4">
                  <div>
                    <h2 className="text-base sm:text-lg font-semibold text-slate-50 flex items-center gap-2 mb-2">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/25 text-base">
                        💻
                      </span>
                      Что потребуется
                    </h2>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-200/85 list-disc pl-4">
                      <li>Стационарный компьютер или ноутбук с наушниками и микрофоном</li>
                      <li>Стабильный интернет и Zoom</li>
                    </ul>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl bg-gradient-to-br from-sky-500/25 via-cyan-500/25 to-emerald-400/25 border border-cyan-300/50 px-4 py-3 text-xs sm:text-sm text-slate-50">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-cyan-100/80 mb-1">Расписание</p>
                      <p className="font-medium">Четверг, 15:00 (МСК)</p>
                      <p className="text-slate-100/80">группа 4–5 класс</p>
                      <div className="mt-1 h-px w-10 bg-cyan-200/70" />
                      <p className="font-medium mt-1">Пятница, 15:30 (МСК)</p>
                      <p className="text-slate-100/80">группа 6–8 класс</p>
                    </div>
                    <div className="rounded-xl bg-slate-900/90 border border-orange-400/60 px-4 py-3 text-xs sm:text-sm text-slate-50">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-orange-200/90 mb-1">Стоимость</p>
                      <p className="font-medium">
                        Полный курс (10 уроков): <span className="font-semibold">12 000 руб</span>
                      </p>
                      <p className="mt-1">
                        Абонемент: <span className="font-semibold">1 300 руб / урок</span>
                      </p>
                      <p className="mt-2 text-[11px] text-orange-100/90">
                        Оплата по абонементу или за весь курс сразу — как вам удобнее.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Bottom CTA section */}
            <section className="mt-2 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/95 to-slate-950 border border-cyan-500/30 px-4 sm:px-6 py-4 sm:py-5 flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-5 justify-between">
              <div className="space-y-2 max-w-2xl">
                <h2 className="text-base sm:text-lg font-semibold text-slate-50 flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/25 text-base">
                    📢
                  </span>
                  Набор открыт!
                </h2>
                <p className="text-xs sm:text-sm text-slate-200/85">
                  Группы маленькие — максимум 6 детей, чтобы каждый получил внимание. Места ограничены! 
                  Запишитесь сейчас — и следующее путешествие станет первым, где ваш ребёнок заговорит по-английски без страха.
                </p>
              </div>

              {/* Main CTA button at the very bottom of the page */}
              <div className="w-full md:w-auto flex md:justify-end">
                <button
                  className="group relative inline-flex w-full md:w-auto items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-orange-400 px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.9)] transition-transform duration-300 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-emerald-300/0 via-white/20 to-amber-200/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative flex items-center gap-2">
                    <span>Записаться на курс</span>
                    <span className="text-lg translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </span>
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return <TravelEnglishLanding />;
}
