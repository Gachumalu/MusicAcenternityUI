// pages/about.js
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center pt-20">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl">
        <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>
        <p className="text-gray-700 mb-6">
          Welcome to [Your Music Website]! We are dedicated to providing you
          with the latest and greatest in music. Our team of passionate music
          lovers works tirelessly to bring you the best in music news, reviews,
          and more.
        </p>
        <p className="text-gray-700 mb-6">
          Our mission is to create a community of music enthusiasts who can
          share and discover new music together. Whether you're into rock, pop,
          jazz, or classical, we have something for everyone.
        </p>
        <p className="text-gray-700 mb-6">
          Thank you for visiting our site. We hope you enjoy your stay and find
          something new and exciting to listen to!
        </p>
        <div className="text-center">
          <Link href="/" className="text-blue-500 hover:text-blue-700">
            Go back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
