import React from 'react'
//import { useState, useEffect } from 'react';
//import usuarios from './usuariosRegistrados.json'
import usuarios from './usuariosRegistrados.json'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import LogoutIcon from '@mui/icons-material/Logout';
import Cookie from 'js-cookie';
import Swal from 'sweetalert2'


function UsuariosRegistrados() {

    const cerraSesion = () => {
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
    //const url = './usuariosRegistrados.json';
    //const [usuarios, setUsuarios] = useState([])

    /* useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then((usuarios) => {setUsuarios(usuarios)})
            .catch(error => console.error('Error fetching data:', error));
    }, []) */
    //setUsuarios(usuarios)
    //console.log("Este es usuarios ",usuarios)

    /* 
        function fetchData() {
           const data = './usuariosRegistrados.json'
           setUsuarios(JSON.stringify(data))
           console.log(data.name);
         }
         fetchData() */

    return (
        <div className='container'>
            <div class="position-relative">
                <div className='position-absolute top-0 end-0 w-10 d-flex flex-wrap justify-content-end'>
                    <h4>Bienvenido(a) {Cookie.get('email')}(Admin)</h4>
                    <PersonSharpIcon />
                    <LogoutIcon onClick={cerraSesion} />
                </div>
            </div>
            <h2 className='text-start mt-5'>Usuarios Registrados</h2>
            <table className='table thead-dark mt-5 shadow-lg'>
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Identificación</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Email</th>
                        <th scope="col">Dirección</th>
                        <th scope="col">Teléfono</th>
                        <th scope="col">Fecha de creación</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(user => {
                        return (
                            <tr key={user.id}>
                                <td>{user.identificacion}</td>
                                <td>{user.nombres}</td>
                                <td>{user.apellidos}</td>
                                <td>{user.email}</td>
                                <td>{user.direccion}</td>
                                <td>{user.telefono}</td>
                                <td>{user.fecha_creación}</td>
                                <td>{user.estado}</td>
                                <td><button className='btn btn-primary btn-sm'><BorderColorIcon /></button></td>
                                <td><button className='btn btn-danger btn-sm'><DeleteForeverIcon /></button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );


}

export default UsuariosRegistrados
