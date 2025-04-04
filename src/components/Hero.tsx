import video from "../images/vida.mp4";
import logo from "../images/logo.png";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
        src={video} // Correctly use the imported video
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full">
        {/* Logo above the heading */}
        <div className="mb-6">
          <img
            src={logo}
            alt="PattRentals Logo"
            className="h-93 w-auto object-contain mx-auto" // Increased height
          />
        </div>

        {/* Centered content */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-red-500 mb-6 animate-fade-in">
            Premium Rental Experience
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-8 animate-fade-in-delay">
            Discover luxury vehicles, exclusive properties, and premium vacation
            rentals tailored to your lifestyle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <a
              href="#rentals"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-all transform hover:scale-105"
            >
              View Rentals
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-black transition-all transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
