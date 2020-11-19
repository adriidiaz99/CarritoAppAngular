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
            this.importe = Number.parseFloat((precioRebaja * cantidad).toFixed(2));
        else
            this.importe = Number.parseFloat((precioOriginal * cantidad).toFixed(2));
    }
    Articulo.prototype.incrementarCantidad = function () {
        this.cantidad++;
    };
    Articulo.prototype.decrementarCantidad = function () {
        this.cantidad--;
    };
    Articulo.prototype.calcularImporte = function () {
        if (this.rebaja) {
            this.importe = Number.parseFloat((this.precioRebaja * this.cantidad).toFixed(2));
        }
        else {
            this.importe = Number.parseFloat((this.precioOriginal * this.cantidad).toFixed(2));
        }
    };
    return Articulo;
}());
exports.Articulo = Articulo;
