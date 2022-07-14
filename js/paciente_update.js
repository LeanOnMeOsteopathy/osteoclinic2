var args = location.search.substr(1).split('&');
// lee los argumentos pasados a este formulario
var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
}
console.log(args)
var re= /%20/;
document.getElementById("txtId").value = parts[0][1]
document.getElementById("txtNombre").value = parts[1][1].replace(re,' ')
document.getElementById("txtApellido").value = parts[2][1].replace(re,' ')
document.getElementById("txtContacto").value = parts[3][1].replace(re,' ')
document.getElementById("txtMail").value = parts[4][1]
 
function modificar() {
    let id = document.getElementById("txtId").value
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
    let url = "http://localhost:5000/pacientes/"+id
    var options = {
        body: JSON.stringify(paciente),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
            alert("Error al Modificar")
        })      
}
