
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";



export default function Home() {
  return <main className="min-h-screen">
    <Navbar/>
    <Hero/>
    <Programs/>
    <WhyChooseUs/>
    <Testimonials/>
    <Pricing/>
    <Footer/>
   


  </main>;
  
}
