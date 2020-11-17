export class Articulo{

    id:number;
    nombre:string;
    imagen: string;
    descripcion:string;
    color: string;
    talla:string;
    cantidad:number;
    rebaja:boolean;
    precioOriginal:number;
    precioRebaja:number;
    importe:number;

    constructor(id:number, nombre:string, imagen:string, descripcion:string, rebaja:boolean, precioOriginal:number, precioRebaja:number, color:string, talla:string, cantidad:number){
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
        if(rebaja)
            this.importe = precioRebaja * cantidad;
        else
            this.importe = precioOriginal * cantidad;
    }
}