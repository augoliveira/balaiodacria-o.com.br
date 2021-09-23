import Layout from "../components/Layout";
import Header from "../components/podcast/Header";
import PageHeader from "../components/PageHeader";
import Podcast from "../components/podcast/Podcast";
import Footer from "../components/Footer";


const podcast = () => (

    <Layout pageTitle="Balaio | podcast">
        <Header />
        <PageHeader title="podcast" />
        <Podcast />
        
        <Footer />
    </Layout>

)

export default podcast;