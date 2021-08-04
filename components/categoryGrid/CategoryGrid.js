import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Item from "../../styles/item.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "10px",
    backgroundColor: "white"
  },
  paper: {
    padding: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "Center",
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "600",
    color: "black",
    height: "200px",
    width: "100%",
    cursor: "pointer"
  }
}));

const CategoryGrid = ({ allCategories }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h2 style={{ margin: "0", marginBottom: "10px", textAlign: "Center" }}>
        Shop By Categories
      </h2>
      <Grid container spacing={1}>
        {allCategories.map((category, index) => {
          return (
            <Grid key={index} item xs="6" sm="4">
              <Paper className={classes.paper}>
                <Image src={Item} alt={category} />
                {category}
              </Paper>
            </Grid>
          );
        })}
        {allCategories.map((category, index) => {
          return (
            <Grid key={index} item xs={6} sm={4}>
              <Paper className={classes.paper}>
                <Image src={Item} alt={category} />
                {category}
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
export default CategoryGrid;
