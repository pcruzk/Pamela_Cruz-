import json

equipos = [
    {"nombre": "Alianza Lima", "pais": "Perú", "nivelAtaque": 80, "nivelDefensa": 75},
    {"nombre": "Boca Juniors", "pais": "Argentina", "nivelAtaque": 85, "nivelDefensa": 80}
]

json_texto = json.dumps(equipos, indent=4)
print(json_texto)