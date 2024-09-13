import "./styleHome.css";
import SearchInput from "../../components/Inputs/search/SearchInput";
import RecipesView from "../../containers/RecipesView";
import { useEffect, useState } from "react";
import { IoChevronForward } from "react-icons/io5";


interface RecipeTypes {
  id: number;
  title: string;
  image: string;
}

function Home() {
  const [recipes, setRecipes] = useState<RecipeTypes[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
        try {
            const response = await fetch(
                'https://api.spoonacular.com/recipes/complexSearch?apiKey=cbcd8682546049c1bbf4e3f49da82165&number=1&type=salad&addRecipeInformation=true'
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
    <div className="home">
      <div className="search-home">
        <div className="dark-overlay"></div>
        <div className="search-recipe">
          <h3 className="upper-title">
            Fuel your body & soul - 
          </h3>
          <h3 className="sous-title">
            find recipes that taste amazing!
           </h3>
          <SearchInput />
        </div>
      </div>

      <div className="container home-content">
        <RecipesView 
            title="Effortless Eats"
            description="Satisfy your cravings in a flash! Explore our Quick & Easy Meals for effortless recipes without compromising on mouthwatering taste."
            api="https://api.spoonacular.com/recipes/complexSearch?apiKey=cbcd8682546049c1bbf4e3f49da82165&number=4&type=soup&addRecipeInformation=true"
        />

        <div className="healthy-recipes">
          <div className="recipe-view">
            <div className="section-1">
                <h1 className="title">Healthy Eating Inspiration</h1>
                <p>VIEW ALL <IoChevronForward className="ioChevronForward"/> </p>
            </div>
          </div>
          
          <div className="section-2">
            <div className="img-container">
              {
                recipes.map((recipe) => (
                  <img src={recipe.image} alt="" />
                ))
              }
            </div>
            <div className="healthy-inspriation">
              <div className="devision">
                <h3>Delicious Dishes Packed with Nutrition</h3>
                <p>Explore a collection of mouthwatering recipes that not only delight your taste buds
                  but also pack a powerful nutritional punch.</p>
                <div className="line"></div>
              </div>

              <div className="devision">
                <h3>Fuel Your Day with Plant-Based Power</h3>
                <p>Dive into the world of plant-based goodness with recipes that provide both energy and exceptional
                  flavors, making each bite a celebration of health.</p>
                <div className="line"></div>
              </div>
              <div className="devision">
                <h3>One-Pan Wonders for Stress-Free Cooking</h3>
                <p>Simplify your culinary journey with stress-free, one-pan wonders—recipes that prioritize
                  convenience without compromising on nutritional value or taste.</p>
                <div className="line"></div>
              </div>
            </div>
          </div>
        </div>

        <RecipesView 
            title="Liquid Harmony"
            description="Sip, savor, and celebrate! Discover a symphony of fruit-infused delights, refreshing mocktails, and spirited cocktails for every occasion."
            api="https://api.spoonacular.com/recipes/complexSearch?apiKey=cbcd8682546049c1bbf4e3f49da82165&number=4&type=drink&addRecipeInformation=true"
        />

        <div className="Recipe-week">
          
        </div>
        
      </div>
    </div>
  );
}

export default Home;
