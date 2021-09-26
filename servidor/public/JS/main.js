















// const $plantilla = document.getElementById('template').content
// const $fragmento = document.createDocumentFragment()
// const $contene = document.getElementById('contenido')

// async function API() {
//     const jason = await fetch('https://proyecto-gloasario-default-rtdb.firebaseio.com/usuarios.json')
//     const res = await jason.json()
//     // en la api me redirecciono al arreglo de resultados
//     const resultados = await res.results
//     res.forEach(ress => {

//         const copiar = $plantilla.cloneNode(true)

//         copiar.querySelector('.card-header').textContent = ress.correo

//         copiar.querySelector(".card-title").textContent = ress.nombre

//         copiar.querySelector(".card-text").textContent = ress.contraseña

//         $fragmento.appendChild(copiar)
//     });

//     $contene.appendChild($fragmento)


// }

// API()