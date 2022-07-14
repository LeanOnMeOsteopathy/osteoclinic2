function guardar() {
 
    let n = document.getElementById("txtNombre").value
    let a = document.getElementById("txtApellido").value
    let c = document.getElementById("txtContacto").value
    let d = document.getElementById("txtDireccion").value
    let f = document.getElementById("txtFoto").value

 
    let osteopata = {
        nombre: n,
        apellido: a,
        contacto: c,
        direccion: d,
        foto: f
    }
    let url = "http://localhost:5000/osteopatas"
    var options = {
        body: JSON.stringify(osteopata),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
       // redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
 
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
}
