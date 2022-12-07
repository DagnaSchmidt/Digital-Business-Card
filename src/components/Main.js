import React from "react"
import ReactDOM from "react-dom"
import "../style.css"
import ButtonLinkedIn from "./Buttons"

export default function Main() {
    return (
        <div className="main">
            <img src={require('../images/profile.jpg')} className="main__img" alt="my profile photography" />
            <section className="main__container">
                <div className="main__titles">
                    <h1 className="main__titles__name">Dagna Schmidt</h1>
                    <h3 className="main__titles__profession">Frontend Developer</h3>
                    <p className="main__titles__website">dagna-schmidt.netlify.app</p>
                </div>
                <div className="main__btns">
                    <ButtonLinkedIn />
                </div>
                <div className="main__texts">
                    <div className="main__texts__item">
                        <h4 className="main__texts__item__title">About</h4>
                        <p className="main__texts__item__text">
                            Junior Web Developer located in Goteborg, Sweden, 
                            experienced in Interior Design, Jewelry Design and as a Dental Technician.
                        </p>
                    </div>
                    <div className="main__texts__item">
                        <h4 className="main__texts__item__title">Interests</h4>
                        <p className="main__texts__item__text">UI design, Typography, Analog Photography, Sports (powerlifting)</p>
                    </div>
                    <div className="main__texts__item">
                        <h4 className="main__texts__item__title">Skills</h4>
                        <p className="main__texts__item__text">HTML, CSS, SASS, JavaScript, React, GIT, GitHub, Figma, UI design</p>
                    </div>
                </div>
            </section>
        </div>
    )
}