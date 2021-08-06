import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import withStyles from "@material-ui/core/styles/withStyles";
import Search from "@material-ui/icons/Search";

const StyledInput = withStyles({
  root: {
    width: "590px",
  },
})(Input);

export const SearchBar = () => (
  <StyledInput
    id="search"
    placeholder="Recherche des articles"
    startAdornment={
      <InputAdornment position="start">
        <Search />
      </InputAdornment>
    }
  />
);

export default SearchBar;
