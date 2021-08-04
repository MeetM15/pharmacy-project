import {
  BottomNavigation,
  BottomNavigationAction,
  Paper
} from "@material-ui/core";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import { useState } from "react";

const BottomNavBar = () => {
  const [menuValue, setMenuValue] = useState("home");
  const handleChange = (e, newValue) => {
    setMenuValue(newValue);
  };
  return (
    <div
      style={{
        position: "fixed",
        bottom: "0",
        left: "0",
        right: "0",
        width: "100%"
      }}
    >
      <Paper elevation={10}>
        <BottomNavigation showLabels value={menuValue} onChange={handleChange}>
          <BottomNavigationAction
            label="Categories"
            icon={<AppsRoundedIcon style={{ color: "black" }} />}
          />
          <BottomNavigationAction
            label="Home"
            icon={<HomeRoundedIcon style={{ color: "black" }} />}
          />
          <BottomNavigationAction
            label="Menu"
            icon={<MenuRoundedIcon style={{ color: "black" }} />}
          />
        </BottomNavigation>
      </Paper>
    </div>
  );
};

export default BottomNavBar;
