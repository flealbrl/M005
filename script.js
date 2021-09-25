// A TAREFA PRECISA DE 4 CAMPOS.
// TITULO - PLATAFORMA - URL - DATA: 01.01.0001 - id: Date.now()

let form = document.querySelector('.js-section-add-form');

let listaFilmes = [];
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputTitulo = document.querySelector('.js-todo-input-titulo').value
    const inputGenero = document.querySelector('.js-todo-input-genero').value
    const inputUrl = document.querySelector('.js-todo-input-url').value
    const inputNota = document.querySelector('.js-todo-input-nota').value
    

const filme = {
    titulo: inputTitulo,
    genero: inputGenero,
    url: inputUrl,
    nota: inputNota
    }

    console.log(filme);

    listaFilmes.push(filme);


    const lista = document.querySelector('.game-list-js');
        listaFilmes.map((filme, index) => {
            lista.insertAdjacentHTML('beforeEnd', `
            <p class='li'>${filme.titulo}</p>
            <img class='li' src="${filme.url}">
            <p class='li'>${filme.genero}</p>
            <p class='li'>${filme.nota}</p>`
            );
    })
})
