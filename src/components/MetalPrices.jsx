import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSnipper"; // Import the loader
const MetalPriceAPI = () => {
  const [prices, setPrices] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.metalpriceapi.com/v1/latest?api_key=${apiKey}&base=USD&currencies=INR,XAU,XAG`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log("API Response:", result);

        const usdToInr = result.rates.INR; // Dynamic USD to INR conversion rate
        const troyOunceToGram = 31.1035; // Conversion factor
        const goldRateInUsd = result.rates.USDXAU; // Gold price in USD per troy ounce
        const silverRateInUsd = result.rates.USDXAG; // Silver price in USD per troy ounce

        // Convert to INR for 10 grams
        const goldPriceInInrPerTroyOunce = goldRateInUsd * usdToInr;
        const silverPriceInInrPerTroyOunce = silverRateInUsd * usdToInr;

        const goldPriceInInrPer10Gram =
          (goldPriceInInrPerTroyOunce / troyOunceToGram) * 10;
        const silverPriceInInrPer10Gram =
          (silverPriceInInrPerTroyOunce / troyOunceToGram) * 10;

        setPrices({
          goldInInr: goldPriceInInrPer10Gram.toFixed(2),
          silverInInr: silverPriceInInrPer10Gram.toFixed(2),
        });
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "auto", // Adjusted to auto for minimal height
        backgroundColor: "#0f172a", // Light background for the page
      }}
    >
      {/* Centered box with white border and the custom background color */}
      <div
        style={{
          backgroundColor: "#0f172a", // Replace this with the color that matches the website (payal, haar color)
          padding: "20px",
          borderRadius: "8px", // Optional for rounded corners
          border: "2px solid #fff", // White border
          textAlign: "center",
          maxWidth: "400px", // Adjust width based on content
          width: "100%",
        }}
      >
        <h1
          style={{
            color: "#00FF00",
            textShadow:
              "0 0 10px #00FF00, 0 0 20px #00FF00, 0 0 30px #00FF00",
          }}
        >
          Gold and Silver Prices in India (INR)
        </h1>

        {/* Show the loader while data is fetching */}
        {!prices && !error ? (
          <LoadingSpinner />
        ) : error ? (
          <p style={{ color: "red" }}>Error: {error}</p>
        ) : (
          <div>
            <p
              style={{
                fontSize: "18px",
                margin: "10px 0",
                color: "#00FF00",
                textShadow:
                  "0 0 10px #00FF00, 0 0 20px #00FF00, 0 0 30px #00FF00",
              }}
            >
              <strong>Gold Price (24k):</strong> ₹{prices.goldInInr} per 10 grams
            </p>
            <p
              style={{
                fontSize: "18px",
                margin: "10px 0",
                color: "#00FF00",
                textShadow:
                  "0 0 10px #00FF00, 0 0 20px #00FF00, 0 0 30px #00FF00",
              }}
            >
              <strong>Silver Price:</strong> ₹{prices.silverInInr} per 10 grams
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MetalPriceAPI;
