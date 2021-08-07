import css from "./search.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import { SearchRounded } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  input: {
    height: "40px",
    backgroundColor: "#F3F7FB"
  },
  form: {
    width: "100%",
    padding: "5px 10px"
  }
}));

const Search = ({ products }) => {
  const classes = useStyles();
  return (
    <div className={css.search}>
      <FormControl className={classes.form}>
        <OutlinedInput
          className={classes.input}
          id="input-with-icon-adornment"
          margin="none"
          startAdornment={
            <InputAdornment position="start">
              <SearchRounded />
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
};

export default Search;
