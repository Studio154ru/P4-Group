import { useState } from 'react';
import ServiceSelect from './ServiceSelect';
import cardForm from '../media/systems/cards/Form_card.png';

export default function RequestForm() {
  const [form, setForm] = useState({
    name: '',
    contact: '',
    service: '',
    size: '',
    material: '',
    comment: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = [
    '3D-печать',
    '3D-моделирование',
    '3D-сканирование',
    'Сканирование + обработка + печать'
  ];

  const updateField = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.contact.trim()) {
      alert('Заполни имя и контакт');
      return;
    }

    if (!form.service) {
      alert('Выберите услугу');
      return;
    }

    setSubmitted(false);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: 'f15c4826-fdef-4294-bcf7-f1f48316cf21',
          subject: 'Новая заявка с Craft3D Tech',
          from_name: 'Craft3D Tech',
          name: form.name,
          contact: form.contact,
          service: form.service,
          size: form.size,
          material: form.material,
          comment: form.comment
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setForm({
          name: '',
          contact: '',
          service: '',
          size: '',
          material: '',
          comment: ''
        });
      } else {
        alert('Ошибка отправки заявки');
      }
    } catch (error) {
      alert('Ошибка соединения');
    }
  };

  return (
    <section id="request" className="section section--split">
      <div className="card card--large request-card">
        <div className="section__head">
          <span className="eyebrow"></span>
          <h2>Заявка на обратную связь</h2>
          <p>Оставьте заявку — мы свяжемся с вами, проконсультируем и рассчитаем стоимость.</p>
        </div>

        <div className="request-image-wrapper">
          <img src={cardForm} alt="3D печать" className="request-image-inline" />
        </div>
      </div>

      <form className="card card--large form" onSubmit={handleSubmit}>
        <label>
          Имя
          <input
            value={form.name}
            onChange={(e) => updateField('name', e.target.value)}
            placeholder="Ваше имя"
          />
        </label>

        <label>
          Телефон / Почта / Телеграмм / ВКонтакте / MAX
          <input
            value={form.contact}
            onChange={(e) => updateField('contact', e.target.value)}
            placeholder="Контакт для связи"
          />
        </label>

        <label>
          Услуга
          <ServiceSelect
            value={form.service}
            onChange={(value) => updateField('service', value)}
            options={serviceOptions}
          />
        </label>

        <label>
          Размеры / габариты
          <input
            value={form.size}
            onChange={(e) => updateField('size', e.target.value)}
            placeholder="Например: 120×80×30 мм"
          />
        </label>

        <label>
          Материал
          <input
            value={form.material}
            onChange={(e) => updateField('material', e.target.value)}
            placeholder="PLA, PETG, TPU или другое"
          />
        </label>

        <label>
          Комментарий
          <textarea
            value={form.comment}
            onChange={(e) => updateField('comment', e.target.value)}
            placeholder="Опиши задачу, сроки и пожелания"
            rows="5"
          />
        </label>

        <button type="submit" className="button">Отправить заявку</button>

        {submitted && (
          <div className="success">
            Заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.
          </div>
        )}
      </form>
    </section>
  );
}