import React, { useState, useEffect } from 'react';
import './header.css';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import NotesIcon from '@mui/icons-material/Notes';
import CleanHandsOutlinedIcon from '@mui/icons-material/CleanHandsOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import SettingsIcon from '@mui/icons-material/Settings';
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

function Header() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [showCart, setShowCart] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible]);

    const toggleCart = () => {
        setShowCart(!showCart);
    }

    return (
        <div className={`contenedor ${visible ? '' : 'navbar-hidden'}`} style={{ background: '#9CCC65' }}>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand">
                        <img src="header.png" className="logo" alt="logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link" style={{ color: '#cda176' }}>
                                    <HomeIcon /> Inicio
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/tutoriales' className="nav-link" style={{ color: '#cda176' }}>
                                    <LibraryBooksIcon /> Tutoriales
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/referencia' className="nav-link" style={{ color: '#cda176' }}>
                                    <NotesIcon /> Referencia
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle" id="ventasDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: '#cda176' }}>
                                    Ventas
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="ventasDropdown">
                                    <li><Link to='/telefonos-moviles' className="dropdown-item" style={{ color: '#cda176' }}>Teléfonos móviles</Link></li>
                                    <li><Link to='/computadoras-portatiles' className="dropdown-item" style={{ color: '#cda176' }}>Computadoras y portátiles</Link></li>
                                    <li><Link to='/electronica-consumo' className="dropdown-item" style={{ color: '#cda176' }}>Electrónica de consumo</Link></li>
                                    <li><Link to='/electrodomesticos' className="dropdown-item" style={{ color: '#cda176' }}>Electrodomésticos</Link></li>
                                    <li><Link to='/accesorios-electronicos' className="dropdown-item" style={{ color: '#cda176' }}>Accesorios electrónicos</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex justify-content-center align-items-center mx-auto">
                            <SearchTwoToneIcon fontSize='large' style={{ color: '#cda176' }} />
                            <input className='form-control' type="search" placeholder="Buscar" style={{ backgroundColor: '#cda176', color: 'black' }} />
                            <button className="btn btn-primary" type="submit" style={{ backgroundColor: '#cda176', color: 'black' }}>Buscar</button>
                        </form>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <div className="nav-link" onClick={toggleCart}>
                                    <ShoppingCartOutlinedIcon fontSize='large' style={{ color: 'white', marginRight: '5px' }} />
                                    Compras
                                </div>
                            </li>
                            {showCart && (
                                <div className="cart-container">
                                    <p>Contenido del carrito...</p>
                                </div>
                            )}
                            <li className="nav-item">
                                <Link to='/recursos' className="nav-link" style={{ color: '#cda176' }}>
                                    <CleanHandsOutlinedIcon /> Recursos
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contacto' className="nav-link" style={{ color: '#cda176' }}>
                                    <ConnectWithoutContactOutlinedIcon /> Contacto
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: '#cda176' }}>
                                    <SettingsIcon /> Configuración
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <li><Link to='/registro' className="dropdown-item" style={{ color: '#cda176' }}><HowToRegOutlinedIcon /> Registrarse</Link></li>
                                    <li><Link to='/login' className="dropdown-item" style={{ color: '#cda176' }}><LoginIcon /> Iniciar sesión</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;
