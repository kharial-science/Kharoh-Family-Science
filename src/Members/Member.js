import React, { Component } from 'react'

import SeasonBadge from './SeasonBadge'

import './Members.css'

class Member extends Component {

    
    componentDidMount() {
        window.addEventListener("orientationchange", function() {
            console.log('orientation changed')
            window.location.reload()
        });
    }

    render() {

        let seasonArray = []
        this.props.user.seasons.forEach((elt) => {
            seasonArray.push(
                <SeasonBadge seasonName={elt} />
            )
        })

        return (
            <div class="Member" onClick={() => this.props.click(this.props.user.username)}>
                <h1 class="userName">[{this.props.user.rank}]{this.props.user.username}</h1>
                <article class="infos" style={this.props.selected && this.props.user.username == this.props.selected ? {display: "block"} : {display: "none"}}>
                    <img src={this.props.user.logo} class="memberLogo" />
                    <div class="textInfos">
                    Seasons: {seasonArray}<br />
                    {window.innerWidth >= 768 && (window.screen.orientation.type == "landscape-primary" || window.screen.orientation.type == "landscape-secondary") ? <p>Github Profile: <a href={this.props.user.github} target="_blank">{this.props.user.github}</a></p> : <a href={this.props.user.github} target="_blank">Github Profile</a>}
                    </div>
                </article>
    
            </div>
        )
    }
}

export default Member