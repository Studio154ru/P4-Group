import { useEffect, useRef, useState } from 'react';
import { materialsData } from '../data/materials';

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

  useEffect(() => {
    if (!activeMaterial) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActiveMaterial(null);
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeMaterial]);

  return (
    <section id="home" className="hero">
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
            <button
              key={item.id}
              type="button"
              className="material-card material-card--button"
              onClick={() => setActiveMaterial(item.id)}
              aria-label={`Подробнее о материале ${item.title}`}
            >
              <img src={item.img} alt={item.title} />
              <div className="material-title">{item.title}</div>
              <div className="material-card__more">Подробнее</div>
            </button>
          ))}
        </div>

        {activeMaterial && (() => {
          const item = materialsData.find((material) => material.id === activeMaterial);
          if (!item) return null;

          return (
            <div
              className="material-modal"
              role="presentation"
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) setActiveMaterial(null);
              }}
            >
              <div
                className="material-modal__dialog"
                role="dialog"
                aria-modal="true"
                aria-labelledby={`material-title-${item.id}`}
              >
                <button
                  type="button"
                  className="material-modal__close"
                  onClick={() => setActiveMaterial(null)}
                  aria-label="Закрыть описание"
                >
                  ×
                </button>

                <div className="material-modal__image">
                  <img src={item.img} alt={item.title} />
                </div>

                <div className="material-modal__content">
                  <span className="material-modal__eyebrow">МАТЕРИАЛ</span>
                  <h3 id={`material-title-${item.id}`}>{item.title}</h3>
                  <div className="material-modal__line" />
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
}