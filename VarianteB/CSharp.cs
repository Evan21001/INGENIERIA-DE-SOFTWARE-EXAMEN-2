using System;
using System.Collections.Generic;

public class GestorProductos
{
    // SERIE II — YAGNI: el enunciado exige solo RegistrarProducto y MostrarProductos.
    // CAMBIO: se eliminaron AgregarProductoV2, MostrarProductosDetallado, GenerarEstadisticas,
    // SincronizarApiExterna, ProcesoExtra y la lista historial; no son parte del requisito.

    private List<string> lista_productos = new List<string>();

    public string RegistrarProducto(string nombre)
    {
        // SERIE II — DRY + KISS: un solo metodo publico de alta (antes AgregarProducto y
        // AgregarProductoV2 duplicaban comportamiento). Sin validaciones duplicadas ni ifs profundos.
        if (NombreEsInvalido(nombre))
        {
            return "Error";
        }
        if (!NombrePermitido(nombre))
        {
            return "No valido";
        }
        lista_productos.Add(nombre);
        return "OK";
    }

    public void MostrarProductos()
    {
        // SERIE II — DRY: unico listado en consola (antes MostrarProductos y
        // MostrarProductosDetallado eran equivalentes).
        foreach (var p in lista_productos)
        {
            Console.WriteLine("Producto: " + p);
        }
    }

    private bool NombreEsInvalido(string nombre)
    {
        // SERIE II — DRY + KISS: validacion de nombre vacio/nulo centralizada
        // (antes se repetia la comparacion con "" y habia anidacion innecesaria).
        return string.IsNullOrEmpty(nombre);
    }

    private bool NombrePermitido(string nombre)
    {
        // SERIE II — KISS: regla explicita; antes estaba mezclada en ValidacionAvanzada con muchos if.
        return nombre != "test";
    }
}
