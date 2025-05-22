import React from 'react';
import './App.css';

// Import layout components
import MainContainer from './components/layout/MainContainer';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Import page components
import Hero from './components/home/Hero';
import FeaturedContent from './components/home/FeaturedContent';
import RegionalHighlights from './components/home/RegionalHighlights';
import PopularRecipes from './components/home/PopularRecipes';
import NewsletterSignup from './components/common/NewsletterSignup';

function App() {
  return (
    <div className="app">
      <MainContainer>
        <Header />
        
        <main className="main-content">
          <Hero />
          <FeaturedContent />
          <RegionalHighlights />
          
          {/* Additional content sections can be added here */}
        </main>
        
        <NewsletterSignup />
        <Footer />
      </MainContainer>
    </div>
  );
}

export default App;