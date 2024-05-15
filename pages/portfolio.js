function getDataWork(){
  const dataWork = fetch("https://cdn.contentful.com/spaces/h97gmenpgh3g/environments/master/entries?access_token=D0nUYBPOkOOKZvoqp7AmwunJXzPS3MwHPi0Der7egTc&&content_type=work")
  .then((r) => r.json())
  .then((d) => {return d})
  
  return dataWork;
}

function viewDataWork(d) {
  console.log(d)
  const template = document.querySelector("#tarjetas");
  const container = document.querySelector(".contenido-container");
  const templateNav = template.content;
  container.textContent = "";

  for (let i = 0; i <= 4; i++){

          const imgEl = templateNav.querySelector(".imagen-work")
          imgEl.src = d.includes.Asset[i].fields.file.url;

          const titleEl = templateNav.querySelector(".titulo-del-work")
          titleEl.textContent = d.items[i].fields.titulo; 
      
          const textEl = templateNav.querySelector(".descripcion-del-work")
          textEl.textContent = d.items[i].fields.descripcion;
          
          let clone = document.importNode(templateNav, true)
          container.appendChild(clone)
      }
  }

function showDataWork(){
  const dataWork = getDataWork();

  dataWork.then(r => viewDataWork(r))
}


function main(){
  showDataWork();
}

main();