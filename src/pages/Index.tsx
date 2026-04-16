/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

const PETER_IMG = "https://cdn.poehali.dev/projects/7e7e007a-186c-4162-81ea-72285b05b5b1/files/d5179cc4-7c51-419b-915a-1e9fbb6d4b9d.jpg";
const PALACE_IMG = "https://cdn.poehali.dev/projects/7e7e007a-186c-4162-81ea-72285b05b5b1/files/cf0ceb53-a0a1-4147-9eba-853a6bf5d372.jpg";
const DOCS_IMG = "https://cdn.poehali.dev/projects/7e7e007a-186c-4162-81ea-72285b05b5b1/files/01d085e1-c14e-461d-8d51-a029cf61bc37.jpg";

const slides = [
  {
    id: 0,
    type: "cover",
    label: "Введение",
    title: "Реформы Петра I",
    subtitle: "Преобразование Российской империи",
    date: "1682 — 1725",
    bg: "dark",
    image: PETER_IMG,
    body: null,
  },
  {
    id: 1,
    type: "bio",
    label: "Биография",
    title: "Пётр Алексеевич Романов",
    subtitle: "Первый Император Всероссийский",
    bg: "parchment",
    image: PETER_IMG,
    body: {
      facts: [
        { year: "1672", text: "Рождение в Москве, сын царя Алексея Михайловича" },
        { year: "1682", text: "Провозглашён царём в возрасте десяти лет" },
        { year: "1697", text: "Великое посольство в Западную Европу" },
        { year: "1703", text: "Основание Санкт-Петербурга — «окна в Европу»" },
        { year: "1721", text: "Принятие титула Императора Всероссийского" },
        { year: "1725", text: "Скончался, оставив преобразованную державу" },
      ],
    },
  },
  {
    id: 2,
    type: "reforms",
    label: "Реформы",
    title: "Государственное управление",
    subtitle: "Создание коллегий и новой системы власти",
    bg: "dark",
    image: PALACE_IMG,
    body: {
      blocks: [
        {
          icon: "Building2",
          title: "Сенат (1711)",
          text: "Высший орган государственной власти с законодательными, судебными и исполнительными полномочиями вместо Боярской думы",
        },
        {
          icon: "Layers",
          title: "Коллегии (1718–1721)",
          text: "Двенадцать коллегий заменили устаревшие приказы: Военная, Адмиралтейств-, Иностранных дел, Камер-коллегия и другие",
        },
        {
          icon: "Map",
          title: "Губернская реформа (1708)",
          text: "Россия разделена на 8 губерний во главе с губернаторами, назначаемыми царём — централизация власти на местах",
        },
        {
          icon: "ScrollText",
          title: "Табель о рангах (1722)",
          text: "14 ступеней чиновной лестницы — принцип выслуги заменил родовитость. Служба государю стала основой карьеры",
        },
      ],
    },
  },
  {
    id: 3,
    type: "culture",
    label: "Культура",
    title: "Культурные преобразования",
    subtitle: "Европеизация России",
    bg: "parchment",
    image: DOCS_IMG,
    body: {
      columns: [
        {
          icon: "BookOpen",
          title: "Просвещение",
          items: [
            "Школы математики и навигации",
            "Морская академия (1715)",
            "Первая публичная библиотека",
            "Газета «Ведомости» (1703)",
            "Гражданский шрифт вместо церковнославянского",
          ],
        },
        {
          icon: "Globe",
          title: "Быт и нравы",
          items: [
            "Запрет бород и старорусского платья",
            "Ассамблеи — светские собрания",
            "Новый год с 1 января",
            "Введение европейского этикета",
            "Развитие театра и изящных искусств",
          ],
        },
        {
          icon: "Anchor",
          title: "Армия и флот",
          items: [
            "Регулярная армия по европейскому образцу",
            "Создание Военно-морского флота",
            "Рекрутская повинность с 1705 г.",
            "Новые военные уставы и дисциплина",
            "Победа в Северной войне (1721)",
          ],
        },
      ],
    },
  },
  {
    id: 4,
    type: "significance",
    label: "Значение",
    title: "Значение реформ для России",
    subtitle: "Исторический перелом эпохи",
    bg: "dark",
    image: PALACE_IMG,
    body: {
      quotes: [
        {
          text: "Петровские реформы превратили Россию из средневекового государства в европейскую великую державу, способную соперничать с ведущими странами мира.",
          label: "Историческое значение",
        },
      ],
      items: [
        { icon: "TrendingUp", title: "Модернизация", text: "Экономика, армия и государственный аппарат вышли на качественно новый уровень" },
        { icon: "Globe2", title: "Международный авторитет", text: "Россия стала полноправным участником европейской политики и дипломатии" },
        { icon: "Users", title: "Сословные изменения", text: "Дворянство обрело новую роль, выслуга стала важнее происхождения" },
        { icon: "Landmark", title: "Основа империи", text: "Заложены институты, определившие развитие России на два столетия вперёд" },
      ],
    },
  },
  {
    id: 5,
    type: "conclusion",
    label: "Выводы",
    title: "Заключение",
    subtitle: "Наследие великого преобразователя",
    bg: "parchment",
    image: PETER_IMG,
    body: {
      conclusions: [
        "Пётр I осуществил коренной перелом в истории России, переведя страну от средневековых устоев к европейскому пути развития",
        "Создание системы коллегий и Сената заложило основы современного государственного управления",
        "Культурные и образовательные реформы открыли Россию для европейской науки и цивилизации",
        "Преобразования сопровождались огромным напряжением народных сил, но определили место России как великой державы",
        "Наследие Петра I остаётся предметом изучения и споров историков по сей день",
      ],
    },
  },
];

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [key, setKey] = useState(0);

  const goTo = useCallback(
    (index: number, dir: "next" | "prev" = "next") => {
      if (animating || index === current) return;
      setAnimating(true);
      setDirection(dir);
      setTimeout(() => {
        setCurrent(index);
        setKey((k) => k + 1);
        setAnimating(false);
      }, 350);
    },
    [animating, current]
  );

  const next = useCallback(() => {
    if (current < slides.length - 1) goTo(current + 1, "next");
  }, [current, goTo]);

  const prev = useCallback(() => {
    if (current > 0) goTo(current - 1, "prev");
  }, [current, goTo]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  const slide = slides[current];
  const isDark = slide.bg === "dark";

  return (
    <div
      className="fixed inset-0 overflow-hidden select-none"
      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
    >
      {/* Фон */}
      <div
        className="absolute inset-0 transition-all duration-700"
        style={
          isDark
            ? {
                background:
                  "radial-gradient(ellipse at 30% 40%, #1e1200 0%, #0d0800 50%, #050300 100%)",
              }
            : {
                background:
                  "radial-gradient(ellipse at 70% 30%, #f9edd5 0%, #f0d9a8 40%, #e4c57a 100%)",
              }
        }
      />

      {/* Шум-текстура */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
          backgroundSize: "200px",
          mixBlendMode: "overlay",
        }}
      />

      {/* Угловые орнаменты */}
      <OrnamentCorners dark={isDark} />

      {/* Верхняя полоса */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: isDark
            ? "linear-gradient(to right, transparent, #c8941a, #f0d060, #c8941a, transparent)"
            : "linear-gradient(to right, transparent, #8b5e10, #c8941a, #8b5e10, transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: isDark
            ? "linear-gradient(to right, transparent, #c8941a, #f0d060, #c8941a, transparent)"
            : "linear-gradient(to right, transparent, #8b5e10, #c8941a, #8b5e10, transparent)",
        }}
      />

      {/* Хлебная крошка — номер слайда */}
      <div
        className="absolute top-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2"
        style={{ opacity: 0.7 }}
      >
        <span
          style={{
            fontFamily: "'Cormorant SC', Georgia, serif",
            fontSize: "11px",
            letterSpacing: "0.25em",
            color: isDark ? "#c8941a" : "#6b4510",
            textTransform: "uppercase",
          }}
        >
          {slide.label}
        </span>
      </div>

      {/* Слайд-контент */}
      <div
        key={key}
        className="absolute inset-0 flex"
        style={{
          animation: `slideEnter 0.55s cubic-bezier(0.22,1,0.36,1) forwards`,
          animationDelay: "0s",
        }}
      >
        {slide.type === "cover" && <SlideCover slide={slide} isDark={isDark} />}
        {slide.type === "bio" && <SlideBio slide={slide} isDark={isDark} />}
        {slide.type === "reforms" && <SlideReforms slide={slide} isDark={isDark} />}
        {slide.type === "culture" && <SlideCulture slide={slide} isDark={isDark} />}
        {slide.type === "significance" && <SlideSignificance slide={slide} isDark={isDark} />}
        {slide.type === "conclusion" && <SlideConclusion slide={slide} isDark={isDark} />}
      </div>

      {/* Навигация — точки */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i, i > current ? "next" : "prev")}
            className="transition-all duration-300"
            style={{
              width: i === current ? 28 : 8,
              height: 8,
              borderRadius: 4,
              background:
                i === current
                  ? "#c8941a"
                  : isDark
                  ? "rgba(200,148,26,0.3)"
                  : "rgba(92,61,30,0.3)",
              border: "none",
              cursor: "pointer",
            }}
          />
        ))}
      </div>

      {/* Стрелки */}
      <button
        onClick={prev}
        disabled={current === 0}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center transition-all duration-200"
        style={{
          width: 44,
          height: 44,
          borderRadius: "50%",
          background: isDark ? "rgba(200,148,26,0.12)" : "rgba(92,61,30,0.1)",
          border: `1px solid ${isDark ? "rgba(200,148,26,0.4)" : "rgba(92,61,30,0.3)"}`,
          opacity: current === 0 ? 0.2 : 1,
          cursor: current === 0 ? "default" : "pointer",
          color: isDark ? "#c8941a" : "#5c3d1e",
        }}
      >
        <Icon name="ChevronLeft" size={20} />
      </button>
      <button
        onClick={next}
        disabled={current === slides.length - 1}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center transition-all duration-200"
        style={{
          width: 44,
          height: 44,
          borderRadius: "50%",
          background: isDark ? "rgba(200,148,26,0.12)" : "rgba(92,61,30,0.1)",
          border: `1px solid ${isDark ? "rgba(200,148,26,0.4)" : "rgba(92,61,30,0.3)"}`,
          opacity: current === slides.length - 1 ? 0.2 : 1,
          cursor: current === slides.length - 1 ? "default" : "pointer",
          color: isDark ? "#c8941a" : "#5c3d1e",
        }}
      >
        <Icon name="ChevronRight" size={20} />
      </button>

      <style>{`
        @keyframes slideEnter {
          from { opacity: 0; transform: translateY(24px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .anim-item { opacity: 0; animation: fadeUp 0.55s ease forwards; }
      `}</style>
    </div>
  );
}

