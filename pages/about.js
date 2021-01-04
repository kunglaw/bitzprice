import { Component } from "react"
import Menu from "../components/Menu"

export default class About extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<div>
            <h1>About Page</h1>
            <Menu></Menu>
            <p> Application to view Bitcoin Price </p>
        </div>)
    }
}