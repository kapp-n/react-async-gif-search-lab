import React, { Component } from 'react'

export default class GifSearch extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <input name="search"  type="text" onChange={this.props.handleChange}/>
                    <input type="submit"/>
                </form>
                <hr/>
                <ul>
                <li><img src={this.props.searched}/></li>
                </ul>
            </div>

        )
    }
}
