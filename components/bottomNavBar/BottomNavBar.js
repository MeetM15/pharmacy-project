import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  makeStyles
} from "@material-ui/core";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import { useState } from "react";
import Link from "next/link";

const useStyles = makeStyles(() => ({
  main_container: {
    position: "fixed",
    bottom: "0",
    left: "0",
    right: "0",
    width: "100%",
    zIndex: "10",
    backgroundColor: "#23CE6B"
  },
  icons: {
    backgroundColor: "#23CE6B"
  }
}));

const BottomNavBar = () => {
  const classes = useStyles();

  const [menuValue, setMenuValue] = useState("home");
  const handleChange = (e, newValue) => {
    setMenuValue(newValue);
  };
  return (
    <div className={classes.main_container}>
      <Paper elevation={1} className={classes.paper}>
        <BottomNavigation showLabels value={menuValue} onChange={handleChange}>
          <Link href="/">
            <BottomNavigationAction
              className={classes.icons}
              label="Categories"
              showLabel={true}
              icon={<AppsRoundedIcon style={{ color: "black" }} />}
            />
          </Link>
          <Link href="/">
            <BottomNavigationAction
              className={classes.icons}
              label="Home"
              showLabel={true}
              icon={<HomeRoundedIcon style={{ color: "black" }} />}
            />
          </Link>
          <Link href="/">
            <BottomNavigationAction
              className={classes.icons}
              label="Menu"
              showLabel={true}
              icon={<MenuRoundedIcon style={{ color: "black" }} />}
            />
          </Link>
        </BottomNavigation>
      </Paper>
    </div>
  );
};

export default BottomNavBar;
