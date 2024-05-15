function crearNav(containerNav){
    const navBar = document.createElement("section");
        navBar.innerHTML = `
        <section id="Inicio">
        <div class="contenido">
            <header>
                <div class="contenido-header">
                    <h1>/LE/</h1>
                    <nav id="nav" class="">
                        <ul>
                            <li><a href="#Inicio" class="seleccionado" onclick="seleccionar(this)">INICIO</a></li>
                            <li><a href="#sobremi" onclick="seleccionar(this) ">SOBRE MI</a></li>
                            <li><a href="#servicios" onclick="seleccionar(this) ">SERVICIOS</a>
                            </li>
                            <li><a href="contacto.html">CONTACTO<a></li>
                        </ul>
                    </nav>
                    <!--ICONOS DEL MENÚ RESPONSIVE-->
                    <div id="icono-nav" onclick="responsiveMenu()">
                        <i class="fa-solid fa-bars"></i> 
                    </div>
                    <!--ICONOS REDES SOCIALES-->
                    <div class="redes">
                        <a href="#"><i class="fa-brands fa-youtube"></i></a>
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
            </header>
            <div class="presentacion">
                <p class="bienvenida">Bienvenidos</p>
                <h2>Soy Lili</h2>
                <p class="descripcion">Una apasionada por el diseño y la programación</p>
                <a href="portfolio.html">Ir a Portafolio</a>
            </div>
        </div>
    </section>
    `;
    containerNav.appendChild(navBar);
};


function selecionar(links){
var opciones = document.querySelectorAll('#links a');
opciones[0].className = "";
opciones[1].className = "";
opciones[2].className = "";
opciones[4].className = "";
links.className = "seleccionado"
  //desaparece el menu una vez seleccionada una opcion
var x = document.getElementById["nav"];
x.className = "";
}
//funciones que muestra el menú responsive
function responsiveMenu(){
var x = document.getElementById("nav");
if(x.className===""){
    x.className = "responsive";
}
else{
    x.className = ""
}
}



function main(){
const contenido = document.querySelector(".contenido");
    // console.log(contenedor);
    crearNav(contenido);
}

main();
