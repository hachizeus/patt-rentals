import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RentalGrid from "./components/RentalGrid";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { vehicles, properties } from "./data/rentals";

const supabase = createClient(
  "https://faknelkaspuoidnqvqjz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZha25lbGthc3B1b2lkbnF2cWp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM5MjMzMzcsImV4cCI6MjA0OTQ5OTMzN30.zDuroQ1Lg7h-v0-q5dqwkLHc-1jLjh2SVpNZgMaTA0k"
);

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isSignIn, setIsSignIn] = useState(true); // Toggle between Sign In and Sign Up
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to log out after 24 hours
  const logoutAfter24hrs = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      const loginTime = new Date(session.expires_at * 1000); // session.expires_at is in Unix timestamp
      const currentTime = new Date();

      const timeDiff = currentTime - loginTime;
      const twentyFourHoursInMillis = 24 * 60 * 60 * 1000;

      if (timeDiff >= twentyFourHoursInMillis) {
        await supabase.auth.signOut();
        alert("Session expired. Please sign in again.");
      }
    }
  };

  const handleSignIn = async () => {
    setLoading(true);
    setError(null);

    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      setIsModalOpen(false);

      // Set session expiration
      const expiresAt = Date.now() + 24 * 60 * 60 * 1000; // 24 hours from now
      localStorage.setItem('session_expiration', expiresAt);

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async () => {
    setLoading(true);
    setError(null);

    try {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;

      setIsModalOpen(false);

      // Set session expiration
      const expiresAt = Date.now() + 24 * 60 * 60 * 1000; // 24 hours from now
      localStorage.setItem('session_expiration', expiresAt);

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Check session expiration on app load
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        const expirationTime = localStorage.getItem('session_expiration');
        const currentTime = Date.now();
        if (currentTime >= expirationTime) {
          await supabase.auth.signOut();
          setIsModalOpen(true); // Prompt for login again
        } else {
          setIsModalOpen(false);
        }
      }
    };

    checkSession();
  }, []);

  return (
    <div className="min-h-screen bg-white relative">
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div
            className={`p-6 rounded-md shadow-lg w-full max-w-sm transition-all duration-700 transform ${isSignIn ? 'bg-gradient-to-r from-black via-red-700 to-black' : 'bg-gradient-to-r from-red-700 via-white to-red-700'} border-2 border-red-500`}
          >
            <h2 className="text-2xl font-bold mb-4 text-white">
              {isSignIn ? 'Sign In' : 'Sign Up'}
            </h2>

            {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-4 p-2 rounded-md bg-white text-black placeholder-gray-700 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-4 p-2 rounded-md bg-white text-black placeholder-gray-700 focus:outline-none"
            />
            {!isSignIn && (
              <input
                type="text"
                placeholder="Phone Number (Optional)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full mb-4 p-2 rounded-md bg-white text-black placeholder-gray-700 focus:outline-none"
              />
            )}

            <button
              onClick={isSignIn ? handleSignIn : handleSignUp}
              disabled={loading}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md w-full transition-colors duration-300"
            >
              {loading ? (isSignIn ? 'Signing In...' : 'Signing Up...') : (isSignIn ? 'Sign In' : 'Sign Up')}
            </button>

            <p className="text-sm text-center mt-4">
              {isSignIn ? (
                <span>
                  Don’t have an account?{' '}
                  <button
                    onClick={() => setIsSignIn(false)}
                    className="text-white underline focus:outline-none focus:text-red-500 transition-colors duration-300"
                  >
                    Sign Up
                  </button>
                </span>
              ) : (
                <span>
                  Already have an account?{' '}
                  <button
                    onClick={() => setIsSignIn(true)}
                    className="text-white underline focus:outline-none focus:text-red-500 transition-colors duration-300"
                  >
                    Sign In
                  </button>
                </span>
              )}
            </p>
          </div>
        </div>
      )}

      <Navbar />
      <Hero />
      <div className="bg-gray-50">
        <RentalGrid items={vehicles} title="Available Vehicles" type="vehicle" />
        <RentalGrid items={properties} title="Featured Properties" type="property" />
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
}
