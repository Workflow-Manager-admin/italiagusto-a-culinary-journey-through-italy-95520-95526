import React from 'react';
import RecipePreview from '../common/RecipePreview';

/**
 * PUBLIC_INTERFACE
 * PopularRecipes component displays a collection of popular Italian recipes.
 */
const PopularRecipes = () => {
  // Sample data for recipes - in a real app, this would come from an API or database
  const recipes = [
    {
      id: 1,
      title: 'Classic Tiramisu',
      region: 'Veneto',
      difficulty: 'Medium',
      time: '30 min + 4 hrs chill',
      description: 'A beloved Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream.'
    },
    {
      id: 2,
      title: 'Risotto alla Milanese',
      region: 'Lombardy',
      difficulty: 'Medium',
      time: '45 min',
      description: 'A creamy saffron-infused risotto that showcases the simplicity and elegance of northern Italian cuisine.'
    },
    {
      id: 3,
      title: 'Pasta alla Norma',
      region: 'Sicily',
      difficulty: 'Easy',
      time: '30 min',
      description: 'A Sicilian pasta dish made with sautéed eggplant, tomato sauce, ricotta salata, and basil.'
    }
  ];

  return (
    <section className="popular-recipes">
      <div className="container">
        <h2 className="section-title">Popular Recipes</h2>
        <p className="section-description">
          Try your hand at these beloved Italian classics, from simple pasta dishes to decadent desserts.
        </p>
        
        <div className="recipes-grid">
          {recipes.map((recipe) => (
            <RecipePreview 
              key={recipe.id} 
              title={recipe.title}
              region={recipe.region}
              difficulty={recipe.difficulty}
              time={recipe.time}
              description={recipe.description}
            />
          ))}
        </div>
        
        <div className="recipes-cta">
          <button className="btn">Browse All Recipes</button>
        </div>
      </div>
    </section>
  );
};

export default PopularRecipes;
