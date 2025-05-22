import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Hero component for the ItaliaGusto homepage.
 * Features a prominent visual element with headline and call to action.
 */
const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <span className="subtitle">Welcome to</span>
          <h1 className="hero-title">ItaliaGusto</h1>
          <h2 className="hero-subtitle">A Culinary Journey Through Italy</h2>
          <p className="hero-description">
            Explore the rich and diverse world of Italian cuisine - from Alpine delicacies in the north 
            to Mediterranean treasures in the south. Discover authentic recipes, regional specialties, 
            and the stories behind Italy's most beloved dishes.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-large">Explore Regions</button>
            <button className="btn btn-large btn-outline">Popular Recipes</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
