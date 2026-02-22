import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import BrandingShowcase from '@/components/BrandingShowcase';
import About from '@/components/About';
import BookingForm from '@/components/BookingForm';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import TelegramButton from '@/components/TelegramButton';
import BrandingGallery from '@/components/BrandingGallery';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <BrandingShowcase />
      <About />
      <BookingForm />
      <BrandingGallery />
      <Contacts />
      <Footer />
      <TelegramButton />
    </main>
  );
}
