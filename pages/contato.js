import Layout from "../components/Layout";
import Header from "../components/podcast/Header";
import PageHeader from "../components/PageHeader";
import GoogleMap from "../components/google-map";
import Contactform from "../components/Contactform";
import ContactInfos from "../components/Contactinfos";
import Footer from "../components/Footer";


const contato = () => {
    return (
    <Layout pageTitle="Balaio | Contato">
        <Header />
        <PageHeader title="Contato" />
        <Contactform />
        <ContactInfos />
        <GoogleMap extraClass="contact-page" />
        
        <Footer />
    </Layout>
    );
 };

export default contato;