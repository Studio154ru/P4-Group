import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contacts from './components/Contacts';
import RequestForm from './components/RequestForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-shell">
      <Header />

      <main className="main">
        <Hero />
        <Services />
        <Gallery />
        <Contacts />
        <RequestForm />
      </main>

      <Footer />

      <a
        href="https://vk.com/craft3d_tech"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-button"
      >
        Мы в Vk
      </a>
    </div>
  );
}