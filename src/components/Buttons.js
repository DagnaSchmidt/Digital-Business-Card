import React from "react"
import ReactDOM from "react-dom"
import "../style.css"

export default function ButtonLinkedIn() {
    return (
        <a href="https://www.linkedin.com/in/dagna-schmidt-90ba37207/">
            <button className="btn">
                <i class="fa-brands fa-linkedin"></i>
                <p className="btn__name">LinkedIn</p>
            </button>
        </a>
    )
}