import { InputAdornment } from "@material-ui/core";
import css from "./search.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core";
import { SearchRounded } from "@material-ui/icons";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  inputRoot: {
    color: "white",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "white"
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "red"
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "white"
    }
  }
}));

const Search = ({ products }) => {
  const classes = useStyles();
  return (
    <div className={css.search}>
      <Autocomplete
        classes={classes}
        freeSolo
        id="searchbar"
        size="small"
        fullWidth={true}
        // closeIcon={<CloseIcon fontSize="small" />}
        options={products.map((product) => product.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            color="secondary"
            label="Search input"
            variant="outlined"
            margin="none"
            fullWidth={true}
            InputProps={{
              ...params.InputProps,
              type: "search",
              startAdornment: (
                <InputAdornment position="end">
                  <SearchRounded color="error" />
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
