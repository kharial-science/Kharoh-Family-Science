import React, { Component } from 'react'

import Project from './Project'

import './Projects.css'

class Projects extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const projects = [
      {
        title: 'Map Generator',
        href: 'https://kharohfamily-science.github.io/Map-Generator/',
        image: 'Map-Generator.png'
      },
      {
        title: 'Binary Number Image',
        href: 'https://kharohfamily-science.github.io/Binary-Number-Image/',
        image: 'Binary-Number-Image.png'
      },
      {
          title: "Times Tables",
          href: "https://github.com/kharohfamily-science/Times-Tables",
          image: 'Times-Tables.png'
      },
      {},
      {},
      {}
    ]

    const projectsComponents = []
    let key = 0
    projects.forEach(project => {
      projectsComponents.push(<Project key={key} {...project} style={{ animation: `fadeInFromDownside forwards 3s ${key * 0.15}s ease-out` }} />)
      key++
    })

    return (
      <div id='Projects'>
        {projectsComponents}
      </div>
    )
  }
}

export default Projects