/* ──────────────────────────────
   ORNAMENT CORNERS
────────────────────────────── */
function OrnamentCorners({ dark }: { dark: boolean }) {
  const c = dark ? "#c8941a" : "#8b5e10";
  const s: React.CSSProperties = { position: "absolute", width: 64, height: 64 };
  const svgCorner = (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <path d="M4 4 L4 28 M4 4 L28 4" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 4 L18 18" stroke={c} strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      <circle cx="4" cy="4" r="2.5" fill={c} />
      <circle cx="28" cy="4" r="1.5" fill={c} opacity="0.6" />
      <circle cx="4" cy="28" r="1.5" fill={c} opacity="0.6" />
    </svg>
  );

  return (
    <>
      <div style={{ ...s, top: 12, left: 12, zIndex: 10 }}>{svgCorner}</div>
      <div style={{ ...s, top: 12, right: 12, zIndex: 10, transform: "scaleX(-1)" }}>{svgCorner}</div>
      <div style={{ ...s, bottom: 12, left: 12, zIndex: 10, transform: "scaleY(-1)" }}>{svgCorner}</div>
      <div style={{ ...s, bottom: 12, right: 12, zIndex: 10, transform: "scale(-1,-1)" }}>{svgCorner}</div>
    </>
  );
}

/* ──────────────────────────────
   DIVIDER
────────────────────────────── */
function GoldDivider({ dark }: { dark: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "12px 0" }}>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, transparent, ${dark ? "#c8941a" : "#8b5e10"})` }} />
      <span style={{ color: dark ? "#c8941a" : "#8b5e10", fontSize: 14 }}>✦</span>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(to left, transparent, ${dark ? "#c8941a" : "#8b5e10"})` }} />
    </div>
  );
}

