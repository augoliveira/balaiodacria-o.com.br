import Layout from "../components/Layout";
import Header from "../components/podcast/Header";
import PageHeader from "../components/PageHeader";
import Sobre from "../components/Sobre";
import Missão from "../components/Missão";
import Nossotime from "../components/Nossotime";
import Manifesto from "../components/Manifesto";
import NossosClientes from "../components/NossosClientes";
import Newslettersobre from "../components/Newslettersobre";
import Footer from "../components/Footer";


const sobre = () => (

    <Layout pageTitle="Balaio | Quem Somos">
        <Header />
        <PageHeader title="Quem somos" />
        <Sobre />
        <Missão /> 
        <Nossotime />
        <Manifesto />
        <NossosClientes />
        <Newslettersobre />
        <Footer />
    </Layout>

)

export default sobre;