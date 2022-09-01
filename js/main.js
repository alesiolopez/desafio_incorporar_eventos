//creo y guardo en una variable al elemento con id btn_enviar
let boton = document.getElementById("btn_enviar");

//escucho al elemento y le aplico la función enviar.
boton.addEventListener("click", enviar);

//escucho el evento del teclado y si presiona TECLA ENTER activa la función enviar()
let input_producto = document.getElementById("producto");
input_producto.addEventListener("keydown", function(e){
    /* console.log(e.key); */
    if(e.key == "Enter"){
        enviar();
    }
});


//Creo la función "enviar", para poder realizar las acciones en el boton. Podría también crear un addEventListener e ingresar todo el código en la función anonima. O sea: boton.addEventListener("click", function(){...CODIGO...});
function enviar(){
    //se obtienen los elementos por ID y se guardan en una variable..
    let producto = document.getElementById('producto');
    let lista = document.getElementById('lista');

    //Se crea una condición por si no ingresa ningún caracter el usuario..
    if(producto.value == "" || producto.value == " "){
        let contenedor_notificacion = document.getElementById('notificacion');
        let notificacion = document.createElement("div");
        notificacion.className = "notificacion";
        notificacion.innerText = "Ingresar un artículo por favor.";
        contenedor_notificacion.append(notificacion);
    } else{
        //se crea los elementos deseados, en este caso un li y un button.
        let li = document.createElement("li");
        li.innerText = producto.value;
        li.className = "lista";
        lista.append(li);

        let boton_borrar = document.createElement("button");
        boton_borrar.innerText = "x";
        //se crea una función anónima para el button por si se quiere quitar un artículo. Y se dice que elimine el LI y el BUTTON.
        boton_borrar.onclick = function(){
            lista.removeChild(li);
            lista.removeChild(boton_borrar);
            document.getElementById('notificacion').innerText = "";
        }
        boton_borrar.className="btn-borrar";
        lista.append(boton_borrar);

        document.getElementById('producto').value = ""
        document.getElementById('notificacion').innerText = "";
    }
}