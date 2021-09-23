import Layout from "../components/Layout";
import Header from "../components/podcast/Header";
import Produtos from "../components/Produtos/Soluções";
import ContactForm from "../components/Contactform";
import Footer from "../components/Footer";


const produtos = () => (

    <Layout pageTitle="Balaio | Produtos">
        <Header />
        <Produtos />
        <ContactForm />
        <Footer />
    </Layout>

)

export default produtos;