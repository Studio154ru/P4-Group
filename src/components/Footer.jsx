import title from '../media/systems/logos/Title.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>Ваш проект — наша реализация</strong>
        <p>
          Следите за новыми проектами на нашем сайте или в нашем сообществе ВКонтакте.
        </p>

        <img src={title} alt="P4_V_3L" className="footer-logo" />
      </div>

      <div>
        <strong>Связаться с нами</strong>
        <p className="footer-right">
          <span>📧 <a href="mailto:info@craft3d-tech.ru"> </a></span>
          <span>🔗 <a href="https://vk.ru/p4_group" target="_blank" rel="noopener noreferrer">vk.ru/p4_group</a></span>
          <span>📍 Новосибирск</span>
          <span>🕒 Ежедневно, 10:00–19:00</span>
          <span>Все права защищены © 2026 P4</span>
        </p>
      </div>
    </footer>
  );
}