function crearSection(container){
    const presentacion = document.createElement("section");
        presentacion.innerHTML = `
        <section id="sobremi">
        <div class="contenedor-foto">
            <img src="assets/img/foto2.jpg" alt="">
        </div>
        <div class="sobremi">
            <p class="titulo-seccion">Sobre Mi</p>
            <h2>Hola, soy <span>Liliana Escobar</span></h2>
            <p>Puedo decirte que siempre me gusto todo lo relacionado con el mundo digital. Hace meses comence a estudiar de manera autodidacta y actualmente me encuentro cursando programación en Alura.
                <br> Busco aprender constantemente sobre esta profesión. Me encanta desafiarme con nuevos retos que me permitan crecer como desarrolladora. </p>
                
                <a href="portfolio.html">Linkedin <i class="fa-brands fa-linkedin"></i></a>
        </div>
    </section>
    `;
    container.appendChild(presentacion);
};

function main(){
    const contene = document.querySelector(".sobremi");
        
        crearSection(contene);
    }
    
    main();