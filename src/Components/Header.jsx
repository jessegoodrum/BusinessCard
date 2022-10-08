import React from "react";

function LinkedIn(){
   return window.location.href = 'http://www.linkedin.com/in/jessegoodrum/'
}

function Email(){
    return window.location.href = 'mailto:jessegoodrum@me.com'
 }


export default function Header(){
    return (
        <div  className="heading__container">
        <img src="/JesseGoodrum.JPG" alt="Jesse Smiling" className="heading__img"/>
        <h1 className="name">Jesse Goodrum</h1>
        <h5 className="sub__heading">Full Stack Developer</h5>
        <a href="#" className="heading__link">jessegoodrum.com</a>
        <div className="buttons">
        <button onClick={Email} className="email__button">
        <i className="fa-solid fa-envelope"></i> Email 
        </button>
        <button onClick={LinkedIn} className="linkedin__button"><i className="fa-brands fa-linkedin"></i> LinkedIn </button>
        </div>
        </div>
    )
};