function Metodos() {
    var ejemplo = "Soy una variable de ejemplo...";
    var estilo = {
        color: "red" ,
        backgroundColor: "black"
    }

    //CREAMOS UN MÉTODO/ACCION
    const mostrarMensaje = () => {
        console.log("boton pulsado...");
        ejemplo = "NUEVO VALOR!!";
        console.log(ejemplo);
    }

    const dobleNumero = (numero) => {
        var doble = numero * 2;
        console.log(doble);
    }

    return (<div>
        <h1 style={estilo}>Ejemplos de métodos</h1>
        <p style={{color: "blue"}}>{ejemplo}</p>
        <button onClick={ () => dobleNumero(7) }>Doble de 7</button>
        <button onClick={ () => mostrarMensaje() }>Mostrar mensaje</button>
    </div>)
}

export default Metodos;