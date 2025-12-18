from wsgiref.simple_server import make_server
import json, os, mimetypes
from urllib.parse import unquote

STATIC_DIR = "static"
equipos = []
contador = 1

def servir_estatico(path):
    file_path = path.lstrip("/")
    full_path = os.path.join(STATIC_DIR, file_path.replace("static/", ""))

    if not os.path.isfile(full_path):
        return None, None

    content_type, _ = mimetypes.guess_type(full_path)
    if content_type is None:
        content_type = "application/octet-stream"

    with open(full_path, "rb") as f:
        return f.read(), content_type

def app(environ, start_response):
    global contador
    metodo = environ["REQUEST_METHOD"]
    path = unquote(environ["PATH_INFO"])

    # Archivos estáticos
    if path.startswith("/static/"):
        contenido, tipo = servir_estatico(path)
        if contenido is None:
            start_response("404 Not Found", [])
            return [b"Archivo no encontrado"]
        start_response("200 OK", [("Content-Type", tipo)])
        return [contenido]

    # GET /equipos
    if metodo == "GET" and path == "/equipos":
        start_response("200 OK", [("Content-Type", "application/json")])
        return [json.dumps(equipos).encode()]

    # POST /equipos
    if metodo == "POST" and path == "/equipos":
        length = int(environ.get("CONTENT_LENGTH", 0))
        body = environ["wsgi.input"].read(length)
        data = json.loads(body)

        equipo = {
            "id": contador,
            "nombre": data["nombre"],
            "ciudad": data["ciudad"],
            "nivelAtaque": data["nivelAtaque"],
            "nivelDefensa": data["nivelDefensa"]
        }
        contador += 1
        equipos.append(equipo)

        start_response("201 Created", [("Content-Type", "application/json")])
        return [json.dumps(equipo).encode()]

    # GET /equipos/<id>
    if metodo == "GET" and path.startswith("/equipos/"):
        id_buscar = int(path.split("/")[-1])
        for e in equipos:
            if e["id"] == id_buscar:
                start_response("200 OK", [("Content-Type", "application/json")])
                return [json.dumps(e).encode()]

        start_response("404 Not Found", [])
        return [b"Equipo no encontrado"]

    start_response("404 Not Found", [])
    return [b"Ruta no encontrada"]

server = make_server("localhost", 8000, app)
server.serve_forever()