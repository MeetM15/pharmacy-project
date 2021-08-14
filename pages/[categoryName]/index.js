import Layout from "../../components/layout/Layout";
import { useRouter } from "next/router";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";

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
    flexDirection: "column",
    alignItems: "Center",
    textAlign: "center",
    justifyContent: "center",
    fontSize: "clamp(16px,2vw,24px)",
    fontWeight: "500",
    height: "100%",
    width: "100%",
    cursor: "pointer",
    borderRadius: "0px",
    "& span": {
      margin: "5px",
      "& img": {
        maxWidth: "120px"
      }
    }
  }
}));
const ProductList = ({ products }) => {
  const classes = useStyles();
  const router = useRouter();
  const { categoryName: category } = router.query;
  return (
    <Layout>
      <h1>{category}</h1>
      <div className={classes.root}>
        <Grid container spacing={0}>
          {products.map((product, index) => {
            return (
              <Link
                key={index}
                href={{
                  pathname: `/${product.id}`,
                  query: { categoryName: `${product.id}` }
                }}
              >
                <Grid item xs={6} sm={3} md={2}>
                  <Paper className={classes.paper}>
                    <span>
                      <Image
                        src={product.image}
                        alt={product.title}
                        width="100px"
                        height="200px"
                      />
                    </span>
                    {product.title.slice(0, 20)}
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

export const getServerSideProps = async (context) => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return {
    props: {
      products
    }
  };
};
