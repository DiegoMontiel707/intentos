import React from 'react';
import './header/header.css';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import NotesIcon from '@mui/icons-material/Notes';
import CleanHandsOutlinedIcon from '@mui/icons-material/CleanHandsOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='contenedor' style={{ background: '#4CAF50' }}>
            <img src="logo.jpg" className="logo" alt="logo" />
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <HomeIcon />
                            <a className="nav-link" href="#" style={{ color: '#cda176' }}>Inicio<span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <LibraryBooksIcon />
                            <a className="nav-link" href="#" style={{ color: '#cda176' }}>Tutoriales</a>
                        </li>
                        <li className="nav-item">
                            <NotesIcon />
                            <a className="nav-link" href="#" style={{ color: '#cda176' }}>Referencia</a>
                        </li>
                        <li className="nav-item">
                            <CleanHandsOutlinedIcon />
                            <a className="nav-link" href="#" style={{ color: '#cda176' }}>Recursos</a>
                        </li>
                        <li className="nav-item">
                            <ConnectWithoutContactOutlinedIcon />
                            <a className="nav-link" href="#" style={{ color: '#cda176' }}>Contacto</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <form className="d-flex" role="search">
                <SearchTwoToneIcon fontSize='large' style={{ color: '#cda176' }} />
                <input className='form-control' type="search" placeholder="Search" style={{ backgroundColor: '#cda176', color: 'black' }} />
                <button className="btn btn-primary" type="submit" style={{ backgroundColor: '#cda176', color: 'black' }}>Search</button>
            </form>
        </div>
    )
}

export default Header;
