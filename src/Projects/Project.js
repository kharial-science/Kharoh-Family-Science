import React, { Component } from 'react'

class Project extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <a href={this.props.href}>
                <div className="Project">
                    <h2>{this.props.title}</h2>
                </div>
            </a>
        )
    }
}

export default Project