from app import db,ma

class Paciente(db.Model):  # defino la tabla
    id=db.Column(db.Integer, primary_key=True)
    nombre=db.Column(db.String(50))
    apellido=db.Column(db.String(50))
    contacto=db.Column(db.String(20))
    mail=db.Column(db.String(100))

    def __init__(self,nombre,apellido,contacto,mail):
        self.nombre=nombre
        self.apellido=apellido
        self.contacto=contacto
        self.mail=mail
    
    def __str__(self) :
        return "id:"+str(self.id)+" nombre:"+ self.nombre+" apellido:"+ self.apellido

db.create_all()  # crea las tablas 

class PacienteSchema(ma.Schema):
    class Meta:
        fields=('id','nombre', 'apellido','contacto','mail')
 
paciente_schema=PacienteSchema()           # para  un registro
pacientes_schema=PacienteSchema(many=True)  # multiples registros

