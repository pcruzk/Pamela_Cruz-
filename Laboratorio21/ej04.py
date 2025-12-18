class Libro:
    def __init__(self, titulo, autor, año):
        self.titulo = titulo
        self.autor = autor
        self.año = año
        self.disponible = True

    def prestar(self):
        if self.disponible:
            self.disponible = False
            print(f"{self.titulo} prestado")
        else:
            print(f"{self.titulo} no está disponible")

    def devolver(self):
        self.disponible = True

class LibroDigital(Libro):
    def __init__(self, titulo, autor, año, formato, tamañoMB):
        super().__init__(titulo, autor, año)
        self.formato = formato
        self.tamañoMB = tamañoMB

    def prestar(self):
        print(f"{self.titulo} (digital) siempre disponible")

class Biblioteca:
    def __init__(self):
        self.libros = []

    def agregar_libro(self, libro):
        self.libros.append(libro)

    def listar(self):
        for l in self.libros:
            print(l.titulo, "-", "Disponible" if l.disponible else "Prestado")

    def buscar_autor(self, autor):
        for l in self.libros:
            if l.autor == autor:
                print(l.titulo)

    def prestar_libro(self, titulo):
        for l in self.libros:
            if l.titulo == titulo:
                l.prestar()
                return
        print("Libro no encontrado")


b = Biblioteca()

l1 = Libro("1984", "Orwell", 1949)
l2 = Libro("El Quijote", "Cervantes", 1605)
l3 = Libro("It", "Stephen King", 1986)

d1 = LibroDigital("Python Básico", "Autor X", 2023, "PDF", 5)
d2 = LibroDigital("Java Avanzado", "Autor Y", 2022, "EPUB", 7)

for libro in [l1, l2, l3, d1, d2]:
    b.agregar_libro(libro)

b.listar()
b.prestar_libro("1984")
b.prestar_libro("Python Básico")
b.prestar_libro("Python Básico")
b.prestar_libro("1984")
b.buscar_autor("Orwell")