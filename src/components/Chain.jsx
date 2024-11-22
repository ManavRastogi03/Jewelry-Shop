// Chain.jsx
import React from 'react';
import Card from './Card'; // Import the Card component

function Chain() {
  const chainItems = [
    {
      title: 'Ratna Chain',
      price: '$500.00',
      description: 'Beautiful handcrafted Ratna chain for daily wear.',
      image: 'https://res.cloudinary.com/dabandurw/image/upload/v1732289438/Screenshot_2024-11-22_205712_h1cooq.png', // Replace with actual image URL
    },
    {
      title: 'Kundan Chain',
      price: '$150.00',
      description: 'Elegant Kundan chain for special occasions.',
      image: 'https://res.cloudinary.com/dabandurw/image/upload/v1732289438/Screenshot_2024-11-22_205349_ktumxa.png', // Replace with actual image URL
    },
    {
      title: 'Rajwadi Chain ',
      price: '$1200.00',
      description: 'Luxurious Rajwadi chain with intricate design.',
      image: 'https://res.cloudinary.com/dabandurw/image/upload/v1732289438/Screenshot_2024-11-22_203129_b8vzsa.png', // Replace with actual image URL
    },
    {
      title: 'Vishal Chain',
      price: '$2000.00',
      description: 'Premium Vishal chain for elegant looks.',
      image: 'https://res.cloudinary.com/dabandurw/image/upload/v1732289438/Screenshot_2024-11-22_203100_y723k9.png', // Replace with actual image URL
    },
    {
        title: 'Chandrika Chain',
        price: '$200.00',
        description: 'Premium Chandrika chain for elegant looks.',
        image: 'https://res.cloudinary.com/dabandurw/image/upload/v1732289438/Screenshot_2024-11-22_205503_j4qvpu.png', // Replace with actual image URL
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 relative">
      {/* Title with Glowing Green Effect, centered */}
      <h2 className="text-5xl font-bold text-white animate-glow mb-8 text-center">
        Chain Collection
      </h2>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-8 mt-8 w-full">
        {chainItems.map((item, index) => (
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

export default Chain;
