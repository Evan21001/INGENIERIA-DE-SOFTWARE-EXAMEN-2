class GestorProductos:
    # SERIE II — YAGNI: el enunciado pide solo registrar y mostrar productos.
    # CAMBIO: se eliminaron agregar_producto_v2, mostrar_productos_detallado,
    # generar_estadisticas, sincronizar_api_externa, proceso_extra y el historial;
    # no forman parte del requisito.

    def __init__(self):
        # CAMBIO (YAGNI): solo se mantiene la lista de productos; se quito self.historial.
        self.lista_productos = []

    def registrar_producto(self, nombre):
        # SERIE II — DRY + KISS: un solo metodo publico de alta (antes habia agregar_producto
        # y agregar_producto_v2 con logica repetida). Validacion en helpers privados, sin ifs anidados.
        if self._nombre_es_invalido(nombre):
            return "Error"
        if not self._nombre_permitido(nombre):
            return "No valido"
        self.lista_productos.append(nombre)
        return "OK"

    def mostrar_productos(self):
        # SERIE II — DRY: unico listado en consola (antes mostrar_productos y
        # mostrar_productos_detallado hacian lo mismo).
        for p in self.lista_productos:
            print("Producto:", p)

    def _nombre_es_invalido(self, nombre):
        # SERIE II — DRY + KISS: regla "vacio o None" en un solo lugar (antes se repetia
        # el chequeo de cadena vacia y habia anidacion redundante).
        return nombre is None or nombre == ""

    def _nombre_permitido(self, nombre):
        # SERIE II — KISS: regla de negocio simple y legible (nombre reservado "test").
        return nombre != "test"
