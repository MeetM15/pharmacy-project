import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import { SearchRounded } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  search: {
    backgroundColor: "#23CE6B",
    width: "100%"
  },
  input: {
    height: "40px",
    backgroundColor: "#f1f1ff"
  },
  form: {
    width: "100%",
    padding: "5px 10px"
  }
}));

const Search = () => {
  const classes = useStyles();
  return (
    <div className={classes.search}>
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
