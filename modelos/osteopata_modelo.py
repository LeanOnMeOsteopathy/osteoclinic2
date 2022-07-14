from app import db,ma

class Osteopata(db.Model):  # defino la tabla
    id=db.Column(db.Integer, primary_key=True)
    nombre=db.Column(db.String(100))
    apellido=db.Column(db.String(100))
    contacto=db.Column(db.String(20))
    direccion=db.Column(db.String(150))
    foto=db.Column(db.String(255))

    def __init__(self,nombre,apellido,contacto,direccion,foto):
        self.nombre=nombre
        self.apellido=apellido
        self.contacto=contacto
        self.direccion=direccion
        self.foto=foto

db.create_all()  # crea las tablas 

class OsteopataSchema(ma.Schema):
    class Meta:
        fields=('id','nombre', 'apellido','contacto','direccion','foto')
 
osteopata_schema=OsteopataSchema()            # para crear un producto
osteopatas_schema=OsteopataSchema(many=True)  # multiples registros
