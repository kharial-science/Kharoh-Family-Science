import React, { Component } from 'react'

import memberList from './memberList'
import Member from './Member'

class Members extends Component {

    constructor() {
        super()
        this.state = {
            selected: undefined
        }

        this.handleMemberClick = this.handleMemberClick.bind(this)
    }

    handleMemberClick(userSelected) {
        this.state.selected != userSelected ? this.setState({selected: userSelected}) : this.setState({selected: undefined})
    }

    render() {
        let memberArray = []
        memberList.forEach((elt) => {
            memberArray.push(
                <Member user={elt} selected={this.state.selected} click={this.handleMemberClick} />
            )
        })

        return (
            <div class="Members">
                {memberArray}
            </div>
        )
    }
}

export default Members