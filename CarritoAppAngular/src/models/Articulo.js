"use strict";
exports.__esModule = true;
exports.Articulo = void 0;
var Articulo = /** @class */ (function () {
    function Articulo(id, nombre, imagen, descripcion, rebaja, precioOriginal, precioRebaja, color, talla, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.color = color;
        this.talla = talla;
        this.cantidad = cantidad;
        this.rebaja = rebaja;
        this.precioOriginal = precioOriginal;
        this.precioRebaja = precioRebaja;
        if (rebaja)
            this.importe = precioRebaja * cantidad;
        else
            this.importe = precioOriginal * cantidad;
    }
    return Articulo;
}());
exports.Articulo = Articulo;
