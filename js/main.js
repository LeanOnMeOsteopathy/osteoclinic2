/*
let cad=""
for(let i=0; i<fotos.length; i++){
   cad=cad+ `<img src="${fotos[i]}" alt="foto">`
}
document.getElementById("fotos").innerHTML=cad
*/
var cad=`
<div class="osteopatas">
`
    for(let i=0; i< data.length ; i++){
      cad += 
        `
        <div class="ficha">
            <img width=300 src="${data[i].image}" alt="foto">
            <div class="osteopata">
                <h3>Nombre: ${data[i].nombre}</h3>
                <h3>Apellido: ${data[i].apellido}</h3>
                <p>Contacto: ${data[i].contacto} </p>
                <p>Direccion:<br><iframe src="${data[i].direccion}"  width="250" height="210" style="border:0;" allowfullscreen="" loading="lazy"></iframe> </p>
            </div>
        </div>
       `
    }       
cad+=`
    </div>
`    
document.getElementById("fotos").innerHTML=cad


