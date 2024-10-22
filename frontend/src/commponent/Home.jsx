// HomePage.jsx
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-cover bg-center" 
      style={{ backgroundImage: "url('https://example.com/background-image.jpg')" }}>
      
      {/* Header */}
      <header className="text-white p-4 bg-black bg-opacity-50">
        <nav className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">My HomePage</h1>
 
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center text-center text-white p-10">
        <h2 className="text-4xl font-bold mb-4">Welcome to My Website</h2>
        <p className="max-w-lg">
          This is a homepage where I showcase my skills as a web developer. 
          Explore my projects and feel free to get in touch!
        </p>
        <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
          Learn More
        </button>
      </main>

      {/* Footer */}
      <footer className="bg-black bg-opacity-50 text-white p-4 text-center">
        <p>© 2024 My Portfolio. All Rights Reserved.</p>
        <div className="flex justify-center mt-2">
          <a href="#" className="mr-4 hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;