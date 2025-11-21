import React from "react";
import ThemeToggle from '../components/ThemeToggle';
import StarBackground from '../components/StarBackground';

const Home = () => {
  return (
    <div className="min-h-screen text-foreground bg-background overflow-x-hidden my-7">
      {/* Theme section */}
      <ThemeToggle/>

      {/* Background Effects */}

      <StarBackground/>

      {/* Navbar */}

      {/* Main content */}

      {/* Footer */}
    </div>
  );
};

export default Home;
