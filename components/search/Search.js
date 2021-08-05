import { InputAdornment } from "@material-ui/core";
import css from "./search.module.scss";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core";
import { SearchRounded } from "@material-ui/icons";

const Search = ({ products }) => {
  return (
    <div className={css.search}>
      <Autocomplete
        freeSolo
        id="searchbar"
        size="small"
        fullWidth={true}
        options={products.map((product) => product.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            variant="outlined"
            margin="none"
            fullWidth={true}
            InputProps={{
              ...params.InputProps,
              type: "search",
              startAdornment: (
                <InputAdornment position="end">
                  <SearchRounded />
                </InputAdornment>
              )
            }}
          />
        )}
      />
    </div>
  );
};

export default Search;
