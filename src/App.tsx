import { useEffect, useState } from 'react';
import { supabase } from '../src/server/supabaseClient'; // Import Supabase client
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RentalGrid from './components/RentalGrid';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { vehicles, properties } from './data/rentals';

export default function App() {
  const [user, setUser] = useState(null);
  const [showSignInModal, setShowSignInModal] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
      } else {
        setShowSignInModal(true); // Show sign-in modal if no session
      }
    };

    checkSession();

    // Handle session expiration after 24 hours
    const sessionTimeout = setTimeout(() => {
      supabase.auth.signOut();
      setUser(null);  // Clear user session after 24 hours
      setShowSignInModal(true); // Re-show sign-in modal after sign-out
    }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds

    return () => clearTimeout(sessionTimeout); // Clean up timeout on unmount
  }, []);

  // Google sign-in function
  const signInWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    if (data.user) {
      setUser(data.user);
      setShowSignInModal(false); // Close modal after successful sign-in
    } else if (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-white relative">
      {showSignInModal && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-start z-50">
          <div 
            className="bg-black text-white p-4 rounded-lg mt-16" // Black background, white text
            style={{ width: '7cm', height: '5cm' }} 
          >
            <h2 className="text-xl text-center mb-4">Sign In to Continue</h2>
            <button 
              onClick={signInWithGoogle} 
              className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Sign In with Google
            </button>
          </div>
        </div>
      )}

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
