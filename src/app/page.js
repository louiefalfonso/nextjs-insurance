import Banner from "@/components/sections/Banner";
import Layout from "@/components/layout/Layout";
import Brand from "@/components/sections/Brand";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Funfacts from "@/components/sections/Funfacts";
import Portfolio from "@/components/sections/Portfolio";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Quote from "@/components/sections/Quote";
import Blog from "@/components/sections/Blog ";
import Cta from "@/components/sections/Cta";

export default function Home() {
  return (
    <div className="homestyle2">
      <Layout headerStyle={1} footerStyle={1}>
        <Banner />
        <Brand />
        <About />
        <Services />
        <Funfacts />
        <Portfolio />
        <WhyChooseUs />
        <Quote />
        <Blog />
        <Cta />
      </Layout>
    </div>
  );
}
