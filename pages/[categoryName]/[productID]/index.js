import Layout from "../../../components/layout/Layout";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({}));
const ProductList = () => {
  const classes = useStyles();
  const router = useRouter();
  const { productID: productName } = router.query;
  return (
    <Layout>
      <h1>{productName}</h1>
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
