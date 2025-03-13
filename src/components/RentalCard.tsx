import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { useState } from 'react';

interface RentalCardProps {
  id: string;
  images: string[];
  title: string;
  description: string;
  price: string;
  type: 'vehicle' | 'property';
}

export default function RentalCard({
  id,
  images,
  title,
  description,
  price,
}: RentalCardProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleBookNowClick = () => {
    const message = `Hi, I'm interested in booking the ${title}. Here's the description: ${description}. The price is ${price}.`;
    const whatsappNumber = '254720813111'; // Replace with dynamic number if needed
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappLink, '_blank');
  };

  return (
    <div id={id} className="bg-white rounded-lg shadow-lg overflow-hidden group transition-all">
      {/* Image carousel */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={images[currentImage]}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Navigation buttons */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-1 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Image indicators */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                index === currentImage ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-red-600 font-semibold">{price}</span>
          <button
            onClick={handleBookNowClick}
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors"
          >
            <Calendar className="w-4 h-4" />
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
