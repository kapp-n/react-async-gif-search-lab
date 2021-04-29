import React from 'react'


const GifList = (props) => {
    return (
        <div>
            <ul>
                <li><img src={props.gif1}/></li>
                <li><img src={props.gif2}/></li>
                <li><img src={props.gif3}/></li>
            </ul>
        </div>
    )
}

export default GifList