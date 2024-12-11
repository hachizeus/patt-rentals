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
            className="bg-white p-6 rounded-lg mt-16 shadow-lg"
            style={{ width: '7cm', height: '5cm' }}
          >
            <h2 className="text-xl text-center mb-4">Sign In to Continue</h2>

            <button 
              onClick={signInWithGoogle} 
              className="w-full py-2 flex justify-center items-center bg-blue-600 text-white rounded-lg"
            >
              {/* Google "G" icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="mr-3">
                <path fill="#fff" d="M12 2.7c2.5 0 4.6.8 6.2 2.2l4.6-4.6c-2.8-2.5-6.6-4-10.8-4-7.4 0-13.5 4.1-16.3 9.8l4.8 3.6c1.7-3.3 5.2-5.6 9.3-5.6zm0 3.6c-3.1 0-5.8 1.6-7.2 3.9l-5.1-3.9c2.3-3.5 6.2-5.9 10.2-5.9 2.7 0 5.3.8 7.6 2.3l-4.8 4c-1.4-.9-3.1-1.4-5-1.4zm-7.2 3.9c-1.7 0-3.1 1.4-3.1 3.1 0 1.7 1.4 3.1 3.1 3.1s3.1-1.4 3.1-3.1c0-1.7-1.4-3.1-3.1-3.1zm7.2 3.9c2.2 0 4.1.7 5.7 1.9l4.4-3.7c-2.5-2.1-5.7-3.3-9.1-3.3-7.4 0-13.5 4.1-16.3 9.8l4.8 3.6c1.7-3.3 5.2-5.6 9.3-5.6zm0 3.6c-1.9 0-3.6.6-5 1.6l-4.8-4.1c1.3-1.4 3.1-2.3 5-2.3z"/>
              </svg>
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
