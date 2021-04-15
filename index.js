window.onload = async () => {
    const datanoticias = await fetch("http://demo6497253.mockable.io/noticias");
    const jsonNoticas = await datanoticias.json();
    const noticias = document.getElementById("noticias");
    let html = "";
    jsonNoticas.forEach((noticia, indice) => {
        console.log(noticia)
        html += `<div class="mb-4 text-decoration-none" >`;
        if (indice == 0) {
            html += `<img class="container" src="" alt="">`;
        }
        html += `<div class="d-flex d-sm-flex align-items-center">
                <h4 class="text-blue mr-2">${noticia.titulo} </h4>
                <p class="text-blue">${noticia.fecha}</p>
            </div>
                <p class="border p-2">${noticia.descripcion}
            </p>
            <a href="vernoticia.html?id=1">Ver mas</a>
        </div>`;
        noticias.innerHTML += html;
    });
}
