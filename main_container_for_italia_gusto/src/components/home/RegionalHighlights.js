import React from 'react';

/**
 * PUBLIC_INTERFACE
 * RegionalHighlights component showcases different Italian regions and their culinary specialties.
 */
const RegionalHighlights = () => {
  // Sample data for regions - in a real app, this would come from an API or database
  const regions = [
    {
      id: 1,
      name: 'Tuscany',
      description: 'Famous for rustic dishes, excellent olive oils, and the iconic Bistecca alla Fiorentina',
      specialty: 'Ribollita'
    },
    {
      id: 2,
      name: 'Sicily',
      description: 'A melting pot of flavors influenced by Greek, Arab, and Spanish cultures',
      specialty: 'Arancini'
    },
    {
      id: 3,
      name: 'Emilia-Romagna',
      description: 'Considered the cradle of Italian food, home to Parmigiano-Reggiano and balsamic vinegar',
      specialty: 'Tortellini in Brodo'
    },
    {
      id: 4,
      name: 'Campania',
      description: 'Birthplace of pizza and home to incredible seafood dishes',
      specialty: 'Pizza Napoletana'
    }
  ];

  return (
    <section className="regional-highlights">
      <div className="container">
        <h2 className="section-title">Explore Italian Regions</h2>
        <p className="section-description">
          Italy's diverse regions each offer their own unique culinary traditions. 
          Explore the flavors that make each region special.
        </p>
        
        <div className="regions-grid">
          {regions.map((region) => (
            <div className="region-card" key={region.id}>
              <h3 className="region-name">{region.name}</h3>
              <p className="region-description">{region.description}</p>
              <div className="region-specialty">
                <span className="specialty-label">Signature Dish:</span>
                <span className="specialty-name">{region.specialty}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="regions-cta">
          <button className="btn">Discover All Regions</button>
        </div>
      </div>
    </section>
  );
};

export default RegionalHighlights;
