//arreglo donde se almacenan los colores
//se pueden ir agredando colores en 'Ingles'
let colors = ['blue', 'yellow', 'black', 'red', 'brown', 'orange','purple','skyblue','pink','golden','gray','green'];

//get button
let button = document.getElementById('button');

const nombre =document.querySelector('#nombre')

button.addEventListener('click', function(){
    //arreglo para colores random
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    //get container
    let container = document.getElementById('container');
    
    container.style.background = randomColor;
    nombre.textContent = randomColor

    //el nombre de cada color se presentara en consolas

    console.log(randomColor)

})