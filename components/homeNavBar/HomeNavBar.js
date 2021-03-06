import { useState } from "react";
import Link from "next/link";
import { Button, makeStyles, Paper } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import { ShoppingCartOutlined } from "@material-ui/icons";
import Search from "../search/Search";
import LockOpenIcon from "@material-ui/icons/LockOpen";

const useStyles = makeStyles(() => ({
  nav_container: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    width: "100%",
    zIndex: "10",
  },
  paper: {
    backgroundColor: "white",
    color: "black",
  },
  nav_top: {
    display: "flex",
    padding: "0px 10px",
    height: "40px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    margin: "0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "18px",
    fontWeight: "600",
    cursor: "pointer",
  },
  icons: {
    display: "flex",
    alignItems: "center",
  },
  search_bar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  login_btn: {
    display: "flex",
    alignItems: "center",
    fontSize: "12px",
  },
}));

const HomeNavBar = () => {
  const classes = useStyles();
  const [auth, setAuth] = useState(false);
  return (
    <div className={classes.nav_container}>
      <Paper elevation={1} className={classes.paper}>
        <section className={classes.nav_top}>
          <Link href="/">
            <p className={classes.logo}>
              <LocalHospitalIcon style={{ color: "#DB162F" }} />
              Dsquare
            </p>
          </Link>
          <article className={classes.icons}>
            <div className={classes.account}>
              {auth ? (
                <Link href="/">
                  <AccountCircleIcon />
                </Link>
              ) : (
                <Link href="/login">
                  <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    startIcon={<LockOpenIcon style={{ fontSize: "14px" }} />}
                    className={classes.login_btn}
                  >
                    Login
                  </Button>
                </Link>
              )}
            </div>
            <div className={classes.cart}>
              <Link href="/cart">
                <Button>
                  <ShoppingCartOutlined style={{ color: "black" }} />
                </Button>
              </Link>
            </div>
          </article>
        </section>
        <section className={classes.search_bar}>
          <Search />
        </section>
      </Paper>
    </div>
  );
};

export default HomeNavBar;
