function guardar() {
 
    let n = document.getElementById("txtNombre").value
    let a = document.getElementById("txtApellido").value
    let c = document.getElementById("txtContacto").value
    let m = document.getElementById("txtMail").value

 
    let paciente = {
        nombre: n,
        apellido: a,
        contacto: c,
        mail: m
    }
    let url = "http://localhost:5000/pacientes"
    var options = {
        body: JSON.stringify(paciente),
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
