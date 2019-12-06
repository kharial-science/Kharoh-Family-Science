import React, { Component } from 'react'

import Project from './Project'

import './Projects.css'

class Projects extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        const projects = [
            {
                title: "Map Generator",
                href: "https://kharohfamily-science.github.io/Map-Generator/",
                image: "Map-Generator.png"
            },
            {
                title: "Binary Number Image",
                href: "https://github.com/kharohfamily-science/Binary-Number-Image",
                image: "Binary-Number-Image.png"
            },
            {
                title: "Base Image Convertor",
                href: "https://github.com/kharohfamily-science/Base-Image-Convertor"
            },
            {

            },
            {

            },
        ]

        const projectsComponents = []
        let key = 0
        projects.forEach(project => {
            projectsComponents.push(<Project key={key} {...project} style={{animation:`fadeInFromDownside forwards 3s ${key*0.15}s ease-out`}} />)
            key++
        })


        return (
            <div id="Projects">
                {projectsComponents}
            </div>
        )
    }
}

export default Projects