import React from 'react';

function Footer() {
    return (
        <footer className="text-center text-lg-start" style={{background: '#4CAF50'}}>
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom text-dark">

                <div className="me-5 d-none d-lg-block">
                    <span>¡Conéctate con nosotros en nuestras redes sociales!</span>
                </div>

                <div>
                    <a href="#" className="me-4 text-dark">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" className="me-4 text-dark">
                        <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#" className="me-4 text-dark">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#" className="me-4 text-dark">
                        <i className="bi bi-linkedin"></i>
                    </a>
                </div>
            </section>

            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4 text-dark">
                                Acerca de nuestra tienda de café
                            </h6>
                            <p  className="text-dark" >
                                Somos una tienda apasionada por el café, ofreciendo una amplia variedad de productos de alta calidad. Descubre nuestro mundo de sabores y aromas únicos.
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4 text-dark">
                                Productos destacados
                            </h6>
                            <p>
                                <a href="#" className="text-dark">Café en grano</a>
                            </p>
                            <p>
                                <a href="#" className="text-dark">Café molido</a>
                            </p>
                            <p>
                                <a href="#" className="text-dark">Cápsulas de café</a>
                            </p>
                            <p>
                                <a href="#" className="text-dark">Máquinas de café</a>
                            </p>
                            <p>
                                <a href="#" className="text-dark">Accesorios para café</a>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4 text-dark">
                            <h6 className="text-uppercase fw-bold mb-4 text-dark">
                                Contacto
                            </h6>
                            <p className="text-dark"><i className="fas fa-home me-3"></i> Dirección de nuestra tienda, Ciudad, País</p>
                            
                            <p  className="text-dark" >
                                <i className="fas fa-envelope me-3"></i>
                                info@nuestratiendadecafe.com
                            </p>
                            <p  className="text-dark"><i className="fas fa-phone me-3 "></i> +00 123 456 789</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center p-4 text-dark">
                © {new Date().getFullYear()} Nuestra Tienda de Café. Todos los derechos reservados.
            </div>
        </footer>
    );
}

export default Footer;
