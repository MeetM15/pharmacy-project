//import Link from 'next/link'
import UploadCard from "../components/uploadCard/UploadCard";
import Layout from "../components/layout/Layout";
import CategoryGrid from "../components/categoryGrid/CategoryGrid";

const product_url = "https://fakestoreapi.com/products";
const category_list_url = "https://fakestoreapi.com/products/categories";
export default function IndexPage({ products, allCategories }) {
  return (
    <Layout products={products}>
      <UploadCard />
      <CategoryGrid allCategories={allCategories} />
    </Layout>
  );
}
export const getServerSideProps = async (context) => {
  const productRes = await fetch(product_url);
  const products = await productRes.json();
  const categoryRes = await fetch(category_list_url);
  const allCategories = await categoryRes.json();
  return {
    props: { products, allCategories }
  };
};
