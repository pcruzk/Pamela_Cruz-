"""TEXTO"""

with open("origen.txt", "r") as f1:
    contenido = f1.read()

with open("destino.txt", "w") as f2:
    f2.write(contenido)

""""BINARIO"""

with open("foto.jpg", "rb") as f1:
    data = f1.read()

with open("copia.jpg", "wb") as f2:
    f2.write(data)
