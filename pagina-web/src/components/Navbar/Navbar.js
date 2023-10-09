import React from "react"
import "./Navbar.css"

const Navbar =()=>{

    return(
    <section className="navbar">
        <section className="nav_logo">
       
        </section>
        <section className="nav_items">
            <li><a href="https://www.ejemplo.com/" target="_blank" without rel="noreferrer">INICIO</a></li>            
            <li><a href="https://www.ejemplo.com/" target="_blank" without rel="noreferrer">PRODUCTOS</a>
                <ul>
                    <li><a href="https://www.ejemplo.com/" target="_blank" without rel="noreferrer">Prefumeria</a></li>
                    <li><a href="https://www.ejemplo.com/" target="_blank" without rel="noreferrer">Bisuteria</a></li>
                    <li><a href="https://www.ejemplo.com/" target="_blank" without rel="noreferrer">Velas</a></li>
                    <li><a href="https://www.ejemplo.com/" target="_blank" without rel="noreferrer">Aseo Hogar</a></li>
                </ul>
            </li>            
            <li> <a href="https://www.ejemplo.com/" target="_blank" without rel="noreferrer">CURSOS</a></li>           
            <li><a href="https://www.ejemplo.com/" target="_blank" without rel="noreferrer">CONTACTENOS</a></li>            
            <li> <a href="https://www.ejemplo.com/" target="_blank" without rel="noreferrer">ALIADOS</a>
            <ul>
                    <li><a href="https://www.arti-mana.com/"target="_blank" without rel="noreferrer">Artimaña</a></li>
                    <li><a href="https://www.ejemplo.com/" target="_blank" without rel="noreferrer">Empresa de Juan </a></li>
                    <li><a href="https://www.ejemplo.com/" target="_blank" without rel="noreferrer">Empresa de mauricio</a></li>
                    <li><a href="https://www.ejemplo.com/" target="_blank" without rel="noreferrer">Empresa de Camila</a></li>
                </ul></li>           
          
        </section>
        <section className="toggle">
            <span></span>
            <span></span>
            <span></span>
        </section>
    </section>

    )
}
export default Navbar