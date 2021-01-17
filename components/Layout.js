import { Component } from "react"
import Head from "next/head"
import Menu from "./Menu"
export default class Layout extends Component {
    
    constructor(props) {
        super(props)
    }
    
    render() {

        const head = this.props.head

        const titlePage = head?.title

        return (<div>
            <Head>
                <title> BitzPrice - {titlePage} </title>
                <link href="https://bootswatch.com/4/cerulean/bootstrap.min.css" type="text/css" rel="stylesheet"></link>
            </Head>
            <Menu></Menu>
            <div className="container">
                { this.props.children}
            </div>
            
        </div>)
    }
}