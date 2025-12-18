import time
import random
import threading

def consulta(id):
    t = random.randint(1,5)
    time.sleep(t)
    print(f"Consulta {id} en {t}s")

hilos = []
inicio = time.time()

for i in range(3):
    h = threading.Thread(target=consulta, args=(i+1,))
    h.start()
    hilos.append(h)

for h in hilos:
    h.join()

print("Tiempo total:", time.time() - inicio)