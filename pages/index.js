import UploadCard from "../components/uploadCard/UploadCard";
import Layout from "../components/layout/Layout";
import CategoryGrid from "../components/categoryGrid/CategoryGrid";
import BestSeller from "../components/bestSeller/BestSeller";
import TopRated from "../components/topRated/TopRated";
import Footer from "../components/footer/Footer";
import Banner from "../components/banner/Banner";

export default function IndexPage() {
  return (
    <Layout>
      {/* <Banner /> */}
      <UploadCard />
      <CategoryGrid />
      <BestSeller />
      <TopRated />
      <Footer />
    </Layout>
  );
}
