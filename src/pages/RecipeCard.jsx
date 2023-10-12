const RecipeCard = ({ label, image, ingradientLines }) => {
  return (
    <div className="m-4 w-75 mx-auto">
      <div className="card">
        <div className="row ">
          <div className="col-md-3">
            <img src={image} className="card-img p-1 rounded" alt={label} />
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">{label}</h5>
              {ingradientLines.map((ingredient, index) => (
                  <span key={index}>
                    &#8226; {ingredient} &nbsp;
                  </span>
                ))  
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
