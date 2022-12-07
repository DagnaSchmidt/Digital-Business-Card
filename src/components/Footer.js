import React from "react"
import ReactDOM from "react-dom"
import "../style.css"

export default function Footer() {
    return (
        <footer className="footer">
            <a href="https://github.com/DagnaSchmidt" target="_blank" className="footer__link">
                <i class="fa-brands fa-square-github"></i>
            </a>
            <a href="https://www.instagram.com/b.ardzo/" target="_blank" className="footer__link">
                <i class="fa-brands fa-square-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/dagna-schmidt-90ba37207/" target="_blank" className="footer__link">
                <i class="fa-brands fa-linkedin"></i>
            </a>
        </footer>
    )
}