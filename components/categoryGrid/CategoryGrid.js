import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import OpacityRoundedIcon from "@material-ui/icons/OpacityRounded";
import FavoriteTwoTone from "@material-ui/icons/FavoriteTwoTone";
import FitnessCenterRoundedIcon from "@material-ui/icons/FitnessCenterRounded";
import ChildFriendlyRoundedIcon from "@material-ui/icons/ChildFriendlyRounded";
import HouseRoundedIcon from "@material-ui/icons/HouseRounded";
import Button from "@material-ui/core/Button";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "10px"
  },
  paper: {
    padding: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "Center",
    textAlign: "center",
    fontSize: "18px",
    fontWeight: "500",
    height: "220px",
    width: "100%",
    cursor: "pointer",
    "& span": {
      margin: "5px",
      "& img": {
        maxWidth: "100%"
      }
    }
  },
  icon: {
    fontSize: "60px"
  },
  head: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
    alignItems: "center",
    "& p": {
      margin: "0",
      fontSize: "1.2rem"
    }
  },
  viewLink: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#EE4681"
  }
}));

const CategoryGrid = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.head}>
        <p>Shop By Categories</p>
        <a href="#" className={classes.viewLink}>
          View All
          <DoubleArrowIcon size="small" />
        </a>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
            <span>
              <img
                src="https://www.netmeds.com/images/category/624/thumb/treatments_0.jpg"
                alt="Pharmacy"
              />
            </span>
            Pharmacy
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
            <span>
              <img
                src="https://www.netmeds.com/images/category/524/thumb/Beauty_personal_care_1.jpg"
                alt="Pharmacy"
              />
            </span>{" "}
            Personal Care
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
            <span>
              <img
                src="https://www.netmeds.com/images/category/481/thumb/ayush_0.jpg"
                alt="Pharmacy"
              />
            </span>
            Health and Nutrition
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
            <span>
              <img
                src="https://www.netmeds.com/images/category/3085/thumb/Mom_baby_1.jpg"
                alt="Pharmacy"
              />
            </span>
            Baby Care
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
            <span>
              <img
                src="https://www.netmeds.com/images/category/3081/thumb/surgical_0.jpg"
                alt="Pharmacy"
              />
            </span>
            Surgical Equipments
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
            <span>
              <img
                src="https://www.netmeds.com/images/category/665/thumb/devices_0.jpg"
                alt="Pharmacy"
              />
            </span>
            Devices
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default CategoryGrid;
