import paho.mqtt.client as mqtt #import the client1
import psycopg2
import os
import time
from datetime import datetime

#Conecta com o banco de dados

conn = psycopg2.connect("dbname='terc' user='postgres' host='localhost' password='sql'")
cur = conn.cursor()

def on_message(client, userdata, message):
    print(message.topic + " - " + str(message.payload.decode("utf-8")))
    if(message.topic == "arduino/sensor"):
        print(message.topic + " - " + str(message.payload.decode("utf-8"))+" - " + str(datetime.now().time())) 
        global cur
        cur.execute("INSERT INTO registros  VALUES ("+str(message.payload.decode("utf-8"))+",\'"+str(datetime.now().time())+"\')")
        conn.commit()
    
#Ip da maquina do simite (monitor de redes) 10.208.3.226
broker_address="localhost" 


#Instanciacao do cliente mqtt - two_wasinho
print("creating new instance")
client = mqtt.Client("two_wasinho") 



#Conexao do cliente com o broker mqtt
print("connecting to broker")
client.connect(broker_address)  



#Sobreposicao da funcao on_message da classe client
client.on_message=on_message #attach function to callback


#Inscricao no topico "arduino/led"
print("Subscribing to topic","arduino/led")
print("Subscribing to topic","arduino/sensor")
client.subscribe("arduino/led")
client.subscribe("arduino/sensor")

client.loop_forever()

#Teste dos cara
#loop para escutar o canal
