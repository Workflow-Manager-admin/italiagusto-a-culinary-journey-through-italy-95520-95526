import React from 'react';

/**
 * PUBLIC_INTERFACE
 * RecipePreview component displays a preview of a recipe with basic information.
 * @param {Object} props - Component props
 * @param {String} props.title - Recipe title
 * @param {String} props.region - Italian region the recipe is from
 * @param {String} props.difficulty - Recipe difficulty level
 * @param {String} props.time - Preparation time
 * @param {String} props.description - Short description of the recipe
 */
const RecipePreview = ({ title, region, difficulty, time, description }) => {
  return (
    <article className="recipe-preview">
      <div className="recipe-image placeholder"></div>
      <div className="recipe-content">
        <h3 className="recipe-title">{title}</h3>
        
        <div className="recipe-meta">
          {region && <span className="recipe-region">{region}</span>}
          {difficulty && <span className="recipe-difficulty">Difficulty: {difficulty}</span>}
          {time && <span className="recipe-time">Prep: {time}</span>}
        </div>
        
        <p className="recipe-description">{description}</p>
        
        <button className="btn btn-sm">View Recipe</button>
      </div>
    </article>
  );
};

export default RecipePreview;
