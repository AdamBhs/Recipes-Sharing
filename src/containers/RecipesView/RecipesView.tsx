import { useEffect, useState } from "react";
import Recipe from "../../components/Cards/recipes/Recipe";
import "./style.css";
import { IoChevronForward } from "react-icons/io5";


interface RecipesViewProps {
    title: string;
    description: string;
    api: string;
}

interface RecipeTypes {
    id: number;
    title: string;
    image: string;
    readyInMinutes: number;
}
  

function RecipesView(props: RecipesViewProps) {
  const [recipes, setRecipes] = useState<RecipeTypes[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
        try {
            const response = await fetch(
                props.api
            )
            if (!response.ok) {
                throw new Error('Faild to fetch');
            }
            const data = await response.json();
            setRecipes(data.results);
        } catch (err) {
            console.log(err);
        }
    };

    fetchRecipes();
  }, [])
  
  return (
    <div className="recipe-view">
        <div className="section-1">
            <h1 className="title">{props.title}</h1>
            <p>VIEW ALL RECIPES <IoChevronForward className="ioChevronForward"/> </p>
        </div>
        <p className="type-description">
            {props.description}
        </p>
        <div className="section-2">
            {
                recipes.map((recipe) => (
                    <Recipe 
                        key={recipe.id}
                        title={recipe.title}
                        image_recipe={recipe.image}
                        mins={recipe.readyInMinutes}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default RecipesView;
