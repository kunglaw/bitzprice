import { Component } from "react"
import Link from "next/link"

export default class Menu extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
        <div>
            <ul>
                <li><Link href="/"> Home </Link></li>
                <li><Link href="/about"> About </Link></li>
            </ul>
            <style jsx>{`
                ul {
                    background:grey;
                    color:#fff;
                    list-style:none;
                    display:flex;
                    height:50px;
                    line-height:50px;
                }

                ul li {
                    font-size: 18px;
                    margin-right: 20px;
                    color:#fff;
                    text-decoration:none;
                }

                ul li a {
                    
                }

            `}</style>
        </div>
        )
    }
}