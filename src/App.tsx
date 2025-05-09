import { useState, useEffect } from 'react';
import './App.css';
import './KidCampStyles.css';

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

  // Data
  const activities = [
    { icon: "🎮", title: "Games", description: "Fun educational games for kids!" },
    { icon: "📺", title: "Videos", description: "Safe, entertaining videos" },
    { icon: "🎵", title: "Songs", description: "Interactive music and rhymes" }
  ];

  const scheduleItems = [
    "READY JULY 5",
    "SATURDAY JULY 6", 
    "JUNE 7",
    "BEST SALES",
    "FREE DAYS",
    "HOURS 9AM-4PM"
  ];

  return (
    <div className="min-h-screen bg-sky-100 dark:bg-gray-900 font-sans transition-colors duration-500 overflow-x-hidden w-full">
      {/* KidCamp Header */}
      <header className="kidcamp-header relative">
        <i className="fas fa-cloud cloud" style={{ top: '20%', left: '10%' }}></i>
        <i className="fas fa-cloud cloud" style={{ 
          top: '15%', 
          right: '15%', 
          animationDuration: '18s', 
          animationDirection: 'reverse' 
        }}></i>
        
        <button 
          onClick={toggleTheme}
          className="absolute top-4 right-4 p-2 rounded-md bg-white/30 dark:bg-gray-700/80 text-gray-800 dark:text-gray-200 z-50 transition-transform transform hover:scale-110"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        
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

      {/* Activities Section */}
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

      {/* Videos Section */}
      <section id="videos" className="w-full px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((item) => (
            <div 
              key={item} 
              onClick={() => handleVideoClick(item)}
              className="group bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className={`relative w-full aspect-video rounded-lg mb-4 overflow-hidden ${
                item === 1 ? 'bg-gradient-to-br from-blue-200 to-blue-400 dark:from-blue-700 dark:to-blue-900' : 
                item === 2 ? 'bg-gradient-to-br from-pink-200 to-pink-400 dark:from-pink-700 dark:to-pink-900' : 
                'bg-gradient-to-br from-purple-200 to-purple-400 dark:from-purple-700 dark:to-purple-900'
              }`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto"></div>
                <div className="h-3 w-1/2 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Songs Section */}
      <section id="songs" className="w-full px-4 py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-500 rounded-t-lg">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">Songs</h2>
        <p className="text-gray-600 dark:text-gray-400 text-center">Song section coming soon! Add interactive song elements here.</p>
        <div className="max-w-md mx-auto mt-6 p-4 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer">
          <p className="text-gray-800 dark:text-gray-200 font-semibold">Twinkle Twinkle Little Star</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Click to play (placeholder)</p>
        </div>
      </section>

      
      {/* NEW Event Schedule Section */}
           {/* === MODERN EVENT SCHEDULE === */}
      <section className="event-schedule-section w-full px-4 py-16 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center drop-shadow-md">EVENT SCHEDULE</h2>
          
          <div className="schedule-buttons-container">
            {[
              "READY JULY 5",
              "SATURDAY JULY 6", 
              "JUNE 7",
              "BEST SALES",
              "FREE DAYS",
              "HOURS 9AM-4PM"
            ].map((item, index) => (
              <button 
                key={index}
                className="schedule-button"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Button */}
      <div className="text-center my-12">
        <button className="cta-button dark:bg-orange-700 dark:hover:bg-orange-800">
          Join the Fun!
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-black text-white dark:text-gray-400 text-center py-6 mt-0">
        <p>&copy; 2025 Watoto Fun. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
