import "./styleSearch.css";
import search_icon from "../../../assets/icons/Search icon.png";

function SearchInput() {
  return (
    <div className="search-input">
      <img src={search_icon} alt="" />
      <input type="text" placeholder="Search by dish, ingredient, ......."/>
    </div>
  )
}

export default SearchInput;