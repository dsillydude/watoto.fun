import { useState, useEffect } from 'react';
import './App.css';
import './KidCampStyles.css'; // Create this new CSS file

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleVideoClick = (videoId: number) => {
    alert(`Video ${videoId} clicked! Placeholder action.`);
  };

  // KidCamp Activities Data
  const activities = [
    { icon: "🎮", title: "Games", description: "Fun educational games for kids!" },
    { icon: "📺", title: "Videos", description: "Safe, entertaining videos" },
    { icon: "🎵", title: "Songs", description: "Interactive music and rhymes" }
  ];

  return (
    <div className="min-h-screen bg-sky-100 dark:bg-gray-900 font-sans transition-colors duration-500 overflow-x-hidden w-full">
      {/* KidCamp Animated Header - Replaces your existing header */}
      <header className="kidcamp-header relative">
        {/* Floating Clouds */}
        <i className="fas fa-cloud cloud" style={{ top: '20%', left: '10%' }}></i>
        <i className="fas fa-cloud cloud" style={{ 
          top: '15%', 
          right: '15%', 
          animationDuration: '18s', 
          animationDirection: 'reverse' 
        }}></i>
        
        {/* Theme Toggle (positioned absolutely) */}
        <button 
          onClick={toggleTheme}
          className="absolute top-4 right-4 p-2 rounded-md bg-white/30 dark:bg-gray-700/80 text-gray-800 dark:text-gray-200 z-50 transition-transform transform hover:scale-110"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden absolute top-4 left-4 text-white p-2 rounded-md hover:bg-white/20 z-50"
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>

        <h1 className="header-title">Watoto Fun</h1>
        
        <div className="logo-circle">
          <div className="logo-text">PLAY</div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg rounded-b-lg p-4 z-50 mt-[200px]">
          <a href="#videos" onClick={toggleMobileMenu} className="block py-2 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400">Videos</a>
          <a href="#songs" onClick={toggleMobileMenu} className="block py-2 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400">Songs</a>
          <a href="#activities" onClick={toggleMobileMenu} className="block py-2 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400">Activities</a>
        </nav>
      )}

      {/* KidCamp Activities Section */}
      <section id="activities" className="w-full px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">Our Activities</h2>
        <div className="activities-grid">
          {activities.map((activity, index) => (
            <div key={index} className="activity-card dark:bg-gray-800 dark:text-gray-200">
              <div className="activity-icon text-4xl">{activity.icon}</div>
              <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-400">{activity.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{activity.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Your Existing Videos Section (with dark mode support) */}
      <section id="videos" className="w-full px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {[1, 2, 3].map((item) => (
            <div 
              key={item} 
              onClick={() => handleVideoClick(item)}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300 transform"
            >
              {/* ... your existing video thumbnail code ... */}
            </div>
          ))}
        </div>
      </section>

      {/* Your Existing Songs Section */}
      <section id="songs" className="w-full px-4 py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-500 rounded-t-lg">
        {/* ... your existing songs section code ... */}
      </section>

      {/* KidCamp CTA Button */}
      <div className="text-center my-12">
        <button className="cta-button dark:bg-orange-700 dark:hover:bg-orange-800">
          Join the Fun!
        </button>
      </div>

      {/* Your Existing Footer */}
      <footer className="bg-gray-800 dark:bg-black text-white dark:text-gray-400 text-center py-6 mt-0">
        <p>&copy; 2025 Watoto Fun. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
