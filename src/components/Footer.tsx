import right_arrow_footer from "./../assets/svg/right_arrow_footer.svg"
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export function Footer() {
    return (
        <footer className="bg-black p-5" id="contacto">
            <div className="row">
                <div className="col-lg-4 col-sm-12 my-3 pr-2">
                    <h5 className="text-center mb-3">Contacto</h5>
                    <p className="d-block">Teléfono:
                        <a href="tel:5534062104" className="text-green font-weight-bold"> 55 3406 2104</a>
                    </p>
                    <p className="d-block">Correo Electrónico: <a href="mailto: ipn.javs@gmail"
                        className="text-green font-weight-bold">ipn.javs@gmail.com</a></p>
                    <p className="d-block">Página de internet: <a href="https://portafolio-javs-production.up.railway.app/"
                        className="text-green font-weight-bold">portafolio-javs.app</a>
                    </p>
                </div>
                <div className="col-lg-4 col-sm-12 my-3">
                    <h5 className="text-center mb-3">Navegación</h5>
                    <div className="row">
                        <div className="col-6">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <p className="d-flex pointer">
                                        <img src={right_arrow_footer} alt="right-arrow-footer"
                                            className="mr-2" />
                                        <span className="text-underline">
                                            <a className="nav-link text-white" href="/#about_me">Presentación</a>
                                        </span>
                                    </p>
                                </li>
                                <li className="nav-item">
                                    <p className="d-flex pointer">
                                        <img src={right_arrow_footer} alt="right-arrow-footer"
                                            className="mr-2" />
                                        <span className="text-underline">
                                            <a className="nav-link text-white" href="/#my_projects">Mis proyectos</a>
                                        </span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12 my-3">
                    <h5 className="text-center mb-3">Redes sociales</h5>
                    <div className="d-flex justify-content-center">
                        <a href="https://www.linkedin.com/me?trk=p_mwlite_feed_updates-secondary_nav" style={{ color: 'white' }} target="_blank">
                            <LinkedInIcon sx={{ fontSize: '40px' }} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

