//import Link from 'next/link'
import UploadCard from "../components/uploadCard/UploadCard";
import Layout from "../components/layout/Layout";
import CategoryGrid from "../components/categoryGrid/CategoryGrid";
import BestSeller from "../components/bestSeller/BestSeller";
import TopRated from "../components/topRated/TopRated";
import Footer from "../components/footer/Footer";

const product_url = "https://fakestoreapi.com/products";
//const category_list_url = "https://fakestoreapi.com/products/categories";
const best_sellers_url = "https://fakestoreapi.com/products?limit=8";
const top_rated_url = "https://fakestoreapi.com/products?sort=desc&&limit=8";

export default function IndexPage({ products, bestSellers, topRated }) {
  return (
    <Layout products={products}>
      <UploadCard />
      <CategoryGrid />
      <BestSeller bestSellers={bestSellers} />
      <TopRated topRated={topRated} />
      <Footer />
    </Layout>
  );
}
export const getServerSideProps = async (context) => {
  //products list
  const productRes = await fetch(product_url);
  const products = await productRes.json();
  // //categories list
  // const categoryRes = await fetch(category_list_url);
  // const allCategories = await categoryRes.json();
  //best Sellers list
  const bestSellersRes = await fetch(best_sellers_url);
  const bestSellers = await bestSellersRes.json();
  //Top rated products list
  const topRatedRes = await fetch(top_rated_url);
  const topRated = await topRatedRes.json();
  return {
    props: { products, bestSellers, topRated }
  };
};
