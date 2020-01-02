import React, { Component } from 'react'

import seasonColors from './seasonColors'

class SeasonBadge extends Component {

    render() {
        return (
            <p class="badge" style={{backgroundColor:seasonColors[this.props.seasonName], display:"inline-block", borderRadius: "2vw", margin: "0.5vw", padding: "0.5vw"}}>
                {this.props.seasonName}
            </p>
        )
    }
}

export default SeasonBadge