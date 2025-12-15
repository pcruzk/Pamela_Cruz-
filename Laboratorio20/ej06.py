import numpy as np

def normalizar(lista, modo):
    v = np.array(lista, dtype=float)

    if modo == "minmax":
        return ((v - v.min()) / (v.max() - v.min())).tolist()

    elif modo == "zscore":
        return ((v - v.mean()) / v.std()).tolist()

    elif modo == "unit":
        return (v / np.linalg.norm(v)).tolist()

    else:
        raise ValueError("Modo inválido")

valores = [10, 20, 30]
print(normalizar(valores, "minmax"))
print(normalizar(valores, "zscore"))
print(normalizar(valores, "unit"))