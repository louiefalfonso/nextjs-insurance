import Banner from "@/components/sections/Banner";
import Layout from "@/components/layout/Layout"
import Brand from "@/components/sections/Brand";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <div className="homestyle2">
        <Layout headerStyle={1} footerStyle={1}>
              <Banner/>
              <Brand/> 
              <About/>
              <Services/>  
        </Layout>

    </div>
  );
}
