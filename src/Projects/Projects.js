import React, { Component } from 'react'

import Project from './Project'

import './Projects.css'

class Projects extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="Projects">
                <Project title="Map Generator" href="https://kharohfamily-science.github.io/Map-Generator/" />
                <Project title="Binary Number Image" href="https://github.com/kharohfamily-science/Binary-Number-Image" />
                <Project title="Base Image Convertor" href="https://github.com/kharohfamily-science/Base-Image-Convertor" />
                <Project />
                <Project />
            </div>
        )
    }
}

export default Projects