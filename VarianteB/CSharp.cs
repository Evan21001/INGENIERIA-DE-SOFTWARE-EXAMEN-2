using System;
using System.Collections.Generic;

public class GestorProductos
{
    // EDITADO (Serie II / requisito): solo RegistrarProducto y MostrarProductos (YAGNI).

    private List<string> lista_productos = new List<string>();

    public string RegistrarProducto(string nombre)
    {
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
        foreach (var p in lista_productos)
        {
            Console.WriteLine("Producto: " + p);
        }
    }

    private bool NombreEsInvalido(string nombre)
    {
        return string.IsNullOrEmpty(nombre);
    }

    private bool NombrePermitido(string nombre)
    {
        return nombre != "test";
    }
}
