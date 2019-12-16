import paho.mqtt.client as mqtt #import the client1

broker_address="localhost" 


#Instanciacao do cliente mqtt - two_wasinho
print("creating new instance")
led = mqtt.Client("LED") 



#Conexao do cliente com o broker mqtt
print("connecting to broker")
led.connect(broker_address)  

led.publish("arduino/led","LED-1")
print("ligou o led")