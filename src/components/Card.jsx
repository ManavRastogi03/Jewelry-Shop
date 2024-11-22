import React from 'react';

function Card({ title, price, description, image }) {

  // WhatsApp number (can be hardcoded or passed from a parent component if needed)
  const whatsappNumber = "9897952019"; // Replace with the actual number

  // Create the WhatsApp message with product details
  const handleAddToCart = () => {
    const message = `Hello, I'm interested in purchasing ${title} for ${price}. Here's a brief description: ${description}`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp link in a new tab or window
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="bg-white hover:shadow-xl transition-shadow duration-300 shadow-lg rounded-lg overflow-hidden hover:ring hover:ring-glowGreen hover:ring-opacity-50 transform hover:scale-105 max-w-sm hover:animate-glow">
      {/* Image Section */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-blue-500">{price}</span>
          <button
            onClick={handleAddToCart}
            className="bg-green-500 text-white text-sm font-medium py-2 px-4 rounded hover:bg-white hover:text-green-500 hover:border-green-500 border-2 transition-all"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
