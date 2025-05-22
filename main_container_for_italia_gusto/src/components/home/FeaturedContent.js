import React from 'react';

/**
 * PUBLIC_INTERFACE
 * FeaturedContent component displays highlighted content on the homepage.
 * Shows featured posts, recipes, or regional spotlights.
 */
const FeaturedContent = () => {
  return (
    <section className="featured-content">
      <div className="container">
        <h2 className="section-title">Featured Content</h2>
        
        <div className="featured-grid">
          <div className="featured-item">
            <div className="featured-image placeholder"></div>
            <h3 className="featured-title">The Authentic Pasta Carbonara</h3>
            <p className="featured-excerpt">Discover the secrets behind Rome's iconic pasta dish and learn how to make it the traditional way.</p>
          </div>
          
          <div className="featured-item">
            <div className="featured-image placeholder"></div>
            <h3 className="featured-title">Exploring Sicily's Street Food</h3>
            <p className="featured-excerpt">From arancini to cannoli, experience the vibrant flavors of Sicilian street cuisine.</p>
          </div>
          
          <div className="featured-item">
            <div className="featured-image placeholder"></div>
            <h3 className="featured-title">The Art of Neapolitan Pizza</h3>
            <p className="featured-excerpt">Learn about the centuries-old tradition of pizza-making from Naples, now UNESCO-recognized.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
