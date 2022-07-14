from app import *
from modelos.paciente_modelo import *

@app.route('/pacientes',methods=['GET'])
def get_pacientes():
    all_pacientes=Paciente.query.all()   # es una lista
    result=pacientes_schema.dump(all_pacientes)
    print(result)
    return jsonify(result)
 
@app.route('/pacientes/<id>',methods=['GET'])
def get_paciente(id):
    paciente=Paciente.query.get(id)
    return paciente_schema.jsonify(paciente)

@app.route('/pacientes', methods=['POST']) # crea ruta o endpoint
def create_paciente():
    #print(request.json)  # request.json contiene el json que envio el cliente
    nombre=request.json['nombre']
    apellido=request.json['apellido']
    contacto=request.json['contacto']
    mail=request.json['mail']
    
    new_paciente=Paciente(nombre,apellido,contacto,mail)
    db.session.add(new_paciente)
    db.session.commit()
    return paciente_schema.jsonify(new_paciente)


@app.route('/pacientes/<id>' ,methods=['PUT'])
def update_paciente(id):
    paciente=Paciente.query.get(id)   
    nombre=request.json['nombre']
    apellido=request.json['apellido']
    contacto=request.json['contacto']
    mail=request.json['mail']

 
    paciente.nombre=nombre
    paciente.apellido=apellido
    paciente.contacto=contacto
    paciente.direccion=mail

    db.session.commit()
    return paciente_schema.jsonify(paciente)
 
@app.route('/pacientes/<id>',methods=['DELETE'])
def delete_paciente(id):
    paciente=Paciente.query.get(id)
    db.session.delete(paciente)
    db.session.commit()
    return paciente_schema.jsonify(paciente)
