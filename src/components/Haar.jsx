import React from 'react';
import Card from './Card';

function Haar() {
  const haarItems = [
    {
      title: 'Rajmahal Haar ',
      price: '$200.00',
      description: 'Beautiful handcrafted Rajmahal Haar.',
      image: 'https://res.cloudinary.com/dabandurw/image/upload/v1732185312/part2_dlvlvh.png',
    },
    {
      title: 'Sonal Haar',
      price: '$500.00',
      description: 'Elegant diamond Haar for special Sonal Haar.',
      image: 'https://res.cloudinary.com/dabandurw/image/upload/v1732185312/Part3_s6jkeq.png',
    },
    {
      title: 'Mahal Haar',
      price: '$450.00',
      description: 'Stunning Mahal Haar to make you stand out.',
      image: 'https://res.cloudinary.com/dabandurw/image/upload/v1732185312/Part4_lacmhy.png',
    },
    {
      title: 'Swarna Haar',
      price: '$400.00',
      description: 'Graceful emerald Swarna Haar for elegant events.',
      image: 'https://res.cloudinary.com/dabandurw/image/upload/v1732185312/part1_qnlkrt.png',
    },
    {
      title: 'Divya Haar ',
      price: '$400.00',
      description: 'Graceful emerald Divya Haar for elegant events.',
      image: 'https://res.cloudinary.com/dabandurw/image/upload/v1732185311/Part5_pnrvyx.png',
    },
  ];

  return (
    <div className="min-h-screen p-8 bg-primary flex flex-col justify-center items-center">
      {/* Title with Glowing Green Effect */}
      <h2 className="text-5xl font-bold text-white animate-glow text-center mb-8">
        Haar Collection
      </h2>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-8">
        {haarItems.map((item, index) => (
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

export default Haar;
