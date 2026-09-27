import { services } from '../data/services';

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="section__head">
        <span className="eyebrow"></span>
        <h2>Наши услуги</h2>
      </div>

      <div className="cards">
        {services.map((service) => (
          <article key={service.id} className="card">
            <div className="card__price">{service.price}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul>
              {service.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}