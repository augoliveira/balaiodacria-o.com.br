import Layout from "../components/Layout";
import Header from "../components/podcast/Header";
import PageHeader from "../components/PageHeader";
import Blog from "../components/Blog";
import Footer from "../components/Footer";


const BlogPage = () => (

    <Layout pageTitle="Zimed | Blog">
        <Header />
        <PageHeader title="Blog" />
        <Blog />
        <Footer />
    </Layout>

)

export default BlogPage;