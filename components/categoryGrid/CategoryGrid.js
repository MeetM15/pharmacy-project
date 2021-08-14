import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { Data } from "../../data/categories/Data";
import Link from "next/link";

const useStyles = makeStyles(() => ({
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
    justifyContent: "space-between",
    fontSize: "clamp(16px,2vw,24px)",
    fontWeight: "500",
    height: "100%",
    width: "100%",
    cursor: "pointer",
    "& span": {
      margin: "5px",
      "& img": {
        maxWidth: "100%"
      }
    }
  },
  head: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
    alignItems: "center",
    "& p": {
      margin: "0",
      fontSize: "clamp(18px,4vw,28px)",
      fontWeight: "bold"
    }
  },
  viewLink: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#FF4000",
    fontSize: "18px",
    fontWeight: "bold"
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
        {Data.map((category, index) => {
          return (
            <Link
              key={index}
              href={{
                pathname: `/${category.name}`,
                query: { categoryName: `${category.name}` }
              }}
            >
              <Grid item xs={6} sm={3} md={2}>
                <Paper className={classes.paper}>
                  <span>
                    <img src={category.img} alt={category.name} />
                  </span>
                  {category.name}
                </Paper>
              </Grid>
            </Link>
          );
        })}
      </Grid>
    </div>
  );
};
export default CategoryGrid;
