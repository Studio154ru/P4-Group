import { useEffect, useRef, useState } from 'react';
import { materialsData } from '../data/materials';
import heroPoster from '../media/systems/cards/Hero_poster.png';

export default function Hero() {
  const cardsRef = useRef(null);
  const [activeMaterial, setActiveMaterial] = useState(null);

  useEffect(() => {
    const container = cardsRef.current;
    if (!container) return;

    let rafId = null;
    let activeIndex = -1;

    const updateActiveCard = () => {
      const cards = Array.from(container.querySelectorAll('.material-card'));

      if (window.innerWidth > 768) {
        cards.forEach((card) => card.classList.remove('is-active'));
        activeIndex = -1;
        return;
      }

      const containerCenter = container.scrollLeft + container.clientWidth / 2;

      let closestIndex = -1;
      let minDistance = Infinity;

      cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(containerCenter - cardCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      if (closestIndex === activeIndex) return;

      cards.forEach((card) => card.classList.remove('is-active'));

      if (cards[closestIndex]) {
        cards[closestIndex].classList.add('is-active');
        activeIndex = closestIndex;
      }
    };

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateActiveCard);
    };

    updateActiveCard();

    container.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateActiveCard);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      container.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateActiveCard);
    };
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero__visual" aria-hidden="true">
        <img src={heroPoster} alt="" />
        <div className="hero__visual-scan"></div>
      </div>

      <div className="hero__content">
        <span className="pill"></span>

        <h1>3D-печать деталей на заказ — быстро, точно и под вашу задачу</h1>

        <p>
          Печатаем детали, крепления, корпуса, переходники, прототипы и нестандартные изделия.
          Работаем с моделированием, 3D-сканированием и полным циклом: от идеи или образца до готовой детали.
        </p>

        <div className="hero__actions">
          <button
            className="button"
            onClick={() => document.getElementById('request')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Оставить заявку
          </button>

          <button
            className="button button--ghost"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Посмотреть услуги
          </button>
        </div>

        <div className="stats">
          <div className="stat">
            <strong>от 1 дня</strong>
            <span>срок изготовления</span>
          </div>
          <div className="stat">
            <strong>PLA / PETG / TPU</strong>
            <span>подбор материала под задачу</span>
          </div>
          <div className="stat">
            <strong>Bambu Lab P2S</strong>
            <span>аккуратная и точная печать</span>
          </div>
        </div>

        <div className="materials" ref={cardsRef}>
          {materialsData.map((item) => (
            <div
              key={item.id}
              className={`material-card ${activeMaterial === item.id ? 'is-open' : ''}`}
              onClick={() => {
                if (window.innerWidth <= 768) {
                  setActiveMaterial(activeMaterial === item.id ? null : item.id);
                }
              }}
            >
              <img src={item.img} alt={item.title} />
              <div className="material-title">{item.title}</div>

              <div className="material-overlay">
                <div className="material-text">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}