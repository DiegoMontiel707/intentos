import React, { useEffect } from 'react'
import CardList from './body/CardList';
//import Header from './header/Header'
import Footer from './footer/Footer';
import Carrusel from './Carrusel/Carrusel';
import Cookie from 'js-cookie';
import Swal from 'sweetalert2'
//import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import LogoutIcon from '@mui/icons-material/Logout';
import usuario from './usuario.gif'
import './inicioSesionIniciada.css'
import HeaderInicioSesion from './HeaderInicioSesion'

function InicioSesionIniciada() {
    const cerrarSesion = () => {
        Swal.fire({
            title: "¿Está seguro que desea cerrar la sesión?",
            icon: "question",
            buttons: true,
            dangerMode: true,
            showCancelButton: true,
        })
            .then((result) => {
                if (result.isConfirmed) {
                    Cookie.remove('email', { path: "/" })
                    window.location.hash = '/login'
                }
            })
    }
    //Si no se está logueado y en la barra de direcciones digitan /sesion entonces redirige al login
    useEffect(() => {
        if (!Cookie.get('email')) {
            window.location.hash = '/login'
        }
    })
    return (
        <div>
            <div className='sesion'>
                <div ><h4 >Bienvenido(a) {Cookie.get('email')}</h4></div>
                {/* <PersonSharpIcon /> */}
                <div className='imagen'><img src={usuario} alt="usuario" /></div>
                {/* <button onClick={cerraSesion}>Cerrar sesión</button> */}
                <div className='logout'><LogoutIcon onClick={cerrarSesion} /></div>
            </div>
            <HeaderInicioSesion />
            <Carrusel />
            <CardList />
            <Footer />
        </div>
    )
}

export default InicioSesionIniciada