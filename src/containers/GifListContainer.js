import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


const URL = 'https://api.giphy.com/v1/gifs/search?q='
const APIKey = '&api_key=dc6zaTOxFJmzC&rating=g'

export default class GifListContainer extends Component {

    state = {
        gifs: [],
        search: '',
        searched: []
    }

    componentDidMount(){
        fetch('https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
        .then(res => res.json())
        .then(data => {
            const three = data.data.slice(0,3)
            console.log(data,three)
            this.setState({
                gif1: three[0].images.original.url,
                gif2: three[1].images.original.url,
                gif3: three[2].images.original.url
            })
        })
    }

    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })

    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('submit')
        fetch(URL + `${this.state.search}` + APIKey)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                searched: data.data[0].images.original.url
            })
        })
    }




    render() {
        return (
            <div>
                <GifList gif1={this.state.gif1} gif2={this.state.gif2} gif3={this.state.gif3} />
                <hr/>
                <GifSearch handleSubmit={this.handleSubmit} handleChange={this.handleChange} searched={this.state.searched} />
            </div>
        )
    }
}
