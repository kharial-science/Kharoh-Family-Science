import React, { Component } from 'react'

import './Header.css'

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="Header">
                <h1>Kharoh Family Science Projects</h1>
                <img src={require('./../assets/favicon.png')} />
            </div>
        )
    }
}

export default Header