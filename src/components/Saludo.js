function Saludo(props) {
    var dato = "Mañana sera miercoles...";
    const { nombre , edad } = props;
    return (<div>
                <h1>Mi primer martes de React</h1>
                <h2>Otro mensaje de que solo se puede devolver una sola etiqueta HTML</h2>
                <p>{dato}</p>
                <p>Nombre: {nombre}, edad: {edad}</p>
            </div>)
}

export default Saludo;