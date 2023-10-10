const d = document,
$form = d.querySelector('form');

const ajax = (options) => {
    let {url, method, success, error, data} = options;
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", e => {
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {
            let json = JSON.parse(xhr.responseText);
            success(json);
        }else {
            let message = xhr.statusText || "Ups... Ocurrio un error";
            error(`Error ${xhr.status}: ${message}`);
        }

    });

    xhr.open(method || "GET", url);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(data));

}

d.addEventListener("submit", e => {
    if (e.target === $form) {
        e.preventDefault();
        if (e.target) {
            ajax({
                url: "http://localhost:3000/usuarios",
                method: "POST",
                success:(res) => location.reload(),
                error:() => $form.insertAdjacentHTML("afterend",`<p><b>${err}</b></p>`),
                data:{
                    nombre:e.target.nombre.value,
                    nombreUsuario:e.target.usuario.value,
                    email:e.target.correo.value,
                    password:e.target.password.value
                } 
            });
        }
    }
});
