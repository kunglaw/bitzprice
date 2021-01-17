import Layout from "../components/Layout"
import Fetch from "isomorphic-unfetch"

import Prices from "./../components/Prices"

const title = "Home"

const Index  = (props) => (
    <Layout
        head={{"title":title}}
    >
        <h1> Welcome to BitzPrice</h1>
        <Prices bpi={props.bpi}>{ props.bpi.time.updated}</Prices>
    </Layout>
)

Index.getInitialProps = async function () {
    const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    const data = await res.json();

    return {
        bpi:data
    }
}

export default Index