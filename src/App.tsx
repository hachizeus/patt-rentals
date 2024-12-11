import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RentalGrid from './components/RentalGrid';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { vehicles, properties } from './data/rentals';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <div className="bg-gray-50">
        <RentalGrid
          items={vehicles}
          title="Available Vehicles"
          type="vehicle"
        />
        <RentalGrid
          items={properties}
          title="Featured Properties"
          type="property"
        />
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
}