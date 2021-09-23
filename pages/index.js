import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Homeservice from "../components/Homeservice";
import Depoimento from "../components/Depoimento";
import Faq from "../components/Faq";
import BlogHome from "../components/BlogHome";
import Seo from "../components/Seo";
import Newslettersobre from "../components/Newslettersobre";
import Whatsapp from "../components/Whatsapp";
import Footer from "../components/Footer";
import * as fbq from '../lib/fpixel'

export default function Home() {
    const handleClick = () => {
      fbq.event('Purchase', { currency: 'USD', value: 10 })
    }

    return (

    <Layout pageTitle="Balaio da Criação | Agência especializada em Marketing Digital.">
        <Navbar />
        <Banner />
        <Services />
        <Homeservice />
        <Depoimento />
        <Whatsapp />
        <Faq />
        <BlogHome />
        
        <Seo />
        <Newslettersobre /> 
        
        <Footer />
    </Layout>

)
}
