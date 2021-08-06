import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import withStyles from "@material-ui/core/styles/withStyles";
import Search from "@material-ui/icons/Search";

const StyledInput = withStyles({
  root: {
    width: "100%",
    height: "37px",
    background: "#F5F6F7",
    marginBottom: "24px",

    "&::before": {
      content: "unset",
    },

    "&::after": {
      content: "unset",
    },
  },

  input: {
    "&::placeholder": {
      opacity: "0.15",
    },
  },
})(Input);

export const SearchBar = () => (
  <StyledInput
    id="search"
    placeholder="Recherche des articles"
    startAdornment={
      <InputAdornment position="start">
        <Search opacity="0.3" />
      </InputAdornment>
    }
  />
);

export default SearchBar;
