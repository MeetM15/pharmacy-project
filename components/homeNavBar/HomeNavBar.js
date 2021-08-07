import { useState } from "react";
import css from "./homenav.module.scss";
import Link from "next/link";
import { Button, Paper } from "@material-ui/core";
import { AccountCircleIcon } from "@material-ui/icons";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import { ShoppingCartOutlined } from "@material-ui/icons";
import Search from "../search/Search";

const HomeNavBar = ({ products }) => {
  const [auth, setAuth] = useState(false);
  return (
    <div className={css.nav_container}>
      <Paper elevation={1}>
        <section className={css.nav_top}>
          <Link href="/">
            <p className={css.logo}>
              <LocalHospitalIcon style={{ color: "#DB162F" }} />
              MedMart
            </p>
          </Link>
          <article className={css.icons}>
            <div className={css.account}>
              {auth ? (
                <AccountCircleIcon />
              ) : (
                <Button
                  variant="contained"
                  size="small"
                  style={{
                    backgroundColor: "#24AEB1",
                    color: "WHITE"
                  }}
                >
                  Login
                </Button>
              )}
            </div>
            <div className={css.cart}>
              <Button>
                <ShoppingCartOutlined style={{ color: "black" }} />
              </Button>
            </div>
          </article>
        </section>
        <section className={css.search_bar}>
          <Search products={products} />
        </section>
      </Paper>
    </div>
  );
};

export default HomeNavBar;