/* ──────────────────────────────
   SLIDE: COVER
────────────────────────────── */
function SlideCover({ slide, isDark }: { slide: any; isDark: boolean }) {
  return (
    <div className="flex w-full h-full">
      {/* Изображение — правая половина */}
      <div className="relative w-1/2 h-full overflow-hidden">
        <img
          src={slide.image}
          alt="Пётр I"
          className="w-full h-full object-cover"
          style={{ filter: "sepia(40%) contrast(1.1) brightness(0.75)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, #0d0800 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, #050300 0%, transparent 40%)" }}
        />
      </div>

      {/* Текст — левая половина */}
      <div
        className="absolute inset-0 flex flex-col items-start justify-center"
        style={{ paddingLeft: "8%", paddingRight: "50%" }}
      >
        {/* Вензель */}
        <div
          className="anim-item mb-6"
          style={{ animationDelay: "0.1s", color: "#c8941a", fontSize: 48, lineHeight: 1 }}
        >
          ✦
        </div>

        <p
          className="anim-item"
          style={{
            animationDelay: "0.2s",
            fontFamily: "'Cormorant SC', Georgia, serif",
            fontSize: "clamp(11px, 1.2vw, 14px)",
            letterSpacing: "0.3em",
            color: "#c8941a",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Историческая презентация
        </p>

        <h1
          className="anim-item"
          style={{
            animationDelay: "0.3s",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(36px, 5.5vw, 72px)",
            fontWeight: 300,
            lineHeight: 1.05,
            color: "#f9edd5",
            marginBottom: 8,
          }}
        >
          Реформы
          <br />
          <em style={{ fontStyle: "italic", color: "#e8b830" }}>Петра I</em>
        </h1>

        <GoldDivider dark={true} />

        <p
          className="anim-item"
          style={{
            animationDelay: "0.45s",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(14px, 1.8vw, 20px)",
            fontWeight: 300,
            color: "rgba(245,230,190,0.75)",
            marginBottom: 24,
            lineHeight: 1.5,
          }}
        >
          Преобразование Российской империи
        </p>

        <p
          className="anim-item"
          style={{
            animationDelay: "0.55s",
            fontFamily: "'Cormorant SC', Georgia, serif",
            fontSize: "clamp(12px, 1.3vw, 16px)",
            letterSpacing: "0.25em",
            color: "rgba(200,148,26,0.7)",
          }}
        >
          {slide.date}
        </p>
      </div>
    </div>
  );
}

/* ──────────────────────────────
   SLIDE: BIO
────────────────────────────── */
function SlideBio({ slide, isDark }: { slide: any; isDark: boolean }) {
  const ink = "#1a0f00";
  const gold = "#8b5e10";
  const goldLight = "#c8941a";

  return (
    <div className="flex w-full h-full">
      {/* Левая часть — портрет */}
      <div className="relative w-2/5 h-full overflow-hidden flex-shrink-0">
        <img
          src={slide.image}
          alt="Пётр I"
          className="w-full h-full object-cover object-top"
          style={{ filter: "sepia(30%) contrast(1.05)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, transparent 60%, #f0d9a8 100%)",
          }}
        />
        {/* Подпись под портретом */}
        <div
          className="absolute bottom-16 left-0 right-0 text-center"
          style={{
            fontFamily: "'Cormorant SC', Georgia, serif",
            fontSize: 11,
            letterSpacing: "0.2em",
            color: "rgba(245,230,190,0.9)",
            textShadow: "0 1px 4px rgba(0,0,0,0.8)",
          }}
        >
          ПЁТР I ВЕЛИКИЙ
        </div>
      </div>

      {/* Правая часть — хронология */}
      <div
        className="flex-1 flex flex-col justify-center overflow-hidden"
        style={{ padding: "5% 6% 5% 4%" }}
      >
        <p
          className="anim-item"
          style={{
            animationDelay: "0.1s",
            fontFamily: "'Cormorant SC', Georgia, serif",
            fontSize: "clamp(10px, 1vw, 12px)",
            letterSpacing: "0.3em",
            color: goldLight,
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          Биография
        </p>
        <h2
          className="anim-item"
          style={{
            animationDelay: "0.2s",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(22px, 3vw, 40px)",
            fontWeight: 300,
            color: ink,
            lineHeight: 1.1,
            marginBottom: 4,
          }}
        >
          {slide.title}
        </h2>
        <p
          className="anim-item"
          style={{
            animationDelay: "0.25s",
            fontSize: "clamp(12px, 1.3vw, 16px)",
            color: gold,
            marginBottom: 12,
            fontStyle: "italic",
          }}
        >
          {slide.subtitle}
        </p>
        <GoldDivider dark={false} />

        {/* Таймлайн */}
        <div className="flex flex-col gap-2 mt-2" style={{ overflow: "hidden" }}>
          {slide.body.facts.map((f: any, i: number) => (
            <div
              key={i}
              className="anim-item flex items-start gap-3"
              style={{ animationDelay: `${0.3 + i * 0.08}s` }}
            >
              <div
                style={{
                  minWidth: 52,
                  fontFamily: "'Cormorant SC', Georgia, serif",
                  fontSize: "clamp(11px, 1.1vw, 14px)",
                  fontWeight: 600,
                  color: goldLight,
                  letterSpacing: "0.05em",
                  paddingTop: 2,
                }}
              >
                {f.year}
              </div>
              <div
                style={{
                  width: 1,
                  alignSelf: "stretch",
                  background: `linear-gradient(to bottom, ${goldLight}, transparent)`,
                  minHeight: 20,
                  flexShrink: 0,
                  marginTop: 4,
                }}
              />
              <p
                style={{
                  fontSize: "clamp(11px, 1.15vw, 15px)",
                  color: "#3a2000",
                  lineHeight: 1.45,
                }}
              >
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────
   SLIDE: REFORMS
────────────────────────────── */
function SlideReforms({ slide, isDark }: { slide: any; isDark: boolean }) {
  return (
    <div className="flex flex-col w-full h-full" style={{ padding: "5% 7%" }}>
      {/* Заголовок */}
      <div className="anim-item" style={{ animationDelay: "0.1s", marginBottom: 8 }}>
        <p
          style={{
            fontFamily: "'Cormorant SC', Georgia, serif",
            fontSize: "clamp(10px, 1vw, 12px)",
            letterSpacing: "0.3em",
            color: "#c8941a",
            textTransform: "uppercase",
            marginBottom: 6,
          }}
        >
          Реформы государственного управления
        </p>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(24px, 3.5vw, 48px)",
            fontWeight: 300,
            color: "#f9edd5",
            lineHeight: 1.1,
          }}
        >
          {slide.title}
        </h2>
        <p style={{ fontSize: "clamp(12px,1.3vw,16px)", color: "rgba(240,208,128,0.75)", fontStyle: "italic" }}>
          {slide.subtitle}
        </p>
      </div>

      <div className="anim-item" style={{ animationDelay: "0.2s" }}>
        <GoldDivider dark={true} />
      </div>

      {/* Карточки реформ */}
      <div
        className="flex-1 grid gap-4 mt-2"
        style={{ gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr" }}
      >
        {slide.body.blocks.map((b: any, i: number) => (
          <div
            key={i}
            className="anim-item"
            style={{
              animationDelay: `${0.3 + i * 0.1}s`,
              background: "rgba(200,148,26,0.07)",
              border: "1px solid rgba(200,148,26,0.3)",
              borderRadius: 4,
              padding: "clamp(10px, 2vw, 20px)",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(200,148,26,0.15)",
                  borderRadius: "50%",
                  color: "#e8b830",
                  flexShrink: 0,
                }}
              >
                <Icon name={b.icon} size={16} fallback="Star" />
              </div>
              <h3
                style={{
                  fontFamily: "'Cormorant SC', Georgia, serif",
                  fontSize: "clamp(13px, 1.3vw, 17px)",
                  color: "#e8d090",
                  letterSpacing: "0.03em",
                }}
              >
                {b.title}
              </h3>
            </div>
            <p
              style={{
                fontSize: "clamp(11px, 1.1vw, 14px)",
                color: "rgba(245,230,190,0.75)",
                lineHeight: 1.55,
              }}
            >
              {b.text}
            </p>
          </div>
        ))}
      </div>

      {/* Изображение-полоса внизу */}
      <div
        className="anim-item"
        style={{
          animationDelay: "0.65s",
          marginTop: 12,
          height: "clamp(40px, 6vw, 64px)",
          borderRadius: 4,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src={slide.image}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 30%", filter: "sepia(40%) brightness(0.5)" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(13,8,0,0.9), rgba(13,8,0,0.3), rgba(13,8,0,0.9))",
          }}
        />
      </div>
    </div>
  );
}

/* ──────────────────────────────
   SLIDE: CULTURE
────────────────────────────── */
function SlideCulture({ slide, isDark }: { slide: any; isDark: boolean }) {
  const ink = "#1a0f00";
  const gold = "#8b5e10";
  const goldLight = "#c8941a";

  return (
    <div className="flex flex-col w-full h-full" style={{ padding: "5% 7%" }}>
      <div className="anim-item" style={{ animationDelay: "0.1s", marginBottom: 4 }}>
        <p
          style={{
            fontFamily: "'Cormorant SC', Georgia, serif",
            fontSize: "clamp(10px, 1vw, 12px)",
            letterSpacing: "0.3em",
            color: goldLight,
            textTransform: "uppercase",
            marginBottom: 4,
          }}
        >
          Культурные преобразования
        </p>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(24px, 3.5vw, 48px)",
            fontWeight: 300,
            color: ink,
            lineHeight: 1.1,
          }}
        >
          {slide.title}
        </h2>
        <p style={{ fontSize: "clamp(12px,1.2vw,15px)", color: gold, fontStyle: "italic" }}>
          {slide.subtitle}
        </p>
      </div>
      <GoldDivider dark={false} />

      <div
        className="flex-1 grid gap-4"
        style={{ gridTemplateColumns: "1fr 1fr 1fr", marginTop: 4 }}
      >
        {slide.body.columns.map((col: any, ci: number) => (
          <div
            key={ci}
            className="anim-item"
            style={{
              animationDelay: `${0.25 + ci * 0.12}s`,
              background: "rgba(92,61,30,0.06)",
              border: "1px solid rgba(139,94,16,0.25)",
              borderRadius: 4,
              padding: "clamp(10px,2vw,18px)",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  width: 30,
                  height: 30,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(139,94,16,0.15)",
                  borderRadius: "50%",
                  color: goldLight,
                  flexShrink: 0,
                }}
              >
                <Icon name={col.icon} size={15} fallback="Star" />
              </div>
              <h3
                style={{
                  fontFamily: "'Cormorant SC', Georgia, serif",
                  fontSize: "clamp(13px, 1.3vw, 17px)",
                  color: "#3a2000",
                  letterSpacing: "0.02em",
                }}
              >
                {col.title}
              </h3>
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 5 }}>
              {col.items.map((item: string, ii: number) => (
                <li
                  key={ii}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 6,
                    fontSize: "clamp(10px, 1.05vw, 13px)",
                    color: "#3a2000",
                    lineHeight: 1.45,
                  }}
                >
                  <span style={{ color: goldLight, flexShrink: 0, marginTop: 1, fontSize: 10 }}>✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Документы-полоса */}
      <div
        className="anim-item"
        style={{
          animationDelay: "0.6s",
          marginTop: 12,
          height: "clamp(36px, 5vw, 56px)",
          borderRadius: 4,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src={slide.image}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 60%", filter: "sepia(30%) brightness(0.8)" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(240,217,168,0.95), rgba(240,217,168,0.5), rgba(240,217,168,0.95))",
          }}
        />
      </div>
    </div>
  );
}

/* ──────────────────────────────
   SLIDE: SIGNIFICANCE
────────────────────────────── */
function SlideSignificance({ slide, isDark }: { slide: any; isDark: boolean }) {
  return (
    <div className="flex w-full h-full">
      {/* Фоновое изображение */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={slide.image}
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: "sepia(50%) brightness(0.35) contrast(1.1)", objectPosition: "50% 20%" }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(5,3,0,0.6)" }} />
      </div>

      <div
        className="relative z-10 flex flex-col w-full h-full"
        style={{ padding: "5% 7%" }}
      >
        <div className="anim-item" style={{ animationDelay: "0.1s", marginBottom: 8 }}>
          <p
            style={{
              fontFamily: "'Cormorant SC', Georgia, serif",
              fontSize: "clamp(10px, 1vw, 12px)",
              letterSpacing: "0.3em",
              color: "#c8941a",
              textTransform: "uppercase",
              marginBottom: 6,
            }}
          >
            Историческое значение
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(24px, 3.5vw, 48px)",
              fontWeight: 300,
              color: "#f9edd5",
              lineHeight: 1.1,
            }}
          >
            {slide.title}
          </h2>
          <p style={{ fontSize: "clamp(12px,1.3vw,16px)", color: "rgba(240,208,128,0.75)", fontStyle: "italic" }}>
            {slide.subtitle}
          </p>
        </div>

        <GoldDivider dark={true} />

        {/* Цитата */}
        <div
          className="anim-item"
          style={{
            animationDelay: "0.25s",
            borderLeft: "3px solid #c8941a",
            paddingLeft: 16,
            margin: "8px 0 16px",
          }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(13px, 1.4vw, 18px)",
              fontStyle: "italic",
              color: "rgba(245,230,190,0.85)",
              lineHeight: 1.55,
            }}
          >
            {slide.body.quotes[0].text}
          </p>
        </div>

        {/* Карточки значения */}
        <div className="grid gap-3 flex-1" style={{ gridTemplateColumns: "1fr 1fr" }}>
          {slide.body.items.map((item: any, i: number) => (
            <div
              key={i}
              className="anim-item"
              style={{
                animationDelay: `${0.35 + i * 0.1}s`,
                background: "rgba(200,148,26,0.08)",
                border: "1px solid rgba(200,148,26,0.25)",
                borderRadius: 4,
                padding: "clamp(10px,1.8vw,18px)",
                display: "flex",
                gap: 12,
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: 34,
                  height: 34,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(200,148,26,0.15)",
                  borderRadius: "50%",
                  color: "#e8b830",
                  flexShrink: 0,
                }}
              >
                <Icon name={item.icon} size={16} fallback="Star" />
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: "'Cormorant SC', Georgia, serif",
                    fontSize: "clamp(12px,1.2vw,15px)",
                    color: "#e8d090",
                    marginBottom: 4,
                  }}
                >
                  {item.title}
                </h4>
                <p style={{ fontSize: "clamp(10px,1vw,13px)", color: "rgba(245,230,190,0.7)", lineHeight: 1.5 }}>
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────
   SLIDE: CONCLUSION
────────────────────────────── */
function SlideConclusion({ slide, isDark }: { slide: any; isDark: boolean }) {
  const ink = "#1a0f00";
  const gold = "#8b5e10";
  const goldLight = "#c8941a";

  return (
    <div className="flex w-full h-full">
      {/* Изображение — левая полоса */}
      <div
        className="relative flex-shrink-0 overflow-hidden"
        style={{ width: "30%" }}
      >
        <img
          src={slide.image}
          alt="Пётр I"
          className="w-full h-full object-cover object-top"
          style={{ filter: "sepia(25%) contrast(1.05)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, transparent 50%, #f0d9a8 100%)" }}
        />
        {/* Цитата поверх */}
        <div
          className="absolute bottom-20 left-0 right-0 px-4 text-center"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(11px,1.1vw,14px)",
            fontStyle: "italic",
            color: "rgba(245,230,190,0.9)",
            textShadow: "0 2px 8px rgba(0,0,0,0.9)",
            lineHeight: 1.5,
          }}
        >
          «Я предчувствую, что россияне когда-нибудь, а может быть, при жизни нашей, устыдят самые просвещённые народы»
        </div>
      </div>

      {/* Правая часть */}
      <div
        className="flex-1 flex flex-col justify-center overflow-hidden"
        style={{ padding: "5% 6% 5% 4%" }}
      >
        <p
          className="anim-item"
          style={{
            animationDelay: "0.1s",
            fontFamily: "'Cormorant SC', Georgia, serif",
            fontSize: "clamp(10px, 1vw, 12px)",
            letterSpacing: "0.3em",
            color: goldLight,
            textTransform: "uppercase",
            marginBottom: 6,
          }}
        >
          Заключение и выводы
        </p>
        <h2
          className="anim-item"
          style={{
            animationDelay: "0.2s",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(22px, 3vw, 42px)",
            fontWeight: 300,
            color: ink,
            lineHeight: 1.1,
            marginBottom: 4,
          }}
        >
          {slide.title}
        </h2>
        <p
          className="anim-item"
          style={{ animationDelay: "0.25s", fontSize: "clamp(12px,1.2vw,15px)", color: gold, fontStyle: "italic", marginBottom: 8 }}
        >
          {slide.subtitle}
        </p>
        <GoldDivider dark={false} />

        <div className="flex flex-col gap-3 mt-2">
          {slide.body.conclusions.map((c: string, i: number) => (
            <div
              key={i}
              className="anim-item flex items-start gap-3"
              style={{ animationDelay: `${0.3 + i * 0.09}s` }}
            >
              <span
                style={{
                  color: goldLight,
                  fontSize: "clamp(14px,1.4vw,18px)",
                  flexShrink: 0,
                  lineHeight: 1.4,
                }}
              >
                {["I", "II", "III", "IV", "V"][i]}
              </span>
              <p
                style={{
                  fontSize: "clamp(11px, 1.1vw, 14px)",
                  color: "#3a2000",
                  lineHeight: 1.55,
                  borderBottom: i < slide.body.conclusions.length - 1 ? "1px solid rgba(139,94,16,0.15)" : "none",
                  paddingBottom: i < slide.body.conclusions.length - 1 ? 10 : 0,
                }}
              >
                {c}
              </p>
            </div>
          ))}
        </div>

        {/* Финальный орнамент */}
        <div
          className="anim-item"
          style={{
            animationDelay: "0.8s",
            marginTop: 16,
            textAlign: "center",
            color: goldLight,
            fontSize: 20,
            letterSpacing: "0.3em",
          }}
        >
          ✦ ✦ ✦
        </div>
      </div>
    </div>
  );
}