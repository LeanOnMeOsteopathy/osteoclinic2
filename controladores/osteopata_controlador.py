from app import *
from modelos.osteopata_modelo import *

@app.route('/osteopatas',methods=['GET'])
def get_Osteopatas():
    all_osteopatas=Osteopata.query.all()   # es una lista
    result=osteopatas_schema.dump(all_osteopatas)
    return jsonify(result)
 
@app.route('/osteopatas/<id>',methods=['GET'])
def get_osteopata(id):
    osteopata= Osteopata.query.get(id)
    return osteopata_schema.jsonify(osteopata)

@app.route('/osteopatas', methods=['POST']) # crea ruta o endpoint
def create_osteopata():
    #print(request.json)  # request.json contiene el json que envio el cliente
    nombre=request.json['nombre']
    apellido=request.json['apellido']
    contacto=request.json['contacto']
    direccion=request.json['direccion']
    foto=request.json['foto']

    new_osteopata=Osteopata(nombre,apellido,contacto,direccion,foto)
    db.session.add(new_osteopata)
    db.session.commit()
    return osteopata_schema.jsonify(new_osteopata)


@app.route('/osteopatas/<id>' ,methods=['PUT'])
def update_osteopata(id):
    osteopata=Osteopata.query.get(id)   
   
    nombre=request.json['nombre']
    apellido=request.json['apellido']
    contacto=request.json['contacto']
    direccion=request.json['direccion']
    foto=request.json['foto']
 
    osteopata.nombre=nombre
    osteopata.apellido=apellido
    osteopata.contacto=contacto
    osteopata.direccion=direccion
    osteopata.foto=foto
    
    db.session.commit()
    return osteopata_schema.jsonify(osteopata)
 

@app.route('/osteopatas/<id>',methods=['DELETE'])
def delete_osteopata(id):
    osteopata=Osteopata.query.get(id)
    db.session.delete(osteopata)
    db.session.commit()
    return osteopata_schema.jsonify(osteopata)
