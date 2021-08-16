import Layout from "../../components/layout/Layout";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import { Products } from "../../data/products/Products";
import AddShoppingCartRoundedIcon from "@material-ui/icons/AddShoppingCartRounded";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "10px",
    marginBottom: "80px"
  },
  paper: {
    padding: "5px",
    display: "flex",
    alignItems: "Center",
    textAlign: "center",
    justifyContent: "flex-start",
    fontSize: "clamp(16px,2vw,24px)",
    fontWeight: "500",
    height: "100%",
    width: "100%",
    cursor: "pointer",
    borderRadius: "0px",
    position: "relative",
    "& img": {
      maxWidth: "120px"
    }
  },
  heading: {
    margin: "0",
    padding: "15px",
    width: "100%",
    fontSize: "clamp(14px,5vw,28px)",
    fontWeight: "bold"
  },
  content: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "100%",
    height: "100%",
    padding: "25px 15px 25px 5px",
    "& p": {
      margin: "0"
    }
  },
  name: {
    display: "flex",
    alignItems: "Center",
    fontSize: "clamp(12px,4.5vw,24px)",
    fontWeight: "bold"
  },
  price: {
    display: "flex",
    alignItems: "Center",
    fontSize: "clamp(12px,4vw,24px)"
  },
  mrp_wrap: {
    display: "flex",
    alignItems: "Center",
    justifyContent: "space-between",
    fontSize: "clamp(12px,4vw,24px)",
    color: "grey"
  },
  mrp: {
    display: "flex",
    alignItems: "Center",
    padding: "0px 5px",
    textDecoration: "line-through",
    fontSize: "clamp(12px,4vw,24px)"
  },
  offer_wrap: {
    display: "flex",
    alignItems: "Center",
    justifyContent: "space-between",
    fontSize: "clamp(12px,4vw,24px)"
  },
  comp: {
    display: "flex",
    alignItems: "Center",
    fontSize: "clamp(12px,4vw,24px)"
  },
  offer_badge: {
    position: "absolute",
    display: "flex",
    alignItems: "Center",
    justifyContent: "center",
    right: 0,
    top: "6px",
    backgroundColor: "#289628",
    fontSize: "clamp(12px,3.5vw,24px)",
    width: "80px",
    height: "24px",
    padding: "5px"
  },
  add_cart: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    height: "100%"
  },
  add_btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "24px",
    fontSize: "clamp(12px,3.5vw,24px)"
  },
  add_icon: {
    fontSize: "clamp(18px,6vw,28px)"
  }
}));
const offer = (price, mrp) => {
  const offerPrice = (((parseInt(mrp) - parseInt(price)) / parseInt(mrp)) * 100)
    .toString()
    .slice(0, 4);
  return offerPrice + "%";
};
const ProductList = () => {
  const classes = useStyles();
  const router = useRouter();
  const { categoryName: category } = router.query;
  return (
    <Layout>
      <p className={classes.heading}>{category}</p>
      <div className={classes.root}>
        <Grid container spacing={0}>
          {Products.map((product, index) => {
            return (
              <Link
                key={index}
                href={{
                  pathname: `/${category}/${product.name}`,
                  query: {
                    categoryName: `${category}`,
                    productID: `${product.name}`
                  }
                }}
              >
                <Grid item xs={12} sm={6} md={4}>
                  <Paper className={classes.paper}>
                    <span className={classes.offer_badge}>
                      {offer(product.price, product.mrp)} OFF
                    </span>
                    <span className={classes.image}>
                      <img src={product.img} alt={product.name} />
                    </span>
                    <span className={classes.content}>
                      <p className={classes.name}>
                        {product.name.slice(0, 20)}
                      </p>
                      <p className={classes.price}>
                        {`Best Price : ${product.price} `}&#8377;
                      </p>
                      <p className={classes.mrp_wrap}>
                        MRP :
                        <p className={classes.mrp}> {product.mrp} &#8377;</p>
                      </p>
                      <p className={classes.comp}>{product.comp}</p>
                    </span>
                    <span className={classes.add_cart}>
                      <Button
                        variant="contained"
                        component="span"
                        size="small"
                        color="primary"
                        className={classes.add_btn}
                      >
                        <AddShoppingCartRoundedIcon
                          className={classes.add_icon}
                        />
                      </Button>
                    </span>
                  </Paper>
                </Grid>
              </Link>
            );
          })}
        </Grid>
      </div>
    </Layout>
  );
};
export default ProductList;
// export const getServerSideProps = async (context) => {
//   const res = await fetch("../../data/products/Products");
//   const products = await res.json();
//   return {
//     props: {
//       products
//     }
//   };
// };
