import React from "react"

class Prices extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            currency:"USD"
        }
    }

    render() {
        return (<div>
            <ul className="list-group">
                <li className="list-group-item">
                    Bitcoin rate for { JSON.stringify(this.props.bpi.bpi.USD.description) }: 
                    <span className="badge badge-primary">{ this.props.bpi.bpi.USD.code}</span>
                    <strong>{ this.props.bpi.bpi.USD.rate}</strong>
                </li>
            </ul>
            Prices : {this.state.currency} { this.props.children} 
        </div>)
    }
}

export default Prices