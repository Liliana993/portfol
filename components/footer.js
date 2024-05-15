function footer(contenido) {
    const footer = document.createElement("footer");
    footer.innerHTML = `
    <footer>
        <div class="arriba"><a href="#Inicio" class="arriba"><i class="fa-solid fa-angles-up"></i></a></div>
        <div class="redes">
        <a href="#"><i class="fa-brands fa-youtube"></i></a>
        <a href="#"><i class="fa-brands fa-facebook"></i></a>
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        </div>
        <p>&copy;Todos los derechos reservados - 2023</p>
    </footer>
    `;
    contenido.appendChild(footer);
};



function crearFooter(){
    const contenido = document.querySelector("footer")
    // console.log(contenedor);
    footer(contenido);
}

crearFooter();