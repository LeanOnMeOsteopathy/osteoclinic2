var cad = `
<h1>La cocina de Juan Web</h1>
    <nav class="navbar navbar-expand-md bg-dark navbar-dark">
      <a class="navbar-brand" href="index.html">Home</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">

          <li class="nav-item">
            <a class="nav-link" href="about.html">Acerda de</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact.html">Contacto</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="location.html">Sucursal</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="form.html">Registrarse</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="NuestrosProductos.html">Nuestros Productos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="Productos.html">Productos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="Subtipos.html">Subtipos</a>
          </li>
        </ul>
    </nav>
`
document.getElementById("idheader").innerHTML = cad
cad = `
    <a class="redsoc" href="https://www.twitter.com" target="_blank"><i class="fa fa-twitter"
        aria-hidden="true"></i></a>
    <a class="redsoc" href="https://www.facebook.com/marcela.cerda.9" target="_blank"><i class="fa fa-facebook"
        aria-hidden="true"></i></a>
    <a class="redsoc" href="https://www.pinterest" target="_blank"><i class="fa fa-pinterest"
        aria-hidden="true"></i></a>
    <a class="redsoc" href="https://www.instagram.com/marcela.ines.cerda/" target="_blank"><i class="fa fa-instagram"
        aria-hidden="true"></i></a>
    <a class="redsoc" href="https://www.linkedin.com/in/marcela-cerd%C3%A1-678b05196/" target="_blank"><i
        class="fa fa-linkedin" aria-hidden="true"></i></a>
    <p>Derechos reservados @2021 </p>  
`
document.getElementById("idfooter").innerHTML = cad

function guardarSubtipo() {

  let d = document.getElementById("txtDescripcion").value
  
  let producto = {
      descripcion:d,
  }
  let url = "http://127.0.0.1:5000/subtipos"

  var options = {
      body: JSON.stringify(producto),
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
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
function guardarProducto() {

  let n = document.getElementById("txtNombre").value
  let d = document.getElementById("txtDescripcion").value
  let su = parseInt(document.getElementById("txtSubtipo").value)
  let p = parseFloat(document.getElementById("txtPrecio").value)
  let s = parseInt(document.getElementById("txtStock").value)
  let f = document.getElementById("txtFoto").value
  
  let producto = {
      nombre: n,
      descripcion:d,
      subtipo:su,
      precio: p,
      stock: s,
      foto:f
  }
  let url = "http://127.0.0.1:5000/productos"

  var options = {
  body: JSON.stringify(producto),
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



 
function modificarProductos() {
  let id = document.getElementById("txtId").value
  let n = document.getElementById("txtNombre").value
  let d = document.getElementById("txtDescripcion").value
  let su = parseInt(document.getElementById("txtSubtipo").value)
  
  let p = parseFloat(document.getElementById("txtPrecio").value)
  let s = parseInt(document.getElementById("txtStock").value)
  let f =document.getElementById("txtFoto").value
  
  
  let producto = {
      nombre: n,
      descripcion:d,
      subtipo:su,
      precio: p,
      stock: s,
      foto:f
  }
 // let url = "http://192.168.1.115:8080/productos/"+id
  let url = "http://localhost:5000/productos/"+id
  var options = {
      body: JSON.stringify(producto),
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      //redirect: 'follow'
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
 
function modificarSubtipo() {
  let id = document.getElementById("txtId").value
  let d = document.getElementById("txtDescripcion").value
  
  
  let subtipo = {
      descripcion:d
  }
  let url = "http://localhost:5000/subtipos/"+id
  var options = {
      body: JSON.stringify(subtipo),
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      //redirect: 'follow'
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

