//menu lateral
var menu_visible = false; //objeto global, todo va a trabajar o (anidar(juntar)) sobre ese objeto ejemplo, global({{{codigo}}})global
let menu = document.getElementById("nav"); //el let se va a usar para tener una informacion que cuando vos quieras podes cambiar su valor
function mostrarOcultarMenu(){
   if(menu_visible==false){//si esta oculto // if quiere decir o preguntar "si" a algo...
      menu.style.display = "block";//menu . va a convocar el propiedad(css) style + el prop display(css)// en este caso menu+style+display = "block"
      menu_visible=true;
   }else{ // y el else es "de lo contrario"
      menu.style.display = "none";
      menu_visible = false;
   }
}

//ocult el menu una vez seleccionada la opcion
let links = document.querySelectorAll("nav a");//este let se crea otra memoria y se almazena en el links// pero cambiando el valor de document de arriba // como vimos arriba a let le podes cambaiar su valor
for (var x = 0; x<links.length; x++){ //recorre todos los elementos de links desde la posicion 0
   links[x].onclick = function(){ //x al estar en un array en este caso pasa un "str" a "number" al hacer un click en este caso 0 que en bulueano signifique false
      menu.style.display = "none";//entonces al hacer click llamas la funsion else de arriba
      menu_visible = false;
   }
}

