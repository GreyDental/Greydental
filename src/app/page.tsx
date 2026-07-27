import MainHero from "@/components/MainHero";
import AboutUs from "@/components/AboutUs";
import Categories from "@/components/Categories";
import Featured from "@/components/Featured";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      <MainHero />
      <AboutUs />
      <Categories />
      <Featured />
      <Team />
      <FAQ />
      <Testimonials />
      <Newsletter />
    </>
  );
}
