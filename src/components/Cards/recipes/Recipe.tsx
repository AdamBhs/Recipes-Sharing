import "./recipeStyle.css";
import { IoBookmark } from "react-icons/io5";

import Rating from "../../Rating";

interface Recipe {
  key: number;
  title: string;
  image_recipe: string;
  mins: number;
}


function Recipe(props: Recipe) {
  return (
    <div className="recipe-card">
      <div className="img-container">
        <img src={props.image_recipe} alt="" />
        <IoBookmark className="save-icon"/>
      </div>
      
      <h3 className="recipe-title">
        {props.title}
      </h3>
      <text className="chef-name">By <span>AMANDA SUAREZ</span></text>
      <p className="time-cooking">Total time: {props.mins} mins</p>
      <div className="rating-container">
        <Rating />
        <p className="num-rating">(18)</p>
      </div>
    </div>
  )
}

export default Recipe;
