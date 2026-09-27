import { useMemo, useState } from 'react';
import { galleryItems } from '../data/gallery';

export default function Gallery() {
  const [filter, setFilter] = useState('Все');

  const filters = [
    'Все',
    'Печать',
    'Моделирование',
    'Сканирование'
  ];

  const items = useMemo(() => {
    if (filter === 'Все') {
      return galleryItems;
    }

    return galleryItems.filter(
      (item) => item.category === filter
    );
  }, [filter]);

  return (
    <section id="gallery" className="section">
      <div className="section__head row">
        <div>
          <span className="eyebrow"></span>
          <h2>Выполненные работы</h2>
        </div>

        <div className="filters">
          {filters.map((value) => (
            <button
              key={value}
              type="button"
              className={
                filter === value
                  ? 'filter filter--active'
                  : 'filter'
              }
              onClick={() => setFilter(value)}
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      <div className="gallery-grid">
        {items.map((item) => (
          <article key={item.title} className="gallery-card">
            <div className="gallery-card__image">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
              />
            </div>

            <div className="gallery-card__body">
              <h3>{item.title}</h3>
              <p>{item.text}</p>

              {item.material && (
                <div className="gallery-card__material">
                  <span className="material-tag">
                    {item.material}
                  </span>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}