import style from "../../styles/Search/Search.module.css";
import Input from "../Input/Input";

function Search(props) {
  return (
    <div className={style.search} data-testid="search">
      {/* TODO: Add onchange*/}
      Select category
      <select
        className={style.select_by_category}
        data-testid="select-by-category"
        aria-label="Select by category"
        defaultValue="all"
      >
        <option value="all">All</option>
        <option value="health">Health</option>
        <option value="energy">Energy</option>
        <option value="other">Other</option>
      </select>
      {/* TODO: Add select by category component*/}
      or
      <Input placeholder="Start typing a name" type="search" label="Search" />
    </div>
  );
}

export default Search;
