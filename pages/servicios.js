function getDataServicios(){
    const dataServicios = fetch("https://cdn.contentful.com/spaces/h97gmenpgh3g/environments/master/entries?access_token=D0nUYBPOkOOKZvoqp7AmwunJXzPS3MwHPi0Der7egTc&&content_type=servicios")
    .then((r) => r.json())
    .then((d) => {return d})
    
    return dataServicios;
}

function viewDataServicios(d) {
    console.log(d)
    const template = document.querySelector("#tarjeta");
    const container = document.querySelector(".container");
    const templateNav = template.content;
    container.textContent = "";

    for (let i = 0; i <= 3; i++){

            const imgEl = templateNav.querySelector(".imagen-servicio")
            imgEl.src = d.includes.Asset[i].fields.file.url;

            const titleEl = templateNav.querySelector(".titulo-del-servicio")
            titleEl.textContent = d.items[i].fields.titulo; 
        
            const textEl = templateNav.querySelector(".descripcion-del-servicio")
            textEl.textContent = d.items[i].fields.descripcion;
            
            let clone = document.importNode(templateNav, true)
            container.appendChild(clone)
        }
    }

function showDataServicios(){
    const dataServicios = getDataServicios();

    dataServicios.then(r => viewDataServicios(r))
}


function main(){
    showDataServicios();
}

main();