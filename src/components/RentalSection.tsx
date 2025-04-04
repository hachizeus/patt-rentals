import RentalCard from './RentalCard';

const vehicles = [
  {
    images: [
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800',
    ],
    title: 'Range Rover Sport',
    description: 'Luxury SUV with premium features',
    price: '$280/day',
    type: 'vehicle' as const,
  },
  {
    images: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800',
      'https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=800',
    ],
    title: 'Mercedes S-Class',
    description: 'Executive sedan for business travel',
    price: '$350/day',
    type: 'vehicle' as const,
  },
];

const properties = [
  {
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800',
    ],
    title: 'Luxury Beach Villa',
    description: 'Oceanfront property with private pool',
    price: '$500/night',
    type: 'property' as const,
  },
  {
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800',
    ],
    title: 'Modern City Apartment',
    description: 'Downtown living with skyline views',
    price: '$300/night',
    type: 'property' as const,
  },
];

export default function RentalSection() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vehicles */}
        <section id="rentals">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Available Vehicles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <RentalCard key={index} {...vehicle} />
            ))}
          </div>
        </section>

        {/* Properties */}
        <section id="properties" className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <RentalCard key={index} {...property} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}