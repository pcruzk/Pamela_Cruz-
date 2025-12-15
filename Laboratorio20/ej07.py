estudiantes = []

def agregar():
    nombre = input("Nombre: ")
    edad = int(input("Edad: "))
    promedio = float(input("Promedio: "))
    estudiantes.append({"nombre": nombre, "edad": edad, "promedio": promedio})

def mostrar():
    for e in estudiantes:
        print(e)

def mejor():
    if estudiantes:
        m = max(estudiantes, key=lambda x: x["promedio"])
        print("Mejor promedio:", m)

def buscar():
    nombre = input("Nombre a buscar: ")
    for e in estudiantes:
        if e["nombre"].lower() == nombre.lower():
            print(e)
            return
    print("No encontrado")

def eliminar():
    nombre = input("Nombre a eliminar: ")
    global estudiantes
    estudiantes = [e for e in estudiantes if e["nombre"].lower() != nombre.lower()]

while True:
    print("\n1.Agregar 2.Mostrar 3.Mejor 4.Buscar 5.Eliminar 6.Salir")
    op = input("Opción: ")

    if op == "1":
        agregar()
    elif op == "2":
        mostrar()
    elif op == "3":
        mejor()
    elif op == "4":
        buscar()
    elif op == "5":
        eliminar()
    elif op == "6":
        break