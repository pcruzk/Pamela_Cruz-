class OperadorInvalido(Exception):
    pass

operacion = input("Ingrese operación (ej: 10 / 2): ")

try:
    a, op, b = operacion.split()
    a = float(a)
    b = float(b)

    if op == "+":
        print(a + b)
    elif op == "-":
        print(a - b)
    elif op == "*":
        print(a * b)
    elif op == "/":
        if b == 0:
            raise ZeroDivisionError
        print(a / b)
    else:
        raise OperadorInvalido("Operador no válido")

except ValueError:
    print("Valores inválidos")
except ZeroDivisionError:
    print("No se puede dividir entre cero")
except OperadorInvalido as e:
    print(e)