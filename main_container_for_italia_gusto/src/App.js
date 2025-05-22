import React from 'react';
import './App.css';

// Import layout components
import MainContainer from './components/layout/MainContainer';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Import page components
import Hero from './components/home/Hero';
import FeaturedContent from './components/home/FeaturedContent';

function App() {
  return (
    <div className="app">
      <MainContainer>
        <Header />
        
        <main className="main-content">
          <Hero />
          <FeaturedContent />
          
          {/* Additional content sections can be added here */}
        </main>
        
        <Footer />
      </MainContainer>
    </div>
  );
}

export default App;