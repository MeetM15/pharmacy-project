import Layout from "../../components/layout/Layout";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";
import { Products } from "../../data/products/Products";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "10px",
    marginBottom: "80px",
    backgroundColor: "#F3F3F3"
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
    "& img": {
      maxWidth: "160px"
    }
  },
  heading: {
    margin: "0",
    backgroundColor: "#F3F3F3",
    padding: "20px",
    width: "100%",
    fontSize: "20px",
    fontWeight: "bold"
  }
}));
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
                  pathname: `/${product.id}`,
                  query: { categoryName: `${product.id}` }
                }}
              >
                <Grid item xs={12} sm={6} md={4}>
                  <Paper className={classes.paper}>
                    <span className={classes.image}>
                      <img src={product.img} alt={product.name} />
                    </span>
                    <span className={classes.content}>
                      {product.name.slice(0, 20)}
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
