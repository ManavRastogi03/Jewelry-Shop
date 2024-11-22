import React from 'react';
import Card from './Card';

function Payal() {
  const payalItems = [
    {
      title: 'Chandini Payal ',
      price: '$50.00',
      description: 'Beautiful handcrafted silver Chandini payal with intricate details.',
      image: 'https://res.cloudinary.com/dabandurw/image/upload/v1732283228/Screenshot_2024-11-22_190759_zqmwgq.png',
    },
    {
      title: 'Radhika Payal',
      price: '$150.00',
      description: 'Elegant Radhika payal for special occasions.',
      image: 'https://res.cloudinary.com/dabandurw/image/upload/v1732283227/Screenshot_2024-11-22_191253_lwildw.png',
    },
    {
      title: 'Madhuri Payal',
      price: '$120.00',
      description: 'Exquisite Madhuri payal to enhance your beauty.',
      image: 'https://res.cloudinary.com/dabandurw/image/upload/v1732283227/Screenshot_2024-11-22_191201_vvh0bm.png',
    },
    {
      title: 'Annapurna Payal ',
      price: '$90.00',
      description: 'Graceful Annapurna payal for a timeless look.',
      image: 'https://res.cloudinary.com/dabandurw/image/upload/v1732283226/Screenshot_2024-11-22_190916_tsn9bj.png',
    },
    {
      title: 'Moti Payal',
      price: '$90.00',
      description: 'Graceful Moti payal for a timeless look.',
      image: 'https://res.cloudinary.com/dabandurw/image/upload/v1732283227/Screenshot_2024-11-22_191035_assczl.png',
    }
  ];

  return (
    <div className="min-h-screen bg-primary p-8 flex flex-col justify-center items-center">
      {/* Title with Centered Text */}
      <h2 className="text-5xl font-bold text-white animate-glow text-center mb-8">
        Payal Collection
      </h2>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-8">
        {payalItems.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            price={item.price}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Payal;
