from wsgiref.simple_server import make_server
import json

libros = []
contador = 1

def app(environ, start_response):
    global contador
    path = environ["PATH_INFO"]
    metodo = environ["REQUEST_METHOD"]

    # GET /libros
    if metodo == "GET" and path == "/libros":
        start_response("200 OK", [("Content-Type", "application/json")])
        return [json.dumps(libros).encode()]

    # POST /libros
    if metodo == "POST" and path == "/libros":
        length = int(environ.get("CONTENT_LENGTH", 0))
        body = environ["wsgi.input"].read(length)
        data = json.loads(body)

        libro = {
            "id": contador,
            "titulo": data["titulo"],
            "autor": data["autor"],
            "anio": data["anio"]
        }
        contador += 1
        libros.append(libro)

        start_response("201 Created", [("Content-Type", "application/json")])
        return [json.dumps(libro).encode()]

    # GET /libros/<id>
    if metodo == "GET" and path.startswith("/libros/"):
        id_buscar = int(path.split("/")[-1])
        for l in libros:
            if l["id"] == id_buscar:
                start_response("200 OK", [("Content-Type", "application/json")])
                return [json.dumps(l).encode()]

        start_response("404 Not Found", [("Content-Type", "text/plain")])
        return [b"Libro no encontrado"]

    start_response("404 Not Found", [("Content-Type", "text/plain")])
    return [b"Ruta no encontrada"]

server = make_server("localhost", 8000, app)
server.serve_forever()