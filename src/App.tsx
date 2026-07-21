import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueStrip from './components/ValueStrip';
import Process from './components/Process';
import About from './components/About';
import Services from './components/Services';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ValueStrip />
        <Process />
        <About />
        <Services />
        <ContactSection />
      </main>
      <Footer />
      <ToastContainer rtl position="top-center" />
    </div>
  );
}
