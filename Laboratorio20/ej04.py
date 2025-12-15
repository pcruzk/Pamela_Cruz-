ingreso_mensual = float(input("Ingreso mensual: "))
ingreso_anual = ingreso_mensual * 14

tramos = [
    (20000, 0.0),
    (50000, 0.10),
    (100000, 0.20),
    (float("inf"), 0.30)
]

impuesto_total = 0
restante = ingreso_anual
limite_anterior = 0

for limite, tasa in tramos:
    if restante <= 0:
        break
    base = min(limite - limite_anterior, restante)
    impuesto = base * tasa
    impuesto_total += impuesto
    print(f"Tramo {limite_anterior} - {limite}: {impuesto}")
    restante -= base
    limite_anterior = limite

tasa_efectiva = (impuesto_total / ingreso_anual) * 100

print("Total impuesto:", impuesto_total)
print("Tasa efectiva:", tasa_efectiva, "%")