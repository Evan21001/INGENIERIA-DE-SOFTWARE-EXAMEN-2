class GestorProductos:
    # EDITADO (Serie II / requisito): solo registrar y mostrar productos (YAGNI).
    # Se eliminaron v2, detallado, estadisticas, API externa y proceso_extra.

    def __init__(self):
        self.lista_productos = []

    def registrar_producto(self, nombre):
        # EDITADO: una sola operacion publica de alta; validacion sin duplicar (DRY/KISS).
        if self._nombre_es_invalido(nombre):
            return "Error"
        if not self._nombre_permitido(nombre):
            return "No valido"
        self.lista_productos.append(nombre)
        return "OK"

    def mostrar_productos(self):
        # EDITADO: unica operacion publica de salida en consola.
        for p in self.lista_productos:
            print("Producto:", p)

    def _nombre_es_invalido(self, nombre):
        return nombre is None or nombre == ""

    def _nombre_permitido(self, nombre):
        return nombre != "test"
