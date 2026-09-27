import cardContact from '../media/systems/cards/Contact_card.png';
import vkIcon from '../media/systems/icons/Vk.png';
import igIcon from '../media/systems/icons/Ig.png';
import tgIcon from '../media/systems/icons/Tg.png';
import maxIcon from '../media/systems/icons/Max_mem.png';
import ytIcon from '../media/systems/icons/Yt.png';

export default function Contacts() {
  return (
    <section id="contacts" className="section section--split">
      <div className="card card--large request-card">
        <div className="section__head">
          <span className="eyebrow"></span>
          <h2>Мы в социальных сетях</h2>
          <p>Напишите нам в удобный мессенджер — ответим, поможем с выбором и рассчитаем стоимость.</p>
        </div>

        <div className="contact-block">
          <div className="contact-messengers">
            <a
              href="https://vk.ru/p4_group"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card vk"
            >
              <div className="contact-left">
                <span className="icon" aria-hidden="true">
                  <img src={vkIcon} alt="VK" className="icon-img" />
                </span>
                <span>VK</span>
              </div>
            </a>

            <a
              href="https://instagram.com/p4_group_"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card ig"
            >
              <div className="contact-left">
                <span className="icon" aria-hidden="true">
                  <img src={igIcon} alt="Instagram" className="icon-img" />
                </span>
                <span>Instagram</span>
              </div>
            </a>

            <a
              href="https://t.me/P4_Group"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card tg"
            >
              <div className="contact-left">
                <span className="icon" aria-hidden="true">
                  <img src={tgIcon} alt="Telegram" className="icon-img" />
                </span>
                <span>Telegram</span>
              </div>
            </a>

            <a
              href="https://max.ru/join/Hs04zZLY7dKsDWzv9jVKCVBKojrgJb_RWdoHTWJ1ZAU"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card max"
            >
              <div className="contact-left">
                <span className="icon" aria-hidden="true">
                  <img src={maxIcon} alt="MAX" className="icon-img" />
                </span>
                <span>MAX</span>
              </div>
            </a>

            <a
              href="https://www.youtube.com/@P4_Group"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card yt"
            >
              <div className="contact-left">
                <span className="icon" aria-hidden="true">
                  <img src={ytIcon} alt="YouTube" className="icon-img" />
                </span>
                <span>YouTube</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="card card--large contact-image-card">
        <img src={cardContact} alt="Craft3D Tech" className="card-image" />
      </div>
    </section>
  );
}