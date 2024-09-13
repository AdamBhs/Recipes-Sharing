import logo from "../../assets/icons/LOGO.png";
import AddRecipe from "../../components/Buttons/addRecipe";
import LoginButton from "../../components/Buttons/login-button";
import "./navbarStyle.css"

function Navbar() {
  return (
    <nav>
        <div className="container top-nav">
            <div className="logo-navlinks">
                <img src={logo} alt="" />
                <ul>
                    <li>RECIPES</li>
                    <li>ARTICLES</li>
                    <li>ABOUT</li>
                </ul>
            </div>
            <div className="add-login">
                <AddRecipe />
                <LoginButton />
            </div>
        </div>
        <div className="line"></div>

        <div className="container bot-nav">
            <ul className="filter-recipe">
                <li>Popular</li>
                <li>Ingredients</li>
                <li>Meals & Dishes</li>
                <li>Diets</li>
                <li>Occasions</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;