import { useEffect, useState } from 'react';
import logo from '../media/systems/logos/Logo.png';

export default function Header() {
  const [active, setActive] = useState('home');

  const nav = [
    ['home', 'Главная'],
    ['services', 'Услуги'],
    ['gallery', 'Наши работы'],
    ['contacts', 'Мы в соцсетях'],
    ['request', 'Обратная связь']
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      let current = 'home';

      nav.forEach(([id]) => {
        const el = document.getElementById(id);
        if (!el) return;

        if (el.offsetTop <= scrollPosition) {
          current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToSection = (id) => {
    if (id === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    const element = document.getElementById(id);
    if (!element) return;

    const headerOffset = 110;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <header className="header">
      <div className="header__inner">
        <div className="brand" onClick={() => goToSection('home')}>
          <div className="brand__logo">
            <img src={logo} alt="P4_V_3L" />
          </div>
          <div>
            <div className="brand__title">P4_V_3L</div>
            <div className="brand__subtitle">3D-печать • Моделирование • Сканирование</div>
          </div>
        </div>

        <nav className="nav">
          {nav.map(([id, label]) => (
            <button
              key={id}
              className={active === id ? 'nav__button nav__button--active' : 'nav__button'}
              onClick={() => goToSection(id)}
            >
              <span>{label}</span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}