{
    let proyectos = [
        {titulo:'Diseño Blog Personal', descripcion:'Este proyecto es un ejercicio realizado para la asignatuda de Diseño de Interfaces Web donde usabamos por primera vez todo lo aprendido hasta entonces para realizar un posible diseño de un Blog personal. En él no debiamos incluir funcionalidad ni un diseño responsive.',imagen:'../images/Proyecto1.png',enlace:'https://juan-ruedaa.github.io/BlogDIWEB/',enlaceGitHub:'https://github.com/Juan-ruedaa/BlogDIWEB'},
        {titulo:'Diseño Gestor de Notas', descripcion:'Este proyecto es un ejercicio realizado para la asignatuda de Diseño de Interfaces Web donde usabamos por primera vez todo lo aprendido hasta entonces para realizar un posible diseño de un Gestor de Notas. En él no debiamos incluir funcionalidad ni un diseño responsive.',imagen:'../images/Proyecto2.png',enlace:'https://juan-ruedaa.github.io/Practica11_DIWEB/',enlaceGitHub:'https://github.com/Juan-ruedaa/Practica11_DIWEB'},
        {titulo:'Web Casas Rurales', descripcion:'Este proyecto es un ejercicio realizado para la asignatuda de Diseño de Interfaces Web donde usabamos por primera vez todo lo aprendido hasta entonces para realizar un posible diseño de una web dedicada al alquiler de casas rurales. El diseño debía ser responsive y adaptarse a la mayoría de tamaños de pantallas estándates. No era necesario dotar la página de funcionalidad',imagen:'../images/Proyecto3.png',enlace:'https://juan-ruedaa.github.io/Practica12_DIWEB/',enlaceGitHub:'https://github.com/Juan-ruedaa/Practica12_DIWEB'},
        {titulo:'MasterMind con jQuery', descripcion:'Este es un proyecto para la asignatura de Desarrollo en Entorno Cliente donde desarrollamos el juego MasterMind con un diseño propio y usando JavaScript y la librería jQuery.',imagen:'../images/Proyecto4.png',enlace:'https://juan-ruedaa.github.io/MasterMind-jQuery-UI/',enlaceGitHub:'https://github.com/Juan-ruedaa/MasterMind-jQuery-UI'}]
 

    let init = function(){
        let botonMenu = document.getElementById("botonMenu");
        let menuLateral = document.getElementById("menuLateral");
        let background_shadow = document.getElementById("background_shadow");
        let botonCancelar = document.getElementById("botonCancelar");
        let verMas = document.getElementsByClassName("enlaceVerMas");
        let detallesProyecto = document.getElementById("detallesProyecto");
        let titulo = document.getElementById("titulo");
        let informacion = document.getElementById("informacion");
        let imagenProyecto = document.getElementById("imagenProyecto");
        let enlace = document.getElementById("enlace");
        let enlaceGit = document.getElementById("enlaceGit");
        let botonSalir = document.getElementById("botonSalir");

        let desplegarMenu = function(){
            menuLateral.style.left = "0%";
            background_shadow.style.opacity = "0.5";
            background_shadow.style.visibility = "visible";
        }

        let cerrarDesplegarMenu = function(){
            menuLateral.style.left = "-100%";
            background_shadow.style.opacity = "0";
            background_shadow.style.visibility = "hidden";
        }
        
        let abrirDetallesProyecto = function(){
            detallesProyecto.style.transform = "scale(1,1)";
            background_shadow.style.opacity = "0.5";
            background_shadow.style.visibility = "visible";
        }

        let cerrarDetallesProyecto = function(){
            detallesProyecto.style.transform = "scale(0,0)";
            background_shadow.style.opacity = "0";
            background_shadow.style.visibility = "hidden";
        }

        let rellenarVerMas = function(){
            let idVerMas = this.getAttribute('data-idlista');
            let proyecto = proyectos[idVerMas];
            titulo.innerHTML = proyecto.titulo;
            informacion.innerHTML = proyecto.descripcion;
            imagenProyecto.setAttribute("src",proyecto.imagen);
            enlace.setAttribute("href",proyecto.enlace);
            enlaceGit.setAttribute("href",proyecto.enlaceGitHub);
            abrirDetallesProyecto();
        }    


        botonMenu.addEventListener("click", desplegarMenu);
        botonCancelar.addEventListener("click", cerrarDesplegarMenu);
        botonSalir.addEventListener("click", cerrarDetallesProyecto)
        for(let i=0; i<verMas.length; i++){
            verMas[i].addEventListener("click", rellenarVerMas)
        }
    
        }
    window.onload = init;
}