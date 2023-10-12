
import RecipeList from "./RecipeList";


const Result = ({ data }) => {
  return (
    <div>
    <RecipeList hits={data.hits} />
  </div>
  );
};

export default Result;
