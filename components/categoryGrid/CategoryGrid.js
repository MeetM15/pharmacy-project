import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import OpacityRoundedIcon from "@material-ui/icons/OpacityRounded";
import FavoriteTwoTone from "@material-ui/icons/FavoriteTwoTone";
import FitnessCenterRoundedIcon from "@material-ui/icons/FitnessCenterRounded";
import ChildFriendlyRoundedIcon from "@material-ui/icons/ChildFriendlyRounded";
import HouseRoundedIcon from "@material-ui/icons/HouseRounded";
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
    fontSize: "20px",
    fontWeight: "500",
    height: "120px",
    width: "100%",
    cursor: "pointer"
  },
  icon: {
    fontSize: "60px"
  }
}));

const CategoryGrid = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <p
        style={{
          margin: "0",
          marginBottom: "10px",
          textAlign: "left",
          fontSize: "1.3rem"
        }}
      >
        Shop By Categories
      </p>
      <Grid container spacing={1}>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
            <OpacityRoundedIcon className={classes.icon} color="primary" />
            Pharmacy
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
            <FavoriteTwoTone className={classes.icon} color="error" />
            Personal Care
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
            <FitnessCenterRoundedIcon className={classes.icon} color="action" />
            Health and Nutrition
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
            <ChildFriendlyRoundedIcon
              className={classes.icon}
              color="secondary"
            />
            Baby Care
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
            <HouseRoundedIcon className={classes.icon} color="error" />
            Household Needs
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default CategoryGrid;
