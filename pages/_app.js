import Layout from "./layout";
import "../styles/globals.css"

const myApp = ({Component, pageProps}) => {
    return (  
        <Layout>
        <Component {...pageProps} />
        </Layout>
    );
}
 
export default myApp;