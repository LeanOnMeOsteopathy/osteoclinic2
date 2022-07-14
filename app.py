from flask import Flask ,jsonify,request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS

app=Flask(__name__)   #creamos el objeto app
CORS(app)     # soluciona el error cuando el frontend accede a los endpoint que genera el backend

#app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://sql10458898:GsTkef6QdP@sql10.freesqldatabase.com/sql10458898'
#app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://root:ZAQxsw234@localhost/leanonme'
app.config['SQLALCHEMY_DATABASE_URI']='sql10506205://sql10506205:RLNauP7g2f@sql10.freesqldatabase.com/sql10506205'
#                                          usuario:clave@localhost/nombreBaseDeDAtos

app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
db= SQLAlchemy(app)
ma=Marshmallow(app)

from controladores.osteopata_controlador import *

from controladores.paciente_controlador import *


# programa principal
if __name__=='__main__': 
       app.run(debug=True, port=5000) 
       