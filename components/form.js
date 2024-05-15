const optionsForm = {
    method: "POST",
    headers: {
        "Content-Type": "aplication/json",
    },
    body: {},
}

function crearFormulario(containerEl){
    const formulario = document.createElement("form");
    formulario.innerHTML = `
    <form class="form">
                <input type="text" placeholder="Tú nombre" id="nombre">
                <input type="text" placeholder="Email" id="email" required="lucia@gepex.com">
                <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje" id="mensaje"></textarea>
                <button type="submit" class="form__button">
                    Enviar Mensaje <i class="fa-solid fa-paper-plane"></i>
                </button>
                <p class="send"></p>
            </form>
            `;
        containerEl.appendChild(formulario);


        formulario.addEventListener("submit", (e) => {
            e.preventDefault();
            const nombre = document.querySelector("#nombre").value;
            const email = document.querySelector("#email").value;
            const mensaje = document.querySelectorAll("#mensaje").value;

            const body = {
                to: email,
                message: mensaje,
            };

            optionsForm.body = JSON.stringify(body);
            console.log(optionsForm);

            fetch("https://apx-api.vercel.app/api/utils/dwf", optionsForm)
            .then((response) => response.json())
            .then((response) => {
                const mensajeSend = document.querySelector(".send");
                mensajeSend.classList.add("Great");
                mensajeSend.textContent = "El mensaje se envio con éxito 😉.";
            })
            .catch((err) => {
                const mensajeSend = document.querySelector("send");
                mensajeSend.classList.add("error");
                mensajeSend.textContent = "El mensaje no pudo enviarse 🙁."
            });
        });
}

function main() { 
    const contenedor = document.querySelector(".form-section");
    // console.log(contenedor);
    crearFormulario(contenedor);
}

main();