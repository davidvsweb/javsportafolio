import uniclick from "./../assets/img/uniclick-logo.png"
import asimexico from "./../assets/img/logoasi.png"
import netlogistik from "./../assets/img/netlogistik.jpg"
import grupopromesa from "./../assets/img/logo promesa.jpg"
import react from "./../assets/svg/react.svg"
import angular from "./../assets/svg/angular.svg"
import django from "./../assets/svg/django.svg"
import bootstrap from "./../assets/svg/bootstrap.svg"
import wordpress from "./../assets/svg/wordpress.svg"
import javascript from "./../assets/svg/javascript.svg"
import github from "./../assets/svg/github.svg"
import lit from "./../assets/svg/lit.svg"
import analytics from "./../assets/svg/google-analytics.svg"

const projects = [
    { title: "Uniclick", image: uniclick, url: "https://www.uniclick.com.mx/", description: "Una plataforma digital de productos y servicios financieros comprometidos con el desarrollo sostenible de México", language1: react, language2: lit, language3: angular },
    { title: "Netlogistik", image: netlogistik, url: "", description: "Operaciones de almacenaje, transporte, aprovisionamiento y retail con soluciones de software y hardware", language1: javascript, language2: bootstrap, language3: github },
    { title: "Grupo Promesa", image: grupopromesa, url: "https://grupopromesa.mx/", description: "Grupo PROMESA se dedica a la educación ambiental y el reciclaje en escuelas, empresas y viviendas de México.", language1: wordpress, language2: analytics, language3: django },
    { title: "asimexico", image: asimexico, url: "https://asimexico.org/", description: "Autoestima, Salud e Imagen es una sociedad creada en México sin fines de lucro, que busca ayudar a las personas a tener una imagen corporal positiva", language1: wordpress, language2: analytics, language3: github },
]

export function MyProjects() {
    return (

        <section className="my-5">
            <h3 className="text-center" id="my_projects"><strong>Mis proyectos</strong></h3>
            <p className="text-center m-0 description">Óptimo desempeño en equipo e independiente</p>
            <div className="row my-4 text-center">
                {projects.map(project => <div className="col-md-4 px-4 py-1" key={project.title}>
                    <div className="card bg-black card-project my-3">
                        <img src={project.image} alt={project.title} className="card-img-top" />
                        <div className="card-body">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <a className="btn btn-light rounded btn-sm" target="_blank" href={project.url}>Ver más</a>
                        </div>
                        <div className="card-footer text-muted d-flex justify-content-center mb-3">
                            <img src={project.language1} alt={project.language1} width="40" height="40" />
                            <img className="mx-5" src={project.language2} alt={project.language2} width="40" height="40" />
                            <img src={project.language3} alt={project.language3} width="40" height="40" />
                        </div>
                    </div>
                </div>)}
            </div>
        </section>
    )
}