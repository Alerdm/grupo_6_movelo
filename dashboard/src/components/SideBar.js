import React from 'react';
import  { Link } from 'react-router-dom'

import image from '../assets/images/icono-white.png';
import fondo from '../assets/images/Path 230.svg'

function SideBar(){
    return(
        <>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" style={{ backgroundImage: `url(${fondo})`  }} id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to={"/"}>
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to={"/"}>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - Movelo</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to={"/servicios/todos"}>
                        <i className="fas fa-fw fa-box-open"></i>
                        <span>Servicios</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/lista-de-usuarios">
                        <i className="fas fa-fw fa-user"></i>
                        <span>Usuarios</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/nosotros"}>
                        <i className="fas fa-fw fa-users"></i>
                        <span>Nosotros</span></Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href='http://localhost:3001/'>
                        <i className="fas fa-fw fa-link"></i>
                        <span>Web alternativa</span></a>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
        </>
    )
}
export default SideBar;