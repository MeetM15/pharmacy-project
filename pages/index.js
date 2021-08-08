//import Link from 'next/link'
import UploadCard from "../components/uploadCard/UploadCard";
import Layout from "../components/layout/Layout";
import CategoryGrid from "../components/categoryGrid/CategoryGrid";
import BestSeller from "../components/bestSeller/BestSeller";
import TopRated from "../components/topRated/TopRated";
import Footer from "../components/footer/Footer";

export default function IndexPage() {
  return (
    <Layout>
      <UploadCard />
      <CategoryGrid />
      <BestSeller />
      <TopRated />
      <Footer />
    </Layout>
  );
}
