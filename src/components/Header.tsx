import profile_picture from "./../assets/img/javs-profile-picture.jpg"
import CV from "./../assets/static/CV_JAVS.pdf"

export function Header() {
    return (
        <header className="row bg-black p-4 mb-3 rounded">
            <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
                <img className="img-fluid rounded-circle my-3" src={profile_picture} alt="profile-picture" />
            </div>
            <div className="col-lg-8 col-sm-12 my-auto" id="about_me">
                <h1 className="my_name">Mi nombre es <strong>José Alejandro Vázquez Sánchez</strong></h1>
                <h3 className="text-green position">Fullstack developer</h3>
                <p className="my-4 description">
                    Soy un profesional apasionado por el desarrollo web, enfocado en entregar proyectos altamente competitivos con las mejores prácticas de desarrollo.
                </p>
                <div className="download-cv">
                    <a className="btn btn-primary btn-lg rounded my-3" href={CV} target="_blank">
                        Descargar CV
                    </a>
                </div>
            </div>
        </header>
    );
}

