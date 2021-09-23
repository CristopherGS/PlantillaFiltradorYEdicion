// async function API() {
//     const jason = await fetch('https://proyecto-gloasario-default-rtdb.firebaseio.com/Glosario/glosario.json')
//     const res = await jason.json()
//     // const resultados = await res.
//     // res.forEach(ress => console.log(ress.id))
//     console.log(res)

// }

//OTRA MANERA DE HACER LA CONSULTA
let requestURL = "https://glosary-67e77-default-rtdb.firebaseio.com/glosario.json"
let request = new XMLHttpRequest()
request.open("GET", requestURL)
request.responseType = "text"
request.onload = function () {
  const textoGlosario = request.response
  //console.log(textoGlosario)
  const superHeroes = JSON.parse(textoGlosario)
  //console.log(superHeroes.length)
  //console.log(superHeroes[0].correo)
  superHeroes.forEach(element => console.log(element))
  TrabajandoDOM(superHeroes.length, superHeroes)
}
request.send()
function TrabajandoDOM(size, jsonFile){
  const myNode = document.getElementById("glosary");//remove all the child components of the div glosary
  myNode.textContent = '';//it's like system.clear("") in Java
  div = document.getElementById("glosary")
  for(let i = 0; i < size; i++){
    box = document.createElement("div")
    box.setAttribute("id", "Box");
    let title = document.createElement("H2")
    let content = document.createTextNode(jsonFile[i].titulo)
    title.appendChild(content)
    div.appendChild(title)
  }
}