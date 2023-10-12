
import RecipeCard from './RecipeCard';

const RecipeList = ({ hits }) => {
  return (
    <div className="container d-flex">
      <div className="row">
        {hits.map((hit, index) => (
          <RecipeCard
            key={index}
            label={hit.recipe.label}
            image={hit.recipe.image}
            ingradientLines={hit.recipe.ingredientLines}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
