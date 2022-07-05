import React from 'react'
import './card.css'
const Card = (props) => {
    return (
        <div class="card">
            <div class="card-img"></div>
            <div class="card-info">
                <p class="text-title">{props.username} </p>
                <p class="text-body">{props.title}</p>
            </div>
        </div>
    )
}

export default Card