import Banner from "@/components/sections/Banner";
import Layout from "../components/layout/Layout"

export default function Home() {
  return (
    <>
            <Layout headerStyle={1} footerStyle={1}>
              <Banner/>    
            </Layout>

        </>
  );
}
