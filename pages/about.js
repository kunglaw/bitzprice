import { Component } from "react"
import Layout from "../components/Layout"

export default class About extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            pageHead:{}
        }
    }

    componentDidMount() {
        this.setState({
            pageHead:{
                title:"About"
            }
        })
    }

    render() {

        return (<Layout
            head={this.state.pageHead}
        >
            <h1>About Page</h1>
           
            <p> Application to view Bitcoin Price </p>
        </Layout>)
    }
}